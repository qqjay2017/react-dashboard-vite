import { PropsWithChildren, useEffect, useState } from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";
import { ThemeNameContext } from "./ThemeContext";
export interface ThemeContextProviderProps extends PropsWithChildren {
  theme?: DefaultTheme;
  themeName?: string;
}
export const ThemeContextProvider = ({
  themeName,
  theme,
  children,
}: ThemeContextProviderProps) => {
  const [_themeName, _setThemeName] = useState(
    localStorage.getItem("themeName") || themeName || ""
  );

  const setThemeName = (name = "") => {
    _setThemeName(name);
    localStorage.setItem("themeName", name);
    ".".indexOf("dark");
  };

  useEffect(() => {
    if (themeName !== _themeName) {
      setThemeName(themeName);
    }
  }, [themeName, _themeName]);

  useEffect(() => {
    localStorage.setItem("themeName", themeName || "");
  }, [themeName]);

  return (
    <ThemeNameContext.Provider
      value={{
        themeName: _themeName,
        setThemeName: setThemeName,
        isDarkTheme: !!(
          _themeName &&
          _themeName.indexOf &&
          _themeName.toLowerCase().indexOf("dark") > -1
        ),
      }}
    >
      <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>
    </ThemeNameContext.Provider>
  );
};
