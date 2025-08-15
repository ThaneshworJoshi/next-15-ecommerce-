import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CategoryClient from "@/components/shared/category-client";
import { getCategoryData, getSidebarData } from "@/lib/api";

interface PageProps {
    params: Promise<{ category: string }>;
}

export default async function ProductListingPage({ params }: PageProps) {
    const { category } = await params;
    
    // Fetch data using the same pattern as homepage
    const [categoryData, sidebarData] = await Promise.all([
        getCategoryData(category),
        getSidebarData()
    ]);

    if (!categoryData) {
        return <p className="text-center text-red-500">Error loading category data.</p>;
    }
    console.log(sidebarData, 'sidebardata')
    const totalProducts = categoryData.productsData?.length || 0;
    
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
           
            <CategoryClient 
                category={category}
                totalProducts={totalProducts}
                mediaBreaker={categoryData.mediaBreaker}
                sidebarData={sidebarData}
                sidebarConfig={{
                    showCategories: true,
                    showColors: true,
                    showPriceRange: true,
                    showBrands: true,
                    showHotDeals: true,
                    defaultExpanded: ['categories', 'colors', 'priceRange'] // Only expand these sections by default
                }}
            />
        </div>
    );
}
