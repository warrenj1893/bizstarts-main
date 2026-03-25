import { ScrollReveal } from "@/components/ScrollReveal";
import { Heart, CheckCircle } from "lucide-react";

const Membership = () => {
  return (
    <>
      {/* Hero — warm, community feel */}
      <section className="bg-navy relative overflow-hidden min-h-[50vh] flex items-center">
        <img
          src="/images/img_15.jpg"
          alt="Community members"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-20"
        />
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
              Become a
              <br />
              <span className="text-teal">Member.</span>
            </h1>
            <p className="mt-6 text-primary-foreground/80 font-body text-xl max-w-2xl leading-relaxed">
              Join our expanding network of passionate professionals dedicated to empowering the next generation of Milwaukee's entrepreneurs!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-24 bg-card">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            
            <ScrollReveal>
              <div className="sticky top-32">
                <div className="w-12 h-1 bg-gold mb-6" />
                <h2 className="font-headline text-3xl font-bold uppercase text-navy leading-tight mb-6">
                  Become A Mentor
                </h2>
                
                <div className="space-y-6 font-body text-charcoal/80 text-lg leading-relaxed">
                  <p>
                    The BizStarts mentor program consists of seasoned volunteers from the corporate and entrepreneur community. Learn more and apply below to help entrepreneurs succeed!
                  </p>
                  <p>
                    You've been successful. We invite you to share your practical knowledge and professional wisdom with the next generation of business leaders in Wisconsin by becoming a BizStarts Mentor.
                  </p>
                  <p>
                    Our mentor relationships are unique in that they are skill specific. BizStarts taps our mentors' expertise to support entrepreneurs and founders by focusing on overcoming the next and most important challenge their business faces. Mentors opt-in based on their experience in areas relevant to the needs of new entrepreneurs and for their enthusiasm for the program.
                  </p>
                  
                  <h3 className="font-headline text-2xl font-bold uppercase text-navy mt-10 mb-4">
                    What are the requirements for the BizStarts Mentor Program?
                  </h3>
                  <p>
                    Relationships between mentors and entrepreneurs are formed based on the needs and preferences of the entrepreneur and the interests of the available mentor. To best support these growing businesses and value our mentors' involvement, there are specific rules to which we ask our mentors to adhere. You can view the BizStarts Mentor Guide to learn more.
                  </p>
                  <p className="font-bold text-teal">
                    To apply to join the BizStarts Mentor Program, please fill out the application below and follow the prompts. After completing the submission, someone from BizStarts will follow-up with you about your interest in the BizStarts Mentor Program and conclude your application process.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white min-h-[800px]">
                <div className="bg-teal py-4 px-6 text-center">
                  <h3 className="font-barlow font-bold uppercase text-primary-foreground tracking-wider">
                    Member Application
                  </h3>
                </div>
                {/* Using an iframe to embed Jotform reliably within React without needing dynamic script injection */}
                <iframe
                  src="https://form.jotform.com/71774680870163"
                  width="100%"
                  height="1200"
                  frameBorder="0"
                  title="BizStarts Mentor Application"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
