import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface ContentCardProps  {
  variant?: "vertical" | "horizontal";
  title: string;
  description: string;
  icon?: LucideIcon | IconType;
  media?: {
    imageSrc?: string;
    alt?: string;
  };
  date?: string;
  showBorder?: boolean;
};

