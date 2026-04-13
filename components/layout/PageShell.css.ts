import { style } from "@vanilla-extract/css";

export const page = style({
  minHeight: "100vh",
  position: "relative",
});

export const backgroundAccent = style({
  background:
    "radial-gradient(420px 320px at top left, rgba(14, 159, 110, 0.14), transparent 100%), radial-gradient(520px 360px at top right, rgba(216, 243, 232, 0.9), transparent 100%)",
  inset: 0,
  pointerEvents: "none",
  position: "absolute",
});

export const container = style({
  margin: "0 auto",
  maxWidth: "1240px",
  padding: "0 1rem",
  position: "relative",
});

export const main = style({
  minHeight: "calc(100vh - 220px)",
});
