import { DashboardAppResponsive } from "@/lib";
import { TitleNodeRendererType } from "@/lib/themes/interface";
import { jfDarkTheme } from "@/lib/themes/jfDarkTheme/jfDarkTheme";
import React from "react";

export const DashboardAppResponsiveDemo: React.FC = () => {
  return (
    <DashboardAppResponsive
      style={{}}
      theme={jfDarkTheme}
      layouts={{
        showroom: [
          {
            i: "A1",
            w: 3,
            h: 2,
            x: 0,
            y: 0,
          },
          {
            i: "B1",
            w: 6,
            h: 2,
            x: 3,
            y: 0,
            padding: "20px",
          },
          {
            i: "C1",
            w: 3,
            h: 4,
            x: 3,
            y: 3,
          },
          {
            i: "C2",
            w: 3,
            h: 4,
            x: 4,
            y: 4,
          },
          {
            i: "C3",
            w: 3,
            h: 2,
            x: 9,
            y: 8,
          },
        ],
        desktop: [
          {
            i: "A1",
            w: 3,
            h: 2,
            x: 6,
            y: 8,
          },
          {
            i: "B1",
            w: 2,
            h: 8,
            x: 7,
            y: 3,
            padding: "20px",
          },
          {
            i: "C1",
            w: 3,
            h: 4,
            x: 9,
            y: 5,
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
        ],
        tablet: [
          {
            i: "A1",
            w: 2,
            h: 2,
            x: 0,
            y: 0,
          },
          {
            i: "B1",
            w: 2,
            h: 2,
            x: 0,
            y: 8,
            padding: "20px",
          },
          {
            i: "C1",
            w: 3,
            h: 4,
            x: 2,
            y: 3,
          },
          {
            i: "C2",
            w: 3,
            h: 4,
            x: 3,
            y: 1,
          },
          {
            i: "C3",
            w: 1,
            h: 4,
            x: 10,
            y: 4,
          },
        ],
        mobile: [
          {
            i: "A1",
            w: 3,
            h: 8,
            x: 5,
            y: 4,
          },
          {
            i: "B1",
            w: 4,
            h: 4,
            x: 6,
            y: 8,
            padding: "20px",
          },
          {
            i: "C1",
            w: 2,
            h: 4,
            x: 2,
            y: 10,
          },
          {
            i: "C2",
            w: 3,
            h: 4,
            x: 3,
            y: 2,
          },
          {
            i: "C3",
            w: 3,
            h: 4,
            x: 0,
            y: 9,
          },
        ],
      }}
      cols={{ showroom: 12, desktop: 12, tablet: 12, mobile: 12 }}
      headerHeight={{ showroom: 150, desktop: 132, tablet: 120, mobile: 120 }}
      forceFullScreen={{
        showroom: true,
        desktop: true,
        tablet: false,
        mobile: false,
      }}
      rowHeight={78}
      itemProps={{
        myName: "huang",
      }}
      itemMap={{
        A1: () => "A1",
        B1: () => "B2",
        C1: () => "C1",
        C2: () => "C2",
        C3: () => "C3",
      }}
      titleNodeChildRenderer={(props: TitleNodeRendererType) => {
        return <div>{JSON.stringify(props)}</div>;
      }}
    />
  );
};
