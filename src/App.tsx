import { TestChildA, TestChildB, TestChildC } from "./TestChild";
import { DashboardAppResponsive, jfDartTheme } from "./lib";
import "./base.css";
const App = () => {
  return (
    <DashboardAppResponsive
      theme={jfDartTheme}
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
    >
      <div key={"A1"}>
        <TestChildA />
      </div>
      <div key={"B1"}>
        <TestChildB />
      </div>
      <div key={"C1"}>
        <TestChildC />
      </div>
      <div key={"C2"}>
        <TestChildC />
      </div>
      <div key={"C3"}>
        <TestChildC />
      </div>
    </DashboardAppResponsive>
  );
};

export default App;
