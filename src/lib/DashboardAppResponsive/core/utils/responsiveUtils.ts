import { Breakpoints } from "../type";

export function sortBreakpoints(breakpoints: Breakpoints): Array<string> {
  const keys: Array<string> = Object.keys(breakpoints);
  return keys.sort(function (a, b) {
    return breakpoints[a] - breakpoints[b];
  });
}

export function getBreakpointFromWidth(
  breakpoints: Breakpoints,
  width: number
): string {
  if (!width) {
    return "";
  }
  const sorted = sortBreakpoints(breakpoints);
  let matching = sorted[0];
  if (!matching) {
    return "";
  }
  for (let i = 1, len = sorted.length; i < len; i++) {
    const breakpointName = sorted[i];
    if (width > breakpoints[breakpointName]) matching = breakpointName;
  }
  return matching;
}
