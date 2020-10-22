import { combineReducers } from "redux";

import { entry } from "./entry/reducer";
import { userInterfaceEvent } from "./user-interface-event/reducer";
import { userInterface } from "./user-interface/reducer";
import { location } from "./location/reducer";
import { entrySearch } from "./entry-search/reducer";
import { definitionPopup } from "./definition-popup/reducer";
import { entityFetchState } from "./entity-fetch-state/reducer";

export const reducers = combineReducers({
  definitionPopup,
  entry,
  userInterfaceEvent,
  userInterface,
  location,
  entrySearch,
  entityFetchState,
});

export type RootState = ReturnType<typeof reducers>;
