import { load } from "cheerio";

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.html) {
    const $ = load(message.html);
    const url = $("a[title=\"Paginada\"]").attr("href")!;
    const id = /^https:\/\/.*\/\w+\/(.*?)\/\w\w/.exec(url)![1];
    if (!sender.tab?.id) return;
    // Redirect the user to the correct visor url
    chrome.tabs.update(sender.tab?.id, { url: `https://zonatmo.com/viewer/${id}/cascade` });
  }
});
