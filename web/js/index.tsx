import URLSearchParams from "@ungap/url-search-params";
import React from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";

import { Root } from "web/js/page/root";
import "web/js/sentry";

import "common/i18n";

if (!window.URLSearchParams) {
  window.URLSearchParams = URLSearchParams;
}

ReactDOM.render(<Root />, document.querySelector(".project-root"));
