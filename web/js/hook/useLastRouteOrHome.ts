import { useSelector } from "react-redux";

import { RootState } from "web/js/redux/reducer";
import { routes } from "web/js/routes";

export function useLastRouteOrHome() {
  const locations = useSelector((state: RootState) => state.location);

  return locations.length > 1
    ? locations[locations.length - 2].pathname
    : routes.landing();
}
