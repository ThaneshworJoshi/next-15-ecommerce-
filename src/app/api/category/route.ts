import { NextResponse } from "next/server";

// API Route for Category Data
export async function GET() {
  const data = {
    productsData: [
      // Sneakers
      {
        id: 17,
        title: "Nike Air Max 270",
        media: { imageUrl: "/assets/sneakers1.png", altText: "Nike Air Max 270 image" },
        price: 150.0,
        originalPrice: 200.0,
        discount: 25,
        rating: 5,
        category: "Sneakers",
        productLink: "/products/sneakers-1",
        description: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."
      },
      {
        id: 18,
        title: "Adidas Ultraboost 21",
        media: { imageUrl: "/assets/sneakers2.png", altText: "Adidas Ultraboost 21 image" },
        price: 180.0,
        originalPrice: 220.0,
        discount: 18,
        rating: 4,
        category: "Sneakers",
        productLink: "/products/sneakers-2",
        description: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."
      },
      {
        id: 19,
        title: "Puma RS-X",
        media: { imageUrl: "/assets/sneakers3.png", altText: "Puma RS-X image" },
        price: 90.0,
        originalPrice: 120.0,
        discount: 25,
        rating: 4,
        category: "Sneakers",
        productLink: "/products/sneakers-3",
        description: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."
      },
      {
        id: 20,
        title: "New Balance 574",
        media: { imageUrl: "/assets/sneakers4.png", altText: "New Balance 574 image" },
        price: 85.0,
        originalPrice: 110.0,
        discount: 23,
        rating: 5,
        category: "Sneakers",
        productLink: "/products/sneakers-4",
        description: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."
      },
      {
        id: 21,
        title: "Reebok Classic Leather",
        media: { imageUrl: "/assets/sneakers5.png", altText: "Reebok Classic Leather image" },
        price: 75.0,
        originalPrice: 100.0,
        discount: 25,
        rating: 4,
        category: "Sneakers",
        productLink: "/products/sneakers-5",
        description: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."
      },
    ],
  };

  return NextResponse.json(data);
}
