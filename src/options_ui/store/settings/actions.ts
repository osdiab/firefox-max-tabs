/**
 * Enumerates possible state transitions for the part
 * of the application state describing settings.
 */
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('settings');

export const setMaxTabsPerWindowAction =
  actionCreator<{maxTabs: number}>('SET_MAX_TABS');
