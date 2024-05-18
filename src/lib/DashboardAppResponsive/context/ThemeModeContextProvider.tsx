import { setHtmlThemeMode, setHtmlThemeName } from "@/lib/utils/setHtmlThemeMode";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export type ThemeMode = "dark" | "light" | "system";

export interface ThemeProviderProps extends PropsWithChildren {

  defaultTheme?: ThemeMode;
  storageKey?: string;
  themeProvider?: any;
  onThemeNameChange?: (name?: string) => void;
}

type ThemeProviderState = {
  themeName: string;
  isDarkTheme: () => boolean;
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
  setThemeName: (name?: string) => void;
};

const initialState: ThemeProviderState = {
  isDarkTheme: () => true,
  themeMode: "system",
  setThemeMode: () => null,
  setThemeName: () => null,
  themeName: '',
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeModeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  themeProvider,
  onThemeNameChange,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>(
    () => (localStorage.getItem(storageKey) as ThemeMode) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);

      setHtmlThemeMode(systemTheme);
      return;
    }

    root.classList.add(theme);
    setHtmlThemeMode(theme);
  }, [theme]);


  const realThemeProvider =
    typeof themeProvider === "function"
      ? themeProvider({ themeMode: theme })
      : themeProvider;


  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("jfDarkTheme", "jfLightTheme");
    setHtmlThemeName(realThemeProvider?.themeName);

  }, [realThemeProvider?.themeName])

  const value = {
    themeName: realThemeProvider?.themeName || '',
    setThemeName: (name = '') => {
      if (!name) {
        return
      }
      localStorage.setItem('vite-ui-theme-name', name);
      onThemeNameChange && onThemeNameChange(name)

    },
    isDarkTheme: () => Boolean(theme !== "light"),
    themeMode: theme,
    setThemeMode: (mode: ThemeMode) => {
      if (!mode) {
        return
      }

      localStorage.setItem(storageKey, mode);
      setTheme(mode);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export * from './useThemeMode'