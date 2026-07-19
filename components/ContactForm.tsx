"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9()+\-.\s]{7,}$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

// Order matches the checks in validate() above, so focus lands on
// whichever field the user would hit first when fixing errors top-to-bottom.
const validationOrder: (keyof FormState)[] = ["name", "email", "phone", "message"];

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(field: keyof FormState) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = validationOrder.find((field) => validationErrors[field]);
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.focus();
      }
      return;
    }

    setStatus("submitting");

    // TODO: Wire this up to a real backend/email service, e.g.:
    //   - Resend (https://resend.com) via a Next.js Route Handler
    //   - Formspree (https://formspree.io) form endpoint
    //   - EmailJS (https://www.emailjs.com) client-side send
    // For now we just simulate a network request.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    setValues(initialState);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-brand-600" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-brand-900">
          Message Sent
        </h3>
        <p className="max-w-sm text-sm text-brand-800/70">
          Thanks for reaching out! Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-600 underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-800">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-coral-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-800">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-coral-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-800">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-coral-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-brand-800">
              Preferred Date
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={values.preferredDate}
              onChange={handleChange("preferredDate")}
              className="mt-1.5 w-full rounded-xl border border-brand-200 px-3 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-brand-800">
              Preferred Time
            </label>
            <input
              id="preferredTime"
              name="preferredTime"
              type="time"
              value={values.preferredTime}
              onChange={handleChange("preferredTime")}
              className="mt-1.5 w-full rounded-xl border border-brand-200 px-3 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5 w-full resize-none rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-coral-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
