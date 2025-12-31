import TokenRow from "@/components/molecules/TokenRow";
// import { TokenRowSkeleton } from "@/components/molecules/TokenRowSkeleton";
import { Token } from "@/types/token";
import { TokenRowSkeleton } from "../molecules/TokenRowSkeleton";

interface Props {
  tokens?: Token[];
  isLoading?: boolean;
}

export const TokenTable = ({ tokens = [], isLoading = false }: Props) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="text-muted-foreground">
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Liquidity</th>
          <th>Holders</th>
        </tr>
      </thead>
      <tbody>
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <TokenRowSkeleton key={i} />
            ))
          : tokens.map((token) => (
              <TokenRow key={token.id} token={token} />
            ))}
      </tbody>
    </table>
  );
};
