// API layer for backend communication
const BACKEND_BASE_URL = process.env.BACKEND_API_URL || 'https://your-backend-api.com';

export async function fetchFromBackend(endpoint: string, options: RequestInit = {}) {
  const url = `${BACKEND_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Backend API error: ${response.status}`);
  }

  return response.json();
}

// For server-side rendering (direct backend call)
export async function getHomepageData() {
  // If we have a backend API, use it; otherwise use static data
  if (process.env.BACKEND_API_URL) {
    return fetchFromBackend('/homepage');
  }
  
  // Fallback to static data (your current API route data)
  return {
    featuredProducts: [
      {
        title: "Soft Pink Cat Collar with Bell",
        imageUrl: "./assets/accessories/cat-collar-pink.jpg",
        price: 14.99,
        originalPrice: 19.99,
        discount: 25,
        productLink: "/products/soft-pink-cat-collar"
      },
      {
        title: "Plush Feather Cat Toy Set",
        imageUrl: "./assets/accessories/cat-toy-set.jpg",
        price: 18.75,
        originalPrice: 24.99,
        discount: 25,
        productLink: "/products/plush-feather-cat-toy"
      },
      {
        title: "Blue Cat Harness and Leash",
        imageUrl: "./assets/accessories/cat-harness-blue.jpg",
        price: 22.50,
        originalPrice: 30.00,
        discount: 25,
        productLink: "/products/blue-cat-harness"
      }
    ],
    // ... rest of your static data
    miniProductCardRowData: {
      title: "Featured Products",
      products: [
        {
          title: "Soft Pink Cat Collar",
          rating: 5,
          originalPrice: 17.99,
          price: 12.99,
          productLink: "/products/cat-collar-pink",
          media: { imageSrc: "/assets/accessories/cat-collar-pink.jpg", alt: "Soft pink cat collar with bell" }
        },
        {
          title: "Adjustable Blue Nylon Collar",
          rating: 4,
          originalPrice: 15.00,
          price: 10.49,
          productLink: "/products/cat-collar-blue",
          media: { imageSrc: "/assets/accessories/cat-collar-blue.jpg", alt: "Adjustable blue nylon cat collar" }
        },
        {
          title: "Floral Print Breakaway Collar",
          rating: 5,
          originalPrice: 18.75,
          price: 13.25,
          productLink: "/products/cat-collar-floral",
          media: { imageSrc: "/assets/accessories/cat-collar-floral.jpg", alt: "Floral print breakaway cat collar" }
        }
      ]
    },
    cardsDataV: [
      {
        title: "FREE SHIPPING",
        description: "Enjoy free shipping on all pet accessories—delivered right to your doorstep.",
        icon: 'FaShippingFast',
      },
      {
        title: "100% REFUND",
        description: "Not satisfied? We offer a full refund on all returns—no questions asked.",
        icon: 'RiRefund2Line',
      },
      {
        title: "SUPPORT 24/7",
        description: "Our pet care team is here for you anytime—chat, call, or email us 24/7.",
        icon: 'MdOutlineSupportAgent',
      }
    ],
  };
}

export async function getProducts() {
  if (process.env.BACKEND_API_URL) {
    return fetchFromBackend('/products');
  }
  // Return static products data
  return [];
}

export async function getCategories() {
  if (process.env.BACKEND_API_URL) {
    return fetchFromBackend('/categories');
  }
  // Return static categories data
  return ["All", "Collars", "Toys", "Clothing", "Accessories"];
}

export async function getCategoryData(category: string) {
  if (process.env.BACKEND_API_URL) {
    return fetchFromBackend(`/category?category=${category}`);
  }
  
  // Static category data (from your API route)
  const allProducts: Record<string, any[]> = {
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
      },
      {
        id: 16,
        title: "Laser Pointer Toy",
        media: { imageUrl: "/assets/accessories/cat-laser-toy.jpg", altText: "Laser pointer toy" },
        price: 7.99,
        originalPrice: 11.99,
        discount: 33,
        rating: 4,
        category: "Toys",
        productLink: "/products/laser-pointer-toy",
        description: "Red laser pointer for interactive play sessions with your cat."
      },
      {
        id: 17,
        title: "Cat Teaser Wand",
        media: { imageUrl: "/assets/accessories/feather-wand.jpg", altText: "Cat teaser wand" },
        price: 6.49,
        originalPrice: 9.99,
        discount: 35,
        rating: 5,
        category: "Toys",
        productLink: "/products/cat-teaser-wand",
        description: "Retractable wand with colorful feathers for endless playtime."
      },
      {
        id: 18,
        title: "Squeaky Mouse Toy",
        media: { imageUrl: "/assets/accessories/cat-toy-set2.jpg", altText: "Squeaky mouse toy" },
        price: 4.99,
        originalPrice: 7.49,
        discount: 33,
        rating: 4,
        category: "Toys",
        productLink: "/products/squeaky-mouse-toy",
        description: "Realistic mouse toy with squeaker for hunting simulation."
      },
      {
        id: 19,
        title: "Cat Ball Track",
        media: { imageUrl: "/assets/accessories/cat-toy-set3.jpg", altText: "Cat ball track" },
        price: 22.99,
        originalPrice: 32.99,
        discount: 30,
        rating: 5,
        category: "Toys",
        productLink: "/products/cat-ball-track",
        description: "Interactive ball track with multiple levels and obstacles."
      },
      {
        id: 20,
        title: "Catnip Fish Toy",
        media: { imageUrl: "/assets/accessories/cat-toy-set4.jpg", altText: "Catnip fish toy" },
        price: 8.99,
        originalPrice: 12.99,
        discount: 31,
        rating: 4,
        category: "Toys",
        productLink: "/products/catnip-fish-toy",
        description: "Fish-shaped toy filled with premium catnip for maximum enjoyment."
      },
      {
        id: 21,
        title: "Bell Ball Set",
        media: { imageUrl: "/assets/accessories/cat-toy-set5.jpg", altText: "Bell ball set" },
        price: 11.49,
        originalPrice: 16.99,
        discount: 32,
        rating: 4,
        category: "Toys",
        productLink: "/products/bell-ball-set",
        description: "Set of colorful balls with jingling bells inside."
      },
      {
        id: 22,
        title: "Cat Puzzle Feeder",
        media: { imageUrl: "/assets/accessories/cat-toy-set6.jpg", altText: "Cat puzzle feeder" },
        price: 15.99,
        originalPrice: 23.99,
        discount: 33,
        rating: 5,
        category: "Toys",
        productLink: "/products/cat-puzzle-feeder",
        description: "Interactive puzzle feeder that stimulates your cat's mind."
      },
      {
        id: 23,
        title: "Catnip Butterfly",
        media: { imageUrl: "/assets/accessories/cat-toy-set1.jpg", altText: "Catnip butterfly" },
        price: 5.99,
        originalPrice: 8.99,
        discount: 33,
        rating: 4,
        category: "Toys",
        productLink: "/products/catnip-butterfly",
        description: "Butterfly-shaped toy with catnip for playful flying simulation."
      },
      {
        id: 24,
        title: "Cat Spring Toy",
        media: { imageUrl: "/assets/accessories/cat-toy-set2.jpg", altText: "Cat spring toy" },
        price: 3.99,
        originalPrice: 5.99,
        discount: 33,
        rating: 4,
        category: "Toys",
        productLink: "/products/cat-spring-toy",
        description: "Colorful spring toy that bounces and rolls for endless fun."
      },
      {
        id: 25,
        title: "Cat Rattle Ball",
        media: { imageUrl: "/assets/accessories/cat-toy-set3.jpg", altText: "Cat rattle ball" },
        price: 6.49,
        originalPrice: 9.99,
        discount: 35,
        rating: 4,
        category: "Toys",
        productLink: "/products/cat-rattle-ball",
        description: "Rattle ball with beads inside for auditory stimulation."
      },
      {
        id: 26,
        title: "Cat Chase Toy",
        media: { imageUrl: "/assets/accessories/cat-toy-set4.jpg", altText: "Cat chase toy" },
        price: 9.99,
        originalPrice: 14.99,
        discount: 33,
        rating: 5,
        category: "Toys",
        productLink: "/products/cat-chase-toy",
        description: "Motorized toy that moves around to encourage chasing behavior."
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
      },
      {
        id: 27,
        title: "Pink Cat Collar with Bell",
        media: { imageUrl: "/assets/accessories/cat-collar-pink1.jpg", altText: "Pink cat collar with bell" },
        price: 13.99,
        originalPrice: 18.99,
        discount: 26,
        rating: 5,
        category: "Collars",
        productLink: "/products/pink-cat-collar-bell",
        description: "Adorable pink collar with a silver bell for a cute and stylish look."
      },
      {
        id: 28,
        title: "Reflective Safety Collar",
        media: { imageUrl: "/assets/accessories/cat-collar-reflective.jpg", altText: "Reflective safety collar" },
        price: 12.49,
        originalPrice: 16.99,
        discount: 26,
        rating: 4,
        category: "Collars",
        productLink: "/products/reflective-safety-collar",
        description: "High-visibility reflective collar for outdoor safety."
      },
      {
        id: 29,
        title: "Breakaway Safety Collar",
        media: { imageUrl: "/assets/accessories/cat-collar-blue.jpg", altText: "Breakaway safety collar" },
        price: 11.99,
        originalPrice: 15.99,
        discount: 25,
        rating: 5,
        category: "Collars",
        productLink: "/products/breakaway-safety-collar",
        description: "Safety breakaway collar that releases if caught on something."
      },
      {
        id: 30,
        title: "Velvet Cat Collar",
        media: { imageUrl: "/assets/accessories/cat-collar-floral.jpg", altText: "Velvet cat collar" },
        price: 16.99,
        originalPrice: 22.99,
        discount: 26,
        rating: 4,
        category: "Collars",
        productLink: "/products/velvet-cat-collar",
        description: "Luxurious velvet collar with elegant design and comfortable fit."
      },
      {
        id: 31,
        title: "Nylon Cat Collar",
        media: { imageUrl: "/assets/accessories/cat-collar-pink.jpg", altText: "Nylon cat collar" },
        price: 9.99,
        originalPrice: 13.99,
        discount: 29,
        rating: 4,
        category: "Collars",
        productLink: "/products/nylon-cat-collar",
        description: "Durable nylon collar with quick-release buckle for easy removal."
      },
      {
        id: 32,
        title: "Satin Cat Collar",
        media: { imageUrl: "/assets/accessories/cat-collar-reflective.jpg", altText: "Satin cat collar" },
        price: 18.99,
        originalPrice: 25.99,
        discount: 27,
        rating: 5,
        category: "Collars",
        productLink: "/products/satin-cat-collar",
        description: "Elegant satin collar with a sophisticated look and feel."
      },
      {
        id: 33,
        title: "Adjustable Cat Collar",
        media: { imageUrl: "/assets/accessories/cat-collar-blue.jpg", altText: "Adjustable cat collar" },
        price: 10.49,
        originalPrice: 14.99,
        discount: 30,
        rating: 4,
        category: "Collars",
        productLink: "/products/adjustable-cat-collar",
        description: "Fully adjustable collar with multiple size options for perfect fit."
      },
      {
        id: 34,
        title: "Designer Cat Collar",
        media: { imageUrl: "/assets/accessories/cat-collar-floral.jpg", altText: "Designer cat collar" },
        price: 24.99,
        originalPrice: 34.99,
        discount: 29,
        rating: 5,
        category: "Collars",
        productLink: "/products/designer-cat-collar",
        description: "Premium designer collar with unique patterns and high-quality materials."
      },
      {
        id: 35,
        title: "Lightweight Cat Collar",
        media: { imageUrl: "/assets/accessories/cat-collar-pink.jpg", altText: "Lightweight cat collar" },
        price: 8.99,
        originalPrice: 12.99,
        discount: 31,
        rating: 4,
        category: "Collars",
        productLink: "/products/lightweight-cat-collar",
        description: "Ultra-lightweight collar perfect for small cats and kittens."
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

  const mediaBreakerConfig: Record<string, any> = {
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

  const productsData = allProducts[category] || [];
  const mediaBreaker = mediaBreakerConfig[category] || {};

  return {
    category,
    productsData,
    mediaBreaker,
  };
}

export async function getSidebarData() {
  if (process.env.BACKEND_API_URL) {
    return fetchFromBackend('/sidebar');
  }
  
  // Static sidebar data
  return {
    categories: [
      { id: 1, name: "Hot Deals", slug: "hot-deals" },
      { id: 2, name: "Collars", slug: "collars" },
      { id: 3, name: "Toys", slug: "toys" },
      { id: 4, name: "Beds & Mats", slug: "beds-mats" },
      { id: 5, name: "Accessories", slug: "accessories" },
    ],
    brands: [
      { id: 1, name: "PawPlanet", dealCounts: 12, slug: "pawplanet-deals" },
      { id: 2, name: "WhiskerWorld", dealCounts: 8, slug: "whiskerworld-deals" },
      { id: 3, name: "FurEver", dealCounts: 5, slug: "furever-deals" },
      { id: 4, name: "TailTrend", dealCounts: 16, slug: "tailtrend-deals" },
    ],
    colors: [
      { id: 1, name: "Pink", hex: "#FFC0CB" },
      { id: 2, name: "Blue", hex: "#007BFF" },
      { id: 3, name: "Black", hex: "#000000" },
      { id: 4, name: "White", hex: "#FFFFFF" },
      { id: 5, name: "Yellow", hex: "#FFF600" }
    ],
    hotdeals: [
      { id: 1, name: "PawPlanet", dealCounts: 12, slug: "pawplanet-deals" },
      { id: 2, name: "WhiskerWorld", dealCounts: 8, slug: "whiskerworld-deals" },
      { id: 3, name: "FurEver", dealCounts: 5, slug: "furever-deals" },
      { id: 4, name: "TailTrend", dealCounts: 16, slug: "tailtrend-deals" },
      { id: 5, name: "MeowCo", dealCounts: 7, slug: "meowco-deals" },
      { id: 6, name: "Pawssentials", dealCounts: 10, slug: "pawssentials-deals" },
      { id: 7, name: "CutePaws", dealCounts: 6, slug: "cutepaws-deals" }
    ]
  };
} 