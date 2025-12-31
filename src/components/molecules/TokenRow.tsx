import { Token } from "@/types/token";
import { memo } from "react";
import { Price } from "../atoms/Price";
// import { Price } from "@/components/atoms/Price";

interface Props {
  token: Token;
}

const TokenRow = ({ token }: Props) => {
  return (
    <tr className="hover:bg-muted transition-colors">
      <td>{token.name}</td>
      <td>
        <Price value={token.price} />
      </td>
      <td>{token.change24h}%</td>
      <td>${token.liquidity.toLocaleString()}</td>
      <td>{token.holders}</td>
    </tr>
  );
};

export default memo(TokenRow);
