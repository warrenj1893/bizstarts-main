// Main site navigation with dropdowns
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About", to: "/about" },
  {
    label: "Services",
    children: [
      { label: "BizStarts Institute", to: "/programming" },
      { label: "Instituto Latino", to: "/instituto-latino" },
      { label: "Coaching", to: "/coaching" },
      { label: "Capital Catalyst Grant", to: "/capital-catalyst" },
      { label: "George Mosher Scholarship", to: "/scholarship" },
    ],
  },
  { label: "Entrepreneurs", to: "/entrepreneurs" },
  { label: "Events", to: "/events" },
  { label: "News and Resources", to: "/news-and-resources" },
  { label: "Become a Member", to: "/membership" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDropdown = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 bg-teal transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex flex-col">
          <span className="font-headline text-2xl md:text-3xl font-bold text-primary-foreground tracking-wider">BIZSTARTS</span>
          <span className="text-primary-foreground/80 text-[10px] md:text-xs font-barlow tracking-wide -mt-1">Opportunity Through Entrepreneurship</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((l) =>
            l.children ? (
              <div key={l.label} className="relative">
                <button
                  onClick={() => toggleDropdown(l.label)}
                  className="font-barlow font-semibold text-sm uppercase text-primary-foreground tracking-wide transition-all hover:text-navy flex items-center gap-1"
                >
                  {l.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === l.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === l.label && (
                  <div className="absolute top-full left-0 mt-2 bg-card rounded-lg shadow-xl py-2 min-w-[220px] z-50">
                    {l.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className={`block px-4 py-2 font-barlow font-semibold text-sm text-navy hover:bg-teal/10 transition-colors ${pathname === c.to ? "text-teal" : ""}`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to!}
                className={`font-barlow font-semibold text-sm uppercase text-primary-foreground tracking-wide transition-all hover:text-navy ${pathname === l.to ? "border-b-2 border-primary-foreground pb-0.5" : ""}`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-teal-dark pb-4">
          {navLinks.map((l) =>
            l.children ? (
              <div key={l.label}>
                <button
                  onClick={() => toggleDropdown(l.label)}
                  className="w-full flex items-center justify-between px-6 py-3 font-barlow font-semibold text-sm uppercase text-primary-foreground tracking-wide"
                >
                  {l.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === l.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === l.label && l.children.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    className={`block pl-10 pr-6 py-2 font-barlow font-semibold text-sm text-primary-foreground/80 hover:bg-teal ${pathname === c.to ? "bg-teal" : ""}`}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to!}
                className={`block px-6 py-3 font-barlow font-semibold text-sm uppercase text-primary-foreground tracking-wide hover:bg-teal ${pathname === l.to ? "bg-teal" : ""}`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
