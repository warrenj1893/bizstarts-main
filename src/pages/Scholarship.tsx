import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, where, getDocs } from "firebase/firestore";
import { Heart, Quote, CreditCard, Mail } from "lucide-react";

// Simulating a simple profanity filter
const PROFANITY_LIST = ["damn", "hell", "crap", "shit", "fuck", "bitch", "ass", "bastard"];
function containsProfanity(text: string): boolean {
  const lowerText = text.toLowerCase();
  const words = lowerText.split(/\s+/);
  return PROFANITY_LIST.some((word) => words.includes(word));
}

export default function Scholarship() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [livePosts, setLivePosts] = useState<{name: string, title: string, quote: string, date?: any}[]>([]);

  // Load real-time testimonials from Firebase
  useEffect(() => {
    const q = query(collection(db, "scholarship_testimonials"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts: any[] = [];
      snapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      setLivePosts(posts);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    if (containsProfanity(formData.message) || containsProfanity(formData.name)) {
      setError("Please keep your message appropriate and professional.");
      setLoading(false);
      return;
    }

    try {
      // Check for duplicate submissions by email (simple validation)
      const q = query(collection(db, "scholarship_testimonials"), where("email", "==", formData.email.toLowerCase()));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        setError("You have already shared a memory with this email address. Thank you for your previous contribution!");
        setLoading(false);
        return;
      }

      // Title inference: first few words of the message
      const words = formData.message.split(' ');
      const autoTitle = words.slice(0, 5).join(' ') + (words.length > 5 ? '...' : '');

      await addDoc(collection(db, "scholarship_testimonials"), {
        name: formData.name,
        email: formData.email.toLowerCase(),
        title: autoTitle,
        quote: formData.message,
        createdAt: serverTimestamp(),
        approved: true // Default to true but can be moderated later
      });

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Also track locally to prevent same-session resubmission
      localStorage.setItem("mosher_submitted_email", formData.email);
    } catch (err) {
      console.error("Error adding testimonial: ", err);
      setError("An error occurred while posting your message. Please try again later.");
    } finally {
      setLoading(false);
    }
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
    { title: "He was a great man", quote: "He was a great man for his deep commitment in helping the local entrepreneurial ecosystem. As a fellow investor in Silicon Pastures for 17 years, I will miss George’s insightful comments and intelligent conversations over existing and prospective early stage investments.", author: "Peter Skanavis" },
    { title: "A chance meeting during tennis", quote: "A chance meeting during tennis lessons at River Tennis sparked a 40+ year friendship Marian and I enjoyed with George and Julie. They were an impressive team who built their office furnishings business into a national powerhouse. The entrepreneurial drive they shared lives on in the many start-ups they backed in the years following the sale of their company. Milwaukee’s business community is stronger as a result of the Moshers, but perhaps more importantly, those who knew George and Julie benefited most from their kindness, wisdom and integrity. They will be missed but their passion of fostering Free Enterprise will live on through BizStarts and the George Mosher Entrepreneur Scholarship Fund.", author: "Bill and Marian Nasgovitz" },
    { title: "George’s wisdom, considered advice, curiosity", quote: "George’s wisdom, considered advice, curiosity and magnanimity will be missed.", author: "Meru and Anita Thakur" },
    { title: "George‘s wisdom, helpfulness, kindness, and", quote: "George‘s wisdom, helpfulness, kindness, and investing in others inspired me!", author: "VIRGINIA PRATT" },
    { title: "George and I met over", quote: "George and I met over breakfast in Santa Monica, CA during his and Julie’s annual visit to southern California. What began as a business conversation from a mutual friend’s introduction turned into a 6-year friendship and I am lucky to have called George a mentor, too. His insatiable curiosity, of all things business and ideas, kept us talking for hours at a time and his business advice on managing a growing company was clairvoyant and modern. Though nearly 40 years different in age, George became a close friend, advisor, and mentor. I miss his limitless enthusiasm and unencumbered optimism and still implement Mosherisms throughout our organization.", author: "Kevin Faul" },
    { title: "George was a very savvy", quote: "George was a very savvy businessman and wonderful at “thinking outside the box” to solve business problems. He was highly intelligent and intellectually curious. His wide knowledge base about many diverse subjects certainly contributed to his tremendous success in business.", author: "John Emory Jr." },
  ];

  const displayTestimonials = [...livePosts, ...initialTestimonials];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#FDFDFD]">
      {/* ── INTRODUCTORY SECTION ── */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <ScrollReveal>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-navy mb-12 uppercase tracking-tight">
              George Mosher Entrepreneur Scholarship Fund
            </h1>
          </ScrollReveal>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <ScrollReveal>
              <div className="space-y-6 font-body text-lg text-charcoal/80 leading-relaxed max-w-2xl">
                <p>
                  George Mosher was a successful entrepreneur who started a company called National Business Furniture and grew it to a nationally renowned company.
                </p>
                <p>
                  After selling it, he donated his time, money and considerable talent to helping other aspiring entrepreneurs to start their companies. He went a step further by investing in over 200 startups.
                </p>
                <p className="font-headline font-bold text-navy uppercase">
                  He was the single greatest and most generous individual angel investor in the State of Wisconsin.
                </p>
                <p>
                  To ensure that George's legacy lives on, a Scholarship Fund has been created to cover the costs of qualifying entrepreneurs to receive quality coaching, mentoring and connections to resources they need to succeed in growing their companies.
                </p>
                <p>
                  The funds are not giveaways but awarded to only those who have proven they have the drive and talent to start a new company. The donations to this fund are tax deductible as BizStarts is a 501(c)(3) qualifying charity.
                </p>
                
                <div className="pt-6">
                  <a 
                    href="https://bizstarts.harnessgiving.org/donate/?selected-method=monthly&amount=50&campaign_id=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-teal hover:bg-navy text-primary-foreground font-barlow font-bold px-10 py-5 rounded-full transition-all hover:scale-105 shadow-lg group"
                  >
                    <CreditCard size={20} className="group-hover:animate-pulse" />
                    Donate online to George Mosher Entrepreneur Scholarship Fund
                  </a>
                </div>

                <div className="mt-12 p-8 bg-off-white rounded-2xl border border-border">
                  <h3 className="font-headline text-xl font-bold text-navy uppercase mb-4 flex items-center gap-2">
                    <Mail size={20} className="text-teal" />
                    Please send your check to:
                  </h3>
                  <div className="font-body text-charcoal/70 leading-relaxed">
                    BizStarts<br/>
                    161 S 1st St. Ste. 100<br/>
                    Milwaukee, WI 53204<br/>
                    <strong className="text-navy">Attn: George Mosher Scholarship Fund</strong>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-teal/5 rounded-3xl blur-2xl group-hover:bg-teal/10 transition-all" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/george-mosher.jpg" 
                    alt="George Mosher" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="font-barlow font-bold text-navy/40 uppercase tracking-[0.2em] text-sm italic">
                    George Mosher (1939 - 2024)
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL FORM ── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Heart className="text-teal mx-auto mb-4" size={40} />
              <h2 className="font-headline text-3xl font-bold uppercase text-navy mb-4 italic">
                George inspired me ...
              </h2>
              <p className="font-body text-charcoal/60">
                Add your own reason for giving in George’s honor by writing your message below.
              </p>
            </div>
          </ScrollReveal>

          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl space-y-8 border border-border">
            {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-semibold border border-red-100">{error}</div>}
            {success && <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-semibold border border-green-100 flex items-center gap-2">
              <Heart size={16} fill="currentColor" /> Thank you for sharing your memory! Your post has been added.
            </div>}
            
            <div className="space-y-2">
              <label htmlFor="message" className="font-barlow font-bold text-navy uppercase text-xs tracking-widest px-1">How has George inspired you?</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-5 py-4 bg-off-white border border-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal/5 transition-all font-body resize-y"
                placeholder="Write your story here..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="font-barlow font-bold text-navy uppercase text-xs tracking-widest px-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-off-white border border-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal/5 transition-all font-body"
                  placeholder="What is your full name?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-barlow font-bold text-navy uppercase text-xs tracking-widest px-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-off-white border border-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal/5 transition-all font-body"
                  placeholder="For verification only"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full btn-primary py-5 text-base uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? "Posting..." : "Add Testimonial"}
            </button>
          </form>
        </div>
      </section>

      {/* ── TESTIMONIAL BOARD ── */}
      <section className="py-24 container max-w-4xl">
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="font-headline text-3xl font-bold uppercase text-navy whitespace-nowrap">Memories Of George</h2>
            <div className="h-px w-full bg-border" />
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {displayTestimonials.map((t: any, idx) => (
            <ScrollReveal key={t.id || idx} delay={100}>
              <div className="bg-card p-10 rounded-2xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-teal transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                
                <Quote className="text-teal/10 absolute top-6 right-8" size={80} />
                
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold text-navy mb-6 leading-tight max-w-xl">
                    {t.title}
                  </h3>
                  <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-8 italic italic">
                    "{t.quote}"
                  </p>
                  <div className="flex justify-end border-t border-border pt-6">
                    <p className="font-barlow font-bold text-teal text-lg uppercase tracking-wide">
                      {t.author || t.name}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
