// src/app/page.tsx
"use client";

import { useTokens } from "@/hooks/useTokens";
import { TokenTable } from "@/components/organisms/TokenTable";

export default function HomePage() {
  const { data, isLoading, error } = useTokens();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return <TokenTable tokens={data ?? []} />;
}
