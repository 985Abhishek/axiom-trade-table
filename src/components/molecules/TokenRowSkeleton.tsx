    import { Skeleton } from "@/components/atoms/Skeleton";

export const TokenRowSkeleton = () => {
  return (
    <tr className="animate-pulse">
      <td className="py-3">
        <Skeleton className="h-4 w-24" />
      </td>

      <td className="py-3">
        <Skeleton className="h-4 w-16" />
      </td>

      <td className="py-3">
        <Skeleton className="h-4 w-12" />
      </td>

      <td className="py-3">
        <Skeleton className="h-4 w-20" />
      </td>

      <td className="py-3">
        <Skeleton className="h-4 w-12" />
      </td>
    </tr>
  );
};
