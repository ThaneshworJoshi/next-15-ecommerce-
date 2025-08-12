import { NextResponse } from "next/server";

// API Route for Product Data
export async function GET() {
  const data = {
    id: "ac001",
    name: "Soft Pink Cat Collar with Bell",
    category: "Collars",
    rating: 5,
    reviews: 148,
    price: 12.99,
    originalPrice: 17.99,
    discountedPrice: 12.99,
    discountPercentage: 28,
    availability: "In Stock",
    colors: ["#FFC0CB", "#FFD1DC", "#FFB6C1", "#FFFFFF"],
    sizes: ["XS", "S", "M"],
    productInformation: {
      brand: "PawPlanet",
      material: "Faux Leather & Metal Bell",
      gender: "Unisex (Pets)",
      weight: "50g",
      description:
        "This soft pink cat collar is designed with both elegance and comfort in mind. It features a silver bell and a gold buckle, perfect for your stylish feline friend.",
      features: [
        "Soft faux leather for maximum comfort",
        "Breakaway buckle for pet safety",
        "Includes a silver bell for easy tracking",
        "Adjustable fit for growing kittens"
      ]
    },
    relatedProducts: [
      {
        id: "ac002",
        name: "Adjustable Blue Nylon Cat Collar",
        price: 10.49,
        rating: 4.5,
        image: "/assets/accessories/cat-collar-blue.jpg"
      },
      {
        id: "ac003",
        name: "Floral Print Breakaway Cat Collar",
        price: 13.25,
        rating: 5,
        image: "/assets/accessories/cat-collar-floral.jpg"
      }
    ],
    media: {
      images: [
        "/assets/accessories/cat-collar-pink.jpg",
        "/assets/accessories/cat-collar-pink-side.jpg",
        "/assets/accessories/cat-collar-pink-closeup.jpg",
        "/assets/accessories/cat-collar-pink-packaging.jpg"
      ],
      video: "/videos/pink-cat-collar-showcase.mp4"
    }
  };


  return NextResponse.json(data);
}
