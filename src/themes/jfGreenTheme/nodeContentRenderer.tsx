import React from "react";
import "./nodeContentRenderer.less";
import { ResourceComponent, cn } from "@/lib";

export const NodeContentRenderer = (
  props: ResourceComponent<{
    title?: string | React.ReactNode;
    subTitle?: string | React.ReactNode;
    exact?: string | React.ReactNode;
    style?: React.CSSProperties;
  }>
) => {
  const { title, subTitle, exact, children, style } = props;

  return (
    <div className={cn("nodeContentRenderer")} style={style}>
      <div className={cn("nodeContentRendererTitle")}>
        <div className={cn("nodeContentRendererTitleBg")}></div>
        {title ? (
          <div
            className={cn("nrtTitle")}
            style={{
              color: "#C3D4E5",
            }}
          >
            {title}
          </div>
        ) : null}
        {subTitle ? (
          <div
            className={cn("nrtSubTitle")}
            style={{
              color: "#C3D4E5",
            }}
          >
            {subTitle}
          </div>
        ) : null}
        {exact ? <div className={cn("nrtExact")}>{exact}</div> : null}
      </div>
      <div className={cn("nodeContentRendererContent")}>{children}</div>
    </div>
  );
};
