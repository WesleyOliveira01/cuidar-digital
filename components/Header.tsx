import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-7 bg-sky-300 ">
      <section className="flex gap-2 ">
        <HeartHandshake size={64} color="#f87171" />
        <div className="flex flex-col items-start justify-center leading-3 text-center font-bold  text-white">
          <h1 className="text-2xl">Cuidar digital</h1>
          <h2>Telemedicina e saúde digital</h2>
        </div>
      </section>
      <section>
        <Button variant={"destructive"}>
          <Link href="#contactForm">Agende Sua Consulta Virtual Agora</Link>
        </Button>
      </section>
    </header>
  );
};

export default Header;
