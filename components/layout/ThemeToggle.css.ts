import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const button = style({
  alignItems: "center",
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.pill,
  color: vars.color.textMuted,
  cursor: "pointer",
  display: "inline-flex",
  fontSize: "0.82rem",
  fontWeight: 600,
  gap: "0.35rem",
  minHeight: "2.25rem",
  padding: "0.28rem 0.72rem",
  transition: "border-color 180ms ease, color 180ms ease, background-color 180ms ease",
  selectors: {
    "&:hover": {
      borderColor: vars.color.accent,
      color: vars.color.text,
    },
    "&:focus-visible": {
      borderColor: vars.color.accent,
      color: vars.color.text,
      outline: `2px solid ${vars.color.accentSoft}`,
      outlineOffset: "1px",
    },
  },
});

export const icon = style({
  fontSize: "0.9rem",
  lineHeight: 1,
});
