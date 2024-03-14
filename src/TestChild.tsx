import React, { Fragment } from "react";
import { IDashboardItemChldBaseProps } from "./lib";

export const TestChildA = (props: IDashboardItemChldBaseProps) => {
  const { theme } = props;
  const WrapCom = Fragment;
  return <WrapCom {...props}>A</WrapCom>;
};

export const TestChildB = (props: IDashboardItemChldBaseProps) => {
  const { theme } = props;
  const WrapCom = Fragment;
  return <WrapCom {...props}>A</WrapCom>;
};

export const TestChildC = (props: IDashboardItemChldBaseProps) => {
  const { theme } = props;
  const WrapCom = theme?.nodeContentRenderer || Fragment;
  return (
    <WrapCom
      {...props}
      title={"项目阶段情况"}
      subTitle={"（单位：亿元）"}
      exact={<input />}
    >
      A
    </WrapCom>
  );
};
