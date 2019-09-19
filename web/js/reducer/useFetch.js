import { useReducer } from 'react';
import { fetch as whatWGFetch } from 'whatwg-fetch';
import _ from 'lodash';

import settings from 'web/settings';
import { safe } from 'web/js/helper';

export const UPDATE_USER = 'UPDATE_USER';
export const GET_USER = 'GET_USER';

export const SEARCH_EMAIL = 'SEARCH_USER_EMAIL';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const TOKEN_FROM_PASSWORD = 'TOKEN_FROM_PASSWORD';

export const CREATE_STRIPE_CHECKOUT_SESSION = 'CREATE_STRIPE_CHECKOUT_SESSION';

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

  return [ state, resultDispatch, deleteDispatch ];
}
