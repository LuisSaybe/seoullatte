import { useContext } from "react";

import { LocationsContext } from "web/js/context";
import { routes } from "web/js/routes";

export function useLastRouteOrHome() {
  const locations = useContext(LocationsContext);
  return locations.length > 1
    ? locations[locations.length - 2].pathname
    : routes.landing();
}
