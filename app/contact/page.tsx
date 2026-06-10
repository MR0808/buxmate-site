import { ContactForm } from "@/components/contact/contact-form";
import { getSignupUrl } from "@/lib/env";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact | Buxmate",
  description:
    "Get in touch with the Buxmate team — questions, feedback, or support for your private event.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground">
            Get in touch
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Questions about Buxmate, feedback on the product, or help getting
            started? Send us a message and we&apos;ll get back to you.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Organisers looking to create an event can{" "}
            <a
              href={getSignupUrl()}
              className="font-medium text-primary hover:underline"
            >
              sign up directly
            </a>{" "}
            — no need to wait for a reply.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
