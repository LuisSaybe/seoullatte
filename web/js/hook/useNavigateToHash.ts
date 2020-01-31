import { useCallback } from "react";
import { useLocation } from "react-router-dom";

export function useNavigateToHash() {
  const { hash } = useLocation();
  const navigateToHash = useCallback(() => {
    const element = document.getElementById(hash.slice(1));

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [hash]);

  return navigateToHash;
}
