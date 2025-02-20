"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard, ProductCardProps } from "../shared";
import { Button } from "../ui/button";
import { ProductCategoryTabsProps } from "./ProductCategoryTabsProps.type";

export const ProductCategoryTabs: React.FC<ProductCategoryTabsProps> = ({ categories, products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter products based on the selected category
  const filteredProducts: ProductCardProps[] =
    selectedCategory === "All"
      ? products.slice(0, 8)
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="container mx-auto my-8">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold mb-6">BEST SELLER</h2>

      {/* Category Tabs */}
      <Tabs defaultValue="All" onValueChange={(value) => setSelectedCategory(value)}>
        <TabsList className="flex justify-center space-x-4 sm:space-x-6 md:space-x-10 mb-6 bg-transparent">
          {categories?.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="p-0 text-lg font-medium rounded-none text-[#262626] 
                         data-[state=active]:text-blue-500 
                         data-[state=active]:border-b-2 
                         data-[state=active]:border-blue-500"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Product Grid for Each Tab */}
        <TabsContent value={selectedCategory}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center place-items-center">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <Button variant="link" className="font-semibold underline">LOAD MORE</Button>
      </div>
    </section>
  );
};

export default ProductCategoryTabs;
