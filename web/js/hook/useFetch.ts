import { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

export type DispatchFetch = (params: RequestInfo, init?: RequestInit) => void;

interface State {
  loading: boolean;
  error: any;
  success: boolean;
}

export function useFetch(type: string): [DispatchFetch, State] {
  const dispatch = useDispatch();
  const isMounted = useRef(true);
  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    success: false,
  });
  const dispatchFetch: DispatchFetch = useCallback(
    (params, init) => {
      const safeSetState = (state) => {
        if (isMounted.current) {
          setState(state);
        }
      };
      const state = {
        loading: true,
        error: null,
        success: false,
      };
      dispatch({
        type,
        data: {
          state,
        },
      });

      safeSetState(state);
      let response;

      fetch(params, init)
        .then(
          (networkResponse) => {
            const isJson = networkResponse.headers
              .get("Content-Type")
              ?.toLowerCase()
              .includes("application/json");
            response = networkResponse;
            return isJson ? networkResponse.json() : networkResponse.text();
          },
          (error) => {
            const nextState = {
              ...state,
              error,
              loading: false,
            };
            dispatch({
              type,
              data: {
                state: nextState,
              },
            });
            safeSetState(nextState);
          },
        )
        .then(
          (body) => {
            const nextState = {
              ...state,
              loading: false,
              success: true,
            };
            dispatch({
              type,
              data: {
                state: nextState,
              },
              body,
              response,
            });
            safeSetState(nextState);
          },
          (error) => {
            const nextState = {
              ...state,
              error,
              loading: false,
            };
            dispatch({
              type,
              data: {
                state: nextState,
              },
            });
            safeSetState(nextState);
          },
        );
    },
    [isMounted.current, type],
  );

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });

  return [dispatchFetch, state];
}
