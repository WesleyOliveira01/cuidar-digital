import Carousel from "@/components/Carousel/_Carousel";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

import Container from "@/components/ui/Container";
import { FileStack, HeartHandshake, HeartPulse, Laptop } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <Carousel />
      <section className="text-slate-950 p-5">
        <h1 className="text-2xl mb-4 font-semibold text-center w-[50%] mx-auto my-10 text-sky-500">
          Acesso Fácil e Personalizado à Saúde, Onde Quer que Você Esteja
        </h1>
        <Container>
          <div className="w-[50%] p-11 ">
            <Image
              src="/doctor.svg"
              className="w-[70%] mx-auto"
              alt="figura"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[50%] py-11 px-2">
            <h1 className="text-2xl font-semibold mb-4 text-sky-500 text-center">
              Enfrentando Dificuldades para Acessar Cuidados Médicos de
              Qualidade?
            </h1>
            <p className="text-xl text-center mx-auto text-sky-600">
              Se você vive em uma área remota ou tem mobilidade reduzida, sabe
              como é difícil manter consultas médicas regulares e monitorar sua
              saúde. Essas barreiras podem atrasar diagnósticos e comprometer
              tratamentos importantes.
            </p>
          </div>
        </Container>

        <Container>
          <div className="w-[50%] py-11 px-2">
            <h1 className="text-2xl mb-4  font-semibold text-sky-500">
              <strong>Nossa Solução:</strong> Cuidado Continuado e Remoto de
              Saúde
            </h1>
            <p className="text-xl text-center mx-auto text-sky-600">
              Oferecemos uma plataforma de saúde digital integrada que combina
              telemedicina, dispositivos vestíveis e monitoramento remoto. Com
              nossa solução, você pode:
            </p>
            <ul className="list-disc ml-8 mt-6 text-xl flex flex-col gap-2 text-sky-600" >
              <li>
                Realizar{" "}
                <strong className="text-sky-500">
                  consultas médicas virtuais
                </strong>{" "}
                de qualquer lugar.
              </li>
              <li>
                <strong className="text-sky-500">Monitorar sua saúde</strong> em
                tempo real através de dispositivos vestíveis.
              </li>
              <li>
                Receber{" "}
                <strong className="text-sky-500">
                  análises e relatórios personalizados
                </strong>{" "}
                para ajustar rapidamente seu tratamento.
              </li>
            </ul>
          </div>
          <div className="w-[50%] p-11">
            <Image
              src="/doctor4.svg"
              className="w-[70%] mx-auto"
              alt="figura"
              width={100}
              height={100}
            />
          </div>
        </Container>
        <Container>
          <div className="w-[50%] p-11">
            <Image
              src="/doctor4.svg"
              className="w-[70%] mx-auto"
              alt="figura"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[50%] py-11 px-2">
            <h1 className="text-2xl text-center text-sky-500 font-semibold">
              O Que Nos Diferencia?
            </h1>
            <p className="text-xl text-center mx-auto text-sky-600">
              Ao contrário de serviços como Teladoc, que se concentram apenas em
              consultas virtuais, nossa solução vai além, integrando
              dispositivos vestíveis para monitoramento contínuo. Isso permite
              um acompanhamento diário e mais preciso, especialmente para a
              gestão de condições crônicas.
            </p>
          </div>
        </Container>
        <Container>
          <div className="w-[70%] py-11 px-2 mx-auto">
            <h1 className="text-4xl mb-4 font-semibold text-center w-[50%] mx-auto my-10 text-sky-500">
              Nossos serviços
            </h1>
            <section className="grid grid-cols-2 gap-14 mt-10">
              <ServiceCard
                title="Telemedicina"
                description="Acesso fácil a consultas virtuais com profissionais de saúde qualificados, sem sair de casa."
              >
                <Laptop size={70} />
              </ServiceCard>
              <ServiceCard
                title="Monitoramento com Dispositivos Vestíveis"
                description="Acompanhe seus sinais vitais e condições de saúde diariamente, usando nossos dispositivos conectados."
              >
                <HeartPulse size={70} />
              </ServiceCard>
              <ServiceCard
                title="Relatórios Personalizados"
                description="Receba relatórios detalhados sobre sua saúde, com análises personalizadas que ajudam no ajuste de tratamentos de forma rápida e precisa."
              >
                <FileStack size={70} />
              </ServiceCard>
              <ServiceCard
                title="Suporte Contínuo"
                description="Nossa equipe está disponível para ajudar você a gerenciar sua saúde remotamente, garantindo que você receba o melhor atendimento possível."
              >
                <HeartHandshake size={70} />
              </ServiceCard>
            </section>
          </div>
        </Container>
        <Container>
          <div className="w-[50%] py-11 px-4">
            <h1 className="text-sky-500 text-2xl font-semibold text-center">
              Transforme a Gestão da Sua Saúde Hoje!
            </h1>
            <p className="w-[80%] text-xl text-center mx-auto text-sky-600">
              Não espere mais para melhorar sua qualidade de vida. Inscreva-se
              agora e comece a monitorar sua saúde de forma contínua e
              eficiente!
            </p>
          </div>
          <div className="w-[50%] py-11 px-4">
            <h1 className="text-sky-500 font-semibold text-2xl text-center mb-2">Preencha o Formulário Abaixo para Saber Mais:</h1>
            <form
              action=""
              className="flex flex-col gap-2 bg-sky-400 p-5 rounded-lg shadow-lg w-[70%] mx-auto"
              id="contactForm"
            >
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="Nome" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Email" />
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Telefone"
              />
              <label htmlFor="mensagem">
                Qual sua principal necessidade de saúde?:
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                cols={30}
                rows={10}
                placeholder="Mensagem"
              ></textarea>
              <Button variant="destructive" type="submit">
                Quero Saber Mais!
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
