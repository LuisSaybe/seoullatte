import { useDispatch } from "react-redux";

export type DispatchFetch = (
  params: Parameters<typeof fetch>[0],
  init?: Parameters<typeof fetch>[1],
) => void;

export function useFetch(type: string): DispatchFetch {
  const dispatch = useDispatch();
  return async (params, init) => {
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

    try {
      response = await fetch(params, init);
      const isJson = response.headers
        .get("Content-Type")
        ?.toLowerCase()
        .includes("application/json");
      const body = isJson ? await response.json() : await response.text();
      dispatch({
        type,
        data: {
          fetchArguments,
          body,
          response,
        },
      });
    } catch (error) {
      dispatch({
        type,
        data: {
          response,
          fetchArguments,
          error,
        },
      });
    }
  };
}
