import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building, 
  UserCheck, 
  Clock, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface ContactSectionProps {
  initialMode?: string;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialMode = 'business', 
  initialService = '' 
}) => {
  const [formType, setFormType] = useState<string>(initialMode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    qualification: '',
    interest: 'Business Services',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialMode) {
      setFormType(initialMode);
      if (initialMode === 'professional') {
        setFormData(prev => ({ ...prev, interest: 'Professional Opportunities' }));
      } else {
        setFormData(prev => ({ 
          ...prev, 
          interest: 'Business Services',
          message: initialService ? `Inquiring regarding: ${initialService}` : prev.message 
        }));
      }
    }
  }, [initialMode, initialService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) errs.message = 'Please provide details for your inquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      qualification: '',
      interest: formType === 'professional' ? 'Professional Opportunities' : 'Business Services',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden border-t border-navy-850 scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-vwTeal/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-vwYellow/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-vwTeal/30 text-xs font-montserrat font-bold uppercase tracking-[0.2em] text-vwTeal">
            <Sparkles className="w-3.5 h-3.5 text-vwYellow" />
            <span>START THE CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold uppercase tracking-tight text-white leading-tight">
            Let’s Build Something <br />
            <span className="text-gradient-gold">Meaningful Together.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Whether you are a business looking for reliable professional services or a qualified woman professional seeking flexible opportunities, Visionary Women welcomes you.
          </p>
        </div>

        {/* Dual Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-navy-900/90 p-1.5 rounded-full border border-navy-800 shadow-xl inline-flex space-x-2">
            <button
              type="button"
              onClick={() => {
                setFormType('business');
                setFormData(prev => ({ ...prev, interest: 'Business Services' }));
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider transition-all flex items-center space-x-2 cursor-pointer ${
                formType === 'business'
                  ? 'bg-vwYellow text-navy-950 shadow-glow-yellow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Discuss Business Requirements</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setFormType('professional');
                setFormData(prev => ({ ...prev, interest: 'Professional Opportunities' }));
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider transition-all flex items-center space-x-2 cursor-pointer ${
                formType === 'professional'
                  ? 'bg-vwTeal text-navy-950 shadow-glow-teal'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Join Our Network</span>
            </button>
          </div>
        </div>

        {/* Split Grid: Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-navy-900/80 border border-navy-800 rounded-3xl p-7 sm:p-10 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-vwTeal/20 text-vwTeal flex items-center justify-center mx-auto border border-vwTeal/40 shadow-glow-teal animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-headline font-bold uppercase text-white">
                    Thank You for Connecting!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry has been received by CA Crispee Morakhiya and the Visionary Women leadership desk. We will contact you within 24 business hours.
                  </p>
                </div>
                <div className="p-4 bg-navy-950/80 rounded-xl border border-navy-800 text-xs text-vwTeal max-w-sm mx-auto">
                  Priority response dispatched to: <strong>{formData.email}</strong>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-full bg-navy-800 hover:bg-navy-700 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Full Name <span className="text-vwOrange">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full bg-navy-950/90 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-navy-800 focus:border-vwTeal'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Email Address <span className="text-vwOrange">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className={`w-full bg-navy-950/90 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-navy-800 focus:border-vwTeal'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Phone Number <span className="text-vwOrange">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 94089 67987"
                      className={`w-full bg-navy-950/90 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-navy-800 focus:border-vwTeal'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
                  </div>

                  {/* Company / Qualification */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      {formType === 'professional' ? 'Professional Qualification' : 'Company / Firm Name'}
                    </label>
                    <input
                      type="text"
                      value={formType === 'professional' ? formData.qualification : formData.company}
                      onChange={(e) => 
                        formType === 'professional' 
                          ? setFormData({ ...formData, qualification: e.target.value })
                          : setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder={formType === 'professional' ? 'e.g. CA / CS / CMA / M.Com' : 'e.g. Acme Enterprises'}
                      className="w-full bg-navy-950/90 border border-navy-800 focus:border-vwTeal rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    I Am Interested In <span className="text-vwOrange">*</span>
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-navy-950/90 border border-navy-800 focus:border-vwTeal rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Business Services">Business Services (Accounting, Tax, Compliance)</option>
                    <option value="Professional Opportunities">Professional Opportunities (Joining the Network)</option>
                    <option value="Virtual CFO / Advisory">Financial & Virtual CFO Advisory</option>
                    <option value="Partnerships">Institutional / CA Firm Partnerships</option>
                    <option value="Other">Other Specific Inquiries</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Message / Project Details <span className="text-vwOrange">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      formType === 'professional'
                        ? 'Tell us about your qualification, experience, and the kind of flexible opportunities you are seeking...'
                        : 'Briefly describe your business outsourcing requirements, timelines, or scope of compliance...'
                    }
                    className={`w-full bg-navy-950/90 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-navy-800 focus:border-vwTeal'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-vwYellow text-navy-950 font-montserrat font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-vwYellow-hover hover:shadow-glow-yellow transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>{formType === 'professional' ? 'Submit Application to Network' : 'Discuss Your Requirements'}</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-vwTeal" />
                  <span>Confidentiality guaranteed. Protected under strict institutional NDA.</span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Authentic Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card 1: Phone */}
            <div className="bg-glass-card p-6 sm:p-7 rounded-3xl border border-navy-800 hover:border-vwTeal/40 transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-vwTeal/15 border border-vwTeal/30 text-vwTeal flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-vwTeal">
                  Direct Telephone
                </span>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="text-lg font-montserrat font-bold text-white hover:text-vwYellow transition-colors block"
                >
                  {BRAND_INFO.phone}
                </a>
                <p className="text-xs text-slate-400 font-sans">
                  Direct Line for Inquiries & Corporate Consultations
                </p>
              </div>
            </div>

            {/* Contact Card 2: Email */}
            <div className="bg-glass-card p-6 sm:p-7 rounded-3xl border border-navy-800 hover:border-vwTeal/40 transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-vwTeal/15 border border-vwTeal/30 text-vwTeal flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-vwTeal">
                  Official Email
                </span>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-base sm:text-lg font-montserrat font-bold text-white hover:text-vwYellow transition-colors block break-all"
                >
                  {BRAND_INFO.email}
                </a>
                <p className="text-xs text-slate-400 font-sans">
                  Quick turnaround within 24 business hours
                </p>
              </div>
            </div>

            {/* Contact Card 3: Address & Locations */}
            <div className="bg-glass-card p-6 sm:p-7 rounded-3xl border border-navy-800 hover:border-vwTeal/40 transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-vwOrange/15 border border-vwOrange/30 text-vwOrange flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-vwOrange">
                    Primary Office
                  </span>
                  <span className="text-[10px] font-montserrat font-bold px-2 py-0.5 rounded-full bg-navy-950 border border-slate-700 text-slate-300">
                    Surat | Pune
                  </span>
                </div>
                <div className="text-sm font-montserrat font-semibold text-white leading-relaxed">
                  {BRAND_INFO.address}
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Surat Corporate Head Office • Serving Clients Pan-India & Globally
                </p>
              </div>
            </div>

            {/* Office Hours Pill */}
            <div className="bg-navy-900/60 p-5 rounded-2xl border border-navy-800/80 flex items-center space-x-3 text-xs text-slate-300">
              <Clock className="w-5 h-5 text-vwYellow shrink-0" />
              <div>
                <strong className="text-white block">Operating Hours:</strong>
                Monday to Saturday: 9:30 AM – 6:30 PM IST (Remote Teams On-Demand)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
