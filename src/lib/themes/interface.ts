/**
 * theme如何设计?
 */

import { IDashboardItemChldBaseProps } from "../DashboardItem";

export type INodeContentRenderer<CustomeProps = Record<string, any>> = (
  props: IDashboardItemChldBaseProps & CustomeProps
) => React.ReactNode;
export interface DashBoardTheme {
  themeName: string;
  /**
   * 节点通用的nodeContentRenderer
   */
  nodeContentRenderer?: INodeContentRenderer;
  /**
   * 上面标题栏
   */
  titleNodeRenderer?: any;

  /**
   * 外壳的style
   */
  style?: React.CSSProperties;
  /**
   * 外壳的className
   */
  className?: string;
}
