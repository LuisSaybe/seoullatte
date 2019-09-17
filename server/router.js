import Ajv from 'ajv';
import jwt from 'jsonwebtoken';
import mongodb from 'mongodb';
import stripe from 'stripe';
import jwtkeysecret from 'server/extra/jwt/jwt.key';

import { Routes } from 'common/routes';

import { OrganizationCollection, UserCollection } from 'server/database';
import { settings } from 'server/settings';

export const DEFAULT_LIMIT = 100;
export const LIMIT_MAX = 100;

export class Require {
  static Authenticated = 'authenticated';
  static Page = 'page';
}

export class Permission {
  static READ = 0;
  static WRITE = 1;
}

const PAGINATION_ERROR = { error: 'pagination' };

const decodedJWTFromRequest = (req) => {
  return new Promise((resolve, reject) => {
    if (req.headers.authorization) {
      if (req.headers.authorization.startsWith('Bearer ')) {
        const token = req.headers.authorization.substring('Bearer '.length);
        Router.getJWT(token).then(resolve, reject);
      } else {
        resolve(null);
      }
    } else {
      resolve(null);
    }
  });
};

export class Router {
  constructor(application, sentry, db, SibApiV3Sdk, T) {
    this.application = application;
    this.sentry = sentry;
    this.db = db;
    this.SibApiV3Sdk = SibApiV3Sdk;
    this.T = T;
    this.ajv = new Ajv();
    this.ajv.addFormat('objectid', /^[a-f\d]{24}$/i);
  }

  static getJWT(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, jwtkeysecret, { algorithms: ['HS256'] }, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }

  register(endpoint) {
    let method = () => {};

    if (endpoint.method === 'POST') {
      method = this.application.post.bind(this.application);
    } else if (endpoint.method === 'DELETE') {
      method = this.application.delete.bind(this.application);
    } else if (endpoint.method === 'GET') {
      method = this.application.get.bind(this.application);
    } else {
      this.sentry.captureMessage('registered invalid route method with ' + endpoint);
    }

    method(endpoint.path, async (req, res, next) => {
      const requires = endpoint.requires ? endpoint.requires : [];
      const accessRules = endpoint.accessRules ? endpoint.accessRules : [];
      let passesAuthentication = true;
      let passesAccessRules = false;
      let notFound = false;

      if (requires.includes(Require.Authenticated)) {
        const decodedJWT = await decodedJWTFromRequest(req);
        passesAuthentication = decodedJWT !== null;
      }

      if (accessRules.length === 0) {
        passesAccessRules = true;
      } else if (passesAuthentication) {
        const result = await this.hasAccessRules(accessRules, req);
        notFound = result.notFound;
        passesAccessRules = result.hasAccess;
      }

      if (notFound) {
        res.status(404).end();
      } else if (!passesAuthentication || !passesAccessRules) {
        res.status(401).end();
      } else if (endpoint.on) {
        let decodedJwt = null;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
          const token = req.headers.authorization.substring('Bearer '.length);
          try {
            decodedJwt = await Router.getJWT(token);
          } catch (_e) {
            this.sentry.captureMessage('invalid token attempted');
          }
        }

        const extra = {
          db: this.db,
          jwt: decodedJwt,
          sentry: this.sentry,
          SibApiV3Sdk: this.SibApiV3Sdk,
          stripe: stripe(settings.stripe.secret),
          T: this.T,
          webRoutes: new Routes(settings.web.origin)
        };

        if (req.header['x-forwarded-for']) {
          extra.ip = req.header['x-forwarded-for'];
        } else {
          extra.ip = req.connection.remoteAddress;
        }

        if (requires.includes(Require.Page)) {
          extra.pagination = { limit: DEFAULT_LIMIT };

          const validLimit = req.query.limit &&
            typeof req.query.limit === 'string' &&
            req.query.limit.length > 0;

          if (validLimit) {
            const limit = Number(req.query.limit);

            if (Number.isInteger(limit) && limit > -1 && limit < LIMIT_MAX) {
              extra.pagination.limit = limit;
            } else {
              return res.status(400).json(PAGINATION_ERROR).end();
            }
          }

          const validPage = req.query.page &&
            typeof req.query.page === 'string' &&
            req.query.page.length > 0;

          if (validPage) {
            const page = Number(req.query.page);

            if (Number.isInteger(page) && page > -1) {
              extra.pagination.page = page;
              extra.pagination.skip = extra.pagination.limit * page;
            } else {
              return res.status(400).json(PAGINATION_ERROR).end();
            }
          } else {
            return res.status(400).json(PAGINATION_ERROR).end();
          }
        }

        const passesSchemaValidation = this.passesBodySchema(req, endpoint);
        const passesQuerySchemaValidation = this.passesQuerySchema(req, endpoint);
        const passesPathSchema = this.passesPathSchema(req, endpoint);

        for (const { passes, validate } of [passesSchemaValidation, passesQuerySchemaValidation, passesPathSchema]) {
          if (!passes) {
            return res.status(400).json(validate.errors).end();
          }
        }

        const promise = endpoint.on(req, res, extra);

        if (typeof promise !== 'undefined' && 'then' in promise) {
          promise.then(() => {}, (e) => {
            next(e);
          });
        }
      } else {
        res.status(200).end();
      }
    });
  }

  passesBodySchema(request, endpoint) {
    let passes = true;
    let validate = null;

    if (endpoint.bodySchema) {
      validate = this.ajv.compile(endpoint.bodySchema);
      const doValidate = typeof request.body === 'object' && request.body !== null;
      passes = doValidate ? validate(request.body) : false;
    }

    return { passes, validate };
  }

  passesPathSchema(request, endpoint) {
    let passes = true;
    let validate = null;

    if (endpoint.pathSchema) {
      validate = this.ajv.compile(endpoint.pathSchema);
      passes = typeof request.body === 'object' ? validate(request.params) : false;
    }

    return { passes, validate };
  }

  passesQuerySchema(request, endpoint) {
    let passes = true;
    let validate = null;

    if (endpoint.querySchema) {
      validate = this.ajv.compile(endpoint.querySchema);
      passes = typeof request.query === 'object' ? validate(request.query) : false;
    }

    return { passes, validate };
  }

  async hasAccess(read, write, collection, _id, userId) {
    const document = await this.db.collection(collection).findOne({ _id });
    const result = {
      hasAccess: false,
      notFound: false
    };

    if (document === null) {
      result.notFound = true;
      return result;
    }

    if (collection === UserCollection) {
      result.hasAccess = userId.equals(document._id);
      return result;
    }

    if (collection === OrganizationCollection) {
      const passesRead = !read || document.read.some(objectId => objectId.equals(userId));
      const passesWrite = !write || document.write.some(objectId => objectId.equals(userId));
      result.hasAccess = passesRead && passesWrite;
      return result;
    }

    if (document.organizationId) {
      const organization = await this.db.collection(OrganizationCollection)
        .findOne({ _id: document.organizationId });

      if (organization === null) {
        this.sentry.captureMessage(`has access check with bad organization id ${document.organizationId} from ${collection} ${_id}` );
        result.hasAccess = false;
        return result;
      }

      const passesRead = !read || organization.read.some(objectId => objectId.equals(userId));
      const passesWrite = !write || organization.write.some(objectId => objectId.equals(userId));
      result.hasAccess = passesRead && passesWrite;
      return result;
    }

    return result;
  }

  async hasAccessRules(accessRules, req) {
    const decodedJWT = await decodedJWTFromRequest(req);

    if (decodedJWT === null) {
      return accessRules.length === 0;
    }

    for (const { permission, collection, param } of accessRules) {
      const read = permission === Permission.READ;
      const write = permission === Permission.WRITE;

      try {
        const objectId = new mongodb.ObjectID(req.params[param]);
        const userId = new mongodb.ObjectID(decodedJWT.sub);
        const result = await this.hasAccess(read, write, collection, objectId, userId);

        if (result.notFound || !result.hasAccess) {
          return result;
        }
      } catch (e) {
        console.error(e);
        return {
          hasAccess: false,
          notFound: false
        };
      }
    }

    return {
      hasAccess: true,
      notFound: false
    };
  }
}
