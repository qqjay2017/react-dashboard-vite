import { PropsWithChildren } from "react";
import { CoreContext, CoreContextProps } from "./CoreContext";

export interface CoreDashboardAppResponsiveProps
  extends CoreContextProps,
    PropsWithChildren {}

export const CoreDashboardAppResponsive = (
  props: CoreDashboardAppResponsiveProps
) => {
  return <CoreContext {...props}>{props.children}</CoreContext>;
};
