import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CheckCircle, Heart, ChevronDown, ChevronUp, ArrowRight, Lightbulb } from "lucide-react";
import { useState } from "react";

const memberBenefits = [
  "Free Ticket to BizStarts Annual Event",
  "Access to BizStarts' Conference Room (by appointment)",
  "Discounted Rental of the BizStarts Community Market",
  "Free or Discounted Admission to Workshops & Cocktails & Connections",
  "Recognition and Features on our website and social media",
  "Directly funds BizStarts Institute, First Launch, and ongoing workshops",
];

const supporterBenefits = [
  { title: "Sponsor a New Entrepreneur", desc: "Your contribution helps cover the cost for a future BizStarts Institute participant." },
  { title: "Recognition as a BizStarts Supporter", desc: "Be recognized on our website, newsletters, and event programs." },
  { title: "Exclusive Impact Updates", desc: "Get behind-the-scenes stories and impact reports showing exactly how your support makes a difference." },
  { title: "Invitation to Special Events", desc: "Celebrate with the entrepreneurs you help launch at special supporter gatherings." },
];

const faqs = [
  { q: "Do I need to be a member to participate in BizStarts programs?", a: "No. Our core programs—including BizStarts Institute, First Launch, and Cocktails & Connections—are free or scholarship-supported. Membership is entirely optional and designed for those who wish to engage more deeply." },
  { q: "Can I gift a membership to someone else?", a: "Absolutely! Gifting a membership is a wonderful way to support an aspiring entrepreneur. Please contact us at info@bizstarts.com or 414-973-2334 to arrange a gifted membership." },
  { q: "Where does my membership fee go?", a: "Your membership helps us offer more workshops, provide materials and space for entrepreneurs, expand access to free education for underserved communities, and keep the BizStarts Community Market thriving." },
  { q: "Is my membership tax-deductible?", a: "Yes. BizStarts is a registered 501(c)(3) nonprofit organization, and your membership fee is tax-deductible to the extent allowed by law. Please consult your tax advisor for more information." },
  { q: "How can I get more involved with BizStarts?", a: "We welcome volunteers, mentors, and supporters. Visit our Contact page or reach out at 414-973-2334 to learn about opportunities to support our mission." },
];

const Membership = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero — warm, community feel */}
      <section className="bg-navy relative overflow-hidden min-h-[70vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
          alt="Community members"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        {/* Warm teal glow bottom left */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal" />

        <div className="relative z-10 container py-24 px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <Heart size={18} className="text-teal" fill="currentColor" />
              <span className="font-barlow font-semibold text-teal uppercase tracking-[0.3em] text-xs">
                BizStarts Community
              </span>
            </div>
            <h1
              className="font-headline font-bold uppercase text-primary-foreground leading-none max-w-3xl"
              style={{ fontSize: "clamp(48px, 9vw, 110px)", letterSpacing: "-0.02em" }}
            >
              Invest in
              <br />
              <span className="text-teal">The Dream.</span>
            </h1>
            <p className="mt-6 text-primary-foreground/60 font-body text-xl max-w-xl leading-relaxed">
              Membership is never required to learn or grow with BizStarts. It's for those who want to go deeper — and help others do the same.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro callout */}
      <section className="bg-teal py-12">
        <div className="container max-w-3xl text-center">
          <p className="font-body text-xl text-primary-foreground/90 leading-relaxed">
            Your support keeps BizStarts' programs <strong>free and accessible</strong> to entrepreneurs across Milwaukee and beyond — no matter their background or resources.
          </p>
        </div>
      </section>

      {/* Two membership tiers — side by side */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-navy">
                Choose Your Level
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Member Card */}
            <ScrollReveal delay={0}>
              <div className="bg-card rounded-3xl overflow-hidden shadow-xl flex flex-col h-full border-t-4 border-teal">
                <div className="bg-teal px-10 py-8">
                  <p className="font-barlow font-bold text-primary-foreground/70 text-xs uppercase tracking-widest mb-2">
                    For Entrepreneurs
                  </p>
                  <h3 className="font-headline text-3xl font-bold uppercase text-primary-foreground">
                    BizStarts Member
                  </h3>
                  <p className="mt-2 text-primary-foreground/70 font-body text-sm">
                    Deepen your journey. Access exclusive perks.
                  </p>
                  <div className="mt-6">
                    <span className="font-headline text-5xl font-bold text-primary-foreground">$__</span>
                    <span className="text-primary-foreground/60 font-barlow ml-2">/ year</span>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    {memberBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal/70 font-body text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-10 btn-primary text-center text-base py-4 flex items-center justify-center gap-2"
                  >
                    Become a Member <ArrowRight size={16} />
                  </Link>
                  <p className="mt-3 text-center text-charcoal/40 font-body text-xs">
                    Scholarships & complimentary memberships available upon request.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Supporter Card */}
            <ScrollReveal delay={120}>
              <div className="bg-navy rounded-3xl overflow-hidden shadow-xl flex flex-col h-full border-t-4 border-gold">
                <div className="px-10 py-8">
                  <p className="font-barlow font-bold text-primary-foreground/40 text-xs uppercase tracking-widest mb-2">
                    For Community Champions
                  </p>
                  <h3 className="font-headline text-3xl font-bold uppercase text-primary-foreground">
                    BizStarts Supporter
                  </h3>
                  <p className="mt-2 text-primary-foreground/50 font-body text-sm">
                    Pay it forward. Fund the next generation.
                  </p>
                  <div className="mt-6">
                    <span className="font-headline text-5xl font-bold text-gold">$__</span>
                    <span className="text-primary-foreground/40 font-barlow ml-2">/ year</span>
                  </div>
                </div>
                <div className="px-10 pb-10 flex-1 flex flex-col">
                  <ul className="space-y-5 flex-1">
                    {supporterBenefits.map((b) => (
                      <li key={b.title} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={12} className="text-gold" />
                        </div>
                        <div>
                          <p className="font-barlow font-bold text-primary-foreground text-sm">{b.title}</p>
                          <p className="text-primary-foreground/40 font-body text-xs mt-0.5">{b.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-10 rounded-full bg-gold px-8 py-4 font-barlow font-bold text-navy text-base text-center hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Become a Supporter <ArrowRight size={16} />
                  </Link>
                  <blockquote className="mt-6 text-primary-foreground/30 font-body text-xs italic text-center">
                    "Your support gives someone the courage, tools, and connections to turn their dream into a thriving business."
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact visual */}
      <section className="py-20 bg-teal relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-headline font-bold uppercase text-primary-foreground/5 whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 14vw, 180px)" }}
          >
            IMPACT
          </span>
        </div>
        <div className="relative z-10 container text-center text-primary-foreground">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Heart size={28} fill="currentColor" />
                </div>
                <span className="font-headline text-3xl font-bold uppercase">1 Supporter</span>
              </div>
              <ArrowRight size={40} className="text-primary-foreground/40" />
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Lightbulb size={28} />
                </div>
                <span className="font-headline text-3xl font-bold uppercase">1 Entrepreneur Helped</span>
              </div>
            </div>
            <p className="mt-8 text-primary-foreground/70 font-body text-lg max-w-lg mx-auto">
              Every membership directly subsidizes education and resources for entrepreneurs who need it most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl font-bold uppercase text-navy">
                Membership FAQ
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className={`rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === i ? "bg-navy shadow-lg" : "bg-off-white"}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-8 py-5 text-left gap-4"
                  >
                    <span className={`font-barlow font-bold pr-4 ${openFaq === i ? "text-primary-foreground" : "text-navy"}`}>
                      {f.q}
                    </span>
                    {openFaq === i
                      ? <ChevronUp size={20} className="text-teal flex-shrink-0" />
                      : <ChevronDown size={20} className="text-teal flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-8 pb-6">
                      <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <p className="text-charcoal/60 font-body mb-4">Still have questions?</p>
              <Link to="/contact" className="btn-primary flex items-center gap-2 w-fit mx-auto">
                Get In Touch <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Membership;
