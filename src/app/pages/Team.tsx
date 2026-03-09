import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { SEO, breadcrumbSchema } from "../components/SEO";

// All team headshots
import imgCaraBaltimore from "../../assets/86d7990bd9f47a7fbe87aff443f5f69504799ace.png";
import imgAdaliaDominique from "../../assets/1df124f8be9c1a330586b09d7b26f5ca33048ab2.png";
import imgBernadettePruitt from "../../assets/5260c9c040e62bab7863e99bf0d08b09a146816e.png";
import imgChristinaWiley from "../../assets/01b648644b497561467993b95e2df23e42f37cd4.png";
import imgCourtneyHayes from "../../assets/47ca2b8604f536dea34b3a887675bb3c57198396.png";
import imgDanielleMcCreary from "../../assets/b0ee172d098318dff595010eb377cbce90f45748.png";
import imgDiorNdiaye from "../../assets/03cc2b281bdd38fdc2fa374a0732de147e56bdce.png";
import imgErinSoutherington from "../../assets/ab142560c5852f0915279e6947452f4e7ad4485b.png";
import imgElizabethKraft from "../../assets/e7a5f0570befb38b8be0bc74253aef453a49b9f8.png";
import imgPauletteHendricks from "../../assets/b4797a6aad019401bcf4bd95aaf13c4d835d048c.png";
import imgRisikaAkanbiYusuff from "../../assets/295f644386958f6f4e1f76a2facbc035c42476e0.png";
import imgShareenCampbell from "../../assets/3d32df85f14ad09978eb455b0467bd7c7c4e1ba2.png";
import imgWrenDouglass from "../../assets/e09c86c8756b2627d906457b16d2646d85a33bf7.png";
import imgTiffanyMartin from "../../assets/4dd943eb8b2ac4b084f81ddd91ea995e21b40ee2.png";

interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image?: string;
  featured?: boolean;
  specialties?: string[];
  /** Per-member object-position for consistent face centering */
  photoPosition?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Cara Baltimore",
    title: "Divine Counseling Owner & Chief Therapist",
    credentials: "LCSW (MD, VA, & DC)",
    bio: `I am a Licensed Clinical Social Worker (MD, VA, & DC) specializing in children, adolescents, and families. I have a passion for helping others reach their highest self and offer a safe, comfortable, and culturally competent atmosphere. I provide a holistic approach that allows you to be the author of your own treatment. I am a hands-on therapist that encourages others to apply skills directly in practice. I am most passionate about helping individuals move trauma from the mind and body, equipping them with the skills necessary to take control of their lives and begin truly living. I have experience working with individuals who struggle with trauma, addiction, depression, anxiety, mood, psychosis, adjustment, and personality disorders.

I have specialized training in Eye Movement Desensitization & Reprocessing Therapy (EMDR), Dialectical Behavioral Therapy (DBT), Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), & Cognitive Behavioral Therapy (CBT). I'm also a Certified Anger Management Specialist-Trainer (CAMS II) & Nationally Certified Parenting Instructor for court ordered persons.`,
    image: imgCaraBaltimore,
    featured: true,
    specialties: ["EMDR", "DBT", "TF-CBT", "CBT", "Anger Management", "Parenting Instruction"],
    photoPosition: "center 15%",
  },
  {
    name: "Adalia Dominique",
    title: "Licensed Graduate Professional Counselor",
    credentials: "LGPC",
    bio: `Adalia Dominique is a Licensed Graduate Professional Counselor dedicated to helping individuals overcome challenges, achieve personal growth, and improve their overall well-being. With four years of experience in the field, she specializes in Anxiety and Stress Management, Depression, Interpersonal Relationships, Self-Esteem and Identity Development, Life Transitions, and more.

Adalia holds a Master's in Clinical Mental Health Counseling from The Chicago School of Professional Psychology, where she received comprehensive training in evidence-based therapeutic techniques. She is committed to providing a safe, non-judgmental space where clients can explore their thoughts and feelings, gain insight into their behaviors, and develop effective coping strategies.

Using a client-centered approach, Adalia tailors therapy sessions to meet the unique needs and goals of each individual. She integrates various therapeutic modalities such as cognitive-behavioral therapy (CBT), mindfulness-based techniques, Humanistic Therapy, Narrative Therapy, Solution-Focused Therapy, and psychodynamic therapy to facilitate meaningful change and empower clients to lead more fulfilling lives.

Her professional and organization affiliations include American Counseling Association (ACA), National Council of Negro Women (NCNW), Association of Black Psychologists, Inc. (ABPsi), and National Society of Leadership and Success.`,
    image: imgAdaliaDominique,
    specialties: ["Anxiety & Stress Management", "CBT", "Mindfulness", "Narrative Therapy"],
    photoPosition: "center 18%",
  },
  {
    name: "Bernadette Pruitt",
    title: "Licensed Clinical Professional Counselor",
    credentials: "LCPC",
    bio: `Bernadette Pruitt, LCPC, provides an empathetic and liberating environment to facilitate growth. She believes that her attentive and open approach is pivotal in developing a genuine connection in therapy. Bernadette creates an open space for identifying concerns, setting and evaluating goals, and discovering solutions. A few of Bernadette's goals are to assist clients in gaining a deeper understanding of themselves, resolving relational discord, accepting difficult changes, and navigating the world with a healthier outlook.

Bernadette is a Licensed Clinical Professional Counselor with a Masters of Education in Counseling Psychology from the University of Baltimore. She has practiced in a variety of treatment settings, ranging in therapeutic interventions and populations. Previous practice settings include community work in the Baltimore area with clients from various backgrounds, LGBTQIA+ community, adolescents, and young adults.

Bernadette has experience treating individuals and couples experiencing relational discord, identity issues, anxiety, adjustment disorders, addictions, ADHD, anger management issues, depression, bipolar disorder, PTSD, and self-esteem issues. Bernadette also aids her clients in self-discovery, enhancing their self-awareness, and working through tough adjustments in their lives.`,
    image: imgBernadettePruitt,
    specialties: ["Relational Discord", "LGBTQIA+", "Identity Issues", "Self-Discovery"],
    photoPosition: "center 12%",
  },
  {
    name: "Christina Wiley",
    title: "Licensed Graduate Professional Counselor & Certified Alcohol and Drug Counselor",
    credentials: "LGPC, CADC",
    bio: `Christina Wiley is a Licensed Graduate Professional Counselor, as well as a Certified Alcohol and Drug Counselor, in the state of Maryland. She obtained her Master's degree in Counseling Psychology from Bowie State University with a specialization in Adlerian counseling.

Christina has experience working with individuals and families in various settings. These include residential, hospital and medication assisted treatment programs. Ms. Wiley has a vested interest in working with individuals and families in addressing chemical dependency, mood disorders, and developmental disabilities. Christina utilizes an eclectic approach in the therapy that is tailored to meet the specific needs of each individual. She believes that "therapy can be life changing and everyone deserves to experience that change."`,
    image: imgChristinaWiley,
    specialties: ["Chemical Dependency", "Mood Disorders", "Adlerian Counseling", "Family Therapy"],
    photoPosition: "center 20%",
  },
  {
    name: "Courtney Hayes",
    title: "Licensed Graduate Professional Counselor",
    credentials: "LGPC",
    bio: `I am Courtney Anaya Gabriella Hayes, a Licensed Graduate Professional Counselor (LGPC) in the state of Maryland. I earned my Masters in Counseling Psychology from Bowie State University in December 2021. I have experience working within the inpatient and outpatient setting with children, adolescents, and adults who are clinically diagnosed with anxiety, depression, bipolar disorder, borderline personality disorder, and various other mental health disorders.

I offer a safe, non-judgmental space for individual and family therapy with the hopes of guiding you to discovering therapeutic strategies and techniques that will help you strengthen your mental and emotional well-being. If you are struggling with anxiety, depression, overwhelming thoughts, anger, or having difficulty managing life transitions — come talk with me. I am open to in-person therapy sessions, as well as telehealth/virtual therapy sessions. I look forward to working with you!`,
    image: imgCourtneyHayes,
    specialties: ["Anxiety & Depression", "Family Therapy", "Life Transitions", "Telehealth"],
    photoPosition: "center 15%",
  },
  {
    name: "Danielle McCreary",
    title: "Licensed Master Social Worker",
    credentials: "LMSW",
    bio: `Danielle (aka Dani) is a Licensed Master Social Worker in the state of Maryland. She likes to engage using a Person Centered approach and make sure the client feels they are always heard. You know you better than anyone else and we, as therapists, are here to help you navigate that.

She is trained in Trauma Focused Cognitive Behavioral therapy and has experience working with several diagnoses, such as borderline personality disorder, bipolar disorder, dissociative identity disorder, major depression, anxiety, and other behavioral disorders. She has worked in various settings such as assisted living facilities, hospitals, intensive outpatient clinics, and the school system.`,
    image: imgDanielleMcCreary,
    specialties: ["Trauma-Focused CBT", "Person-Centered", "Personality Disorders", "Behavioral Disorders"],
    photoPosition: "center 18%",
  },
  {
    name: "Dior Ndiaye",
    title: "Licensed Graduate Professional Counselor",
    credentials: "LGPC",
    bio: `Dior is a Licensed Graduate Professional Counselor in the state of Maryland. She received her Bachelor's degree in Psychology from the University of North Texas and her Master's degree in Clinical Mental Health Counseling from Johns Hopkins University.

Dior is eager to work with populations from all age ranges, but has experience working with children, adolescents, and young adults who struggle with mood, anxiety, trauma, and stress-related disorders. She utilizes an eclectic approach to counseling with an emphasis on Person-Centered and Cognitive-Behavioral Therapy depending on the client's needs.

Her goal is to provide a safe space for everyone to explore their intersecting identities and uniqueness in a way that allows them to be vulnerable and be their authentic selves. Dior is passionate about working with multicultural and minoritized clients who yearn to have a voice and feel empowered. When working with clients, she ensures that a strong rapport is built while focusing on enhancing the client's self-fulfillment, self-acceptance, and self-actualization. Dior is excited to tackle the challenges that come with the initial stages of therapy and is looking forward to helping you reach your goals!`,
    image: imgDiorNdiaye,
    specialties: ["Multicultural Counseling", "Person-Centered", "CBT", "Identity & Self-Acceptance"],
    photoPosition: "center 15%",
  },
  {
    name: "Elizabeth Kraft",
    title: "Licensed Clinical Professional Counselor",
    credentials: "LCPC",
    bio: `Hello, my name is Liz. I am a Licensed Clinical Professional Counselor having earned my master's degree at McDaniel College majoring in Community Mental Health. I have 5 years' experience working with middle to late adolescence as well as young and older adults with focus on stress, anxiety, depression, mindfulness, self-esteem, substance use disorders and dual diagnosis, and most especially grief and loss.

Every client is different, but one thing everyone has in common is the need for self-care. As we focus on your unique treatment plan needs, a primary goal is to establish a self-care routine to encourage success in treatment and personal goals. I look forward to meeting you and helping you create your own path using techniques from person-centered, solution-focused, CBT, and Holistic therapy approaches. I look forward to meeting you and getting to know you and help you forge that path to improve mental health and wellness.`,
    image: imgElizabethKraft,
    specialties: ["Grief & Loss", "Self-Care", "Substance Use", "Holistic Therapy"],
    photoPosition: "center 18%",
  },
  {
    name: "Erin Southerington",
    title: "Licensed Marriage and Family Therapist",
    credentials: "LMFT (MD & DE)",
    bio: `I am a Licensed Marriage and Family Therapist in the states of Maryland and Delaware with over 13 years of working in the Mental Health field. Beginning as a residential counselor working primarily with individuals 12-21, I saw the importance of working with the entire family and helping the parents and caregivers and decided to return to school to earn my Masters of Science in Family Therapy.

I completed my internship and began working in Massachusetts doing intensive in-home therapy, with a focus on family dynamics, healthy boundary setting, communication, and parenting strategies. I have experience working with a variety of diagnoses and believe that a person is more than their diagnoses, and prefer to focus on how the symptoms are impacting your life and where you want the change to occur in your life.

I have additional training in Solution-Focused Brief Therapy, Accelerated Resolution Therapy, and Dialectical Behavioral Therapy (DBT).`,
    image: imgErinSoutherington,
    specialties: ["Marriage & Family", "Boundary Setting", "Solution-Focused", "DBT"],
    photoPosition: "center 15%",
  },
  {
    name: "Paulette Hendricks",
    title: "Licensed Clinical Social Worker",
    credentials: "LCSW-C",
    bio: `Paulette is a Licensed Clinical Social Worker (LCSW-C) in the state of Maryland. She enjoys working with children, teens, and adults from diverse backgrounds. She has significant training in Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), Solutions Focused Therapy (SFT), Grief and Loss, and Trauma-Informed Care. Paulette is a creative, strength-based clinician who enjoys incorporating social-emotional learning skills into her work. Paulette also integrates mindfulness practices and coping strategies.

Paulette has worked in a variety of settings, including as a school social worker at Baltimore City Public Schools for over 20 years. She received her master's degree in social work from the University of Maryland, Baltimore, with a specialization in clinical/administration. Paulette has gained experience working in both the public and private sectors in the areas of healthcare, education, and outpatient mental health centers.

Specializing in working with children, youth, and families on a multitude of issues and stressors, Paulette is dedicated to helping individuals with Reaching their Highest Self.`,
    image: imgPauletteHendricks,
    specialties: ["Children & Youth", "CBT & DBT", "Grief & Loss", "Social-Emotional Learning"],
    photoPosition: "center 12%",
  },
  {
    name: "Risika Akanbi-Yusuff",
    title: "Psychiatric-Mental Health Nurse Practitioner",
    credentials: "PMHNP-BC",
    bio: `I am a Board-Certified Psychiatric-Mental Health Nurse Practitioner who takes a warm, practical approach to mental wellness. I understand that people are complex — there's no one-size-fits-all path to healing — and I'm committed to helping each client find what truly works for them.

My style is solution-oriented, blending evidence-based care with compassion and real-world understanding. I provide care for children, adolescents, and adults, and I strive to create a space that feels safe, collaborative, and empowering — where clients feel seen for who they are and supported in becoming who they want to be.

My goal is always the same: to help people feel more grounded, more confident, and more hopeful about their lives.`,
    image: imgRisikaAkanbiYusuff,
    specialties: ["Medication Management", "Children & Adolescents", "Solution-Oriented", "Evidence-Based Care"],
    photoPosition: "center 20%",
  },
  {
    name: "Shareen Campbell",
    title: "Psychiatric-Mental Health Nurse Practitioner",
    credentials: "PMHNP-BC",
    bio: `My name is Shareen Campbell. I am a Board Certified Psychiatric Mental Health Nurse Practitioner (PMHNP). I provide Medication Management for individuals with mental health concerns. I also refer patients for talk therapy if necessary.

I started out as a Medical Surgical Nurse. I spent about 5 years practicing on the medical side of nursing. I've always had a passion for mental health and after gaining medical experience I decided to make the transition to mental health nursing. I really enjoyed helping individuals and families through some of the toughest times of their lives, which led me to pursue a career as a Nurse Practitioner. I am now able to help individuals and families in a greater capacity.

My role as PMHNP is to assess, diagnose and treat the mental health needs of patients. I specialize in providing medication treatments to adult patients experiencing Anxiety, Depression, ADHD, Bipolar Disorder, and PTSD. I utilize evidence-based practices to provide optimal patient-centered care. I understand that the patient-provider relationship is paramount to success and that to provide the best possible care there needs to be a strong rapport.`,
    image: imgShareenCampbell,
    specialties: ["Medication Management", "Anxiety & Depression", "ADHD", "Bipolar & PTSD"],
    photoPosition: "center 15%",
  },
  {
    name: "Tiffany Martin",
    title: "Licensed Clinical Social Worker",
    credentials: "LCSW-C",
    bio: `Tiffany (she/her) is a Licensed Clinical Social Worker (LCSW-C) in the state of Maryland. She earned her Master's degree from the University of Maryland School of Social Work and a bachelor's degree in English and Religious Studies from McDaniel College.

Tiffany has worked in a variety of settings including schools, non-profits, and other clinical practices. She has experience working with anxiety, depression, mood disorders, trauma, as well as autism and intellectual disabilities. She is eager to work with clients of all ages and from diverse backgrounds.

She uses an eclectic approach to holistic treatment combining Cognitive Behavioral Therapy, Motivational Interviewing, and solution focused techniques. Tiffany engages all clients with a trauma informed care lens, believing that therapy is a gateway to healing and becoming the best version of yourself. She sees therapy as a partnership between the client and herself working together to achieve the client's goals. Tiffany understands that starting therapy can be difficult, but she is committed to walking with clients on their journey of self-love, self-acceptance, and peace.`,
    image: imgTiffanyMartin,
    specialties: ["Trauma-Informed Care", "CBT", "Motivational Interviewing", "Autism & Disabilities"],
    photoPosition: "center 18%",
  },
  {
    name: "Wren Douglass",
    title: "Licensed Graduate Professional Art Therapist",
    credentials: "LGPAT",
    bio: `Wren (she/her/they/them) is a Licensed Graduate Professional Art Therapist (LGPAT) in the state of Maryland. As an art therapist, Wren uses an integrative approach to therapy incorporating art-based interventions and techniques informed by multiple psychotherapy approaches such as CBT, solution-focused therapy, and narrative therapy. Wren believes that everyone is an artist, and values artmaking for its ability to build and maintain healthy relationships with the self, with others, and with the broader community. Clients can expect to engage with various art materials and techniques in session to explore thoughts, feelings, goals, and concerns beyond verbal expression alone.

Wren has experience working with individuals diagnosed with depression, anxiety, ADHD and Autism spectrum disorders, OCD and trauma-related disorders, as well experiences of sensory perception differences, and coping with grief and disability. They identify as non-binary and queer and enjoys working with the LGBTQIA+ community. Wren works with individuals across the lifespan, but has a majority of their experience working with children and adolescents.

In their free time, Wren loves to spend time with her cat and 2 dogs. Wren enjoys trying new food, spending time outside, and working on their own art projects.`,
    image: imgWrenDouglass,
    specialties: ["Art Therapy", "LGBTQIA+", "Children & Adolescents", "Autism & ADHD"],
    photoPosition: "center 20%",
  },
];

/* ─── Bio Lightbox Modal ─── */
function BioModal({
  members,
  activeIndex,
  onClose,
  onNavigate,
}: {
  members: TeamMember[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const member = members[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === members.length - 1;

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && !isLast) onNavigate(activeIndex + 1);
      if (e.key === "ArrowLeft" && !isFirst) onNavigate(activeIndex - 1);
    },
    [activeIndex, isFirst, isLast, onClose, onNavigate],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Navigation arrows — outside card on desktop */}
        <button
          onClick={(e) => { e.stopPropagation(); if (!isFirst) onNavigate(activeIndex - 1); }}
          disabled={isFirst}
          className={`hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center transition-all ${
            isFirst ? "bg-white/5 text-white/15 cursor-default" : "bg-white/10 text-white hover:bg-white/20"
          }`}
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); if (!isLast) onNavigate(activeIndex + 1); }}
          disabled={isLast}
          className={`hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center transition-all ${
            isLast ? "bg-white/5 text-white/15 cursor-default" : "bg-white/10 text-white hover:bg-white/20"
          }`}
          aria-label="Next team member"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Card */}
        <motion.div
          key={member.name}
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-[#2F2F2F]" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-5 z-20 text-[11px] text-[#6B6B6B] font-[Inter,sans-serif]">
            {activeIndex + 1} / {members.length}
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto overscroll-contain">
            <div className="flex flex-col md:flex-row md:items-start">
              {/* Photo column — fixed aspect ratio for consistent proportions */}
              <div className="flex-shrink-0 bg-gradient-to-br from-[#5B2C6F]/8 to-[#8B1A4A]/5 md:w-[240px] lg:w-[280px] md:sticky md:top-0">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover"
                    style={{ objectPosition: member.photoPosition || "center 20%" }}
                  />
                ) : (
                 <div className="w-full aspect-[3/4] flex items-center justify-center">
                    <span className="text-7xl text-[#5B2C6F]/15" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>

              {/* Content column */}
              <div className="flex-1 p-7 md:p-9 pt-10 md:pt-9">
                <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.15em] text-[10px] uppercase mb-2">{member.credentials}</p>
                <h2 className="text-2xl text-[#2F2F2F] mb-1">{member.name}</h2>
                <p className="text-[#8B1A4A] font-[Inter,sans-serif] text-xs mb-5">{member.title}</p>

                {/* Specialties */}
                {member.specialties && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 bg-[#5B2C6F]/6 text-[#5B2C6F] text-[10px] rounded-full font-[Inter,sans-serif]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {/* Full bio */}
                <p className="text-[13px] text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.85] whitespace-pre-line">
                  {member.bio}
                </p>

                {/* Mobile nav arrows */}
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#5B2C6F]/6 md:hidden">
                  <button
                    onClick={() => { if (!isFirst) onNavigate(activeIndex - 1); }}
                    disabled={isFirst}
                    className={`flex items-center gap-1.5 text-xs font-[Inter,sans-serif] transition-colors ${
                      isFirst ? "text-[#6B6B6B]/30 cursor-default" : "text-[#5B2C6F] hover:text-[#8B1A4A]"
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous
                  </button>
                  <button
                    onClick={() => { if (!isLast) onNavigate(activeIndex + 1); }}
                    disabled={isLast}
                    className={`flex items-center gap-1.5 text-xs font-[Inter,sans-serif] transition-colors ${
                      isLast ? "text-[#6B6B6B]/30 cursor-default" : "text-[#5B2C6F] hover:text-[#8B1A4A]"
                    }`}
                  >
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Desktop prev/next names */}
                <div className="hidden md:flex items-center justify-between mt-8 pt-5 border-t border-[#5B2C6F]/6">
                  <button
                    onClick={() => { if (!isFirst) onNavigate(activeIndex - 1); }}
                    disabled={isFirst}
                    className={`flex items-center gap-2 text-xs font-[Inter,sans-serif] transition-colors ${
                      isFirst ? "text-[#6B6B6B]/30 cursor-default" : "text-[#5B2C6F] hover:text-[#8B1A4A]"
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {!isFirst ? members[activeIndex - 1].name : ""}
                  </button>
                  <button
                    onClick={() => { if (!isLast) onNavigate(activeIndex + 1); }}
                    disabled={isLast}
                    className={`flex items-center gap-2 text-xs font-[Inter,sans-serif] transition-colors ${
                      isLast ? "text-[#6B6B6B]/30 cursor-default" : "text-[#5B2C6F] hover:text-[#8B1A4A]"
                    }`}
                  >
                    {!isLast ? members[activeIndex + 1].name : ""}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Team Member Card ─── */
function TeamMemberCard({
  member,
  index,
  onOpenBio,
}: {
  member: TeamMember;
  index: number;
  onOpenBio: () => void;
}) {
  const shortBio = member.bio.split("\n\n")[0];
  // Truncate to ~120 chars for card preview
  const preview = shortBio.length > 140 ? shortBio.slice(0, 140).trim() + "..." : shortBio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden border border-[#5B2C6F]/4 hover:shadow-lg transition-all duration-300 group flex flex-col cursor-pointer"
      onClick={onOpenBio}
    >
      {/* Photo */}
      <div className="aspect-[4/4.2] overflow-hidden bg-gradient-to-br from-[#5B2C6F]/8 to-[#8B1A4A]/5 relative">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            style={{ objectPosition: member.photoPosition || "center 20%" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl text-[#5B2C6F]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
              {member.name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#5B2C6F]/0 group-hover:bg-[#5B2C6F]/25 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-xs font-[Inter,sans-serif] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            View Full Bio
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#2F2F2F] mb-0.5" style={{ fontSize: '1rem' }}>{member.name}</h3>
        <p className="text-[#8B1A4A] text-[11px] font-[Inter,sans-serif] tracking-wide mb-0.5">{member.credentials}</p>
        <p className="text-[#5B2C6F]/60 text-[11px] font-[Inter,sans-serif] mb-3">{member.title}</p>
        <p className="text-[11px] text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed flex-1">{preview}</p>
        <p className="mt-3 text-[11px] text-[#5B2C6F] font-[Inter,sans-serif] group-hover:text-[#8B1A4A] transition-colors flex items-center gap-1">
          Read Full Bio <ArrowRight className="w-3 h-3" />
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Page ─── */
export function Team() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const featured = teamMembers[0];
  const rest = teamMembers.slice(1);

  return (
    <div>
      <SEO
        title="Our Team — Licensed Therapists & Counselors | Divine Counseling LLC"
        description="Meet the Divine Counseling team: 14+ licensed therapists, counselors, and psychiatric nurse practitioners led by Cara Baltimore, LCSW. Specialists in EMDR, CBT, DBT, art therapy, and medication management in Baltimore & Owings Mills, MD."
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Our Team", url: "/team" },
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
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-4 uppercase">Our Team</p>
            <h1 className="text-4xl sm:text-5xl text-[#2F2F2F] mb-6 leading-tight">
              Meet the Divine Counseling Team
            </h1>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] text-lg leading-relaxed">
              Our team of 30+ licensed therapists, counselors, and psychiatric professionals are dedicated to helping you reach your highest self through compassionate, holistic care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured: Cara Baltimore */}
      <section className="pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F8F5FA] to-white rounded-3xl p-8 md:p-12 border border-[#5B2C6F]/6 cursor-pointer hover:shadow-lg transition-all duration-300 group"
            onClick={() => setModalIndex(0)}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
               <div className="w-full max-w-[320px] aspect-[3/4] md:w-72 md:h-72 md:aspect-auto rounded-2xl overflow-hidden flex-shrink-0 shadow-lg self-center md:self-start">
                <img
                  src={featured.image!}
                  alt={featured.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: featured.photoPosition || "center 15%" }}
                />
              </div>
              <div className="flex-1">
                <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.15em] text-xs uppercase mb-2">Founder & Lead Clinician</p>
                <h2 className="text-3xl text-[#2F2F2F] mb-1">{featured.name}</h2>
                <p className="text-[#8B1A4A] font-[Inter,sans-serif] text-sm mb-1">{featured.title}</p>
                <p className="text-[#5B2C6F] font-[Inter,sans-serif] text-xs mb-4">{featured.credentials}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {featured.specialties?.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 bg-[#5B2C6F]/8 text-[#5B2C6F] text-[11px] rounded-full font-[Inter,sans-serif]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-[1.8] text-sm">
                  {featured.bio.split("\n\n")[0]}
                </p>
                <p className="mt-4 text-xs text-[#5B2C6F] font-[Inter,sans-serif] group-hover:text-[#8B1A4A] transition-colors flex items-center gap-1.5">
                  Read Full Bio <ArrowRight className="w-3.5 h-3.5" />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-20 bg-[#FBF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-[#2F2F2F]">Our Clinicians & Specialists</h2>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] mt-3 max-w-xl mx-auto text-sm">
              Click any team member to view their full bio, then use the arrows to browse through the team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((member, i) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={i}
                onOpenBio={() => setModalIndex(i + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-gradient-to-br from-[#5B2C6F] to-[#4A2260]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Begin Your Healing Journey
            </h2>
            <p className="text-white/50 font-[Inter,sans-serif] mb-8 leading-relaxed max-w-lg mx-auto">
              Our compassionate team is ready to help you overcome challenges and reach your highest self. Take the first step today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#8B1A4A] text-white rounded-md text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all duration-300 hover:shadow-lg"
              >
                Request Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/15 text-white/70 rounded-md text-sm font-[Inter,sans-serif] hover:bg-white/5 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Modal */}
      {modalIndex !== null && (
        <BioModal
          members={teamMembers}
          activeIndex={modalIndex}
          onClose={() => setModalIndex(null)}
          onNavigate={(i) => setModalIndex(i)}
        />
      )}
    </div>
  );
}
