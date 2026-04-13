import { createGlobalTheme } from "@vanilla-extract/css";

const lightTheme = {
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
} as const;

const darkTheme = {
  color: {
    background: "#111611",
    surface: "#171d18",
    surfaceStrong: "#202923",
    border: "#2f3f35",
    text: "#e8f2ea",
    textMuted: "#afc0b3",
    accent: "#3ddb9f",
    accentSoft: "#1c3a2f",
    shadow: "rgba(0, 0, 0, 0.35)",
  },
  font: lightTheme.font,
  space: lightTheme.space,
  radius: lightTheme.radius,
} as const;

export const vars = createGlobalTheme(":root", lightTheme);

createGlobalTheme(':root[data-theme="light"]', vars, lightTheme);
createGlobalTheme(':root[data-theme="dark"]', vars, darkTheme);
