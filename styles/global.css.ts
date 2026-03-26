import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html", {
  background: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  scrollBehavior: "smooth",
});

globalStyle("body", {
  margin: 0,
  minHeight: "100vh",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button, input, textarea, select", {
  font: "inherit",
});

globalStyle("img", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("::selection", {
  background: vars.color.accent,
  color: vars.color.surface,
});
