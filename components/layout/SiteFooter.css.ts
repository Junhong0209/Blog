import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const footer = style({
  color: vars.color.textMuted,
  fontSize: "0.95rem",
  padding: "4rem 0 2rem",
  textAlign: "center",
});
