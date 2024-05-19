import { PropsWithChildren, createContext, useContext, useMemo } from "react";



export interface DefaultTheme {
  [key: string]: any;
}
export const ThemeContext = createContext<DefaultTheme | undefined>(undefined);
type ThemeFn = (outerTheme?: DefaultTheme | undefined) => DefaultTheme;
type ThemeArgument = DefaultTheme | ThemeFn;

export function useTheme(): DefaultTheme {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return {}
  }

  return theme;
}

function mergeTheme(theme: ThemeArgument, outerTheme?: DefaultTheme | undefined): DefaultTheme {
  if (!theme) {
    return {}
  }

  if (typeof theme === 'function') {
    const themeFn = theme as ThemeFn;
    const mergedTheme = themeFn(outerTheme);



    return mergedTheme || {};
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    throw new Error("theme属性必须是一个对象")
  }

  return outerTheme ? { ...outerTheme, ...theme } : theme;
}


export interface ThemeContextProviderProps extends PropsWithChildren {
  theme?: ThemeArgument;
  themeName?: string;
}
export const ThemeContextProvider = ({
  theme,
  children,
}: ThemeContextProviderProps) => {
  const outerTheme = useContext(ThemeContext);
  const themeContext = useMemo(
    () => mergeTheme(theme || {}, outerTheme),
    [theme, outerTheme]
  );
  return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>;
};
