import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MiniProductCardProps } from "./MiniProductCard.type";
import { MdStar } from "react-icons/md";

export const MiniProductCard: React.FC<MiniProductCardProps> = ({
  title,
  rating,
  originalPrice,
  price,
  productLink,
  media,
}) => {
  return (
    <Link href={productLink} passHref>
      <div
        className="flex bg-white p-3 md:p-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
      >
        {/* Product Image */}
        <div className="w-20 h-20 md:w-36 md:h-36 relative mr-4 md:mr-6 aspect-square">
          <Image
            src={media.imageSrc}
            alt={media.alt || title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-left">
          {/* Product Title */}
          <h3 className="font-light text-base md:text-xl">{title}</h3>

          {/* Star Rating */}
          <div className="flex justify-start my-3">
            {[...Array(5)].map((_, index) => (
              <MdStar
                key={index}
                className={`text-sm md:text-base ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Price Section */}
          <div className="py-1">
            <span className="text-primary-red font-bold text-base md:text-lg">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-gray-400 line-through ml-2 text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MiniProductCard;
