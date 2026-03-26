import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  boxShadow: `0 12px 24px ${vars.color.shadow}`,
  display: "block",
  minHeight: "168px",
  padding: "1.4rem 1.5rem",
  transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
  selectors: {
    "&:hover": {
      borderColor: vars.color.accent,
      boxShadow: "0 16px 30px rgba(14, 159, 110, 0.12)",
      transform: "translateY(-2px)",
    },
  },
});

export const date = style({
  color: vars.color.textMuted,
  display: "inline-block",
  fontSize: "0.82rem",
  marginBottom: "0.7rem",
});

export const title = style({
  fontSize: "1.18rem",
  fontWeight: 600,
  margin: "0 0 0.5rem",
});

export const description = style({
  color: vars.color.textMuted,
  fontSize: "0.95rem",
  lineHeight: 1.6,
  margin: "0 0 1rem",
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.4rem",
});

export const tag = style({
  background: vars.color.accentSoft,
  borderRadius: vars.radius.pill,
  color: vars.color.accent,
  fontSize: "0.76rem",
  padding: "0.28rem 0.58rem",
});
