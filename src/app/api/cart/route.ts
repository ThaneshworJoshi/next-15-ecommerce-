import { NextResponse } from "next/server";

// API Route for Homepage Data
export async function GET() {
  const data = {
    products: [
        {
          id: 1,
          name: "Nike Airmax 270 ",
          price: 400,
          quantity: 2,
          unitPrice: 200,
          media: { imageSrc: "/assets/nike-logo.png", alt: "Nike Logo" },        },
        {
          id: 2,
          name: "Nike Airmax 270 react",
          price: 200,
          quantity: 2,
          unitPrice: 100,
          media: { imageSrc: "/assets/sneakers1.png", alt: "Bluetooth Speaker" },
        },
      ]
  };

  return NextResponse.json(data);
}
