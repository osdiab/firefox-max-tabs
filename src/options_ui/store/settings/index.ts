/**
 * Represents an external API for interacting with the
 * part of the store that manages settings.
 */

import {State} from 'options_ui/store/settings/reducer';

import {BrowserError, InvalidArgumentError} from 'options_ui/store/errors';
import {setMaxTabsPerWindowAction} from 'options_ui/store/settings/actions';

export async function setMaxTabs(maxTabs: number) {
  if (maxTabs < 1) {
    throw new InvalidArgumentError(
      'maxTabs must be a positive integer'
    );
  }

  try {
    await browser.storage.local.set({maxTabs});
  } catch (e) {
    throw new BrowserError('Could not store settings', e);
  }

  return setMaxTabsPerWindowAction({maxTabs});
}
