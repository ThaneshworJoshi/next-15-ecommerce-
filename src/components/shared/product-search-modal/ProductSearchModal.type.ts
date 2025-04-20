export interface ProductSearchModalProps {
  data: {
      searchHistory?: ProductSearchHistory[];
      isOpen: boolean
  };
  events: {
    onClose: () => void;
    onSearch?: (item: ProductSearchHistory) => void;
    onDelete?: (item: ProductSearchHistory) => void;
    onClearHistory?: () => void;
  }
}

export interface ProductSearchHistory {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
}
