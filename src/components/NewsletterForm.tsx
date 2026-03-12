// FILE: src/components/NewsletterForm.tsx
// Single source of truth for the newsletter signup form.
// Used in: Footer, Contact page
// Props: dark (boolean) — true renders light inputs for dark backgrounds

import { useState } from "react";

interface NewsletterFormProps {
  dark?: boolean;
}

const NewsletterForm = ({ dark = false }: NewsletterFormProps) => {
  const [form, setForm] = useState({ first: "", last: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to Mailchimp / ConvertKit / etc.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className={`font-barlow font-semibold text-sm ${dark ? "text-primary-foreground/70" : "text-teal"}`}>
        ✓ You're subscribed! We'll be in touch soon.
      </p>
    );
  }

  const inputClass = dark
    ? "w-full rounded-md bg-navy-light border border-primary-foreground/20 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-teal"
    : "w-full rounded-full px-5 py-3 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-navy";

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        placeholder="First Name"
        value={form.first}
        onChange={(e) => setForm({ ...form, first: e.target.value })}
        className={inputClass}
        required
      />
      <input
        placeholder="Last Name"
        value={form.last}
        onChange={(e) => setForm({ ...form, last: e.target.value })}
        className={inputClass}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={inputClass}
        required
      />
      <button
        type="submit"
        className={dark
          ? "btn-primary w-full text-sm"
          : "rounded-full bg-navy px-8 py-3 font-barlow font-bold text-primary-foreground hover:bg-navy/80 transition-colors w-full"
        }
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
