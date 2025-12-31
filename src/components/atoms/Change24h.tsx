import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  value: number;
}

export const Change24h = ({ value }: Props) => {
  const [prev, setPrev] = useState(value);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (value > prev) setFlash("up");
    else if (value < prev) setFlash("down");
    setPrev(value);

    if (value !== prev) {
      const timer = setTimeout(() => setFlash(null), 500);
      return () => clearTimeout(timer);
    }
  }, [value, prev]);

  return (
    <span
      className={clsx(
        value >= 0 ? "text-green-500" : "text-red-500",
        flash === "up" && "bg-green-100",
        flash === "down" && "bg-red-100",
        "px-1 rounded transition-colors duration-300"
      )}
    >
      {value?.toFixed(2) ?? "0.00"}%
    </span>
  );
};
