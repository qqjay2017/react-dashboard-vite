import { IDashboardAppProps } from "./interface";
import { DashboardItem, cn, jfDarkTheme, useDashboard } from "..";
import { sizeFormat } from "../utils/sizeFormat";
import { computedMaxRow } from "./appUtil";
import styles from "./index.module.less";
import { DesignerContextProvider } from "../context";

const TitleNode = ({ theme }: { theme: IDashboardAppProps["theme"] }) => {
  return theme?.titleNodeRenderer();
};

export const DashboardApp = (props: IDashboardAppProps) => {
  const {
    col = 0,
    layout = [],
    theme = jfDarkTheme,
    width = 0,
    height = 0,
    rowHeight = 78,
    headerHeight = 0,
    matchBreak = "",
    forceFullScreen = false,
    itemMap = {},
    className,
    style,
    itemProps,
  } = props;
  const gridSize = {
    w: sizeFormat(width / col),
    h: sizeFormat(rowHeight),
  };

  const row = computedMaxRow(layout);

  return (
    <DesignerContextProvider
      config={{
        itemProps,
        forceFullScreen,
        matchBreak,
        gridSize,
      }}
    >
      <div
        className={cn(
          "dashboardApp",
          styles.dashboardApp,
          theme?.className ? `dashboardApp-${theme?.className}` : "",
          className ? `dashboardApp-${className}` : "",
          matchBreak
        )}
        style={{
          ...style,
          width,
          paddingTop: headerHeight,

          height: forceFullScreen
            ? "100vh"
            : Math.max(
                height || 0,
                (row || 0) * (rowHeight || 0) + headerHeight
              ),
        }}
      >
        {Boolean(headerHeight && theme?.titleNodeRenderer) && (
          <div
            className={cn(
              "titleNodeRendererWrap",
              styles.titleNodeRendererWrap,
              theme?.className
                ? `titleNodeRendererWrap-${theme?.className}`
                : "",
              className ? `titleNodeRendererWrap-${className}` : "",
              matchBreak
            )}
            style={{
              height: headerHeight,
            }}
          >
            <TitleNode theme={theme} />
            {/* {theme.titleNodeRenderer({
              matchBreak,
            })} */}
          </div>
        )}
        {layout.map((l) => {
          if (!itemMap[l.i || ""]) {
            return null;
          }
          return (
            <DashboardItem
              {...l}
              itemProps={itemProps}
              theme={theme}
              forceFullScreen={forceFullScreen}
              Content={itemMap[l.i || ""]}
              matchBreak={matchBreak}
              gridSize={gridSize}
              key={`DashboardItem-${l.i}`}
            />
          );
        })}
      </div>
    </DesignerContextProvider>
  );
};
