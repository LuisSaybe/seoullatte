import { useRouter } from "next/router";
import { useCallback } from "react";

export function useNavigateToHash() {
  const router = useRouter();
  const navigateToHash = useCallback(() => {
    const element = document.getElementById(window.location.hash.slice(1));

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [router.pathname]);

  return navigateToHash;
}
