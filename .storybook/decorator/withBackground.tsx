import { useMemo, useEffect, useState } from "@storybook/preview-api";
import type { Renderer, StoryContext } from "@storybook/types";
import { useDarkMode } from "storybook-dark-mode";

import { addBackgroundStyle, isReduceMotionEnabled } from "../helpers";

export const withBackground = (
  StoryFn: any,
  context: StoryContext<Renderer>
) => {
  const isDarkTheme = useDarkMode();

  const selectedBackgroundColor = useMemo<string>(() => {
    return isDarkTheme ? "#111" : "#fff";
  }, [isDarkTheme]);

  const selector =
    context.viewMode === "docs"
      ? `#anchor--${context.id} .docs-story`
      : ".sb-show-main";

  const backgroundStyles = useMemo(() => {
    const transitionStyle = "transition: background-color 0.3s;";
    return `
      ${selector} {
        background: ${selectedBackgroundColor} !important;
        ${isReduceMotionEnabled() ? "" : transitionStyle}
      }
    `;
  }, [selectedBackgroundColor, selector, isDarkTheme]);

  const initStyle = () => {
    const selectorId =
      context.viewMode === "docs"
        ? `addon-backgrounds-docs-${context.id}`
        : `addon-backgrounds-color`;

    addBackgroundStyle(
      selectorId,
      backgroundStyles,
      context.viewMode === "docs" ? context.id : null
    );
  };

  useEffect(() => {
    initStyle();
  }, [backgroundStyles, context, String(isDarkTheme)]);

  initStyle();

  return StoryFn();
};
