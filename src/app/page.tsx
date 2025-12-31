"use client";

import { useState, useMemo } from "react";
import { useTokens } from "@/hooks/useTokens";
import { TokenTable } from "@/components/organisms/TokenTable";
import { TokenTabs } from "@/components/organisms/TokenTabs";

export default function HomePage() {
  const { data, isLoading, error } = useTokens();
  const [status, setStatus] = useState<"new" | "final" | "migrated">("new");

  const filteredTokens = useMemo(() => {
    return data?.filter((t) => t.status === status) ?? [];
  }, [data, status]);

  if (error) return <div>Error loading tokens</div>;

  return (
    <div className="p-4">
      <TokenTabs value={status} onChange={setStatus} />
      <TokenTable tokens={filteredTokens} isLoading={isLoading} />
    </div>
  );
}
