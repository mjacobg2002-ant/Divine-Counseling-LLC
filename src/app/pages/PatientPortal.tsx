import { Link } from "react-router";
import { motion } from "motion/react";
import { ClipboardList, Send, FileCheck, LogIn, CheckCircle, ArrowRight, Shield, Clock } from "lucide-react";
import { SEO, breadcrumbSchema } from "../components/SEO";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Complete Referral Form",
    description: "Fill out our referral form with your information. This is not an intake form — further details will be collected once enrolled.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "PA Contact Within 48 Hours",
    description: "A Program Administrator will reach out with a link to complete your patient portal, client handbook, and consent forms.",
  },
  {
    icon: Send,
    step: "03",
    title: "Begin Treatment",
    description: "After forms are completed and insurance is verified, typical enrollment time to meet with a clinician is 7 business days.",
  },
];

const insuranceList = [
  "Medicaid", "Blue Cross Blue Shield", "Optum", "Cigna", "Aetna",
  "Certified TriCare", "Medicare", "Johns Hopkins", "Humana", "EAP",
];

export function PatientPortal() {
  return (
    <div>
      <SEO
        title="Patient Portal & New Patient Referrals | Divine Counseling LLC"
        description="Access the Divine Counseling patient portal for existing patients or submit a new referral. Learn about our 3-step enrollment process, accepted insurance plans (Medicaid, BCBS, Cigna, Aetna, and more), and how to get started."
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Patient Portal", url: "/patient-portal" },
        ])}
      />

      {/* Hero — conversion-focused */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-[#5B2C6F]/6 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-3 uppercase">Patient Portal & Referrals</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#2F2F2F] mb-5 leading-tight">
              Access Your Care
            </h1>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] text-lg leading-relaxed mb-8">
              New or returning — we make it easy to access mental health services at Divine Counseling.
            </p>

            {/* Dual CTA — prominent */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#5B2C6F] text-white rounded-lg font-[Inter,sans-serif] text-sm hover:bg-[#4E2660] transition-all hover:shadow-lg"
              >
                <LogIn className="w-4 h-4" /> Patient Portal Login
              </a>
              <Link
                to="/referral"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#8B1A4A] text-white rounded-lg font-[Inter,sans-serif] text-sm hover:bg-[#7A1641] transition-all hover:shadow-lg"
              >
                New Patient? Start Referral <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works — scannable */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-[#2F2F2F] mb-3">How to Get Started</h2>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] max-w-lg mx-auto">
              Three simple steps to begin your healing journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center p-6 rounded-2xl bg-[#F8F5FA]/60 border border-[#5B2C6F]/4"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5B2C6F]/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#5B2C6F]" />
                </div>
                <span className="text-xs text-[#C9A96A] font-[Inter,sans-serif] tracking-widest uppercase">Step {step.step}</span>
                <h3 className="text-lg text-[#2F2F2F] mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referrals + Insurance — side by side */}
      <section className="py-16 bg-[#FBF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl text-[#2F2F2F] mb-5">Referral Information</h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed mb-4">
                Referrals can come from healthcare providers, schools, community organizations, family members, or self-referrals. Our team responds within 48 hours.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Self-referrals welcome and encouraged",
                  "Healthcare provider referrals accepted",
                  "School & community organization referrals",
                  "Family member referrals with consent",
                  "Court-ordered therapy referrals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#3D7B6A] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#6B6B6B] font-[Inter,sans-serif]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/referral"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A4A] text-white rounded-lg text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all hover:shadow-md"
              >
                Submit Referral Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl text-[#2F2F2F] mb-5">Insurance & Eligibility</h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed mb-4">
                We accept a wide variety of insurance plans and offer flexible self-pay options.
              </p>
              <div className="bg-white p-6 rounded-xl border border-[#5B2C6F]/6">
                <h3 className="text-base text-[#2F2F2F] mb-3">Accepted Insurance</h3>
                <div className="grid grid-cols-2 gap-2">
                  {insuranceList.map((ins) => (
                    <div key={ins} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5B2C6F]" />
                      <span className="text-sm text-[#6B6B6B] font-[Inter,sans-serif]">{ins}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 col-span-2 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96A]" />
                    <span className="text-sm text-[#6B6B6B] font-[Inter,sans-serif]">Self-Pay / Out of Pocket</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#6B6B6B]/70 font-[Inter,sans-serif] mt-4">
                  Contact us to verify your specific coverage and eligibility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Portal Card */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#5B2C6F]/5 to-[#8B1A4A]/5 p-8 sm:p-10 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5B2C6F]/10 flex items-center justify-center">
              <LogIn className="w-7 h-7 text-[#5B2C6F]" />
            </div>
            <h2 className="text-2xl sm:text-3xl text-[#2F2F2F] mb-3">Existing Patient Portal</h2>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] mb-6 max-w-lg mx-auto">
              View appointments, message your therapist, and manage your treatment plan through our secure portal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-xs text-[#6B6B6B] font-[Inter,sans-serif]">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#3D7B6A]" /> HIPAA Secure</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#3D7B6A]" /> 24/7 Access</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#5B2C6F] text-white rounded-lg font-[Inter,sans-serif] hover:bg-[#4E2660] transition-all duration-300"
            >
              <LogIn className="w-4 h-4" />
              Access Patient Portal
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-[#5B2C6F] to-[#4A2260]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl text-white mb-4">Ready to Start?</h2>
            <p className="text-white/60 font-[Inter,sans-serif] mb-8 max-w-lg mx-auto">
              Take the first step toward emotional wellness. Our compassionate team is here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/referral"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#8B1A4A] text-white rounded-lg text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all"
              >
                Submit Referral <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:4439552662"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/15 text-white/70 rounded-lg text-sm font-[Inter,sans-serif] hover:bg-white/5 transition-all"
              >
                Call (443) 955-2662
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}