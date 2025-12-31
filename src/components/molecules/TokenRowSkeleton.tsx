    import { Skeleton } from "@/components/atoms/Skeleton";

export const TokenRowSkeleton = () => {
  return (
    <div className="animate-pulse flex space-x-4 py-2">
  <div className="h-4 bg-gray-300 rounded w-24"></div>
  <div className="h-4 bg-gray-300 rounded w-16"></div>
  <div className="h-4 bg-gray-300 rounded w-12"></div>
  <div className="h-4 bg-gray-300 rounded w-20"></div>
  <div className="h-4 bg-gray-300 rounded w-16"></div>
  <div className="h-4 bg-gray-300 rounded w-8"></div>
</div>
  );
};
