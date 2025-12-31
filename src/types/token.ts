// src/types/token.ts
export type TokenStatus = "new" | "final" | "migrated";

export interface Token {
  id: string;
  name: string;
  price: number;       // sortable
  change24h: number;   // sortable
  liquidity: number;   // sortable
  holders: number;
  status: TokenStatus;
}
