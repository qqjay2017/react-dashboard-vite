import React from "react";
import styles from "./nodeContentRenderer.module.less";
import { INodeContentRenderer, cn } from "@/lib";
export const nodeContentRenderer: INodeContentRenderer<{
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  exact?: string | React.ReactNode;
}> = (props) => {
  const { title, subTitle, exact, children } = props;

  return (
    <div className={cn("nodeContentRenderer", styles.nodeContentRenderer)}>
      <div
        className={cn(
          "nodeContentRendererTitle",
          styles.nodeContentRendererTitle
        )}
      >
        {title ? (
          <div className={cn("nrtTitle", styles.nrtTitle)}>{title}</div>
        ) : null}
        {subTitle ? (
          <div className={cn("nrtSubTitle", styles.nrtSubTitle)}>
            {subTitle}
          </div>
        ) : null}
        {exact ? (
          <div className={cn("nrtExact", styles.nrtExact)}>{exact}</div>
        ) : null}
      </div>
      <div
        className={cn(
          "nodeContentRendererContent",
          styles.nodeContentRendererContent
        )}
      >
        {children}
      </div>
    </div>
  );
};
