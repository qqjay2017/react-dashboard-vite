import React, { useMemo } from "react";
import { IDashboardItemProps } from "./interface";
import { sizeFormat } from "../utils/sizeFormat";
import { cn } from "..";
import "./index.less";
import { useDraggableContext } from "../DashboardAppResponsive/context/DraggableContext";
import { Rnd } from "react-rnd";
export const DashboardItem = (props: Partial<IDashboardItemProps>) => {
  const {
    headerHeight = 0,

    h = 0,
    i,
    w = 0,
    x = 0,
    y = 0,
    padding = "12px",
    matchBreak,
    colWidth = 0,
    rowHeight = 0,
    className,
    style,
    isDraggable: itemIsDraggable = true,
    isResizable: itemIsResizable = true,
    zIndex,
    children,
  } = props;

  const { isDraggable, isResizable } = useDraggableContext();
  const getStyle = useMemo(() => {
    const s: React.CSSProperties = {
      ...style,
    };

    if (padding) {
      s.padding = padding;
    }
    if (zIndex) {
      s.zIndex = zIndex;
    }

    return s;
  }, [padding, style, zIndex]);
  console.log(itemIsResizable !== false && isResizable !== false);
  return (
    <Rnd
      className={cn("dashboardItem", matchBreak)}
      size={{
        width: sizeFormat(w * colWidth),
        height: sizeFormat(h * rowHeight),
      }}
      position={{
        x: sizeFormat(x * colWidth),
        y: sizeFormat(y * rowHeight + headerHeight),
      }}
      style={{
        ...getStyle,
      }}
      disableDragging={itemIsDraggable === false || isDraggable === false}
      enableResizing={itemIsResizable !== false && isResizable !== false}
      onDragStop={(e, d) => {
        console.log(d, "onDragStop");
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        console.log(direction, ref, delta, position, "onResizeStop");
      }}
    >
      {children}
    </Rnd>
  );
};
