import { SITE_URL } from "@/shared/constants/site";

type AnalyticsParamValue = string | number | boolean | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const isAnalyticsEnabled = GA_MEASUREMENT_ID.length > 0;

const withGtag = (callback: (gtag: (...args: unknown[]) => void) => void): void => {
  if (!isAnalyticsEnabled || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  callback(window.gtag);
};

export const trackPageView = (path: string): void => {
  withGtag((gtag) => {
    gtag("event", "page_view", {
      page_location: `${SITE_URL}${path}`,
      page_path: path,
    });
  });
};

export const trackEvent = (
  eventName: string,
  params: Record<string, AnalyticsParamValue> = {},
): void => {
  withGtag((gtag) => {
    gtag("event", eventName, params);
  });
};
