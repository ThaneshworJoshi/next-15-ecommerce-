import React from "react";
import ContentCard from "../contentcard/ContentCard.compnent";
import { ContentCardRowProps } from "./ContentCardRow.type";

export const ContentCardRow: React.FC<ContentCardRowProps> = ({ title, cards }) => {
  return (
    <section className="container mx-auto my-10 px-4">
      {/* Title */}
      {title && <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">{title}</h2>
}
      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <ContentCard key={index} {...card} showBorder={false} />
        ))}
      </div>
    </section>
  );
};

export default ContentCardRow;
