import Image from "next/image";

async function getCartpageData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch homepage data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
}

export default async function CartPage() {
  const data = await getCartpageData();

  if (!data) return <p className="text-center text-red-500">Error loading data.</p>;

  const cartItems = [
    {
      id: 1,
      name: "Nike Airmax 270 react",
      price: 998,
      quantity: 2,
      unitPrice: 499,
      image: "/shoes/red-airmax.png",
    },
    {
      id: 2,
      name: "Nike Airmax 270 react",
      price: 998,
      quantity: 2,
      unitPrice: 499,
      image: "/shoes/multicolor-airmax.png",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const shipping = 20;
  const couponApplied = false;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Cart Table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-sm text-gray-500">
              <th className="py-3">Product</th>
              <th className="py-3">Price</th>
              <th className="py-3">Qty</th>
              <th className="py-3">Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b text-sm">
                <td className="flex items-center gap-4 py-5">
                  <button className="text-red-500 font-bold">✕</button>
                  <Image src={item.image} alt={item.name} width={80} height={80} />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="flex items-center gap-2 border px-3 py-1 rounded">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </td>
                <td>${item.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Voucher and Summary */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Voucher */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Voucher code"
            className="border px-4 py-2 rounded-md w-64"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Redeem</button>
        </div>

        {/* Summary */}
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
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}
