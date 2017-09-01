/**
 * Describes how the part of the application state related
 * to settings transforms as actions occur.
 */

import {Action, Reducer} from 'redux';
import {isType} from 'typescript-fsa';

import {setMaxTabsPerWindowAction} from 'options_ui/store/settings/actions';

export type State = {
  maxTabsPerWindow: number;
};

const initialState: State = {
  maxTabsPerWindow: 5
};

const reducer: Reducer<State> = (
  state: State = initialState, action: Action
): State => {
  if (isType(action, setMaxTabsPerWindowAction)) {
    return {...state, maxTabsPerWindow: action.payload.maxTabs};
  }

  return state;
};

export default reducer;
