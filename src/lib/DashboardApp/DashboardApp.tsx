import { IDashboardAppProps } from "./interface";
import { DashboardItem, QueryClientProvider, cn } from "..";
import { sizeFormat } from "../utils/sizeFormat";
import { computedMaxRow } from "./appUtil";
import "./index.less";
import { DesignerContextProvider } from "../context";
import { Fragment } from "react";

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
    col = 12,
    layout = [],
    theme,
    width = 0,

    rowHeight = 78,
    headerHeight = 0,
    matchBreak = "",
    forceFullScreen = false,
    itemMap = {},
    className,
    style,
    itemProps,
    height,
    minHeight = 861,
    titleNodeChildRenderer,
    queryClient,
    rerenderOnChangeBreakPoint = false,
  } = props;

  const gridSize = {
    w: sizeFormat(width / col),
    h: sizeFormat(rowHeight),
  };

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
          key={
            rerenderOnChangeBreakPoint
              ? `wrapDivKey-${matchBreak}`
              : `wrapDivKey`
          }
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

            height: height,
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
                key={`DashboardItem-${l.i}-${
                  rerenderOnChangeBreakPoint ? matchBreak : ""
                }`}
              />
            );
          })}
        </div>
      </DesignerContextProvider>
    </QueryClientProvider>
  );
};
