"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const limits = { name: 100, email: 200, message: 5000 };

export type ContactState = "ok" | "invalid" | "failed" | null;

export async function sendMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (String(formData.get("company") ?? "").trim()) return "ok";

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) return "invalid";
  if (!emailPattern.test(email)) return "invalid";
  if (
    name.length > limits.name ||
    email.length > limits.email ||
    message.length > limits.message
  )
    return "invalid";

  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!from || !to) {
    console.error("Brakuje CONTACT_FROM_EMAIL lub CONTACT_TO_EMAIL");
    return "failed";
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio – wiadomość od ${name}`,
    text: `${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error(error);
    return "failed";
  }

  return "ok";
}
