"use client";
import CarouselCard from "@/components/CarouselCard";
import Autoplay from "embla-carousel-autoplay";
import { Carousel as _Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { carouselContent } from "./carouselUtils";
const Carousel = () => {
  return (
    <_Carousel
      className="w-full"
      opts={{ loop: true, align: "center" }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {carouselContent.map((item, index) => (
          <CarouselItem key={index}>
            <CarouselCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </_Carousel>
  );
};

export default Carousel;
