import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const article = style({
  margin: "0 auto",
  maxWidth: "820px",
  paddingTop: "1rem",
});

export const backLink = style({
  color: vars.color.accent,
  display: "block",
  marginBottom: "1.5rem",
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
  lineHeight: 1,
  margin: "0 0 1rem",
});

export const description = style({
  color: vars.color.textMuted,
  fontSize: "1.15rem",
  lineHeight: 1.8,
  margin: "0 0 2rem",
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginBottom: "2.5rem",
});

export const tag = style({
  background: vars.color.accentSoft,
  borderRadius: vars.radius.pill,
  color: vars.color.accent,
  padding: "0.4rem 0.8rem",
});
