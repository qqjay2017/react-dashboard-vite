import { CoreDashboardAppResponsiveProps } from "@/lib";

export interface DashBoardTheme
  extends Partial<CoreDashboardAppResponsiveProps> {
  themeName: string;
}
