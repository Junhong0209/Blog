import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const heading = style({
  fontFamily: vars.font.display,
  fontSize: "clamp(1.5rem, 6vw, 2rem)",
  lineHeight: 1.25,
  margin: "3rem 0 1rem",
  "@media": {
    "screen and (max-width: 768px)": {
      margin: "2rem 0 0.8rem",
    },
  },
});

export const subheading = style({
  fontSize: "clamp(1.2rem, 5vw, 1.35rem)",
  lineHeight: 1.35,
  margin: "2rem 0 0.75rem",
  "@media": {
    "screen and (max-width: 768px)": {
      margin: "1.6rem 0 0.65rem",
    },
  },
});

export const paragraph = style({
  color: vars.color.textMuted,
  fontSize: "clamp(0.97rem, 4.2vw, 1.05rem)",
  lineHeight: 1.75,
  margin: "0 0 1rem",
});

export const list = style({
  color: vars.color.textMuted,
  lineHeight: 1.7,
  margin: "0 0 1.25rem",
  paddingLeft: "1.25rem",
  "@media": {
    "screen and (max-width: 768px)": {
      paddingLeft: "1.1rem",
    },
  },
});

export const listItem = style({
  marginBottom: "0.5rem",
});

export const link = style({
  color: vars.color.accent,
  textDecoration: "underline",
  textUnderlineOffset: "0.18em",
});

export const inlineCode = style({
  background: vars.color.surfaceStrong,
  borderRadius: vars.radius.sm,
  padding: "0.15rem 0.45rem",
});

export const preformatted = style({
  background: "#201a15",
  borderRadius: vars.radius.md,
  color: "#f7f2ea",
  margin: 0,
  overflowX: "auto",
  padding: "1.25rem",
  "@media": {
    "screen and (max-width: 768px)": {
      borderRadius: "0.6rem",
      fontSize: "0.84rem",
      padding: "0.95rem",
    },
  },
});

export const blockquote = style({
  borderLeft: `3px solid ${vars.color.accent}`,
  color: vars.color.textMuted,
  margin: "1.5rem 0",
  paddingLeft: "1rem",
});

globalStyle(`${preformatted} > code`, {
  display: "block",
});

globalStyle(`${preformatted} pre[data-language]`, {
  background: "transparent !important",
  margin: 0,
  padding: 0,
});

globalStyle(`${preformatted} pre[data-language] code`, {
  background: "transparent !important",
  borderRadius: 0,
  color: "inherit",
  display: "grid",
  padding: 0,
});

globalStyle(`${preformatted} pre[data-language] .line`, {
  display: "block",
  minHeight: "1.5rem",
});

globalStyle(`${preformatted} code`, {
  wordBreak: "normal",
});
