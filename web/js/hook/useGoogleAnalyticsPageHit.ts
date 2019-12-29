import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useGoogleAnalyticsPageHit() {
  const location = useLocation();

  useEffect(() => {
    const ga = (window as any).ga;

    if (ga) {
      ga("set", "page", location.pathname);
      ga("send", "pageview");
    }
  }, [location.pathname]);
}
