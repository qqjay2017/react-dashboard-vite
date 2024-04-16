import React, { Fragment, memo, useContext, useEffect } from "react";
import {
  Badge,
  IDashboardItemChldBaseProps,
  PropsWithTheme,
  SkeletonKit,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeContext,
  useBreakpointContext,
  useDashboard,
  useTheme,
  withTheme,
} from "./lib";

export const TestChildA = (props: IDashboardItemChldBaseProps) => {
  const { theme } = props;
  const WrapCom = Fragment;
  return <WrapCom>A</WrapCom>;
};

export const TestChildB = (props: IDashboardItemChldBaseProps) => {
  const { theme } = props;
  const WrapCom = Fragment;
  return <WrapCom>A</WrapCom>;
};

const TestChildMemo = memo(() => {
  console.log("TestChildMemo");
  useEffect(() => {
    console.log("TestChildMemo effct");
  }, []);
  return (
    <SkeletonKit loading={false} isEmpty={false}>
      <div>
        <Tabs
          defaultValue="bim"
          onValueChange={(e) => {
            console.log(e, "eee");
          }}
        >
          <TabsList>
            <TabsTrigger value="bim">模型</TabsTrigger>
            <TabsTrigger value="video">视频</TabsTrigger>
            <TabsTrigger value="video1" disabled>
              禁用
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </SkeletonKit>
  );
});

export const TestChildC1 = (props: IDashboardItemChldBaseProps) => {
  const { theme } = props;
  const dashboardCtx = useDashboard();
  const WrapCom = theme?.nodeContentRenderer || Fragment;
  useEffect(() => {
    console.log("TestChildC effct");
  }, []);
  return (
    <WrapCom
      {...props}
      title={"项目阶段情况"}
      subTitle={"（单位：亿元）"}
      exact={<input />}
    >
      <TestChildMemo />
    </WrapCom>
  );
};

export const TestChildC2 = (props: IDashboardItemChldBaseProps) => {
  const { theme } = props;
  const dashboardCtx = useDashboard();
  const WrapCom = theme?.nodeContentRenderer || Fragment;

  return (
    <WrapCom
      {...props}
      title={"项目阶段情况"}
      subTitle={"（单位：亿元）"}
      exact={<input />}
    ></WrapCom>
  );
};

export const TestChildC3 = (props: IDashboardItemChldBaseProps) => {
  const { theme } = props;
  const dashboardCtx = useDashboard();
  const WrapCom = theme?.nodeContentRenderer || Fragment;

  return (
    <WrapCom
      {...props}
      title={"项目阶段情况"}
      subTitle={"（单位：亿元）"}
      exact={<input />}
    ></WrapCom>
  );
};

export const TestChildC4 = () => {
  const theme = useTheme();
  const { breakpoint } = useBreakpointContext();
  const theme1 = useContext(ThemeContext);
  console.log(theme, theme1, "them");
  return <div>{breakpoint}TestChildC4</div>;
};

export const TestChildC5 = withTheme((props: PropsWithTheme) => {
  console.log(props.theme, "them");
  return <div>12TestChildC53</div>;
});
