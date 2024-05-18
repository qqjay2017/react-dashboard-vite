
import { PropsWithChildren } from "react";
import {
  BreakpointContextProvider,
  BreakpointContextProviderProps,
} from "../context/BreakpointContextProvider";
import {
  ThemeContextProvider,
  ThemeContextProviderProps,
} from "../context/ThemeContextProvider";

import { ResourceDefinitionContextProvider } from "../context/ResourceDefinitionContextProvider";

import {
  DraggableContextProvider,
  DraggableContextProviderProps,
} from "../context/DraggableContextProvider";

import { LayoutContextProvider, LayoutContextProviderProps } from "../context/LayoutContextProvider";



export interface CoreContextProps
  extends PropsWithChildren,
  LayoutContextProviderProps,
  BreakpointContextProviderProps,
  ThemeContextProviderProps,
  DraggableContextProviderProps {
  resoucreProps?: Record<string, any>;
  minHeight?: number;
}

export const CoreContext = (props: CoreContextProps) => {
  const {
    children,
    breakpoints,

    isDraggable = false,
    isResizable = false,
  } = props;
  return (
    <BreakpointContextProvider
      breakpoints={breakpoints}
    >
      <LayoutContextProvider {...props}>
        <ThemeContextProvider {...props}>
          <ResourceDefinitionContextProvider>
            <DraggableContextProvider
              isDraggable={isDraggable}
              isResizable={isResizable}
            >
              {children}
            </DraggableContextProvider>
          </ResourceDefinitionContextProvider>
        </ThemeContextProvider>
      </LayoutContextProvider>
    </BreakpointContextProvider>

  );
};
