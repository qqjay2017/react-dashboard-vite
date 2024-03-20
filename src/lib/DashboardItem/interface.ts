import React, { PropsWithChildren } from "react";
import { DashBoardTheme } from "../themes/interface";

export interface IDashboardItemProps extends PropsWithChildren {
  i: string;
  matchBreak?: string;
  theme?: DashBoardTheme;
  w: number;
  h: number;
  x: number;
  y: number;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
  padding?: number | string;
  itemProps?: Record<string, any>;
  forceFullScreen?: boolean;
  gridSize: {
    w: number;
    h: number;
  };
  // 预留字段
  itemType?: any;
  Content?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
}

export interface IDashboardItemChldBaseProps extends PropsWithChildren {
  gridSize: { w: number; h: number };
  i: string;
  matchBreak: string;
  theme?: DashBoardTheme;
}
