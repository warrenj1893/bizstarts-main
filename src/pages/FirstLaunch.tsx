import { ScrollReveal } from "@/components/ScrollReveal";

const FirstLaunch = () => (
  <>
    <section className="bg-navy relative overflow-hidden min-h-[50vh] flex items-center">
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
        alt="First Launch"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal" />
      
      <div className="relative z-10 container py-24 px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-teal" />
            <span className="font-barlow font-semibold text-teal uppercase tracking-[0.3em] text-xs">
              Taking The Next Step
            </span>
          </div>
          <h1
            className="font-headline font-bold uppercase text-primary-foreground leading-none max-w-3xl"
            style={{ fontSize: "clamp(48px, 9vw, 110px)", letterSpacing: "-0.02em" }}
          >
            First
            <br />
            <span className="text-teal">Launch.</span>
          </h1>
        </ScrollReveal>
      </div>
    </section>
    
    <section className="py-24 bg-off-white min-h-[40vh] flex items-center justify-center">
      <p className="text-charcoal/50 font-body text-xl italic text-center max-w-2xl px-6">
        Details regarding the First Launch program will be uploaded soon. Stay tuned!
      </p>
    </section>
  </>
);

export default FirstLaunch;
