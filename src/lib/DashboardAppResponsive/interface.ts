import { PropsWithChildren } from "react";
import { DashBoardTheme } from "../themes";
import { Breakpoints, DefaultBreakpointType, Layout } from "../DashboardApp";

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
}
