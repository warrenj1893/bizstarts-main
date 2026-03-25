import { ScrollReveal } from "@/components/ScrollReveal";
import BusinessModelCanvas from "@/components/BusinessModelCanvas";

const posts = [
  {
    title: "5 Things Every New Business Owner Should Know",
    excerpt: "Starting a business is exciting, but these foundational principles can save you time and money. Learn what seasoned entrepreneurs wish they knew from day one.",
    cat: "Tips",
    img: "/images/img_19.jpg",
    featured: true,
  },
  {
    title: "Milwaukee Barter: Trade Your Services",
    excerpt: "Conserve cash and expand your business reach by trading your goods and services directly with other local businesses using the Milwaukee Barter platform.",
    cat: "Strategy",
    img: "/images/img_5.jpg",
    featured: false,
    link: "https://milwaukeebarter.com/",
  },
  {
    title: "Start Planning: The Business Model Canvas",
    excerpt: "A business plan doesn't have to be 50 pages. Use our interactive Business Model Canvas at the top of this page to build a lean, actionable plan today.",
    cat: "Planning",
    img: "/images/img_17.jpg",
    featured: false,
    link: "#canvas",
  },
  {
    title: "The Power of Mentorship in Entrepreneurship",
    excerpt: "Having a mentor can be the difference between giving up and breaking through. Discover how BizStarts mentors make an impact.",
    cat: "Mentoring",
    img: "/images/img_18.jpg",
    featured: false,
  },
  {
    title: "BizStarts Institute Graduate Spotlight",
    excerpt: "Meet the latest graduates of BizStarts Institute and learn how the program helped them launch and grow their businesses.",
    cat: "Stories",
    img: "/images/img_12.jpg",
    featured: false,
  },
  {
    title: "Understanding Your Business Finances from Day One",
    excerpt: "Financial literacy is crucial for entrepreneurs. Here's how to set up your books, understand cash flow, and plan for profitability.",
    cat: "Finance",
    img: "/images/img_13.jpg",
    featured: false,
  },
];

const catColors: Record<string, string> = {
  Tips: "bg-teal text-white",
  Strategy: "bg-navy text-white",
  Planning: "bg-gold text-navy",
  Mentoring: "bg-teal text-white",
  Stories: "bg-navy text-white",
  Finance: "bg-gold text-navy",
};

const featured = posts[0];
const grid = posts.slice(1);

const NewsAndResources = () => (
  <>
    {/* Hero — editorial masthead */}
    <section className="bg-navy py-16 md:py-24 overflow-hidden relative">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-headline font-bold uppercase text-primary-foreground/[0.03] whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 14vw, 200px)", letterSpacing: "-0.02em" }}
        >
          NEWS & RESOURCES
        </span>
      </div>
      <div className="relative z-10 container text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gold" />
          <span className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-xs">
            BizStarts
          </span>
          <div className="h-px w-16 bg-gold" />
        </div>
        <h1
          className="font-headline font-bold uppercase text-primary-foreground leading-none"
          style={{ fontSize: "clamp(48px, 9vw, 110px)", letterSpacing: "-0.02em" }}
        >
          News &
          <br />
          <span className="text-teal">Resources</span>
        </h1>
        <p className="mt-6 text-primary-foreground/60 font-body text-lg max-w-xl mx-auto">
          Tips, stories, and resources from the BizStarts community.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-xs bg-primary-foreground/10" />
          <span className="font-barlow text-primary-foreground/30 text-xs uppercase tracking-widest">
            Milwaukee's Entrepreneur Resource
          </span>
          <div className="h-px flex-1 max-w-xs bg-primary-foreground/10" />
        </div>

        <ScrollReveal>
          <BusinessModelCanvas />
        </ScrollReveal>
      </div>
    </section>

    {/* Featured Post */}
    <section className="bg-card">
      <ScrollReveal>
        <div className="container py-0">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            <div className="relative overflow-hidden min-h-[320px] lg:min-h-0">
              <img
                src={featured.img}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
              <div className="absolute top-6 left-6">
                <span className="bg-gold text-navy font-barlow font-bold text-xs uppercase tracking-widest px-4 py-2">
                  ★ Featured
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-10 lg:p-16 border-l border-border">
              <span
                className={`self-start font-barlow font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full ${catColors[featured.cat]}`}
              >
                {featured.cat}
              </span>
              <h2 className="mt-4 font-headline text-3xl md:text-4xl font-bold uppercase text-navy leading-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                {featured.excerpt}
              </p>
              <a
                href="#"
                className="mt-8 self-start inline-flex items-center gap-3 font-barlow font-bold text-navy uppercase tracking-widest text-sm group"
              >
                Read Full Article
                <span className="w-8 h-px bg-navy group-hover:w-14 transition-all duration-300 inline-block" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>

    {/* Divider strip */}
    <div className="bg-teal py-4">
      <div className="container flex items-center gap-4">
        <div className="h-px flex-1 bg-primary-foreground/20" />
        <span className="font-barlow font-bold text-primary-foreground uppercase tracking-[0.25em] text-xs">
          Latest Articles
        </span>
        <div className="h-px flex-1 bg-primary-foreground/20" />
      </div>
    </div>

    {/* Magazine grid */}
    <section className="py-20 bg-off-white">
      <div className="container">
        {/* Row 1 — two tall overlay cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {grid.slice(0, 2).map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <article className="group flex flex-col overflow-hidden rounded-2xl shadow-lg h-[420px] cursor-pointer bg-navy transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-primary-foreground/5">
                <div className="relative h-[210px] w-full overflow-hidden shrink-0 bg-off-white">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <span
                    className={`absolute top-4 left-4 font-barlow font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full ${catColors[p.cat]}`}
                  >
                    {p.cat}
                  </span>
                </div>
                <div className="relative flex-1 p-8 flex flex-col justify-start bg-navy">
                  <h3 className="font-headline text-2xl font-bold uppercase text-white leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-white/75 font-body text-sm line-clamp-3">
                    {p.excerpt}
                  </p>
                  <a
                    href={(p as any).link || "#"}
                    target={(p as any).link?.startsWith("http") ? "_blank" : undefined}
                    className="mt-auto inline-flex items-center gap-2 font-barlow font-semibold text-teal text-sm pt-4 hover:gap-4 transition-all"
                  >
                    { (p as any).link?.startsWith("http") ? "Visit Site →" : "Read More →" }
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2 — three standard cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {grid.slice(2).map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 80}>
              <article className="group bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span
                    className={`absolute top-3 left-3 font-barlow font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full ${catColors[p.cat]}`}
                  >
                    {p.cat}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-8 h-0.5 bg-teal mb-4" />
                  <h3 className="font-headline text-lg font-bold uppercase text-navy leading-tight flex-1">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-charcoal/60 font-body text-sm line-clamp-3">
                    {p.excerpt}
                  </p>
                  <a
                    href={(p as any).link || "#"}
                    target={(p as any).link?.startsWith("http") ? "_blank" : "_self"}
                    className="mt-5 inline-flex items-center gap-2 font-barlow font-semibold text-teal text-sm hover:gap-4 transition-all"
                  >
                    { (p as any).link?.startsWith("http") ? "Visit Site →" : ((p as any).link?.startsWith("#") ? "Get Started →" : "Read More →") }
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter CTA */}
    <section className="py-20 bg-navy relative overflow-hidden">
      <div
        className="absolute -top-10 -left-8 font-headline font-bold text-primary-foreground/[0.04] leading-none select-none pointer-events-none"
        style={{ fontSize: "300px" }}
        aria-hidden="true"
      >
        "
      </div>
      <div className="relative z-10 container text-center text-primary-foreground">
        <div className="w-16 h-1 bg-gold mx-auto mb-6" />
        <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">
          Never Miss a Story
        </h2>
        <p className="mt-4 text-primary-foreground/60 font-body text-lg max-w-xl mx-auto">
          Get tips, entrepreneur spotlights, and upcoming events delivered straight to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-full px-6 py-3 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal"
          />
          <button
            type="submit"
            className="w-full sm:w-auto rounded-full bg-teal px-8 py-3 font-barlow font-bold text-primary-foreground hover:bg-teal/80 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </>
);

export default NewsAndResources;
