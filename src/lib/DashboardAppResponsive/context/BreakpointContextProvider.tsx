import { PropsWithChildren } from "react";
import { BreakpointContext } from "./BreakpointContext";
import { useBreakpoints } from "../core/hooks/useBreakpoints";
import {
  Breakpoints,
  ResourceChildren,
  ResourceOptions,
  ValueOrFunValue,
} from "../core/type";
import { computedMaxRow } from "@/lib/DashboardApp/appUtil";
import { sizeFormat } from "@/lib/utils/sizeFormat";

export interface BreakpointContextProviderProps extends PropsWithChildren {
  breakpoints?: Breakpoints;
  layout?: ValueOrFunValue<ResourceOptions[]>;
  cols?: ValueOrFunValue<number>;
  resource?: Record<string, ResourceChildren>;
  headerHeight?: ValueOrFunValue<number>;
  forceFullScreen?: ValueOrFunValue<boolean>;
  rowHeight?: ValueOrFunValue<number>;
}

export const BreakpointContextProvider = ({
  children,
  breakpoints,
  layout: layoutParam,
  resource = {},

  cols: colsParam = 12,
  headerHeight: headerHeightParam = 0,
  forceFullScreen: forceFullScreenParam = true,
  rowHeight: rowHeightParam = 78,
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

  const rowHeight = forceFullScreen
    ? sizeFormat((height - headerHeight) / cols)
    : typeof rowHeightParam === "function"
      ? rowHeightParam({ breakpoint })
      : rowHeightParam;

  console.log(height, headerHeight, "headerHeight");

  console.log(layout, rows, cols, rowHeight, "breakpoint");
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <BreakpointContext.Provider
        value={{
          cols,
          rows,
          breakpoint: breakpoint,
          headerHeight,
          forceFullScreen,
          rowHeight,
        }}
      >
        {children}
      </BreakpointContext.Provider>
    </div>
  );
};
