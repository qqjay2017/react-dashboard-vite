import { OnLayoutChange, ResourceChildren } from "./type";
import { useBreakpointContext } from "../context";
import { getElement } from "./utils/getElement";
import { DashboardItem } from "@/lib/DashboardItem";

import { useLayoutContext } from "../context/useLayoutContext";
import { LayoutContextComponents } from "../context/LayoutContextProvider";
import { PropsWithChildren } from "react";
const DefaultContainerWrapper = ({ children }: PropsWithChildren) => (
  <>{children}</>
);
export const RenderLayout = ({
  resource = {},
  resoucreProps,
  onLayoutChange,
  components,
}: {
  resource?: Record<string, ResourceChildren>;
  resoucreProps?: Record<string, any>;
  onLayoutChange?: OnLayoutChange;
  components: LayoutContextComponents;
}) => {
  const containerWrapper =
    components?.containerWrapper || DefaultContainerWrapper;
  const { breakpoint } = useBreakpointContext();

  const { layout: layouts, colWidth, rowHeight } = useLayoutContext();

  console.log({
    rowHeight,
    colWidth,
  });

  // const { isDraggable, isResizable } = useDraggableContext();

  return (
    <>
      {layouts.map((layout, index) => {
        if (!layout.w || !layout.i) {
          return null;
        }
        return (
          <DashboardItem
            zIndex={index + 3}
            onLayoutChange={onLayoutChange}
            {...layout}
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
