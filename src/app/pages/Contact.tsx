import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { SEO, breadcrumbSchema } from "../components/SEO";

const locations = [
  {
    name: "Owings Mills",
    address: "Owings Mills, MD",
    description: "Our primary location serving the Owings Mills and surrounding communities.",
  },
  {
    name: "Baltimore",
    address: "Baltimore, MD",
    description: "Conveniently located to serve the greater Baltimore metropolitan area.",
  },
  {
    name: "Baltimore (Charles Street)",
    address: "Charles Street, Baltimore, MD",
    description: "Our downtown Baltimore location on historic Charles Street.",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <SEO
        title="Contact Us — Baltimore & Owings Mills, MD | Divine Counseling LLC"
        description="Contact Divine Counseling LLC for mental health services in Baltimore and Owings Mills, Maryland. Call (443) 955-2662 or email referrals@divinecounselingllc.net. Office hours: Mon–Thu 9am–7pm, Fri 9am–5pm."
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      {/* Hero */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#5B2C6F]/6 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl text-[#2F2F2F] mb-6 leading-tight">
              Get in Touch with Divine Counseling
            </h1>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] text-lg leading-relaxed">
              Ready to start your healing journey? Contact our team to schedule an appointment, ask questions, or learn more about our mental health counseling services in Maryland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl text-[#2F2F2F] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#5B2C6F]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#5B2C6F]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] mb-0.5">Phone</p>
                      <a href="tel:4439552662" className="text-[#2F2F2F] font-[Inter,sans-serif] hover:text-[#5B2C6F] transition-colors">
                        (443) 955-2662
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#5B2C6F]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#5B2C6F]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] mb-0.5">Email</p>
                      <a href="mailto:referrals@divinecounselingllc.net" className="text-[#2F2F2F] font-[Inter,sans-serif] hover:text-[#5B2C6F] transition-colors text-sm">
                        referrals@divinecounselingllc.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#5B2C6F]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#5B2C6F]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] mb-1">Office Hours</p>
                      <p className="text-[#2F2F2F] text-sm font-[Inter,sans-serif]">Monday – Thursday: 9am – 7pm</p>
                      <p className="text-[#2F2F2F] text-sm font-[Inter,sans-serif]">Friday: 9am – 5pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-xl text-[#2F2F2F] mb-4">Our Locations</h3>
                <div className="space-y-4">
                  {locations.map((loc) => (
                    <div key={loc.name} className="flex items-start gap-3 bg-[#F8F5FA] p-4 rounded-xl">
                      <MapPin className="w-5 h-5 text-[#5B2C6F] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-[#2F2F2F] font-[Inter,sans-serif]">{loc.name}</p>
                        <p className="text-xs text-[#6B6B6B] font-[Inter,sans-serif]">{loc.address}</p>
                        <p className="text-xs text-[#6B6B6B] font-[Inter,sans-serif] mt-1">{loc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F8F5FA] p-10 rounded-2xl text-center h-full flex flex-col items-center justify-center"
                >
                  <CheckCircle className="w-16 h-16 text-[#3D7B6A] mb-4" />
                  <h3 className="text-2xl text-[#2F2F2F] mb-3">Message Sent Successfully</h3>
                  <p className="text-[#6B6B6B] font-[Inter,sans-serif] mb-6 max-w-md">
                    Thank you for reaching out. Our team will respond within one business day. We look forward to supporting your healing journey.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "", preferredContact: "email" });
                    }}
                    className="text-[#5B2C6F] font-[Inter,sans-serif] hover:underline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#F8F5FA] p-8 md:p-10 rounded-2xl space-y-6">
                  <h2 className="text-2xl text-[#2F2F2F] mb-2">Send Us a Message</h2>
                  <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] mb-4">
                    Fill out the form below and our team will get back to you promptly.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#2F2F2F] mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#5B2C6F]/12 bg-white font-[Inter,sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]/30"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#2F2F2F] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#5B2C6F]/12 bg-white font-[Inter,sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]/30"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#2F2F2F] mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#5B2C6F]/12 bg-white font-[Inter,sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]/30"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#2F2F2F] mb-2">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#5B2C6F]/12 bg-white font-[Inter,sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]/30"
                      >
                        <option value="">Select a topic</option>
                        <option value="appointment">Request an Appointment</option>
                        <option value="services">Questions About Services</option>
                        <option value="insurance">Insurance & Billing</option>
                        <option value="referral">Submit a Referral</option>
                        <option value="community">Community Event Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[#2F2F2F] mb-2">Preferred Contact Method</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="accent-[#5B2C6F]"
                        />
                        <span className="text-sm text-[#6B6B6B] font-[Inter,sans-serif]">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="accent-[#5B2C6F]"
                        />
                        <span className="text-sm text-[#6B6B6B] font-[Inter,sans-serif]">Phone</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[#2F2F2F] mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#5B2C6F]/12 bg-white font-[Inter,sans-serif] text-sm focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]/30 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#8B1A4A] text-white rounded-lg font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <p className="text-xs text-[#6B6B6B] font-[Inter,sans-serif] text-center">
                    By submitting this form, you agree to be contacted by Divine Counseling LLC regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#5B2C6F]/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-[#2F2F2F] mb-4">Serving Maryland Communities</h2>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif]">
              Offering in-person and telehealth therapy services across Maryland, including Baltimore, Owings Mills, and surrounding areas.
            </p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Divine Counseling Locations Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12937236042!2d-76.82455155!3d39.28564435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803aed6f483b7%3A0x44896a84223e758!2sBaltimore%2C%20MD!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#5B2C6F]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">Your Healing Journey Starts Here</h2>
          <p className="text-white/70 font-[Inter,sans-serif] mb-8">
            Take the first step toward emotional wellness. Call us today or submit an online inquiry to connect with our compassionate team of mental health professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4439552662"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#8B1A4A] text-white rounded-lg font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all"
            >
              <Phone className="w-4 h-4" />
              Call (443) 955-2662
            </a>
            <Link
              to="/referral"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#C9A96A]/50 text-white rounded-lg font-[Inter,sans-serif] hover:bg-[#C9A96A]/15 transition-all"
            >
              Submit a Referral
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}