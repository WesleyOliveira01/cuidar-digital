import Image from "next/image";
import { CarouselItem } from "./ui/carousel";

interface CarouselCardProps {
  image: string;
  title: string;
  description: string;
}

const CarouselCard = ({ title, description, image }: CarouselCardProps) => {
  return (
    <CarouselItem className="flex bg-sky-50 max-h-[450px] w-full">
      <section className="w-[50%] flex flex-col items-start justify-center leading-3 text-slate-950  text-center">
        <h2 className="text-4xl font-bold mx-auto text-sky-500">{title}</h2>
        <p className="text-xl w-[70%]  mx-auto text-sky-600">{description}</p>
      </section>
      <Image
        className="w-[50%]"
        src={image}
        alt={title}
        width={400}
        height={300}
      />
    </CarouselItem>
  );
};

export default CarouselCard;
