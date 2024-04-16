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
import { ResourceDefinitionContextProvider } from "../context/ResourceDefinitionContextProvider";
import { ResourceOptions, ValueOrFunValue } from "./type";

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
  layout = [],
  resource = {},
  cols,
  headerHeight,
}: CoreContextProps) => {
  return (
    <QueryClientProvider>
      <ResourceDefinitionContextProvider>
        <BreakpointContextProvider
          breakpoints={breakpoints}
          layout={layout}
          resource={resource}
          cols={cols}
          headerHeight={headerHeight}
        >
          <ThemeContextProvider theme={theme}>
            <ComponentContextProvider
              title={title}
              containerWrapper={containerWrapper}
            >
              {children}
            </ComponentContextProvider>
          </ThemeContextProvider>
        </BreakpointContextProvider>
      </ResourceDefinitionContextProvider>
    </QueryClientProvider>
  );
};
