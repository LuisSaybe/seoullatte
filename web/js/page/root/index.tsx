import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Application } from "web/js/component/application";
import { reducers } from "web/js/redux/reducer";

export function Root() {
  const store = createStore(reducers);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Application />
      </Provider>
    </BrowserRouter>
  );
}
