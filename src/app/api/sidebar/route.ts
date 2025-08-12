import { NextResponse } from "next/server";

// Mock Data for Sidebar
const sidebarData = {
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

export async function GET() {
  return NextResponse.json(sidebarData, { status: 200 });
}
