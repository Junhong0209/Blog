import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const wrapper = style({
  paddingTop: "1rem",
});

export const title = style({
  fontFamily: vars.font.display,
  fontSize: "3rem",
  margin: "0 0 1rem",
});

export const description = style({
  color: vars.color.textMuted,
  lineHeight: 1.8,
  margin: "0 0 2rem",
  maxWidth: "620px",
});

export const grid = style({
  display: "grid",
  gap: "1.5rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
});

export const card = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  boxShadow: `0 16px 36px ${vars.color.shadow}`,
  padding: "1.5rem",
});

export const cardTitle = style({
  fontSize: "1.25rem",
  margin: "0 0 0.65rem",
});

export const cardDescription = style({
  color: vars.color.textMuted,
  lineHeight: 1.7,
  margin: 0,
});
