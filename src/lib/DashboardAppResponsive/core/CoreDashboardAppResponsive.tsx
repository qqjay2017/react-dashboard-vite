import { PropsWithChildren } from "react";
import { CoreContext, CoreContextProps } from "./CoreContext";
import { RenderLayout } from "./RenderLayout";

export interface CoreDashboardAppResponsiveProps
  extends CoreContextProps,
    PropsWithChildren {}

export const CoreDashboardAppResponsive = (
  props: CoreDashboardAppResponsiveProps
) => {
  return (
    <CoreContext {...props}>
      {props.children}
      <RenderLayout resource={props.resource} />
    </CoreContext>
  );
};
