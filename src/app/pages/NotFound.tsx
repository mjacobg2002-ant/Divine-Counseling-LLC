import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Home, Phone } from "lucide-react";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <div>
      <SEO
        title="Page Not Found | Divine Counseling LLC"
        description="The page you're looking for doesn't exist. Visit our homepage or contact Divine Counseling LLC for mental health services in Baltimore and Owings Mills, Maryland."
        noindex={true}
      />

      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#5B2C6F]/6 to-white min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">
              404 — Page Not Found
            </p>
            <h1 className="text-4xl sm:text-5xl text-[#2F2F2F] mb-6 leading-tight">
              This Page Doesn't Exist
            </h1>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed mb-10 max-w-md mx-auto">
              The page you're looking for may have been moved or no longer exists. Let us help you find what you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#5B2C6F] text-white rounded-md text-sm font-[Inter,sans-serif] hover:bg-[#4E2660] transition-all duration-300 hover:shadow-lg"
              >
                <Home className="w-4 h-4" /> Go to Homepage
              </Link>
              <Link
                to="/referral"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#8B1A4A] text-white rounded-md text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all duration-300 hover:shadow-lg"
              >
                Start Referral <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-[#5B2C6F]/8">
              <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] mb-2">Need immediate help?</p>
              <a
                href="tel:4439552662"
                className="inline-flex items-center gap-2 text-[#5B2C6F] font-[Inter,sans-serif] hover:text-[#8B1A4A] transition-colors"
              >
                <Phone className="w-4 h-4" /> Call (443) 955-2662
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
