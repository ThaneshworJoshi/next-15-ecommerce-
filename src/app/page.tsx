import { FeaturedProductCard } from "@/components";
import HeroBanner from "@/components/herobanner/HeroBanner.componet";

export default function Home() {
  const products = [
    {
      title: "FS - Nike Air Max 270 React",
      imageUrl: "./assets/shoes1.png",
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
  ];

  return <div className="mx-auto">
    <HeroBanner title="Super Flash Sale 50% Off" media={{
      imageUrl: "./herobanner-img.png",
      altText: "hero banner alt"
    }} />
    {/* Product Cards Section */}
    <div className="relative flex justify-center flex-wrap mt-0 md:-mt-20 z-20">
      {products.map((product, index) => (
        <FeaturedProductCard key={index} {...product} />
      ))}
    </div>
  </div>;
}
