/* eslint-disable @typescript-eslint/no-deprecated */
import { WrongPages } from "./enums";

const html = document.documentElement.outerHTML;
const url = globalThis.location.href;

if (Object.values(WrongPages).some((value) => url.includes(value))) {
  // Send the HTML to the background script
  // eslint-disable-next-line no-void
  void chrome.runtime.sendMessage({ html });
}
