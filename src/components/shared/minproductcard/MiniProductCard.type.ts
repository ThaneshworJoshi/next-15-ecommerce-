export interface MiniProductCardProps  {
  title: string;
  rating: number;
  originalPrice: number;
  price: number;
  productLink: string;
  media: {
    imageSrc: string;
    alt?: string;
  };
};
