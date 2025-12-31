import { useEffect, useState } from "react";
import { Token } from "@/types/token";

interface UseTokenPriceUpdatesProps {
  tokens: Token[];
  interval?: number; // ms
}

export const useTokenPriceUpdates = ({ tokens, interval = 3000 }: UseTokenPriceUpdatesProps) => {
  const [updatedTokens, setUpdatedTokens] = useState<Token[]>(tokens);

  useEffect(() => {
    setUpdatedTokens(tokens); // initialize
  }, [tokens]);

  useEffect(() => {
    const timer = setInterval(() => {
      setUpdatedTokens((prevTokens) =>
        prevTokens.map((token) => {
          // Mock price change ±5%
          const changeFactor = 1 + (Math.random() * 0.1 - 0.05);
          const newPrice = +(token.price * changeFactor).toFixed(4);
          const newChange24h = +((newPrice - token.price) / token.price * 100).toFixed(2);
          return { ...token, price: newPrice, change24h: newChange24h };
        })
      );
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return updatedTokens;
};
