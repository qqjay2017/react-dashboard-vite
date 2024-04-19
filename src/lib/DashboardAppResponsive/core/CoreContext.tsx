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
import { ComponentContextValue } from "../context/ComponentContext";
import {
  DraggableContextProvider,
  DraggableContextProviderProps,
} from "../context/DraggableContextProvider";

export interface CoreContextProps
  extends PropsWithChildren,
    BreakpointContextProviderProps,
    ThemeContextProviderProps,
    DraggableContextProviderProps,
    Partial<ComponentContextValue> {
  resoucreProps?: Record<string, any>;
}

export const CoreContext = ({
  children,
  breakpoints,
  theme,
  titleWrapper,

  containerWrapper,
  titleChildren,
  layout = [],
  resource = {},
  cols,
  headerHeight,
  themeName,
  wrapperProps = {},
  wrapperStyle = {},
  forceFullScreen,
  isDraggable = false,
  isResizable = false,
}: CoreContextProps) => {
  return (
    <QueryClientProvider>
      <ResourceDefinitionContextProvider>
        <BreakpointContextProvider
          forceFullScreen={forceFullScreen}
          breakpoints={breakpoints}
          layout={layout}
          resource={resource}
          cols={cols}
          headerHeight={headerHeight}
          themeName={themeName || ""}
          wrapperProps={wrapperProps}
          wrapperStyle={wrapperStyle}
        >
          <ThemeContextProvider theme={theme} themeName={themeName}>
            <ComponentContextProvider
              titleWrapper={titleWrapper}
              titleChildren={titleChildren}
              containerWrapper={containerWrapper}
            >
              <DraggableContextProvider
                isDraggable={isDraggable}
                isResizable={isResizable}
              >
                {children}
              </DraggableContextProvider>
            </ComponentContextProvider>
          </ThemeContextProvider>
        </BreakpointContextProvider>
      </ResourceDefinitionContextProvider>
    </QueryClientProvider>
  );
};
