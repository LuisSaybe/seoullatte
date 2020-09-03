import React from "react";
import ReactDOM from "react-dom";
import { Root } from "web/js/page/root";
import "web/js/sentry";
import "web/js/i18n";

if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch((error) => {
      console.error(error);
    });
  });
}

ReactDOM.render(<Root />, document.querySelector(".seoullatte-project-root"));
