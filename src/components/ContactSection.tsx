import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  UserCheck,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface ContactSectionProps {
  initialMode?: string;
  initialService?: string;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  qualification: string;
  expertise: string;
  service: string;
  message: string;
};

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialMode = 'business',
  initialService = '',
}) => {
  const [formType, setFormType] = useState<string>(initialMode);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    qualification: '',
    expertise: '',
    service: initialService || '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialMode) setFormType(initialMode);
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        message: `I would like to enquire about: ${initialService}`,
        service: initialService,
      }));
    }
  }, [initialMode, initialService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Valid email required';
    if (!formData.phone.trim() || !/^[0-9+ \-]{8,15}$/.test(formData.phone.trim()))
      errs.phone = 'Valid phone number required';
    if (!formData.message.trim()) errs.message = 'Please include a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '', email: '', phone: '', company: '',
      qualification: '', expertise: '', service: '', message: '',
    });
    setErrors({});
  };

  const inputClass = (field: string) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:ring-2 transition-all bg-white ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200'
        : 'border-brand-border focus:border-brand-navy focus:ring-brand-navy/10'
    }`;

  const labelClass = 'block text-xs font-semibold text-brand-text mb-1.5 uppercase tracking-[0.08em]';

  return (
    <section
      id="contact"
      className="section-padding bg-brand-bgAlt scroll-mt-20"
    >
      <div className="section-container">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading">
            Let's start a conversation
          </h2>
          <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
            Whether you need professional services for your business or would like to
            join our professional network, we'd love to hear from you.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border border-brand-border rounded-xl p-1 inline-flex shadow-card">
            <button
              type="button"
              onClick={() => setFormType('business')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                formType === 'business'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Business Enquiry</span>
            </button>
            <button
              type="button"
              onClick={() => setFormType('professional')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                formType === 'professional'
                  ? 'bg-brand-gold text-white shadow-sm'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Join Our Network</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Form */}
          <div className="lg:col-span-7 card-base p-6 sm:p-8">

            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">Thank you!</h3>
                  <p className="text-sm text-brand-muted mt-2 max-w-sm mx-auto">
                    Your message has been received. We will get back to you within 24 business hours.
                  </p>
                </div>
                <div className="bg-brand-bgAlt rounded-lg px-4 py-3 text-xs text-brand-muted inline-block">
                  Response will be sent to <strong className="text-brand-text">{formData.email}</strong>
                </div>
                <button
                  onClick={resetForm}
                  className="btn-navy-ghost text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Form title */}
                <div className="pb-4 border-b border-brand-border">
                  <h3 className="text-base font-bold text-brand-navy">
                    {formType === 'business' ? 'Business Enquiry Form' : 'Professional Network Application'}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1">
                    {formType === 'business'
                      ? 'Tell us about your business and what services you need.'
                      : 'Tell us about your qualifications and what kind of work you are looking for.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94089 67987"
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Company or Qualification */}
                  {formType === 'business' ? (
                    <div>
                      <label className={labelClass}>Company / Firm Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        className={inputClass('company')}
                      />
                    </div>
                  ) : (
                    <div>
                      <label className={labelClass}>Qualification</label>
                      <input
                        type="text"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        placeholder="e.g. CA / CS / CMA / M.Com"
                        className={inputClass('qualification')}
                      />
                    </div>
                  )}
                </div>

                {/* Service required (business) or Area of expertise (professional) */}
                {formType === 'business' ? (
                  <div>
                    <label className={labelClass}>Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={inputClass('service')}
                    >
                      <option value="">Select a service...</option>
                      <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                      <option value="Taxation & GST">Taxation & GST</option>
                      <option value="Corporate Compliance">Corporate Compliance</option>
                      <option value="Auditing">Auditing</option>
                      <option value="Financial Advisory / Virtual CFO">Financial Advisory / Virtual CFO</option>
                      <option value="Legal & Regulatory">Legal & Regulatory</option>
                      <option value="Branding & Digital">Branding & Digital</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className={labelClass}>Area of Expertise</label>
                    <input
                      type="text"
                      value={formData.expertise}
                      onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                      placeholder="e.g. Taxation, GST, Accounting, Compliance"
                      className={inputClass('expertise')}
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className={labelClass}>Message *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      formType === 'business'
                        ? 'Briefly describe what you need help with...'
                        : 'Tell us about your background, what kind of work you are looking for, and your availability...'
                    }
                    className={inputClass('message')}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2 transition-all ${
                    formType === 'business'
                      ? 'bg-brand-navy hover:bg-brand-navy/90 text-white'
                      : 'bg-brand-gold hover:bg-vwGold-hover text-white'
                  } disabled:opacity-60`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>
                        {formType === 'business'
                          ? 'Submit Business Enquiry'
                          : 'Join Our Network'}
                      </span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-2 text-xs text-brand-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Your information is kept strictly confidential.</span>
                </div>

              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-5">

            {/* Phone */}
            <div className="card-base p-5 flex items-start space-x-4 hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-navy text-white flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted mb-1">Phone</div>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="text-base font-semibold text-brand-navy hover:text-brand-gold transition-colors"
                >
                  {BRAND_INFO.phone}
                </a>
                <p className="text-xs text-brand-muted mt-0.5">Monday – Saturday, 9:30 AM – 6:30 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="card-base p-5 flex items-start space-x-4 hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-gold text-white flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted mb-1">Email</div>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
                <p className="text-xs text-brand-muted mt-0.5">Response within 24 business hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="card-base p-5 flex items-start space-x-4 hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-bgAlt border border-brand-border text-brand-navy flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted mb-1">
                  Office · Surat | Pune
                </div>
                <div className="text-sm text-brand-text leading-relaxed">
                  {BRAND_INFO.address}
                </div>
                <p className="text-xs text-brand-muted mt-0.5">Pan-India services available</p>
              </div>
            </div>

            {/* Operating hours */}
            <div className="card-base p-5 flex items-center space-x-3">
              <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <div className="text-xs text-brand-muted">
                <strong className="text-brand-text">Operating Hours:</strong>{' '}
                Monday to Saturday, 9:30 AM – 6:30 PM IST
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
