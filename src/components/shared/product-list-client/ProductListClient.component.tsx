"use client";

import React, { useState, useMemo, useCallback } from "react";
import { ProductCard, ProductListHeader } from "@/components";
import Pagination from "@/components/shared/pagination";
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

interface ProductListClientProps {
  products: Product[];
  category: string;
  totalProducts: number;
  onFiltersChange?: (filters: FilterState) => void;
}

export default function ProductListClient({ products, category, totalProducts, onFiltersChange }: ProductListClientProps) {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  
  // Filter state
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    colors: [],
    brands: [],
    categories: [],
    priceRange: [0, 1000],
  });

  // Apply filters to products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Price filter
      if (product.price < activeFilters.priceRange[0] || product.price > activeFilters.priceRange[1]) {
        return false;
      }
      
      // Category filter
      if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(product.category)) {
        return false;
      }
      
      // Brand filter (assuming brand is in product data)
      if (activeFilters.brands.length > 0) {
        // TODO: Add brand field to product data
        // if (!activeFilters.brands.includes(product.brand)) {
        //   return false;
        // }
      }
      
      // Color filter (assuming color is in product data)
      if (activeFilters.colors.length > 0) {
        // TODO: Add color field to product data
        // if (!activeFilters.colors.includes(product.color)) {
        //   return false;
        // }
      }
      
      return true;
    });
  }, [products, activeFilters]);

  // Calculate pagination for filtered products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  // Get current products for the page
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handleSortChange = (sort: string) => {
    console.log("Sort By:", sort);
    // TODO: Implement sorting logic
    setCurrentPage(1); // Reset to first page when sorting
  };
  
  const handleItemsPerPageChange = (items: number) => {
    console.log("Show:", items);
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFiltersChange = useCallback((filters: FilterState) => {
    setActiveFilters(filters);
    setCurrentPage(1); // Reset to first page when filtering
    onFiltersChange?.(filters);
  }, [onFiltersChange]);

  return (
    <>
      <div className="my-4">
        <ProductListHeader
          totalItems={filteredProducts.length}
          onSortChange={handleSortChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
      
      {/* Product List */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-1">
        {currentProducts && currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product.id} className="mb-4 border-spacing-1">
              <ProductCard {...product} category={category} variant="horizontal" />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          totalItems={filteredProducts.length}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}
    </>
  );
} 