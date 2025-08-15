import { useQuery } from '@tanstack/react-query';

const fetchProductsByCategory = async (category: string) => {
  const response = await fetch(`/api/products?category=${category}`);
  if (!response.ok) throw new Error('Failed to fetch products');

  const data = await response.json()
  return data
}

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['productsByCategory', category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category,
  });
};
