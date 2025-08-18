import React from "react";
import { Skeleton } from "../ui/skeleton";

export const ProductPageSkeleton = () => {
  return (
    <div className="mx-auto container animate-pulse">
      {/* Breadcrumb Skeleton */}
      <Skeleton className="py-3 flex justify-center items-center bg-gray-50 mb-10">
        <div className="h-6 w-1/2 bg-gray-200 rounded" />
      </Skeleton>
      {/* Product Detail Section Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-7">
        {/* Left Section - Image Gallery & Info */}
        <div className="lg:col-span-3 flex flex-col lg:flex-row gap-8">
          {/* Image Gallery Skeleton */}
          <div className="flex-shrink-0">
            <Skeleton className="rounded-lg overflow-hidden mb-8 lg:mb-36 w-full lg:w-[500px] h-[350px] md:h-[450px] bg-gray-200" />
            <div className="flex flex-wrap justify-center lg:justify-start mt-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="w-20 h-20 bg-gray-200 rounded-md" />
              ))}
            </div>
          </div>
          {/* Product Info Skeleton */}
          <div className="w-full mx-4 md:mx-0 flex flex-col justify-center">
            <div className="h-8 w-2/3 bg-gray-200 rounded mb-6" />
            <div className="flex items-center mb-2 gap-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="w-5 h-5 bg-gray-200 rounded" />
              ))}
              <div className="h-4 w-16 bg-gray-200 rounded ml-3 mr-3" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
            <div className="h-[2px] bg-gray-200 mb-4" />
            <div className="flex flex-wrap items-center gap-2 mb-7">
              <div className="h-6 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>
            <div className="grid grid-cols-[125px_auto] text-sm mb-4 gap-4">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
            <div className="h-[2px] bg-gray-200 mb-4" />
            <div className="grid grid-cols-[125px_auto] items-center gap-y-6 mb-5">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-gray-200" />
                ))}
              </div>
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-10 w-24 bg-gray-200 rounded" />
            </div>
            <div className="h-[2px] bg-gray-200 mb-4" />
            <div className="flex flex-wrap md:justify-between items-center gap-4">
              <div className="flex items-center gap-4 bg-gray-100 text-base rounded-sm">
                <div className="h-8 w-8 bg-gray-200 rounded" />
                <div className="h-8 w-8 bg-gray-200 rounded" />
                <div className="h-8 w-8 bg-gray-200 rounded" />
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-10 w-32 bg-gray-200 rounded" />
                <div className="h-10 w-10 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="h-[2px] bg-gray-200 mt-4" />
          </div>
        </div>
        {/* Right Section - Additional Info Skeleton */}
        <div className="">
          <div className="h-6 w-24 bg-gray-200 rounded mb-9" />
        </div>
      </div>
    </div>
  );
}

export default ProductPageSkeleton;
