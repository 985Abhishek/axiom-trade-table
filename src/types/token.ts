export type TokenStatus = "new" | "final" | "migrated";

export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  priceChange24h: number;
  liquidity: number;
  volume24h: number;
  holders: number;
  status: TokenStatus;
}
