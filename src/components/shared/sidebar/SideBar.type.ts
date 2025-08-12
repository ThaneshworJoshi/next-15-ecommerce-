export interface SidebarProps {
  hotDeals: { id: number; name: string; slug: string; dealCounts?: number }[];
  categories: { id: number; name: string; slug: string }[];
  brands: { id: number; name: string; slug: string; dealCounts?: number }[];
  colors: { id: number; name: string; hex: string }[];
}

export interface FilterState {
  colors: string[];
  brands: string[];
  categories: string[];
  priceRange: [number, number];
}
  
export interface SidebarItemProps {
  icon?: React.ReactNode;
  text: string;
  link: string;
  count?: number;
  onClick?: () => void;
  isSelected?: boolean;
}