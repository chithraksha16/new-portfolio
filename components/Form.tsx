
"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    subject: "",
    message: "",
  });

  const inputStyle =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground placeholder:text-muted-foreground";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        type: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            className={inputStyle}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            autoComplete="email"
            required
            maxLength={254}
            className={inputStyle}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          What can I help you with?
        </label>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          required
          className={inputStyle}
        >
          <option value="">Select an option</option>
          <option value="Website Development">Website Development</option>
          <option value="Full Stack Development">Full Stack Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Career Opportunity">Career Opportunity</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Other">Something Else</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Subject</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
          minLength={3}
          maxLength={120}
          className={inputStyle}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Your Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          required
          minLength={10}
          maxLength={5000}
          className={`${inputStyle} resize-none`}
        />
      </div>

      {status && (
        <div
          role={status.type === "error" ? "alert" : "status"}
          className={`rounded-xl p-4 text-sm ${
            status.type === "success"
              ? "bg-green-500/10 text-green-600"
              : "bg-red-500/10 text-red-500"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:opacity-80 disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        I'll get back to you as soon as possible.
      </p>
    </form>
  );
}
