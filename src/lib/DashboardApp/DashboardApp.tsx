import { IDashboardAppProps } from "./interface";
import { DashboardItem, cn, jfDartTheme } from "..";
import { sizeFormat } from "../utils/sizeFormat";
import { computedMaxRow } from "./appUtil";
import styles from "./index.module.less";
export const DashboardApp = (props: IDashboardAppProps) => {
  const {
    children,
    col = 0,
    layout = [],
    theme = jfDartTheme,
    width = 0,
    height = 0,
    rowHeight = 78,
    headerHeight = 0,
    matchBreak = "",
    forceFullScreen = false,
  } = props;
  const gridSize = {
    w: sizeFormat(width / col),
    h: sizeFormat(rowHeight),
  };

  const row = computedMaxRow(layout);

  const renderDashboardItemInnerChild = () => {
    return <div>123</div>;
  };

  return (
    <div
      className={cn("dashboardApp", styles.dashboardApp)}
      style={{
        width,
        paddingTop: headerHeight,

        height: Math.max(
          height || 0,
          (row || 0) * (rowHeight || 0) + headerHeight
        ),
      }}
    >
      {layout.map((l) => {
        return (
          <DashboardItem
            {...l}
            matchBreak={matchBreak}
            gridSize={gridSize}
            key={`DashboardItem-${l.i}`}
          >
            {renderDashboardItemInnerChild()}
          </DashboardItem>
        );
      })}
    </div>
  );
};
