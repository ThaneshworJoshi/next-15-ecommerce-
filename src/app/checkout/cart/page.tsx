/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Fetch cart data from API
async function getCartpageData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cart`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return null;
  }
}

export default async function CartPage() {
  const data = await getCartpageData();
  if (!data) {
    return <p className="text-center text-red-500">Error loading data.</p>;
  }

  const subtotal = data.products.reduce(
    (sum: number, item: any) => sum + item.unitPrice * item.quantity,
    0
  );
  const shipping = 20;
  const couponApplied = false;
  const total = subtotal + shipping;

  return (
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
            {data.products.map((item: any) => (
              <tr key={item.id} className="border-b text-sm">
                <td className="flex items-center gap-6 py-9">
                  <button className="rounded-full text-red-500 bg-red-100 font-bold px-2 py-1 mr-4">✕</button>
                  <Image src={item.media.imageSrc} alt={item.media.alt} width={80} height={80} />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="flex items-center justify-center py-1">
                    <div className="flex items-center gap-x-5 bg-gray-100 rounded px-2 py-1">
                      <Button variant="ghost" size="sm" className="border-none shadow-none px-2 text-primary">-</Button>
                      <span>{item.quantity}</span>
                      <Button variant="ghost" size="sm" className="border-none shadow-none px-2 text-primary">+</Button>
                    </div>
                  </div>
                </td>
                <td>${item.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="grid grid-cols-1 gap-6 mb-10 md:hidden">
        {data.products.map((item: any) => (
          <div key={item.id} className="w-full border rounded-lg p-4 shadow-sm relative">
            <button className="absolute top-2 right-2 rounded-full text-red-500 bg-red-100 font-bold px-2 py-1">
              ✕
            </button>

            <div className="flex items-center gap-6 mb-4">
              <Image
                src={item.media.imageSrc}
                alt={item.media.alt || item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.unitPrice} each</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm mb-2">
              <span>Quantity:</span>
              <div className="flex items-center gap-x-3 bg-gray-100 rounded px-2 py-1">
                <Button variant="ghost" size="sm" className="border-none shadow-none px-2 text-primary">-</Button>
                <span>{item.quantity}</span>
                <Button variant="ghost" size="sm" className="border-none shadow-none px-2 text-primary">+</Button>
              </div>
            </div>

            <div className="flex justify-between font-medium">
              <span>Total:</span>
              <span>${item.unitPrice * item.quantity}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Voucher and Summary Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Voucher Input */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Voucher code"
            className="border px-4 py-2 w-64 rounded-l-md"
          />
          <Button className="bg-primary text-white px-4 py-2 rounded-r-md rounded-l-none hover:bg-secondary hover:text-black">
            Redeem
          </Button>
        </div>

        {/* Summary Info */}
        <div className="w-full md:w-[300px]">
          <div className="text-sm space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping fee</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon</span>
              <span>{couponApplied ? "$10" : "No"}</span>
            </div>
          </div>

          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>TOTAL</span>
            <span>${total}</span>
          </div>

          <button className="mt-4 w-full bg-primary hover:bg-secondary hover:text-black text-white py-2 rounded-md">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}
