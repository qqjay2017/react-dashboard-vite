import { PropsWithChildren } from "react";
import { DashBoardTheme } from "../themes/interface";
import { IDashboardItemProps } from "../DashboardItem";
import { QueryClient } from "@tanstack/react-query";

export type DefaultBreakpoints = "showroom" | "desktop" | "tablet" | "mobile";

export type Breakpoint = string;
export type DefaultBreakpointType<T> = {
  showroom?: T;
  desktop?: T;
  tablet?: T;
  mobile?: T;
};
export type Layout = Partial<IDashboardItemProps>;

export type Breakpoints = DefaultBreakpointType<number> & {
  [property: string]: any;
};
export type ComponentMap = {
  [key: string]: React.ElementType;
};
export interface IDashboardAppProps extends IDashboardAppPropsExtend {
  // cols无法匹配上时候  ,将会使用col
  col: number;

  theme: DashBoardTheme;
  layout?: Layout[];
  width?: number;
  height?: number | string;
  headerHeight?: number;
  matchBreak?: string;
  forceFullScreen?: boolean;
}

/**
 * 共用的属性,透传
 */
export interface IDashboardAppPropsExtend extends PropsWithChildren {
  minHeight?: number;
  titleNodeChildRenderer?: (props: any) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  itemProps?: Record<string, any>;
  itemMap: ComponentMap;
  theme: DashBoardTheme;
  // rowHeight = 78px
  rowHeight?: number;
  queryClient?: QueryClient;
  rerenderOnChangeBreakPoint?: boolean;
}
