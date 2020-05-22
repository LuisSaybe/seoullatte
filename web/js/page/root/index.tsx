import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Application } from "web/js/hook/application";
import { useDeviceSupported } from "web/js/hook/useDeviceSupported";
import { DeviceNotSupported } from "web/js/page/device-not-supported";
import { reducers } from "web/js/redux/reducer";
import styles from "./style.scss";

export function Root() {
  const store = createStore(reducers);
  const deviceSupported = useDeviceSupported();

  return (
    <BrowserRouter>
      <Provider store={store}>
        {deviceSupported ? <Application /> : <DeviceNotSupported />}
        <ToastContainer
          position={toast.POSITION.BOTTOM_LEFT}
          bodyClassName={styles.toaster}
          hideProgressBar
        />
      </Provider>
    </BrowserRouter>
  );
}
