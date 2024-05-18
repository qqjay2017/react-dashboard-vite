import { DashBoardTheme } from "../interface";
import { TitleNodeRenderer } from "./titleNodeRenderer";
import "./jfDarkThemeGlobal.less";
import { NodeContentRenderer } from "./nodeContentRenderer";
import { JfDarkThemeContent } from "./JfDarkThemeContent";

export const jfDarkTheme: DashBoardTheme = {
  themeName: "jfDarkTheme",
  wrapperStyle: {
    backgroundColor: "#052B54",
  },
  components: {
    containerWrapper: NodeContentRenderer,
    headerWrapper: TitleNodeRenderer,
    content: JfDarkThemeContent
  }
};
export * from "../interface";
