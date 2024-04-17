import React, { PropsWithChildren } from "react";
import { BreakpointContext } from "./BreakpointContext";
import { useBreakpoints } from "../core/hooks/useBreakpoints";
import {
  Breakpoints,
  ResourceChildren,
  ResourceOptions,
  ValueOrFunValue,
} from "../core/type";
import { computedMaxRow } from "@/lib/DashboardAppResponsive/core/utils/appUtil";
import { sizeFormat } from "@/lib/utils/sizeFormat";

import { cn } from "@/lib/utils";

export interface BreakpointContextProviderProps extends PropsWithChildren {
  breakpoints?: Breakpoints;
  layout?: ValueOrFunValue<ResourceOptions[]>;
  cols?: ValueOrFunValue<number>;
  resource?: Record<string, ResourceChildren>;
  headerHeight?: ValueOrFunValue<number>;
  forceFullScreen?: ValueOrFunValue<boolean>;
  rowHeight?: ValueOrFunValue<number>;
  wrapperStyle?: React.CSSProperties;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  themeName?: string;
}

export const BreakpointContextProvider = ({
  children,
  breakpoints,
  layout: layoutParam,
  resource = {},
  themeName,
  cols: colsParam = 12,
  headerHeight: headerHeightParam = 0,
  forceFullScreen: forceFullScreenParam = true,
  rowHeight: rowHeightParam = 78,
  wrapperStyle,
  wrapperProps,
}: BreakpointContextProviderProps) => {
  const { ref, breakpoint, width, height } = useBreakpoints(breakpoints);

  const layout = (
    typeof layoutParam === "function"
      ? layoutParam({ breakpoint })
      : layoutParam || []
  ).filter((l) => resource[l.i]);

  const cols =
    typeof colsParam === "function" ? colsParam({ breakpoint }) : colsParam;
  const rows = computedMaxRow(layout);
  const forceFullScreen =
    typeof forceFullScreenParam === "function"
      ? forceFullScreenParam({ breakpoint })
      : forceFullScreenParam;

  const headerHeight =
    typeof headerHeightParam === "function"
      ? headerHeightParam({ breakpoint })
      : headerHeightParam;
  //
  const rowHeight = forceFullScreen
    ? sizeFormat((height - headerHeight) / cols)
    : typeof rowHeightParam === "function"
      ? rowHeightParam({ breakpoint })
      : rowHeightParam;

  const colWidth = cols ? sizeFormat(width / cols) : 0;

  // useRegisterResources(layout, resource);
  return (
    <div
      {...wrapperProps}
      className={cn(
        "dashboardAppResponsive",
        themeName,
        wrapperProps?.className,
        breakpoint
      )}
      ref={ref}
      style={{
        width: "100%",
        height: forceFullScreen
          ? "100vh"
          : `${sizeFormat(rows * rowHeight + headerHeight)}px`,
        position: "relative",
        minHeight: "861px",
        ...wrapperStyle,
      }}
    >
      <BreakpointContext.Provider
        value={{
          layout,
          cols,
          rows,
          breakpoint: breakpoint,
          headerHeight,
          forceFullScreen,
          rowHeight,
          colWidth,
        }}
      >
        {children}
      </BreakpointContext.Provider>
    </div>
  );
};
