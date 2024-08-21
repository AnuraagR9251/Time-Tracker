let activeTabId = null;
let startTime = null;

chrome.tabs.onActivated.addListener(function(activeInfo) {
  activeTabId = activeInfo.tabId;
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tabId === activeTabId) {
    startTime = Date.now();
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getTime") {
    let elapsedTime = Date.now() - startTime;
    sendResponse({time: elapsedTime});
  }
});