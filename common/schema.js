/*
https://ajv.js.org/keywords.html
*/

import passwords from 'common/passwords.json';
import { Currency } from 'common/models';

export const DEFAULT_MAX_LENGTH = 250;
export const MAXIMUM_IMAGE_UPLOAD_BYTES = 500000;

const DEFAULT_TEXT_FIELD = {
  type: 'string',
  minLength: 1,
  maxLength: DEFAULT_MAX_LENGTH
};

const DEFAULT_EMAIL_FIELD = {
  type: 'string',
  minLength: 1,
  maxLength: DEFAULT_MAX_LENGTH
};

export const USER_SCHEMA = {
  type: 'object',
  required: ['email', 'password', 'lastLanguage'],
  additionalProperties: false,
  properties: {
    email: DEFAULT_EMAIL_FIELD,
    password: {
      type: 'string',
      minLength: 8,
      maxLength: DEFAULT_MAX_LENGTH,
      not: {
        enum: passwords
      }
    },
    lastLanguage: {
      if: { type: 'string' },
      then: { maxLength: DEFAULT_MAX_LENGTH, },
      else: { type: 'null' }
    }
  }
};

export const ITEM_SCHEMA = {
  type: 'object',
  required: ['name', 'amount', 'order', 'maximumAvailable', 'published'],
  additionalProperties: false,
  properties: {
    name: DEFAULT_TEXT_FIELD,
    amount: {
      if: { type: 'integer' },
      then: { minimum: 1 },
      else: { type: 'null' }
    },
    order: {
      type: 'integer'
    },
    maximumAvailable: {
      if: { type: 'integer' },
      then: { minimum: 0 },
      else: { type: 'null' }
    },
    published: {
      type: 'boolean'
    }
  }
};

export const EVENT_SCHEMA = {
  type: 'object',
  required: ['name', 'published'],
  additionalProperties: false,
  properties: {
    name: DEFAULT_TEXT_FIELD,
    published: {
      type: 'boolean'
    },
    currency: {
      enum: [ ...Object.values(Currency), null ]
    },
  }
};

export const ORGANIZATION_SCHEMA = {
  required: ['name', 'email'],
  additionalProperties: false,
  properties: {
    name: DEFAULT_TEXT_FIELD,
    email: DEFAULT_EMAIL_FIELD,
    stripe: {
      type: 'null'
    }
  }
};

export const EVENT_PURCHASE_SCHEMA = {
  required: ['items'],
  additionalProperties: false,
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['quantity', '_id'],
        properties: {
          quantity: {
            type: 'integer'
          },
          _id: {
            type: 'string',
            format: 'objectid'
          }
        }
      }
    }
  }
};
