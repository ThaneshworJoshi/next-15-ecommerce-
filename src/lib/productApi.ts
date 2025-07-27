export async function getProductByName(productName: string) {
  if (!process.env.BACKEND_API_URL) {
    // Mock data fallback
    return {
      name: productName,
      media: {
        images: [
          '/assets/sneakers1.png',
          '/assets/sneakers2.png',
        ],
      },
      // /products/cat-bed-heated
      rating: 4,
      discountedPrice: 99.99,
      originalPrice: 129.99,
      discountPercentage: 23,
      availability: 'In Stock',
      category: 'shoes',
      colors: ['#000000', '#FFFFFF', '#FF0000'],
      sizes: ['S', 'M', 'L', 'XL'],
    };
  }
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/products/${encodeURIComponent(productName)}`);
  if (!res.ok) throw new Error('Failed to fetch product data');
  return res.json();
} 