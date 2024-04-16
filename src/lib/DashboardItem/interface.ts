import React, { PropsWithChildren } from "react";

import { ResourceOptions } from "../DashboardAppResponsive/core/type";

export interface IDashboardItemProps extends ResourceOptions {
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
  matchBreak?: string;

  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
  headerHeight?: number;
}

export interface IDashboardItemChldBaseProps extends PropsWithChildren {
  breakpoint: string;
  colWidth: number;
  rowHeight: number;
  containerWrapper: any;
  nodeContentRenderer: any;
}
