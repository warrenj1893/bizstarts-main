import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

// Simulating a simple profanity filter
const PROFANITY_LIST = ["damn", "hell", "crap", "shit", "fuck", "bitch", "ass"];
function containsProfanity(text: string): boolean {
  const lowerText = text.toLowerCase();
  return PROFANITY_LIST.some((word) => lowerText.includes(word));
}

export default function Scholarship() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [userPosts, setUserPosts] = useState<{name: string, title: string, quote: string}[]>([]);

  // Load any previously submitted local posts when the component mounts
  useEffect(() => {
    const saved = localStorage.getItem("mosher_posts");
    if (saved) {
      setUserPosts(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

    if (containsProfanity(formData.message) || containsProfanity(formData.name)) {
      setError("Please keep your message appropriate and professional.");
      return;
    }

    // "One post per user" rule based on name (simple validation)
    const storedName = localStorage.getItem("mosher_submitted_name");
    if (storedName && storedName.toLowerCase() === formData.name.toLowerCase()) {
      setError("You have already submitted a message. Only one post per person is allowed.");
      return;
    }

    // Title inference logic based on the user's requirements (just grabbing the first part of the message)
    const words = formData.message.split(' ');
    const autoTitle = words.slice(0, 5).join(' ') + (words.length > 5 ? '...' : '');

    const newPost = { name: formData.name, title: autoTitle, quote: formData.message };
    const updatedPosts = [newPost, ...userPosts];
    
    setUserPosts(updatedPosts);
    localStorage.setItem("mosher_posts", JSON.stringify(updatedPosts));
    localStorage.setItem("mosher_submitted_name", formData.name);

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const initialTestimonials = [
    { title: "George Mosher was an entrepreneur", quote: "George Mosher was an entrepreneur who not only started and grew his own business, but took great pleasure in providing others with the resources to do the same. He recognized that a truly successful business can only be led by a person who is inquisitive, thoughtful and sets a personal example of integrity and respectfulness.", author: "Steve Einhorn" },
    { title: "George was my mentor", quote: "George was my mentor, my teacher and the one I credit with getting me involved in early-stage entrepreneur help. If it weren’t for George I never would have founded BizStarts. He was on our Board of Directors early on and has given great advice over the years.", author: "Daniel Steininger" },
    { title: "Not only was George", quote: "Not only was George great at growing a business and being a friend to others starting theirs, he was the most gracious person I have ever met. Thanks George for for being a founding member of BrightStar Wisconsin Foundation.", author: "Jeff Harris" },
    { title: "George inspired me by the", quote: "George inspired me by the way he listened. He asked the challenging questions, and provided straight-forward feedback. He truly cared.", author: "Brenda Campbell" },
    { title: "I am honored to help", quote: "I am honored to help support this worthy cause honoring such a great man’s legacy. I worked with George for over 17 years and learned something nearly every day. After I started my own business, he was very supportive and became somewhat of a cheerleader. I have saved every hand written note and email that he sent me as inspiration. George, you will always be the Wind Beneath my Wings…Thank You…You will be dearly messed by countless people but your legacy will live on in so many ways. And as you always responded to greetings, you really were “Fantastic!”", author: "David Wierdsma" },
    { title: "George joined Silicon Pastures soon", quote: "George joined Silicon Pastures soon after it was launched, and right from the start he started writing checks and making investments, and never stopped! When you’re on the other side of the mountain, there’s always the question “what’s next”? George just loved being in the space. Hard to overstate how important his support was over the years to the Wisconsin startup community.", author: "Jeff Rusinow" },
    { title: "Mr. Mosher was an incredible", quote: "Mr. Mosher was an incredible man and will be greatly missed though our memories of him and times shared will be treasured by us.", author: "Lee and Jerry Ross" },
    { title: "Investing in others is the", quote: "Investing in others is the gift of opportunity. George has been the most prolific investor in Wisconsin’s venture community – his impact has been and will be significant and lasting.", author: "Ross Leinweber" },
    { title: "He was a great man", quote: "He was a great man for his deep commitment in helping the local entrepreneurial ecosystem. As a fellow angel investor in Silicon Pastures for 17 years, I will miss George’s insightful comments and intelligent conversations over existing and prospective early stage investments.", author: "Peter Skanavis" },
    { title: "A chance meeting during tennis", quote: "A chance meeting during tennis lessons at River Tennis sparked a 40+ year friendship Marian and I enjoyed with George and Julie. They were an impressive team who built their office furnishings business into a national powerhouse. The entrepreneurial drive they shared lives on in the many start-ups they backed in the years following the sale of their company. Milwaukee’s business community is stronger as a result of the Moshers, but perhaps more importantly, those who knew George and Julie benefited most from their kindness, wisdom and integrity. They will be missed but their passion of fostering Free Enterprise will live on through BizStarts and the George Mosher Entrepreneur Scholarship Fund.", author: "Bill and Marian Nasgovitz" },
    { title: "George’s wisdom, considered advice, curiosity", quote: "George’s wisdom, considered advice, curiosity and magnanimity will be missed.", author: "Meru and Anita Thakur" },
    { title: "George‘s wisdom, helpfulness, kindness, and", quote: "George‘s wisdom, helpfulness, kindness, and investing in others inspired me!", author: "VIRGINIA PRATT" },
    { title: "George and I met over", quote: "George and I met over breakfast in Santa Monica, CA during his and Julie’s annual visit to southern California. What began as a business conversation from a mutual friend’s introduction turned into a 6-year friendship and I am lucky to have called George a mentor, too. His insatiable curiosity, of all things business and ideas, kept us talking for hours at a time and his business advice on managing a growing company was clairvoyant and modern. Though nearly 40 years different in age, George became a close friend, advisor, and mentor. I miss his limitless enthusiasm and unencumbered optimism and still implement Mosherisms throughout our organization.", author: "Kevin Faul" },
    { title: "George was a very savvy", quote: "George was a very savvy businessman and wonderful at “thinking outside the box” to solve business problems. He was highly intelligent and intellectually curious. His wide knowledge base about many diverse subjects certainly contributed to his tremendous success in business.", author: "John Emory Jr." },
  ];

  const displayTestimonials = [...userPosts, ...initialTestimonials];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-off-white">
      {/* ── HERO HEADER ── */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 text-center text-primary-foreground max-w-4xl">
          <ScrollReveal>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h1 className="font-headline text-5xl md:text-6xl font-bold uppercase mb-6 leading-tight">
              George Mosher<br/>
              <span className="text-teal">Entrepreneur Scholarship Fund</span>
            </h1>
            <p className="font-body text-xl text-primary-foreground/80 leading-relaxed font-light">
              George Mosher was a successful entrepreneur who started a company called National Business Furniture and grew it to a nationally renowned company.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BIOGRAPHY & MISSION ── */}
      <section className="py-20 container max-w-5xl">
        <div className="grid md:grid-cols-[1fr_2px_1.2fr] gap-12 items-center">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/george-mosher.jpg" alt="George Mosher" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
          
          <div className="hidden md:block self-stretch bg-border" />
          
          <ScrollReveal delay={100}>
            <div className="space-y-6 font-body text-lg text-charcoal/80 leading-relaxed">
              <p>
                After selling it, he donated his time, money and considerable talent to helping other aspiring entrepreneurs to start their companies. He went a step further by investing in over 200 startups.
              </p>
              <p className="font-bold text-teal text-xl font-headline uppercase leading-snug">
                He was the single greatest and most generous individual angel investor in the State of Wisconsin.
              </p>
              <p>
                To ensure that George's legacy lives on, a Scholarship Fund has been created to cover the costs of qualifying entrepreneurs to receive quality coaching, mentoring and connections to resources they need to succeed in growing their companies.
              </p>
              <p>
                The funds are not giveaways but awarded to only those who have proven they have the drive and talent to start a new company. The donations to this fund are tax deductible as BizStarts is a 501(c)(3) qualifying charity.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-16 bg-card rounded-2xl p-10 text-center border-t-4 border-gold shadow-lg max-w-3xl mx-auto">
            <h3 className="font-headline text-2xl font-bold text-navy uppercase mb-4">Support The Scholarship</h3>
            <p className="font-body text-charcoal/70 mb-4">Please send your check to:</p>
            <div className="font-barlow text-lg text-navy font-medium leading-relaxed mb-6">
              BizStarts<br/>
              161 S 1st St. Ste. 100<br/>
              Milwaukee, WI 53204<br/>
              <strong>Attn: George Mosher Scholarship Fund</strong>
            </div>
            <p className="font-body text-sm text-charcoal/50 italic">
              You can also add your own reason for giving in George's honor by writing your message in the space below so others can read how George inspired you.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── TESTIMONIAL FORM ── */}
      <section className="py-16 bg-card relative overflow-hidden">
        <div className="container relative z-10 max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-headline text-4xl font-bold uppercase mb-4 text-navy">Share Your Memory</h2>
              <p className="font-body text-charcoal/70">
                How did George inspire you? Leave a message in his honor.
              </p>
            </div>
          </ScrollReveal>

          <form onSubmit={handleSubmit} className="bg-teal text-primary-foreground p-8 rounded-2xl shadow-xl space-y-6">
            {error && <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-semibold">{error}</div>}
            {success && <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-semibold text-charcoal">Thank you for sharing your memory! Your post has been added.</div>}
            
            <div className="space-y-2">
              <label htmlFor="message" className="font-barlow font-bold text-primary-foreground uppercase text-sm tracking-widest block">George inspired me...</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-body resize-y placeholder:text-white/60 text-white"
                placeholder="Share your story or message here..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-barlow font-bold text-primary-foreground uppercase text-sm tracking-widest block">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-body placeholder:text-white/60 text-white"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-barlow font-bold text-primary-foreground uppercase text-sm tracking-widest block">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-body placeholder:text-white/60 text-white"
                  placeholder="For verification only"
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary bg-navy text-white border-navy hover:bg-white hover:text-navy py-4 text-sm mt-4 hover:shadow-lg transition-all">
              Post Message
            </button>
          </form>
        </div>
      </section>

      {/* ── TESTIMONIAL BOARD ── */}
      <section className="py-24 container max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold uppercase text-navy line-after">Memories of George</h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {displayTestimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={(idx % 3) * 100}>
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all h-full flex flex-col">
                <h3 className="font-headline text-xl font-bold uppercase text-navy mb-4 leading-tight">
                  {t.title}
                </h3>
                <p className="font-body text-charcoal/70 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                  "{t.quote}"
                </p>
                <div className="mt-auto border-t border-border pt-4">
                  <p className="font-barlow font-bold text-teal tracking-wide">
                    {("author" in t) ? t.author : ("name" in t ? t.name : "")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
