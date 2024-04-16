import { PropsWithChildren, ReactElement, ReactNode } from "react";

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
  padding?: number | string;

  gridSize?: {
    w: number;
    h: number;
  };
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
  data?: any;
}

export interface ResourceDefinition<OptionsType extends ResourceOptions = any> {
  readonly id: string;
  readonly options?: OptionsType;
}

export type ResourceElement = ReactElement<ResourceOptions>;
export type RenderResourcesFunction = (permissions: any) =>
  | ReactNode // (permissions) => <><Resource /><Resource /><Resource /></>
  | Promise<ReactNode> // (permissions) => fetch().then(() => <><Resource /><Resource /><Resource /></>)
  | ResourceElement[] // // (permissions) => [<Resource />, <Resource />, <Resource />]
  | Promise<ResourceElement[]>; // (permissions) => fetch().then(() => [<Resource />, <Resource />, <Resource />])
export type ResourceChildren =
  | RenderResourcesFunction
  | Iterable<ReactNode | RenderResourcesFunction>
  | ReactNode;

export type ValueOrFunValue<T> = T | ((params: { breakpoint?: string }) => T);
