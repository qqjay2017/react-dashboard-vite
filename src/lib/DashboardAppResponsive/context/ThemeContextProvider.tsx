import { PropsWithChildren } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";
import { useThemeName } from "./ThemeContext";

export interface ThemeContextProviderProps extends PropsWithChildren {
  theme?: DefaultTheme;
  themeName?: string;
}
export const ThemeContextProvider = ({
  theme,
  children,
}: ThemeContextProviderProps) => {
  const { themeName: _themeName } = useThemeName();

  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
};
