import React, { ReactNode } from "react";

import { ResourceOptions } from "../DashboardAppResponsive/core/type";

export interface IDashboardItemProps extends ResourceOptions {
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
  matchBreak?: string;
  colWidth?: number;
  rowHeight?: number;
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
  headerHeight?: number;
}

export type IDashboardItemChldBaseProps<T = any> = T & {
  breakpoint: string;
  colWidth: number;
  rowHeight: number;
  containerWrapper: any;
  nodeContentRenderer: any;
  children?: ReactNode | undefined;
  [property: string]: any;
};

export type ResourceComponent<T = any> = IDashboardItemChldBaseProps<T>;
