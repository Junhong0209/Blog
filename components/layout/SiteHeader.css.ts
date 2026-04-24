import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem 1rem",
  justifyContent: "space-between",
  padding: "1rem 0 1.9rem",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      alignItems: "flex-start",
      padding: "0.9rem 0 1.35rem",
    },
  },
});

export const brand = style({
  color: vars.color.accent,
  fontFamily: vars.font.display,
  fontSize: "1.95rem",
  fontWeight: 700,
  lineHeight: 1.1,
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: "3px",
    },
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.55rem",
    },
  },
});

export const navigation = style({
  alignItems: "center",
  display: "flex",
  gap: "1.2rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      flexWrap: "wrap",
      gap: "0.5rem 0.75rem",
      width: "100%",
    },
  },
});

export const actions = style({
  alignItems: "center",
  display: "flex",
  gap: "0.9rem",
  "@media": {
    "screen and (max-width: 768px)": {
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "100%",
    },
  },
});

export const navigationLink = style({
  color: vars.color.textMuted,
  display: "inline-flex",
  fontSize: "0.95rem",
  lineHeight: 1.2,
  justifyContent: "center",
  alignItems: "center",
  minHeight: "2.25rem",
  padding: "0.35rem 0.2rem",
  textDecoration: "none",
  transition: "color 180ms ease",
  selectors: {
    "&:hover": {
      color: vars.color.text,
    },
    "&:focus-visible": {
      color: vars.color.text,
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: "2px",
    },
  },
});
