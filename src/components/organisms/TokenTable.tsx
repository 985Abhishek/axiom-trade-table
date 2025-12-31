import TokenRow from "@/components/molecules/TokenRow";
import { Token } from "@/types/token";

interface Props {
  tokens: Token[];
}

export const TokenTable = ({ tokens }: Props) => (
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
      {tokens.map(token => (
        <TokenRow key={token.id} token={token} />
      ))}
    </tbody>
  </table>
);
