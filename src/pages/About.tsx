// FILE: src/pages/About.tsx
// Full replacement — modern editorial layouts, full board, real testimonials

import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GraduationCap, BookOpen, Brain, Sparkles, Wine, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { coaches } from "@/data/coaches";

const staff = [
  { name: "Patrick Snyder", title: "President", img: "/images/patrick.jpg" },
  { name: "Lily Dysart", title: "Senior Operations Director", img: "/images/lily.jpg" },
  { name: "Reynaldo Rivera-Gonzalez", title: "Director of Education", img: "/images/ray.jpg" },
];



const boardMembers = [
  "Lara Lee — Creative Renewal, Chair",
  "John McDonald — Godfrey & Kahn, Secretary",
  "Bill Fleming — EY, Treasurer",
  "Frank Cumberbatch — Bader Philanthropies",
  "Laura Gough — Baird",
  "Ann Hanna — Taureau Group",
  "Corey Hoze — Associated Bank",
  "Ed Javier — WEDC",
  "Glenn Margraff — Wintrust Commercial Banking",
  "Joe Miotke — DeWitt Ross & Stevens SC",
  "John Olin — Wabtec",
  "Joe Poeschl — Milwaukee Tech Hub",
  "Carmel Ruffolo — Marquette University",
  "Ron Sadoff — Sadoff Investments",
  "Dan Steininger — Daniel Hoan Foundation",
  "Shelton McClure — US Bank",
  "Maria Watts — WHEDA",
  "Bob Wagner — Wagner Companies",
  "Pastor Raymond Monk — Ephesians Missionary Baptist Church",
  "Scott Brunner — Husch Blackwell",
  "Ruben Gaona — The Way Out",
  "Emerald Mills — Turning Tables",
  "Thaime Nanez — Farmhouse Paint and Sip / Chuchos Red Tacos",
  "Kermiath McClendon — Greater Milwaukee Foundation",
];

const testimonials = [
  { quote: "BizStarts truly saved my business. I was ready to give up after almost four years and go back to the corporate world. The staff were so loving and caring. They truly encouraged me to stay in the game. I'm beyond grateful for all that they do—not just for businesses, but for the people behind them.", name: "Christal Shipp", business: "CTRLC" },
  { 
    quote: "Greenhaven was lucky enough to be accepted into the latest BizStarts Institute cohort 7 in 2024. I learned how to better the business and made some valuable connections. Everything from planning and strategy to understanding customers was covered and I use the knowledge that I gained everyday.", 
    name: "Jessica Tassoul", 
    business: "GreenHaven",
    img: "/jessica-tassoul.jpg?v=2"
  },
  { quote: "BizStarts has been an invaluable part of my entrepreneurial journey. Their support, resources, and mentorship have helped me refine my business strategy and gain clarity on my goals. The community at BizStarts is truly inspiring.", name: "Dayanne Quintero", business: "" },
  { 
    quote: "BizStarts changed my life. I thought about giving up on my business because I was exhausted and confused. This community and the BizStarts Institute reminded me that it is all possible in smaller steps.", 
    name: "Emily Honor Hubbard", 
    business: "",
    img: "/emily-hubbard.jpg?v=2"
  },
];

const programs = [
  { icon: GraduationCap, title: "BizStarts Institute", desc: "Hands-on entrepreneurial education designed for new and growing business owners. Six weeks. Real results.", link: "/programming", img: "/images/img_36.jpg" },
  { icon: Sparkles, title: "First Launch", desc: "An entrepreneurship summer camp designed for middle school students — building the next generation of Milwaukee business owners.", link: "/first-launch", img: "/images/img_10.jpg" },
  { icon: Wine, title: "Cocktails & Connections", desc: "A casual, hands-on workshop series pairing professional development with real relationship-building. Come for the learning, stay for the conversations.", link: "/events", img: "/images/img_35.jpg" },
];

const faqs = [
  { q: "What is BizStarts?", a: "BizStarts is a nonprofit organization that supports entrepreneurs through education, mentorship, and community. We help small business owners build stronger, more sustainable businesses by meeting them where they are and providing hands-on practical, real-world support." },
  { q: "Who is BizStarts for?", a: "BizStarts works with entrepreneurs from idea-stage founders to established small business owners looking to grow, stabilize, or pivot. The entrepreneurs we work with span a wide range of industries including retail, food, services, creative businesses, and more." },
  { q: "What types of programs does BizStarts offer?", a: "BizStarts offers the BizStarts Institute (a 6-week entrepreneurship program offered in English, Spanish, and ASL in Milwaukee, Racine, and Kenosha), Cocktails & Connections workshops, First Launch (a summer camp for kid-entrepreneurs), and one-on-one coaching." },
  { q: "Are your programs in person or virtual?", a: "In person: BizStarts Institute, Cocktails & Connections Workshops, First Launch. Virtual: Coaching, and supplemental Entrepreneurial Mindset Training." },
  { q: "What does BizStarts cost?", a: "Many BizStarts programs are free or offered at a low cost, thanks to the support of funders and partners. When fees do apply, we work to keep them accessible and offer scholarships." },
  { q: "What makes BizStarts different from other programs?", a: "BizStarts is deeply rooted in the local community and focused on practical, real-world entrepreneurship. We emphasize a learn-by-doing approach, prioritizing hands-on progress in your business — not just theory." },
  { q: "I have an idea but haven't started yet. Is BizStarts right for me?", a: "Yes! BizStarts supports early-stage entrepreneurs and people who are still shaping their ideas. Check out the BizStarts Institute, where you'll learn the fundamentals needed to get your business up and running." },
  { q: "I already have a business. Is it too late for BizStarts?", a: "Not at all! Many BizStarts entrepreneurs already have operating businesses and join to strengthen their systems, clarify their strategy, or prepare for their next stage of growth." },
];

const About = () => {
  const [boardOpen, setBoardOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero — split layout, bold left-aligned */}
      <section className="bg-navy relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Full-bleed photo right half */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2">
          <img
            src="/images/img_38.jpg"
            alt="BizStarts community"
            className="w-full h-full object-cover opacity-40 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal" />

        <div className="relative z-10 container py-24 px-8">
          <div className="max-w-xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold" />
                <span className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-xs">
                  Since 2008
                </span>
              </div>
              <h1
                className="font-headline font-bold uppercase text-primary-foreground leading-none"
                style={{ fontSize: "clamp(48px, 8vw, 100px)", letterSpacing: "-0.02em" }}
              >
                About
                <br />
                <span className="text-teal">BizStarts</span>
              </h1>
              <p className="mt-6 text-primary-foreground/60 font-body text-xl leading-relaxed">
                Milwaukee's nonprofit dedicated to helping entrepreneurs navigate the unpredictable journey of building a business.
              </p>
              <Link to="/contact" className="btn-primary mt-10 flex items-center gap-2 w-fit">
                Get In Touch <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission — big quote style */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full -translate-y-1/2 translate-x-1/2"
          aria-hidden="true"
        />
        <div className="container max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-12 items-start">
            <ScrollReveal>
              <div>
                <div className="w-8 h-0.5 bg-gold mb-6" />
                <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-navy leading-tight">
                  You Are Our Mission
                </h2>
                <p className="mt-6 text-charcoal/70 font-body text-lg leading-relaxed">
                  Since 2008, BizStarts has been dedicated to helping entrepreneurs navigate the unpredictable journey of building a business. We understand that the road to success is rarely a straight line — and that sometimes, the biggest difference is having someone by your side who believes in you.
                </p>
              </div>
            </ScrollReveal>
            <div className="hidden lg:block bg-border h-full" />
            <ScrollReveal delay={120}>
              <div className="lg:pt-16">
                <p className="text-charcoal/70 font-body text-lg leading-relaxed">
                  Over the years, BizStarts has supported hundreds of entrepreneurs, from small neighborhood shops to scalable startups. We provide the education, tools, and community that clear the path to growth.
                </p>
                <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                  By empowering entrepreneurs with the right knowledge and connections, we're building a stronger, more vibrant future for business in Milwaukee.
                </p>
                <p className="mt-6 font-barlow font-bold text-teal text-lg">
                  Support is just a conversation away.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Programs — magazine card grid */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-headline font-bold uppercase text-primary-foreground/[0.03] whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 12vw, 160px)" }}
          >
            OUR PROGRAMS
          </span>
        </div>
        <div className="relative z-10 container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-14">
              <div className="h-px w-12 bg-gold" />
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
                Our Approach: Education First
              </h2>
            </div>
            <p className="text-primary-foreground/50 font-body text-lg max-w-2xl -mt-8 mb-14 ml-16">
              At BizStarts, entrepreneurial education is the foundation of economic opportunity and community transformation.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <Link to={p.link} className="group flex flex-col rounded-2xl overflow-hidden shadow-xl h-[420px] bg-navy transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-primary-foreground/5">
                  <div className="relative h-[210px] w-full overflow-hidden shrink-0 bg-off-white">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative flex-1 p-8 flex flex-col justify-start bg-navy">
                    <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center absolute -top-6 right-6 shadow-lg border-4 border-navy group-hover:-translate-y-1 transition-transform duration-300">
                      <p.icon size={20} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-headline text-2xl font-bold uppercase text-primary-foreground leading-tight pr-10">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-primary-foreground/75 font-body text-sm line-clamp-3">
                      {p.desc}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 font-barlow font-semibold text-teal text-sm group-hover:gap-4 transition-all pt-4">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-navy">
                Meet Our Team
              </h2>
            </div>
          </ScrollReveal>

          {/* Staff */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
            {staff.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 100}>
                <div className="text-center group">
                  <div className="relative mx-auto w-32 h-32 mb-4">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full rounded-full object-cover border-4 border-card shadow-lg group-hover:border-teal transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-barlow font-bold text-navy">{s.name}</h3>
                  <p className="text-teal font-barlow font-semibold text-sm">{s.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Coaches subheader */}
          <div className="flex items-center gap-4 mb-12 max-w-3xl mx-auto">
            <div className="h-px flex-1 bg-border" />
            <h3 className="font-headline text-2xl font-bold uppercase text-navy whitespace-nowrap">
              Entrepreneur Coaches
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {coaches.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 80}>
                <Link to="/coaching" className="text-center group block">
                  <div className="relative mx-auto w-24 h-24 mb-3">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-full h-full rounded-full object-cover border-4 border-card shadow group-hover:border-teal transition-colors duration-300"
                    />
                  </div>
                  <h4 className="font-barlow font-bold text-navy text-sm group-hover:text-teal transition-colors">
                    {c.name}
                  </h4>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors — dark collapsible */}
      <section className="bg-navy">
        <div className="container py-0">
          <button
            onClick={() => setBoardOpen(!boardOpen)}
            className="w-full flex items-center justify-between py-10 text-primary-foreground group"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <h2 className="font-headline text-3xl font-bold uppercase">Board of Directors</h2>
            </div>
            <div className={`w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center transition-transform duration-300 ${boardOpen ? "rotate-180" : ""}`}>
              <ChevronDown size={20} />
            </div>
          </button>
          {boardOpen && (
            <div className="pb-14">
              <p className="text-primary-foreground/40 font-body text-sm mb-8">
                Our leadership team is made up of business leaders and community advocates who guide and support our mission:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {boardMembers.map((b) => (
                  <p key={b} className="text-primary-foreground/60 font-body text-sm border-l-2 border-teal/30 pl-3">
                    {b}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories — full bleed quote cards */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-navy">
                Success Stories
              </h2>
              <p className="mt-4 text-charcoal/50 font-body text-lg">
                Hear from entrepreneurs who started their journey with BizStarts.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${i % 3 === 0 ? "bg-navy text-primary-foreground" : i % 3 === 1 ? "bg-teal text-primary-foreground" : "bg-off-white"}`}>
                  <span
                    className="font-headline text-6xl leading-none mb-4 opacity-20"
                    aria-hidden="true"
                  >
                    "
                  </span>
                  <blockquote className={`font-body text-lg leading-relaxed flex-1 ${i % 3 === 2 ? "text-charcoal/70" : "text-primary-foreground/80"}`}>
                    {t.quote}
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-primary-foreground/10 flex items-center gap-4">
                    {t.img ? (
                      <img src={t.img} alt={t.name} className={`w-12 h-12 rounded-full object-cover border-2 shadow-sm ${i % 3 === 2 ? "border-navy/20" : "border-teal"}`} />
                    ) : (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${i % 3 === 2 ? "bg-navy/10 text-navy" : "bg-teal/20 text-teal"}`}>
                       {t.name.charAt(0)}
                      </div>
                    )}
                    <p className={`font-barlow font-bold ${i % 3 === 2 ? "text-navy" : "text-primary-foreground"}`}>
                      {t.name}
                      {t.business && (
                        <span className={`font-normal block text-sm ${i % 3 === 0 ? "text-teal" : i % 3 === 1 ? "text-gold" : "text-teal"}`}>
                          {t.business}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-teal relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-headline font-bold uppercase text-primary-foreground/5 whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 14vw, 180px)" }}
          >
            GET INVOLVED
          </span>
        </div>
        <div className="relative z-10 container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-primary-foreground/10 rounded-2xl p-10">
                <h3 className="font-headline text-2xl font-bold uppercase text-primary-foreground mb-6">
                  Ready to take your next step?
                </h3>
                <div className="space-y-3">
                  <Link to="/programming" className="flex items-center gap-3 text-primary-foreground/80 font-barlow font-semibold hover:text-primary-foreground transition-colors group">
                    <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
                    Sign up for the BizStarts Institute
                  </Link>
                  <Link to="/first-launch" className="flex items-center gap-3 text-primary-foreground/80 font-barlow font-semibold hover:text-primary-foreground transition-colors group">
                    <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
                    Learn about First Launch
                  </Link>
                  <Link to="/coaching" className="flex items-center gap-3 text-primary-foreground/80 font-barlow font-semibold hover:text-primary-foreground transition-colors group">
                    <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
                    Sign up for BizStarts Coaching
                  </Link>
                  <Link to="/events" className="flex items-center gap-3 text-primary-foreground/80 font-barlow font-semibold hover:text-primary-foreground transition-colors group">
                    <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
                    Check out upcoming workshops
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-navy rounded-2xl p-10">
                <h3 className="font-headline text-2xl font-bold uppercase text-primary-foreground mb-4">
                  Support the next generation of entrepreneurs.
                </h3>
                <p className="text-primary-foreground/60 font-body mb-8">
                  Join the BizStarts community and help us keep programs free for Milwaukee entrepreneurs.
                </p>
                <Link to="/contact" className="rounded-full bg-teal px-8 py-4 font-barlow font-bold text-primary-foreground inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
                  Connect With Us <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-off-white">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl font-bold uppercase text-navy">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className={`rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === i ? "bg-navy shadow-lg" : "bg-card"}`}>
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
            <div className="mt-12 text-center bg-card rounded-2xl p-8 shadow-sm">
              <p className="font-barlow font-bold text-navy text-lg">Still unsure?</p>
              <p className="mt-2 text-charcoal/60 font-body">
                We'd rather have a conversation than have you sit on the sidelines. Call us at 414-973-2334.
              </p>
              <Link to="/contact" className="btn-primary mt-6 inline-flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
