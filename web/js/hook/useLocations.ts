import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { appendLocation } from "web/js/redux/location/action";
import { updateUserInterface } from "../redux/user-interface/action";

export function useLocations() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appendLocation(location));
    window.scrollTo(0, 0);
  }, [location]);
}
