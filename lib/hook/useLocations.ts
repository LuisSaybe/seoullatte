import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { appendLocation } from "../redux/location/action";

export function useLocations() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  useEffect(() => {
    dispatch(appendLocation(router.pathname));
  }, []);
}
