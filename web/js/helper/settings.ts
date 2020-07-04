import productionSettings from "web/js/settings/production.json";
import localSettings from "web/js/settings/local.json";
import { getOrigin, PRODUCTION_URL } from "web/js/helper/location";
import { Settings } from "web/js/interface/setting";

export function getSettings(): Settings {
  return getOrigin() === PRODUCTION_URL ? productionSettings : localSettings;
}
