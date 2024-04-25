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
import { useThemeMode } from "./ThemeModeContextProvider";

export interface BreakpointContextProviderProps extends PropsWithChildren {
  breakpoints?: Breakpoints;
  /**
   * 布局配置数组,单位为1栅格
   * 支持函数写法
   * w : 容器宽度
   * h : 容器高位
   * x : x轴位置,0为左上角
   * y : y轴位置,0为左上角
   * @example 
   * 
   *  <DashboardAppResponsive
        layout={[
          {
            i:"A1",
            w: 12,
            h: 5,
            x: 0,
            y: 0,
            zIndex:99,
            padding:[12,12,12,12],


          }
        ]}
        resource={{
          A1: TestChildA1,
         
        }}
        />
   * 
   */
  layout?: ValueOrFunValue<ResourceOptions[]>;
  /**
   * 列数量
   * 支持函数或者数字
   * 
   * @example
   * 
   *   <DashboardAppResponsive
        
        cols={12}
        />

        <DashboardAppResponsive
        
        cols={(params)=>{
            return 12
        }}
        />


   */
  cols?: ValueOrFunValue<number>;
  /**
   * 格子组件资源
   *  key是对应layout的i
   *
   * @example 
   * 
   * <DashboardAppResponsive
        layout={[
          {
            i:"A1"
          }
        ]}
        resource={{
          A1: TestChildA1,
         
        }}
        />
   */
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
  const { themeMode } = useThemeMode();
  const layout = (
    typeof layoutParam === "function"
      ? layoutParam({ breakpoint, themeMode })
      : layoutParam || []
  ).filter((l) => resource[l.i]);

  const cols =
    typeof colsParam === "function" ? colsParam({ breakpoint }) : colsParam;
  const rows = computedMaxRow(layout);
  const forceFullScreen =
    typeof forceFullScreenParam === "function"
      ? forceFullScreenParam({ breakpoint, themeMode })
      : forceFullScreenParam;

  const headerHeight =
    typeof headerHeightParam === "function"
      ? headerHeightParam({ breakpoint, themeMode })
      : headerHeightParam;
  //
  const rowHeight = forceFullScreen
    ? sizeFormat((height - headerHeight) / cols)
    : typeof rowHeightParam === "function"
      ? rowHeightParam({ breakpoint, themeMode })
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
