import "./titleNodeRenderer.less";

import { ResourceComponent, cn } from "@/lib";

export const TitleNodeRenderer = ({
  children,
  breakpoint,
}: ResourceComponent) => {

  return <div className={cn("titleNodeRenderer", breakpoint)} >{children}</div>;
};
