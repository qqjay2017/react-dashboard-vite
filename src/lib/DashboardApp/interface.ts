import { DashBoardTheme } from "../themes";

export type DefaultBreakpoints = "showroom" | "desktop" | "tablet" | "mobile";
export type Breakpoint = string;
export interface Breakpoints {
  showroom?: number;
  desktop?: number;
  tablet?: number;
  mobile?: number;
  [property: string]: any;
}

export interface IDashboardAppProps {
  breakpoints?: Breakpoints;
  cols?: Breakpoints;
  // cols无法匹配上时候  ,将会使用col
  col?: number;
  // rowHeight = 78px
  rowHeight?: number;
  theme: DashBoardTheme;
}
