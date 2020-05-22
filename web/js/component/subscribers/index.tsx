import { useGoogleAnalyticsPageHit } from "web/js/hook/useGoogleAnalyticsPageHit";
import { useLocations } from "web/js/hook/useLocations";
import { useClickListener } from "web/js/hook/useClickListener";

export function Subscribers() {
  useGoogleAnalyticsPageHit();
  useLocations();
  useClickListener();

  return null;
}
