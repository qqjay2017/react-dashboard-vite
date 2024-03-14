import React from "react";
import { IDashboardItemChldBaseProps } from "./lib";

export const TestChildA = (props: IDashboardItemChldBaseProps) => {
  console.log(props, "TestChildA props");
  return <div>A</div>;
};

export const TestChildB = () => {
  return <div>B</div>;
};

export const TestChildC = () => {
  return <div>C</div>;
};
