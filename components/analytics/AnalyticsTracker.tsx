"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent, trackPageView } from "@/shared/lib/analytics";

const isExternalHttpLink = (href: string): boolean => {
  try {
    const destination = new URL(href, window.location.origin);

    if (destination.protocol !== "http:" && destination.protocol !== "https:") {
      return false;
    }

    return destination.origin !== window.location.origin;
  } catch {
    return false;
  }
};

export const AnalyticsTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const pathWithQuery = query.length > 0 ? `${pathname}?${query}` : pathname;

    trackPageView(pathWithQuery);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const anchor = target.closest("a[href]");

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || !isExternalHttpLink(href)) {
        return;
      }

      const destination = new URL(href, window.location.origin);

      trackEvent("external_link_click", {
        link_domain: destination.hostname,
        link_url: destination.href,
      });
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return null;
};
