import { cn } from "@/lib/utils";
import "./skeleton.less";
import { FC, PropsWithChildren } from "react";
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("Skeleton", "animate-pulse", className)} {...props} />
  );
}

const SkeletonRoundFull = () => {
  return <Skeleton className="rounded-full" />;
};

const SkeletonKit: FC<
  PropsWithChildren<{ loading?: boolean; isEmpty?: boolean }>
> = ({ children, loading = true, isEmpty = false }) => {
  if (!loading) {
    if (isEmpty) {
      return (
        <div className="SkeletonKitFlexWrap">
          <span className="SkeletonKitEmptySpan">暂无数据</span>
        </div>
      );
    }
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
