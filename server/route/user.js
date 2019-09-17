import _ from 'lodash';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import mongodb from 'mongodb';

import jwtkeysecret from 'server/extra/jwt/jwt.key';
import { settings } from 'server/settings';

import { Require, Permission } from 'server/router';
import {
  OrganizationCollection,
  PasswordRecoveryCollection,
  TransactionCollection,
  UserCollection,
  EMAIL_COLLATION
} from 'server/database';
import { PasswordRecovery, User } from 'common/models';
import {
  USER_PATH,
  USER_PASSWORD_RECOVERY_PATH,
  ACCOUNT_PATH,
  USER_ORGANIZATIONS_PATH,
  USER_EMAIL_PATH,
  TOKEN_PATH,
  USER_TRANSACTIONS_PATH
} from 'common/routes';
import { USER_SCHEMA } from 'common/schema';
import { getUserLanguage } from 'common/helpers';
import { updatePaymentIntent } from 'server/helper/stripe';

const getHashedPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
};

export const GET_USER = {
  method: 'GET',
  path: USER_PATH,
  accessRules: [
    {
      permission: Permission.READ,
      collection: UserCollection,
      param: 'userId'
    }
  ],
  requires: [ Require.Authenticated ],
  on: async (request, response, { db }) => {
    const user = await db.collection(UserCollection).findOne({ _id: new mongodb.ObjectID(request.params.userId) });
    response.json(_.omit(user, ['hashedPassword']));
  }
};

export const PASSWORD_RECOVERY = {
  method: 'POST',
  path: USER_PASSWORD_RECOVERY_PATH,
  bodySchema: {
    type: 'object',
    required: ['email'],
    additionalProperties: false,
    properties: {
      email: USER_SCHEMA.properties.email
    }
  },
  on: async (request, response, { db, SibApiV3Sdk, T }) => {
    const user = await db.collection(UserCollection)
      .findOne({ email: request.body.email });

    if (user !== null) {
      const oneHourAgo = new Date();
      oneHourAgo.setHours(oneHourAgo.getHours() - 1);

      const passwordRecovery = await db.collection(PasswordRecoveryCollection)
        .findOne({ userId: user._id, created: { $gt: oneHourAgo } });

      if (passwordRecovery !== null) {
        return response
          .status(400)
          .json({ error: 'within_hour' });
      }

      const entity = new PasswordRecovery();
      entity.userId = user._id;
      entity.created = new Date();

      await db.collection(PasswordRecoveryCollection).insertOne(entity);

      const lng = getUserLanguage(user);
      const api = new SibApiV3Sdk.SMTPApi();
      const options = new SibApiV3Sdk.SendSmtpEmail();
      options.to = [{ email: user.email }];
      options.htmlContent = `<a href='${settings.web.origin}/password-recovery/${entity._id}'>${T('Reset your password', { lng })}</a>`;
      options.subject = T('Password Reset', { lng });
      options.sender = {
        name: 'Joseon',
        email: 'noreply@joseon.com'
      };

      await api.sendTransacEmail(options);
    }

    response.status(200);
  }
};

export const USER_BY_EMAIL = {
  method: 'GET',
  path: USER_EMAIL_PATH,
  querySchema: {
    type: 'object',
    required: ['email'],
    properties: {
      email: USER_SCHEMA.properties.email
    }
  },
  on: async (request, response, { db }) => {
    const usersWithSameEmail = await db.collection(UserCollection)
      .find({ email: request.query.email })
      .collation(EMAIL_COLLATION)
      .toArray();

    if (usersWithSameEmail.length === 0) {
      response.status(404).end();
    } else {
      const user = usersWithSameEmail[0];
      const entity = _.pick(user, ['_id', 'email']);
      response.json(entity);
    }
  }
};

export const GET_USER_ORGANIZATIONS = {
  method: 'GET',
  path: USER_ORGANIZATIONS_PATH,
  accessRules: [
    {
      permission: Permission.READ,
      collection: UserCollection,
      param: 'userId'
    }
  ],
  requires: [ Require.Page ],
  on: async (request, response, { db, pagination: { skip, limit } }) => {
    const userId = new mongodb.ObjectID(request.params.userId);
    const cursor = await db.collection(OrganizationCollection)
      .find({
        $or: [
          { read: userId },
          { write: userId },
          { owner: userId }
        ]
      })
      .sort({ lastUserActivity: -1 })
      .skip(skip)
      .limit(limit);

    const countFuture = cursor.count();
    const entityFuture = cursor.toArray();

    response.json({
      count: await countFuture,
      entity: await entityFuture
    });
  }
};

export const UPDATE_USER = {
  method: 'POST',
  path: USER_PATH,
  accessRules: [
    {
      permission: Permission.WRITE,
      collection: UserCollection,
      param: 'userId'
    }
  ],
  bodySchema: {
    ...USER_SCHEMA,
    required: [],
  },
  on: async (request, response, { db }) => {
    const user = await db.collection(UserCollection)
      .findOne({ _id: new mongodb.ObjectID(request.params.userId) });

    const $set = { ...request.body };

    if ($set.email) {
      const userWithSameEmail = await db.collection(UserCollection)
        .find({ _id: { $ne: user._id }, email: $set.email })
        .collation(EMAIL_COLLATION)
        .count();

      if (userWithSameEmail > 0) {
        response.status(409).end();
        return;
      }
    }

    $set.lastUserActivity = new Date();

    if (request.body.password) {
      $set.hashedPassword = await getHashedPassword(request.body.password);
    }

    await db.collection(UserCollection).updateOne({ _id: user._id }, { $set });
    response.status(200).end();
  }
};

export const CREATE_ACCOUNT = {
  method: 'POST',
  path: ACCOUNT_PATH,
  bodySchema: {
    type: 'object',
    required: ['email', 'password', 'lastLanguage'],
    additionalProperties: false,
    properties: _.pick(USER_SCHEMA.properties, ['email', 'password', 'lastLanguage'])
  },
  on: async (request, response, { db }) => {
    const { body: { email, password, lastLanguage } } = request;
    const searchedUsers = await db.collection(UserCollection)
      .find({ email })
      .collation(EMAIL_COLLATION)
      .toArray();

    if (searchedUsers.length > 0) {
      response.status(409).end();
      return;
    }

    if (password.toLocaleLowerCase() === email.toLocaleLowerCase()) {
      response.status(400).json({ error: 'password email same' }).end();
      return;
    }

    const hashedPassword = await getHashedPassword(password);
    const user = new User();
    user.email = email;
    user.hashedPassword = hashedPassword;
    user.lastLanguage = lastLanguage;
    user.lastUserActivity = new Date();
    user.created = new Date();

    await db.collection(UserCollection).insertOne(user);
    response.status(200).end();
  }
};

export const GET_USER_TRANSACTIONS = {
  method: 'GET',
  path: USER_TRANSACTIONS_PATH,
  accessRules: [
    {
      permission: Permission.READ,
      collection: UserCollection,
      param: 'userId'
    }
  ],
  requires: [
    Require.Authenticated,
    Require.Page
  ],
  on: async (request, response, { db, pagination: { skip, limit }, stripe }) => {
    const getCursor = () => db.collection(TransactionCollection)
      .find({
        userId: new mongodb.ObjectID(request.params.userId),
        'paymentIntent.status': 'succeeded'
      })
      .skip(skip)
      .limit(limit);
    await updatePaymentIntent(db, stripe, await getCursor().toArray());

    const cursor = getCursor();

    response.json({
      count: await cursor.count(),
      entity: await cursor.toArray(),
    });
  }
};

export const GET_USER_TOKEN = {
  method: 'POST',
  path: USER_PATH,
  requires: [ Require.Authenticated ],
  on: async (request, response, { db, sentry, jwt: { sub } }) => {
    const user = await db.collection(UserCollection)
      .findOne({ _id: new mongodb.ObjectId(request.params.userId) });
    const requester = await db.collection(UserCollection)
      .findOne({ _id: new mongodb.ObjectId(sub) });

    if (!settings.admins.includes(requester._id)) {
      response.status(401).end();
      return;
    }

    if (user === null) {
      response.status(404).end();
    } else {
      const sevenDaysAfter = new Date();
      sevenDaysAfter.setDate(sevenDaysAfter.getDate() + 7);
      const exp = Math.floor(sevenDaysAfter.getTime() / 1000);

      jwt.sign({ exp, sub: user._id, impersonator: sub }, jwtkeysecret, { algorithm: 'HS256' }, (err, token) => {
        if (err) {
          sentry.captureException(err);
          response.status(401).end();
        } else {
          response.json({ token });
        }
      });
    }
  }
};

export const GET_TOKEN = {
  method: 'POST',
  path: TOKEN_PATH,
  bodySchema: {
    ...USER_SCHEMA,
    required: ['email', 'password'],
    properties: _.pick(USER_SCHEMA.properties, 'email', 'password'),
  },
  on: async (request, response, { db, sentry, ip }) => {
    const { body: { email, password } } = request;
    const user = await db.collection(UserCollection).findOne({ email });

    if (user === null) {
      response.status(404).end();
    } else {
      bcrypt.compare(password, user.hashedPassword, (err, res) => {
        if (err) {
          sentry.captureException(err);
          response.status(401).end();
        } else if (res === true) {
          const sevenDaysAfter = new Date();
          sevenDaysAfter.setDate(sevenDaysAfter.getDate() + 7);
          const exp = Math.floor(sevenDaysAfter.getTime() / 1000);

          jwt.sign({ sub: user._id, exp }, jwtkeysecret, { algorithm: 'HS256' }, (err, token) => {
            if (err) {
              sentry.captureException(err);
              response.status(401).end();
            } else {
              response.json({ token });
            }
          });
        } else {
          sentry.captureMessage('invalid password attempt by ' + ip + ' for account ' + email);
          response.status(401).end();
        }
      });
    }
  }
};
