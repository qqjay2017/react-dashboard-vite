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
    matchBreak = "",
    Content,
    theme,
    className,
    style,
    ...rest
  } = props;
  const getStyle = () => {
    const s: React.CSSProperties = {
      ...style,
    };
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
      className={cn(
        "dashboardItem",
        styles.dashboardItem,
        theme?.className ? `dashboardItem-${theme?.className}` : "",
        className ? `dashboardItem-${className}` : ""
      )}
      style={{
        ...getStyle(),
      }}
    >
      {Content && (
        <Content
          {...rest}
          theme={theme}
          matchBreak={matchBreak}
          gridSize={gridSize}
          i={i}
        />
      )}
    </div>
  );
};
