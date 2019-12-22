import * as Sentry from "@sentry/browser";

import settings from "web/settings";

Sentry.init(settings.sentry);
