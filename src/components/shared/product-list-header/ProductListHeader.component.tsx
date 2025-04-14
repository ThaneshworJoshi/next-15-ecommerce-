"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductListHeaderProps } from "./ProductListHeader.type";
import { AlignJustify } from "lucide-react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";

export const ProductListHeader = ({ totalItems, onSortChange, onItemsPerPageChange }: ProductListHeaderProps) => {
  const [sortBy, setSortBy] = useState("popularity");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid"); // 🔹 Tracks Active View

  return (
    <div className="flex flex-wrap items-center bg-neutral-background justify-between px-5 py-4 border-b">
      {/* Left Section - Total Items & Filters */}
      <div className="flex gap-10 items-center">
        {/* 🏷️ Total Items */}
        <p className="text-gray-600">{totalItems} Items</p>
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-3">
          {/* 🔽 Sort By Dropdown */}
          <div className="flex items-center justify-between w-full max-w-[190px] space-x-4">
            <label className="text-gray-600 min-w-14">Sort by:</label>
            <Select
              value={sortBy}
              onValueChange={(value) => {
                setSortBy(value);
                onSortChange(value);
              }}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 🔽 Items Per Page Dropdown */}
          <div className="flex items-center justify-between space-x-4">
            <label className="text-gray-600 min-w-14">Show:</label>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => {
                setItemsPerPage(parseInt(value));
                onItemsPerPageChange(parseInt(value));
              }}
            >
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Items per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="24">24</SelectItem>
                <SelectItem value="48">48</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* 🔹 Right Section - Layout Toggle Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className={`border-none transition-all bg-neutral-background hover:text-primary-light ${
            viewMode === "grid" ? "text-primary-light" : "text-neutral-muted"
          }`}
          onClick={() => setViewMode("grid")}
        >
          <BsGrid3X3GapFill/>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className={`border-none transition-all bg-neutral-background hover:text-primary-light ${
            viewMode === "list" ? "text-primary-light" : "text-neutral-muted"
          }`}
          onClick={() => setViewMode("list")}
        >
          <AlignJustify />
        </Button>
      </div>
    </div>
  );
};

export default ProductListHeader;
