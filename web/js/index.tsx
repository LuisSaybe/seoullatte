import React from "react";
import ReactDOM from "react-dom";

import { Root } from "web/js/page/root";
import "web/js/sentry";
import "web/js/i18n";

if (window.location.origin === "https://seoullatte.com") {
  const node = document.createElement("script");
  node.src = "https://www.googletagmanager.com/gtag/js?id=G-3G0FPD2JQ4";
  node.async = true;
  document.head.appendChild(node);
  const uncheckedWindow = window as any;

  uncheckedWindow.dataLayer = uncheckedWindow.dataLayer || [];
  function gtag() {
    uncheckedWindow.dataLayer.push(arguments);
  }

  (gtag as any)("js", new Date());
  (gtag as any)("config", "G-3G0FPD2JQ4");
}

if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch((error) => {
      console.error(error);
    });
  });
}

ReactDOM.render(<Root />, document.querySelector(".seoullatte-project-root"));
