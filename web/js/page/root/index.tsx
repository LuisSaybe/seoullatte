import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Application } from "web/js/component/application";
import { useDeviceSupported } from "web/js/hook/useDeviceSupported";
import { DeviceNotSupported } from "web/js/page/device-not-supported";
import { reducers } from "web/js/redux/reducer";

export function Root() {
  const store = createStore(reducers);
  const deviceSupported = useDeviceSupported();

  return (
    <BrowserRouter>
      <Provider store={store}>
        {deviceSupported ? <Application /> : <DeviceNotSupported />}
      </Provider>
    </BrowserRouter>
  );
}
