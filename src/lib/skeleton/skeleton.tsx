import { cn } from "@/lib/utils";
import "./skeleton.less";
import { PropsWithChildren } from "react";
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "Skeleton",
        "animate-pulse rounded-md bg-primary/10",
        className
      )}
      {...props}
    />
  );
}

const SkeletonRoundFull = () => {
  return <Skeleton className="rounded-full" />;
};

const SkeletonKit = ({
  children,
  loading = false,
}: PropsWithChildren<{ loading?: boolean }>) => {
  if (!loading) {
    return children;
  }
  return (
    <div className="SkeletonKitFlexWrap">
      <div className="SkeletonKitWrap">
        <div className="SkeletonKit">
          <SkeletonRoundFull />
          <div className="SkeletonKitRight">
            <Skeleton className="SkeletonKitRightLine1" />
            <Skeleton className="SkeletonKitRightLine2" />
          </div>
        </div>
        <Skeleton className="SkeletonKitRightLine3" />
        <Skeleton className="SkeletonKitRightLine3" />
      </div>
    </div>
  );
};

export { Skeleton, SkeletonRoundFull, SkeletonKit };
