// import React, { createContext, useContext } from "react";

// export interface ThemeContextValue {}

// export const ThemeContext = createContext<ThemeContextValue>({});

// export const useThemeContext = () => useContext(ThemeContext);
import { DefaultTheme } from "styled-components";
export { useTheme, ThemeContext, withTheme } from "styled-components";

export type PropsWithTheme<T = unknown> = T & { theme: DefaultTheme };
