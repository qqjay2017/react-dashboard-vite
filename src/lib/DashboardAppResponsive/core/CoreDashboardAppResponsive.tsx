import { PropsWithChildren } from "react";
import { CoreContext, CoreContextProps } from "./CoreContext";
import { RenderLayout } from "./RenderLayout";
import { OnLayoutChange } from "./type";
import { ThemeMode, ThemeModeProvider, useThemeMode } from "../context";

export interface CoreDashboardAppResponsiveProps
  extends CoreContextProps,
    PropsWithChildren {
  /**
   * 容器属性注入,所有属性将会变成组件的props
   * 
   * @example
   * 
   *  <DashboardAppResponsive
        resoucreProps={{
          test: 123,
        }} 
          resource={{
            A1: TestChildA1,
          }}
        
        />

      export const TestChildA1 = (props: ResourceChildrenProps) => {
        console.log(props.test, "props");
        const { containerWrapper: ContainerWrapper } = props;
        return (
          <ContainerWrapper>
            TestChildA1 ContainerWrapper
            <button>123</button>
          </ContainerWrapper>
        );
      };

   */
  resoucreProps?: Record<string, any>;
  /**
   * 预设主题
   * 预设主题内可以提供 DashboardAppResponsive 组件的任意属性,但是会被顶级属性所覆盖
   *
   *@example
  
  const jfDarkTheme: DashBoardTheme = {
      themeName: "jfDarkTheme",
      titleWrapper: TitleNodeRenderer,

      containerWrapper: NodeContentRenderer,
      wrapperStyle: {
        backgroundColor: "#052B54",
      },
    };
  
    <DashboardAppResponsive
        
        themeProvider={jfDarkTheme}

        />
   */
  themeProvider?:
    | CoreDashboardAppResponsiveProps
    | ((params: { themeMode: ThemeMode }) => CoreDashboardAppResponsiveProps);
  /**
   * 
   * 布局变化后的回调
   * 
   * @example 
   * <DashboardAppResponsive
        onLayoutChange={(id, newLayout) => {
          setPcLayout((layouts) => {
            return layouts.map((layout) => {
              if (layout.i === id) {
                return {
                  ...layout,
                  ...newLayout,
                };
              }
              return layout;
            });
          });
        }}
   */
  onLayoutChange?: OnLayoutChange;
}

export const CoreDashboardAppResponsiveInner = (
  _props: CoreDashboardAppResponsiveProps
) => {
  const { themeMode } = useThemeMode();
  const themeProvider =
    typeof _props.themeProvider === "function"
      ? _props.themeProvider({ themeMode })
      : _props.themeProvider;
  const props = {
    ...themeProvider,
    ..._props,
  };

  return (
    <CoreContext {...props} key={`themeMode-${themeMode}`}>
      {props.children}
      <RenderLayout
        resource={props.resource}
        resoucreProps={props.resoucreProps || {}}
        onLayoutChange={props.onLayoutChange}
      />
    </CoreContext>
  );
};

export const CoreDashboardAppResponsive = (
  <ThemeModeProvider>
    <CoreDashboardAppResponsiveInner />
  </ThemeModeProvider>
);
