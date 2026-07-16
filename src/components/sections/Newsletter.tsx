"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/aceternity/placeholders-and-vanish-input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Subscription failed");
      setStatus("success");
      setMessage(data.message || "Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="relative py-20 lg:py-28" aria-label="Newsletter signup">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-ocean-500/15 bg-navy-800/50">
          <div className="absolute inset-0 maritime-grid opacity-30" aria-hidden="true" />
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-ocean-600/10 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col items-center px-8 py-16 text-center sm:px-16 lg:py-20">
            <span className="section-label mb-4">Stay Informed</span>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Sign Up &amp; Get The Best Deals
            </h2>
            <p className="mt-4 max-w-lg text-base text-silver-300/80">
              Receive maritime industry updates, registration tips, and exclusive service offers directly to your inbox.
            </p>

            <div className="mt-10 w-full max-w-md">
              <PlaceholdersAndVanishInput
                placeholders={["your@email.com", "captain@yacht.com", "fleet@company.ae"]}
                type="email"
                name="newsletter-email"
                id="newsletter-email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                onSubmit={handleSubmit}
              />
            </div>

            <div aria-live="polite" aria-atomic="true" className="mt-4 min-h-[1.25rem]">
              {status === "loading" && (
                <p className="text-sm text-silver-300/70" role="status">
                  Subscribing...
                </p>
              )}
              {status === "success" && (
                <p className="text-sm text-ocean-400" role="status">
                  {message}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400" role="alert">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
