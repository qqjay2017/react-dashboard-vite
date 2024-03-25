import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import hexRgb from "hex-rgb";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground ",
        secondary: "border-transparent bg-secondary text-secondary-foreground ",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * hex值
   */
  color?: string;
}

function Badge({
  className,
  variant,
  color = "#F4A52E",
  ...props
}: BadgeProps) {
  const backgroundColorMemo = React.useMemo(() => {
    if (!color) {
      return "";
    }
    try {
      return `${hexRgb(color, {
        alpha: 0.4,
        format: "css",
      })}`;
    } catch (error) {
      return "";
    }
  }, [color]);

  return (
    <div
      className={cn(
        // badgeVariants({ variant }),
        "px-[4px] h-[18px] inline-flex  items-center justify-center text-[12px]",
        className
      )}
      {...props}
      style={{
        color: color,
        backgroundColor: backgroundColorMemo,
      }}
    />
  );
}

export { Badge, badgeVariants };
