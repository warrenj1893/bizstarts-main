import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Star, Award, Heart } from "lucide-react";

export default function AnnualEvent() {
  const sponsorships = [
    { level: "Presenting Sponsor", price: "$25,000", perks: ["3 Premier Tables (30 tickets)", "Stage recognition", "Premium logo placement", "VIP Reception access"] },
    { level: "Platinum Sponsor", price: "$15,000", perks: ["2 Preferred Tables (20 tickets)", "Verbal recognition", "Prominent logo placement", "VIP Reception access"] },
    { level: "Gold Sponsor", price: "$10,000", perks: ["1 Preferred Table (10 tickets)", "Logo placement", "VIP Reception access"] },
    { level: "Silver Sponsor", price: "$5,000", perks: ["1 Standard Table (10 tickets)", "Name recognition in program"] },
    { level: "Bronze Sponsor", price: "$2,500", perks: ["Half Table (5 tickets)", "Name recognition in program"] },
  ];

  const pastHonorees = [
    { name: "Placeholder Honoree 1", business: "Company A", year: "2025" },
    { name: "Placeholder Honoree 2", business: "Company B", year: "2025" },
    { name: "Placeholder Honoree 3", business: "Company C", year: "2025" },
    { name: "Placeholder Honoree 4", business: "Company D", year: "2025" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-off-white font-body text-charcoal">
      {/* ── HERO HEADER ── */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80')] bg-cover bg-center opacity-20 Mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-navy/40" />
        
        <div className="container relative z-10 text-center max-w-4xl text-primary-foreground">
          <ScrollReveal>
            <p className="font-barlow font-bold text-gold tracking-[0.2em] uppercase mb-4">BizStarts Annual Fundraiser</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
              The Best is<br/><span className="text-teal">Yet to Come</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-primary-foreground/80 font-light mb-10 max-w-2xl mx-auto">
              Join us for an unforgettable evening celebrating the resilience, passion, and spirit of Milwaukee's underserved and low-income entrepreneurs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-barlow font-bold text-lg mb-12">
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                <Calendar className="text-teal" size={24} />
                November 19, 2026
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                <MapPin className="text-gold" size={24} />
                Venue 3, Milwaukee
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#sponsor" className="btn-primary py-4 px-10 text-lg hover:bg-gold hover:text-navy hover:border-gold transition-colors">
                Become a Sponsor
              </a>
              <Link to="/contact" className="border-2 border-primary-foreground/30 hover:bg-primary-foreground hover:text-navy py-4 px-10 rounded-full font-barlow font-bold text-lg transition-colors">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 bg-card relative">
        <div className="container max-w-4xl text-center">
          <ScrollReveal>
            <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            <h2 className="font-headline text-4xl font-bold uppercase text-navy mb-8">Empowering The Dreamers</h2>
            <p className="text-xl text-charcoal/80 leading-relaxed font-light">
              This annual fundraiser directly supports our mission to assist underserved and low-income entrepreneurs in the Milwaukee region. Your attendance and sponsorships ensure that these visionary individuals receive the coaching, resources, and connections they need to turn their business dreams into thriving realities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── INSPIRATIONAL ENTREPRENEURS ── */}
      <section className="py-24 bg-navy text-primary-foreground relative overflow-hidden">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
        
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Star className="text-gold mx-auto mb-4" size={40} />
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-4">Inspirational Entrepreneurs</h2>
              <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg mb-8">
                Each year we recognize people who have overcome incredible adversity to build successful businesses and uplift their communities. While we are currently selecting our 2026 honorees, we invite you to look back at our incredible 2025 class.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {pastHonorees.map((h, i) => (
              <ScrollReveal key={h.name} delay={i * 100}>
                <div className="bg-card text-charcoal p-8 rounded-2xl text-center shadow-xl border border-border group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-24 h-24 mx-auto bg-off-white rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-navy group-hover:border-teal transition-colors">
                    <UserIcon />
                  </div>
                  <h3 className="font-headline text-xl font-bold uppercase text-navy mb-2">{h.name}</h3>
                  <p className="font-barlow font-bold text-teal text-sm tracking-wide uppercase mb-1">{h.business}</p>
                  <p className="text-charcoal/40 text-xs font-bold uppercase tracking-widest">Class of {h.year}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPONSORSHIP LEVELS ── */}
      <section id="sponsor" className="py-24 bg-off-white">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-navy mb-4">Sponsorship Opportunities</h2>
              <p className="text-charcoal/60 text-lg">Leave a lasting impact on Milwaukee's economy.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {sponsorships.map((tier, i) => (
              <ScrollReveal key={tier.level} delay={i * 50}>
                <div className="bg-card rounded-2xl p-8 sm:p-10 shadow-lg border-l-4 border-teal flex flex-col sm:flex-row items-center justify-between gap-8 hover:shadow-xl transition-shadow">
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-headline text-3xl font-bold uppercase text-navy mb-2">{tier.level}</h3>
                    <p className="font-barlow font-bold text-teal text-2xl mb-6">{tier.price}</p>
                    <ul className="space-y-3">
                      {tier.perks.map((perk, j) => (
                        <li key={j} className="flex items-center gap-3 text-charcoal/80 font-medium">
                          <Heart size={16} className="text-gold flex-shrink-0" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <a href="mailto:info@bizstarts.com?subject=Annual%20Event%20Sponsorship" className="rounded-full bg-navy text-primary-foreground font-barlow font-bold px-8 py-3 uppercase tracking-widest text-sm hover:bg-teal transition-colors inline-block text-center">
                      Commit
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy/30">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
