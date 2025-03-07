import Image from "next/image";
import { MediaBreakerProps } from "./MediaBreaker.type";
import { Button } from "@/components/ui/button";

export const MediaBreaker: React.FC<MediaBreakerProps> = ({
  media,
  title,
  description,
  variant = "wide",
}) => {
  console.log(variant, "variant");

  return (
    <section className="container max-w-[1800px] bg-primary mx-auto">
      <div
        className={`flex flex-col pb-8 md:pb-0 md:flex-row items-center gap-6 text-primary-foreground 
          ${variant === "slim" ? "aspect-[960/290]" : "aspect-[1500/654]"}`}
      >
        {/* Text Content */}
        <div className="flex-1 text-left mb-8 sm:mb-0 ml-0 md:ml-10 lg:ml-20 order-2 md:order-1">
          <h2
            className={`${
              variant === "slim"
                ? "text-xl lg:text-3xl"
                : "text-3xl sm:text-4xl xl:text-6xl"
            } font-medium mb-4 leading-[1] xl:leading-[1.5]`}
          >
            {title}
          </h2>
          <p
            className={`${
              variant === "slim" ? "text-sm lg:text-base" : "text-lg md:text-2xl"
            }`}
          >
            {description}
          </p>

          {/* Call-to-Action Button */}
          <Button
            variant="ghost"
            className="relative p-0 font-semibold transition text-white hover:text-primary-dark hover:bg-transparent group"
          >
            Shop now
            <span className="absolute left-0 bottom-0 h-[2px] bg-white w-2/3 transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </div>

        {/* Media (Fixed Image Issue) */}
        <div className="relative w-full h-44 md:h-full md:w-1/2 order-1 md:order-2">
          <Image
            src={media.src}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaBreaker;
