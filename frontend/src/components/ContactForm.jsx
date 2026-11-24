import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(3, "Please add a subject."),
  service: z.string().min(1, "Please choose a service."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more (at least 10 characters)."),
});

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Software Development",
  "Digital Solutions",
  "Technology Consulting",
  "Something else",
];

function Field({
  label,
  name,
  error,
  required = true,
  full = false,
  children,
}) {
  const errorId = `${name}-error`;
  return (
    <div
      className={`form-field${error ? " form-field--error" : ""}${full ? " form-field--full" : ""}`}
    >
      <label htmlFor={name}>
        {label}
        {required && (
          <span className="required-mark" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children({
        id: name,
        name,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && (
        <span className="field-error" id={errorId} role="alert">
          {error.message}
        </span>
      )}
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setSubmitted(true);
    reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {submitted && (
        <div className="form-success" role="status" tabIndex="-1">
          <strong>Thanks for reaching out.</strong>
          <span>
            This is a frontend demo. Your message was not sent or stored.
          </span>
          <button
            type="button"
            aria-label="Dismiss confirmation"
            onClick={() => setSubmitted(false)}
          >
            ×
          </button>
        </div>
      )}
      <div className="form-grid">
        <Field label="Full name" name="fullName" error={errors.fullName}>
          {(props) => (
            <input
              autoComplete="name"
              placeholder="Your name"
              {...props}
              {...register("fullName")}
            />
          )}
        </Field>
        <Field label="Email address" name="email" error={errors.email}>
          {(props) => (
            <input
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              {...props}
              {...register("email")}
            />
          )}
        </Field>
        <Field
          label="Phone number"
          name="phone"
          error={errors.phone}
          required={false}
        >
          {(props) => (
            <input
              type="tel"
              autoComplete="tel"
              placeholder="Optional"
              {...props}
              {...register("phone")}
            />
          )}
        </Field>
        <Field label="Subject" name="subject" error={errors.subject}>
          {(props) => (
            <input
              placeholder="What would you like to discuss?"
              {...props}
              {...register("subject")}
            />
          )}
        </Field>
        <div className="form-field form-field--full">
          <label htmlFor="service">Service interested in</label>
          <select
            id="service"
            {...register("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="field-error" id="service-error" role="alert">
              {errors.service.message}
            </span>
          )}
        </div>
        <Field label="Your message" name="message" error={errors.message} full>
          {(props) => (
            <textarea
              rows="5"
              placeholder="Tell us a little about your idea..."
              {...props}
              {...register("message")}
            />
          )}
        </Field>
      </div>
      <button
        type="submit"
        className="button button--primary form-submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Preparing demo…" : "Send your enquiry"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-disclaimer">
        Demo only — no message is sent or saved.
      </p>
    </form>
  );
}
