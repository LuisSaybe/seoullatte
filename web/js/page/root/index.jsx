import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import {
  FetchDispatchContext,
  FetchStateContext,
  LocalStorageContext,
  LocalStorageDispatchContext
} from 'web/js/context';

import { Application } from 'web/js/page/application';
import { Store } from 'web/js/application-hook/store';
import { useFetch } from 'web/js/reducer/useFetch';
import { useLocalStorage } from 'web/js/reducer/useLocalStorage';
import styles from './style.scss';

export function Root() {
  const [ storage, dispatchLocalStorage ] = useLocalStorage();
  const [ fetchState, dispatchFetch, dispatchFetchDelete ] = useFetch(storage.token);

  return (
    <>
      <LocalStorageContext.Provider value={storage}>
        <LocalStorageDispatchContext.Provider value={dispatchLocalStorage}>
          <FetchDispatchContext.Provider value={[ dispatchFetch, dispatchFetchDelete ]}>
            <FetchStateContext.Provider value={fetchState}>
              <Store>
                <Application />
              </Store>
            </FetchStateContext.Provider>
          </FetchDispatchContext.Provider>
        </LocalStorageDispatchContext.Provider>
      </LocalStorageContext.Provider>
      <ToastContainer
        autoClose={3000}
        position={toast.POSITION.BOTTOM_LEFT}
        bodyClassName={styles['toast-body']}
        hideProgressBar
      />
    </>
  );
}
