import * as Sentry from "@sentry/browser";

import { getSettings } from "web/js/helper/settings";

export function loadSentry() {
  const settings = getSettings();
  if (settings.sentry) {
    Sentry.init(settings.sentry);
  }
}
