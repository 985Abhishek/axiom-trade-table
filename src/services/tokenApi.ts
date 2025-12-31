import { Token } from "@/types/token";

export const fetchTokens = async (): Promise<Token[]> => {
  await new Promise((r) => setTimeout(r, 800));

  return [
    {
      id: "1",
      name: "Axiom",
      symbol: "AXM",
      price: 0.023,
      priceChange24h: 12.4,
      liquidity: 230000,
      volume24h: 780000,
      holders: 1240,
      status: "new",
    },
  ];
};
