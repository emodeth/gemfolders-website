import { EXTENSION_ID } from "@/lib/constants";

export function triggerPricingPurchase(planName: string) {
  interface ChromeRuntime {
    sendMessage: (
      extensionId: string,
      message: { action: string; plan?: string },
      callback?: (response: unknown) => void,
    ) => void;
    lastError?: { message: string };
  }

  interface Chrome {
    runtime?: ChromeRuntime;
  }

  const chrome = (globalThis as unknown as { chrome?: Chrome }).chrome;

  if (chrome?.runtime?.sendMessage) {
    chrome.runtime.sendMessage(
      EXTENSION_ID,
      { action: "TRIGGER_PURCHASE", plan: planName },
      (response: unknown) => {
        if (chrome.runtime?.lastError) {
          console.log(
            "Extension not found or communication error:",
            chrome.runtime.lastError,
          );
          globalThis.open(
            "https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi",
            "_blank",
          );
        } else {
          console.log("Extension response:", response);
        }
      },
    );
  } else {
    globalThis.open(
      "https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi",
      "_blank",
    );
  }
}
