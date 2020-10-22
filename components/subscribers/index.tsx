import { useGoogleAnalyticsPageHit } from "../../lib/hook/useGoogleAnalyticsPageHit";
import { useLocations } from "../../lib/hook/useLocations";
import { useClickListener } from "../../lib/hook/useClickListener";

export function Subscribers() {
  useGoogleAnalyticsPageHit();
  useLocations();
  useClickListener();

  return null;
}
