import React from "react";
import styles from "./nodeContentRenderer.module.less";
import { INodeContentRenderer, cn } from "@/lib";
export const nodeContentRenderer: INodeContentRenderer<{
  title?: string;
  subTitle?: string;
  exact?: React.ReactNode;
}> = (props) => {
  const { title, subTitle, exact } = props;

  return (
    <div className={cn("nodeContentRenderer", styles.nodeContentRenderer)}>
      <div
        className={cn(
          "nodeContentRendererTitle",
          styles.nodeContentRendererTitle
        )}
      >
        <div>{title}</div>
        <div>{subTitle}</div>
        {exact ? <div>{exact}</div> : null}
      </div>
      <div
        className={cn(
          "nodeContentRendererContent",
          styles.nodeContentRendererContent
        )}
      ></div>
    </div>
  );
};
