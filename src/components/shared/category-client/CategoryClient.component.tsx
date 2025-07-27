"use client";

import React, { useState, useCallback, useMemo } from "react";
import { MediaBreaker } from "@/components";
import Sidebar from "@/components/shared/sidebar/SideBar.component";
import ProductListClient from "@/components/shared/product-list-client";
import { FilterState } from "@/components/shared/sidebar/SideBar.type";

interface Product {
  id: number;
  title: string;
  media: {
    imageUrl: string;
    altText: string;
  };
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  category: string;
  productLink: string;
  description: string;
}

interface CategoryClientProps {
  products: Product[];
  category: string;
  totalProducts: number;
  mediaBreaker: any;
  sidebarData: {
    hotdeals: any[];
    categories: any[];
    brands: any[];
    colors: any[];
  };
  sidebarConfig?: {
    showCategories?: boolean;
    showColors?: boolean;
    showPriceRange?: boolean;
    showBrands?: boolean;
    showHotDeals?: boolean;
    defaultExpanded?: string[];
  };
}

export default function CategoryClient({ 
  products, 
  category, 
  totalProducts, 
  mediaBreaker, 
  sidebarData,
  sidebarConfig = {}
}: CategoryClientProps) {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    colors: [],
    brands: [],
    categories: ['Toys', 'Accessories'], // Sample data to match the image
    priceRange: [50, 1000], // Sample price range to match the image
  });

  const handleFiltersChange = useCallback((filters: FilterState) => {
    setActiveFilters(filters);
    console.log('Filters changed:', filters);
  }, []);

  // Memoize sidebar data to prevent unnecessary re-renders
  const memoizedSidebarData = useMemo(() => sidebarData, [sidebarData]);

  return (
    <div className="flex flex-row max-w-[1500px] mx-auto">
      {/* Sidebar for Filters */}
      <div className="hidden md:block basis-1/4 mr-5">
        <Sidebar
          hotDeals={memoizedSidebarData.hotdeals}
          categories={memoizedSidebarData.categories}
          brands={memoizedSidebarData.brands}
          colors={memoizedSidebarData.colors}
          onFiltersChange={handleFiltersChange}
          activeFilters={activeFilters}
          showCategories={sidebarConfig.showCategories}
          showColors={sidebarConfig.showColors}
          showPriceRange={sidebarConfig.showPriceRange}
          showBrands={sidebarConfig.showBrands}
          showHotDeals={sidebarConfig.showHotDeals}
          defaultExpanded={sidebarConfig.defaultExpanded}
        />
      </div>

      {/* Main Content */}
      <div className="basis-full md:basis-3/4">
        {mediaBreaker && (
          <MediaBreaker
            {...mediaBreaker}
            events={{ onClick: () => {} }}
          />
        )}
        
        <ProductListClient 
          products={products}
          category={category}
          totalProducts={totalProducts}
          onFiltersChange={handleFiltersChange}
        />
      </div>
    </div>
  );
} 