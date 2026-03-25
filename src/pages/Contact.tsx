import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, MapPin, Clock, Mail, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import NewsletterForm from "@/components/NewsletterForm";

const quickLinks = [
  { label: "Apply to BizStarts Institute", href: "/programming", external: false },
  { label: "Instituto Latino de BizStarts", href: "/instituto-latino", external: false },
  { label: "Schedule a Coaching Session", href: "/coaching", external: false },
  { label: "Upcoming Events & Workshops", href: "/events", external: false },
  { label: "Capital Catalyst Grant", href: "/capital-catalyst", external: false },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });

      if (error) throw error;

      setSent(true);
      toast.success("Message sent! We'll be in touch soon.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy relative overflow-hidden min-h-[58vh] flex items-center">
        <img
          src="/images/img_4.jpg"
          alt="BizStarts office"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 bg-teal/[0.06]"
          style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal" />

        <div className="relative z-10 container px-8 py-24">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-xs">
                Milwaukee, WI
              </span>
            </div>
            <h1
              className="font-headline font-bold uppercase text-primary-foreground leading-none"
              style={{ fontSize: "clamp(52px, 9vw, 112px)", letterSpacing: "-0.02em" }}
            >
              Let's<br /><span className="text-teal">Talk.</span>
            </h1>
            <p className="mt-6 text-primary-foreground/55 font-body text-xl max-w-lg leading-relaxed">
              Whether you're ready to begin or just have questions — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN: Form left, dark info panel right ── */}
      <section className="bg-off-white">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_360px] min-h-[680px]">

            {/* Contact Form */}
            <ScrollReveal>
              <div className="py-16 lg:pr-14">
                <div className="w-8 h-0.5 bg-gold mb-6" />
                <h2 className="font-headline text-3xl font-bold uppercase text-navy mb-1">
                  Get In Touch
                </h2>
                <p className="text-charcoal/45 font-body text-sm mb-8">
                  Fill out the form and our team will be in touch within one business day.
                </p>

                {sent ? (
                  <div className="rounded-2xl bg-teal/10 border border-teal/20 p-10 text-center">
                    <p className="font-headline text-2xl font-bold text-navy mb-2">Thank You!</p>
                    <p className="text-charcoal/60 font-body">
                      Your message has been sent. We'll get back to you within one business day.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                      className="mt-6 font-barlow font-semibold text-sm text-teal hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-barlow font-semibold text-xs uppercase tracking-wider text-charcoal/60 mb-1.5 block">
                          Full Name *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="font-barlow font-semibold text-xs uppercase tracking-wider text-charcoal/60 mb-1.5 block">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-barlow font-semibold text-xs uppercase tracking-wider text-charcoal/60 mb-1.5 block">
                        Phone
                      </label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal"
                        placeholder="(414) 555-0123"
                      />
                    </div>
                    <div>
                      <label className="font-barlow font-semibold text-xs uppercase tracking-wider text-charcoal/60 mb-1.5 block">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal resize-none"
                        placeholder="Tell us about your business idea or how we can help…"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-primary inline-flex items-center gap-2 disabled:opacity-60"
                    >
                      {sending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Dark info sidebar */}
            <ScrollReveal delay={120}>
              <div className="bg-navy flex flex-col gap-8 py-16 px-10 h-full">
                <div>
                  <p className="font-barlow font-bold text-[11px] uppercase tracking-[0.25em] text-primary-foreground/30 mb-6">
                    Contact Info
                  </p>
                  <div className="space-y-5">
                    <a
                      href="https://maps.google.com/?q=161+S+1st+St+Ste+318+Milwaukee+WI+53204"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors duration-200">
                        <MapPin size={15} className="text-teal group-hover:text-white transition-colors" />
                      </div>
                      <address className="not-italic font-body text-primary-foreground/50 text-sm leading-relaxed group-hover:text-primary-foreground/80 transition-colors">
                        BizStarts<br />161 S 1st St Ste 318<br />Milwaukee, WI 53204
                      </address>
                    </a>
                    <a href="tel:4149732334" className="flex items-center gap-4 group">
                      <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors duration-200">
                        <Phone size={15} className="text-teal group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-body text-primary-foreground/50 text-sm group-hover:text-primary-foreground/80 transition-colors">
                        414-973-2334
                      </span>
                    </a>
                    <a href="mailto:info@bizstarts.com" className="flex items-center gap-4 group">
                      <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-colors duration-200">
                        <Mail size={15} className="text-teal group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-body text-primary-foreground/50 text-sm group-hover:text-primary-foreground/80 transition-colors">
                        info@bizstarts.com
                      </span>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                        <Clock size={15} className="text-teal" />
                      </div>
                      <span className="font-body text-primary-foreground/50 text-sm">Mon–Fri 9AM–5PM</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-primary-foreground/10" />

                <div>
                  <p className="font-barlow font-bold text-[11px] uppercase tracking-[0.25em] text-primary-foreground/30 mb-5">
                    Quick Links
                  </p>
                  <div className="space-y-3">
                    {quickLinks.map((l) =>
                      l.external ? (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-primary-foreground/40 hover:text-teal transition-colors font-barlow font-semibold text-sm group"
                        >
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          key={l.label}
                          to={l.href}
                          className="flex items-center gap-3 text-primary-foreground/40 hover:text-teal transition-colors font-barlow font-semibold text-sm group"
                        >
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          {l.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                <div className="h-px bg-primary-foreground/10" />

                <div className="relative rounded-xl overflow-hidden h-36 mt-auto">
                  <img
                    src="/images/img_35.jpg"
                    alt="Milwaukee"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-navy/50" />
                  <a
                    href="https://maps.google.com/?q=161+S+1st+St+Ste+318+Milwaukee+WI+53204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-card/92 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-shadow text-center">
                      <p className="font-barlow font-bold text-navy text-xs">📍 161 S 1st St Ste 318</p>
                      <p className="font-barlow text-teal text-[11px] mt-0.5">Open in Maps →</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 bg-teal relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-headline font-bold uppercase text-primary-foreground/[0.05] whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 14vw, 180px)" }}
          >
            STAY CONNECTED
          </span>
        </div>
        <div className="relative z-10 container text-center text-primary-foreground">
          <div className="w-16 h-1 bg-primary-foreground/25 mx-auto mb-6" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">Don't Miss Out</h2>
          <p className="mt-4 text-primary-foreground/70 font-body text-lg max-w-xl mx-auto">
            Get tips, resources, event details, entrepreneur stories, and lots more.
          </p>
          <div className="mt-8 max-w-sm mx-auto"><NewsletterForm /></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
