import * as Sentry from "@sentry/browser";
import settings from "settings";

if (settings.sentry) {
  Sentry.init(settings.sentry);
}
