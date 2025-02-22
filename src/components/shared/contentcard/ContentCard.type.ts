export interface ContentCardProps  {
  variant?: "vertical" | "horizontal";
  title: string;
  description: string;
  icon?: string;
  media?: {
    imageSrc?: string;
    alt?: string;
  };
  date?: string;
  showBorder?: boolean;
};

