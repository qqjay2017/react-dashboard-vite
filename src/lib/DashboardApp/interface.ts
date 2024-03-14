import { PropsWithChildren } from "react";
import { DashBoardTheme } from "../themes";
import { IDashboardItemProps } from "../DashboardItem";

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
export interface IDashboardAppProps extends PropsWithChildren {
  // cols无法匹配上时候  ,将会使用col
  col: number;
  // rowHeight = 78px
  rowHeight?: number;
  theme: DashBoardTheme;
  layout?: Layout[];
  width?: number;
  height?: number;
  headerHeight?: number;
  matchBreak?: string;
  forceFullScreen?: boolean;
  itemMap: ComponentMap;
  className?: string;
  style?: React.CSSProperties;
  itemProps?: Record<string, any>;
}
