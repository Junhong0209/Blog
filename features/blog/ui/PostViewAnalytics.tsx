"use client";

import { useEffect } from "react";
import { trackEvent } from "@/shared/lib/analytics";

type PostViewAnalyticsProps = {
  slug: string;
  title: string;
};

export const PostViewAnalytics = ({ slug, title }: PostViewAnalyticsProps) => {
  useEffect(() => {
    trackEvent("post_view", {
      post_slug: slug,
      post_title: title,
    });
  }, [slug, title]);

  return null;
};
