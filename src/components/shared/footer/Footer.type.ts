export interface FooterProps {
  brand: {
    logoSrc: string;
    name: string;
    description: string;
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
  };
  contact: {
    address: string;
  };
  footerLinks: {
    title: string;
    links: string[];
  }[];
  paymentMethods: {
    src: string;
    alt: string;
  }[];
  copyrightText: string;
};
