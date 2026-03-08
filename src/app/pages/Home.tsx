import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Users, Award, Shield, Sparkles, Leaf, Quote, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO, localBusinessSchema, breadcrumbSchema } from "../components/SEO";

const stats = [
  { number: "50+", label: "Years Combined Experience", icon: Award },
  { number: "900+", label: "Clients Supported", icon: Heart },
  { number: "17+", label: "Professional Certifications", icon: Shield },
  { number: "30+", label: "Mental Health Professionals", icon: Users },
];

const services = [
  {
    title: "Individual, Couples & Family Counseling",
    description: "Personalized therapy to develop healthier communication, emotional awareness, and stronger relationships.",
    icon: Users,
  },
  {
    title: "Trauma, Anxiety & Depression",
    description: "Evidence-based methods including EMDR and TF-CBT to support healing from trauma and emotional challenges.",
    icon: Heart,
  },
  {
    title: "Psychiatric Rehabilitation (PRP)",
    description: "Holistic programs focused on building life skills, emotional resilience, and independence.",
    icon: Sparkles,
  },
  {
    title: "Art Therapy",
    description: "Creative therapeutic approaches allowing individuals to express emotions through art.",
    icon: Sparkles,
  },
  {
    title: "CBT & Dialectical Behavioral Therapy",
    description: "Structured therapy to manage emotional challenges, negative thought patterns, and behavioral responses.",
    icon: Shield,
  },
  {
    title: "Medication Management",
    description: "Comprehensive psychiatric medication management alongside therapy and holistic wellness.",
    icon: Leaf,
  },
];

const testimonials = [
  {
    text: "I am so grateful that I found Divine Counseling. The environment is welcoming and the staff truly care about your healing journey.",
    author: "A Grateful Client",
  },
  {
    text: "The holistic approach really made all the difference. I feel understood and supported in every session. They truly help you reach your highest self.",
    author: "Former Client",
  },
  {
    text: "Divine Counseling helped me navigate through one of the most challenging times in my life. I finally feel like myself again.",
    author: "Current Client",
  },
];

export function Home() {
  const homeSchema = {
    ...localBusinessSchema,
    "@graph": [
      localBusinessSchema,
      breadcrumbSchema([{ name: "Home", url: "/" }]),
    ],
  };

  return (
    <div>
      <SEO
        title="Divine Counseling LLC | Holistic Mental Health Counseling in Baltimore & Owings Mills, MD"
        description="Divine Counseling LLC is a holistic outpatient mental health center in Baltimore and Owings Mills, Maryland. We offer trauma-informed therapy, EMDR, CBT, DBT, art therapy, psychiatric rehabilitation, and medication management. Call (443) 955-2662."
        canonical="https://www.divinecounselingllc.net/"
        structuredData={homeSchema}
      />

      {/* Hero Section — tighter, conversion-optimized */}
      <section className="relative h-[80vh] min-h-[520px] max-h-[720px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1758525225856-d837707cb13f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCbGFjayUyMHBlb3BsZSUyMGNvbnZlcnNhdGlvbiUyMHN1cHBvcnRpdmUlMjBlbXBvd2VyaW5nJTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NzI5NDYwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-diverse-group-of-people-talking-7991/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5B2C6F]/90 via-[#5B2C6F]/60 to-[#5B2C6F]/30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">
                Divine Counseling LLC
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-4">
                Compassionate Mental Health Care
              </h1>
              <p className="text-white/50 font-[Inter,sans-serif] text-sm italic mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Helping You Reach Your Highest Self"
              </p>
              <p className="text-white/70 font-[Inter,sans-serif] mb-6 leading-relaxed max-w-md text-sm">
                Holistic counseling, psychiatric rehabilitation, and therapy services in Baltimore & Owings Mills, Maryland.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
                <Link
                  to="/referral"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#8B1A4A] text-white rounded-md text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Start Referral <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white/80 rounded-md text-sm font-[Inter,sans-serif] hover:bg-white/5 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 text-[11px] text-white/50 font-[Inter,sans-serif]">
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#3D7B6A]" /> 900+ Clients Helped</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#3D7B6A]" /> 10+ Insurance Plans</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#3D7B6A]" /> Telehealth Available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#5B2C6F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.number}
                </p>
                <p className="text-[11px] text-white/50 font-[Inter,sans-serif] tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">About Us</p>
              <h2 className="text-3xl sm:text-4xl text-[#2F2F2F] mb-6 leading-tight">
                Holistic Outpatient Mental Health Care
              </h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] mb-4">
                Divine Counseling LLC is a holistic outpatient mental health center committed to helping individuals overcome trauma, anxiety, depression, and emotional challenges through compassionate, evidence-based care.
              </p>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] mb-8">
                Our team of licensed therapists, counselors, and psychiatric professionals work together to create personalized care plans that help each client grow toward their highest self.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-[#5B2C6F] font-[Inter,sans-serif] hover:text-[#8B1A4A] transition-colors group"
              >
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1688699677407-c6864965f814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCbGFjayUyMHRoZXJhcGlzdCUyMGxpc3RlbmluZyUyMGNvbXBhc3Npb25hdGUlMjBvZmZpY2UlMjBjb3p5fGVufDF8fHx8MTc3Mjk0NjA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Compassionate therapist in a warm counseling environment"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24 bg-[#FBF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Our Services</p>
            <h2 className="text-3xl sm:text-4xl text-[#2F2F2F] mb-4 leading-tight">
              Comprehensive Mental Health Services
            </h2>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] max-w-xl mx-auto leading-relaxed">
              Trauma-informed therapy, holistic counseling, and psychiatric rehabilitation in Maryland.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to="/services"
                  className="group block bg-white p-7 rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#5B2C6F]/4 h-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#5B2C6F]/8 flex items-center justify-center mb-4 group-hover:bg-[#5B2C6F]/12 transition-colors">
                    <service.icon className="w-5 h-5 text-[#5B2C6F]" />
                  </div>
                  <h3 className="text-[#2F2F2F] mb-2" style={{ fontSize: '1rem' }}>{service.title}</h3>
                  <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#8B1A4A] text-white rounded-md text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all duration-300 hover:shadow-md"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwQW1lcmljYW4lMjB3b21hbiUyMHlvZ2ElMjBtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzI5NDYwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Holistic wellness and mindfulness meditation practice"
                className="w-full h-[420px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Our Approach</p>
              <h2 className="text-3xl sm:text-4xl text-[#2F2F2F] mb-6 leading-tight">
                Healing for Mind, Body & Spirit
              </h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] mb-6">
                Divine Counseling integrates traditional mental health therapy with holistic healing practices including mindfulness-based therapy, yoga, art therapy, and Reiki to create lasting transformation.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Mindfulness Therapy", "Yoga & Movement", "Reiki Healing", "Art Therapy", "EMDR", "CBT & DBT"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3D7B6A]" />
                    <span className="text-sm text-[#2F2F2F] font-[Inter,sans-serif]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-[#FBF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl text-[#2F2F2F]">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl border border-[#5B2C6F]/4"
              >
                <Quote className="w-7 h-7 text-[#C9A96A]/30 mb-4" />
                <p className="text-[#2F2F2F] font-[Inter,sans-serif] leading-relaxed mb-6 italic text-sm">
                  "{t.text}"
                </p>
                <p className="text-xs text-[#5B2C6F] font-[Inter,sans-serif]">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Community</p>
              <h2 className="text-3xl sm:text-4xl text-[#2F2F2F] mb-6 leading-tight">
                Strengthening Communities Through Awareness
              </h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] mb-8">
                Divine Counseling actively participates in community wellness events, educational workshops, and outreach initiatives to promote mental health awareness and accessible support across Maryland.
              </p>
              <Link
                to="/community-outreach"
                className="inline-flex items-center gap-2 text-sm text-[#5B2C6F] font-[Inter,sans-serif] hover:text-[#8B1A4A] transition-colors group"
              >
                Learn About Our Outreach <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758778932790-da96c9f06969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCbGFjayUyMGNvbW11bml0eSUyMGdhdGhlcmluZyUyMHN1cHBvcnQlMjBtZW50YWwlMjBoZWFsdGglMjBldmVudCUyMG91dGRvb3J8ZW58MXx8fHwxNzcyOTQ2MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community support and mental health outreach event"
                className="w-full h-[420px] object-cover object-top"
                style={{ objectPosition: '50% 20%' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#5B2C6F] to-[#4A2260]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-white/50 font-[Inter,sans-serif] mb-10 max-w-lg mx-auto leading-relaxed">
              Our compassionate team is here to support you. Take the first step toward emotional wellness today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#8B1A4A] text-white rounded-md text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all duration-300 hover:shadow-lg"
              >
                Request Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:4439552662"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/15 text-white/70 rounded-md text-sm font-[Inter,sans-serif] hover:bg-white/5 transition-all duration-300"
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
