import "./titleNodeRenderer.less";

import { ResourceComponent, cn } from "@/lib";

export const TitleNodeRenderer = ({
  children,
  matchBreak,
}: ResourceComponent) => {
  return <div className={cn("titleNodeRenderer", matchBreak)}>{children}</div>;
};
