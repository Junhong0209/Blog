import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const postGrid = style({
  display: "grid",
  gap: "1.3rem",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const searchFieldWrapper = style({
  marginBottom: "1rem",
});

export const searchInput = style({
  width: "100%",
  fontSize: "0.95rem",
  lineHeight: 1.4,
  padding: "0.65rem 0.8rem",
  border: `1px solid ${vars.color.border}`,
  borderRadius: "0.5rem",
  color: vars.color.text,
  backgroundColor: vars.color.background,
});

export const statusText = style({
  color: vars.color.textMuted,
  fontSize: "0.9rem",
  marginTop: "1rem",
  textAlign: "center",
});

export const sentinel = style({
  height: "1px",
  marginTop: "1px",
});
