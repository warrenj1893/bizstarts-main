import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Users, Lightbulb, Handshake, ArrowRight, MapPin, Clock, GraduationCap, Sparkles, Wine, Building, ShoppingBag, X } from "lucide-react";
import { allEvents } from "@/data/events";
import { JOTFORM_URL } from "@/lib/constants";
import NewsletterForm from "@/components/NewsletterForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setCount(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

const testimonials = [
  { quote: "BizStarts truly saved my business. I was ready to give up after almost four years and go back to the corporate world. The staff were so loving and caring. They truly encouraged me to stay in the game.", name: "Christal Shipp", business: "CTRLC", img: "/images/img_20.jpg" },
  {
    quote: "Greenhaven was lucky enough to be accepted into the latest BizStarts Institute cohort 7 in 2024. I learned how to better the business and made some valuable connections. Everything from planning and strategy to understanding customers was covered and I use the knowledge that I gained everyday.",
    name: "Jessica Tassoul",
    business: "GreenHaven",
    img: "/jessica-tassoul.jpg?v=2"
  },
  { quote: "BizStarts has been an invaluable part of my entrepreneurial journey. Their support, resources, and mentorship have helped me refine my business strategy and gain clarity on my goals.", name: "Dayanne Quintero", business: "", img: "/images/img_21.jpg" },
  { 
    quote: "BizStarts changed my life. I thought about giving up on my business because I was exhausted and confused. This community reminded me that it is all possible in smaller steps.", 
    name: "Emily Honor Hubbard", 
    business: "", 
    img: "/emily-hubbard.jpg?v=2" 
  },
];

const sponsors = ["WEDC", "Wells Fargo", "Town Bank Wintrust", "LISC Milwaukee", "Greater Milwaukee Foundation", "Associated Bank", "BMO", "Heartland Bank", "US Bank", "EY", "Godfrey & Kahn", "DeWitt", "Taureau Group", "WHEDA"];



const services = [
  { icon: GraduationCap, title: "BizStarts Institute", desc: "Hands-on entrepreneurial education designed for new and growing business owners. Six weeks. Real results.", img: "/images/img_2.jpg", pos: "object-top" },
  { icon: Sparkles, title: "First Launch", desc: "An entrepreneurship summer camp designed for middle school students — building the next generation of Milwaukee business owners.", img: "/images/img_15.jpg", pos: "object-top" },
  { icon: Wine, title: "Cocktails & Connections", desc: "A casual, hands-on workshop series pairing professional development with real relationship-building. Come for the learning, stay for the conversations.", img: "/images/img_1.jpg", pos: "object-[center_15%]" },
  { icon: Handshake, title: "Coaching", desc: "Work with a business coach to explore your ideas and challenges, then create an actionable plan to gain traction in your business.", img: "/images/img_32.jpg", pos: "object-top" },
  { icon: Building, title: "Hometown Heroes", desc: "Empowering local businesses to thrive and make a lasting impact in their neighborhoods.", img: "/images/img_18.jpg", pos: "object-top" },
  { icon: ShoppingBag, title: "Retail Resources", desc: "Equipping retail entrepreneurs with the tools and strategies they need to succeed in today's market.", img: "/images/img_5.jpg", pos: "object-[center_20%]" },
];

const Index = () => {
  const [activeTest, setActiveTest] = useState(0);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const stat1 = useCountUp(1000);
  const stat2 = useCountUp(15);

  useEffect(() => {
    const t = setInterval(() => setActiveTest((p) => (p + 1) % testimonials.length), 5000);
    
    // Show newsletter popup after 5 seconds
    const popupTimer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("has_seen_newsletter_popup");
      if (!hasSeenPopup) {
        setShowNewsletter(true);
      }
    }, 5000);

    return () => {
      clearInterval(t);
      clearTimeout(popupTimer);
    };
  }, []);

  const handleCloseNewsletter = () => {
    setShowNewsletter(false);
    localStorage.setItem("has_seen_newsletter_popup", "true");
  };

  return (
    <>
      {/* ── HERO — cinematic, full-viewport, left-anchored ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src="/images/hero_home_final.png"
          alt="Entrepreneur working"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
        {/* Gradient: clear top → dark navy bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10" />
        {/* Teal left accent rule */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal" />

        <div className="relative z-10 container px-8 pb-24 pt-48">
          <ScrollReveal>
            <p className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-sm mb-5">
              You Are Our Mission
            </p>
            <h1
              className="font-headline font-bold uppercase text-primary-foreground leading-[0.92] max-w-4xl"
              style={{ fontSize: "clamp(52px, 8vw, 100px)", letterSpacing: "-0.01em" }}
            >
              Creating Opportunities<br />Through<br /><span className="text-teal">Entrepreneurship</span>
            </h1>
            <p className="mt-8 text-primary-foreground/65 font-body text-xl max-w-lg leading-relaxed">
              Whether your business is in the pre-revenue stage or your doors are already open, we provide structured guidance to clear the path for your next step forward!
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/entrepreneurs" className="btn-primary text-lg px-10 py-4 flex items-center gap-2">
                Begin BizStarts <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn-hero-outline text-lg px-10 py-4">Learn More</Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Subtle scroll hint */}
        <div className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2">
          <span className="font-barlow text-[10px] uppercase tracking-[0.25em] text-primary-foreground/25" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <div className="w-px h-10 bg-primary-foreground/15 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 bg-teal animate-bounce" style={{ height: "40%" }} />
          </div>
        </div>
      </section>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="bg-gold py-3">
        <div className="container flex items-center justify-center gap-3 text-navy font-barlow font-semibold text-sm md:text-base">
          <span>🎓 BizStarts Institute Spring 2026 Cohort — Now Enrolling!</span>
          <Link to="/programming" className="inline-flex items-center gap-1 underline hover:no-underline font-bold">
            Apply Today <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── SERVICES — full-bleed overlay cards ── */}
      <section className="py-24 bg-card">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-navy">
                It All Starts With Your Idea
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 130}>
                <div className="group relative overflow-hidden rounded-3xl shadow-xl h-[420px] bg-card">
                  <img
                    src={s.img}
                    alt={s.title}
                    className={`absolute inset-0 w-full h-full object-cover ${s.pos} group-hover:scale-110 transition-transform duration-700`}
                  />
                  
                  {/* Creative overlay at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-navy/95 backdrop-blur-md border-t border-primary-foreground/10 p-6 pt-8 h-[220px] flex flex-col justify-start translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    
                    {/* Floating Icon */}
                    <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-teal flex items-center justify-center shadow-lg border-4 border-navy group-hover:-translate-y-1 transition-transform duration-300">
                      <s.icon size={24} className="text-primary-foreground" />
                    </div>

                    {/* Fixed height container for headers to ensure subtext aligns */}
                    <div className="h-[60px] flex items-start">
                      <h3 className="font-headline text-xl lg:text-2xl font-bold uppercase text-primary-foreground leading-tight line-clamp-2">
                        {s.title}
                      </h3>
                    </div>
                    
                    <p className="mt-2 text-primary-foreground/70 font-body text-sm leading-relaxed line-clamp-3">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/entrepreneurs" className="btn-primary flex items-center gap-2 w-fit mx-auto">
                Explore All Services <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── IMPACT NUMBERS — dark, ghost watermark ── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-headline font-bold uppercase text-primary-foreground/[0.03] whitespace-nowrap"
            style={{ fontSize: "clamp(70px, 14vw, 190px)" }}
          >
            IMPACT
          </span>
        </div>
        <div className="relative z-10 container grid md:grid-cols-3">
          <div ref={stat1.ref} className="text-center py-10 md:border-r border-primary-foreground/10">
            <p className="font-headline font-bold text-primary-foreground leading-none" style={{ fontSize: "clamp(60px, 8vw, 96px)" }}>
              {stat1.count.toLocaleString()}+
            </p>
            <div className="w-10 h-0.5 bg-teal mx-auto my-3" />
            <p className="font-barlow font-semibold text-primary-foreground/45 text-xs uppercase tracking-widest">Entrepreneurs Served</p>
          </div>
          <div ref={stat2.ref} className="text-center py-10 md:border-r border-primary-foreground/10">
            <p className="font-headline font-bold text-primary-foreground leading-none" style={{ fontSize: "clamp(60px, 8vw, 96px)" }}>
              {stat2.count}+
            </p>
            <div className="w-10 h-0.5 bg-teal mx-auto my-3" />
            <p className="font-barlow font-semibold text-primary-foreground/45 text-xs uppercase tracking-widest">Years in Milwaukee</p>
          </div>
          <div className="text-center py-10">
            <p className="font-headline font-bold text-teal leading-none" style={{ fontSize: "clamp(60px, 8vw, 96px)" }}>
              Free
            </p>
            <div className="w-10 h-0.5 bg-teal mx-auto my-3" />
            <p className="font-barlow font-semibold text-primary-foreground/45 text-xs uppercase tracking-widest">Coaching & Education</p>
          </div>
        </div>
      </section>

      {/* ── EVENTS — bold horizontal rows, color-coded date badges ── */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-4 mb-14 flex-wrap">
              <div>
                <div className="w-14 h-1 bg-gold mb-5" />
                <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-navy leading-none">
                  Upcoming Events
                </h2>
              </div>
              <Link
                to="/events"
                className="font-barlow font-bold text-sm uppercase tracking-widest text-teal inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                View All Events <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {allEvents.slice(0, 3).map((ev, i) => (
              <ScrollReveal key={ev.title} delay={i * 90}>
                <div className="group grid sm:grid-cols-[88px_1fr_auto] items-center gap-5 bg-card rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  {/* Date badge */}
                  <div className={`${ev.accent} rounded-xl flex flex-col items-center justify-center py-4 px-2 flex-shrink-0`}>
                    <span className="font-barlow font-bold text-[10px] uppercase leading-none text-white mb-1">{ev.month}</span>
                    <span className="font-headline text-4xl font-bold leading-none text-white">{ev.day}</span>
                  </div>
                  {/* Info */}
                  <div className="min-w-0">
                    <h3 className="font-headline text-xl font-bold uppercase text-navy group-hover:text-teal transition-colors leading-tight">
                      {ev.title}
                    </h3>
                    <p className="mt-1 text-charcoal/55 font-body text-sm">{ev.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-charcoal/45 font-body">
                      <span className="flex items-center gap-1.5"><MapPin size={11} className="text-teal" />{ev.loc}</span>
                      <span className="flex items-center gap-1.5"><Clock size={11} className="text-teal" />{ev.time}</span>
                    </div>
                  </div>
                  {/* Register CTA */}
                  <a
                    href="#"
                    className="btn-primary text-sm px-6 py-2.5 flex-shrink-0 flex items-center gap-2 self-center"
                  >
                    Register <ArrowRight size={13} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — dark, editorial ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Ghost quote mark */}
        <div
          className="absolute -top-12 -left-6 font-headline font-bold leading-none text-primary-foreground/[0.04] pointer-events-none select-none"
          style={{ fontSize: "320px" }}
          aria-hidden="true"
        >
          "
        </div>
        <div className="relative z-10 container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-primary-foreground">
                What Our Entrepreneurs Say
              </h2>
            </div>
          </ScrollReveal>

          {/* Carousel */}
          <div className="relative max-w-3xl mx-auto text-center" style={{ minHeight: "300px" }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                style={{
                  position: i === activeTest ? "relative" : "absolute",
                  inset: 0,
                  opacity: i === activeTest ? 1 : 0,
                  transition: "opacity 700ms ease-in-out",
                  pointerEvents: i === activeTest ? "auto" : "none",
                }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-teal shadow-lg"
                />
                <blockquote className="mt-6 text-xl md:text-2xl italic text-primary-foreground/70 font-body leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <p className="mt-5 font-barlow font-bold text-primary-foreground text-lg">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>

          {/* Pill dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTest(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeTest ? "w-8 h-2 bg-teal" : "w-2 h-2 bg-primary-foreground/20"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-teal relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-headline font-bold uppercase text-primary-foreground/[0.06] whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 15vw, 200px)" }}
          >
            START NOW
          </span>
        </div>
        <div className="relative z-10 container text-center text-primary-foreground">
          <h2
            className="font-headline font-bold uppercase leading-none"
            style={{ fontSize: "clamp(48px, 8vw, 100px)" }}
          >
            Starting Is Easy.
          </h2>
          <p className="mt-5 text-xl font-body text-primary-foreground/75 max-w-lg mx-auto">
            Just make your first appointment and we'll do the rest. Free. No commitment. No catch.
          </p>
          <Link
            to="/entrepreneurs"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-12 py-5 font-barlow font-bold text-teal text-lg shadow-xl hover:text-navy hover:-translate-y-1 transition-all duration-200"
          >
            Begin BizStarts <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <section className="py-14 bg-card overflow-hidden">
        <div className="container mb-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <p className="font-barlow font-semibold text-[11px] uppercase tracking-[0.22em] text-navy/35 whitespace-nowrap">
              All Made Possible By Our Incredible Sponsors
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-left w-max">
            {[...sponsors, ...sponsors].map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 px-7 py-4 bg-off-white rounded-xl border border-border flex items-center justify-center min-w-[155px]"
              >
                <span className="font-barlow font-bold text-sm text-charcoal/35 uppercase tracking-wider">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER POPUP ── */}
      <Dialog open={showNewsletter} onOpenChange={setShowNewsletter}>
        <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none rounded-3xl">
          <div className="relative">
            {/* Background Image/Pattern */}
            <div className="bg-navy p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-teal/10 opacity-50" />
              <div className="relative z-10">
                <div className="w-12 h-1 bg-gold mx-auto mb-6" />
                <DialogTitle className="font-headline text-3xl font-bold uppercase text-primary-foreground mb-2">
                  Stay Connected
                </DialogTitle>
                <DialogDescription className="text-primary-foreground/60 font-body text-base">
                  Join our community of entrepreneurs and get the latest resources delivered to your inbox.
                </DialogDescription>
              </div>
            </div>
            
            <div className="p-8 bg-white">
              <NewsletterForm />
              <p className="mt-4 text-center text-[10px] text-charcoal/40 font-body">
                By subscribing, you agree to receive updates from BizStarts Milwaukee.
              </p>
            </div>

            <button 
              onClick={handleCloseNewsletter}
              className="absolute top-4 right-4 text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
