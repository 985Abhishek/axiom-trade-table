import { useState, useMemo } from "react";

export type SortDirection = "asc" | "desc" | null;

export function useSort<T>(
  items: T[],
  key: keyof T
): [T[], (sortKey: keyof T) => void, keyof T | null, SortDirection] {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [direction, setDirection] = useState<SortDirection>(null);

  const sortedItems = useMemo(() => {
    if (!sortKey || !direction) return items;

    return [...items].sort((a, b) => {
      const aVal = a[sortKey] as unknown as number;
      const bVal = b[sortKey] as unknown as number;

      if (aVal === bVal) return 0;

      return direction === "asc" ? aVal - bVal : bVal - aVal;
    });
  }, [items, sortKey, direction]);

  const toggleSort = (key: keyof T) => {
    if (sortKey !== key) {
      setSortKey(key);
      setDirection("asc");
    } else {
      setDirection(direction === "asc" ? "desc" : "asc");
    }
  };

  return [sortedItems, toggleSort, sortKey, direction] as const;
}
