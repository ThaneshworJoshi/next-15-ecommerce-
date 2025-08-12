import { NextRequest, NextResponse } from 'next/server';

type ProductCategory = 'toys' | 'collars' | 'beds';

interface Product {
  id: number;
  title: string;
  media: {
    imageUrl: string;
    altText: string;
  };
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  category: string;
  productLink: string;
  description: string;
}

const allProducts: Record<ProductCategory, Product[]> = {
  toys: [
    {
      id: 1,
      title: "Plush Feather Cat Toy Set",
      media: { imageUrl: "/assets/accessories/cat-toy-set1.jpg", altText: "Plush feather cat toy set" },
      price: 18.75,
      originalPrice: 24.99,
      discount: 25,
      rating: 4,
      category: "Toys",
      productLink: "/products/plush-feather-cat-toy",
      description: "A colorful set of plush toys with feathers and jingling sounds to keep your cat entertained for hours."
    },
    {
      id: 2,
      title: "Cat Tunnel Toy",
      media: { imageUrl: "/assets/accessories/cat-tunnel.jpg", altText: "Cat tunnel toy" },
      price: 14.49,
      originalPrice: 19.99,
      discount: 28,
      rating: 4,
      category: "Toys",
      productLink: "/products/cat-tunnel-toy",
      description: "A collapsible play tunnel for cats, ideal for interactive hiding and pouncing."
    },
    {
      id: 3,
      title: "Colorful Jingle Balls Pack",
      media: { imageUrl: "/assets/accessories/jingle-balls.jpg", altText: "Jingle balls cat toy" },
      price: 6.75,
      originalPrice: 9.50,
      discount: 29,
      rating: 4,
      category: "Toys",
      productLink: "/products/jingle-balls-pack",
      description: "Brightly colored balls with jingle bells inside to stimulate playful behavior in cats."
    },
    {
      id: 4,
      title: "Interactive Feather Wand Toy",
      media: { imageUrl: "/assets/accessories/feather-wand.jpg", altText: "Feather wand toy" },
      price: 8.99,
      originalPrice: 12.99,
      discount: 31,
      rating: 5,
      category: "Toys",
      productLink: "/products/feather-wand-toy",
      description: "An interactive wand with feathers and bell, perfect for engaging your cat in fun activity."
    },
    {
      id: 5,
      title: "Catnip Banana Toy",
      media: { imageUrl: "/assets/accessories/catnip-banana.jpg", altText: "Catnip banana toy" },
      price: 9.49,
      originalPrice: 14.49,
      discount: 34,
      rating: 4,
      category: "Toys",
      productLink: "/products/catnip-banana-toy",
      description: "A soft banana-shaped toy infused with catnip to delight and calm your feline friend."
    }
  ],
  collars: [
    {
      id: 6,
      title: "Soft Pink Cat Collar with Bell",
      media: { imageUrl: "/assets/accessories/cat-collar-pink.jpg", altText: "Soft pink cat collar" },
      price: 12.99,
      originalPrice: 17.99,
      discount: 28,
      rating: 5,
      category: "Collars",
      productLink: "/products/cat-collar-pink",
      description: "Elegant faux leather design with a silver bell and gold buckle — stylish comfort for your cat."
    },
    {
      id: 7,
      title: "Adjustable Blue Nylon Cat Collar",
      media: { imageUrl: "/assets/accessories/cat-collar-blue.jpg", altText: "Blue nylon cat collar" },
      price: 10.49,
      originalPrice: 15.00,
      discount: 30,
      rating: 4,
      category: "Collars",
      productLink: "/products/cat-collar-blue",
      description: "Durable and adjustable collar with quick-release buckle and D-ring for ID tags."
    },
    {
      id: 8,
      title: "Reflective Safety Cat Collar",
      media: { imageUrl: "/assets/accessories/cat-collar-reflective.jpg", altText: "Reflective cat collar" },
      price: 11.99,
      originalPrice: 16.99,
      discount: 29,
      rating: 4,
      category: "Collars",
      productLink: "/products/cat-collar-reflective",
      description: "Nylon cat collar with reflective strip for visibility at night. Safe and secure with breakaway buckle."
    },
    {
      id: 9,
      title: "Floral Print Breakaway Collar",
      media: { imageUrl: "/assets/accessories/cat-collar-floral.jpg", altText: "Floral cat collar" },
      price: 13.25,
      originalPrice: 18.75,
      discount: 29,
      rating: 5,
      category: "Collars",
      productLink: "/products/cat-collar-floral",
      description: "Cute floral patterned collar with bell and breakaway clip for a safe and stylish look."
    },
    {
      id: 10,
      title: "Leather Cat Collar with Tag Ring",
      media: { imageUrl: "/assets/accessories/cat-collar-leather.jpg", altText: "Leather cat collar" },
      price: 14.99,
      originalPrice: 20.00,
      discount: 25,
      rating: 4,
      category: "Collars",
      productLink: "/products/cat-collar-leather",
      description: "Genuine leather collar with a metal ring for name tag attachment. Soft, elegant, and long-lasting."
    }
  ],
  beds: [
    {
      id: 11,
      title: "Luxury Round Cat Bed",
      media: { imageUrl: "/assets/accessories/cat-bed-luxury.jpg", altText: "Luxury cat bed" },
      price: 45.00,
      originalPrice: 65.00,
      discount: 31,
      rating: 5,
      category: "Beds",
      productLink: "/products/cat-bed-luxury",
      description: "Ultra-soft donut-shaped bed with raised edges for support. Warm, fluffy, and comforting for pets."
    },
    {
      id: 12,
      title: "Foldable Travel Cat Bed",
      media: { imageUrl: "/assets/accessories/cat-bed-travel.jpg", altText: "Travel cat bed" },
      price: 38.99,
      originalPrice: 54.99,
      discount: 29,
      rating: 4,
      category: "Beds",
      productLink: "/products/cat-bed-travel",
      description: "Portable and lightweight travel bed with waterproof base. Perfect for home or adventure."
    },
    {
      id: 13,
      title: "Warm Plush Cat Cave Bed",
      media: { imageUrl: "/assets/accessories/cat-bed-cave.jpg", altText: "Cat cave bed" },
      price: 49.00,
      originalPrice: 68.00,
      discount: 28,
      rating: 5,
      category: "Beds",
      productLink: "/products/cat-bed-cave",
      description: "Cozy enclosed cave-style bed offering warmth, security, and privacy for restful cat naps."
    },
    {
      id: 14,
      title: "Cooling Gel Pet Mattress",
      media: { imageUrl: "/assets/accessories/cat-bed-cool.jpg", altText: "Cooling pet bed" },
      price: 35.00,
      originalPrice: 50.00,
      discount: 30,
      rating: 4,
      category: "Beds",
      productLink: "/products/cat-bed-cool",
      description: "Soft flat cooling pad filled with gel. Ideal for summer comfort and temperature control."
    },
    {
      id: 15,
      title: "Heated Winter Cat Bed",
      media: { imageUrl: "/assets/accessories/cat-bed-heated.jpg", altText: "Heated cat bed" },
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      rating: 5,
      category: "Beds",
      productLink: "/products/cat-bed-heated",
      description: "Plug-in heated bed with fleece lining — ideal for senior pets or cold weather comfort."
    }
  ]
};
// media breaker config per category
const mediaBreakerConfig: Record<string, unknown> = {
  collars: {
    variant: "slim",
    media: {
      src: "/assets/mediabreaker/collars.jpg",
      alt: "Soft pink cat collar with bell"
    },
    title: "Adjustable Pet Sunglasses",
    description: "Stylish round sunglasses with cute cat ear frames — perfect blend of fun and UV protection for your pet."
  },
  beds: {
    variant: "slim",
    media: {
      src: "/assets/mediabreaker/plushbed.jpg",
      alt: "Warm Plush Cat Bed"
    },
    title: "Cozy Plush Cat Beds",
    description: "Give your cat the warmest naps with our ultra-soft plush beds."
  },
  toys: {
    variant: "slim",
    media: {
      src: "/assets/mediabreaker/wandtoy.png",
      alt: "Interactive Feather Wand Toy"
    },
    title: "Playtime Favorites",
    description: "Engage your pets with colorful, fun toys designed for endless entertainment and bonding."
  }
};

const isValidCategory = (value: string): value is ProductCategory => {
  return ["toys", "collars", 'beds'].includes(value);
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category")?.toLowerCase() ?? '';
  let mediaBreaker = {};
  let productsData: Product[] = [];

  if (category && isValidCategory(category)) {
    productsData = allProducts[category];
  }

  if (category && isValidCategory(category)) {
    productsData = allProducts[category];
    mediaBreaker = mediaBreakerConfig[category] ?? {};
  }

  return NextResponse.json({
    category,
    productsData,
    mediaBreaker,
  });
}
