import { useReducer } from 'react';

import { getLocalStorage, writeLocalStorage } from 'web/js/storage';

function reducer(state, action) {
  switch (action.type) {
    case 'SET': {
      return{ ...action.data };
    }

    default:
      return state;
  }
}

export function useSpeechSynthesisSettings() {
  return useReducer(reducer, getLocalStorage());
}
