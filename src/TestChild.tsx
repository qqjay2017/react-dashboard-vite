import React, { Fragment, memo, useEffect } from "react";
import { IDashboardItemChldBaseProps, useDashboard } from "./lib";

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
  return <h1>123</h1>;
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
