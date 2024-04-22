export const setHtmlThemeMode = (mode: "dark" | "light" | "system") => {
  console.log(mode, "设置主题模式");
  try {
    document.documentElement.style.colorScheme = mode;
    document.documentElement.setAttribute("data-theme", mode);
  } catch (error) {
    console.log(error);
  }
};
