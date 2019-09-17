const Sentry = require('@sentry/node');
import SibApiV3Sdk from 'sib-api-v3-sdk';

import express from 'express';
import bodyParser from 'body-parser';

import { MAXIMUM_IMAGE_UPLOAD_BYTES } from 'common/schema';

import {
  getDatabase,
  OrganizationCollection,
  ItemCollection,
  EventCollection,
  UserCollection
} from 'server/database';
import { getAvatarRoute } from 'server/helper/avatar';
import { settings } from 'server/settings';
import { Router } from 'server/router';
import { T } from 'common/i18n';

import {
  CREATE_ACCOUNT,
  GET_TOKEN,
  GET_USER,
  USER_BY_EMAIL,
  UPDATE_USER,
  PASSWORD_RECOVERY,
  GET_USER_ORGANIZATIONS
} from 'server/route/user';

import {
  GET_CHECKOUT_SESSION
} from 'server/route/stripe';

Sentry.init(settings.sentry);

const application = express();

application.use((req, res, next) => {
  const origin = req.headers['origin'];
  const requestHeaders = req.headers['access-control-request-headers'];
  const requestMethod = req.headers['access-control-request-method'];
  const hasValidOrigin = settings.http.origins.includes(origin);

  if (hasValidOrigin) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (requestHeaders) {
    res.header('Access-Control-Allow-Headers', requestHeaders);
  }

  if (requestMethod) {
    res.header('Access-Control-Allow-Methods', 'GET, DELETE, POST');
  }

  next();
});

application.use(bodyParser.json());

// change to express.raw

application.use(bodyParser.raw({
  type: ['image/jpeg', 'image/png'],
  limit: MAXIMUM_IMAGE_UPLOAD_BYTES
}));

application.use((err, req, res, next) => {
  Sentry.captureMessage(err);
  next(err);
});

export const run = () => {
  getDatabase().then((db) => {
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = settings.sendinblue.key;
    return new Router(application, Sentry, db, SibApiV3Sdk, T);
  }, (e) => {
    Sentry.captureException(e);
  }).then((router) => {
    const routes = [
      USER_BY_EMAIL,  /* must appear before GET_USER */
      PASSWORD_RECOVERY, /* must appear before GET_USER */
      GET_USER_ORGANIZATIONS, /* must appear before GET_USER */
      CREATE_ACCOUNT,
      GET_USER,
      GET_TOKEN,
      UPDATE_USER,
      UPDATE_USER,

      GET_CHECKOUT_SESSION,

      getAvatarRoute(OrganizationCollection),
      getAvatarRoute(ItemCollection),
      getAvatarRoute(EventCollection),
      getAvatarRoute(UserCollection),
    ];

    for (const route of routes) {
      router.register(route);
    }

    application.listen(settings.port, () => {
      console.log('listening on port ' + settings.port);
    });
  });
};
