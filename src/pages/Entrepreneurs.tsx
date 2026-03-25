// FILE: src/pages/Entrepreneurs.tsx
// Full replacement — bold, energetic, action-oriented

import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CalendarCheck, Map, Lightbulb, Users, Handshake, ArrowRight, CheckCircle } from "lucide-react";
import { JOTFORM_URL } from "@/lib/constants";

const steps = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Meet a Coach",
    desc: "Schedule your free first appointment. Tell us about your idea or business challenge — no pitch needed, just a conversation.",
  },
  {
    num: "02",
    icon: Map,
    title: "Get a Plan",
    desc: "Work with your coach to build a clear, actionable roadmap tailored to exactly where you are and where you want to go.",
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "Grow Your Business",
    desc: "Connect with mentors, tap into our resource network, and join a community of entrepreneurs all building something real.",
  },
];

const services = [
  {
    icon: Users,
    img: "/images/img_6.jpg",
    title: "One-on-One Coaching",
    tag: "Free",
    desc: "Work with a dedicated business coach who will help you explore your ideas, identify challenges, and develop an actionable plan. Structured guidance tailored to your stage — whether you're just starting out or scaling up.",
  },
  {
    icon: Handshake,
    img: "/images/img_16.jpg",
    title: "Personalized Mentoring",
    tag: "Free",
    desc: "Get matched with an experienced mentor from your industry who shares insights, opens doors, and provides guidance that only comes from real-world experience. Our mentors volunteer their time because they believe in your potential.",
  },
  {
    icon: Lightbulb,
    img: "/images/img_18.jpg",
    title: "Business Connections",
    tag: "Free",
    desc: "Tap into our extensive network of resources, partners, and fellow entrepreneurs. From legal and financial resources to marketing support and co-working spaces — we connect you with exactly what you need.",
  },
];

const truths = [
  "You don't need a perfect idea — just a starting point",
  "You don't need money to get started with BizStarts",
  "You don't need to have it all figured out",
  "You just need to show up",
];

const Entrepreneurs = () => (
  <>
    {/* Hero — full bleed with bold left-aligned type */}
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      <img
        src="/images/img_35.jpg"
        alt="Entrepreneur at work"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Layered overlays — darker at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
      {/* Teal accent bar on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal" />

      <div className="relative z-10 container pb-20 pt-40 px-8">
        <ScrollReveal>
          <p className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Milwaukee's Entrepreneur Resource
          </p>
          <h1
            className="font-headline font-bold uppercase text-primary-foreground leading-none"
            style={{ fontSize: "clamp(52px, 9vw, 110px)", letterSpacing: "-0.02em" }}
          >
            Your Journey
            <br />
            <span className="text-teal">Starts Here.</span>
          </h1>
          <p className="mt-6 text-primary-foreground/70 font-body text-xl max-w-xl leading-relaxed">
            BizStarts is your free, one-stop resource for launching and growing your business in Milwaukee — no matter your background or stage.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={JOTFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 flex items-center gap-2"
            >
              Begin BizStarts <ArrowRight size={20} />
            </a>
            <Link
              to="/programming"
              className="btn-hero-outline text-lg px-10 py-4"
            >
              Explore Programs
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Bold truth strip */}
    <section className="bg-teal py-8 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap gap-x-12 gap-y-3 justify-center">
          {truths.map((t) => (
            <div key={t} className="flex items-center gap-2 text-primary-foreground">
              <CheckCircle size={16} className="flex-shrink-0" />
              <span className="font-barlow font-semibold text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works — bold numbered steps */}
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Ghost text background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-headline font-bold uppercase text-primary-foreground/[0.03] whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 14vw, 180px)" }}
        >
          HOW IT WORKS
        </span>
      </div>

      <div className="relative z-10 container">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-gold" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
              How It Works
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-0 relative">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 150}>
              <div className="relative p-8 md:p-10 border-t border-primary-foreground/10 md:border-t-0 md:border-l first:border-l-0">
                {/* Big number */}
                <span
                  className="font-headline font-bold text-primary-foreground/10 leading-none select-none block"
                  style={{ fontSize: "clamp(80px, 12vw, 140px)" }}
                >
                  {s.num}
                </span>
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center -mt-6 relative z-10">
                  <s.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-headline text-2xl font-bold uppercase text-primary-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-primary-foreground/60 font-body leading-relaxed">
                  {s.desc}
                </p>
                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={24}
                    className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-teal z-20"
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services — alternating layout */}
    <section className="bg-off-white">
      <div className="container py-24">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-navy">
              Our Services
            </h2>
            <p className="mt-4 text-charcoal/60 font-body text-lg max-w-xl mx-auto">
              Everything you need — all free, all in Milwaukee.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className={`group grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg min-h-[340px] ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image */}
                <div className={`relative overflow-hidden min-h-[240px] ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500" />
                  {/* Free tag */}
                  <div className="absolute top-6 right-6 bg-gold text-navy font-barlow font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                    {s.tag}
                  </div>
                </div>
                {/* Content */}
                <div className={`bg-card flex flex-col justify-center p-10 lg:p-14 ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                    <s.icon size={24} className="text-teal" />
                  </div>
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h3 className="font-headline text-3xl font-bold uppercase text-navy leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA — high contrast */}
    <section className="py-24 bg-teal relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-end pr-16 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-headline font-bold uppercase text-primary-foreground/10 whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 14vw, 180px)" }}
        >
          START NOW
        </span>
      </div>
      <div className="relative z-10 container text-center text-primary-foreground">
        <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase leading-tight">
          Starting Is Easy.
        </h2>
        <p className="mt-4 text-primary-foreground/80 font-body text-xl max-w-lg mx-auto">
          Just make your first appointment and we'll do the rest. Free, no commitment, no catch.
        </p>
        <a
          href={JOTFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-12 py-5 font-barlow font-bold text-teal text-lg shadow-xl hover:text-navy hover:-translate-y-1 transition-all duration-200"
        >
          Begin BizStarts <ArrowRight size={20} />
        </a>
      </div>
    </section>
  </>
);

export default Entrepreneurs;
