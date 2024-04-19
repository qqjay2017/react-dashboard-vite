// import React, { createContext, useContext } from "react";

// export interface ThemeContextValue {}

// export const ThemeContext = createContext<ThemeContextValue>({});

// export const useThemeContext = () => useContext(ThemeContext);
import { createContext, useContext } from "react";
import { DefaultTheme } from "styled-components";
export { useTheme, ThemeContext, withTheme } from "styled-components";

export type PropsWithTheme<T = unknown> = T & { theme: DefaultTheme };

export const ThemeNameContext = createContext<{
  themeName: string;
  setThemeName: (name?: string) => void;
  isDarkTheme: boolean;
}>({
  themeName: localStorage.getItem("themeName") || "",
  setThemeName: () => {},
  isDarkTheme: false,
});

export const useThemeName = () => useContext(ThemeNameContext);
