import {
  GET_EVENT_ITEMS
} from 'web/js/reducer/useFetch';

import { getPaginationStoreHook } from 'web/js/helper/pagination';

export const useEventItems = getPaginationStoreHook(GET_EVENT_ITEMS, 'eventId');
