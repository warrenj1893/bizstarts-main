// FILE: src/components/UtilityBar.tsx
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "@/lib/constants";

const UtilityBar = () => (
  <div className="bg-navy text-primary-foreground text-xs py-1.5">
    <div className="container flex items-center justify-between">
      {/* Social icons */}
      <div className="flex items-center gap-3">
        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-teal transition-colors">
          <Facebook size={14} />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal transition-colors">
          <Linkedin size={14} />
        </a>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="hover:text-teal transition-colors">
          <Twitter size={14} />
        </a>
      </div>
      {/* Quick links */}
      <div className="hidden md:flex items-center gap-4 font-barlow">
        <Link to="/programming" className="hover:text-teal transition-colors">BizStarts Institute</Link>
        <span className="text-primary-foreground/30">|</span>
        <Link to="/contact" className="hover:text-teal transition-colors">George Mosher Scholarship Fund</Link>
        <span className="text-primary-foreground/30">|</span>
        <Link to="/membership" className="hover:text-teal transition-colors">Become a Friend</Link>
        <span className="text-primary-foreground/30">|</span>
        <Link to="/contact" className="hover:text-teal transition-colors">Become a Mentor</Link>
        <span className="text-primary-foreground/30">|</span>
        <Link to="/entrepreneurs" className="hover:text-teal transition-colors">Begin BizStarts</Link>
      </div>
    </div>
  </div>
);

export default UtilityBar;
