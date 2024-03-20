import { IDashboardAppProps } from "./interface";
import { DashboardItem, QueryClientProvider, cn } from "..";
import { sizeFormat } from "../utils/sizeFormat";
import { computedMaxRow } from "./appUtil";
import "./index.less";
import { DesignerContextProvider } from "../context";
import { Fragment } from "react/jsx-runtime";

const TitleNode = ({
  theme,
  titleNodeChildRenderer,
  matchBreak,
}: {
  theme: IDashboardAppProps["theme"];
  titleNodeChildRenderer?: any;
  matchBreak?: string;
}) => {
  const TitleNodeRenderer = theme?.titleNodeRenderer || Fragment;
  const TitleNodeChildRenderer = titleNodeChildRenderer || Fragment;
  const TitleNodeRendererProps = theme?.titleNodeRenderer ? { matchBreak } : {};
  const TitleNodeChildRendererProps = titleNodeChildRenderer
    ? { matchBreak }
    : {};
  return (
    <TitleNodeRenderer {...TitleNodeRendererProps}>
      <TitleNodeChildRenderer {...TitleNodeChildRendererProps} />
    </TitleNodeRenderer>
  );
};

export const DashboardApp = (props: IDashboardAppProps) => {
  const {
    col = 0,
    layout = [],
    theme,
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
    minHeight = 861,
    titleNodeChildRenderer,
    queryClient,
  } = props;

  const gridSize = {
    w: sizeFormat(width / col),
    h: sizeFormat(rowHeight),
  };

  const row = computedMaxRow(layout);

  return (
    <QueryClientProvider queryClient={queryClient}>
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

            theme?.className ? `dashboardApp-${theme?.className}` : "",
            className ? `dashboardApp-${className}` : "",
            matchBreak
          )}
          style={{
            ...style,
            width,
            paddingTop: headerHeight,
            minHeight: minHeight,

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
              <TitleNode
                matchBreak={matchBreak}
                theme={theme}
                titleNodeChildRenderer={titleNodeChildRenderer}
              />
              {/* {theme.titleNodeRenderer({
              matchBreak,
            })} */}
            </div>
          )}
          {layout.map((l, index) => {
            if (!itemMap[l.i || ""]) {
              return null;
            }
            return (
              <DashboardItem
                zIndex={index + 3}
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
    </QueryClientProvider>
  );
};
