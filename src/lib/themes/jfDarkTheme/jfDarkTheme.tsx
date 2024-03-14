import { DashBoardTheme } from "../interface";
import { TitleNodeRenderer } from "./titleNodeRenderer";
import "./jfDarkThemeGlobal.less";
import { nodeContentRenderer } from "./nodeContentRenderer";
export const jfDarkTheme: DashBoardTheme = {
  themeName: "jfDarkTheme",
  className: "jfDarkTheme",
  titleNodeRenderer: TitleNodeRenderer,
  nodeContentRenderer: nodeContentRenderer,
  style: {
    backgroundColor: "#052B54",
  },
};
