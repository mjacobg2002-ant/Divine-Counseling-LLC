import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Eye, Shield, Users, Star, Handshake, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO, breadcrumbSchema } from "../components/SEO";

const divineValues = [
  { letter: "D", word: "Dedication", desc: "We are deeply committed to the mental health and wellbeing of every individual we serve.", icon: Heart },
  { letter: "I", word: "Improvement", desc: "We continuously seek to improve our methods, training, and the quality of care we provide.", icon: Star },
  { letter: "V", word: "Vulnerability", desc: "We honor the courage it takes to seek help and create space for authentic self-expression.", icon: Eye },
  { letter: "I", word: "Integrity", desc: "We uphold the highest ethical standards in all clinical and professional interactions.", icon: Shield },
  { letter: "N", word: "Neighborly", desc: "We extend warmth, kindness, and genuine care to every client and community member.", icon: Handshake },
  { letter: "E", word: "Example", desc: "We lead by example, modeling the wellness practices and values we share with our clients.", icon: Users },
];

export function About() {
  return (
    <div>
      <SEO
        title="About Us — Holistic Mental Health Counseling | Divine Counseling LLC"
        description="Learn about Divine Counseling LLC, a holistic outpatient mental health center in Baltimore and Owings Mills, MD. Our D.I.V.I.N.E. values guide our trauma-informed therapy, EMDR, CBT, and holistic healing services."
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      {/* Hero */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#5B2C6F]/6 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">About Us</p>
            <h1 className="text-4xl sm:text-5xl text-[#2F2F2F] mb-6 leading-tight">
              Holistic Mental Health Counseling in Maryland
            </h1>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] text-lg leading-relaxed">
              Divine Counseling LLC is dedicated to providing compassionate, trauma-informed therapy services that help individuals heal emotionally, mentally, and spiritually.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.15em] text-xs mb-3 uppercase">Our Mission</p>
              <h2 className="text-3xl text-[#2F2F2F] mb-6">Reaching Your Highest Self</h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] mb-4">
                At Divine Counseling LLC, our mission is to provide holistic, trauma-informed mental health care that empowers individuals to overcome emotional challenges and reach their highest potential. We believe that healing is not just the absence of symptoms — it is the presence of wholeness.
              </p>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] mb-4">
                Serving communities across Maryland including Baltimore, Owings Mills, and surrounding areas, we offer accessible outpatient mental health services that address anxiety, depression, trauma, and a wide range of emotional health concerns.
              </p>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8]">
                Our team of licensed therapists, counselors, and psychiatric professionals work collaboratively to create personalized care plans grounded in evidence-based practices and holistic wellness approaches.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769146109291-e2348a428d43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd2FybSUyMGxpdmluZyUyMHJvb20lMjBwbGFudCUyMHNvZnQlMjBsaWdodHxlbnwxfHx8fDE3NzI5NDEzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Warm and welcoming therapy environment"
                className="w-full h-[420px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* D.I.V.I.N.E Values */}
      <section className="py-20 bg-[#FBF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Our Values</p>
            <h2 className="text-3xl sm:text-4xl text-[#2F2F2F] mb-4" style={{ fontVariantLigatures: 'none', WebkitFontFeatureSettings: '"liga" 0', fontFeatureSettings: '"liga" 0' }}>
              The D.I.V.I.N.E. Difference
            </h2>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] max-w-2xl mx-auto leading-relaxed">
              Our name represents the core values that guide every interaction, therapy session, and community engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divineValues.map((v, i) => (
              <motion.div
                key={v.word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white p-7 rounded-2xl hover:shadow-md transition-all duration-300 border border-[#5B2C6F]/4"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5B2C6F]/8 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-[#5B2C6F]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {v.letter}
                    </span>
                  </div>
                  <h3 className="text-lg text-[#2F2F2F]">{v.word}</h3>
                </div>
                <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759579720047-cda920d27a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMHNhZ2UlMjBwbGFudCUyMHdlbGxuZXNzJTIwc3BhJTIwY2FsbXxlbnwxfHx8fDE3NzI5NDEzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Holistic wellness and healing practices"
                className="w-full h-[420px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.15em] text-xs mb-3 uppercase">Our Approach</p>
              <h2 className="text-3xl text-[#2F2F2F] mb-6">Holistic Healing for Mind, Body & Spirit</h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] mb-4">
                We believe true healing comes from addressing the whole person — mind, body, and spirit. Our holistic approach integrates traditional evidence-based therapies with complementary wellness practices.
              </p>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] mb-6">
                From Cognitive Behavioral Therapy and EMDR to mindfulness meditation, yoga, and Reiki, we tailor each treatment plan to the unique needs and goals of every client.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A4A] text-white rounded-md font-[Inter,sans-serif] text-sm hover:bg-[#7A1641] transition-all duration-300 hover:shadow-md"
              >
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team CTA */}
      <section className="py-20 bg-gradient-to-br from-[#5B2C6F] to-[#4A2260]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Our People</p>
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Meet the Team Behind Divine Counseling
            </h2>
            <p className="text-white/60 font-[Inter,sans-serif] mb-8 leading-relaxed max-w-xl mx-auto">
              Our team of 14+ licensed therapists, counselors, and psychiatric nurse practitioners bring decades of combined experience across every area of mental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#8B1A4A] text-white rounded-md font-[Inter,sans-serif] text-sm hover:bg-[#7A1641] transition-all duration-300 hover:shadow-lg"
              >
                Meet Our Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/referral"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/15 text-white/70 rounded-md text-sm font-[Inter,sans-serif] hover:bg-white/5 transition-all"
              >
                Start Referral
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}