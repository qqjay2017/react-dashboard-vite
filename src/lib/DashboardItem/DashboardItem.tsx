import React from "react";
import { IDashboardItemProps } from "./interface";
import { sizeFormat } from "../utils/sizeFormat";
import { cn } from "..";
import styles from "./index.module.less";
export const DashboardItem = (props: Partial<IDashboardItemProps>) => {
  const {
    gridSize = { w: 0, h: 0 },
    h = 0,
    i,
    w = 0,
    x = 0,
    y = 0,
    padding = "12px",
    children,
    matchBreak = "",
  } = props;
  const getStyle = () => {
    const s: React.CSSProperties = {};
    s.width = sizeFormat(w * gridSize?.w);
    s.height = sizeFormat(h * gridSize?.h);
    s.transform = ` translate( ${sizeFormat(x * gridSize?.w)}px , ${sizeFormat(
      y * gridSize?.h
    )}px )`;
    if (padding) {
      s.padding = padding;
    }

    return s;
  };
  return (
    <div
      className={cn("dashboardItem", styles.dashboardItem)}
      style={{
        ...getStyle(),
      }}
    >
      {children}
    </div>
  );
};
