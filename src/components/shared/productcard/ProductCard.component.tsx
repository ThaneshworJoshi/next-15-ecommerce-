"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineShoppingCart, MdStar } from "react-icons/md";
import { ProductCardProps } from "./ProductCard.type";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  media,
  price,
  originalPrice,
  discount,
  rating = 0,
  isHot = false,
  productLink,
  description,
  variant = "vertical",
  events,
}) => {
  return (
    <div
      className={`relative rounded-lg ${
        variant === "horizontal"
          ? "bg-white w-fit"
          : "border-neutral-background border-2 w-[300px] bg-neutral-background"
      }`}
    >
      <div
        className={`${
          variant === "horizontal"
            ? "flex flex-col md:flex-row max-w-[320px] md:max-w-full items-center"
            : "block"
        }`}
      >
        {/* HOT Badge */}
        {isHot && (
          <div
            className={`absolute left-0 top-0 bg-primary-red text-white px-2 py-1 ${
              variant === "horizontal" ? "left-6 top-3 text-sm px-1 py-0" : "text-md"
            }`}
          >
            HOT
          </div>
        )}

        {/* Product Image */}
        <div
          className={`relative ${
            variant === "horizontal" ? "aspect-[300/270]" : "w-full"
          } h-[200px] md:h-[250px]`}
        >
          <Image
            src={media?.imageUrl || "/placeholder.png"}
            alt={media?.altText || "Product image"}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div
          className={`${
            variant === "vertical"
              ? "pt-4 flex flex-col justify-between h-full text-center bg-white z-20"
              : "flex flex-col w-full items-center md:items-start p-3 md:p-0 bg-white z-20 md:mx-6"
          }`}
        >
          {/* Title */}
          <Link href={productLink} passHref className="hover:underline">
            <h3 className={`font-bold ${variant === "horizontal" ? "text-xl" : "text-md"}`}>
              {title}
            </h3>
          </Link>

          {variant === "vertical" && (
            <>
              {/* Star Rating */}
              <div className="flex justify-center py-1">
                {[...Array(5)].map((_, index) => (
                  <MdStar
                    key={index}
                    className={`text-xl ${
                      index < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Pricing & Discount */}
              <div className="px-10 py-1">
                <span className="text-primary font-bold text-md">
                  ${price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="text-gray-400 line-through ml-2 text-sm">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
                {discount && (
                  <span className="text-highlight font-bold ml-2 text-sm">
                    {discount}% Off
                  </span>
                )}
              </div>
            </>
          )}

          {/* Horizontal Variant Extras */}
          {variant === "horizontal" && (
            <>
              {/* Star Rating & Review */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <MdStar
                    key={index}
                    className={`text-md ${
                      index < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs ml-3 mr-3 text-neutral-muted">0 reviews</span>
                <Button
                  variant="link"
                  size="sm"
                  className="text-xs text-primary-light"
                >
                  Submit a review
                </Button>
              </div>

              {/* Horizontal Line Separator */}
              <span className="relative after:absolute after:left-0 after:w-1/2 after:h-[2px] after:bg-gray-100 after:bottom-0 after:content-['']"></span>

              {/* Description */}
              <p className="text-sm line-clamp-3">{description}</p>

              {/* Buttons - Add to Cart & Wishlist */}
              <div className="flex gap-3 mt-5">
                <Button
                  onClick={events?.onAddToCart}
                  size="lg"
                  className="text-primary bg-primary-10"
                >
                  <MdOutlineShoppingCart />
                  Add to cart
                </Button>
                <Button
                  onClick={events?.onAddToWishlist}
                  size="lg"
                  className="text-primary bg-primary-10"
                >
                  <Heart />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
