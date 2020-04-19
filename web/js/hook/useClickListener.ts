import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setClickEvent } from "web/js/redux/user-interface-event/action";

export function useClickListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = (e) => {
      dispatch(setClickEvent(e));
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);
}
