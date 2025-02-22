import React from "react";
import Image from "next/image";
import { ContentCardProps } from "./ContentCard.type";

import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

// Define an icon map to match API strings
const iconMap: Record<string, React.ElementType> = {
  FaShippingFast: FaShippingFast,
  RiRefund2Line: RiRefund2Line,
  MdOutlineSupportAgent: MdOutlineSupportAgent,
};

export const ContentCard: React.FC<ContentCardProps> = ({
  variant="vertical",
  title,
  description,
  icon,
  media,
  date,
  showBorder = false,
}) => {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div
      className={`flex ${
        variant === "horizontal" ? "flex-row items-center space-x-4" : "flex-col items-center text-center"
      } 
      bg-white p-6 rounded-lg
      ${showBorder ? "border border-gray-300" : ""}`}
    >
      {/* Vertical Variant (Uses Icon) */}
      {variant === "vertical" && IconComponent && (
        <IconComponent className="text-red-400 w-20 h-20 mb-8" />
      )}

      {/* Horizontal Variant (Uses Image) */}
      {variant === "horizontal" && media?.imageSrc && (
        <div className="min-w-28 h-20 relative mr-0 sm:mr-4 md:mr-9">
          <Image
            src={media?.imageSrc}
            alt={media?.alt || title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      )}

      {/* Text Content */}
      <div className={`${variant === "horizontal" ? "text-left" : "max-w-48 text-center"}`}>
        {date && <p className="text-gray-400 text-sm">{date}</p>}
        <h3 className={`font-semibold ${variant === "horizontal" ? "text-xl mb-0" : "mb-4 text-2xl"}`}>
          {title}
        </h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
