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
