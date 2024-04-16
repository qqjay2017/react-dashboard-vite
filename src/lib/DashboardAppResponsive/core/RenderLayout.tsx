import { ResourceChildren } from "./type";
import { useBreakpointContext } from "../context";
import { getElement } from "./utils/getElement";
import { DashboardItem } from "@/lib/DashboardItem";
import { useComponentContext } from "../context/ComponentContext";

export const RenderLayout = ({
  resource = {},
  resoucreProps,
}: {
  resource?: Record<string, ResourceChildren>;
  resoucreProps?: Record<string, any>;
}) => {
  const { containerWrapper, titleWrapper, titleChildren } =
    useComponentContext();
  const {
    layout: layouts,
    breakpoint,
    colWidth,
    rowHeight,
    headerHeight = 0,
  } = useBreakpointContext();

  return (
    <>
      <div
        key={"titleWrapper-" + breakpoint}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          width: "100%",
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
            {...layout}
            headerHeight={headerHeight}
            matchBreak={breakpoint}
            gridSize={{
              w: colWidth,
              h: rowHeight,
            }}
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
