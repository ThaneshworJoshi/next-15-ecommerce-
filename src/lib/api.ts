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