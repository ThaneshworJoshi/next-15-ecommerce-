"use client";

import React, { use, useEffect, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MediaBreaker, ProductCard, ProductCardProps } from "@/components";

interface PageProps {
    params: Promise<{ category: string }>;
}

export default function ProductListingPage({ params }: PageProps) {
    const { category } = use(params); 

    // State for products and filters
    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[]>([]);
    const [filter, setFilter] = useState<string>("all");

    useEffect(() => {
        async function fetchProductData() {
            try {
                const response = await fetch(`/api/category?category=${category}`);
                const result = await response.json();

                setProducts(result.productsData || []);
                setFilteredProducts(result.productsData || []);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        if (category) {
            fetchProductData();
        }
    }, [category]);

    // Handle filter changes
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);

        if (selectedFilter === "all") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                product?.category?.toLowerCase().includes(selectedFilter.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

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
                    <h2 className="text-lg font-semibold mb-2">Filter Products</h2>
                    <select
                        className="w-full p-2 border rounded"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        <option value="all">All Products</option>
                        <option value="shoes">Shoes</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                    </select>
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

                    {/* Product List */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-1">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="mx-auto mb-4 border-spacing-1">
                                    <ProductCard {...product} variant="horizontal" />
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
