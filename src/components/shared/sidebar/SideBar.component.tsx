"use client";

import { useState } from "react";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { SidebarItemProps, SidebarProps } from "./SideBar.type";

export const SidebarItem = ({ icon, text, link, count }: SidebarItemProps) => {
  return (
    <Link href={link} className="flex items-center justify-between hover:text-primary-light mb-5">
      {icon}
      <span>{text}</span>
      <span>{count}</span>
    </Link>
  );
};

const Sidebar = ({ hotDeals, brands, colors }: SidebarProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-full h-screen space-y-6 transition-all duration-300">

        {/* Hot Deals Section */}
        <div className="bg-neutral-background p-5">
          <h3 className="text-lg uppercase font-semibold mb-6">Hot Deals</h3>
          {hotDeals?.map((hotdeal) => (
            <SidebarItem key={hotdeal.id} text={hotdeal.name} link={`/${hotdeal.slug}`} count={hotdeal.dealCounts} />
          ))}
        </div>

        {/* Colors (ShadCN Radio Group) */}
        <div className="bg-neutral-background p-5">
          <h3 className="text-lg font-semibold uppercase mb-6">Colors</h3>
          <RadioGroup
            value={selectedColor}
            onValueChange={setSelectedColor} // ✅ Updates selected color
            className="flex flex-row space-x-3" // ✅ Horizontal alignment
          >
            {colors?.map((color) => (
              <div key={color.id} className="relative flex items-center justify-center">
                {/* Hidden Radio Input */}
                <RadioGroupItem value={color.name} id={`color-${color.id}`} className="hidden peer" />

                {/* Outer Black Ring - Appears When Selected */}
                <div
                  className={`absolute w-10 h-10 rounded-full transition-all duration-200 scale-0 peer-checked:scale-110 border-[3px] border-black`}
                ></div>

                {/* Color Circle with White Border */}
                <label
                  htmlFor={`color-${color.id}`}
                  className="w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all relative z-10"
                  style={{
                    backgroundColor: color.hex, // ✅ Fill with color
                    borderColor: "white", // ✅ Always white border
                  }}
                />
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Brands Section */}
        <div className="bg-neutral-background p-5">
          <h3 className="text-lg font-semibold uppercase mb-6">Brand</h3>
          {brands?.map((brand) => (
            <SidebarItem key={brand.id} text={brand.name} link={`/${brand.slug}`} count={brand.dealCounts} />
          ))}
        </div>

        {/* Load More Button */}
        <div>
          <Button className="w-full hover:bg-primary-light">Load More</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
