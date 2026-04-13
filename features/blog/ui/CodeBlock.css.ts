import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const wrapper = style({
  margin: "1.5rem 0",
  position: "relative",
});

export const pre = style({
  margin: 0,
  paddingTop: "3.1rem !important",
});

export const copyButton = style({
  background: "rgba(251, 247, 240, 0.92)",
  border: "1px solid rgba(251, 247, 240, 0.75)",
  borderRadius: vars.radius.sm,
  color: vars.color.text,
  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.18)",
  cursor: "pointer",
  fontSize: "0.8rem",
  fontWeight: 600,
  opacity: 0,
  padding: "0.35rem 0.6rem",
  position: "absolute",
  right: "0.75rem",
  top: "0.75rem",
  transform: "translateY(-2px)",
  transition: "opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease",
  zIndex: 2,
  selectors: {
    [`${wrapper}:hover &`]: {
      opacity: 1,
      transform: "translateY(0)",
    },
    "&:hover": {
      background: "#ffffff",
      borderColor: "#ffffff",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.22)",
    },
  },
  "@media": {
    "(hover: none)": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

export const languageBadge = style({
  color: "rgba(251, 247, 240, 0.72)",
  fontSize: "0.72rem",
  fontWeight: 500,
  left: "0.75rem",
  letterSpacing: "0.06em",
  lineHeight: 1,
  padding: "0.15rem 0.1rem",
  position: "absolute",
  textTransform: "lowercase",
  top: "0.75rem",
  zIndex: 2,
});

const toastEnter = keyframes({
  "0%": {
    opacity: 0,
    transform: "translate(-50%, 16px)",
  },
  "100%": {
    opacity: 1,
    transform: "translate(-50%, 0)",
  },
});

const toastExit = keyframes({
  "0%": {
    opacity: 1,
    transform: "translate(-50%, 0)",
  },
  "100%": {
    opacity: 0,
    transform: "translate(-50%, 16px)",
  },
});

export const toast = style({
  background: "rgba(32, 26, 21, 0.95)",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.sm,
  bottom: "1.5rem",
  color: "#fbf7f0",
  fontSize: "0.85rem",
  left: "50%",
  opacity: 0,
  padding: "0.55rem 0.85rem",
  pointerEvents: "none",
  position: "fixed",
  transform: "translateX(-50%)",
  zIndex: 20,
});

export const toastError = style({
  background: "rgba(112, 28, 28, 0.95)",
  border: "1px solid rgba(255, 193, 193, 0.45)",
  color: "#fff1f1",
});

export const toastEnterMotion = style({
  animation: `${toastEnter} 220ms ease-out forwards`,
});

export const toastExitMotion = style({
  animation: `${toastExit} 220ms ease-in forwards`,
});
