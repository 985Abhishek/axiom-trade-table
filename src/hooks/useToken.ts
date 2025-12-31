import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/services/tokenApi";

export const useTokens = () =>
  useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    staleTime: 5000,
  });
