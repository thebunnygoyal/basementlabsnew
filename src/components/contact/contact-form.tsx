"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name <span className="text-status-error">*</span>
        </label>
        <input
          id="name"
          {...register("name")}
          className={cn(
            "w-full h-10 px-3 rounded-lg bg-surface border border-white/[0.06] text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors",
            errors.name && "border-status-error"
          )}
          placeholder="Your name"
        />
        {errors.name && <p className="text-xs text-status-error mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email <span className="text-status-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={cn(
            "w-full h-10 px-3 rounded-lg bg-surface border border-white/[0.06] text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors",
            errors.email && "border-status-error"
          )}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-xs text-status-error mt-1">{errors.email.message}</p>}
      </div>

      {/* Type */}
      <div>
        <label htmlFor="type" className="block text-sm font-medium mb-1.5">
          I am a... <span className="text-status-error">*</span>
        </label>
        <select
          id="type"
          {...register("type")}
          className={cn(
            "w-full h-10 px-3 rounded-lg bg-surface border border-white/[0.06] text-sm text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors",
            errors.type && "border-status-error"
          )}
          defaultValue=""
        >
          <option value="" disabled>Select type</option>
          <option value="builder">Builder</option>
          <option value="ecosystem">Ecosystem Partner</option>
          <option value="other">Other</option>
        </select>
        {errors.type && <p className="text-xs text-status-error mt-1">{errors.type.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message <span className="text-status-error">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className={cn(
            "w-full px-3 py-2 rounded-lg bg-surface border border-white/[0.06] text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none",
            errors.message && "border-status-error"
          )}
          placeholder="Tell us about your project or partnership idea..."
        />
        {errors.message && <p className="text-xs text-status-error mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-12 rounded-lg bg-gradient-to-r from-accent to-accent-dark text-white font-medium transition-all hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(43,79,154,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Inquiry"}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <div className="p-3 rounded-lg bg-status-active/10 border border-status-active/20 text-sm text-status-active">
          Message sent! We\u2019ll get back to you within 5 business days.
        </div>
      )}
      {status === "error" && (
        <div className="p-3 rounded-lg bg-status-error/10 border border-status-error/20 text-sm text-status-error">
          Something went wrong. Please try again or email us directly.
        </div>
      )}
    </form>
  );
}
