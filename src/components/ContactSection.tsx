import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Building2, UserCheck, Clock, ShieldCheck, Linkedin, Youtube, MessageCircle, Star } from 'lucide-react';
import { BRAND_INFO, SOCIAL_LINKS } from '../data/content';

interface ContactSectionProps {
  initialMode?: string;
  initialService?: string;
}

type FormData = {
  name: string; email: string; phone: string; company: string;
  qualification: string; expertise: string; service: string; message: string;
};

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMode = 'business', initialService = '' }) => {
  const [formType, setFormType] = useState<string>(initialMode);
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '',
    qualification: '', expertise: '', service: initialService || '', message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialMode) setFormType(initialMode);
    if (initialService) {
      setFormData((prev) => ({ ...prev, message: `I would like to enquire about: ${initialService}`, service: initialService }));
    }
  }, [initialMode, initialService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email required';
    if (!formData.phone.trim() || !/^[0-9+ \-]{8,15}$/.test(formData.phone.trim())) errs.phone = 'Valid phone number required';
    if (!formData.message.trim()) errs.message = 'Please include a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildInquirySummary = () => {
    const typeLabel = formType === 'business' ? 'Business Enquiry' : 'Professional Network Application';
    const lines = [
      `*${typeLabel} — Visionary Women™*`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      formType === 'business' && formData.company ? `Company: ${formData.company}` : '',
      formType === 'business' && formData.service ? `Service: ${formData.service}` : '',
      formType === 'professional' && formData.qualification ? `Qualification: ${formData.qualification}` : '',
      formType === 'professional' && formData.expertise ? `Expertise: ${formData.expertise}` : '',
      `Message: ${formData.message}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const whatsappDispatchUrl = `https://wa.me/919408967987?text=${encodeURIComponent(buildInquirySummary())}`;
  const mailtoDispatchUrl = `mailto:${BRAND_INFO.email}?subject=${encodeURIComponent(
    `${formType === 'business' ? 'Business Enquiry' : 'Network Application'} from ${formData.name}`
  )}&body=${encodeURIComponent(buildInquirySummary())}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    window.open(whatsappDispatchUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', company: '', qualification: '', expertise: '', service: '', message: '' });
    setErrors({});
  };

  const ic = (field: string) =>
    `w-full border rounded-lg px-3 sm:px-4 py-2.5 text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:ring-2 transition-all bg-white ${
      errors[field] ? 'border-red-400 focus:ring-red-200' : 'border-brand-border focus:border-brand-navy focus:ring-brand-navy/10'
    }`;
  const lc = 'block text-xs font-semibold text-brand-text mb-1.5 uppercase tracking-[0.08em]';

  return (
    <section id="contact" className="section-padding bg-brand-bgAlt scroll-mt-20">
      <div className="section-container">

        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12 space-y-3">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-heading">Let's start a conversation</h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Whether you need professional services for your business or would like to join our professional network, we'd love to hear from you.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8 sm:mb-10 px-2">
          <div className="bg-white border border-brand-border rounded-xl p-1 inline-flex shadow-card w-full max-w-sm sm:w-auto">
            <button
              type="button"
              onClick={() => setFormType('business')}
              className={`flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex-1 sm:flex-none ${
                formType === 'business' ? 'bg-brand-navy text-white shadow-sm' : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Business Enquiry</span>
            </button>
            <button
              type="button"
              onClick={() => setFormType('professional')}
              className={`flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex-1 sm:flex-none ${
                formType === 'professional' ? 'bg-brand-gold text-white shadow-sm' : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Join Our Network</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">

          {/* Form */}
          <div className="lg:col-span-7 card-base p-5 sm:p-7 lg:p-8">
            {isSubmitted ? (
              <div className="py-10 sm:py-12 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">Enquiry Ready to Send!</h3>
                  <p className="text-sm text-brand-muted mt-2 max-w-md mx-auto">
                    Your details have been prepared for our team. If WhatsApp didn’t open automatically, use either option below to send it directly.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappDispatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={mailtoDispatchUrl}
                    className="btn-navy-ghost inline-flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </a>
                </div>
                <button onClick={resetForm} className="btn-link text-xs">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="pb-3 sm:pb-4 border-b border-brand-border">
                  <h3 className="text-sm sm:text-base font-bold text-brand-navy">
                    {formType === 'business' ? 'Business Enquiry Form' : 'Professional Network Application'}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1">
                    {formType === 'business'
                      ? 'Tell us about your business and what services you need.'
                      : 'Tell us about your qualifications and what kind of work you are looking for.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className={lc}>Full Name *</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" className={ic('name')} />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={lc}>Email Address *</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className={ic('email')} />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className={lc}>Phone Number *</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 94089 67987" className={ic('phone')} />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                  {formType === 'business' ? (
                    <div>
                      <label className={lc}>Company / Firm Name</label>
                      <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Your company name" className={ic('company')} />
                    </div>
                  ) : (
                    <div>
                      <label className={lc}>Qualification</label>
                      <input type="text" value={formData.qualification} onChange={(e) => setFormData({ ...formData, qualification: e.target.value })} placeholder="e.g. CA / CS / CMA" className={ic('qualification')} />
                    </div>
                  )}
                </div>

                {formType === 'business' ? (
                  <div>
                    <label className={lc}>Service Required</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={ic('service')}>
                      <option value="">Select a service...</option>
                      {['Accounting & Bookkeeping', 'Taxation & GST', 'Corporate Compliance', 'Auditing', 'Financial Advisory / Virtual CFO', 'Legal & Regulatory', 'Branding & Digital', 'Multiple Services', 'Other'].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className={lc}>Area of Expertise</label>
                    <input type="text" value={formData.expertise} onChange={(e) => setFormData({ ...formData, expertise: e.target.value })} placeholder="e.g. Taxation, GST, Accounting" className={ic('expertise')} />
                  </div>
                )}

                <div>
                  <label className={lc}>Message *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={formType === 'business' ? 'Briefly describe what you need help with...' : 'Tell us about your background and what kind of work you are looking for...'}
                    className={ic('message')}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2 transition-all ${
                    formType === 'business' ? 'bg-brand-navy hover:bg-brand-navy/90 text-white' : 'bg-brand-gold hover:bg-vwGold-hover text-white'
                  } disabled:opacity-60`}
                >
                  {isSubmitting ? <span>Sending...</span> : (
                    <>
                      <span>{formType === 'business' ? 'Submit Business Enquiry' : 'Join Our Network'}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-2 text-xs text-brand-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                  <span>Your information is kept strictly confidential.</span>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {[
              { icon: Phone, color: 'bg-brand-navy', label: 'Phone', value: BRAND_INFO.phone, href: `tel:${BRAND_INFO.phone}`, sub: 'Mon–Sat, 9:30 AM – 6:30 PM' },
              { icon: Mail, color: 'bg-brand-gold', label: 'Email', value: BRAND_INFO.email, href: `mailto:${BRAND_INFO.email}`, sub: 'Response within 24 hours' },
            ].map((item) => (
              <div key={item.label} className="card-base p-4 sm:p-5 flex items-start space-x-3 sm:space-x-4 hover:shadow-card-hover transition-all">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${item.color} text-white flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted mb-1">{item.label}</div>
                  <a href={item.href} className="text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors break-all">{item.value}</a>
                  <p className="text-xs text-brand-muted mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            <div className="card-base p-4 sm:p-5 flex items-start space-x-3 sm:space-x-4 hover:shadow-card-hover transition-all sm:col-span-2 lg:col-span-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-bgAlt border border-brand-border text-brand-navy flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted mb-1">Office · Surat | Pune</div>
                <div className="text-xs sm:text-sm text-brand-text leading-relaxed">{BRAND_INFO.address}</div>
                <p className="text-xs text-brand-muted mt-0.5">Pan-India services available</p>
              </div>
            </div>

            <div className="card-base p-4 sm:p-5 flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <div className="text-xs text-brand-muted">
                <strong className="text-brand-text">Hours:</strong>{' '}Mon to Sat, 9:30 AM – 6:30 PM IST
              </div>
            </div>

            {/* Clean Official Social Channels */}
            <div className="card-base p-4 sm:p-5 sm:col-span-2 lg:col-span-1 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted">
                Official Channels
              </div>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((item) => {
                  const Icon =
                    item.platform === 'linkedin'
                      ? Linkedin
                      : item.platform === 'youtube'
                      ? Youtube
                      : item.platform === 'whatsapp'
                      ? MessageCircle
                      : Star;
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-brand-border bg-brand-bgAlt hover:border-brand-navy hover:bg-brand-navy hover:text-white text-brand-navy text-xs font-medium transition-all"
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
