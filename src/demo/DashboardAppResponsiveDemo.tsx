import { DashboardAppResponsive } from "@/lib";
import { TestChildA1 } from "./TestChild";
import { jfDarkTheme } from "@/lib/themes/jfDarkTheme/jfDarkTheme";
import { TitleNodeChildRenderer } from "./TitleNodeChildRenderer";

export const DashboardAppResponsiveDemo = () => {
  return (
    <DashboardAppResponsive
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
        A2: TestChildA1,
        A3: TestChildA1,
        B1: TestChildA1,
        B2: TestChildA1,
        C1: TestChildA1,
        C2: TestChildA1,
        C3: TestChildA1,
      }}
      layout={({ breakpoint }) => {
        if (breakpoint === "mobile" || breakpoint === "tablet") {
          return [
            {
              i: "A1",
              w: 12,
              h: 4,
              x: 0,
              y: 0,
            },
            {
              i: "A2",
              w: 12,
              h: 4,
              x: 0,
              y: 4,
            },
            {
              i: "A3",
              w: 12,
              h: 4,
              x: 0,
              y: 8,
            },
            {
              i: "B1",
              w: 12,
              h: 5,
              x: 0,
              y: 12,
            },
            {
              i: "B2",
              w: 12,
              h: 3,
              x: 0,
              y: 17,
            },

            {
              i: "C1",
              w: 12,
              h: 4,
              x: 0,
              y: 20,
            },
            {
              i: "C2",
              w: 12,
              h: 4,
              x: 0,
              y: 24,
            },
            {
              i: "C3",
              w: 12,
              h: 4,
              x: 0,
              y: 28,
            },
          ];
        }

        return [
          {
            i: "A1",
            w: 3,
            h: 4,
            x: 0,
            y: 0,
          },
          {
            i: "A2",
            w: 3,
            h: 4,
            x: 0,
            y: 4,
          },
          {
            i: "A3",
            w: 3,
            h: 4,
            x: 0,
            y: 8,
          },
          {
            i: "B1",
            w: 6,
            h: 8,
            x: 3,
            y: 0,
            padding: 0,
          },
          {
            i: "B2",
            w: 6,
            h: 4,
            x: 3,
            y: 8,
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
          },
        ];
      }}
      themeProvider={jfDarkTheme}
      titleChildren={TitleNodeChildRenderer}
    ></DashboardAppResponsive>
  );
};
