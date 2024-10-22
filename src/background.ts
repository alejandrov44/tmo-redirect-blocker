import { load } from "cheerio";

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.html) {
    const label = "a[title=\"Paginada\"]";
    const $ = load(message.html);
    const url = $(label).attr("href")!;
    const regex = /^https:\/\/.*\/\w+\/(.*?)\/\w\w/;
    const id = regex.exec(url)![1];
    if (!sender.tab?.id) return;
    // Redirect the user to the correct visor url
    chrome.tabs.update(sender.tab?.id, { url: `https://zonatmo.com/viewer/${id}/cascade` });
  }
});
