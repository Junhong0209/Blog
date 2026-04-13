"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, type ThemeMode } from "@/shared/constants/theme";
import * as styles from "./ThemeToggle.css";

const isThemeMode = (value: string | null): value is ThemeMode => {
  return value === "light" || value === "dark";
};

const readInitialTheme = (): ThemeMode => {
  if (typeof document === "undefined") {
    return "light";
  }

  const fromDataset = document.documentElement.dataset.theme ?? null;

  if (isThemeMode(fromDataset)) {
    return fromDataset;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme: ThemeMode): void => {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
};

const subscribeTheme = (onStoreChange: () => void): (() => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleThemeChange = () => {
    onStoreChange();
  };

  window.addEventListener("themechange", handleThemeChange);

  return () => {
    window.removeEventListener("themechange", handleThemeChange);
  };
};

const getThemeSnapshot = (): ThemeMode => {
  if (typeof document === "undefined") {
    return "light";
  }

  return readInitialTheme();
};

export const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "light");

  const handleToggle = (): void => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
  };

  return (
    <button
      aria-label="Toggle color theme"
      className={styles.button}
      onClick={handleToggle}
      type="button"
    >
      <span aria-hidden className={styles.icon}>
        {theme === "dark" ? "D" : "L"}
      </span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
};
