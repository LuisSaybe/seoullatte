import React, { useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";

import {
  DispatchLocalStorageContext,
  FetchDispatchContext,
  FetchStateContext,
  LocalStorageContext,
} from "web/js/context";

import { Application } from "web/js/hook/application";
import { Store } from "web/js/hook/store";
import { useDeviceSupported } from "web/js/hook/useDeviceSupported";
import { DeviceNotSupported } from "web/js/page/device-not-supported";
import { useFetch } from "web/js/reducer/useFetch";
import { useLocalStorage } from "web/js/reducer/useLocalStorage";

import { FetchDispatchContextType } from "web/js/interface/fetch";
import styles from "./style.scss";

export function Root() {
  const deviceSupported = useDeviceSupported();
  const [storage, dispatchLocalStorage] = useLocalStorage();
  const [fetchState, dispatchFetch, dispatchFetchDelete] = useFetch();
  const fetchDispatchValue: FetchDispatchContextType = useMemo(
    () => [dispatchFetch, dispatchFetchDelete],
    [dispatchFetch, dispatchFetchDelete],
  );

  return (
    <>
      <LocalStorageContext.Provider value={storage}>
        <DispatchLocalStorageContext.Provider value={dispatchLocalStorage}>
          <FetchDispatchContext.Provider value={fetchDispatchValue}>
            <FetchStateContext.Provider value={fetchState}>
              <Store>
                {deviceSupported ? <Application /> : <DeviceNotSupported />}
              </Store>
            </FetchStateContext.Provider>
          </FetchDispatchContext.Provider>
        </DispatchLocalStorageContext.Provider>
      </LocalStorageContext.Provider>
      <ToastContainer
        position={toast.POSITION.BOTTOM_LEFT}
        bodyClassName={styles.toaster}
        hideProgressBar
      />
    </>
  );
}
