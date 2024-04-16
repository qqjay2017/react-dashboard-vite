import React from "react";
import { IDashboardItemProps } from "./interface";
import { sizeFormat } from "../utils/sizeFormat";
import { cn } from "..";
import "./index.less";
export const DashboardItem = (props: Partial<IDashboardItemProps>) => {
  const {
    headerHeight = 0,
    gridSize = { w: 0, h: 0 },
    h = 0,
    i,
    w = 0,
    x = 0,
    y = 0,
    padding = "12px",
    matchBreak,

    className,
    style,

    zIndex,
    children,
  } = props;
  const getStyle = () => {
    const s: React.CSSProperties = {
      ...style,
    };
    s.zIndex = zIndex;
    s.width = sizeFormat(w * gridSize?.w);
    s.height = sizeFormat(h * gridSize?.h);
    s.transform = ` translate( ${sizeFormat(x * gridSize?.w)}px , ${sizeFormat(
      y * gridSize?.h + headerHeight
    )}px )`;
    if (padding) {
      s.padding = padding;
    }

    return s;
  };
  return (
    <div
      className={cn(
        "dashboardItem",
        className ? `dashboardItem-${className}` : "",
        i,
        matchBreak
      )}
      style={{
        ...getStyle(),
      }}
    >
      {children}
    </div>
  );
};
