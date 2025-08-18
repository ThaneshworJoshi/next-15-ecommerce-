export interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: { rating: number; text: string }) => Promise<void> | void;
  className?: string;
  isSubmitting: boolean;
  error?: string;
}