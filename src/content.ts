import { WrongPages } from "./enums";

const html = document.documentElement.outerHTML;
const url = window.location.href;

if (Object.values(WrongPages).some((value) => url.includes(value))) {
  // Send the HTML to the background script
  chrome.runtime.sendMessage({ html: html });
}
