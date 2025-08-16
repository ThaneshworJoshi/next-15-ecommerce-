import { fetchCart } from "@/lib/cartApi";
import { useQuery } from "@tanstack/react-query";

// Fetch cart items
export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
}
