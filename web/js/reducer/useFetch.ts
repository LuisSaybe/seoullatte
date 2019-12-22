import _ from "lodash";
import { useReducer } from "react";

import {
  DispatchFetch,
  DispatchFetchDelete,
  DispatchFetchType,
  DispatchFetchURL,
  FetchActionType,
  IFetchDispatchAction,
  IFetchDispatchActionDelete,
  IFetchDispatchActionUpdate,
  IFetchStateType,
  IRequestInitCustom,
} from "web/js/interface";

import settings from "web/settings";

const PARAM_MATCHER = new RegExp(":[a-zA-Z]+", "ig");

function reducer(
  state: IFetchStateType,
  action: IFetchDispatchAction,
): IFetchStateType {
  switch (action.type) {
    case FetchActionType.UPDATE: {
      return {
        ...state,
        [action.type]: (action as IFetchDispatchActionUpdate).data,
      };
    }

    case FetchActionType.DELETE: {
      return _.omit(state, (action as IFetchDispatchActionDelete).data.ids);
    }

    default:
      return state;
  }
}

export function useFetch(
  token: string,
): [IFetchStateType, DispatchFetch, DispatchFetchDelete] {
  const [state, dispatch] = useReducer(reducer, {});
  const resultDispatch = (
    url: DispatchFetchURL,
    options: IRequestInitCustom & Omit<RequestInit, "body">,
    type: DispatchFetchType,
  ) => {
    const data = {
      fetching: false,
      options,
      type,
      url,
    };

    const headers = new Headers(options.headers);

    if (data.options.body instanceof Blob) {
      headers.append("Content-Type", data.options.body.type);
    } else if (
      typeof data.options.body === "object" &&
      data.options.body !== null
    ) {
      data.options.body = JSON.stringify(data.options.body);
      data.options.headers["Content-Type"] = "application/json";
    }

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    data.options.headers = headers;

    const searchParams = new URLSearchParams(
      new URL(url.toString(), settings.api.url).search,
    );

    let derivedUrl;

    if (Array.isArray(data.url)) {
      const derivedURLArray = data.url[0].slice(1).split("/");
      const params = {};
      let index = 1;

      for (const param of data.url[0].match(PARAM_MATCHER)) {
        const name = param.substring(param.startsWith("/") ? 2 : 1);
        params[name] = data.url[index];
        derivedURLArray[derivedURLArray.indexOf(param)] = data.url[index];
        index++;
      }

      derivedUrl = "/" + derivedURLArray.join("/");
    } else {
      derivedUrl = data.url;
    }

    if (searchParams.toString() !== "") {
      derivedUrl += "?" + searchParams.toString();
    }

    dispatch({
      data: { ...data, params: searchParams, fetching: true },
      type: FetchActionType.UPDATE,
    });

    return fetch(settings.api.url + derivedUrl, data.options).then(
      (response) => {
        const contentType = response.headers.get("content-type");
        const nextData = {
          ...data,
          params: searchParams,
          fetching: false,
          response,
        };

        if (contentType && contentType.includes("application/json")) {
          return response.json().then(
            (body) => {
              dispatch({
                data: { ...nextData, body },
                type: FetchActionType.UPDATE,
              });
            },
            (error) => {
              console.warn(error);
              dispatch({
                data: { ...nextData, error },
                type: FetchActionType.UPDATE,
              });
            },
          );
        } else {
          dispatch({ type: FetchActionType.UPDATE, data: nextData });
        }
      },
      (error) => {
        console.warn(error);
        dispatch({ type: FetchActionType.UPDATE, data: { ...data, error } });
      },
    );
  };

  const deleteDispatch = (ids) => {
    dispatch({
      data: { ids },
      type: FetchActionType.DELETE,
    });
  };

  return [state, resultDispatch, deleteDispatch];
}
