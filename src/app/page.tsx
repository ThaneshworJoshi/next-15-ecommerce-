import { ContentCardRow, DynamicHomeContent, MiniProductCardRow } from "@/components";
import HeroBanner from "@/components/herobanner/HeroBanner.componet";
import { MediaBreaker } from "@/components/shared/mediabreaker";
import { Suspense } from "react";

async function getHomepageData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage`, {
      cache: "no-store", // Prevent caching issues
    });

    if (!response.ok) {
      throw new Error("Failed to fetch homepage data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
}

export default async function HomePage() {
  const data = await getHomepageData();

  if (!data) return <p className="text-center text-red-500">Error loading data.</p>;

  return (
    <div className="mx-auto">
      <HeroBanner title="Super Flash Sale 50% Off" media={{ imageUrl: "./herobanner-img.png", altText: "hero banner alt" }} />

      {/* Dynamic Data (fetched Client-Side) */}
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <DynamicHomeContent />
      </Suspense>
     
      <div className="h-10"></div>

      {/* Media Breaker */}
      <MediaBreaker
        media={{ src: "/assets/mb-shoe.png", alt: "" }}
        title="Adidas Men Running Sneakers"
        description="Performance and design. Taken right to the edge."
        events={{ onClick: () => {} }}
      />

      <div className="h-10"></div>

      {/* Vertical Content Cards */}
      <ContentCardRow cards={data.cardsDataV} />

      {/* Latest News (Horizontal Content Cards) */}
      <ContentCardRow title="LATEST NEWS" cards={data.cardsDataH} />

      {/* Mini Product Card Row */}
      <MiniProductCardRow {...data.miniProductCardRowData} />
    </div>
  );
}
