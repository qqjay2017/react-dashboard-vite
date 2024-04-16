import {
  ElementType,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";

export interface ComponentContextValue {
  containerWrapper: ElementType<PropsWithChildren>;
  titleWrapper: ElementType<PropsWithChildren>;
  titleChildren: ElementType<PropsWithChildren>;
}

export const DefaultComponent = ({ children }: PropsWithChildren) => (
  <>{children} </>
);

export const ComponentContext = createContext<ComponentContextValue>({
  containerWrapper: DefaultComponent,
  titleWrapper: DefaultComponent,
  titleChildren: DefaultComponent,
});

export const useComponentContext = () => useContext(ComponentContext);
