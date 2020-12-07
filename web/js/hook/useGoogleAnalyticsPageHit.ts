import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getSettings } from "web/js/helper/settings";

export function useGoogleAnalyticsPageHit() {
  const location = useLocation();

  useEffect(() => {
    const gtag = (window as any).gtag;

    if (gtag) {
      const settings = getSettings();

      gtag("config", "G-3G0FPD2JQ4", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);
}
