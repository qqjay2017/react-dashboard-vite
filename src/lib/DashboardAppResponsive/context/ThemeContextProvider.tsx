import { PropsWithChildren } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";
export interface ThemeContextProviderProps extends PropsWithChildren {
  theme?: DefaultTheme;
}
export const ThemeContextProvider = ({
  theme,
  children,
}: ThemeContextProviderProps) => {
  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
};
