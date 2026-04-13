import type { Metadata } from "next";
import Script from "next/script";
import { PageShell } from "@/components/layout/PageShell";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/shared/constants/site";
import { THEME_STORAGE_KEY } from "@/shared/constants/theme";
import "pretendard/dist/web/static/pretendard.css";
import "@/styles/theme.css";
import "@/styles/global.css";

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

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-initialize" strategy="beforeInteractive">
          {initializeThemeScript}
        </Script>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
