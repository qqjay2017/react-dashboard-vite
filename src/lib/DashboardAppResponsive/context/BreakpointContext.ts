import { createContext, useContext } from "react";

export interface BreakpointContextValue {
  breakpoint: string;
  rows: number;
  cols: number;
  headerHeight: number;
  forceFullScreen: boolean;
  rowHeight: number;
}
const defaultBreakpointContextValue: BreakpointContextValue = {
  breakpoint: "",
  rows: 12,
  cols: 12,
  headerHeight: 0,
  forceFullScreen: true,
  rowHeight: 78,
};
export const BreakpointContext = createContext({
  ...defaultBreakpointContextValue,
});

export const useBreakpointContext = () =>
  useContext(BreakpointContext) || { ...defaultBreakpointContextValue };
