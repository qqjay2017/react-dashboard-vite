import {
  ComponentType,
  ElementType,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

export type Breakpoints = Record<string, number>;

export interface ResourceOptions extends PropsWithChildren {
  i: string;
  w: number;
  h: number;
  x: number;
  y: number;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
  padding?: number | [number, number, number, number];
  isDraggable?: boolean;
  isResizable?: boolean;

  gridSize?: {
    w: number;
    h: number;
  };
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
  data?: any;
}

export type ResourceDefinition<T = ResourceOptions> = T & {
  // readonly id: string;
  // readonly options?: ResourceOptions;
};

export type ResourceElement = ReactElement<ResourceOptions>;
export type RenderResourcesFunction = (permissions: any) =>
  | ReactNode // (permissions) => <><Resource /><Resource /><Resource /></>
  | Promise<ReactNode> // (permissions) => fetch().then(() => <><Resource /><Resource /><Resource /></>)
  | ResourceElement[] // // (permissions) => [<Resource />, <Resource />, <Resource />]
  | Promise<ResourceElement[]>; // (permissions) => fetch().then(() => [<Resource />, <Resource />, <Resource />])
export type ResourceChildren = ComponentType<any> | ReactElement;

export type ValueOrFunValue<T> = T | ((params: { breakpoint?: string }) => T);

export type ResourceChildrenProps = {
  breakpoint: string;
  colWidth: number;
  containerWrapper: ElementType<any>;
  rowHeight: number;
};

export type OnLayoutChange = (
  id: string,
  newLayout: Partial<ResourceOptions>
) => void;
