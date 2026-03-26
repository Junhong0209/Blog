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
  fontSize: "1.08rem",
  lineHeight: 1.9,
  margin: 0,
  maxWidth: "720px",
});
