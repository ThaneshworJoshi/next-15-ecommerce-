import React from "react";
import { MiniProductCardRowProps } from "./MiniProductCardRow.type";
import { MiniProductCard } from "../minproductcard";

export const MiniProductCardRow: React.FC<MiniProductCardRowProps> = ({ title, products }) => {
  return (
    <section className="container mx-auto my-10 px-4">
      {/* Title */}
      {title && <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">{title}</h2>
}
      {/* Grid Layout for products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <MiniProductCard key={index} {...product}/>
        ))}
      </div>
    </section>
  );
};

export default MiniProductCardRow;
