import React from "react";
import { toast, ToastContainer } from "react-toastify";

import {
  DispatchLocalStorageContext,
  FetchDispatchContext,
  FetchStateContext,
  LocalStorageContext,
} from "web/js/context";

import { Application } from "web/js/hook/application";
import { Store } from "web/js/hook/store";
import { useFetch } from "web/js/reducer/useFetch";
import { useLocalStorage } from "web/js/reducer/useLocalStorage";

import styles from "./style.scss";

export function Root() {
  const [storage, dispatchLocalStorage] = useLocalStorage();
  const [fetchState, dispatchFetch, dispatchFetchDelete] = useFetch(
    storage.token,
  );

  return (
    <>
      <LocalStorageContext.Provider value={storage}>
        <DispatchLocalStorageContext.Provider value={dispatchLocalStorage}>
          <FetchDispatchContext.Provider
            value={[dispatchFetch, dispatchFetchDelete]}
          >
            <FetchStateContext.Provider value={fetchState}>
              <Store>
                <Application />
              </Store>
            </FetchStateContext.Provider>
          </FetchDispatchContext.Provider>
        </DispatchLocalStorageContext.Provider>
      </LocalStorageContext.Provider>
      <ToastContainer
        position={toast.POSITION.BOTTOM_LEFT}
        bodyClassName={styles["toast-body"]}
        hideProgressBar
      />
    </>
  );
}