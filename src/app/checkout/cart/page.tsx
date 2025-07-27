"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCart } from "@/lib/cartApi";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoForm, setInfoForm] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [infoErrors, setInfoErrors] = useState<any>({});
  const [infoSubmitted, setInfoSubmitted] = useState(false);

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

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoForm({ ...infoForm, [e.target.name]: e.target.value });
  };
  const validateInfo = () => {
    const newErrors: any = {};
    if (!infoForm.name) newErrors.name = "Required";
    if (!infoForm.email) newErrors.email = "Required";
    if (!infoForm.phone) newErrors.phone = "Required";
    if (!infoForm.address1) newErrors.address1 = "Required";
    if (!infoForm.city) newErrors.city = "Required";
    if (!infoForm.state) newErrors.state = "Required";
    if (!infoForm.zip) newErrors.zip = "Required";
    if (!infoForm.country) newErrors.country = "Required";
    return newErrors;
  };
  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInfo();
    setInfoErrors(validation);
    if (Object.keys(validation).length === 0) {
      setInfoSubmitted(true);
      // Here you could send infoForm to backend
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

          <Dialog.Root open={showInfoModal} onOpenChange={setShowInfoModal}>
            <Dialog.Trigger asChild>
              <button className="mt-4 w-full bg-primary hover:bg-secondary hover:text-black text-white py-2 rounded-md" type="button">
                Check out
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
              <Dialog.Content className="fixed z-50 left-1/2 top-1/2 max-w-lg w-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8 focus:outline-none">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-lg font-semibold">Shipping Information</Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="p-2 rounded-full hover:bg-gray-100"><X className="w-5 h-5" /></button>
                  </Dialog.Close>
                </div>
                {infoSubmitted ? (
                  <div className="mt-8 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-green-700">Thank you!</h2>
                    <p className="mb-6">Our agent will call and confirm delivery.</p>
                    <Dialog.Close asChild>
                      <Button onClick={() => setInfoSubmitted(false)}>Close</Button>
                    </Dialog.Close>
                  </div>
                ) : (
                  <form onSubmit={handleInfoSubmit} className="space-y-4 mt-4">
                    <div>
                      <label className="block mb-1 font-medium">Full Name *</label>
                      <input name="name" value={infoForm.name} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                      {infoErrors.name && <span className="text-red-500 text-xs">{infoErrors.name}</span>}
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Email *</label>
                      <input name="email" type="email" value={infoForm.email} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                      {infoErrors.email && <span className="text-red-500 text-xs">{infoErrors.email}</span>}
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Phone *</label>
                      <input name="phone" value={infoForm.phone} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                      {infoErrors.phone && <span className="text-red-500 text-xs">{infoErrors.phone}</span>}
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Address Line 1 *</label>
                      <input name="address1" value={infoForm.address1} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                      {infoErrors.address1 && <span className="text-red-500 text-xs">{infoErrors.address1}</span>}
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Address Line 2</label>
                      <input name="address2" value={infoForm.address2} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block mb-1 font-medium">City *</label>
                        <input name="city" value={infoForm.city} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                        {infoErrors.city && <span className="text-red-500 text-xs">{infoErrors.city}</span>}
                      </div>
                      <div className="flex-1">
                        <label className="block mb-1 font-medium">State/Province *</label>
                        <input name="state" value={infoForm.state} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                        {infoErrors.state && <span className="text-red-500 text-xs">{infoErrors.state}</span>}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block mb-1 font-medium">Zip/Postal Code *</label>
                        <input name="zip" value={infoForm.zip} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                        {infoErrors.zip && <span className="text-red-500 text-xs">{infoErrors.zip}</span>}
                      </div>
                      <div className="flex-1">
                        <label className="block mb-1 font-medium">Country *</label>
                        <input name="country" value={infoForm.country} onChange={handleInfoChange} className="w-full border rounded px-3 py-2" />
                        {infoErrors.country && <span className="text-red-500 text-xs">{infoErrors.country}</span>}
                      </div>
                    </div>
                    <Button type="submit" className="w-full mt-4">Submit</Button>
                  </form>
                )}
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
}
