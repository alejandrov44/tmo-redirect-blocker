import { WrongPages } from "./enums";

const html = document.documentElement.outerHTML;
const url = window.location.href;
const regex = /https:\/\/.*?.com\/news\/.*?\/(?:cascade|paginated)/

if (regex.test(url)) {
  // Send the HTML to the background script
  chrome.runtime.sendMessage({ html: html });
}
