import { OnLayoutChange, ResourceChildren } from "./type";
import { useBreakpointContext } from "../context";
import { getElement } from "./utils/getElement";
import { DashboardItem } from "@/lib/DashboardItem";
import { useComponentContext } from "../context/ComponentContext";
import { useDraggableContext } from "../context/DraggableContext";
import { DraggableBg } from "./DraggableBg";

export const RenderLayout = ({
  resource = {},
  resoucreProps,
  onLayoutChange,
}: {
  resource?: Record<string, ResourceChildren>;
  resoucreProps?: Record<string, any>;
  onLayoutChange?: OnLayoutChange;
}) => {
  const { containerWrapper, titleWrapper, titleChildren } =
    useComponentContext();
  const {
    cols,
    rows,
    layout: layouts,
    breakpoint,
    colWidth,
    rowHeight,
    headerHeight = 0,
  } = useBreakpointContext();

  const { isDraggable, isResizable } = useDraggableContext();

  return (
    <>
      {isDraggable || isResizable ? (
        <DraggableBg
          headerHeight={headerHeight}
          cols={cols}
          rows={rows}
          colWidth={colWidth}
          rowHeight={rowHeight}
        />
      ) : null}
      {/* 头部 */}
      <div
        key={"titleWrapper-" + breakpoint}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
          height: headerHeight,
        }}
      >
        {getElement(titleWrapper as any, {
          ...resoucreProps,
          breakpoint,
          colWidth,
          rowHeight,
          children: getElement(titleChildren as any, {
            ...resoucreProps,
            breakpoint,
            colWidth,
            rowHeight,
          }),
        })}
      </div>

      {layouts.map((layout, index) => {
        return (
          <DashboardItem
            zIndex={index + 3}
            onLayoutChange={onLayoutChange}
            {...layout}
            headerHeight={headerHeight}
            matchBreak={breakpoint}
            colWidth={colWidth}
            rowHeight={rowHeight}
            key={`DashboardItem-${layout.i}`}
          >
            {getElement(resource[layout.i] as any, {
              ...resoucreProps,
              breakpoint,
              colWidth,
              rowHeight,
              containerWrapper,
              nodeContentRenderer: containerWrapper,
            })}
          </DashboardItem>
        );
      })}
    </>
  );
};
