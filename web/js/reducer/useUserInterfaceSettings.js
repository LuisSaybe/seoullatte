import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'SET': {
      return { ...action.data };
    }

    default:
      return state;
  }
}

export function useUserInterfaceSettings() {
  return useReducer(reducer, { language: null });
}
