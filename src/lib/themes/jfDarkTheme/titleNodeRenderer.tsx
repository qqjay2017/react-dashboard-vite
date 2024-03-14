import React from "react";
import styles from "./titleNodeRenderer.module.less";
import { cn } from "@/lib";
export const titleNodeRenderer = () => {
  return (
    <div className={cn("titleNodeRenderer", styles.titleNodeRenderer)}>
      titleNodeRenderer
    </div>
  );
};
