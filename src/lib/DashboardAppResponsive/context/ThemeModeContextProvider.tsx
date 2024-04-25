import { setHtmlThemeMode } from "@/lib/utils/setHtmlThemeMode";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  isDarkTheme: () => boolean;
  themeMode: Theme;
  setThemeMode: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  isDarkTheme: () => true,
  themeMode: "system",
  setThemeMode: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeModeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
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

  const value = {
    isDarkTheme: () => Boolean(!theme || theme == "system" || theme == "light"),
    themeMode: theme,
    setThemeMode: (mode: Theme) => {
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

export const useThemeMode = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
