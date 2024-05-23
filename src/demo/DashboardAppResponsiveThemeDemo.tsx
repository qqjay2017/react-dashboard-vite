import { DashboardAppResponsive } from "@/lib";
import { TestChildA1, TestChildC4 } from "./TestChild";
import { jfDarkTheme } from "@/themes/jfDarkTheme";
import { jfLightTheme } from "@/themes/jfLightTheme";
import { TitleNodeChildRenderer } from "./TitleNodeChildRenderer";
import { pcLayout } from "./pcLayout";
import { tabletLayout } from "./tabletLayout";
import { TitleNodeChangeTheme } from "./TitleNodeChangeTheme";
import { useState } from "react";
import { themesMap } from "@/themes";

export const DashboardAppResponsiveThemeDemo = () => {
  const [themeName, setThemeName] = useState(localStorage.getItem("vite-ui-theme-name") || 'jfDarkTheme')
  return (
    <DashboardAppResponsive
      resoucreProps={{
        test: 123,
      }}

      onThemeNameChange={(name = '') => {
        console.log(name, 'name')
        name && setThemeName(name)
      }}
      minHeight={555}
      cols={12}
      theme={{
        main: "mediumseagreen",
      }}
      resource={{
        A1: TestChildA1,
        A2: TestChildA1,
        A3: TestChildA1,
        B1: TestChildA1,
        B2: TestChildA1,
        C1: TestChildA1,
        C2: TestChildA1,
        C3: TestChildA1,
        C4: TestChildC4,
      }}
      breakpoints={{
        showroom: 2600,
        desktop: 1300,
        tablet: 500,
        mobile: 0,
      }}
      layout={({ breakpoint }) => {
        if (breakpoint === "tablet" || breakpoint == "mobile") {
          return tabletLayout
        }
        return pcLayout;
      }}
      themeProvider={() => {
        return themesMap[themeName] || jfDarkTheme


      }}
      components={{
        headerInner: TitleNodeChangeTheme

      }}
    ></DashboardAppResponsive>
  );
};
