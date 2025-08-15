import React from "react";
import { Skeleton } from "../ui/skeleton";

export const ProductListClientSkeleton = () => {
  return (
    <div className="space-y-4">
      {/* Header or toolbar skeleton */}
      <Skeleton className="w-full h-20 mt-4 bg-gray-200 rounded" />

      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="mb-4 border-spacing-1">
          <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg animate-pulse md:flex-row">
            {/* Image skeleton */}
            <Skeleton className="w-full h-80 bg-gray-300 rounded aspect-[300/270] md:w-64 md:h-48" />

            {/* Content skeleton */}
            <div className="flex-1 space-y-2">
              <Skeleton className="h-6 w-1/4 mt-2 bg-gray-300 rounded" />
              <Skeleton className="h-4 w-1/2 bg-gray-200 rounded" />
              <Skeleton className="h-4 w-1/3 bg-gray-200 rounded" />
              <Skeleton className="h-4 w-3/4 bg-gray-300 rounded" />

              {/* Action buttons skeleton */}
              <div className="flex items-center gap-2 mt-4">
                <Skeleton className="w-[100px] h-9 bg-gray-300 rounded" />
                <Skeleton className="w-[100px] h-9 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListClientSkeleton;
