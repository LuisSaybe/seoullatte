import _ from "lodash";
import { useCallback, useReducer } from "react";

import {
  DispatchFetch,
  DispatchFetchDelete,
  DispatchFetchId,
  DispatchFetchURL,
  FetchActionType,
  IFetchDispatchAction,
  IFetchDispatchActionDelete,
  IFetchDispatchActionUpdate,
  IFetchState,
  IFetchStateType,
  IRequestInitCustom,
} from "web/js/interface/fetch";

import settings from "settings";

const PARAM_MATCHER = new RegExp(":[a-zA-Z]+", "ig");

function reducer(
  state: IFetchStateType,
  action: IFetchDispatchAction,
): IFetchStateType {
  switch (action.type) {
    case FetchActionType.UPDATE: {
      const update = action as IFetchDispatchActionUpdate;

      return {
        ...state,
        [update.data.id]: update.data,
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
  token?: string,
): [IFetchStateType, DispatchFetch, DispatchFetchDelete] {
  const [state, dispatch] = useReducer(reducer, {});
  const resultDispatch = useCallback(
    (
      url: DispatchFetchURL,
      options: IRequestInitCustom & Omit<RequestInit, "body">,
      id: DispatchFetchId,
    ) => {
      const data: IFetchState = {
        fetching: false,
        id,
        options,
        params: {},
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

      let derivedUrl;

      if (Array.isArray(data.url)) {
        const derivedURLArray = data.url[0].slice(1).split("/");
        let index = 1;

        for (const param of data.url[0].match(PARAM_MATCHER)) {
          const name = param.substring(param.startsWith("/") ? 2 : 1);
          data.params[name] = data.url[index];
          derivedURLArray[derivedURLArray.indexOf(param)] = data.url[index];
          index++;
        }

        derivedUrl = "/" + derivedURLArray.join("/");
      } else {
        derivedUrl = data.url;
      }

      if (!derivedUrl.startsWith("http")) {
        derivedUrl = `${settings.api.uri}/${derivedUrl}`;
      }

      data.searchParams = new URLSearchParams(
        new URL(derivedUrl.toString()).search,
      );

      dispatch({
        data: {
          ...data,
          fetching: true,
        },
        type: FetchActionType.UPDATE,
      });

      return fetch(derivedUrl, data.options).then(
        (response) => {
          const contentType = response.headers.get("content-type");
          const nextData = {
            ...data,
            fetching: false,
            response,
          };

          if (contentType) {
            const isJson = contentType.includes("application/json");
            const isText = contentType.includes("text/");

            if (isJson || isText) {
              return (isJson ? response.json() : response.text()).then(
                (body) => {
                  dispatch({
                    data: { ...nextData, body },
                    type: FetchActionType.UPDATE,
                  });
                },
                (error) => {
                  dispatch({
                    data: { ...nextData, error },
                    type: FetchActionType.UPDATE,
                  });
                },
              );
            }
          } else {
            dispatch({ type: FetchActionType.UPDATE, data: nextData });
          }
        },
        (error) => {
          dispatch({ type: FetchActionType.UPDATE, data: { ...data, error } });
        },
      );
    },
    [],
  );

  const deleteDispatch = (ids: string[]) => {
    dispatch({
      data: { ids },
      type: FetchActionType.DELETE,
    });
  };

  return [state, resultDispatch, deleteDispatch];
}
