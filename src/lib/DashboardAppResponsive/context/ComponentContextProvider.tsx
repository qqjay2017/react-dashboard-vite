import React, { PropsWithChildren } from "react";
import {
  ComponentContext,
  ComponentContextValue,
  DefaultComponent,
} from "./ComponentContext";

interface ComponentContextProviderProps
  extends Partial<ComponentContextValue>,
    PropsWithChildren {}
export const ComponentContextProvider = ({
  children,
  containerWrapper = DefaultComponent,
  title = DefaultComponent,
}: ComponentContextProviderProps) => {
  return (
    <ComponentContext.Provider
      value={{
        containerWrapper,
        title,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};
