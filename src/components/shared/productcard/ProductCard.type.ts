export interface ProductCardProps {
  title: string;
  price: number;
  productLink: string;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  isHot?: boolean;
  media: {
    imageUrl: string;
    altText: string;
  };
}
