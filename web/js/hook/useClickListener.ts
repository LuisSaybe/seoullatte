import { useEffect, useState } from "react";

export function useClickListener() {
  const [event, setEvent] = useState();

  useEffect(() => {
    const listener = (e) => {
      setEvent(e);
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);

  return event;
}
