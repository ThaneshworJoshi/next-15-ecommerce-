export interface Product {
  id: number;
  title: string;
  media: {
    imageUrl: string;
    altText: string;
  };
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  category: string;
  productLink: string;
  description: string;
}

export interface SidebarData {
  hotdeals: any[];
  categories: any[];
  brands: any[];
  colors: any[];
}

export interface SidebarConfig {
  showCategories?: boolean;
  showColors?: boolean;
  showPriceRange?: boolean;
  showBrands?: boolean;
  showHotDeals?: boolean;
  defaultExpanded?: string[];
}

export interface CategoryClientProps {
  products: Product[];
  category: string;
  totalProducts: number;
  mediaBreaker: any;
  sidebarData: SidebarData;
  sidebarConfig?: SidebarConfig;
}

export interface MediaBreakerData {
  [key: string]: any;
} 