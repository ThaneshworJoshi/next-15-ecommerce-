export type ContactFormProps = {
  data: {
    media: {
      img: string;
      alt: string;
    };
    firstname: string;
  };
  event: {
      onSubmit?: (data: { fullname: string; email: string; message: string }) => void;
  };  
};
