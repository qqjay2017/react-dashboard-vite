import { DashboardAppResponsive, ResourceOptions } from "@/lib";
import {
  TestChildA1,
  TestChildB1,
  TestChildB2,
  TestChildC1,
} from "./TestChild";

import { TitleNodeChildRenderer } from "./TitleNodeChildRenderer";
import { useState } from "react";
import { jfDarkTheme } from "@/themes/jfDarkTheme";
import { jfLightTheme } from "@/themes/jfLightTheme";

export const DashboardAppResponsiveDragDemo = () => {
  const [pcLayout, setPcLayout] = useState<ResourceOptions[]>([
    {
      i: "B1",
      w: 6,
      h: 11,
      x: 3,
      y: 1,

    },
    {
      i: "A1",
      w: 3,
      h: 12,
      x: 0,
      y: 0,

    },

    {
      i: "B2",
      w: 6,
      h: 1.2,
      x: 3,
      y: 0,

    },

    {
      i: "C1",
      w: 3,
      h: 4,
      x: 9,
      y: 0,

    },
    {
      i: "C2",
      w: 3,
      h: 4,
      x: 9,
      y: 4,

    },
    {
      i: "C3",
      w: 3,
      h: 4,
      x: 9,
      y: 8,
      zIndex: 99,
padding:20
    },
  ]);
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
    headerHeight={({ breakpoint }) => {
      if (breakpoint === "mobile" || breakpoint === "tablet") {
        return 120;
      }
      return 132;
    }}
    resource={{
      A1: TestChildA1,
      B1: TestChildB1,
      B2: TestChildB2,
      C1: TestChildC1,
      C2: TestChildA1,
      C3: TestChildA1,
    }}
    layout={({ breakpoint }) => {
      if (breakpoint === "tablet" || breakpoint == "mobile") {
        return [
          {
            i: "A1",
            w: 12,
            h: 5,
            x: 0,
            y: 0,
          },

          {
            i: "B2",
            w: 12,
            h: 3,
            x: 0,
            y: 5,
            padding: 0,
          },
          {
            i: "B1",
            w: 12,
            h: 8,
            x: 0,
            y: 8,
            padding: 0,
          },
          {
            i: "C1",
            w: 12,
            h: 4,
            x: 0,
            y: 16,
          },
          {
            i: "C2",
            w: 12,
            h: 4,
            x: 0,
            y: 20,
          },
          {
            i: "C3",
            w: 12,
            h: 4,
            x: 0,
            y: 24,
          },
        ];
      }
      return pcLayout;
    }}
    themeProvider={({themeMode})=>{
      if(themeMode==='dark'){
        return jfDarkTheme
      
      }
      
      if(themeMode==='light') {
        return jfLightTheme
      }
      return jfDarkTheme

     
    }}
    titleChildren={TitleNodeChildRenderer}
  ></DashboardAppResponsive>
  );
};
