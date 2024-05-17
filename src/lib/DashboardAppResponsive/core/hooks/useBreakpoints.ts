import { useCallback, useMemo, useState } from "react";
import useResizeObserver from "use-resize-observer";
import { defaultBreakpoints } from "../utils/defaultBreakpoints";
import { getBreakpointFromWidth } from "../utils/responsiveUtils";
import { BreakpointKey, Breakpoints } from "../type";
import { debounce } from "lodash-es";
export const useBreakpoints = (
  breakpoints: Breakpoints = defaultBreakpoints,
  wait = 800
) => {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>('desktop');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  // 防抖
  const setSize = useCallback(
    ({ width = 0, height = 0 }: { width?: number; height?: number }) => {
      setWidth(width);
      setHeight(height);
      setBreakpoint(getBreakpointFromWidth(breakpoints, width) || "");
    },
    [breakpoints]
  );

  const onResize = useMemo(
    () => debounce(setSize, wait, { leading: true }),
    [wait, setSize]
  );
  useResizeObserver({
    ref: document.body,
    onResize: onResize,
  });

  return { breakpoint, width, height };
};
