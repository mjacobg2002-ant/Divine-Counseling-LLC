import { motion } from "motion/react";
import { Send, Phone, AlertCircle, CheckCircle, ArrowRight, Clock, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { SEO, breadcrumbSchema } from "../components/SEO";

const insuranceOptions = [
  "Medicaid",
  "Blue Cross Blue Shield",
  "Optum",
  "Cigna",
  "Aetna",
  "Certified TriCare",
  "Medicare",
  "Johns Hopkins",
  "Humana",
  "EAP",
  "None/Out of Pocket/Self Pay",
];

const serviceLocations = ["Maryland", "Virginia", "District of Columbia (D.C.)"];

const howFoundOptions = [
  "Google search",
  "Social media",
  "TV",
  "Community event",
  "Friend/Family recommendation",
  "Other",
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timeSlots = ["8am-10am", "10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm", "6pm-8pm"];

interface FormData {
  clientName: string;
  clientDOB: string;
  date: string;
  address: string;
  clientSex: string;
  pronouns: string;
  parentGuardian: string;
  relationshipToClient: string;
  phone: string;
  email: string;
  serviceLocation: string;
  insurance: string;
  presentingProblem: string;
  treatmentGoals: string;
  difficultyLevel: string;
  medications: string;
  availability: Record<string, boolean>;
  treatmentPreferences: string;
  preferredLanguage: string;
  howFoundUs: string;
  howFoundUsOther: string;
}

const initialFormData: FormData = {
  clientName: "",
  clientDOB: "",
  date: new Date().toISOString().split("T")[0],
  address: "",
  clientSex: "",
  pronouns: "",
  parentGuardian: "",
  relationshipToClient: "",
  phone: "",
  email: "",
  serviceLocation: "",
  insurance: "",
  presentingProblem: "",
  treatmentGoals: "",
  difficultyLevel: "",
  medications: "",
  availability: {},
  treatmentPreferences: "",
  preferredLanguage: "",
  howFoundUs: "",
  howFoundUsOther: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-[#5B2C6F]/12 bg-[#F8F5FA] font-[Inter,sans-serif] text-sm text-[#2F2F2F] focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]/30 transition-all";
const labelClass = "block text-sm text-[#2F2F2F] mb-2 font-[Inter,sans-serif]";
const requiredStar = <span className="text-[#8B1A4A] ml-0.5">*</span>;

export function Referral() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleAvailability = (day: string, time: string) => {
    const key = `${day}-${time}`;
    setFormData((prev) => ({
      ...prev,
      availability: { ...prev.availability, [key]: !prev.availability[key] },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    { label: "Personal Info", range: [0, 1] },
    { label: "Contact & Location", range: [1, 2] },
    { label: "Clinical Details", range: [2, 3] },
    { label: "Availability", range: [3, 4] },
  ];

  return (
    <div>
      <SEO
        title="Submit a Referral — Start Your Healing Journey | Divine Counseling LLC"
        description="Submit a referral to Divine Counseling LLC. New patients can self-refer or be referred by a provider. HIPAA compliant, 48-hour response time, 10+ insurance plans accepted. Serving Baltimore, Owings Mills, MD, VA, and DC."
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Referral", url: "/referral" },
        ])}
      />

      {/* Hero — compact, conversion-focused */}
      <section className="py-14 lg:py-18 bg-gradient-to-b from-[#5B2C6F]/6 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-[#C9A96A] font-[Inter,sans-serif] tracking-[0.2em] text-xs mb-3 uppercase">Referral Form</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#2F2F2F] mb-4 leading-tight">
              Start Your Healing Journey
            </h1>
            <p className="text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed mb-6">
              Complete this form to begin the enrollment process. Our team will contact you within <strong className="text-[#2F2F2F]">48 hours</strong>.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#6B6B6B] font-[Inter,sans-serif]">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#3D7B6A]" /> HIPAA Compliant</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#3D7B6A]" /> 48-Hour Response</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#3D7B6A]" /> 10+ Insurance Plans</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer + Form */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact disclaimer */}
          <div className="bg-[#5B2C6F]/4 border border-[#5B2C6F]/8 rounded-xl p-4 mb-8 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-[#5B2C6F] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-[#6B6B6B] font-[Inter,sans-serif] leading-relaxed">
              <strong className="text-[#2F2F2F]">Please note:</strong> This is not an intake form. Further information will be collected upon enrollment. After submission, a Program Administrator will contact you within 48 hours. Typical enrollment: <strong className="text-[#2F2F2F]">7 business days</strong>. Questions? <a href="tel:4439552662" className="text-[#5B2C6F] hover:underline inline-flex items-center gap-1"><Phone className="w-3 h-3" />443-955-2662</a>
            </div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#F8F5FA] p-10 sm:p-14 rounded-2xl text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#3D7B6A]/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-10 h-10 text-[#3D7B6A]" />
              </div>
              <h2 className="text-2xl sm:text-3xl text-[#2F2F2F] mb-3">Referral Submitted!</h2>
              <p className="text-[#6B6B6B] font-[Inter,sans-serif] mb-2 max-w-md mx-auto">
                A Program Administrator will contact you within <strong>48 hours</strong> with a link to complete your patient portal.
              </p>
              <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] mb-8 max-w-md mx-auto">
                Expected enrollment time after all forms and insurance verification: <strong>7 business days</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => { setSubmitted(false); setFormData(initialFormData); setCurrentSection(0); }}
                  className="px-6 py-3 bg-[#5B2C6F] text-white rounded-lg text-sm font-[Inter,sans-serif] hover:bg-[#4E2660] transition-all"
                >
                  Submit Another Referral
                </button>
                <Link
                  to="/"
                  className="px-6 py-3 border border-[#5B2C6F]/15 text-[#5B2C6F] rounded-lg text-sm font-[Inter,sans-serif] hover:bg-[#5B2C6F]/5 transition-all"
                >
                  Return Home
                </Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-[#5B2C6F]/6 overflow-hidden">
              {/* Section tabs */}
              <div className="flex border-b border-[#5B2C6F]/8 overflow-x-auto scrollbar-hide">
                {sections.map((sec, i) => (
                  <button
                    key={sec.label}
                    type="button"
                    onClick={() => setCurrentSection(i)}
                    className={`flex-1 min-w-[120px] py-3.5 px-2 text-[11px] sm:text-xs font-[Inter,sans-serif] tracking-wide transition-all border-b-2 ${
                      currentSection === i
                        ? "border-[#5B2C6F] text-[#5B2C6F] bg-[#5B2C6F]/3"
                        : i < currentSection
                        ? "border-[#3D7B6A]/40 text-[#3D7B6A] bg-[#3D7B6A]/3"
                        : "border-transparent text-[#6B6B6B] hover:text-[#2F2F2F] hover:bg-[#F8F5FA]"
                    }`}
                  >
                    <span className={`block text-[10px] mb-0.5 ${i < currentSection ? "text-[#3D7B6A]" : "text-[#C9A96A]"}`}>
                      {i < currentSection ? "\u2713" : String(i + 1).padStart(2, "0")}
                    </span>
                    {sec.label}
                  </button>
                ))}
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                {/* Section 1: Personal Information */}
                {currentSection === 0 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                    <div>
                      <h3 className="text-xl text-[#2F2F2F] mb-0.5">Personal Information</h3>
                      <p className="text-xs text-[#6B6B6B] font-[Inter,sans-serif]">Fields marked with * are required.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Client's Name {requiredStar}</label>
                        <input type="text" required value={formData.clientName} onChange={(e) => updateField("clientName", e.target.value)} className={inputClass} placeholder="Client's full name" />
                      </div>
                      <div>
                        <label className={labelClass}>Client Date of Birth {requiredStar}</label>
                        <input type="date" required value={formData.clientDOB} onChange={(e) => updateField("clientDOB", e.target.value)} className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Address {requiredStar}</label>
                      <input type="text" required value={formData.address} onChange={(e) => updateField("address", e.target.value)} className={inputClass} placeholder="Full street address, city, state, ZIP" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Client's Sex {requiredStar}</label>
                        <div className="flex gap-4 mt-1">
                          {["Male", "Female"].map((opt) => (
                            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.clientSex === opt ? "border-[#5B2C6F] bg-[#5B2C6F]" : "border-[#5B2C6F]/25 group-hover:border-[#5B2C6F]/50"}`}>
                                {formData.clientSex === opt && <div className="w-2 h-2 rounded-full bg-white" />}
                              </div>
                              <span className="text-sm text-[#2F2F2F] font-[Inter,sans-serif]">{opt}</span>
                              <input type="radio" name="clientSex" value={opt} required checked={formData.clientSex === opt} onChange={(e) => updateField("clientSex", e.target.value)} className="sr-only" />
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Preferred Pronouns {requiredStar}</label>
                        <input type="text" required value={formData.pronouns} onChange={(e) => updateField("pronouns", e.target.value)} className={inputClass} placeholder="e.g., she/her, he/him, they/them" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Parent/Guardian Name {requiredStar}</label>
                        <input type="text" required value={formData.parentGuardian} onChange={(e) => updateField("parentGuardian", e.target.value)} className={inputClass} placeholder="If applicable, enter N/A" />
                      </div>
                      <div>
                        <label className={labelClass}>Relationship to Client {requiredStar}</label>
                        <input type="text" required value={formData.relationshipToClient} onChange={(e) => updateField("relationshipToClient", e.target.value)} className={inputClass} placeholder="e.g., Self, Parent, Guardian" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Section 2: Contact & Location */}
                {currentSection === 1 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                    <div>
                      <h3 className="text-xl text-[#2F2F2F] mb-0.5">Contact & Location</h3>
                      <p className="text-xs text-[#6B6B6B] font-[Inter,sans-serif]">How can we reach you?</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Phone Number {requiredStar}</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClass} placeholder="(000) 000-0000" />
                      </div>
                      <div>
                        <label className={labelClass}>Email {requiredStar}</label>
                        <input type="email" required value={formData.email} onChange={(e) => updateField("email", e.target.value)} className={inputClass} placeholder="your@email.com" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Where are you seeking services? {requiredStar}</label>
                      <p className="text-xs text-[#6B6B6B] font-[Inter,sans-serif] mb-3">We provide services in Maryland, Virginia, and DC.</p>
                      <div className="flex flex-wrap gap-2">
                        {serviceLocations.map((loc) => (
                          <label key={loc} className="cursor-pointer">
                            <input type="radio" name="serviceLocation" value={loc} required checked={formData.serviceLocation === loc} onChange={(e) => updateField("serviceLocation", e.target.value)} className="sr-only" />
                            <div className={`px-4 py-2.5 rounded-lg border-2 text-sm font-[Inter,sans-serif] transition-all ${formData.serviceLocation === loc ? "border-[#5B2C6F] bg-[#5B2C6F]/5 text-[#5B2C6F]" : "border-[#5B2C6F]/10 text-[#6B6B6B] hover:border-[#5B2C6F]/30"}`}>
                              {loc}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Insurance Type {requiredStar}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {insuranceOptions.map((ins) => (
                          <label key={ins} className="cursor-pointer">
                            <input type="radio" name="insurance" value={ins} required checked={formData.insurance === ins} onChange={(e) => updateField("insurance", e.target.value)} className="sr-only" />
                            <div className={`px-3 py-2.5 rounded-lg border text-xs font-[Inter,sans-serif] text-center transition-all ${formData.insurance === ins ? "border-[#5B2C6F] bg-[#5B2C6F]/5 text-[#5B2C6F]" : "border-[#5B2C6F]/10 text-[#6B6B6B] hover:border-[#5B2C6F]/25"}`}>
                              {ins}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Section 3: Clinical Details */}
                {currentSection === 2 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                    <div>
                      <h3 className="text-xl text-[#2F2F2F] mb-0.5">Clinical Details</h3>
                      <p className="text-xs text-[#6B6B6B] font-[Inter,sans-serif]">Help us match you with the right clinician.</p>
                    </div>

                    <div>
                      <label className={labelClass}>Why are you seeking services? (Presenting Problem) {requiredStar}</label>
                      <textarea required rows={3} value={formData.presentingProblem} onChange={(e) => updateField("presentingProblem", e.target.value)} className={`${inputClass} resize-none`} placeholder="Describe what brings you to seek counseling..." />
                    </div>

                    <div>
                      <label className={labelClass}>What do you hope to gain from therapy? (Treatment Goals) {requiredStar}</label>
                      <textarea required rows={3} value={formData.treatmentGoals} onChange={(e) => updateField("treatmentGoals", e.target.value)} className={`${inputClass} resize-none`} placeholder="Describe what you hope to achieve..." />
                    </div>

                    <div>
                      <label className={labelClass}>How difficult are your concerns to deal with? {requiredStar}</label>
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-[#3D7B6A] font-[Inter,sans-serif]">Not difficult</span>
                          <span className="text-[10px] text-[#8B1A4A] font-[Inter,sans-serif]">Extremely difficult</span>
                        </div>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <label key={level} className="flex-1 cursor-pointer">
                              <input type="radio" name="difficultyLevel" value={String(level)} required checked={formData.difficultyLevel === String(level)} onChange={(e) => updateField("difficultyLevel", e.target.value)} className="sr-only" />
                              <div className={`py-3 rounded-lg text-center text-sm font-[Inter,sans-serif] transition-all border-2 ${
                                formData.difficultyLevel === String(level)
                                  ? level <= 2 ? "border-[#3D7B6A] bg-[#3D7B6A]/10 text-[#3D7B6A]" : level === 3 ? "border-[#C9A96A] bg-[#C9A96A]/10 text-[#C9A96A]" : "border-[#8B1A4A] bg-[#8B1A4A]/10 text-[#8B1A4A]"
                                  : "border-[#5B2C6F]/10 text-[#6B6B6B] hover:border-[#5B2C6F]/25"
                              }`}>
                                {level}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Current prescribed medications {requiredStar}</label>
                      <textarea required rows={2} value={formData.medications} onChange={(e) => updateField("medications", e.target.value)} className={`${inputClass} resize-none`} placeholder="List medications, or type 'None'" />
                    </div>
                  </motion.div>
                )}

                {/* Section 4: Availability & Preferences */}
                {currentSection === 3 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                    <div>
                      <h3 className="text-xl text-[#2F2F2F] mb-0.5">Availability & Preferences</h3>
                      <p className="text-xs text-[#6B6B6B] font-[Inter,sans-serif]">Select all time slots that work for you.</p>
                    </div>

                    {/* Availability Grid */}
                    <div>
                      <label className={labelClass}>Preferred Availability</label>
                      <div className="overflow-x-auto -mx-2 px-2 pb-2">
                        <div className="min-w-[580px]">
                          <div className="grid grid-cols-7 gap-1 mb-1">
                            <div className="py-2 px-1 text-[10px] text-[#6B6B6B] font-[Inter,sans-serif]">Time</div>
                            {days.map((day) => (
                              <div key={day} className="py-2 text-[10px] text-[#2F2F2F] font-[Inter,sans-serif] text-center">{day.slice(0, 3)}</div>
                            ))}
                          </div>
                          {timeSlots.map((time) => (
                            <div key={time} className="grid grid-cols-7 gap-1 mb-1">
                              <div className="py-1.5 px-1 text-[10px] text-[#6B6B6B] font-[Inter,sans-serif] flex items-center">{time}</div>
                              {days.map((day) => {
                                const key = `${day}-${time}`;
                                const isChecked = formData.availability[key] || false;
                                return (
                                  <button key={key} type="button" onClick={() => toggleAvailability(day, time)}
                                    className={`py-1.5 rounded-md text-xs font-[Inter,sans-serif] transition-all border ${isChecked ? "bg-[#5B2C6F] text-white border-[#5B2C6F]" : "bg-[#F8F5FA] text-[#6B6B6B]/40 border-transparent hover:border-[#5B2C6F]/20"}`}>
                                    {isChecked ? "\u2713" : "\u00B7"}
                                  </button>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Treatment preferences {requiredStar}</label>
                      <textarea required rows={2} value={formData.treatmentPreferences} onChange={(e) => updateField("treatmentPreferences", e.target.value)} className={`${inputClass} resize-none`} placeholder="e.g., therapist gender, telehealth vs. in-person..." />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Preferred Language {requiredStar}</label>
                        <input type="text" required value={formData.preferredLanguage} onChange={(e) => updateField("preferredLanguage", e.target.value)} className={inputClass} placeholder="e.g., English, Spanish" />
                      </div>
                      <div>
                        <label className={labelClass}>How did you find us? {requiredStar}</label>
                        <select required value={formData.howFoundUs} onChange={(e) => updateField("howFoundUs", e.target.value)}
                          className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a//www.w3.org/2000/svg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%235B2C6F%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:16px]`}>
                          <option value="">Select one...</option>
                          {howFoundOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                        </select>
                      </div>
                    </div>

                    {formData.howFoundUs === "Other" && (
                      <div>
                        <label className={labelClass}>Please specify</label>
                        <input type="text" value={formData.howFoundUsOther} onChange={(e) => updateField("howFoundUsOther", e.target.value)} className={inputClass} placeholder="How did you hear about Divine Counseling?" />
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#5B2C6F]/8">
                  {currentSection > 0 ? (
                    <button type="button" onClick={() => setCurrentSection((s) => s - 1)} className="px-5 py-2.5 text-sm text-[#5B2C6F] font-[Inter,sans-serif] hover:bg-[#5B2C6F]/5 rounded-lg transition-all">
                      Back
                    </button>
                  ) : <div />}

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#6B6B6B] font-[Inter,sans-serif] hidden sm:block">
                      Step {currentSection + 1} of {sections.length}
                    </span>
                    {currentSection < sections.length - 1 ? (
                      <button type="button" onClick={() => setCurrentSection((s) => s + 1)} className="px-6 py-2.5 bg-[#5B2C6F] text-white rounded-lg text-sm font-[Inter,sans-serif] hover:bg-[#4E2660] transition-all flex items-center gap-2">
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button type="submit" className="px-8 py-3 bg-[#8B1A4A] text-white rounded-lg text-sm font-[Inter,sans-serif] hover:bg-[#7A1641] transition-all hover:shadow-lg flex items-center gap-2">
                        <Send className="w-4 h-4" /> Submit Referral
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      {!submitted && (
        <section className="py-12 bg-[#FBF8F5]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="text-sm text-[#6B6B6B] font-[Inter,sans-serif] mb-3">
              Prefer to speak with someone directly?
            </p>
            <a href="tel:4439552662" className="inline-flex items-center gap-2 text-[#5B2C6F] font-[Inter,sans-serif] hover:text-[#8B1A4A] transition-colors">
              <Phone className="w-4 h-4" /> Call (443) 955-2662
            </a>
          </div>
        </section>
      )}
    </div>
  );
}