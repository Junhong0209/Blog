import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const wrapper = style({
  paddingTop: "0.35rem",
  "@media": {
    "screen and (max-width: 768px)": {
      paddingTop: "0.1rem",
    },
  },
});

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

export const title = style({
  fontSize: "clamp(1.05rem, 4.5vw, 1.25rem)",
  fontWeight: 600,
  color: vars.color.text,
  margin: "0 0 0.5rem",
});

export const intro = style({
  fontSize: "clamp(0.95rem, 3.8vw, 1rem)",
  color: vars.color.text,
  margin: "0.45rem 0 1.2rem",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "1rem",
    },
  },
});
