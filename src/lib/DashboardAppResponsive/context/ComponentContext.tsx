import { ResourceComponent } from "@/lib/DashboardItem/interface";
import {
  ElementType,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";

export interface ComponentContextValue {
  containerWrapper: ElementType<ResourceComponent>;
  titleWrapper: ElementType<ResourceComponent>;
  titleChildren: ElementType<ResourceComponent>;
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
