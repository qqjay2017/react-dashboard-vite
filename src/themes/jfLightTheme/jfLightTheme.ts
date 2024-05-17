import { DashBoardTheme } from "../interface";
import { TitleNodeRenderer } from "./titleNodeRenderer";
import "./jfLightThemeGlobal.less";
import { NodeContentRenderer } from "./nodeContentRenderer";
import { JfDarkThemeContent } from "../jfDarkTheme/JfDarkThemeContent";

export const jfLightTheme: DashBoardTheme = {
  themeName: "jfLightTheme",
  wrapperStyle: {
    backgroundColor: "#E2EEFA",
  },
  theme: {
    chart: {
      textPrimary: "#000000",
      textSecondary: "#333333",
      stageColors: ["#F4A52E", "#3B78EF", "#34DAFF", "#63D82C"],
    },
  },
  components: {
    headerWrapper: TitleNodeRenderer,
    content: JfDarkThemeContent,
    containerWrapper: NodeContentRenderer,
  }
};
export * from "../interface";
