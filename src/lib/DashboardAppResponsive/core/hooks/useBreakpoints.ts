import { useCallback, useState } from "react";
import useResizeObserver from "use-resize-observer";
import { defaultBreakpoints } from "../utils/defaultBreakpoints";
import { getBreakpointFromWidth } from "../utils/responsiveUtils";
import { Breakpoints } from "../type";

export const useBreakpoints = (
  breakpoints: Breakpoints = defaultBreakpoints
) => {
  const [breakpoint, setBreakpoint] = useState<string>("");
  const { ref } = useResizeObserver({
    onResize: useCallback(
      ({ width = 0 }: { width?: number; height?: number }) => {
        setBreakpoint(getBreakpointFromWidth(breakpoints, width) || "");
      },
      [breakpoints]
    ),
  });

  return { ref, breakpoint };
};
