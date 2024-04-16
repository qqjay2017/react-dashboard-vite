import { PropsWithChildren } from "react";
import { CoreContext, CoreContextProps } from "./CoreContext";
import { RenderLayout } from "./RenderLayout";

export interface CoreDashboardAppResponsiveProps
  extends CoreContextProps,
    PropsWithChildren {
  resoucreProps?: Record<string, any>;
  themeProvider?: CoreDashboardAppResponsiveProps;
}

export const CoreDashboardAppResponsive = (
  _props: CoreDashboardAppResponsiveProps
) => {
  const props = {
    ..._props,
    ..._props.themeProvider,
  };
  return (
    <CoreContext {...props}>
      {props.children}
      <RenderLayout
        resource={props.resource}
        resoucreProps={props.resoucreProps || {}}
      />
    </CoreContext>
  );
};
