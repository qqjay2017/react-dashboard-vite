import { createContext } from "react";
import { BreakpointKey } from "../core";


export interface BreakpointContextValue {
  breakpoint: BreakpointKey;
}
export const defaultBreakpointContextValue: BreakpointContextValue = {

  breakpoint: "desktop",
};
export const BreakpointContext = createContext({
  ...defaultBreakpointContextValue,
});

