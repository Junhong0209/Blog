import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0 1.9rem",
  width: "100%",
});

export const brand = style({
  color: vars.color.accent,
  fontFamily: vars.font.display,
  fontSize: "1.95rem",
  fontWeight: 700,
});

export const navigation = style({
  alignItems: "center",
  display: "flex",
  gap: "1.2rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const navigationLink = style({
  color: vars.color.textMuted,
  fontSize: "0.95rem",
  transition: "color 180ms ease",
  selectors: {
    "&:hover": {
      color: vars.color.text,
    },
  },
});
