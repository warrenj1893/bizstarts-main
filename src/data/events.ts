// FILE: src/data/events.ts
// Single source of truth for event data.
// Used in: Events.tsx (full list), Index.tsx (preview — first 3)

export interface Event {
  month: string;
  day: string;
  fullDate: string;
  title: string;
  desc: string;
  loc: string;
  time: string;
  cat: string;
  img: string;
  featured: boolean;
  color: string;
  accent: string; // used by Index homepage cards
}

export const allEvents: Event[] = [
  {
    month: "MAR", day: "15", fullDate: "Saturday, March 15, 2026",
    title: "Entrepreneurial Mindset Workshop",
    desc: "Build the mental frameworks needed for business success. Interactive sessions with seasoned coaches.",
    loc: "BizStarts Office — 161 S 1st St Ste 318, Milwaukee",
    time: "9AM–12PM", cat: "Workshop",
    img: "/images/img_35.jpg",
    featured: true, color: "bg-teal", accent: "bg-teal",
  },
  {
    month: "MAR", day: "22", fullDate: "Sunday, March 22, 2026",
    title: "BizStarts Institute Info Session",
    desc: "Learn about our credentialed entrepreneurship courses from Notre Dame and Florida State University.",
    loc: "Virtual", time: "6PM–7:30PM", cat: "Virtual",
    img: "/images/img_32.jpg",
    featured: false, color: "bg-navy", accent: "bg-navy",
  },
  {
    month: "APR", day: "03", fullDate: "Friday, April 3, 2026",
    title: "Cocktails & Connections",
    desc: "Hands-on learning and real relationship-building. Come for the knowledge, stay for the conversations.",
    loc: "Milwaukee, WI", time: "5PM–8PM", cat: "Networking",
    img: "/images/img_4.jpg",
    featured: false, color: "bg-gold", accent: "bg-gold",
  },
  {
    month: "APR", day: "12", fullDate: "Sunday, April 12, 2026",
    title: "Financial Literacy for Founders",
    desc: "Understand the numbers that drive your business. Practical tools you can use immediately.",
    loc: "BizStarts Office", time: "10AM–1PM", cat: "Workshop",
    img: "/images/img_19.jpg",
    featured: false, color: "bg-teal", accent: "bg-teal",
  },
  {
    month: "MAY", day: "01", fullDate: "Friday, May 1, 2026",
    title: "Marketing on a Budget",
    desc: "Practical strategies for lean marketing that actually moves the needle.",
    loc: "Virtual", time: "2PM–4PM", cat: "Virtual",
    img: "/images/img_6.jpg",
    featured: false, color: "bg-navy", accent: "bg-navy",
  },
  {
    month: "MAY", day: "17", fullDate: "Sunday, May 17, 2026",
    title: "Spring Entrepreneur Showcase",
    desc: "Celebrate graduates, connect with the community, and see what Milwaukee entrepreneurs are building.",
    loc: "Milwaukee, WI", time: "6PM–9PM", cat: "Networking",
    img: "/images/img_18.jpg",
    featured: false, color: "bg-gold", accent: "bg-gold",
  },
];
