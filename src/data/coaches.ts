// FILE: src/data/coaches.ts
// Single source of truth for coach data.
// Used in: Coaching.tsx (full bios), About.tsx (photos + names only)

export interface Coach {
  name: string;
  tag: string;
  accent: string;
  img: string;
  bio: string;
}

export const coaches: Coach[] = [
  {
    name: "Rossie Manka",
    tag: "Community & Wellness",
    accent: "bg-teal",
    img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=800&h=800&fit=crop&crop=face",
    bio: "People that know Rossie say she is an encourager through life-giving words. She holds an Associate's of Science in Civil Engineer Technology and a Bachelor's in Construction Management & Trades. She is the founder of Journey2Alignment Coaching Services, a graduate of UWM Ext. and Defy Ventures Entrepreneurial program, and has spent time coaching entrepreneurs at RYOC and Ellsworth Correctional Facility. She is certified to mentor re-entry women through EXPO.",
  },
  {
    name: "Thaime Nañez",
    tag: "Bilingual · Sales & Profit",
    accent: "bg-navy",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=800&fit=crop&crop=face",
    bio: "Thaime is a Venezuelan native who moved to Milwaukee 18 years ago. She is the co-owner of The Farmhouse Paint Bar, an award-winning studio, and Chuchos Red Tacos, the #1 Birriera en Milwaukee. She is also a business consultant and creator of The Sales to Profit System. She is the Wisconsin 2020 SBA Small Business Person of The Year — the first Latina to receive this recognition in Wisconsin — and the first bilingual business coach at BizStarts Wisconsin.",
  },
  {
    name: "Brent Halfwassen",
    tag: "Finance & Operations",
    accent: "bg-gold",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
    bio: "Brent, MKE's Small Business Coach, works with small business owners and entrepreneurs to transform their hard work into hard cash. By blending empathy, insight, and a dose of humor into his unique focus on financial fitness, operational overhaul, and selling your story, small business owners get the confidence, comfort, and capability to reach their goals. A Chartered Financial Analyst, Brent has coached over 600 small businesses and hosts the #EntrepreneurEncounters Podcast.",
  },
  {
    name: "Cheryl Moore",
    tag: "Business Development",
    accent: "bg-teal",
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=800&fit=crop&crop=face",
    bio: "Cheryl Moore is an experienced entrepreneur coach dedicated to helping Milwaukee business owners find clarity and confidence in their journey. With a deep commitment to community and practical business development, Cheryl meets entrepreneurs where they are and helps them build toward sustainable, lasting growth.",
  },
];
