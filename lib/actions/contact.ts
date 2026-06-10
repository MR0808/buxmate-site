"use server";

import { getEmailFrom, getResendClient } from "@/lib/email/resend";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/validations/contact";

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

export async function submitContactForm(
  input: ContactFormInput,
): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(input);
  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return { success: false, error: message };
  }

  const { name, email, message } = parsed.data;

  try {
    const resend = getResendClient();
    const from = getEmailFrom();

    const { error } = await resend.emails.send({
      from,
      to: from,
      replyTo: email,
      subject: `Buxmate contact — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "We couldn't send your message. Please try again shortly.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      error: "Contact form is temporarily unavailable. Please email us directly.",
    };
  }
}
