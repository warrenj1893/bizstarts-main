// FILE: src/components/Footer.tsx
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS, DONATE_URL } from "@/lib/constants";
import NewsletterForm from "./NewsletterForm";

const footerLinks = [
  { l: "Home",          t: "/" },
  { l: "About",         t: "/about" },
  { l: "Entrepreneurs", t: "/entrepreneurs" },
  { l: "Institute",     t: "/programming" },
  { l: "Events",        t: "/events" },
  { l: "Blog",          t: "/blog" },
  { l: "Membership",    t: "/membership" },
  { l: "Contact",       t: "/contact" },
];

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Col 1 — Brand */}
      <div>
        <span className="font-headline text-2xl font-bold tracking-wider">BIZSTARTS</span>
        <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
          BizStarts brings entrepreneurs together from all backgrounds to create a collaborative learning environment that inspires confidence and develops people's capacity to achieve personal success and business growth.
        </p>
        {/* Social icons */}
        <div className="flex items-center gap-4 mt-6">
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/50 hover:text-teal transition-colors">
            <Facebook size={18} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/50 hover:text-teal transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-primary-foreground/50 hover:text-teal transition-colors">
            <Twitter size={18} />
          </a>
        </div>
      </div>

      {/* Col 2 — Quick Links */}
      <div>
        <h4 className="font-barlow font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {footerLinks.map((i) => (
            <li key={i.t}>
              <Link to={i.t} className="text-primary-foreground/70 hover:text-teal transition-colors">
                {i.l}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 3 — Contact */}
      <div>
        <h4 className="font-barlow font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
        <address className="text-sm text-primary-foreground/70 not-italic leading-relaxed">
          BizStarts<br />
          161 S 1st St Ste 318<br />
          Milwaukee, WI 53204<br />
          <a href="tel:4149732334" className="hover:text-teal transition-colors">414-973-2334</a><br />
          <a href="mailto:info@bizstarts.com" className="hover:text-teal transition-colors">info@bizstarts.com</a>
        </address>
        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-2.5 font-barlow font-bold text-sm text-primary-foreground hover:bg-teal-dark hover:-translate-y-0.5 transition-all duration-200"
        >
          Donate
        </a>
      </div>

      {/* Col 4 — Newsletter */}
      <div>
        <h4 className="font-barlow font-bold text-sm uppercase tracking-wider mb-4">Newsletter</h4>
        <NewsletterForm dark />
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10 py-4">
      <div className="container flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50 gap-2">
        <p>Copyright © 2026 BizStarts, Inc. | All Rights Reserved</p>
        <img src="/candid-seal-platinum-2026.png" alt="Candid Platinum Transparency 2026" className="h-10 w-auto opacity-90" />
      </div>
    </div>
  </footer>
);

export default Footer;
