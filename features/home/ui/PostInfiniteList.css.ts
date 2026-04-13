import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const postGrid = style({
  display: "grid",
  gap: "1.3rem",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "0.95rem",
      gridTemplateColumns: "1fr",
    },
  },
});

export const searchFieldWrapper = style({
  marginBottom: "1rem",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "0.85rem",
    },
  },
});

export const searchInput = style({
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "0.5rem",
  color: vars.color.text,
  fontSize: "0.95rem",
  lineHeight: 1.4,
  minHeight: "2.75rem",
  padding: "0.65rem 0.8rem",
  width: "100%",
  selectors: {
    "&:focus-visible": {
      borderColor: vars.color.accent,
      outline: `2px solid ${vars.color.accentSoft}`,
      outlineOffset: "1px",
    },
  },
});

export const statusText = style({
  color: vars.color.textMuted,
  fontSize: "0.9rem",
  marginTop: "1rem",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.88rem",
    },
  },
});

export const sentinel = style({
  height: "1px",
  marginTop: "1px",
});
