import {
  GET_USER_TRANSACTIONS
} from 'web/js/reducer/useFetch';

import { getPaginationStoreHook } from 'web/js/helper/pagination';

export const userUserTransactions = getPaginationStoreHook(GET_USER_TRANSACTIONS, 'userId');
