import { ReactNode } from "react";

const ServiceCard = ({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <section className="flex gap-4 bg-sky-50 p-4 rounded-lg shadow-md">
      <div className="w-[25%] flex items-center justify-center text-sky-500">
        {children}
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="text-2xl font-semibold text-sky-500">{title}</h1>
        <p className="text-sky-600">{description}</p>
      </div>
    </section>
  );
};

export default ServiceCard;
