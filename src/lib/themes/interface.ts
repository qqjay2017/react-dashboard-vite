/**
 * theme如何设计?
 */

import { FC } from "react";
import { IDashboardItemChldBaseProps } from "../DashboardItem";

export type INodeContentRenderer<CustomeProps = Record<string, any>> = (
  props: IDashboardItemChldBaseProps & CustomeProps
) => React.ReactNode;

export type TitleNodeRendererType<T = Record<string, any>> = FC<
  {
    matchBreak?: string;
    children?: React.ReactNode | undefined;
  } & T
>;
export interface DashBoardTheme {
  themeName: string;
  /**
   * 节点通用的nodeContentRenderer
   */
  nodeContentRenderer?: INodeContentRenderer;
  /**
   * 上面标题栏
   */
  titleNodeRenderer?: TitleNodeRendererType;

  /**
   * 外壳的style
   */
  style?: React.CSSProperties;
  /**
   * 外壳的className
   */
  className?: string;
}
