import { useSelector } from "react-redux";

import { EmptyPrefixRouter } from "../../lib/class/routes";
import { RootState } from "../redux/reducer";

export function useLastRouteOrHome() {
  const locations = useSelector((state: RootState) => state.location);

  return locations.length > 1
    ? locations[locations.length - 2]
    : EmptyPrefixRouter.landing();
}
