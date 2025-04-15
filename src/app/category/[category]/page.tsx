"use client";

import React, { use, useEffect, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MediaBreaker, ProductCard, ProductCardProps, ProductListHeader } from "@/components";
import Sidebar from "@/components/shared/sidebar/SideBar.component";

interface PageProps {
    params: Promise<{ category: string }>;
}

export default function ProductListingPage({ params }: PageProps) {
    
    const { category } = use(params);

    const totalProducts = 13; // Example
    const handleSortChange = (sort: string) => {
        console.log("Sort By:", sort);
    };
    const handleItemsPerPageChange = (items: number) => {
        console.log("Show:", items);
    };


    // State for products and filters
    // const [products, setProducts] = useState<ProductCardProps[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[]>([]);
    // const [filter, setFilter] = useState<string>("all");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [sidebarData, setSidebarData] = useState<any>(null);
    
    useEffect(() => {
        async function fetchProductData() {
            try {
                const response = await fetch(`/api/category?category=${category}`);
                const result = await response.json();

                // setProducts(result.productsData || []);
                setFilteredProducts(result.productsData || []);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        if (category) {
            fetchProductData();
        }
    }, [category]);

    useEffect(() => {
        async function fetchSidebarData() {
          try {
            const response = await fetch("/api/sidebar");
            const data = await response.json();
            console.log(data, 'data')
            setSidebarData(data);
          } catch (error) {
            console.error("Failed to fetch sidebar data:", error);
          }
        }
        fetchSidebarData();
    }, []);

    return (
        <div className="mx-auto">
            {/* Breadcrumb Navigation */}
            <div className="py-3 flex justify-center items-center bg-gray-50 mb-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-primary text-lg">
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-gray-700 text-lg capitalize">
                                {category}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
           
            <div className="flex flex-row max-w-[1500px] mx-auto">
                {/* Sidebar for Filters */}
                <div className="hidden md:block basis-1/4 mr-5">
                    {sidebarData && <Sidebar
                        hotDeals={sidebarData.hotdeals}
                        categories={sidebarData.categories}
                        brands={sidebarData.brands}
                        colors={sidebarData.colors}
                    />}
                </div>

                {/* Main Content */}
                <div className="basis-full md:basis-3/4">
                    <MediaBreaker
                        variant="slim"
                        media={{ src: "/assets/mb-shoe.png", alt: "Adidas Sneakers" }}
                        title="Adidas Men Running Sneakers"
                        description="Performance and design. Taken right to the edge."
                        events={{ onClick: () => {} }}
                    />
                    <div className="my-4">
                        <ProductListHeader
                            totalItems={totalProducts}
                            onSortChange={handleSortChange}
                            onItemsPerPageChange={handleItemsPerPageChange}
                        />
                    </div>
                    {/* Product List */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-1">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="mx-auto mb-4 border-spacing-1">
                                    <ProductCard {...product} category={category} variant="horizontal" />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No products found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
