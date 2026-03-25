// FILE: src/data/coaches.ts
// Single source of truth for coach data.
// Used in: Coaching.tsx (full bios), About.tsx (photos + names only)

export interface Coach {
  name: string;
  tag: string;
  accent: string;
  img: string;
  pos?: string;
  bio: string;
}

export const coaches: Coach[] = [
  {
    name: "Rossie Manks",
    tag: "Community & Wellness",
    accent: "bg-teal",
    img: "/images/img_37.jpg",
    pos: "object-[center_40%]",
    bio: "Meet Rossie, an Author, Speaker, Coach & Project Manager for digital products. Here to support you on your entrepreneurial journey. People that know Rossie, say she is an encourager through life-giving words that lifts them out of whatever negative emotion or situation they are in, because we must persevere and run the race marked out for us.\n\nShe holds an Associate’s of Science in Civil Engineer Technology, Bachelor’s in Construction Management & Trades and is a Certified Coach. Formally a Civil Engineering Aide/Resident Inspector & CAD Drafter who worked for the private and public sectors.\n\nShe then took her career and education a step further by becoming a local business owner & founder of Journey2Alignment Coaching Services and graduated from UWM Ext. and Defy Ventures Entrepreneurship program.\n\nShe is committed to the community and enjoys ministry outreach.\n\nWork with Rossie and become a part of the BizStarts Family.",
  },
  {
    name: "Thaime Nañez",
    tag: "Bilingual · Sales & Profit",
    accent: "bg-navy",
    img: "/images/img_38.jpg",
    bio: "Thaime is a Venezuelan native who moved to Milwaukee 18 years ago. She is the co-owner of The Farmhouse Paint Bar, an award-winning studio, and Chuchos Red Tacos, the #1 Birriera en Milwaukee. She is also a business consultant and creator of The Sales to Profit System. She is the Wisconsin 2020 SBA Small Business Person of The Year — the first Latina to receive this recognition in Wisconsin — and the first bilingual business coach at BizStarts Wisconsin.",
  },
  {
    name: "Brent Halfwassen",
    tag: "Finance & Operations",
    accent: "bg-gold",
    img: "/images/brent.jpg",
    bio: "Brent Halfwassen is an experienced business owner and operator, and possesses invaluable first-hand experience with the challenges and successes of business ownership. As a four-time business owner himself, Brent understands the critical importance of aligning vision, implementing effective processes, and building the right team to drive business growth.",
  },
  {
    name: "Dr. Cheryl S. Moore",
    tag: "Business Development",
    accent: "bg-teal",
    img: "/cheryl-moore.png",
    pos: "object-center",
    bio: "Dr. Cheryl S. Moore Transformational Business Mentor | Entrepreneur & Educator | Writer & Visionary\n\nDr. Cheryl S. Moore is an award-winning strategist, spiritual mentor, and entrepreneurial thought leader with over 25 years of experience at the intersection of education, business, and equity.\n\nA former Executive Director of Career Development and Business Department Chair, Dr. Moore has secured funding, increased institutional revenue by 50%, and designed career-aligned programs adopted across multiple sectors. Her work integrates community engagement with fiscal strategy—positioning her as a bridge between industry innovation and grassroots empowerment.\n\nRecipient of the Presidential Award for Civic Action and Engagement at Cardinal Stritch University, and multiple Faculty of the Year nominations, Dr. Moore is known for mentoring across generations—from doctoral students and nonprofit leaders to corporate founders and creatives rediscovering their voice. She is a 3-time featured mentor for the National Mentoring Mondays hosted by the Milwaukee Business Journal, where she empowers emerging leaders. She blends profit strategy with purpose mapping, helping clients scale their visions without sacrificing their values.\n\nDeeply influenced by her pilgrimage to India and studies in Gandhian philosophy, she infuses nonviolence, ethical leadership, and community-centered practices into her mentoring. Her approach centers on liberation, stewardship, and clarity—guiding entrepreneurs to build ventures that transform systems, and uplift communities.\n\nAs Founder of Career Activist LLP, Dr. Moore designs and delivers transformative experiences. Dr. Moore curates reflective tools, short-form eBooks, learning modules that activate clarity, confidence, and support lifelong reinvention for women navigating professional rebirth. Her practice is not traditional coaching—it’s strategic mentoring. Partner organizations benefit from her unique ability to translate insight into impact while advancing organizational goals. Her offerings include group workshops, curriculum design, and professional development intensives.",
  },
];
