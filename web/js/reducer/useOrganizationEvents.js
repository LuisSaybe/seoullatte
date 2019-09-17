import {
  GET_ORGANIZATION_EVENTS
} from 'web/js/reducer/useFetch';
import { ORGANIZATION_ID } from 'common/routes';

import { getPaginationStoreHook } from 'web/js/helper/pagination';

export const useOrganizationEvents = getPaginationStoreHook(GET_ORGANIZATION_EVENTS, ORGANIZATION_ID);
