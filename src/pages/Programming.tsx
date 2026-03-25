import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  CheckCircle, BookOpen, BarChart3, Megaphone, DollarSign,
  Settings, Brain, ChevronDown, ChevronUp, Calendar, MapPin, Clock, ArrowRight,
} from "lucide-react";
import { useState } from "react";

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdcn9tcPy6DA4bPOb3Tmrwp7MUvEQnzJx4KxHlizrE8SqdzzQ/viewform";

const topics = [
  { icon: CheckCircle, text: "Address all facets of a successful venture" },
  { icon: BookOpen,    text: "Development of a viable business concept and understanding your market" },
  { icon: DollarSign,  text: "Designing your profit model" },
  { icon: Settings,    text: "Setting up operations properly" },
  { icon: Megaphone,   text: "Marketing your venture" },
  { icon: BarChart3,   text: "Understanding the basic numbers" },
];

const sessions = [
  { num: 1, title: "Bootcamp Basics: The Entrepreneurial Dream",          desc: "It All Starts with an Idea; Thinking the Entrepreneurial Way; The Nature of the Entrepreneurial Experience; Entrepreneurship as a Process; Key Competencies and Skills; The Four Types of Ventures; The Commodity Trap; Opportunity versus Concept." },
  { num: 2, title: "What You Need to Know About the Numbers",             desc: "Understanding Your Model for Making Money; Basic Economics of Your Business; Determining How Much You Have to Sell to Survive; What You Really Need to Know About Financial Statements; Why Cash Flow is King." },
  { num: 3, title: "Planning, Thinking Strategically, and Managing Risk", desc: "Working On Your Business Not Just In Your Business; Planning versus the Business Plan; Audiences for Plans; The Logic and Structure of a Good Plan; Strategic Thinking, Your Profit Model; Mitigating Risks." },
  { num: 4, title: "Getting Resources (Including Money) When You Don't Have Any", desc: "How to Bootstrap and Leverage Resources; How Much Money; Sources of Money; When to Use What Source; How to Approach the Various Sources; What an Entrepreneur Needs to Know About Negotiation." },
  { num: 5, title: "Customers Drive the Business",                        desc: "Markets and Marketing; Understanding Your Customers; Segmenting the Market; The Guerrilla Concept; Doing More with Marketing While Spending Less; Entrepreneurial Approaches to Core Marketing Decisions." },
  { num: 6, title: "Operations and Other Fundamentals that Matter",       desc: "Formal Operations; Designing Your Formal Operating Model; A Day in the Life — Value, Quality, Bottlenecks, Suppliers; Finding People: Employees and Staffing Issues; Forms of Organization." },
];

const mindsetOutcomes = [
  "Identify and evaluate opportunities that others overlook",
  "Transform a simple idea into a sustainable success",
  "Embrace an entrepreneurial mindset as a life-skill",
  "Identify and overcome self-limiting beliefs",
];

const Programming = () => {
  const [openSession, setOpenSession] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy relative overflow-hidden min-h-[72vh] flex items-end">
        <img
          src="/images/img_32.jpg"
          alt="BizStarts Institute classroom"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal" />

        <div className="relative z-10 container px-8 pb-20 pt-48">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-xs">
                6 Weeks · In-Person · Milwaukee
              </span>
            </div>
            <h1
              className="font-headline font-bold uppercase text-primary-foreground leading-none max-w-3xl"
              style={{ fontSize: "clamp(44px, 8vw, 100px)", letterSpacing: "-0.02em" }}
            >
              BizStarts<br /><span className="text-teal">Institute</span>
            </h1>
            <p className="mt-6 text-primary-foreground/55 font-body text-xl max-w-xl leading-relaxed">
              Community Bootcamp + Entrepreneurial Mindset Training — built for real people starting real businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EN / ES TOGGLE ── */}
      <section className="bg-off-white py-5 border-b border-border">
        <div className="container flex items-center justify-center gap-3 flex-wrap">
          <span className="font-barlow font-semibold text-[11px] text-charcoal/35 uppercase tracking-widest mr-1">
            Program Language:
          </span>
          {/* Active — English */}
          <span className="rounded-full bg-teal px-7 py-2.5 font-barlow font-bold text-sm text-primary-foreground shadow cursor-default">
            🇺🇸 English — BizStarts Institute
          </span>
          {/* Inactive — Spanish */}
          <Link
            to="/instituto-latino"
            className="rounded-full border-2 border-teal bg-transparent px-7 py-2.5 font-barlow font-bold text-sm text-teal hover:bg-teal hover:text-primary-foreground transition-all duration-200"
          >
            🇲🇽 Spanish — Instituto Latino
          </Link>
        </div>
      </section>

      {/* ── EVENT CARD ── */}
      <section className="py-12 bg-teal">
        <div className="container max-w-3xl">
          <div className="bg-primary-foreground rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Date badge */}
              <div className="bg-teal rounded-xl px-6 py-5 text-center text-primary-foreground flex-shrink-0 self-start">
                <p className="font-barlow font-bold text-[10px] uppercase leading-none mb-1">Fall</p>
                <p className="font-headline text-5xl font-bold leading-none">26</p>
                <p className="font-barlow font-bold text-[10px] uppercase leading-none mt-1">2026</p>
              </div>
              <div className="flex-1">
                <p className="font-barlow font-bold text-teal text-xs uppercase tracking-widest mb-2">
                  Now Enrolling
                </p>
                <h3 className="font-headline text-2xl md:text-3xl font-bold uppercase text-navy leading-tight">
                  Community Bootcamp for Entrepreneurs
                </h3>
                <div className="mt-5 space-y-2.5 text-charcoal/65 font-body text-sm">
                  <div className="flex items-start gap-2.5">
                    <Calendar size={15} className="text-teal flex-shrink-0 mt-0.5" />
                    Fall 2026 · 6 consecutive Sundays
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-teal flex-shrink-0 mt-0.5" />
                    The Amani Place · 401 N 35th St, Milwaukee, WI 53208
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock size={15} className="text-teal flex-shrink-0 mt-0.5" />
                    IHEP Mindset Training: Dates TBD (Virtual)
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-base px-10 py-3 inline-flex items-center gap-2"
                  >
                    Apply Here <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://www.carthage.edu/about/divisions-centers-institutes/school-of-business-economics/bizstarts-kenosha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-teal bg-transparent px-8 py-3 font-barlow font-bold text-teal hover:bg-teal hover:text-white transition-all duration-200 inline-flex"
                  >
                    Bizstarts Kenosha
                  </a>
                  <a
                    href="https://rcedc.org/bre/bizstarts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-teal bg-transparent px-8 py-3 font-barlow font-bold text-teal hover:bg-teal hover:text-white transition-all duration-200 inline-flex"
                  >
                    Bizstarts Racine
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-card">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-12 items-start">
            <ScrollReveal>
              <div>
                <div className="w-8 h-0.5 bg-gold mb-6" />
                <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase text-navy leading-tight">
                  About BizStarts Institute
                </h2>
                <p className="mt-6 text-charcoal/70 font-body text-lg leading-relaxed">
                  BizStarts has been serving entrepreneurs in the Milwaukee region for over a decade. Seeing the need in our community for a credentialed system of learning "Entrepreneurship in Adversity", we started the BizStarts Institute. Since 2020, we have been offering the BizStarts Institute to the Milwaukee community.
                </p>
                <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                  Since the program's inception, BizStarts has expanded its reach and accessibility by providing ASL interpreters, translating the curriculum into Spanish, and partnering with organizations in Racine and Kenosha to deliver the Institute to even more entrepreneurs.
                </p>
              </div>
            </ScrollReveal>
            <div className="hidden lg:block self-stretch bg-border" />
            <ScrollReveal delay={120}>
              <div className="lg:pt-14">
                <p className="text-charcoal/70 font-body text-lg leading-relaxed">
                  In creating this program BizStarts sought support from University of Notre Dame Professor and Director of the Urban Poverty Business Initiative, Michael Morris. Michael's programs are renowned for creating companies from people in poverty throughout the world.
                </p>
                <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                  BizStarts Institute is an intense, hands-on exposure to the fundamentals of launching and growing a successful venture, taught by seasoned faculty, subject matter experts, and successful entrepreneurs. The bootcamp occurs on six consecutive Sunday Afternoons. Year-long mentorship is available after the initial 6-week program!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TEACH BY DOING — dark strip ── */}
      <section className="bg-navy py-16">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
              {[
                { label: "Accounting", action: "create real financial records" },
                { label: "Marketing",  action: "run real social media pages" },
                { label: "Sales",      action: "actively seek real customers" },
              ].map((item) => (
                <div key={item.label} className="py-8 px-10 text-center">
                  <p className="font-barlow font-bold text-white text-[11px] uppercase tracking-widest mb-3">
                    You won't just learn
                  </p>
                  <p className="font-headline text-3xl font-bold uppercase text-teal">{item.label}</p>
                  <div className="w-8 h-0.5 bg-gold mx-auto my-3" />
                  <p className="font-body text-primary-foreground/50 text-sm">You'll {item.action}.</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="py-24 bg-off-white">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl font-bold uppercase text-navy">Topics Covered</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((t, i) => (
              <ScrollReveal key={t.text} delay={i * 55}>
                <div className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm border-l-4 border-teal">
                  <t.icon size={20} className="text-teal mt-0.5 flex-shrink-0" />
                  <p className="text-charcoal/70 font-body">{t.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-charcoal/45 font-body text-sm leading-relaxed text-center max-w-2xl mx-auto">
            Our underlying focus is how to think and act in entrepreneurial ways — including how to do more with less — and how to grow a venture when you have little in the way of resources.
          </p>
        </div>
      </section>

      {/* ── SESSION BREAKDOWN ── */}
      <section className="py-24 bg-card">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl font-bold uppercase text-navy">Session Breakdown</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {sessions.map((s) => (
              <ScrollReveal key={s.num}>
                <div className={`rounded-2xl overflow-hidden transition-all duration-200 ${openSession === s.num ? "bg-navy shadow-lg" : "bg-off-white"}`}>
                  <button
                    onClick={() => setOpenSession(openSession === s.num ? null : s.num)}
                    className="w-full flex items-center justify-between px-8 py-5 text-left gap-4"
                  >
                    <span className={`font-barlow font-bold ${openSession === s.num ? "text-primary-foreground" : "text-navy"}`}>
                      <span className="text-teal mr-2">Session {s.num}:</span>{s.title}
                    </span>
                    {openSession === s.num
                      ? <ChevronUp size={18} className="text-teal flex-shrink-0" />
                      : <ChevronDown size={18} className="text-teal flex-shrink-0" />}
                  </button>
                  {openSession === s.num && (
                    <div className="px-8 pb-6">
                      <p className="text-primary-foreground/55 font-body text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MINDSET TRAINING ── */}
      <section className="py-24 bg-off-white">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                  <Brain size={28} className="text-teal" />
                </div>
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase text-navy">
                  Entrepreneurial Mindset Training
                </h2>
                <p className="mt-5 text-charcoal/70 font-body text-lg leading-relaxed">
                  After the bootcamp, graduates complete two virtual sessions based on the Ice House Entrepreneurship Program (Small Business Edition) — certified by the Kauffman Foundation.
                </p>
                <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                  Fall 2026 dates: <strong className="text-navy">TBD</strong> (Virtual).
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="bg-navy rounded-2xl p-9 shadow-xl">
                <p className="font-barlow font-bold text-primary-foreground/35 text-[11px] uppercase tracking-widest mb-6">
                  Participants Will Learn To:
                </p>
                <ul className="space-y-4">
                  {mindsetOutcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-teal mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/65 font-body text-sm leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT CONSULTANT ── */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <h3 className="font-headline text-3xl font-bold uppercase text-navy mb-4">
              Student Consultant Program
            </h3>
            <p className="text-charcoal/70 font-body text-lg mb-8 max-w-2xl mx-auto">
              Interested in being a student consultant? Send us an email!
            </p>
            <a
              href="mailto:info@bizstarts.com"
              className="btn-primary text-base px-8 py-3 inline-flex items-center gap-2"
            >
              Contact Us
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section className="py-24 bg-teal relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-headline font-bold uppercase text-primary-foreground/[0.06] whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 14vw, 190px)" }}
          >
            APPLY NOW
          </span>
        </div>
        <div className="relative z-10 container text-center text-primary-foreground">
          <h2
            className="font-headline font-bold uppercase leading-none"
            style={{ fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            Ready to Start?
          </h2>
          <p className="mt-4 text-primary-foreground/75 font-body text-xl max-w-lg mx-auto">
            Apply now for the next BizStarts Institute cohort — fall 2026 is enrolling now.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary-foreground px-12 py-4 font-barlow font-bold text-teal text-[15px] shadow-xl hover:text-navy hover:-translate-y-1 transition-all duration-200"
            >
              Apply Today <ArrowRight size={18} className="inline ml-1" />
            </a>
            <a
              href="https://www.carthage.edu/about/divisions-centers-institutes/school-of-business-economics/bizstarts-kenosha/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-primary-foreground bg-transparent px-8 py-4 font-barlow font-bold text-primary-foreground hover:bg-primary-foreground hover:text-teal transition-all duration-200"
            >
              Bizstarts Kenosha
            </a>
            <a
              href="https://rcedc.org/bre/bizstarts/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-primary-foreground bg-transparent px-8 py-4 font-barlow font-bold text-primary-foreground hover:bg-primary-foreground hover:text-teal transition-all duration-200"
            >
              Bizstarts Racine
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programming;
