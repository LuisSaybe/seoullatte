import {
  GET_ITEM_TRANSACTIONS
} from 'web/js/reducer/useFetch';

import { getPaginationStoreHook } from 'web/js/helper/pagination';

export const useItemTransactions = getPaginationStoreHook(GET_ITEM_TRANSACTIONS, 'itemId');
