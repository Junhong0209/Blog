"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
import * as styles from "./CodeBlock.css";

const mergeClassNames = (...classNames: Array<string | undefined>): string => {
  return classNames.filter(Boolean).join(" ");
};

export const CodeBlock = ({ className, children, ...props }: ComponentPropsWithoutRef<"pre">) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [toastPhase, setToastPhase] = useState<"hidden" | "enter" | "exit">("hidden");
  const hideTimeoutRef = useRef<number | null>(null);
  const removeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }

      if (removeTimeoutRef.current !== null) {
        window.clearTimeout(removeTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async (): Promise<void> => {
    const codeElement = preRef.current?.querySelector("code");
    const text = codeElement?.textContent?.trimEnd();

    if (!text) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }

      if (removeTimeoutRef.current !== null) {
        window.clearTimeout(removeTimeoutRef.current);
      }

      setToastPhase("enter");
      hideTimeoutRef.current = window.setTimeout(() => {
        setToastPhase("exit");
      }, 1300);

      removeTimeoutRef.current = window.setTimeout(() => {
        setToastPhase("hidden");
        setIsCopied(false);
      }, 1520);
    } catch {
      setIsCopied(false);
      setToastPhase("hidden");
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.copyButton} onClick={handleCopy} type="button">
        {isCopied ? "Copied" : "Copy"}
      </button>
      <pre className={mergeClassNames(styles.pre, className)} ref={preRef} {...props}>
        {children}
      </pre>
      {toastPhase === "hidden" ? null : (
        <div
          className={mergeClassNames(
            styles.toast,
            toastPhase === "enter" ? styles.toastEnterMotion : styles.toastExitMotion,
          )}
        >
          클립보드에 복사되었습니다!
        </div>
      )}
    </div>
  );
};
