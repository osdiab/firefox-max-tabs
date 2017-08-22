/**
 * Entrypoint for the background script
 */

async function maintainMaxTabsInWindow(
  tab: browser.tabs.Tab
) {
  const tabs = await browser.tabs.query({
    windowId: tab.windowId
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
  tab: browser.tabs.Tab
) {
  return maintainMaxTabsInWindow(tab);
}

browser.tabs.onCreated.addListener(handleMessage);
