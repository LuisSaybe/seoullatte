import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

export type DispatchFetch = (
  params: Parameters<typeof fetch>[0],
  init?: Parameters<typeof fetch>[1],
) => void;

export function useFetch(type: string): DispatchFetch {
  const dispatch = useDispatch();
  const isMounted = useRef(true);
  const dispatchFetch: DispatchFetch = useCallback(
    (params, init) => {
      const fetchArguments = {
        params,
        init,
      };
      dispatch({
        type,
        data: {
          fetchArguments,
        },
      });

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
            dispatch({
              type,
              data: {
                fetchArguments,
                error,
              },
            });
          },
        )
        .then(
          (body) => {
            dispatch({
              type,
              data: {
                fetchArguments,
                body,
                response,
              },
            });
          },
          (error) => {
            dispatch({
              type,
              data: {
                fetchArguments,
                error,
              },
            });
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
  }, []);

  return dispatchFetch;
}
