import { createContext, useContext } from "react";
import { ResourceOptions } from "../core/type";

export interface BreakpointContextValue {
  breakpoint: string;
  rows: number;
  cols: number;
  headerHeight: number;
  forceFullScreen: boolean;
  rowHeight: number;
  colWidth: number;
  layout: ResourceOptions[];
}
const defaultBreakpointContextValue: BreakpointContextValue = {
  layout: [],
  breakpoint: "",
  rows: 12,
  cols: 12,
  headerHeight: 0,
  forceFullScreen: true,
  rowHeight: 78,
  colWidth: 0,
};
export const BreakpointContext = createContext({
  ...defaultBreakpointContextValue,
});

export const useBreakpointContext = () =>
  useContext(BreakpointContext) || { ...defaultBreakpointContextValue };
