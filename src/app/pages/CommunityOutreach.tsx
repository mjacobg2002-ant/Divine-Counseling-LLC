import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, BookOpen, HandHeart, Megaphone, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO, breadcrumbSchema } from "../components/SEO";

const programs = [
  {
    icon: Calendar,
    title: "Community Wellness Events",
    description: "We host regular wellness events across Maryland designed to bring mental health resources directly to the communities that need them most. Events include free mental health screenings, self-care workshops, and community healing circles.",
  },
  {
    icon: HandHeart,
    title: "Community Partnerships",
    description: "Divine Counseling actively partners with schools, churches, non-profit organizations, and local businesses to expand access to mental health education and resources throughout the Baltimore and Owings Mills areas.",
  },
  {
    icon: BookOpen,
    title: "Educational Workshops",
    description: "Our licensed therapists and psychiatric professionals lead educational workshops on topics including trauma awareness, stress management, healthy relationships, parenting strategies, and emotional resilience building.",
  },
  {
    icon: Megaphone,
    title: "Wellness Seminars",
    description: "We offer professional seminars for organizations, businesses, and educational institutions focused on workplace mental health, burnout prevention, and creating psychologically safe environments.",
  },
];

const pastEvents = [
  {
    title: "Mental Health Awareness Month Workshop",
    date: "May 2025",
    location: "Baltimore Community Center",
    description: "A full-day workshop focused on breaking the stigma around mental health in underserved communities.",
  },
  {
    title: "Youth Wellness & Resilience Summit",
    date: "March 2025",
    location: "Owings Mills High School",
    description: "Interactive sessions for young adults covering coping strategies, self-esteem building, and stress management.",
  },
  {
    title: "Holistic Healing Fair",
    date: "January 2025",
    location: "Baltimore Convention Center",
    description: "A community event featuring mindfulness demonstrations, art therapy sessions, and free mental health screenings.",
  },
];

export function CommunityOutreach() {
  return (
    <div>
      <SEO
        title="Community Outreach & Mental Health Awareness | Divine Counseling LLC"
        description="Divine Counseling LLC's community outreach programs: wellness events, educational workshops, community partnerships, and mental health awareness initiatives across Baltimore and Owings Mills, Maryland."
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Community Outreach", url: "/community-outreach" },
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
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Community Outreach</p>
            <h1 className="text-4xl sm:text-5xl text-[#2F2F2F] mb-6 leading-tight">
              Building Stronger Communities Through Mental Health Awareness
            </h1>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] text-lg leading-relaxed">
              Divine Counseling is committed to extending our mission beyond the therapy room. We believe that accessible mental health education and community support are essential to creating healthier, more resilient communities across Maryland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1616992873922-94702fd40c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3ZWxsbmVzcyUyMGV2ZW50JTIwd29ya3Nob3B8ZW58MXx8fHwxNzcyODk4OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community wellness event and mental health workshop"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-[#2F2F2F] mb-6">Our Commitment to Community</h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed mb-4">
                Divine Counseling actively participates in community events, workshops, and wellness initiatives designed to promote mental health awareness and accessible support throughout Maryland.
              </p>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed mb-4">
                We believe that mental health care should extend beyond the walls of our clinic. By bringing education, resources, and support directly to communities, we help break down barriers to mental health treatment and reduce stigma.
              </p>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed">
                Whether through school partnerships, church collaborations, or community wellness fairs, our team is dedicated to making mental health resources accessible to everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-[#FBF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl text-[#2F2F2F] mb-4">Our Outreach Programs</h2>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] max-w-2xl mx-auto">
              We offer a range of community-focused programs designed to promote mental health awareness, education, and accessible support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl hover:shadow-md transition-all duration-300 border border-[#5B2C6F]/5"
              >
                <div className="w-12 h-12 rounded-full bg-[#3D7B6A]/10 flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-[#3D7B6A]" />
                </div>
                <h3 className="text-xl text-[#2F2F2F] mb-3">{program.title}</h3>
                <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl text-[#2F2F2F] mb-4">Recent Community Events</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F8F5FA] rounded-2xl p-8"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#C9A96A]" />
                  <span className="text-sm text-[#C9A96A] font-[Inter,sans-serif]">{event.date}</span>
                </div>
                <h3 className="text-lg text-[#2F2F2F] mb-2">{event.title}</h3>
                <p className="text-xs text-[#5B2C6F] font-[Inter,sans-serif] mb-3">{event.location}</p>
                <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invite CTA */}
      <section className="py-24 bg-[#5B2C6F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A4A]/20 to-transparent" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">
            Invite Us to Your Community Event
          </h2>
          <p className="text-white/70 font-[Inter,sans-serif] mb-8 leading-relaxed">
            Are you organizing a community event, workshop, or wellness fair? Divine Counseling would love to participate. Our team can provide mental health education, free screenings, and resource sharing at your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8B1A4A] text-white rounded-lg font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all duration-300"
            >
              Contact Us About Your Event
            </Link>
            <Link
              to="/referral"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#C9A96A]/50 text-white rounded-lg font-[Inter,sans-serif] hover:bg-[#C9A96A]/15 transition-all"
            >
              Start Referral
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}