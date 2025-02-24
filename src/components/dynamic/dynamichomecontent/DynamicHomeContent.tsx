"use client";

import { useEffect, useState } from "react";
import { FeaturedProductCard, ProductCategoryTabs, MiniProductCardRow, FeaturedProductCardProps } from "@/components";

export const DynamicHomeContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchHomepageData() {
      try {
        const response = await fetch("/api/homepage");
        const result = await response.json();
        setData(result);
      } catch {
        setError(true);
      }
    }

    fetchHomepageData();
  }, []);

  if (error) return <p className="text-center text-red-500">Failed to load data.</p>;
  if (!data) return <p className="text-center">Loading products...</p>;

  return (
    <>
      {/* Dynamic Data: Featured Products */}
      <div className="relative flex justify-center flex-wrap mt-0 md:-mt-20 z-20">
        {data.featuredProducts.map((product: FeaturedProductCardProps, index: number) => (
          <FeaturedProductCard key={index} {...product} />
        ))}
      </div>

      <div className="h-10"></div>

      {/* Dynamic Data: Product Categories */}
      <ProductCategoryTabs categories={data.categories} products={data.productsData} />

      <div className="h-10"></div>

      {/* Dynamic Data: Mini Product Card Row */}
      <MiniProductCardRow {...data.miniProductCardRowData} />
    </>
  );
}

export default DynamicHomeContent;
