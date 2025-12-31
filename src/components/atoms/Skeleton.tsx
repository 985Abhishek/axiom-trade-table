import clsx from "clsx";

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={clsx(
        "h-4 w-full rounded-md bg-muted animate-pulse",
        className
      )}
    />
  );
};
