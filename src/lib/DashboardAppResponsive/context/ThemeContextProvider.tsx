import { ElementType, PropsWithChildren } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";
export interface ThemeContextProviderProps extends PropsWithChildren {
  theme?: DefaultTheme;
  containerWrapper?: ElementType;
  title?: ElementType;
}
export const ThemeContextProvider = ({
  theme,
  children,
}: ThemeContextProviderProps) => {
  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
};
