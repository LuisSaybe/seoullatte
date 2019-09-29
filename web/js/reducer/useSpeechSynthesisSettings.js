import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'MERGE': {
      return {  ...state, ...action.data };
    }

    case 'SET': {
      return { ...action.data };
    }

    default:
      return state;
  }
}

export function useSpeechSynthesisSettings() {
  return useReducer(reducer, {});
}
