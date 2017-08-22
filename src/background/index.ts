/**
 * Entrypoint for the background script
 */
import Message from 'common/Message';
import {ContentMessageKind} from 'common/messageKinds';

async function maintainMaxTabsInWindow() {
  const tabs = await browser.tabs.query({
    currentWindow: true
  });
  const removableTabs = tabs.filter(t =>
    !t.pinned && t.id && t.id !== browser.tabs.TAB_ID_NONE);

  if (removableTabs.length > 5) {
    const toClose = removableTabs.sort((a, b) => a.index - b.index)[0];
    try {
      browser.tabs.remove(<number>toClose.id);
    } catch (err) {
      // TODO: convert err into a application-level one
      return err;
    }
  }

  return Promise.resolve();
}

async function handleMessage(
  message: Message,
  sender: browser.runtime.MessageSender,
  sendResponse: (resp: Message) => void
) {
  switch (message.kind) {
    case ContentMessageKind.TAB_OPENED:
      return maintainMaxTabsInWindow();
    default:
      console.error(message);
      throw new Error(`Invalid message type: ${message.kind}`);
  }
}

browser.runtime.onMessage.addListener(handleMessage);
