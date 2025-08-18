export async function getProductByName(productName: string) {
  const res = await fetch(`/api/products/${encodeURIComponent(productName)}`);
  if (!res.ok) throw new Error('Failed to fetch product data');
  
  return await res.json();
} 