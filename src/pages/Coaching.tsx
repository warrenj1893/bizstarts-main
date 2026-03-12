// FILE: src/pages/Coaching.tsx  — paste full file contents below
// ─────────────────────────────────────────────────────────────

import { ScrollReveal } from "@/components/ScrollReveal";
import { CheckCircle } from "lucide-react";
import { coaches } from "@/data/coaches";
import { JOTFORM_URL } from "@/lib/constants";

const perks = [
  "100% free — no cost ever",
  "Truly one-on-one",
  "In-person or virtual",
  "Real-world business experience",
  "No perfect idea required",
];

const Coaching = () => (
  <>
    {/* ── HERO ── */}
    <section className="bg-navy relative overflow-hidden min-h-[75vh] flex items-end">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
        alt="Coaching session"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal" />

      <div className="relative z-10 container px-8 pb-20 pt-48">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-xs">
              Free · One-on-One · Milwaukee
            </span>
          </div>
          <h1
            className="font-headline font-bold uppercase text-primary-foreground leading-none max-w-3xl"
            style={{ fontSize: "clamp(48px, 9vw, 108px)", letterSpacing: "-0.02em" }}
          >
            Meet Your<br /><span className="text-teal">Coaches</span>
          </h1>
          <p className="mt-6 text-primary-foreground/60 font-body text-xl max-w-xl leading-relaxed">
            Real entrepreneurs with real experience — dedicated to helping you build something that lasts.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* ── PERKS STRIP ── */}
    <div className="bg-teal py-5 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-2 text-primary-foreground">
              <CheckCircle size={14} className="flex-shrink-0" />
              <span className="font-barlow font-semibold text-sm">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── COACH PROFILES — alternating cinematic split cards ── */}
    <section className="bg-off-white">
      {coaches.map((c, i) => (
        <ScrollReveal key={c.name} delay={60}>
          {/* Full-bleed alternating grid */}
          <div
            className={`group grid lg:grid-cols-2 min-h-[500px] ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""
            }`}
          >
            {/* Photo */}
            <div className="relative overflow-hidden min-h-[340px]">
              <img
                src={c.img}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Bottom color bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${c.accent}`} />
              {/* Specialty tag */}
              <div className="absolute top-6 left-6">
                <span className={`${c.accent} text-white font-barlow font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow`}>
                  {c.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-10 lg:px-16 py-14 bg-card">
              {/* Ghost number */}
              <span
                className="font-headline font-bold text-charcoal/[0.05] leading-none select-none -mb-3 block"
                style={{ fontSize: "110px" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase text-navy leading-tight">
                {c.name}
              </h2>
              <p className="text-teal font-barlow font-semibold text-sm mt-2 uppercase tracking-wider">
                Entrepreneur Coach
              </p>
              <p className="mt-5 text-charcoal/70 font-body text-lg leading-relaxed">
                {c.bio}
              </p>
            </div>
          </div>

          {/* Hairline divider */}
          {i < coaches.length - 1 && <div className="h-px bg-border" />}
        </ScrollReveal>
      ))}
    </section>

    {/* ── BOOKING CTA — dark with JotForm ── */}
    <section className="py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-headline font-bold uppercase text-primary-foreground/[0.03] whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 12vw, 160px)" }}
        >
          LET'S WORK
        </span>
      </div>

      <div className="relative z-10 container max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
              Ready to Work With a Coach?
            </h2>
            <p className="mt-4 text-primary-foreground/50 font-body text-lg max-w-xl mx-auto">
              Schedule your free first appointment. Available virtually and in person — at no cost.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/10 border border-primary-foreground/10 rounded-xl p-6 text-center text-primary-foreground">
              <span className="font-headline text-3xl font-bold text-teal block mb-2">01</span>
              <h3 className="font-barlow font-bold uppercase tracking-wider mb-2">Application</h3>
              <p className="font-body text-sm text-primary-foreground/60">
                Start by filling out a short intake form to help us understand your business needs.
              </p>
            </div>
            <div className="bg-card/10 border border-primary-foreground/10 rounded-xl p-6 text-center text-primary-foreground">
              <span className="font-headline text-3xl font-bold text-teal block mb-2">02</span>
              <h3 className="font-barlow font-bold uppercase tracking-wider mb-2">Meeting</h3>
              <p className="font-body text-sm text-primary-foreground/60">
                Meet with our intake team to review your application and discuss your specific goals.
              </p>
            </div>
            <div className="bg-card/10 border border-primary-foreground/10 rounded-xl p-6 text-center text-primary-foreground">
              <span className="font-headline text-3xl font-bold text-teal block mb-2">03</span>
              <h3 className="font-barlow font-bold uppercase tracking-wider mb-2">Assignment</h3>
              <p className="font-body text-sm text-primary-foreground/60">
                Get paired with the perfect coach who has the right expertise for your venture.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
            <iframe
              src={JOTFORM_URL}
              width="100%"
              height="600"
              frameBorder={0}
              title="BizStarts Coaching Sign-Up"
              allowFullScreen
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="text-center text-primary-foreground/30 font-body text-sm mt-6">
            Prefer to call? Reach us at{" "}
            <a href="tel:4149732334" className="text-teal hover:underline">
              414-973-2334
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Coaching;
