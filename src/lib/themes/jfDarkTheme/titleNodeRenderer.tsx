import React from "react";
import "./titleNodeRenderer.less";
import { cn, useDashboard } from "@/lib";
export const TitleNodeRenderer = (props: any) => {
  const { matchBreak } = useDashboard();

  return (
    <div className={cn("titleNodeRenderer", matchBreak)}>titleNodeRenderer</div>
  );
};
