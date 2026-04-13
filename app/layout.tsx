import type { Metadata } from "next";
import Script from "next/script";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import { PageShell } from "@/components/layout/PageShell";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/shared/constants/site";
import { THEME_STORAGE_KEY } from "@/shared/constants/theme";
import { GA_MEASUREMENT_ID } from "@/shared/lib/analytics";
import "pretendard/dist/web/static/pretendard.css";
import "@/styles/theme.css";
import "@/styles/global.css";

const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    title: SITE_NAME,
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    description: SITE_DESCRIPTION,
    title: SITE_NAME,
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? {
        google: GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initializeThemeScript = `
    (function() {
      try {
        var storageKey = "${THEME_STORAGE_KEY}";
        var storedTheme = window.localStorage.getItem(storageKey);
        var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        var theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;
        document.documentElement.setAttribute("data-theme", theme);
      } catch (error) {}
    })();
  `;
  const initializeAnalyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "${GA_MEASUREMENT_ID}", { send_page_view: false });
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-initialize" strategy="beforeInteractive">
          {initializeThemeScript}
        </Script>
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {initializeAnalyticsScript}
            </Script>
            <AnalyticsTracker />
          </>
        ) : null}
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
