import { PropsWithChildren } from "react";
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
  titleWrapper = DefaultComponent,
  titleChildren = DefaultComponent,
}: ComponentContextProviderProps) => {
  return (
    <ComponentContext.Provider
      value={{
        containerWrapper,
        titleWrapper,
        titleChildren,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};
