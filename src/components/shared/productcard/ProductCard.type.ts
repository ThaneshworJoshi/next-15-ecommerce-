export interface ProductCardProps {
  id?: number;
  title: string;
  price: number;
  productLink: string;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  isHot?: boolean;
  variant?: 'vertical' | 'horizontal';
  description?: string;
  category?: string;
  media: {
    imageUrl: string;
    altText: string;
  };
  events?: {
    onAddToCart: () => void;
    onAddToWishlist: () => void;
  }
}
