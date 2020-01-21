import { useLocation } from "react-router-dom";

export function useNavigateToHash() {
  const { hash } = useLocation();

  return () => {
    const element = document.getElementById(hash.slice(1));

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
}
