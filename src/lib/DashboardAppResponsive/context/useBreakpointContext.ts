import { useContext } from "react";
import { BreakpointContext, defaultBreakpointContextValue } from "./BreakpointContext";

export const useBreakpointContext = () =>
    useContext(BreakpointContext) || { ...defaultBreakpointContextValue };
  