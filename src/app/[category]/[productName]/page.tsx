"use client";

import React, { use, useEffect, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { MdOutlineShoppingCart, MdStar } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Heart } from "lucide-react";

interface PageProps {
    params: Promise<{ category: string; productName: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
    const { category, productName } = use(params);

    const [product, setProduct] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (type: "increment" | "decrement") => {
        setQuantity((prev) =>
            type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1
        );
    };

    useEffect(() => {
        async function fetchProductData() {
            if (!productName) return;

            try {
                const response = await fetch(`/api/products/${encodeURIComponent(productName)}`);
                if (!response.ok) throw new Error("Failed to fetch product data");

                const result = await response.json();
                setProduct(result);

                if (result?.media?.images?.length > 0) {
                    setActiveImage(result.media.images[0]);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to fetch product details.");
            }
        }

        fetchProductData();
    }, [productName]);

    if (!product) {
        return <div>Loading....</div>;
    }

    return (
        <div className="mx-auto container">
            {/* Breadcrumb */}
            <div className="py-3 flex justify-center items-center bg-gray-50 mb-10">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-primary text-lg">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-primary text-lg capitalize">{category}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-gray-700 text-lg capitalize">{productName}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Product Detail Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-7">
                {/* Left Section - Image Gallery & Info */}
                <div className="lg:col-span-3 flex flex-col lg:flex-row gap-8">
                    {/* Image Gallery */}
                    <div className="flex-shrink-0">
                        {activeImage && (
                            <div className="rounded-lg overflow-hidden mb-8 lg:mb-36 h-[270px] w-full max-w-[370px] relative mx-auto lg:mx-0">
                                <Image src={activeImage} alt={product?.name} fill className="object-cover" />
                            </div>
                        )}

                        <div className="flex flex-wrap justify-center lg:justify-start mt-4 gap-4">
                            {product?.media?.images?.map((image: string, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(image)}
                                    className={`w-20 h-20 border-2 rounded-md overflow-hidden ${
                                        activeImage === image ? "border-primary" : "border-gray-300"
                                    }`}
                                >
                                    <Image src={image} alt={`Thumbnail ${index + 1}`} width={80} height={80} className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full mx-4 md:mx-0 flex flex-col justify-center">
                        <h1 className="text-2xl md:text-3xl font-medium mb-6">{product?.name}</h1>

                        <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, index) => (
                                <MdStar
                                    key={index}
                                    className={`text-md ${index < product?.rating ? "text-yellow-400" : "text-gray-300"}`}
                                />
                            ))}
                            <span className="text-base ml-3 mr-3 text-neutral-muted">0 reviews</span>
                            <Button variant="link" size="sm" className="text-base text-primary-light">Submit a review</Button>
                        </div>

                        <hr className="h-[2px] bg-neutral-background border-0 dark:bg-gray-700 mb-4" />

                        <div className="flex flex-wrap items-center gap-2 mb-7">
                            <span className="text-primary text-xl font-bold">${product.discountedPrice}</span>
                            <span className="line-through text-sm text-neutral-muted">${product.originalPrice}</span>
                            <span className="text-sm font-bold text-primary-red">{product.discountPercentage}% off</span>
                        </div>

                        <div className="grid grid-cols-[125px_auto] text-sm mb-4 gap-4">
                            <div>Availability:</div>
                            <div>{product.availability}</div>
                            <div>Category:</div>
                            <div>{product.category}</div>
                            <div>Free Shipping</div>
                        </div>

                        <hr className="h-[2px] bg-neutral-background border-0 dark:bg-gray-700 mb-4" />

                        {/* Color & Size */}
                        <div className="grid grid-cols-[125px_auto] items-center gap-y-6 mb-5">
                            <span className="text-base">Select Color:</span>
                            <div className="flex flex-wrap gap-4">
                                {product?.colors.map((color: string) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                                            selectedColor === color ? "outline outline-[2px]" : "outline-none"
                                        }`}
                                        style={{
                                            backgroundColor: "transparent",
                                            outlineColor: selectedColor === color ? `${color}33` : "transparent",
                                        }}
                                    >
                                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color }} />
                                    </button>
                                ))}
                            </div>

                            <span className="text-base">Size</span>
                            <div className="w-full max-w-[120px]">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder={product?.sizes[0]} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {product?.sizes?.map((size: string) => (
                                                <SelectItem key={size} value={size}>{size}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <hr className="h-[2px] bg-neutral-background border-0 dark:bg-gray-700 mb-4" />

                        <div className="flex flex-wrap md:justify-between items-center gap-4">
                            <div className="flex items-center gap-4 bg-neutral-background text-base rounded-sm">
                                <Button onClick={() => handleQuantityChange("decrement")} className="bg-transparent text-primary">-</Button>
                                {quantity}
                                <Button onClick={() => handleQuantityChange("increment")} className="bg-transparent text-primary">+</Button>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Button onClick={() => {}} size="lg" className="text-primary bg-primary-10 flex items-center gap-1">
                                    <MdOutlineShoppingCart />
                                    Add to cart
                                </Button>
                                <Button onClick={() => {}} size="lg" className="text-primary bg-primary-10">
                                    <Heart />
                                </Button>
                            </div>
                        </div>

                        <hr className="h-[2px] bg-neutral-background border-0 dark:bg-gray-700 mt-4" />
                    </div>
                </div>

                {/* Right Section - Additional Info */}
                <div className="">
                    <h2 className="text-sm font-bold text-neutral-400 mb-9">Best Seller</h2>
                </div>
            </div>
        </div>
    );
}
