"use client";

import { useEffect, useState } from "react";
import { ProductCategoryTabs } from "@/components";
import { BestSellerSkeleton } from "../skeleton";

export const BestSeller = () => {
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
  if (!data) return <BestSellerSkeleton />;

  return (
    <>
      <div className="my-10">
        <ProductCategoryTabs categories={data.categories} products={data.productsData} /> 
      </div>
    </>
  );
}

export default BestSeller;
