/**
 * theme如何设计
 */
export interface DashBoardTheme {
  themeName: string;
  /**
   * 节点通用的nodeContentRenderer
   */
  nodeContentRenderer?: any;
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
