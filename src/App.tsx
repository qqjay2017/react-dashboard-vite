import {
  TestChildA,
  TestChildB,
  TestChildC1,
  TestChildC2,
  TestChildC3,
} from "./TestChild";
import { DashboardAppResponsive } from "./lib";

import "./base.css";
import { jfDarkTheme } from "./lib/themes/jfDarkTheme";
const App = () => {
  return (
    <DashboardAppResponsive
      style={{}}
      theme={jfDarkTheme}
      layouts={{
        showroom: [
          {
            i: "A1",
            w: 3,
            h: 12,
            x: 0,
            y: 0,
          },
          {
            i: "B1",
            w: 6,
            h: 12,
            x: 3,
            y: 0,
            padding: "20px",
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
        ],
        desktop: [
          {
            i: "A1",
            w: 3,
            h: 12,
            x: 0,
            y: 0,
          },
          {
            i: "B1",
            w: 6,
            h: 12,
            x: 3,
            y: 0,
            padding: "20px",
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
        ],
        tablet: [
          {
            i: "A1",
            w: 12,
            h: 8,
            x: 0,
            y: 0,
          },
          {
            i: "B1",
            w: 12,
            h: 8,
            x: 0,
            y: 8,
            padding: "20px",
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
        ],
        mobile: [
          {
            i: "A1",
            w: 12,
            h: 8,
            x: 0,
            y: 0,
          },
          {
            i: "B1",
            w: 12,
            h: 8,
            x: 0,
            y: 8,
            padding: "20px",
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
        ],
      }}
      cols={{ showroom: 24, desktop: 12, tablet: 12, mobile: 12 }}
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
        A1: TestChildA,
        B1: TestChildB,
        C1: TestChildC1,
        C2: TestChildC2,
        C3: TestChildC3,
      }}
      titleNodeChildRenderer={(props) => {
        console.log(props, "props");
        return <div>124</div>;
      }}
    />
  );
};

export default App;
