import * as Sentry from "@sentry/browser";
import settings from "web/js/settings";

if (settings.sentry) {
  Sentry.init(settings.sentry);
}
