import { PropsWithChildren } from "react";

export interface IDashboardItemProps extends PropsWithChildren {
  i: string;
  matchBreak?: string;

  w: number;
  h: number;
  x: number;
  y: number;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
  padding?: number | string;

  gridSize: {
    w: number;
    h: number;
  };
  // 预留字段
  itemType?: any;
}
