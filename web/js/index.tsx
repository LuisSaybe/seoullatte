import React from "react";
import ReactDOM from "react-dom";

import { loadGoogleAnalytics } from "web/js/helper/load-google-analytics";
import { Root } from "web/js/page/root";
import { loadServiceWorker } from "./helper/load-service-worker";
import { loadSentry } from "web/js/sentry";
import { loadi18n } from "web/js/i18n";

loadSentry();
loadi18n(window);
loadGoogleAnalytics(window);
loadServiceWorker(window.navigator);

ReactDOM.render(<Root />, document.querySelector(".seoullatte-project-root"));
