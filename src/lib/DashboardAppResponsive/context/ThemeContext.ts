import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { DefaultTheme } from "styled-components";
export { useTheme, ThemeContext, withTheme } from "styled-components";

export type PropsWithTheme<T = unknown> = T & { theme: DefaultTheme };

type ThemeNameContextValue = {
  themeName: string;
  themeMode: "dark" | "light" | "system";
  setThemeName: (name?: string) => void;
  setThemeMode: (mode: "dark" | "light" | "system") => void;
  isDarkTheme: () => boolean;
};

export const useThemeName = create<ThemeNameContextValue>()(
  persist(
    (set, get) => ({
      themeName: "",
      themeMode: "dark",
      isDarkTheme: () => {
        return (
          get().themeMode === "dark" ||
          (get().themeName || "").toLowerCase().indexOf("dark") > -1
        );
      },
      setThemeMode: (mode: "dark" | "light" | "system") => {
        document.documentElement.setAttribute("data-theme", mode);
        return set((state) => ({
          ...state,
          mode,
        }));
      },
      setThemeName: (name = "") =>
        set((state) => {
          const themeMode =
            name.toLowerCase().indexOf("dark") > -1 ? "dark" : "light";
          document.documentElement.setAttribute("data-theme", themeMode);
          return {
            ...state,
            themeName: name,
            themeMode,
          };
        }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
