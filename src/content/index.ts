/**
 * Entry point for content script
 */

import {ContentMessageKind} from 'common/messageKinds';

async function main() {
  browser.runtime.sendMessage({
    kind: ContentMessageKind.TAB_OPENED
  });
}

main();
