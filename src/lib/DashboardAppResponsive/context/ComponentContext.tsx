import { ResourceComponent } from "@/lib/DashboardItem/interface";
import {
  ElementType,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";

export interface ComponentContextValue {
  /**
   * 容器的外壳,一般是定制ui样式,入参title等
   */
  containerWrapper: ElementType<ResourceComponent>;
  /**
   * 头部容器组件,一般是定制背景图等外壳逻辑
   */
  titleWrapper: ElementType<ResourceComponent>;
  /**
   * 头部子组件,将作为titleWrapper 的chilren传入
   *
   */
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
