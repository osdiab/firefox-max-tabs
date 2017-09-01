/**
 * The data layer for the settings page. Contains all
 * global state management for the application.
 */
import {combineReducers, createStore} from 'redux';

import settingsReducer, {State as SettingsState} from 'options_ui/store/settings/reducer';

export type State = {
  settings: SettingsState
};

const rootReducer = combineReducers<State>({
  settings: settingsReducer
});

export default createStore(rootReducer);
