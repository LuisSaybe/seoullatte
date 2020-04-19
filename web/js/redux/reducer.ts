import { combineReducers } from "redux";

import { entry } from "web/js/redux/entry/reducer";
import { userInterfaceEvent } from "web/js/redux/user-interface-event/reducer";
import { userInterface } from "web/js/redux/user-interface/reducer";
import { location } from "web/js/redux/location/reducer";

export const reducers = combineReducers({
  entry,
  userInterfaceEvent,
  userInterface,
  location,
});

export type RootState = ReturnType<typeof reducers>;
