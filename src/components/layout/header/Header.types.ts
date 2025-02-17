export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  navItems: NavItem[];
  cartItemCount: number;
  cartTotal: string;
  categoryData?: Record<string, string[]>;
}
