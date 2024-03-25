import { IDashboardAppResponsiveProps } from ".";

import useResizeObserver from "use-resize-observer";
import "./index.less";
import { cn } from "../utils";
import { getBreakpointFromWidth } from "./responsiveUtils";

import { DashboardApp } from "../DashboardApp";
import React from "react";
import { sizeFormat } from "../utils/sizeFormat";
import { computedMaxRow } from "../DashboardApp/appUtil";

export const DashboardAppResponsive = (props: IDashboardAppResponsiveProps) => {
  const {
    children,
    breakpoints = { showroom: 2600, desktop: 1300, tablet: 500, mobile: 0 },
    cols = { showroom: 24, desktop: 12, tablet: 12, mobile: 12 },
    headerHeight = { showroom: 150, desktop: 132, tablet: 120, mobile: 80 },
    rowHeight = 78,
    theme,
    forceFullScreen = {},
    itemMap = {},
    layouts = {},
    className,
    style,
    itemProps,
    minHeight = 861,
    titleNodeChildRenderer,
    rerenderOnChangeBreakPoint = false,
    ...rest
  } = props;
  const { ref, width = 0, height = 0 } = useResizeObserver<HTMLDivElement>({});

  const matchBreak = getBreakpointFromWidth(breakpoints, width);
  const matchCol = matchBreak ? cols[matchBreak] : 12;
  const matchLayout = matchBreak ? layouts[matchBreak] : [];
  const matchHeaderHeight = matchBreak ? headerHeight[matchBreak] : 0;
  const matchForceFullScreen = matchBreak ? forceFullScreen[matchBreak] : false;
  const matchRowHeight = matchForceFullScreen
    ? sizeFormat((height - matchHeaderHeight) / matchCol)
    : rowHeight;
  const maxRow = computedMaxRow(matchLayout);
  console.log(maxRow, "maxRow");
  const matchHeight = matchForceFullScreen
    ? "100vh"
    : Math.max(
        height,
        (maxRow || 0) * (matchRowHeight || 0) + matchHeaderHeight
      );

  const getStyle = () => {
    const s: React.CSSProperties = {
      ...theme?.style,
      ...style,
    };
    if (matchForceFullScreen) {
      s.height = "100vh";
      s.minHeight = minHeight;
      s.maxHeight = "100vh";
    } else {
      s.height = matchHeight;
    }

    return s;
  };
  // Children.map(children, (child) => {
  //   console.log(child, "child");
  // });
  return (
    <div
      ref={ref}
      className={cn(
        "dashboardAppResponsive",
        theme?.className,
        className,
        matchBreak
      )}
      style={getStyle()}
    >
      <DashboardApp
        col={matchCol}
        layout={matchLayout}
        theme={theme}
        width={width}
        rowHeight={matchRowHeight}
        height={matchHeight}
        headerHeight={matchHeaderHeight}
        matchBreak={matchBreak}
        forceFullScreen={matchForceFullScreen}
        itemProps={itemProps}
        itemMap={itemMap}
        minHeight={minHeight}
        titleNodeChildRenderer={titleNodeChildRenderer}
        rerenderOnChangeBreakPoint={rerenderOnChangeBreakPoint}
        {...rest}
      >
        {children}
      </DashboardApp>
    </div>
  );
};
