import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import "pretendard/dist/web/static/pretendard.css";
import "@/styles/theme.css";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "junhong.dev",
    template: "%s | junhong.dev",
  },
  description: "Backend-focused developer blog built with Next.js and MDX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
