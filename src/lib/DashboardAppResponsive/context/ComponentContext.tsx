import React, { ElementType, PropsWithChildren, createContext } from "react";

export interface ComponentContextValue {
  containerWrapper: ElementType<PropsWithChildren>;
  title: ElementType<PropsWithChildren>;
}

export const DefaultComponent = ({ children }: PropsWithChildren) => (
  <>{children} </>
);

export const ComponentContext = createContext<ComponentContextValue>({
  containerWrapper: DefaultComponent,
  title: DefaultComponent,
});
