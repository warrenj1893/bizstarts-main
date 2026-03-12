import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CheckCircle, XCircle, FileText, ArrowRight, Zap } from "lucide-react";

const eligibility = [
  "Be based in Wisconsin",
  "Be a startup or early-stage business",
  "Offer a scalable product or service with high-growth potential",
  "Have completed the BizStarts Institute",
  "Have participated in BizStarts mentoring or student consulting (6+ months)",
  "Have an EIN, a business checking account, and proper state/city registration",
  "Demonstrate positive cash flow and proof of concept",
];

const ineligible = [
  "Real estate businesses",
  "Retail businesses",
  "Restaurants or hospitality",
  "Relocation between Wisconsin communities",
];

const grantUses = [
  "Equipment or tools to scale your business",
  "Packaging or production materials",
  "Hiring your first employee or expanding your team",
];

const applicationReqs = [
  "A complete business plan",
  "Your annual budget",
  "Financial projections for the next 12 months",
  "A detailed grant expense plan showing how funds will be used",
];

const stats = [
  { value: "$50K", label: "Total Available" },
  { value: "$1K–$15K", label: "Individual Awards" },
  { value: "35%", label: "Max % of Annual Budget" },
];

const CapitalCatalyst = () => (
  <>
    {/* Hero — dark, high-stakes feel */}
    <section className="bg-navy relative overflow-hidden min-h-[70vh] flex items-center">
      <img
        src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80"
        alt="Startup growth"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      {/* Gold diagonal accent */}
      <div
        className="absolute right-0 top-0 h-full w-2/5 bg-gold/5"
        style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      {/* Vertical gold line */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />

      <div className="relative z-10 container py-24 px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <Zap size={18} className="text-gold" />
            <span className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-xs">
              Powered by WEDC & Sponsored by Wells Fargo
            </span>
          </div>
          <h1
            className="font-headline font-bold uppercase text-primary-foreground leading-none max-w-4xl"
            style={{ fontSize: "clamp(44px, 8vw, 100px)", letterSpacing: "-0.02em" }}
          >
            Capital
            <br />
            <span className="text-gold">Catalyst</span>
            <br />
            Grant
          </h1>
          <p className="mt-6 text-primary-foreground/60 font-body text-xl max-w-lg leading-relaxed">
            Non-dilutive funding for early-stage, high-growth Wisconsin startups ready to scale.
          </p>
          <p className="mt-2 text-primary-foreground/40 font-barlow text-sm uppercase tracking-wider">
            Not a loan. Not equity. Just fuel.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats strip */}
    <section className="bg-gold py-0">
      <div className="container">
        <div className="grid grid-cols-3 divide-x divide-navy/20">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-8 px-6">
              <p className="font-headline text-4xl md:text-5xl font-bold text-navy leading-none">
                {s.value}
              </p>
              <p className="mt-2 font-barlow font-semibold text-navy/60 text-xs uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What is it */}
    <section className="py-24 bg-card">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-12 items-start">
            <div>
              <div className="w-8 h-0.5 bg-gold mb-6" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase text-navy leading-tight">
                What Is the Capital Catalyst Grant?
              </h2>
            </div>
            <div className="hidden lg:block bg-border" />
            <div>
              <p className="text-charcoal/70 font-body text-lg leading-relaxed">
                The BizStarts Capital Catalyst Grant is a competitive funding opportunity for early-stage, high-growth businesses in Wisconsin. Supported by the Wisconsin Economic Development Corporation (WEDC) and sponsored by Wells Fargo, this grant provides <strong className="text-navy">non-dilutive funding</strong> — not loans, not equity — to help innovative founders grow and scale their ventures.
              </p>
              <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                This fund is especially focused on supporting underrepresented founders and investing in the Greater Milwaukee startup ecosystem.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Eligibility + Uses — dark section */}
    <section className="py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-headline font-bold uppercase text-primary-foreground/[0.03] whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 12vw, 160px)" }}
        >
          ELIGIBILITY
        </span>
      </div>
      <div className="relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Who can apply */}
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-primary-foreground" />
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase text-primary-foreground">
                  Who Can Apply
                </h2>
              </div>
              <p className="text-primary-foreground/50 font-body text-sm mb-6">
                Your business must meet ALL of the following:
              </p>
              <ul className="space-y-3">
                {eligibility.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/70 font-body text-sm">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Ineligible + Uses */}
          <ScrollReveal delay={100}>
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <XCircle size={16} className="text-primary-foreground/50" />
                  </div>
                  <h2 className="font-headline text-2xl font-bold uppercase text-primary-foreground/60">
                    Ineligible Industries
                  </h2>
                </div>
                <ul className="space-y-2">
                  {ineligible.map((e) => (
                    <li key={e} className="flex items-start gap-3">
                      <XCircle size={16} className="text-primary-foreground/30 mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/40 font-body text-sm line-through">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <Zap size={16} className="text-navy" />
                  </div>
                  <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase text-primary-foreground">
                    What Can It Fund?
                  </h2>
                </div>
                <ul className="space-y-3">
                  {grantUses.map((g) => (
                    <li key={g} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/70 font-body text-sm">{g}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-primary-foreground/30 font-body text-xs italic">
                  Request must not exceed 35% of your annual budget, max $15,000.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* How to Apply */}
    <section className="py-24 bg-off-white">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="font-headline text-4xl font-bold uppercase text-navy">
              How to Apply
            </h2>
            <p className="mt-4 text-charcoal/60 font-body text-lg">
              Incomplete applications will not be considered. All submissions reviewed by the BizStarts Finance Committee.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {applicationReqs.map((a, i) => (
            <ScrollReveal key={a} delay={i * 80}>
              <div className="flex items-center gap-6 bg-card rounded-2xl p-6 shadow-sm border-l-4 border-teal">
                <span className="font-headline text-4xl font-bold text-teal/20 leading-none w-10 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-teal flex-shrink-0" />
                  <span className="text-charcoal/70 font-body">{a}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — gold, high energy */}
    <section className="py-24 bg-gold relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-headline font-bold uppercase text-navy/5 whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 16vw, 200px)" }}
        >
          APPLY NOW
        </span>
      </div>
      <div className="relative z-10 container text-center">
        <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase text-navy leading-tight">
          Let's Build Something
          <br />
          Big — Together.
        </h2>
        <p className="mt-6 text-navy/60 font-body text-xl max-w-xl mx-auto">
          Applications open soon. Questions? Contact Lily Dysart directly.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-navy px-12 py-5 font-barlow font-bold text-primary-foreground text-lg shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center gap-3"
          >
            Apply / Contact Us <ArrowRight size={20} />
          </Link>
          <a
            href="mailto:ldysart@bizstarts.com"
            className="font-barlow font-semibold text-navy/70 hover:text-navy transition-colors text-sm underline"
          >
            ldysart@bizstarts.com
          </a>
        </div>
      </div>
    </section>
  </>
);

export default CapitalCatalyst;
