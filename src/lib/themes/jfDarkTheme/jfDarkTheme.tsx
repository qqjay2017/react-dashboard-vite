import { DashBoardTheme } from "../interface";
import { titleNodeRenderer } from "./titleNodeRenderer";
import "./jfDarkThemeGlobal.less";
import { nodeContentRenderer } from "./nodeContentRenderer";
export const jfDarkTheme: DashBoardTheme = {
  themeName: "jfDarkTheme",
  className: "jfDarkTheme",
  titleNodeRenderer: titleNodeRenderer,
  nodeContentRenderer: nodeContentRenderer,
  style: {
    backgroundColor: "#052B54",
  },
};
