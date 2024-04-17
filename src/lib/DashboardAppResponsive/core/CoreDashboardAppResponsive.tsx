import { PropsWithChildren } from "react";
import { CoreContext, CoreContextProps } from "./CoreContext";
import { RenderLayout } from "./RenderLayout";
import { OnLayoutChange } from "./type";

export interface CoreDashboardAppResponsiveProps
  extends CoreContextProps,
    PropsWithChildren {
  resoucreProps?: Record<string, any>;
  themeProvider?: CoreDashboardAppResponsiveProps;
  onLayoutChange?: OnLayoutChange;
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
        onLayoutChange={props.onLayoutChange}
      />
    </CoreContext>
  );
};
