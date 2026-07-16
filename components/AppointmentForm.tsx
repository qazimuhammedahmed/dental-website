"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/business";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9()+\-.\s]{7,}$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.service) errors.service = "Please select a service.";
  if (!values.preferredDate) errors.preferredDate = "Please choose a preferred date.";
  return errors;
}

// TODO: Replace this form submission with a real scheduling integration,
// e.g. a Calendly inline embed, NexHealth booking widget, or a Dentrix API
// call. Until then this form only validates client-side and simulates a
// submission — no request is sent anywhere.
export default function AppointmentForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(
    field: keyof FormState
  ) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setValues(initialState);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-600" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-brand-900">
          Request Received
        </h3>
        <p className="max-w-sm text-sm text-brand-800/70">
          Thanks! We&apos;ll reach out shortly to confirm your appointment
          time.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-600 underline underline-offset-2"
        >
          Request another appointment
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ab-name" className="block text-sm font-medium text-brand-800">
            Full Name
          </label>
          <input
            id="ab-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "ab-name-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          {errors.name && (
            <p id="ab-name-error" className="mt-1.5 text-sm text-coral-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="ab-phone" className="block text-sm font-medium text-brand-800">
            Phone Number
          </label>
          <input
            id="ab-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "ab-phone-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          {errors.phone && (
            <p id="ab-phone-error" className="mt-1.5 text-sm text-coral-600">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="ab-email" className="block text-sm font-medium text-brand-800">
          Email Address
        </label>
        <input
          id="ab-email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "ab-email-error" : undefined}
          className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
        {errors.email && (
          <p id="ab-email-error" className="mt-1.5 text-sm text-coral-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ab-service" className="block text-sm font-medium text-brand-800">
          Service Needed
        </label>
        <select
          id="ab-service"
          value={values.service}
          onChange={handleChange("service")}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "ab-service-error" : undefined}
          className="mt-1.5 w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure / General inquiry">Not sure / General inquiry</option>
        </select>
        {errors.service && (
          <p id="ab-service-error" className="mt-1.5 text-sm text-coral-600">
            {errors.service}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ab-date" className="block text-sm font-medium text-brand-800">
            Preferred Date
          </label>
          <input
            id="ab-date"
            type="date"
            value={values.preferredDate}
            onChange={handleChange("preferredDate")}
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? "ab-date-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          {errors.preferredDate && (
            <p id="ab-date-error" className="mt-1.5 text-sm text-coral-600">
              {errors.preferredDate}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="ab-time" className="block text-sm font-medium text-brand-800">
            Preferred Time
          </label>
          <input
            id="ab-time"
            type="time"
            value={values.preferredTime}
            onChange={handleChange("preferredTime")}
            className="mt-1.5 w-full rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ab-notes" className="block text-sm font-medium text-brand-800">
          Notes <span className="font-normal text-brand-700/50">(optional)</span>
        </label>
        <textarea
          id="ab-notes"
          rows={4}
          value={values.notes}
          onChange={handleChange("notes")}
          placeholder="Let us know anything else that would help us prepare for your visit."
          className="mt-1.5 w-full resize-none rounded-xl border border-brand-200 px-4 py-2.5 text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Submitting..." : "Request Appointment"}
      </button>
    </form>
  );
}
