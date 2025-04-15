import { NextResponse } from "next/server";

// API Route for Homepage Data
export async function GET() {
  const data = {
    featuredProducts: [
      {
        title: "FS - Nike Air Max 270 React",
        imageUrl: "./assets/sneakers7.png",
        price: 299.43,
        originalPrice: 534.33,
        discount: 24,
        productLink: "/products/nike-air-max-270-react" // ✅ Redirects to this page
      },
      {
        title: "FS - Nike Air Max 270 React",
        imageUrl: "./assets/shoes2.png",
        price: 299.43,
        originalPrice: 534.33,
        discount: 24,
        productLink: "/products/nike-air-max-270-react" // ✅ Redirects to this page
      },
      {
        title: "FS - Nike Air Max 270 React",
        imageUrl: "./assets/shoes1.png",
        price: 299.43,
        originalPrice: 534.33,
        discount: 24,
        productLink: "/products/nike-air-max-270-react" // ✅ Redirects to this page
      },
    ],
    categories: ["All", "Bags", "Sneakers", "Belt", "Sunglasses"],
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
        productLink: "/products/sneakers-1"
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
        productLink: "/products/sneakers-2"
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
        productLink: "/products/sneakers-3"
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
        productLink: "/products/sneakers-4"
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
        productLink: "/products/sneakers-5"
      },
      {
        id: 22,
        title: "Converse Chuck Taylor",
        media: { imageUrl: "/assets/sneakers6.png", altText: "Converse Chuck Taylor image" },
        price: 55.0,
        originalPrice: 70.0,
        discount: 21,
        rating: 4,
        category: "Sneakers",
        productLink: "/products/sneakers-6"
      },
      {
        id: 23,
        title: "Vans Old Skool",
        media: { imageUrl: "/assets/sneakers7.png", altText: "Vans Old Skool image" },
        price: 65.0,
        originalPrice: 80.0,
        discount: 19,
        rating: 5,
        category: "Sneakers",
        productLink: "/products/sneakers-7"
      },
      {
        id: 24,
        title: "Asics Gel-Lyte III",
        media: { imageUrl: "/assets/sneakers8.png", altText: "Asics Gel-Lyte III image" },
        price: 110.0,
        originalPrice: 140.0,
        discount: 21,
        rating: 4,
        category: "Sneakers",
        productLink: "/products/sneakers-8"
      },
    
      // Belts
      {
        id: 1,
        title: "Classic Leather Belt",
        media: { imageUrl: "/assets/belt.png", altText: "Classic Leather Belt image" },
        price: 29.99,
        originalPrice: 49.99,
        discount: 40,
        rating: 4,
        category: "Belt",
        productLink: "/products/belt-1"
      },
      {
        id: 2,
        title: "Casual Canvas Belt",
        media: { imageUrl: "/assets/belt2.png", altText: "Casual Canvas Belt image" },
        price: 19.99,
        originalPrice: 39.99,
        discount: 50,
        rating: 3,
        category: "Belt",
        productLink: "/products/belt-2"
      },
      {
        id: 3,
        title: "Formal Black Belt",
        media: { imageUrl: "/assets/belt3.png", altText: "Formal Black Belt image" },
        price: 34.99,
        originalPrice: 59.99,
        discount: 42,
        rating: 5,
        category: "Belt",
        productLink: "/products/belt-3"
      },
      {
        id: 4,
        title: "Braided Brown Belt",
        media: { imageUrl: "/assets/belt4.png", altText: "Braided Brown Belt image" },
        price: 24.99,
        originalPrice: 44.99,
        discount: 44,
        rating: 4,
        category: "Belt",
        productLink: "/products/belt-4"
      },
      {
        id: 5,
        title: "Reversible Leather Belt",
        media: { imageUrl: "/assets/belt5.png", altText: "Reversible Leather Belt image" },
        price: 39.99,
        originalPrice: 69.99,
        discount: 43,
        rating: 4,
        category: "Belt",
        productLink: "/products/belt-5"
      },
      {
        id: 6,
        title: "Rustic Leather Belt",
        media: { imageUrl: "/assets/belt6.png", altText: "Rustic Leather Belt image" },
        price: 27.99,
        originalPrice: 47.99,
        discount: 42,
        rating: 3,
        category: "Belt",
        productLink: "/products/belt-6"
      },
      {
        id: 7,
        title: "Minimalist Black Belt",
        media: { imageUrl: "/assets/belt7.png", altText: "Minimalist Black Belt image" },
        price: 21.99,
        originalPrice: 41.99,
        discount: 48,
        rating: 4,
        category: "Belt",
        productLink: "/products/belt-7"
      },
      {
        id: 8,
        title: "Vintage Leather Belt",
        media: { imageUrl: "/assets/belt8.png", altText: "Vintage Leather Belt image" },
        price: 31.99,
        originalPrice: 51.99,
        discount: 38,
        rating: 5,
        category: "Belt",
        productLink: "/products/belt-8"
      },
    
      // Sunglasses
      {
        id: 9,
        title: "Aviator Sunglasses",
        media: { imageUrl: "/assets/sunglasses1.webp", altText: "Aviator Sunglasses image" },
        price: 89.99,
        originalPrice: 129.99,
        discount: 31,
        rating: 5,
        category: "Sunglasses",
        productLink: "/products/sunglasses-1"
      },
      {
        id: 10,
        title: "Round Retro Sunglasses",
        media: { imageUrl: "/assets/sunglasses2.webp", altText: "Round Retro Sunglasses image" },
        price: 59.99,
        originalPrice: 99.99,
        discount: 40,
        rating: 4,
        category: "Sunglasses",
        productLink: "/products/sunglasses-2"
      },
      {
        id: 11,
        title: "Polarized Sports Sunglasses",
        media: { imageUrl: "/assets/sunglasses3.webp", altText: "Polarized Sports Sunglasses image" },
        price: 79.99,
        originalPrice: 119.99,
        discount: 33,
        rating: 4,
        category: "Sunglasses",
        productLink: "/products/sunglasses-3"
      },
      {
        id: 12,
        title: "Oversized Cat-Eye Sunglasses",
        media: { imageUrl: "/assets/sunglasses4.webp", altText: "Oversized Cat-Eye Sunglasses image" },
        price: 69.99,
        originalPrice: 109.99,
        discount: 36,
        rating: 5,
        category: "Sunglasses",
        productLink: "/products/sunglasses-4"
      },
      {
        id: 13,
        title: "Mirrored Lens Sunglasses",
        media: { imageUrl: "/assets/sunglasses5.webp", altText: "Mirrored Lens Sunglasses image" },
        price: 49.99,
        originalPrice: 89.99,
        discount: 44,
        rating: 4,
        category: "Sunglasses",
        productLink: "/products/sunglasses-5"
      },
      {
        id: 14,
        title: "Classic Wayfarer Sunglasses",
        media: { imageUrl: "/assets/sunglasses6.png", altText: "Classic Wayfarer Sunglasses image" },
        price: 54.99,
        originalPrice: 94.99,
        discount: 42,
        rating: 5,
        category: "Sunglasses",
        productLink: "/products/sunglasses-6"
      },
      {
        id: 15,
        title: "Rectangle Frame Sunglasses",
        media: { imageUrl: "/assets/sunglasses7.png", altText: "Rectangle Frame Sunglasses image" },
        price: 64.99,
        originalPrice: 104.99,
        discount: 38,
        rating: 4,
        category: "Sunglasses",
        productLink: "/products/sunglasses-7"
      },
      {
        id: 16,
        title: "Gradient Lens Sunglasses",
        media: { imageUrl: "/assets/sunglasses8.png", altText: "Gradient Lens Sunglasses image" },
        price: 74.99,
        originalPrice: 114.99,
        discount: 35,
        rating: 5,
        category: "Sunglasses",
        productLink: "/products/sunglasses-8"
      },
      // Bags
      {
        id: 29,
        title: "Designer Clutch Bag",
        media: { imageUrl: "/assets/bags1.png", altText: "Designer Clutch Bag image" },
        price: 95.0,
        originalPrice: 130.0,
        discount: 27,
        rating: 4,
        category: "Bags",
        productLink: "/products/bags-5"
      },
      {
        id: 30,
        title: "Minimalist Leather Backpack",
        media: { imageUrl: "/assets/bags2.png", altText: "Minimalist Leather Backpack image" },
        price: 110.0,
        originalPrice: 140.0,
        discount: 21,
        rating: 5,
        category: "Bags",
        productLink: "/products/bags-6"
      },
      {
        id: 31,
        title: "Travel Duffel Bag",
        media: { imageUrl: "/assets/bags1.png", altText: "Travel Duffel Bag image" },
        price: 85.0,
        originalPrice: 110.0,
        discount: 23,
        rating: 4,
        category: "Bags",
        productLink: "/products/bags-7"
      },
      {
        id: 25,
        title: "Luxury Handbag",
        media: { imageUrl: "/assets/bag1.webp", altText: "Luxury Handbag image" },
        price: 142.81,
        originalPrice: 146.0,
        discount: 24,
        rating: 5,
        category: "Bags",
        productLink: "/products/bags-1"
      },
      {
        id: 26,
        title: "Leather Tote Bag",
        media: { imageUrl: "/assets/bag2.webp", altText: "Leather Tote Bag image" },
        price: 120.0,
        originalPrice: 150.0,
        discount: 20,
        rating: 4,
        category: "Bags",
        productLink: "/products/bags-2"
      },
      {
        id: 27,
        title: "Backpack with Laptop Sleeve",
        media: { imageUrl: "/assets/bag3.webp", altText: "Backpack with Laptop Sleeve image" },
        price: 90.0,
        originalPrice: 120.0,
        discount: 25,
        rating: 4,
        category: "Bags",
        productLink: "/products/bags-3"
      },
      {
        id: 28,
        title: "Crossbody Sling Bag",
        media: { imageUrl: "/assets/bag4.webp", altText: "Crossbody Sling Bag image" },
        price: 60.0,
        originalPrice: 80.0,
        discount: 25,
        rating: 5,
        category: "Bags",
        productLink: "/products/bags-4"
      },
      {
        id: 32,
        title: "Eco-Friendly Canvas Bag",
        media: { imageUrl: "/assets/bags2.png", altText: "Eco-Friendly Canvas Bag image" },
        price: 45.0,
        originalPrice: 60.0,
        discount: 25,
        rating: 4,
        category: "Bags",
        productLink: "/products/bags-8"
      }
    ],
    cardsDataH: [
      {
        variant: "horizontal",
        title: "Fashion Industry",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "01 Jan, 2015",
        media: { imageSrc: "/assets/nike-logo.png", alt: "Nike Logo" },
      },
      {
        variant: "horizontal",
        title: "Best Design Tools",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "01 Jan, 2015",
        media: { imageSrc: "/assets/figma-logo.png", alt: "Nike Logo" },
      },
      {
        variant: "horizontal",
        title: "HR Community",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date: "01 Jan, 2015",
        media: { imageSrc: "/assets/nike-logo.png", alt: "Nike Logo" },
      }
    ],
    miniProductCardRowData: {
      title: "Featured Products",
      products: [
        {
          title: "Blue Swade Nike Sneakers",
          rating: 3,
          originalPrice: 49.99,
          price: 39.99,
          productLink: "/products/bluetooth-speaker",
          media: { imageSrc: "/assets/sneakers1.png", alt: "Bluetooth Speaker" },
        },
        {
          title: "Red Nike Sneakers",
          rating: 4,
          originalPrice: 59.99,
          price: 49.99,
          productLink: "/products/red-nike-sneakers",
          media: { imageSrc: "/assets/sneakers2.png", alt: "Red Nike Sneakers" },
        },
        {
          title: "Green Adidas Sneakers",
          rating: 5,
          originalPrice: 69.99,
          price: 59.99,
          productLink: "/products/green-adidas-sneakers",
          media: { imageSrc: "/assets/sneakers3.png", alt: "Green Adidas Sneakers" },
        },
      ],
    },
    cardsDataV: [
      {
          title: "FREE SHIPPING",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          icon: 'FaShippingFast',
        },
        {
          title: "100% REFUND",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          icon: 'RiRefund2Line',
        },
        {
          title: "SUPPORT 24/7",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          icon: 'MdOutlineSupportAgent',
        },
    ],
  };

  return NextResponse.json(data);
}
