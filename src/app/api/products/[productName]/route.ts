import { NextResponse } from "next/server";

// API Route for Product Data
export async function GET() {
  const data = {
    "id": "12345",
    "name": "Nike Air Max 2024",
    "category": "Shoes",
    "rating": 4,
    "reviews": 254,
    "price": 149.99,
    "originalPrice": 199.99,
    "discountedPrice": 149.99,
    "discountPercentage": 25,
    "availability": "In Stock",
    "colors": ["#006CFF", "#FC3E39", "#171717", "#FFF600"],
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "productInformation": {
      "brand": "Nike",
      "material": "Mesh & Synthetic Leather",
      "gender": "Unisex",
      "weight": "350g",
      "description": "The Nike Air Max 2024 is designed for ultimate comfort and style. Featuring a breathable mesh upper, cushioned Air Max sole, and premium durability.",
      "features": [
        "Breathable mesh upper for better airflow",
        "Lightweight and flexible sole",
        "Enhanced grip and durability",
        "Modern design with bold color options"
      ]
    },
    "relatedProducts": [
      {
        "id": "12346",
        "name": "Nike Revolution 6",
        "price": 129.99,
        "rating": 4.5,
        "image": "/images/nike-revolution-6.jpg"
      },
      {
        "id": "12347",
        "name": "Nike ZoomX Vaporfly",
        "price": 199.99,
        "rating": 4.8,
        "image": "/images/nike-zoomx.jpg"
      }
    ],
    "media": {
      "images": [
        "/assets/sneakers1.png",
        "/assets/sneakers2.png",
        "/assets/sneakers3.png",
        "/assets/sneakers4.png",
      ],
      "video": "/videos/nike-air-max-ad.mp4"
    }
  }

  return NextResponse.json(data);
}
