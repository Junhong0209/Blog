import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const article = style({
  margin: "0 auto",
  maxWidth: "820px",
  paddingTop: "1rem",
  wordBreak: "break-word",
  "@media": {
    "screen and (max-width: 768px)": {
      paddingTop: "0.35rem",
    },
  },
});

export const backLink = style({
  color: vars.color.accent,
  display: "block",
  marginBottom: "1.2rem",
  minHeight: "2.25rem",
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: "2px",
    },
  },
});

export const publishedAt = style({
  color: vars.color.textMuted,
  display: "inline-block",
  fontSize: "0.95rem",
  marginBottom: "0.75rem",
});

export const title = style({
  fontFamily: vars.font.display,
  fontSize: "clamp(2rem, 6vw, 3.6rem)",
  lineHeight: 1.08,
  margin: "0 0 1rem",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "0.8rem",
    },
  },
});

export const description = style({
  color: vars.color.textMuted,
  fontSize: "clamp(1rem, 4.5vw, 1.15rem)",
  lineHeight: 1.65,
  margin: "0 0 1.5rem",
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginBottom: "2.5rem",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "1.7rem",
    },
  },
});

export const tag = style({
  background: vars.color.accentSoft,
  borderRadius: vars.radius.pill,
  color: vars.color.accent,
  padding: "0.4rem 0.8rem",
});
