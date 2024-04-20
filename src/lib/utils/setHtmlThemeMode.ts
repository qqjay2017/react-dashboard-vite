export const setHtmlThemeMode = (mode: "dark" | "light" | "system") => {
  try {
    document.documentElement.style.colorScheme = mode;
    document.documentElement.setAttribute("data-theme", mode);
  } catch (error) {
    console.log(error);
  }
};
