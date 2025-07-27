import { ContentCardRow, BestSeller, FeaturedProductCard, FeaturedProductCardProps, MiniProductCardRow } from "@/components";
import HeroBanner from "@/components/herobanner/HeroBanner.componet";
import { MediaBreaker } from "@/components/shared/mediabreaker";
import { Suspense } from "react";
import { getHomepageData } from "@/lib/api";

export default async function HomePage() {
  const data = await getHomepageData();

  if (!data) return <p className="text-center text-red-500">Error loading data.</p>;

  return (
    <div className="mx-auto">
      <HeroBanner title="Super Flash Sale 50% Off" media={{ imageUrl: "/herobanner1.jpg", altText: "hero banner alt" }} />

      {/* Dynamic Data: Featured Products */}
      <div className="relative flex justify-center flex-wrap mt-0 md:-mt-20 z-20">
        {data.featuredProducts.map((product: FeaturedProductCardProps, index: number) => (
          <FeaturedProductCard key={index} {...product} />
        ))}
      </div>

      {/* Dynamic Data (fetched Client-Side) */}
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <BestSeller />
      </Suspense>
     
      <div className="h-10"></div>

      <MiniProductCardRow {...data.miniProductCardRowData} />

      <div className="h-10"></div>
  

      {/* Media Breaker */}
      <MediaBreaker
        media={{ src: "/assets/accessories/glasspng.png", alt: "Soft pink cat collar with bell" }}
        title= "Adjustable Pet Sunglasses"
        description= "Stylish round sunglasses with cute cat ear frames — perfect blend of fun and UV protection for your pet."
        events={{ onClick: () => {} }}
      />

      <div className="h-10"></div>

      {/* Vertical Content Cards */}
      <ContentCardRow cards={data.cardsDataV} />


      {/* Mini Product Card Row */}
      <MiniProductCardRow {...data.miniProductCardRowData} />
    </div>
  );
}
