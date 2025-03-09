import { NextResponse } from "next/server";

// Mock Data for Sidebar
const sidebarData = {
  categories: [
    { id: 1, name: "Hot Deals", slug: "hot-deals" },
    { id: 2, name: "Electronics", slug: "electronics" },
    { id: 3, name: "Fashion", slug: "fashion" },
    { id: 4, name: "Home & Kitchen", slug: "home-kitchen" },
  ],
  brands: [
    { id: 1, name: "Nike", dealCounts: 2, slug: "nike-deals" },
    { id: 2, name: "Apple", dealCounts: 44, slug: "apple-deals"},
    { id: 3, name: "Samsung", dealCounts: 5, slug: "samsung-deals"},
    { id: 4, name: "Adisas", dealCounts: 89, slug: "adisas-deals"},
  ],
  colors: [
    { id: 1, name: "Red", hex: "#FF0000" },
    { id: 2, name: "Blue", hex: "#0000FF" },
    { id: 3, name: "Black", hex: "#000000" },
    { id: 4, name: "White", hex: "#FFFFFF" },
  ],
  hotdeals: [
    { id: 1, name: "Nike", dealCounts: 2, slug: "nike-deals" },
    { id: 2, name: "Apple", dealCounts: 44, slug: "apple-deals" },
    { id: 3, name: "Samsung", dealCounts: 5, slug: "samsung-deals" },
    { id: 4, name: "Adisas", dealCounts: 89, slug: "adisas-deals" },
    { id: 5, name: "Vans", dealCounts: 22, slug: "vans-deals" },
    { id: 6, name: "All Stars", dealCounts: 10, slug: "all-star-deals" },
    { id: 7, name: "Sony", dealCounts: 10, slug: "sony-deals" },
  ]
};

export async function GET() {
  return NextResponse.json(sidebarData, { status: 200 });
}
