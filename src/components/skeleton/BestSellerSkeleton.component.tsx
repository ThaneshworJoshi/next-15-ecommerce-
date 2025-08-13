import { Skeleton } from '@/components/ui/skeleton';

// Skeleton for bestseller component
export const BestSellerSkeleton = () => (
  <div className="container mx-auto my-8">
    {/* Title skeleton */}
    <Skeleton className="mx-auto w-1/6 h-8 mb-8" />

    {/* Category buttons skeleton */}
    <div className="mx-auto mb-8">
      <div className="mb-6 flex gap-3 justify-center">
        <Skeleton className="w-[100px] h-6 mb-4" />
        <Skeleton className="w-[100px] h-6 mb-4" />
        <Skeleton className="w-[100px] h-6 mb-4" />
        <Skeleton className="w-[100px] h-6 mb-4" />
      </div>
    </div>

    {/* Product cards skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center place-items-center">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="w-[300px]">
          <div className="border rounded-lg p-4 shadow-sm flex flex-col items-center h-full">
            <Skeleton className="w-full h-40 mb-4" />
            <Skeleton className="w-3/4 h-6 mb-2" />
            <Skeleton className="w-1/2 h-4 mb-2" />
            <Skeleton className="w-1/4" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
