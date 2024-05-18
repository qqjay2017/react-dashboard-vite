import { DashboardAppResponsive, ResourceOptions } from "@/lib";
import {
  TestChildA1,
  TestChildB1,
  TestChildB2,
  TestChildC1,
} from "./TestChild";


import { useState } from "react";
import { jfDarkTheme } from "@/themes/jfDarkTheme";
import { jfLightTheme } from "@/themes/jfLightTheme";
import { tabletLayout } from "./tabletLayout";
import { pcLayout as defaultPcLayout } from "./pcLayout";

export const DashboardAppResponsiveDragDemo = () => {
  const [pcLayout, setPcLayout] = useState<ResourceOptions[]>(defaultPcLayout);
  return (
    <DashboardAppResponsive
      onLayoutChange={(id, newLayout) => {
        setPcLayout((layouts) => {
          return layouts.map((layout) => {
            if (layout.i === id) {
              return {
                ...layout,
                ...newLayout,
              };
            }
            return layout;
          });
        });
      }}
      isDraggable={true}
      isResizable={true}
      resoucreProps={{
        test: 123,
      }}
      cols={12}
      theme={{
        main: "mediumseagreen",
      }}
      resource={{
        A1: TestChildA1,
        A2: TestChildA1,
        A3: TestChildA1,
        B1: TestChildB1,
        B2: TestChildB2,
        C1: TestChildC1,
        C2: TestChildA1,
        C3: TestChildA1,
      }}
      layout={({ breakpoint }) => {
        if (breakpoint === "tablet" || breakpoint == "mobile") {
          return tabletLayout
        }
        return pcLayout;
      }}
      themeProvider={({ themeMode }) => {
        if (themeMode === 'dark') {
          return jfDarkTheme

        }

        if (themeMode === 'light') {
          return jfLightTheme
        }
        return jfDarkTheme


      }}
    ></DashboardAppResponsive>
  );
};
