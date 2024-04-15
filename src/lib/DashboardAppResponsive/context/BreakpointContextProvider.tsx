import { PropsWithChildren } from "react";
import { BreakpointContext } from "./BreakpointContext";
import { useBreakpoints } from "../core/hooks/useBreakpoints";
import { Breakpoints } from "../core/type";

export interface BreakpointContextProviderProps extends PropsWithChildren {
  breakpoints?: Breakpoints;
}

export const BreakpointContextProvider = ({
  children,
  breakpoints,
}: BreakpointContextProviderProps) => {
  const { ref, breakpoint } = useBreakpoints(breakpoints);
  console.log(breakpoint, "breakpoint");
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <BreakpointContext.Provider
        value={{
          breakpoint: breakpoint,
        }}
      >
        {children}
      </BreakpointContext.Provider>
    </div>
  );
};
