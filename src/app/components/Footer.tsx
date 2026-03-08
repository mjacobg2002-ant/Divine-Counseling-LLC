import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "figma:asset/4fa04261e3f371c7b25530573bb7d9d20806b31e.png";

export function Footer() {
  return (
    <footer className="bg-[#5B2C6F] text-white/80" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Divine Counseling LLC" className="h-14 w-auto mb-4 brightness-200" />
            <p className="text-white/40 text-xs font-[Inter,sans-serif] leading-relaxed mb-5">
              Holistic outpatient mental health center committed to helping individuals reach their highest self.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} rel="noopener noreferrer" target="_blank" className="w-8 h-8 rounded-md bg-white/8 flex items-center justify-center hover:bg-[#C9A96A]/20 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="text-white text-xs tracking-[0.15em] uppercase mb-5 font-[Inter,sans-serif]">Quick Links</h4>
            <ul className="space-y-2.5 font-[Inter,sans-serif] text-xs">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Team", path: "/team" },
                { label: "Services", path: "/services" },
                { label: "Community Outreach", path: "/community-outreach" },
                { label: "Patient Portal", path: "/patient-portal" },
                { label: "Referral Form", path: "/referral" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/40 hover:text-[#C9A96A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations */}
          <div>
            <h4 className="text-white text-xs tracking-[0.15em] uppercase mb-5 font-[Inter,sans-serif]">Locations</h4>
            <ul className="space-y-3 font-[Inter,sans-serif] text-xs text-white/40">
              {["Owings Mills, MD", "Baltimore, MD", "Baltimore (Charles St), MD"].map((loc) => (
                <li key={loc} className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-[#C9A96A]/60 flex-shrink-0" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs tracking-[0.15em] uppercase mb-5 font-[Inter,sans-serif]">Contact</h4>
            <ul className="space-y-3 font-[Inter,sans-serif] text-xs text-white/40">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A96A]/60" />
                <a href="tel:4439552662" className="hover:text-[#C9A96A] transition-colors">(443) 955-2662</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A96A]/60" />
                <a href="mailto:referrals@divinecounselingllc.net" className="hover:text-[#C9A96A] transition-colors">referrals@divinecounselingllc.net</a>
              </li>
            </ul>
            <div className="mt-4 text-xs text-white/40 font-[Inter,sans-serif] space-y-0.5">
              <p>Mon – Thu: 9am – 7pm</p>
              <p>Fri: 9am – 5pm</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 text-center text-[11px] text-white/25 font-[Inter,sans-serif]">
          <p>&copy; {new Date().getFullYear()} Divine Counseling LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
