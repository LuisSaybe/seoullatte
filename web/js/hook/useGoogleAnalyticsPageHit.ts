import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import settings from "settings";

export function useGoogleAnalyticsPageHit() {
  const location = useLocation();

  useEffect(() => {
    if (!settings.ga?.trackingId) {
      return;
    }

    const src =
      "https://www.googletagmanager.com/gtag/js?id=" + settings.ga.trackingId;
    const exists = document.querySelector(`[src="${src}"]`);

    if (exists) {
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
    const uncheckedWindow = window as any;
    uncheckedWindow.dataLayer = uncheckedWindow.dataLayer || [];
    uncheckedWindow.dataLayer.push(
      ["js", new Date()],
      ["config", settings.ga.trackingId],
    );
  }, []);

  useEffect(() => {
    const gtag = (window as any).gtag;

    if (gtag) {
      gtag("config", settings.ga.trackingId, { page_path: location.pathname });
    }
  }, [location.pathname]);
}
