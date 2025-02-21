export interface MediaBreakerProps {
  media:{
      src: string;
      alt: string;
  };
  title:string;
  description: string;
  events: {
      onClick: () => void;
  };
}
