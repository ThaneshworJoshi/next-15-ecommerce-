export interface MediaBreakerProps {
  media:{
      src: string;
      alt: string;
  };
  variant?: 'slim' | 'wide';
  title:string;
  description: string;
  events: {
      onClick: () => void;
  };
}
