"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { MovingBorderButton } from "@/components/ui/aceternity/moving-border";
import { siteConfig } from "@/data/site-content";
import { SERVICE_TYPES } from "@/lib/validation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", serviceType: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-navy-950/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-ocean-400/50 focus:ring-1 focus:ring-ocean-400/30";

  return (
    <section id="contact" className="relative py-24 lg:py-32" aria-labelledby="contact-section-title">
      <div className="absolute inset-0 maritime-grid opacity-10" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Concierge Desk"
          title="Contact Us"
          id="contact-section-title"
          index="08"
          description="Share your vessel details and our maritime team will guide you through registration, compliance, and documentation."
          className="mb-20"
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <CardSpotlight className="lg:col-span-3" color="rgba(35,137,168,0.1)">
            <form onSubmit={handleSubmit} noValidate aria-busy={status === "loading"}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-silver-200">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-silver-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-silver-200">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+971 50 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="mb-2 block text-sm font-medium text-silver-200">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={form.serviceType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-navy-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-silver-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your vessel and requirements..."
                />
              </div>
              <MovingBorderButton
                type="submit"
                disabled={status === "loading"}
                borderRadius="9999px"
                containerClassName="mt-6 h-12 w-auto"
                className="bg-ocean-600 px-8 py-3 text-sm font-semibold disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </MovingBorderButton>
              <div aria-live="polite" aria-atomic="true" className="mt-4 min-h-[1.25rem]">
                {status === "success" && (
                  <p className="text-sm text-ocean-400" role="status">
                    Your message has been sent successfully. We&apos;ll be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </CardSpotlight>

          <div className="lg:col-span-2">
            <div className="glass-card space-y-8 rounded-2xl p-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {siteConfig.legalName}
                </h3>
                <p className="mt-2 text-sm text-silver-300/75">
                  Your trusted maritime registration partner since {siteConfig.yearFounded}.
                </p>
              </div>
              {[
                { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
                { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { label: "Address", value: siteConfig.address },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ocean-600/15">
                    <span className="text-xs font-bold text-ocean-400">{item.label[0]}</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-ocean-400">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 text-sm text-silver-200 hover:text-ocean-300">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-silver-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
