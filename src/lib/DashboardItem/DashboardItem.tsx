import React, { useMemo } from "react";
import { IDashboardItemProps } from "./interface";
import { sizeFormat } from "../utils/sizeFormat";
import { OnLayoutChange, cn } from "..";
import "./index.less";
import { useDraggableContext } from "../DashboardAppResponsive/context/DraggableContext";
import { Rnd } from "react-rnd";
import { ResizeHandleComponent } from "./ResizeHandleComponent";
export const DashboardItem = (
  props: { onLayoutChange?: OnLayoutChange } & Partial<IDashboardItemProps>
) => {
  const {
    headerHeight = 0,

    h = 0,
    i = "",
    w = 0,
    x = 0,
    y = 0,
    padding = 12,
    matchBreak,
    colWidth = 0,
    rowHeight = 0,
    // className,
    style,
    isDraggable: itemIsDraggable = true,
    isResizable: itemIsResizable = true,
    zIndex,
    children,
    onLayoutChange,
  } = props;

  const { isDraggable, isResizable, handleId, setHandleId } =
    useDraggableContext();
  const getStyle = useMemo(() => {
    const s: React.CSSProperties = {
      ...style,
    };

    if (padding) {
      s.padding = Array.isArray(padding)
        ? padding.map((p) => p || 0 + "px").join(" ")
        : padding;
    }
    if (zIndex) {
      s.zIndex = zIndex;
    }

    return s;
  }, [padding, style, zIndex]);
  const disableDragging = itemIsDraggable === false || isDraggable === false;
  const enableResizing = itemIsResizable !== false && isResizable !== false;
  const needRnd = enableResizing || !disableDragging;
  const resizeActive = Boolean(i && handleId && handleId === i);
  const width = sizeFormat(w * colWidth);
  const height = sizeFormat(h * rowHeight);
  if (needRnd) {
    return (
      <Rnd
        dragGrid={[colWidth / 4, rowHeight / 4]}
        resizeGrid={[colWidth / 4, rowHeight / 4]}
        onMouseDown={() => {
          setHandleId(i || "");
        }}
        position={{
          x: sizeFormat(x * colWidth),
          y: sizeFormat(y * rowHeight + headerHeight),
        }}
        size={{
          width,
          height,
        }}
        style={{
          // ...getStyle,
          zIndex,
          padding: getStyle.padding,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor:
            i && handleId && handleId === i ? "#2f54eb" : "transparent",
        }}
        resizeHandleStyles={{
          topRight: {
            width: 10,
            height: 10,
            right: -5,
            top: -5,
          },
          topLeft: {
            width: 10,
            height: 10,
            left: -5,
            top: -5,
          },
          bottomRight: {
            width: 10,
            height: 10,
            right: -5,
            bottom: -5,
          },
          bottomLeft: {
            width: 10,
            height: 10,
            left: -5,
            bottom: -5,
          },
        }}
        resizeHandleComponent={{
          topRight: <ResizeHandleComponent />,
          bottomRight: <ResizeHandleComponent />,
          bottomLeft: <ResizeHandleComponent />,
          topLeft: <ResizeHandleComponent />,
        }}
        // resizeHandleStyles={{
        //   left: {
        //     left: 12,
        //   },
        //   right: {
        //     right: 12,
        //   },
        //   top: {
        //     top: 12,
        //   },
        //   bottom: {
        //     bottom: 12,
        //   },
        // }}
        disableDragging={disableDragging}
        enableResizing={
          enableResizing && resizeActive
            ? {
                bottomRight: true,
                right: true,
                bottom: true,
              }
            : false
        }
        onDragStop={(e, { x, y }) => {
          console.log(e, "e");
          onLayoutChange &&
            onLayoutChange(i || "", {
              x: sizeFormat(x / colWidth),
              y: sizeFormat((y - headerHeight) / rowHeight),
            });
        }}
        onResizeStop={(e, direction, ref: any) => {
          console.log(e, direction, "e, direction");
          onLayoutChange &&
            onLayoutChange(i || "", {
              w: sizeFormat(parseInt(ref.style.width || 0, 10) / colWidth),
              h: sizeFormat(parseInt(ref.style.height || 0, 10) / rowHeight),
            });
        }}
      >
        {children}
      </Rnd>
    );
  }
  return (
    <div
      className={cn("dashboardItem", matchBreak)}
      style={{
        ...getStyle,
        width,
        height,
        transform: `translate( ${sizeFormat(x * colWidth)}px ,${sizeFormat(y * rowHeight + headerHeight)}px )`,
      }}
    >
      {children}
    </div>
  );
};
