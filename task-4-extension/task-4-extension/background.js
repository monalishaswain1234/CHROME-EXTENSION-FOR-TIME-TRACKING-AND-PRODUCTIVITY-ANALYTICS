// let activeTab = "";
// let activeSince = Date.now();
// let data = {};

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.get("timeData", (res) => {
//     data = res.timeData || {};
//   });
// });

// chrome.tabs.onActivated.addListener(async (activeInfo) => {
//   const tab = await chrome.tabs.get(activeInfo.tabId);
//   handleTabSwitch(tab.url);
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (tab.active && changeInfo.status === "complete") {
//     handleTabSwitch(tab.url);
//   }
// });

// function handleTabSwitch(url) {
//   const domain = new URL(url).hostname;
//   const now = Date.now();
//   const timeSpent = now - activeSince;

//   if (activeTab) {
//     if (!data[activeTab]) data[activeTab] = 0;
//     data[activeTab] += timeSpent;
//   }

//   activeTab = domain;
//   activeSince = now;
//   chrome.storage.local.set({ timeData: data });
// }