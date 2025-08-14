import { NextResponse } from "next/server";

// API Route for BestSeller Data
export async function GET() {
  const data = {
    categories: ["All", "Collars", "Toys", "Clothing", "Accessories"],
    productsData: [
      {
        "id": 1,
        "title": "Soft Pink Cat Collar with Bell",
        "media": { "imageUrl": "/assets/accessories/cat-collar-pink.jpg", "altText": "Soft pink cat collar with bell image" },
        "price": 14.99,
        "originalPrice": 19.99,
        "discount": 25,
        "rating": 5,
        "category": "Collars",
        "productLink": "/products/cat-collar-pink"
      },
      {
        "id": 2,
        "title": "Plush Feather Cat Toy Set",
        "media": { "imageUrl": "/assets/accessories/cat-toy-set5.jpg", "altText": "Plush feather cat toy set image" },
        "price": 18.75,
        "originalPrice": 24.99,
        "discount": 25,
        "rating": 4,
        "category": "Toys",
        "productLink": "/products/cat-toy-set"
      },
      {
        "id": 3,
        "title": "Blue Cat Harness and Leash",
        "media": { "imageUrl": "/assets/accessories/cat-harness-blue.jpg", "altText": "Blue cat harness and leash image" },
        "price": 22.50,
        "originalPrice": 30.00,
        "discount": 25,
        "rating": 4,
        "category": "Harnesses",
        "productLink": "/products/cat-harness-blue"
      },
      {
        "id": 4,
        "title": "Luxury Cat Bed",
        "media": { "imageUrl": "/assets/accessories/cat-bed-luxury.jpg", "altText": "Luxury cat bed image" },
        "price": 45.00,
        "originalPrice": 65.00,
        "discount": 31,
        "rating": 5,
        "category": "Beds",
        "productLink": "/products/cat-bed-luxury"
      },
      {
        "id": 5,
        "title": "Interactive Laser Toy",
        "media": { "imageUrl": "/assets/accessories/cat-laser-toy.jpg", "altText": "Interactive laser toy image" },
        "price": 27.99,
        "originalPrice": 39.99,
        "discount": 30,
        "rating": 4,
        "category": "Toys",
        "productLink": "/products/interactive-laser-toy"
      },
      {
        "id": 6,
        "title": "Adjustable Pet Sunglasses",
        "media": { "imageUrl": "/assets/accessories/pet-sunglasses.jpg", "altText": "Adjustable pet sunglasses image" },
        "price": 12.99,
        "originalPrice": 19.99,
        "discount": 35,
        "rating": 4,
        "category": "Accessories",
        "productLink": "/products/pet-sunglasses"
      },
      {
        "id": 7,
        "title": "Soft Knit Pet Sweater",
        "media": { "imageUrl": "/assets/accessories/pet-sweater.jpg", "altText": "Soft knit pet sweater image" },
        "price": 25.99,
        "originalPrice": 34.99,
        "discount": 26,
        "rating": 5,
        "category": "Clothing",
        "productLink": "/products/pet-sweater"
      },
      {
        "id": 8,
        "title": "Catnip Banana Toy",
        "media": { "imageUrl": "/assets/accessories/catnip-banana.jpg", "altText": "Catnip banana toy image" },
        "price": 9.49,
        "originalPrice": 14.49,
        "discount": 34,
        "rating": 4,
        "category": "Toys",
        "productLink": "/products/catnip-banana-toy"
      },
      {
        "id": 10,
        "title": "Adjustable Blue Nylon Cat Collar",
        "media": { "imageUrl": "/assets/accessories/cat-collar-blue.jpg", "altText": "Adjustable blue nylon cat collar image" },
        "price": 10.49,
        "originalPrice": 15.00,
        "discount": 30,
        "rating": 4,
        "category": "Collars",
        "productLink": "/products/cat-collar-blue"
      },
      {
        "id": 11,
        "title": "Reflective Safety Cat Collar",
        "media": { "imageUrl": "/assets/accessories/cat-collar-reflective.jpg", "altText": "Reflective safety cat collar image" },
        "price": 11.99,
        "originalPrice": 16.99,
        "discount": 29,
        "rating": 4,
        "category": "Collars",
        "productLink": "/products/cat-collar-reflective"
      },
      {
        "id": 12,
        "title": "Floral Print Breakaway Cat Collar",
        "media": { "imageUrl": "/assets/accessories/cat-collar-floral.jpg", "altText": "Floral print breakaway cat collar image" },
        "price": 13.25,
        "originalPrice": 18.75,
        "discount": 29,
        "rating": 5,
        "category": "Collars",
        "productLink": "/products/cat-collar-floral"
      },
      {
        "id": 13,
        "title": "Pink Adjustable Pet Sunglasses",
        "media": {
          "imageUrl": "/assets/accessories/pet-sunglasses2.jpg",
          "altText": "Adjustable pet sunglasses image"
        },
        "price": 12.99,
        "originalPrice": 19.99,
        "discount": 35,
        "rating": 4,
        "category": "Accessories",
        "productLink": "/products/pet-sunglasses"
      },
      {
        "id": 14,
        "title": "Silicone Pet Feeding Mat",
        "media": {
          "imageUrl": "/assets/accessories/pet-feeding-mat.jpg",
          "altText": "Silicone pet feeding mat image"
        },
        "price": 10.49,
        "originalPrice": 14.99,
        "discount": 30,
        "rating": 5,
        "category": "Accessories",
        "productLink": "/products/pet-feeding-mat"
      },
      {
        "id": 15,
        "title": "Pet ID Tag - Bone Shaped",
        "media": {
          "imageUrl": "/assets/accessories/pet-id-tag.jpg",
          "altText": "Bone shaped pet ID tag image"
        },
        "price": 8.75,
        "originalPrice": 12.00,
        "discount": 27,
        "rating": 4,
        "category": "Accessories",
        "productLink": "/products/pet-id-tag"
      },
      {
        "id": 16,
        "title": "Pet Grooming Glove Brush",
        "media": {
          "imageUrl": "/assets/accessories/pet-grooming-glove.jpg",
          "altText": "Pet grooming glove brush image"
        },
        "price": 9.99,
        "originalPrice": 15.99,
        "discount": 38,
        "rating": 4,
        "category": "Accessories",
        "productLink": "/products/pet-grooming-glove"
      },
      {
        "id": 17,
        "title": "Interactive Feather Wand Toy",
        "media": {
          "imageUrl": "/assets/accessories/feather-wand.jpg",
          "altText": "Interactive feather wand cat toy image"
        },
        "price": 8.99,
        "originalPrice": 12.99,
        "discount": 31,
        "rating": 5,
        "category": "Toys",
        "productLink": "/products/feather-wand-toy"
      },
      {
        "id": 18,
        "title": "Cat Tunnel Toy",
        "media": {
          "imageUrl": "/assets/accessories/cat-tunnel.jpg",
          "altText": "Collapsible cat tunnel toy image"
        },
        "price": 14.49,
        "originalPrice": 19.99,
        "discount": 28,
        "rating": 4,
        "category": "Toys",
        "productLink": "/products/cat-tunnel-toy"
      },
      {
        "id": 19,
        "title": "Colorful Jingle Balls Pack",
        "media": {
          "imageUrl": "/assets/accessories/jingle-balls.jpg",
          "altText": "Pack of colorful jingle balls cat toy image"
        },
        "price": 6.75,
        "originalPrice": 9.50,
        "discount": 29,
        "rating": 4,
        "category": "Toys",
        "productLink": "/products/jingle-balls-pack"
      }
    ]
  };

  return NextResponse.json(data);
}
