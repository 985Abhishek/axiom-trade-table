// src/hooks/useTokens.ts
import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/services/tokenApi";
import { Token } from "@/types/token";

export const useTokens = () => {
  return useQuery<Token[], Error>({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    staleTime: 5_000,          // prevents unnecessary refetches
    refetchOnWindowFocus: false,
    retry: 1,                  // fail fast for UI error boundary
  });
};
