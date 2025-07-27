"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCart } from "@/lib/cartApi";

export default function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    async function fetchCart() {
      setLoading(true);
      try {
        const data = await getCart();
        setCart(data);
      } catch (err) {
        setError("Error loading cart data.");
      } finally {
        setLoading(false);
      }
    }
    fetchCart();
  }, []);

  const handleQuantity = (id: string, type: "inc" | "dec") => {
    if (!cart) return;
    setCart((prev: any) => {
      const updated = prev.products.map((item: any) => {
        if (item.id !== id) return item;
        let newQty = item.quantity + (type === "inc" ? 1 : -1);
        if (newQty < 1) newQty = 1;
        return { ...item, quantity: newQty };
      });
      return { ...prev, products: updated };
    });
  };

  const handleRemove = (id: string) => {
    if (!cart) return;
    setCart((prev: any) => ({
      ...prev,
      products: prev.products.filter((item: any) => item.id !== id),
    }));
  };

  const handleRedeem = () => {
    if (coupon.trim().toLowerCase() === "save10") {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
      alert("Invalid coupon code");
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error || !cart) return <p className="text-center text-red-500">{error || "Error loading data."}</p>;

  const subtotal = cart.products.reduce(
    (sum: number, item: any) => sum + item.unitPrice * item.quantity,
    0
  );
  const shipping = 20;
  const total = subtotal + shipping - (couponApplied ? 10 : 0);

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
            {cart.products.map((item: any) => (
              <tr key={item.id} className="border-b text-sm">
                <td className="flex items-center gap-6 py-9">
                  <button onClick={() => handleRemove(item.id)} className="rounded-full text-red-500 bg-red-100 font-bold px-2 py-1 mr-4">✕</button>
                  <Image src={item.media.imageSrc} alt={item.media.alt} width={80} height={80} />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="flex items-center justify-center py-1">
                    <div className="flex items-center gap-x-5 bg-gray-100 rounded px-2 py-1">
                      <Button variant="ghost" size="sm" className="border-none shadow-none px-2 text-primary" onClick={() => handleQuantity(item.id, "dec")}>-</Button>
                      <span>{item.quantity}</span>
                      <Button variant="ghost" size="sm" className="border-none shadow-none px-2 text-primary" onClick={() => handleQuantity(item.id, "inc")}>+</Button>
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
        {cart.products.map((item: any) => (
          <div key={item.id} className="w-full border rounded-lg p-4 shadow-sm relative">
            <button onClick={() => handleRemove(item.id)} className="absolute top-2 right-2 rounded-full text-red-500 bg-red-100 font-bold px-2 py-1">
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
                <Button variant="ghost" size="sm" className="border-none shadow-none px-2 text-primary" onClick={() => handleQuantity(item.id, "dec")}>-</Button>
                <span>{item.quantity}</span>
                <Button variant="ghost" size="sm" className="border-none shadow-none px-2 text-primary" onClick={() => handleQuantity(item.id, "inc")}>+</Button>
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
            value={coupon}
            onChange={e => setCoupon(e.target.value)}
          />
          <Button className="bg-primary text-white px-4 py-2 rounded-r-md rounded-l-none hover:bg-secondary hover:text-black" onClick={handleRedeem}>
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
