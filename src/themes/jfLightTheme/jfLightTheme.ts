import { DashBoardTheme } from "../interface";
import { TitleNodeRenderer } from "./titleNodeRenderer";
import "./jfLightThemeGlobal.less";
import { NodeContentRenderer } from "./nodeContentRenderer";

export const jfLightTheme: DashBoardTheme = {
  themeName: "jfLightTheme",
  titleWrapper: TitleNodeRenderer,

  containerWrapper: NodeContentRenderer,
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
};
export * from "../interface";
