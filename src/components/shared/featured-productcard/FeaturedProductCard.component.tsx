import React from "react";
import Link from "next/link";
import { FeaturedProductCardProps } from "./FeaturedProductCard.type";

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
  title,
  imageUrl,
  price,
  originalPrice,
  discount,
  productLink,
}) => {
  return (
    <Link href={productLink} passHref>
      <div
        className="px-5 py-3 md:px-10 md:py-6 border rounded-lg shadow-md max-w-[434px] bg-center bg-cover aspect-[1.29/1] bg-gray-100 cursor-pointer transition-transform hover:scale-[102%]"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        {/* Product Details */}
        <div className="mt-4 flex flex-col justify-between h-full text-center">
          {/* Title & Price Row */}
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-lg sm:text-xl line-clamp-2 overflow-hidden text-ellipsis mr-20 md:mr-[120px] text-left leading-[1.5]">
              {title}
            </h3>
            <span className="text-primary font-bold text-xl">${price.toFixed(2)}</span>
          </div>

          {/* Pricing & Discount */}
          <div className="mt-2">
            {originalPrice && (
              <span className="text-gray-400 line-through ml-2">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            {discount && <span className="text-highlight font-bold ml-2">{discount}% Off</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProductCard;
