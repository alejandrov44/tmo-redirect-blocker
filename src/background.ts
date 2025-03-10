/* eslint-disable @typescript-eslint/no-deprecated */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { load } from "cheerio";

// const blockedTrackingUrl = "https://sauthooptoo.net/";
// const blockedAdsUrl = "https://wa.apostilprinks.com/";

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.html) {
    const label = 'a[title="Paginada"]';
    const $ = load(message.html);
    const url = $(label).attr("href");
    if (!url) return;
    const regex = /^https:\/\/.*\/\w+\/(.*?)\/\w\w/;
    const id = regex.exec(url)?.[1];
    if (!sender.tab?.id) return;
    // Redirect the user to the correct visor url
    // eslint-disable-next-line no-void
    void chrome.tabs.update(sender.tab.id, { url: `https://zonatmo.com/viewer/${id}/cascade` });
  }
});
