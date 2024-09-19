"use client";
import { sendEmail } from "@/actions/sendEmail";
import { formSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import Input from "./ui/Input";

const CTAForm = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  return (
    <form
      action={sendEmail}
      className="flex flex-col gap-2 bg-sky-400 p-5 rounded-lg shadow-lg w-[70%] mx-auto"
      id="contactForm"
    >
      <Input
        label="Nome"
        forElement="nome"
        {...register("name")}
        error_message={errors.name?.message}
      />
      <Input
        label="E-mail"
        forElement="email"
        type="email"
        {...register("email")}
        error_message={errors.email?.message}
      />
      <Input
        label="Telefone"
        type="tel"
        forElement="telefone"
        {...register("telefone")}
      />
      <label htmlFor="mensagem" className="text-sky-50 font-semibold">
        Qual sua principal necessidade de saúde?:
      </label>
      <textarea
        id="mensagem"
        cols={30}
        rows={10}
        placeholder="Mensagem"
        {...register("message")}
      ></textarea>
      <Button variant="destructive" type="submit" disabled={!isValid}>
        Quero Saber Mais!
      </Button>
    </form>
  );
};

export default CTAForm;
