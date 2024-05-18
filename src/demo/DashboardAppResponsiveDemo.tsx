import { DashboardAppResponsive } from "@/lib";
import { TestChildA1 } from "./TestChild";
import { jfDarkTheme } from "@/themes/jfDarkTheme";
import { jfLightTheme } from "@/themes/jfLightTheme";
import { TitleNodeChildRenderer } from "./TitleNodeChildRenderer";
import { pcLayout } from "./pcLayout";
import { tabletLayout } from "./tabletLayout";

export const DashboardAppResponsiveDemo = () => {
  return (
    <DashboardAppResponsive
      resoucreProps={{
        test: 123,
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
      themeProvider={({ themeMode }) => {
        console.log(themeMode, 'themeMode')
        if (themeMode === 'dark') {
          return jfDarkTheme

        }

        if (themeMode === 'light') {
          return jfLightTheme
        }
        return jfDarkTheme


      }}
      components={{
        headerInner: TitleNodeChildRenderer

      }}
    ></DashboardAppResponsive>
  );
};
