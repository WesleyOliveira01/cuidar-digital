import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formSchema = z.object({
  name: z.string({ required_error: "O nome é obrigatório" }),
  email: z
    .string({ required_error: "O e-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
  telefone: z.string({ required_error: "O telefone é obrigatório" }),
  message: z.string({ required_error: "A mensagem é obrigatória" }),
});
