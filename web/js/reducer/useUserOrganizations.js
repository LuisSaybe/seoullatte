import {
  GET_USER_ORGANIZATIONS
} from 'web/js/reducer/useFetch';

import { getPaginationStoreHook } from 'web/js/helper/pagination';

export const useUserOrganizations = getPaginationStoreHook(GET_USER_ORGANIZATIONS, 'userId');
