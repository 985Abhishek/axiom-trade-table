"use client";

import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface PriceProps {
  value: number;
  currency?: string;
  precision?: number;
}

export const Price = memo(
  ({ value, currency = "$", precision = 4 }: PriceProps) => {
    const previous = useRef<number | null>(null);
    const [direction, setDirection] = useState<"up" | "down" | null>(null);

    useEffect(() => {
      if (previous.current === null) {
        previous.current = value;
        return;
      }

      if (value > previous.current) setDirection("up");
      else if (value < previous.current) setDirection("down");

      const timeoutId = setTimeout(() => {
        setDirection(null);
      }, 600);

      previous.current = value;

      return () => clearTimeout(timeoutId);
    }, [value]);

    return (
      <span
        className={clsx(
          "tabular-nums transition-colors duration-300",
          direction === "up" && "text-green-500",
          direction === "down" && "text-red-500"
        )}
      >
        {currency}
        {value.toFixed(precision)}
      </span>
    );
  }
);

Price.displayName = "Price";
