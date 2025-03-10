export interface ProductListHeaderProps {
  totalItems: number;
  onSortChange: (sort: string) => void;
  onItemsPerPageChange: (items: number) => void;
}
