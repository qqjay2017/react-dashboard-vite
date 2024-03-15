import "./titleNodeRenderer.less";
import { TitleNodeRendererType } from "../interface";
import { cn } from "@/lib";

export const TitleNodeRenderer: TitleNodeRendererType = ({
  children,
  matchBreak,
}) => {
  return <div className={cn("titleNodeRenderer", matchBreak)}>{children}</div>;
};
