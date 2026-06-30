"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitContactForm } from "@/lib/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  message: string;
  companyWebsite: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
  companyWebsite: "",
};

const formStartedAt = Date.now();

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setFormError(null);

    const result = await submitContactForm({
      ...form,
      formStartedAt,
    });
    setIsLoading(false);

    if (!result.success) {
      setFormError(result.error);
      return;
    }

    setIsSuccess(true);
    setForm(initialForm);
  }

  if (isSuccess) {
    return (
      <div className="buxmate-card flex flex-col items-center p-8 text-center sm:p-10">
        <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-brand-muted text-primary">
          <CheckCircle2 className="size-7" aria-hidden />
        </div>
        <h2 className="font-heading text-xl font-semibold text-foreground">
          Message sent
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for getting in touch. We&apos;ll get back to you as soon as we
          can.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 rounded-full normal-case tracking-normal"
          onClick={() => setIsSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="buxmate-card space-y-5 p-6 sm:p-8">
      {formError ? (
        <div
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {formError}
        </div>
      ) : null}

      <div className="hidden" aria-hidden>
        <Label htmlFor="companyWebsite">Company website</Label>
        <Input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={form.companyWebsite}
          onChange={(e) => updateField("companyWebsite", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-4"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p className="text-sm text-destructive">{errors.name}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-4"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <p className="text-sm text-destructive">{errors.email}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="min-h-32 rounded-xl border border-border bg-background px-4 py-3"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="text-sm text-destructive">{errors.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="h-11 w-full rounded-full text-base normal-case tracking-normal"
      >
        {isLoading ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
