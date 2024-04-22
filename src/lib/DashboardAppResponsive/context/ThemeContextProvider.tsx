import { PropsWithChildren } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";

import { ThemeModeProvider } from "./ThemeModeContextProvider";

export interface ThemeContextProviderProps extends PropsWithChildren {
  theme?: DefaultTheme;
  themeName?: string;
}
export const ThemeContextProvider = ({
  theme,
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeModeProvider>
      <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>
    </ThemeModeProvider>
  );
};
