"use server";

import nodemailer from "nodemailer";

export async function sendEmail(data: FormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.get("email") as string,
    subject: "Agradecimento pela participação na pesquisa",
    text: `Olá ${
      data.get("name") as string
    },\n\nObrigado por participar da nossa pesquisa!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
}
