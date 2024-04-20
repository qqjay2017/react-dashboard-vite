import { DashBoardTheme } from "../interface";
import { TitleNodeRenderer } from "./titleNodeRenderer";
import "./jfLightThemeGlobal.less";
import { NodeContentRenderer } from "./nodeContentRenderer";
import { setHtmlThemeMode } from "@/lib/utils/setHtmlThemeMode";

setHtmlThemeMode("light");
export const jfLightTheme: DashBoardTheme = {
  themeName: "jfLightTheme",
  titleWrapper: TitleNodeRenderer,

  containerWrapper: NodeContentRenderer,
  wrapperStyle: {
    backgroundColor: "#E2EEFA",
  },
};
export * from "../interface";
