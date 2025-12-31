import { memo, useState } from "react";
import {TokenRowSkeleton} from "@/components/molecules/TokenRowSkeleton";
import { Token } from "@/types/token";
import { useSort } from "@/hooks/useSort";
import { Tooltip } from "@/components/atoms/Tooltip";
import { TokenRowPopover } from "@/components/molecules/TokenRowPopover";
import { TokenModal } from "@/components/molecules/TokenModal";
import clsx from "clsx";
import { useTokenPriceUpdates } from "@/hooks/useTokenPriceUpdates";
import { Price } from "../atoms/Price";
import { Change24h } from "../atoms/Change24h";

interface Props {
  tokens?: Token[];
  isLoading?: boolean;
}

export const TokenTable = memo(({ tokens = [], isLoading = false }: Props) => {
  const liveTokens = useTokenPriceUpdates({ tokens });
const [sortedTokens, toggleSort, sortKey, direction] = useSort(liveTokens, "price");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const handleViewDetails = (token: Token) => {
    setSelectedToken(token);
    setModalOpen(true);
  };

  const renderSortArrow = (key: keyof Token) => {
    if (sortKey !== key) return null;
    return direction === "asc" ? "↑" : "↓";
  };

  return (
    <>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-muted-foreground cursor-pointer">
            <SortableTh onClick={() => toggleSort("name")} arrow={renderSortArrow("name")}>
              Name
            </SortableTh>
            <SortableTh onClick={() => toggleSort("price")} arrow={renderSortArrow("price")}>
              Price
            </SortableTh>
            <SortableTh onClick={() => toggleSort("change24h")} arrow={renderSortArrow("change24h")}>
              24h
            </SortableTh>
            <SortableTh onClick={() => toggleSort("liquidity")} arrow={renderSortArrow("liquidity")}>
              Liquidity
            </SortableTh>
            <th>Holders</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => <TokenRowSkeleton key={i} />)
            : sortedTokens.map((token) => (
                <tr key={token.id}>
                  <td>{token.name}</td>
                  <td>
                    <Tooltip content={`Current price: $${token.price.toFixed(4)}`}>
                      <span>${token.price.toFixed(4)}</span>
                    </Tooltip>
                  </td>
                 <td>
  <Tooltip content={`Current price: $${token.price?.toFixed(4) ?? "0.0000"}`}>
    <Price value={token.price} />
  </Tooltip>
</td>
<td>
  <Tooltip content={`${token.change24h?.toFixed(2) ?? "0.00"}% 24h`}>
    <Change24h value={token.change24h} />
  </Tooltip>
</td>

                  <td>${token.liquidity.toLocaleString()}</td>
                  <td>{token.holders.toLocaleString()}</td>
                  <td>
                    <TokenRowPopover
                      content={
                        <div className="flex flex-col gap-2">
                          <button
                            className="text-blue-600 hover:underline"
                            onClick={() => handleViewDetails(token)}
                          >
                            View Details
                          </button>
                          <button className="text-red-600 hover:underline">
                            Remove
                          </button>
                        </div>
                      }
                    >
                      <button className="px-2 py-1 bg-gray-200 rounded">•••</button>
                    </TokenRowPopover>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      {selectedToken && (
       <TokenModal
  open={modalOpen}
  onOpenChange={setModalOpen}
  title="Token Details"
>
  <p>Price: ${selectedToken.price?.toFixed(4) ?? "0.0000"}</p>
</TokenModal>
      )}
    </>
  );
});

TokenTable.displayName = "TokenTable";

// Sortable Table Header
const SortableTh = ({
  children,
  arrow,
  onClick,
}: {
  children: React.ReactNode;
  arrow?: string | null;
  onClick: () => void;
}) => (
  <th
    onClick={onClick}
    className="py-3 select-none text-left"
  >
    <div className="flex items-center gap-1">
      {children}
      {arrow && <span className="text-sm">{arrow}</span>}
    </div>
  </th>
);
