import { DashBoardTheme } from "../interface";
import { TitleNodeRenderer } from "./titleNodeRenderer";
import "./jfGreenThemeGlobal.less";
import { NodeContentRenderer } from "./nodeContentRenderer";
import { JfGreenThemeContent } from "./jfGreenThemeContent";


export const jfGreenTheme: DashBoardTheme = {
  themeName: "jfGreenTheme",
  wrapperStyle: {
    backgroundColor: "#052B54",
  },
  components: {
    containerWrapper: NodeContentRenderer,
    headerWrapper: TitleNodeRenderer,
    content: JfGreenThemeContent
  }
};
export * from "../interface";
