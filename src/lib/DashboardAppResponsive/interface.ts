import React, { PropsWithChildren } from "react";
import { DashBoardTheme } from "../themes";
import {
  Breakpoints,
  ComponentMap,
  DefaultBreakpointType,
  Layout,
} from "../DashboardApp";

export type Layouts = DefaultBreakpointType<Layout[]> & {
  [property: string]: any;
};

type ResponsiveHeaderHeight = DefaultBreakpointType<number> & {
  [property: string]: any;
};
type ResponsiveForceFullScreen = DefaultBreakpointType<boolean> & {
  [property: string]: any;
};

export interface IDashboardAppResponsiveProps extends PropsWithChildren {
  breakpoints?: Breakpoints;
  cols?: Breakpoints;
  rowHeight: number;
  theme: DashBoardTheme;
  layouts?: Layouts;
  headerHeight?: ResponsiveHeaderHeight;
  forceFullScreen?: ResponsiveForceFullScreen;
  itemMap: ComponentMap;
  /**
   * 外壳的className,优先级大于theme
   */
  className?: string;
  /**
   * 外壳的style,优先级大于theme
   */
  style?: React.CSSProperties;
  itemProps?: Record<string, any>;
}
