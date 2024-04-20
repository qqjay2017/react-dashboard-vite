import { PropsWithChildren, useEffect } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";
import { useThemeName } from "./ThemeContext";

export interface ThemeContextProviderProps extends PropsWithChildren {
  theme?: DefaultTheme;
  themeName?: string;
}
export const ThemeContextProvider = ({
  themeName = "",
  theme,
  children,
}: ThemeContextProviderProps) => {
  const { themeName: _themeName, setThemeName } = useThemeName();

  useEffect(() => {
    if (themeName != _themeName) {
      setThemeName(themeName);
    }
  }, [themeName, _themeName, setThemeName]);
  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
};
