import { Button, DashboardAppResponsive, ResourceOptions } from "@/lib";
import {
  TestChildA1,
  TestChildB1,
  TestChildB2,
  TestChildC1,
} from "./TestChild";
import { jfDarkTheme } from "@/lib/themes/jfDarkTheme/jfDarkTheme";
import { TitleNodeChildRenderer } from "./TitleNodeChildRenderer";
import { useState } from "react";

export const DashboardAppResponsiveDragDemo = () => {
  const [pcLayout, setPcLayout] = useState<ResourceOptions[]>([
    {
      i: "B1",
      w: 6,
      h: 11,
      x: 3,
      y: 1,
      padding: [50, 50, 50, 50],
    },
    {
      i: "A1",
      w: 3,
      h: 12,
      x: 0,
      y: 0,
      padding: [50, 50, 50, 50],
    },

    {
      i: "B2",
      w: 6,
      h: 1.2,
      x: 3,
      y: 0,
      padding: [50, 50, 50, 50],
    },

    {
      i: "C1",
      w: 3,
      h: 4,
      x: 9,
      y: 0,
      padding: [50, 50, 50, 50],
    },
    {
      i: "C2",
      w: 3,
      h: 4,
      x: 9,
      y: 4,
      padding: [50, 50, 50, 50],
    },
    {
      i: "C3",
      w: 3,
      h: 4,
      x: 9,
      y: 8,
      zIndex: 99,
      padding: [50, 50, 50, 50],
    },
  ]);
  return (
    <div
      style={{
        paddingTop: "26px",
      }}
    >
      <Button>保存</Button>
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
        themeProvider={jfDarkTheme}
        titleChildren={TitleNodeChildRenderer}
      ></DashboardAppResponsive>
    </div>
  );
};
