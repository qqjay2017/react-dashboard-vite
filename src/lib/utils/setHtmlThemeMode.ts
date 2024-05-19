export const setHtmlThemeMode = (mode: "dark" | "light" | "system") => {
  try {
    document.documentElement.style.colorScheme = mode;
    document.documentElement.setAttribute("data-theme", mode);
  } catch (error) {
    console.log(error);
  }
};


export const setHtmlThemeName = (name = '') => {

  try {
    document.documentElement.setAttribute("data-theme-name", name);
  } catch (error) {
    console.log(error);
  }
};
