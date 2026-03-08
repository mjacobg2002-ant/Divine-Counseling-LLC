import { Link } from "react-router";
import { motion } from "motion/react";
import { Users, Heart, Sparkles, Palette, Brain, Pill, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO, breadcrumbSchema } from "../components/SEO";

const services = [
  {
    id: "individual-couples-family",
    icon: Users,
    title: "Individual, Couples & Family Counseling",
    image: "https://images.unsplash.com/photo-1577473928385-77971ba1f3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjb3Vuc2VsaW5nJTIwdG9nZXRoZXIlMjBzdXBwb3J0aXZlJTIwZGl2ZXJzZXxlbnwxfHx8fDE3NzI5NDQwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    summary: "Personalized therapy designed to help individuals, couples, and families develop healthier communication and stronger relationships.",
    details: "Our licensed therapists provide a safe, supportive environment where individuals can explore personal challenges, couples can rebuild trust and connection, and families can strengthen their bonds. We utilize a range of evidence-based approaches tailored to each client's unique needs and goals.",
    highlights: ["Life transitions & personal growth", "Relationship repair & communication", "Grief, loss & adjustment", "In-person & telehealth available"],
  },
  {
    id: "trauma-anxiety-depression",
    icon: Heart,
    title: "Trauma, Anxiety & Depression Therapy",
    image: "https://images.unsplash.com/photo-1629889635253-63e771aabd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBlYWNlZnVsJTIwYW54aWV0eSUyMHJlbGllZiUyMGNhbG0lMjBicmVhdGhpbmd8ZW58MXx8fHwxNzcyOTQ0MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    summary: "Evidence-based therapeutic methods to support individuals dealing with emotional trauma, anxiety disorders, and depression.",
    details: "Our trauma-informed therapists specialize in helping individuals process difficult experiences and develop healthy coping strategies using EMDR, Trauma-Focused CBT, and mindfulness-based interventions.",
    highlights: ["EMDR & Trauma-Focused CBT", "Anxiety & panic disorders", "Major depression & mood disorders", "Building resilience & coping skills"],
  },
  {
    id: "prp",
    icon: Sparkles,
    title: "Psychiatric Rehabilitation Program (PRP)",
    image: "https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHN1cHBvcnQlMjB0aGVyYXB5JTIwcmVoYWJpbGl0YXRpb24lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcyOTQ0MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    summary: "A holistic program focused on building life skills, emotional resilience, and independence in everyday life.",
    details: "Our PRP program combines structured therapeutic activities with practical skill-building exercises that promote independence and community integration. Participants work closely with our team to set goals and build confidence.",
    highlights: ["Daily living skills development", "Social functioning support", "Community integration", "Goal-setting & confidence building"],
  },
  {
    id: "art-therapy",
    icon: Palette,
    title: "Art Therapy",
    image: "https://images.unsplash.com/photo-1615909340810-3ec0e50f9e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjB0aGVyYXBldXRpYyUyMGNyZWF0aXZlJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NzI5NDQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    summary: "Creative therapeutic approaches that allow individuals to express emotions through art within a supportive environment.",
    details: "Our licensed art therapists guide clients through various artistic mediums to explore emotions that may be difficult to express with words. No prior art experience is necessary — the focus is on the healing process.",
    highlights: ["Drawing, painting & sculpting", "Trauma processing through art", "Individual & group sessions", "All ages & skill levels welcome"],
  },
  {
    id: "cbt-dbt",
    icon: Brain,
    title: "CBT & Dialectical Behavioral Therapy",
    image: "https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMG1lZGl0YXRpb24lMjBjYWxtJTIwdGhlcmFweSUyMGJyYWluJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzcyOTQ0MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    summary: "Structured evidence-based therapy to manage emotional challenges, negative thought patterns, and behavioral responses.",
    details: "CBT helps clients restructure negative thought patterns while DBT builds skills in mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.",
    highlights: ["Cognitive restructuring", "Mindfulness & distress tolerance", "Emotion regulation skills", "Interpersonal effectiveness"],
  },
  {
    id: "medication-management",
    icon: Pill,
    title: "Medication Management",
    image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwcHJlc2NyaXB0aW9uJTIwaGVhbHRoY2FyZSUyMG9mZmljZXxlbnwxfHx8fDE3NzI5NDQwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    summary: "Comprehensive psychiatric medication management alongside therapy and holistic wellness practices.",
    details: "Our Board-Certified PMHNPs provide personalized medication plans for conditions including anxiety, depression, ADHD, bipolar disorder, and PTSD, complementing ongoing therapy.",
    highlights: ["Board-Certified PMHNPs", "Anxiety, depression & ADHD", "Regular monitoring & follow-ups", "Integrated with therapy"],
  },
];

export function Services() {
  return (
    <div>
      <SEO
        title="Mental Health & Counseling Services in Maryland | Divine Counseling LLC"
        description="Explore our comprehensive mental health services: individual, couples & family counseling, trauma therapy (EMDR, TF-CBT), psychiatric rehabilitation (PRP), art therapy, CBT, DBT, and medication management in Baltimore & Owings Mills, MD."
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
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
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Our Services</p>
            <h1 className="text-4xl sm:text-5xl text-[#2F2F2F] mb-6 leading-tight">
              Mental Health & Counseling Services
            </h1>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] text-lg leading-relaxed">
              From trauma-informed therapy and holistic counseling to psychiatric rehabilitation and medication management — comprehensive outpatient care in Maryland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#5B2C6F]/8 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[#5B2C6F]" />
                    </div>
                    <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.1em] text-[11px] uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h2 className="text-2xl sm:text-3xl text-[#2F2F2F] mb-4 leading-tight">{service.title}</h2>
                  <p className="text-[#2F2F2F]/80 font-[Inter,sans-serif] mb-3 leading-relaxed">{service.summary}</p>
                  <p className="text-[#6B6B6B] font-[Inter,sans-serif] text-sm leading-[1.8] mb-6">{service.details}</p>
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {service.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#3D7B6A] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-[#6B6B6B] font-[Inter,sans-serif]">{h}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/referral"
                    className="inline-flex items-center gap-2 text-sm text-[#5B2C6F] font-[Inter,sans-serif] hover:text-[#8B1A4A] transition-colors group"
                  >
                    Schedule a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[340px] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth */}
      <section className="py-20 bg-[#FBF8F5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Telehealth</p>
            <h2 className="text-3xl text-[#2F2F2F] mb-5">Secure Telehealth Sessions Available</h2>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed mb-8 max-w-xl mx-auto">
              HIPAA-compliant telehealth therapy sessions so you can receive quality mental health care from the comfort of your home. Available for individual counseling, couples therapy, and medication management.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#3D7B6A] text-white rounded-md text-sm font-[Inter,sans-serif] hover:bg-[#357060] transition-all duration-300 hover:shadow-md"
            >
              Request Telehealth Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#5B2C6F] to-[#4A2260]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Start Your Healing Journey</h2>
            <p className="text-white/50 font-[Inter,sans-serif] mb-8 leading-relaxed max-w-lg mx-auto">
              Our team of 30+ licensed professionals is ready to help you overcome challenges and reach your highest self.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/referral"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#8B1A4A] text-white rounded-md text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all"
              >
                Start Referral <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/15 text-white/70 rounded-md text-sm font-[Inter,sans-serif] hover:bg-white/5 transition-all"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}