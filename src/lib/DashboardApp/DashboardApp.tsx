import { IDashboardAppProps } from "./interface";
import { DashboardItem, cn, jfDarkTheme } from "..";
import { sizeFormat } from "../utils/sizeFormat";
import { computedMaxRow } from "./appUtil";
import styles from "./index.module.less";

export const DashboardApp = (props: IDashboardAppProps) => {
  const {
    children,
    col = 0,
    layout = [],
    theme = jfDarkTheme,
    width = 0,
    height = 0,
    rowHeight = 78,
    headerHeight = 0,
    matchBreak = "",
    forceFullScreen = false,
    componentMap = {},
    className,
    style,
  } = props;
  const gridSize = {
    w: sizeFormat(width / col),
    h: sizeFormat(rowHeight),
  };

  const row = computedMaxRow(layout);

  return (
    <div
      className={cn(
        "dashboardApp",
        styles.dashboardApp,
        theme?.className ? `dashboardApp-${theme?.className}` : "",
        className ? `dashboardApp-${className}` : ""
      )}
      style={{
        ...style,
        width,
        paddingTop: headerHeight,

        height: forceFullScreen
          ? "100vh"
          : Math.max(height || 0, (row || 0) * (rowHeight || 0) + headerHeight),
      }}
    >
      {Boolean(headerHeight && theme?.titleNodeRenderer) && (
        <div
          className={cn(
            "titleNodeRendererWrap",
            styles.titleNodeRendererWrap,
            theme?.className ? `titleNodeRendererWrap-${theme?.className}` : "",
            className ? `titleNodeRendererWrap-${className}` : ""
          )}
          style={{
            height: headerHeight,
          }}
        >
          {theme.titleNodeRenderer({
            matchBreak,
          })}
        </div>
      )}
      {layout.map((l) => {
        if (!componentMap[l.i || ""]) {
          return null;
        }
        return (
          <DashboardItem
            {...l}
            theme={theme}
            Content={componentMap[l.i || ""]}
            matchBreak={matchBreak}
            gridSize={gridSize}
            key={`DashboardItem-${l.i}`}
          />
        );
      })}
    </div>
  );
};
