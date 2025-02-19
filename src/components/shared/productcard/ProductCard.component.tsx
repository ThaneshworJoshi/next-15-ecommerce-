import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { ProductCardProps } from "./ProductCard.type";

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  media,
  price,
  originalPrice,
  discount,
  rating = 0,
  isHot = false,
  productLink,
}) => {
  return (
    <div className="w-[300px] border-2 border-neutral-background bg-neutral-background rounded-lg cursor-pointer">
      <Link href={productLink} passHref className="block">
        {/* HOT Badge */}
        {isHot && (
          <div className="absolute left-0 top-0 bg-primary-red text-white text-md px-2 py-1">
            HOT
          </div>
        )}

        {/* Product Image */}
        <Image
          src={media?.imageUrl || "/placeholder.png"}
          alt={media?.altText || "Product image"}
          width={300}
          height={272}
          className="rounded-lg object-cover"
        />

        {/* Product Details */}
        <div className="pt-4 flex flex-col justify-between h-full text-center bg-white z-20">
          {/* Title */}
          <h3 className="font-bold text-md">{title}</h3>

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
            <span className="text-primary font-bold text-md">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-gray-400 line-through ml-2 text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            {discount && (
              <span className="text-highlight font-bold ml-2 text-sm">{discount}% Off</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
