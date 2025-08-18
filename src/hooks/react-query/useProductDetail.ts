import { useQuery } from "@tanstack/react-query";

export async function fetchProductDetails(productName: string) {
    const res = await fetch(`/api/products/${encodeURIComponent(productName)}`);
    if (!res.ok) throw new Error('Failed to fetch product data');

    const data = await res.json();

    return data;
}

export const useProductDetail = (productName: string) => {
    return useQuery({
        queryKey: ['productDetail', productName],
        queryFn: () => fetchProductDetails(productName),
        enabled: !!productName,
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}
