import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#f5f1e8",
    surface: "#fbf7f0",
    surfaceStrong: "#efe7da",
    border: "#d8ccb9",
    text: "#211b14",
    textMuted: "#6a5c4b",
    accent: "#0e9f6e",
    accentSoft: "#d8f3e8",
    shadow: "rgba(32, 24, 16, 0.08)",
  },
  font: {
    body: '"Pretendard", "Noto Sans KR", sans-serif',
    display: '"Pretendard", "Noto Sans KR", sans-serif',
  },
  space: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4.5rem",
  },
  radius: {
    sm: "14px",
    md: "22px",
    lg: "32px",
    pill: "999px",
  },
});
