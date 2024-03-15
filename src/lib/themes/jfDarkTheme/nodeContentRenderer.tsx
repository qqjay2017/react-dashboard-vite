import React from "react";
import "./nodeContentRenderer.less";
import { cn } from "@/lib";
import { INodeContentRenderer } from "../interface";
export const nodeContentRenderer: INodeContentRenderer<{
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  exact?: string | React.ReactNode;
}> = (props) => {
  const { title, subTitle, exact, children } = props;

  return (
    <div className={cn("nodeContentRenderer")}>
      <div className={cn("nodeContentRendererTitle")}>
        <div className={cn("nodeContentRendererTitleBg")}></div>
        {title ? <div className={cn("nrtTitle")}>{title}</div> : null}
        {subTitle ? <div className={cn("nrtSubTitle")}>{subTitle}</div> : null}
        {exact ? <div className={cn("nrtExact")}>{exact}</div> : null}
      </div>
      <div className={cn("nodeContentRendererContent")}>{children}</div>
    </div>
  );
};
