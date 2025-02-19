export interface ProductCardProps {
  title: string;
  price: number;
  productLink: string;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  isHot?: boolean;
  variant?: 'vertical' | 'horizontal';
  description?: string;
  media: {
    imageUrl: string;
    altText: string;
  };
  events: {
    onAddToCart: () => void;
    onAddToWishlist: () => void;
  }
}
