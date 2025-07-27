"use client";

import React, { useState, useCallback, useMemo } from "react";
import { MediaBreaker } from "@/components";
import Sidebar from "@/components/shared/sidebar/SideBar.component";
import ProductListClient from "@/components/shared/product-list-client";
import { FilterState } from "@/components/shared/sidebar/SideBar.type";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

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

  const [a, setIsMobileFilterOpen] = useState(false);

  const handleFiltersChange = useCallback((filters: FilterState) => {
    setActiveFilters(filters);
    console.log('Filters changed:', filters);
  }, []);

  const toggleMobileFilter = useCallback(() => {
    setIsMobileFilterOpen(prev => !prev);
  }, []);

  const closeMobileFilter = useCallback(() => {
    setIsMobileFilterOpen(false);
  }, []);

  // Memoize sidebar data to prevent unnecessary re-renders
  const memoizedSidebarData = useMemo(() => sidebarData, [sidebarData]);

  return (
    <div className="flex flex-row max-w-[1500px] mx-auto">

      {/* Sidebar for Filters - Desktop */}
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
          onFilterClick={toggleMobileFilter}
          activeFiltersCount={activeFilters.colors.length + activeFilters.brands.length + activeFilters.categories.length}
        />
      </div>

      {/* Mobile Filter Popup */}
      {a && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileFilter}
          />
          
          {/* Filter Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={closeMobileFilter}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-full overflow-y-auto">
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
          </div>
        </div>
      )}
    </div>
  );
} 