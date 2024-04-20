import { DashBoardTheme } from "../interface";
import { TitleNodeRenderer } from "./titleNodeRenderer";
import "./jfDarkThemeGlobal.less";
import { NodeContentRenderer } from "./nodeContentRenderer";
document.documentElement.setAttribute("data-theme", "dark");
export const jfDarkTheme: DashBoardTheme = {
  themeName: "jfDarkTheme",
  titleWrapper: TitleNodeRenderer,

  containerWrapper: NodeContentRenderer,
  wrapperStyle: {
    backgroundColor: "#052B54",
  },
};
export * from "../interface";
