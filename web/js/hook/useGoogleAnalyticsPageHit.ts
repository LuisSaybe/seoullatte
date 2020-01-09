import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import settings from "settings";

export function useGoogleAnalyticsPageHit() {
  const location = useLocation();

  useEffect(() => {
    const gtag = (window as any).gtag;

    if (gtag) {
      gtag("config", settings.ga.trackingId, { page_path: location.pathname });
    }
  }, [location.pathname]);
}
