import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const heading = style({
  fontFamily: vars.font.display,
  fontSize: "2rem",
  margin: "3rem 0 1rem",
});

export const subheading = style({
  fontSize: "1.35rem",
  margin: "2rem 0 0.75rem",
});

export const paragraph = style({
  color: vars.color.textMuted,
  fontSize: "1.05rem",
  lineHeight: 1.9,
  margin: "0 0 1rem",
});

export const list = style({
  color: vars.color.textMuted,
  lineHeight: 1.8,
  margin: "0 0 1.25rem",
  paddingLeft: "1.25rem",
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
  margin: "1.5rem 0",
  overflowX: "auto",
  padding: "1.25rem",
});

export const blockquote = style({
  borderLeft: `3px solid ${vars.color.accent}`,
  color: vars.color.textMuted,
  margin: "1.5rem 0",
  paddingLeft: "1rem",
});

globalStyle(`${preformatted} code.hljs`, {
  background: "transparent",
  color: "#f8f8f2",
  display: "block",
});

globalStyle(`${preformatted} .hljs-comment`, {
  color: "#8b949e",
});

globalStyle(`${preformatted} .hljs-keyword`, {
  color: "#ff7b72",
});

globalStyle(`${preformatted} .hljs-title`, {
  color: "#d2a8ff",
});

globalStyle(`${preformatted} .hljs-string`, {
  color: "#a5d6ff",
});

globalStyle(`${preformatted} .hljs-number`, {
  color: "#79c0ff",
});

globalStyle(`${preformatted} .hljs-built_in`, {
  color: "#ffa657",
});
