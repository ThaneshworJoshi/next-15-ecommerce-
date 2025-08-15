"use client";

import { ProductCategoryTabs } from "@/components";
import { BestSellerSkeleton } from "../skeleton";
import { useBestSellerData } from "@/hooks/react-query/useBestSellerData";

export const BestSeller = () => {
  const { data, isLoading, error } = useBestSellerData();
  if (isLoading) return <BestSellerSkeleton />;
  if (error) return <p className="text-center text-red-500 my-10">Failed to load data.</p>;
  if (!data) return <p className="text-center">No data available.</p>;

  return (
    <div className="my-10">
      <ProductCategoryTabs
        categories={data.categories ?? []}
        products={data.productsData ?? []}
      />
    </div>
  );
}

export default BestSeller;
