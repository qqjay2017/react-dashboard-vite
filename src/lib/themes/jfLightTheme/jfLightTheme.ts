import { DashBoardTheme } from "../interface";
import { TitleNodeRenderer } from "./titleNodeRenderer";
import "./jfLightThemeGlobal.less";
import { NodeContentRenderer } from "./nodeContentRenderer";
export const jfDarkTheme: DashBoardTheme = {
  themeName: "jfDarkTheme",
  titleWrapper: TitleNodeRenderer,

  containerWrapper: NodeContentRenderer,
  wrapperStyle: {
    backgroundColor: "#052B54",
  },
};
export * from "../interface";
