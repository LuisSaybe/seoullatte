import productionSettings from "../settings/production.json";
import localSettings from "../settings/local.json";
import { PRODUCTION_URL, useOrigin } from "./useOrigin";
import { Settings } from "../interface/setting";

export function useSettings(): Settings {
  const origin = useOrigin();
  return origin === PRODUCTION_URL ? productionSettings : localSettings;
}
