import { CoreDashboardAppResponsiveProps } from "../DashboardAppResponsive";

export interface DashBoardTheme
  extends Partial<CoreDashboardAppResponsiveProps> {
  themeName: string;
}
