import { createContext, useContext } from "react";

export interface BreakpointContextValue {
  breakpoint: string;
}

export const BreakpointContext = createContext({
  breakpoint: "",
});

export const useBreakpointContext = () => useContext(BreakpointContext);
