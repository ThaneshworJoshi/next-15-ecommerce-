import { Skeleton } from "@/components/ui/skeleton";

// Skeleton for desktop table row
export const CartTableRowSkeleton = () => (
  <tr className="border-b text-sm">
    <td className="flex items-center gap-6 py-9">
      <Skeleton className="w-6 h-6 rounded-full" />
      <Skeleton className="w-20 h-20 rounded-md" />
      <Skeleton className="w-32 h-4" />
    </td>
    <td>
      <Skeleton className="w-16 h-4 mx-auto" />
    </td>
    <td>
      <div className="flex items-center justify-center py-1">
        <Skeleton className="w-24 h-8 rounded" />
      </div>
    </td>
    <td>
      <Skeleton className="w-16 h-4 mx-auto" />
    </td>
  </tr>
);

// Skeleton for mobile card
export const CartCardSkeleton = () => (
  <div className="w-full border rounded-lg p-4 shadow-sm relative">
    <Skeleton className="absolute top-2 right-2 w-6 h-6 rounded-full" />
    
    <div className="flex items-center gap-6 mb-4">
      <Skeleton className="w-20 h-20 rounded-md" />
      <div className="flex-1">
        <Skeleton className="w-32 h-4 mb-2" />
        <Skeleton className="w-24 h-3" />
      </div>
    </div>

    <div className="flex items-center justify-between text-sm mb-2">
      <span>Quantity:</span>
      <Skeleton className="w-20 h-6 rounded" />
    </div>

    <div className="flex justify-between font-medium">
      <span>Total:</span>
      <Skeleton className="w-16 h-4" />
    </div>
  </div>
);

// Skeleton for summary section
export const CartSummarySkeleton = () => (
  <div className="w-full md:w-[300px]">
    <div className="text-sm space-y-2 mb-4">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <Skeleton className="w-16 h-4" />
      </div>
      <div className="flex justify-between">
        <span>Shipping fee</span>
        <Skeleton className="w-16 h-4" />
      </div>
      <div className="flex justify-between">
        <span>Coupon</span>
        <Skeleton className="w-16 h-4" />
      </div>
    </div>

    <div className="flex justify-between text-xl font-bold border-t pt-4">
      <span>TOTAL</span>
      <Skeleton className="w-20 h-6" />
    </div>

    <Skeleton className="mt-4 w-full h-10 rounded-md" />
  </div>
);

// Skeleton for voucher input
export const VoucherSkeleton = () => (
  <div className="flex items-center">
    <Skeleton className="w-64 h-10 rounded-l-md" />
    <Skeleton className="w-20 h-10 rounded-r-md" />
  </div>
);

// Main cart skeleton component
export const CartSkeleton = () => (
  <div className="container mx-auto px-4 py-10">
    {/* Table view for desktop */}
    <div className="overflow-x-auto mb-10 hidden md:block">
      <table className="w-full text-center">
        <thead>
          <tr className="border-b text-sm text-gray-500">
            <th className="py-3 text-left text-black">Product</th>
            <th className="py-3 min-w-[100px] text-black">Price</th>
            <th className="py-3 min-w-[100px] text-black">Qty</th>
            <th className="py-3 min-w-[100px] text-black">Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((index) => (
            <CartTableRowSkeleton key={index} />
          ))}
        </tbody>
      </table>
    </div>

    {/* Card view for mobile */}
    <div className="grid grid-cols-1 gap-6 mb-10 md:hidden">
      {[1, 2, 3].map((index) => (
        <CartCardSkeleton key={index} />
      ))}
    </div>

    {/* Voucher and Summary Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <VoucherSkeleton />
      <CartSummarySkeleton />
    </div>
  </div>
); 