// FILE: src/pages/Events.tsx
// Full replacement — bold visual-first layout

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { allEvents } from "@/data/events";

const filters = ["All", "Workshop", "Networking", "Virtual"];

const catTextColors: Record<string, string> = {
  Workshop: "text-teal border-teal",
  Virtual: "text-navy border-navy",
  Networking: "text-[#B8960C] border-[#B8960C]",
};

const Events = () => {
  const [filter, setFilter] = useState("All");
  const featuredEvent = allEvents[0];
  const filtered =
    filter === "All"
      ? allEvents.slice(1)
      : allEvents.filter((e) => e.cat === filter && !e.featured);

  return (
    <>
      {/* Hero — bold typographic */}
      <section className="bg-navy relative overflow-hidden">
        <img
          src="/images/img_35.jpg"
          alt="Events"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-teal/10"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="relative z-10 container py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-xs">
                Milwaukee
              </span>
            </div>
            <h1
              className="font-headline font-bold uppercase text-primary-foreground leading-none"
              style={{ fontSize: "clamp(56px, 10vw, 120px)", letterSpacing: "-0.02em" }}
            >
              What's
              <br />
              <span className="text-teal">Happening</span>
            </h1>
            <p className="mt-6 text-primary-foreground/60 font-body text-xl max-w-lg">
              Workshops, networking events, and learning opportunities for Milwaukee entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="bg-off-white py-12">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-barlow font-bold text-xs uppercase tracking-widest text-charcoal/40">
              Next Up
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <ScrollReveal>
            <div className="group grid lg:grid-cols-[1fr_420px] rounded-3xl overflow-hidden shadow-2xl bg-card min-h-[380px]">
              <div className="flex flex-col justify-between p-10 lg:p-14">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-teal rounded-xl px-5 py-3 text-center text-primary-foreground">
                      <p className="font-barlow font-bold text-xs uppercase leading-none mb-1">
                        {featuredEvent.month}
                      </p>
                      <p className="font-headline text-4xl font-bold leading-none">
                        {featuredEvent.day}
                      </p>
                    </div>
                    <div>
                      <span className="font-barlow font-bold text-xs uppercase tracking-widest text-teal border border-teal rounded-full px-3 py-1">
                        {featuredEvent.cat}
                      </span>
                      <p className="mt-1 font-barlow text-charcoal/40 text-sm">
                        {featuredEvent.fullDate}
                      </p>
                    </div>
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase text-navy leading-tight">
                    {featuredEvent.title}
                  </h2>
                  <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed max-w-lg">
                    {featuredEvent.desc}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-2 text-charcoal/60 font-body text-sm">
                    <MapPin size={16} className="text-teal" />
                    {featuredEvent.loc}
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/60 font-body text-sm">
                    <Clock size={16} className="text-teal" />
                    {featuredEvent.time}
                  </div>
                  <a href="#" className="btn-primary text-base px-8 py-3 flex items-center gap-2 ml-auto">
                    Register Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden min-h-[280px] lg:min-h-0">
                <img
                  src={featuredEvent.img}
                  alt={featuredEvent.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/30 to-transparent lg:from-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-off-white">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-barlow font-bold text-xs uppercase tracking-widest text-charcoal/40">
              More Events
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-barlow font-bold text-sm uppercase tracking-wide transition-all duration-200 ${
                  filter === f
                    ? "bg-navy text-primary-foreground shadow-md"
                    : "bg-card text-charcoal/50 hover:bg-navy/10 border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ev, i) => (
              <ScrollReveal key={ev.title} delay={i * 80}>
                <article className="group bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className={`absolute top-4 left-4 ${ev.color} rounded-lg px-3 py-2 text-center`}>
                      <p className="font-barlow font-bold text-[10px] uppercase leading-none text-white mb-0.5">
                        {ev.month}
                      </p>
                      <p className="font-headline text-2xl font-bold leading-none text-white">
                        {ev.day}
                      </p>
                    </div>
                    <span
                      className={`absolute bottom-4 left-4 font-barlow font-bold text-xs uppercase tracking-wide px-3 py-1 rounded-full border bg-card/90 ${catTextColors[ev.cat]}`}
                    >
                      {ev.cat}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline text-xl font-bold uppercase text-navy leading-tight">
                      {ev.title}
                    </h3>
                    <p className="mt-2 text-charcoal/60 font-body text-sm leading-relaxed flex-1">
                      {ev.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border space-y-1.5">
                      <div className="flex items-center gap-2 text-charcoal/50 text-xs font-body">
                        <MapPin size={12} className="text-teal flex-shrink-0" />
                        {ev.loc}
                      </div>
                      <div className="flex items-center gap-2 text-charcoal/50 text-xs font-body">
                        <Clock size={12} className="text-teal flex-shrink-0" />
                        {ev.time}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn-primary mt-5 text-sm px-6 py-2.5 self-start flex items-center gap-2"
                    >
                      Register <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-teal relative overflow-hidden">
        <div
          className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-10"
          aria-hidden="true"
        >
          <Calendar size={280} className="text-primary-foreground" />
        </div>
        <div className="relative z-10 container">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-primary-foreground leading-tight">
              Don't Miss What's Coming
            </h2>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg">
              Sign up for our newsletter and get every event delivered to your inbox before registration fills up.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full px-6 py-3 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-navy"
              />
              <button
                type="submit"
                className="rounded-full bg-navy px-8 py-3 font-barlow font-bold text-primary-foreground hover:bg-navy/80 transition-colors whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
