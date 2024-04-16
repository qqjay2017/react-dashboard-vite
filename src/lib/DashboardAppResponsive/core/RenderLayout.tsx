import { ResourceChildren } from "./type";
import { useBreakpointContext } from "../context";
import { getElement } from "./utils/getElement";
import { DashboardItem } from "@/lib/DashboardItem";

export const RenderLayout = ({
  resource = {},
}: {
  resource?: Record<string, ResourceChildren>;
}) => {
  const {
    layout: layouts,
    breakpoint,
    colWidth,
    rowHeight,
  } = useBreakpointContext();

  return layouts.map((layout, index) => {
    return (
      <DashboardItem
        zIndex={index + 3}
        {...layout}
        matchBreak={breakpoint}
        gridSize={{
          w: colWidth,
          h: rowHeight,
        }}
        key={`DashboardItem-${layout.i}`}
      >
        {getElement(resource[layout.i] as any)}
      </DashboardItem>
    );
  });
};
