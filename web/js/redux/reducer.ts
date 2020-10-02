import { combineReducers } from "redux";

import { entry } from "web/js/redux/entry/reducer";
import { userInterfaceEvent } from "web/js/redux/user-interface-event/reducer";
import { userInterface } from "web/js/redux/user-interface/reducer";
import { location } from "web/js/redux/location/reducer";
import { entrySearch } from "web/js/redux/entry-search/reducer";
import { definitionPopup } from "web/js/redux/definition-popup/reducer";
import { entityFetchState } from "web/js/redux/entity-fetch-state/reducer";

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
