import { useEffect, useState } from "react";

export const PRODUCTION_URL = "https://seoullatte.com";

export function useOrigin() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (window.location.origin) {
      setOrigin(window.location.origin);
    } else {
      setOrigin(
        window.location.protocol +
          "//" +
          window.location.hostname +
          (window.location.port ? ":" + window.location.port : ""),
      );
    }
  }, []);

  return origin;
}
