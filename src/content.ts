/* eslint-disable @typescript-eslint/no-deprecated */
const html = document.documentElement.outerHTML;
const url = globalThis.location.href;
const regexMangaUrl = /https:\/\/.*?.com\/news\/.*?\/(?:cascade|paginated)/;

if (regexMangaUrl.test(url)) {
  // Send the HTML to the background script
  // eslint-disable-next-line no-void
  void chrome.runtime.sendMessage({ html });
}
