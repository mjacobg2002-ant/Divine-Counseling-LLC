import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logo from "../../assets/4fa04261e3f371c7b25530573bb7d9d20806b31e.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Team", path: "/team" },
  { label: "Services", path: "/services" },
  { label: "Community", path: "/community-outreach" },
  { label: "Patient Portal", path: "/patient-portal" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Track scroll for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white/97 backdrop-blur-lg border-b border-[#5B2C6F]/8 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-[0_1px_3px_rgba(91,44,111,0.04)]"}`}>
        {/* Top utility bar — desktop only */}
        <div className="bg-[#5B2C6F] text-white/80 text-xs font-[Inter,sans-serif] hidden md:block">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-8">
            <span>Holistic Outpatient Mental Health Center — Baltimore & Owings Mills, MD</span>
            <div className="flex items-center gap-5">
              <a href="tel:4439552662" className="flex items-center gap-1.5 hover:text-[#C9A96A] transition-colors">
                <Phone className="w-3 h-3" />
                (443) 955-2662
              </a>
              <Link to="/referral" className="text-[#C9A96A] hover:text-white transition-colors">
                Submit Referral
              </Link>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[80px] sm:h-[92px] lg:h-[112px]" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Divine Counseling Home">
            <img src={logo} alt="Divine Counseling LLC" className="h-[5.5rem] sm:h-[6.75rem] lg:h-[8.5rem] w-auto" />
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 xl:px-3 py-2 rounded-md text-[13.5px] font-[Inter,sans-serif] tracking-wide transition-all duration-200 whitespace-nowrap ${
                  location.pathname === link.path
                    ? "text-[#5B2C6F] bg-[#5B2C6F]/8"
                    : "text-[#2F2F2F]/80 hover:text-[#5B2C6F] hover:bg-[#5B2C6F]/4"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/referral"
              className="px-5 py-2.5 bg-[#8B1A4A] text-white rounded-md text-[13px] font-[Inter,sans-serif] tracking-wide hover:bg-[#7A1641] transition-all duration-200 hover:shadow-md flex items-center gap-1.5"
            >
              Start Referral <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile right side — phone + referral CTA + hamburger */}
          <div className="flex lg:hidden items-center gap-1.5">
            {/* Phone icon button */}
            <a
              href="tel:4439552662"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#5B2C6F]/8 text-[#5B2C6F] hover:bg-[#5B2C6F]/15 transition-colors"
              aria-label="Call Divine Counseling"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Compact referral CTA */}
            <Link
              to="/referral"
              className="px-3.5 py-2 bg-[#8B1A4A] text-white rounded-lg text-[12px] font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all whitespace-nowrap"
            >
              Referral
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#2F2F2F] rounded-md hover:bg-[#5B2C6F]/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — full screen overlay */}
      </header>

            {/* Mobile menu — full screen overlay (must be outside header because backdrop-blur creates a containing block that breaks fixed positioning) */}
       {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-60 overflow-y-auto">
            <div className="px-5 py-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl text-[15px] font-[Inter,sans-serif] transition-colors ${
                      location.pathname === link.path
                        ? "text-[#5B2C6F] bg-[#5B2C6F]/8"
                        : "text-[#2F2F2F]/80 hover:text-[#5B2C6F] hover:bg-[#5B2C6F]/4"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="mt-6 pt-5 border-t border-[#5B2C6F]/8 space-y-3">
                <Link
                  to="/referral"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#8B1A4A] text-white rounded-xl text-[15px] font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all"
                >
                  Start Referral <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:4439552662"
                  className="flex items-center justify-center gap-2 py-3.5 text-[15px] text-[#5B2C6F] font-[Inter,sans-serif] bg-[#5B2C6F]/5 rounded-xl"
                >
                  <Phone className="w-4 h-4" /> (443) 955-2662
                </a>
              </div>

              {/* Mobile utility info */}
              <div className="mt-6 pt-5 border-t border-[#5B2C6F]/8">
                <p className="text-[11px] text-[#6B6B6B] font-[Inter,sans-serif] text-center leading-relaxed">
                  Holistic Outpatient Mental Health Center<br />
                  Baltimore & Owings Mills, MD
                </p>
              </div>
            </div>
          </div>
        )}
      
      {/* Sticky mobile bottom CTA bar — hidden on referral/contact pages */}
      {!["/referral", "/contact"].includes(location.pathname) && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#5B2C6F]/10 px-4 py-3 flex gap-2 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
          <Link
            to="/referral"
            className="flex-1 text-center py-3 bg-[#8B1A4A] text-white rounded-lg text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all"
          >
            Start Referral
          </Link>
          <a
            href="tel:4439552662"
            className="flex items-center justify-center gap-1.5 px-4 py-3 border border-[#5B2C6F]/15 text-[#5B2C6F] rounded-lg text-sm font-[Inter,sans-serif]"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
        </div>
      )}
    </>
  );
}
