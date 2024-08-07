import "./nodeContentRenderer.less";
import { ResourceComponent, cn } from "@/lib";

export const NodeContentRenderer = (
  props: ResourceComponent<{
    title?: string | React.ReactNode;
    subTitle?: string | React.ReactNode;
    exact?: string | React.ReactNode;
  }>
) => {
  const { title, subTitle, exact, children } = props;

  return (
    <div className={cn("nodeContentRenderer")}>
      <div className={cn("nodeContentRendererTitle")}>
        <div className={cn("nodeContentRendererTitleBg")}></div>
        {title ? (
          <div
            className={cn("nrtTitle")}
            style={{
              color: "#333333",
            }}
          >
            {title}
          </div>
        ) : null}
        {subTitle ? (
          <div
            className={cn("nrtSubTitle")}
            style={{
              color: "#333333",
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
