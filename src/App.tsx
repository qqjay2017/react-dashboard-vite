import { TestChildA, TestChildB, TestChildC } from "./TestChild";
import { DashboardAppResponsive, jfDarkTheme } from "./lib";
import "./base.css";
const App = () => {
  return (
    <DashboardAppResponsive
      style={{}}
      theme={jfDarkTheme}
      layouts={{
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
      headerHeight={{ showroom: 150, desktop: 132, tablet: 120, mobile: 80 }}
      forceFullScreen={{
        showroom: true,
        desktop: true,
        tablet: false,
        mobile: false,
      }}
      rowHeight={78}
      componentMap={{
        A1: TestChildA,
        B1: TestChildB,
        C1: TestChildC,
        C2: TestChildC,
        C3: TestChildC,
      }}
    />
  );
};

export default App;
