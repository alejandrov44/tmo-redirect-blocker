import { WrongPages } from "./enums";

const html = document.documentElement.outerHTML;
const url = window.location.href;
const regexMangaUrl = /https:\/\/.*?.com\/news\/.*?\/(?:cascade|paginated)/

if (regexMangaUrl.test(url)) {
  // Send the HTML to the background script
  chrome.runtime.sendMessage({ html: html });
}
