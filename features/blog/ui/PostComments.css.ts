import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const section = style({
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: "3.5rem",
  paddingTop: "2rem",
});

export const title = style({
  fontFamily: vars.font.display,
  fontSize: "1.5rem",
  lineHeight: 1.2,
  margin: "0 0 1rem",
});

export const container = style({
  minHeight: "220px",
});

export const unavailable = style({
  color: vars.color.textMuted,
  fontSize: "0.95rem",
  margin: 0,
});
