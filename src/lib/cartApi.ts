export async function fetchCart() {
  const res = await fetch("/api/cart", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch cart data");
  return res.json();
}

export async function updateCartItem(id: string, quantity: number) {
  return fetch(`/api/cart/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });
}

export async function removeCartItem(id: string) {
  return fetch(`/api/cart/${id}`, { method: "DELETE" });
} 