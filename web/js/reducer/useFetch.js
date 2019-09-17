import { useReducer, useEffect } from 'react';
import { fetch as whatWGFetch } from 'whatwg-fetch';
import _ from 'lodash';

import {
  EVENT_PATH,
  ITEM_PATH,
  ORGANIZATION_PATH
} from 'common/routes';

import settings from 'web/settings';

import { safe } from 'web/js/helper';

export const UPDATE_USER = 'UPDATE_USER';
export const GET_USER = 'GET_USER';
export const GET_USER_ORGANIZATIONS = 'GET_USER_ORGANIZATIONS';
export const GET_USER_TRANSACTIONS = 'GET_USER_TRANSACTIONS';

export const SEARCH_EMAIL = 'SEARCH_USER_EMAIL';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const TOKEN_FROM_PASSWORD = 'TOKEN_FROM_PASSWORD';

export const GET_ITEM = 'GET_ITEM';
export const PERSIST_ITEM = 'PERSIST_ITEM';
export const UPDATE_ITEM_AVATAR = 'UPDATE_ITEM_AVATAR';

export const GET_ITEM_TRANSACTIONS = 'GET_ITEM_TRANSACTIONS';

export const GET_EVENT_PURCHASE_DATA = 'GET_EVENT_PURCHASE_DATA';
export const GET_EVENT = 'GET_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const UPDATE_EVENT_AVATAR = 'UPDATE_EVENT_AVATAR';
export const GET_EVENT_ITEMS = 'GET_EVENT_ITEMS';
export const CREATE_STRIPE_CHECKOUT_SESSION = 'CREATE_STRIPE_CHECKOUT_SESSION';

export const GET_ORGANIZATION_EVENTS = 'GET_ORGANIZATION_EVENTS';
export const GET_ORGANIZATION = 'GET_ORGANIZATION';
export const CREATE_ORGANIZATION = 'CREATE_ORGANIZATION';
export const UPDATE_ORGANIZATION_AVATAR = 'UPDATE_ORGANIZATION_AVATAR';
export const UPDATE_ORGANIZATION = 'UPDATE_ORGANIZATION';
export const ORGANIZATION_STRIPE_CONNECT = 'ORGANIZATION_STRIPE_CONNECT';
export const ORGANIZATION_STRIPE_DISCONNECT = 'ORGANIZATION_STRIPE_DISCONNECT';

export const GET_STRIPE_SESSION = 'GET_STRIPE_SESSION';

export const LOGOUT = 'LOGOUT';

const PARAM_MATCHER = new RegExp(':[a-zA-Z]+', 'ig');

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE' : {
      return {
        ...state,
        [action.data.type]: action.data
      };
    }

    case 'DELETE' : {
      return _.omit(state, action.data.ids);
    }

    default:
      return state;
  }
}

export function useFetch(token) {
  const [ state, dispatch ] = useReducer(reducer, {});
  const resultDispatch = (url, options = {}, type = url) => {
    const data = {
      url,
      options: { ...options, headers: { ...options.headers } },
      type
    };

    if (data.options.body instanceof Blob) {
      data.options.headers['Content-Type'] = data.options.body.type;
    } else if (typeof data.options.body === 'object' && data.options.body !== null) {
      data.originalBody = options.body;
      data.options.body = JSON.stringify(data.options.body);
      data.options.headers['Content-Type'] = 'application/json';
    }

    if (token) {
      data.options.headers.Authorization = `Bearer ${token}`;
    }

    const query = safe(() => data.options.query, {});
    const searchParams = new URLSearchParams();

    for (const key of Object.keys(query)) {
      const value = query[key];

      if (Array.isArray(value)) {
        for (const element of value) {
          searchParams.append(key, element);
        }
      } else {
        searchParams.append(key, value);
      }
    }

    let derivedUrl;

    if (Array.isArray(data.url)) {
      const derivedURLArray = data.url[0].slice(1).split('/');
      const params = {};
      let index = 1;

      for (const param of data.url[0].match(PARAM_MATCHER)) {
        const name = param.substring(param.startsWith('/') ? 2 : 1);
        params[name] = data.url[index];
        derivedURLArray[derivedURLArray.indexOf(param)] = data.url[index];
        index++;
      }

      derivedUrl = '/' + derivedURLArray.join('/');
      data.params = params;
    } else {
      derivedUrl = data.url;
    }

    if (searchParams.toString() !== '') {
      derivedUrl += '?' + searchParams.toString();
    }

    dispatch({
      type: 'UPDATE',
      data: { ...data, fetching: true },
    });

    const fetch = window.fetch || whatWGFetch;

    return fetch(settings.api.url + derivedUrl, data.options).then(response => {
      const contentType = response.headers.get('content-type');
      const nextData = {
        ...data,
        response,
        fetching: false
      };

      if (contentType && contentType.includes('application/json')) {
        return response.json().then(body => {
          dispatch({ type: 'UPDATE', data: { ...nextData, body } });
        }, (error) => {
          console.warn(error);
          dispatch({ type: 'UPDATE', data: { ...nextData, error } });
        });
      } else {
        dispatch({ type: 'UPDATE', data: nextData });
      }
    }, (error) => {
      console.warn(error);
      dispatch({ type: 'UPDATE', data: { ...data, error } });
    });
  };

  const deleteDispatch = (ids) => {
    dispatch({
      type: 'DELETE',
      data: { ids }
    });
  };

  // TODO refactor

  const watchActionPairs = [
    [CREATE_EVENT, 'body._id', EVENT_PATH, GET_EVENT],
    [UPDATE_EVENT_AVATAR, 'params.eventId', EVENT_PATH, GET_EVENT],
    [UPDATE_EVENT, 'params.eventId', EVENT_PATH, GET_EVENT],
    [UPDATE_ORGANIZATION, 'params.organizationId', ORGANIZATION_PATH, GET_ORGANIZATION],
    [CREATE_ORGANIZATION, 'body._id', ORGANIZATION_PATH, GET_ORGANIZATION],
    [UPDATE_ORGANIZATION_AVATAR, 'params.organizationId', ORGANIZATION_PATH, GET_ORGANIZATION],
    [ORGANIZATION_STRIPE_CONNECT, 'params.organizationId', ORGANIZATION_PATH, GET_ORGANIZATION],
    [UPDATE_ITEM_AVATAR, 'params.itemId', ITEM_PATH, GET_ITEM],
    [PERSIST_ITEM, state => {
      return state.body && state.body._id ? state.body._id: state.params.itemId;
    }, ITEM_PATH, GET_ITEM]
  ];

  for (const [type, getValue, apiPath, writeFetchKey] of watchActionPairs) {
    const eventState = state[type];

    useEffect(() => {
      if (safe(() => eventState.response.ok)) {
        const value = typeof getValue === 'function' ? getValue(eventState): _.get(eventState, getValue);
        resultDispatch([apiPath, value], {}, writeFetchKey);
      }
    }, [ eventState ]);
  }

  return [ state, resultDispatch, deleteDispatch ];
}
