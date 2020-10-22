import { useEffect } from "react";
import { useRouter } from "next/router";

import { useSettings } from "./useSettings";

export function useGoogleAnalyticsPageHit() {
  const router = useRouter();
  const settings = useSettings();

  useEffect(() => {
    const gtag = (window as any).gtag;

    if (gtag) {
      gtag("config", settings.ga.trackingId, {
        page_path: router.pathname,
      });
    }
  }, [router.pathname]);
}
