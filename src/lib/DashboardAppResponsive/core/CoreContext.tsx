import { QueryClientProvider } from "@/lib/context/QueryClientProvider";
import { PropsWithChildren } from "react";
import {
  BreakpointContextProvider,
  BreakpointContextProviderProps,
} from "../context/BreakpointContextProvider";
import {
  ThemeContextProvider,
  ThemeContextProviderProps,
} from "../context/ThemeContextProvider";
import { ComponentContextProvider } from "../context/ComponentContextProvider";

export interface CoreContextProps
  extends PropsWithChildren,
    BreakpointContextProviderProps,
    ThemeContextProviderProps {}

export const CoreContext = ({
  children,
  breakpoints,
  theme,
  title,
  containerWrapper,
}: CoreContextProps) => {
  return (
    <QueryClientProvider>
      <BreakpointContextProvider breakpoints={breakpoints}>
        <ThemeContextProvider theme={theme}>
          <ComponentContextProvider
            title={title}
            containerWrapper={containerWrapper}
          >
            {children}
          </ComponentContextProvider>
        </ThemeContextProvider>
      </BreakpointContextProvider>
    </QueryClientProvider>
  );
};
