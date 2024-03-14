import { IDashboardItemProps } from "../DashboardItem";

export const computedMaxRow = (layout: Partial<IDashboardItemProps>[]) => {
  return layout.map((l) => (l.y || 0) + (l.h || 0)).sort((a, b) => b - a)[0];
};
