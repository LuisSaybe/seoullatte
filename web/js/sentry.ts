import * as Sentry from "@sentry/browser";
import { getSettings } from "./helper/settings";

const settings = getSettings();

if (settings.sentry) {
  Sentry.init(settings.sentry);
}
