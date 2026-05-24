import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Mail, Phone, MapPin, Send, Calendar, ArrowRight, Clock,
  Shield, Cpu, Users, Building2, Loader2, CheckCircle2, AlertCircle,
} from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@pillarsofwisdom.ai', href: 'mailto:hello@pillarsofwisdom.ai' },
  { icon: Phone, label: 'Phone', value: '+1 (561) 555-0140', href: 'tel:+15615550140' },
  { icon: MapPin, label: 'Headquarters', value: 'West Palm Beach, FL', href: null },
  { icon: Clock, label: 'Business Hours', value: 'Mon–Fri, 8 AM – 6 PM ET', href: null },
]

const reasons = [
  { icon: Shield, title: 'Security-First Approach', desc: 'Every conversation is treated with enterprise confidentiality and discretion.' },
  { icon: Cpu, title: 'Tailored Solutions', desc: 'We architect solutions specific to your industry, workflows, and policy requirements.' },
  { icon: Users, title: 'Dedicated Team', desc: 'You\'ll work with domain experts who understand regulated industries inside and out.' },
  { icon: Building2, title: 'Institutional Focus', desc: 'Built for banks, legal firms, healthcare systems, and government agencies.' },
]

export default function ContactPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const infoRef = useRef(null)
  const infoInView = useInView(infoRef, { once: true, margin: '-40px' })
  const reasonsRef = useRef(null)
  const reasonsInView = useInView(reasonsRef, { once: true, margin: '-40px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  const [formState, setFormState] = useState({
    firstName: '', lastName: '', email: '', company: '',
    industry: '', deployment: '', companySize: '', message: '',
  })
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors.length > 0) setErrors([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrors([])

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormState({
          firstName: '', lastName: '', email: '', company: '',
          industry: '', deployment: '', companySize: '', message: '',
        })
      } else {
        setStatus('error')
        setErrors(data.errors || [data.error || 'Submission failed. Please try again.'])
      }
    } catch {
      setStatus('error')
      setErrors(['Network error. Please check your connection and try again.'])
    }
  }

  const industryOptions = [
    { value: '', label: 'Select your industry' },
    { value: 'financial-services', label: 'Financial Services' },
    { value: 'legal-compliance', label: 'Legal & Compliance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'government', label: 'Government & Public Sector' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'banks-credit-unions', label: 'Banks & Credit Unions' },
    { value: 'accounting-tax', label: 'Accounting & Tax' },
    { value: 'other', label: 'Other' },
  ]

  const deploymentOptions = [
    { value: '', label: 'Select deployment model' },
    { value: 'foundation', label: 'Foundation' },
    { value: 'professional', label: 'Professional' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'unsure', label: 'Not sure yet' },
  ]

  const sizeOptions = [
    { value: '', label: 'Number of employees' },
    { value: '1-10', label: '1–10' },
    { value: '11-50', label: '11–50' },
    { value: '51-200', label: '51–200' },
    { value: '201-1000', label: '201–1,000' },
    { value: '1000+', label: '1,000+' },
  ]

  const inputClass = "w-full px-4 py-3 bg-[#f8f7f4] border border-gray-200 rounded-lg text-sm text-navy placeholder:text-slate/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
  const selectClass = "w-full px-4 py-3 bg-[#f8f7f4] border border-gray-200 rounded-lg text-sm text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors appearance-none"

  return (
    <div className="bg-white relative">
      {/* ── HERO ── */}
      <section className="pt-[90px] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link to="/" className="link-gold inline-flex items-center gap-1.5 text-[0.75rem]">
              <span className="text-slate/70">Home</span>
              <span className="text-slate/40">/</span>
              <span>Contact</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">DEPLOYMENT INTAKE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Start Your Deployment<br />Assessment.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={headerInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
                className="flex items-center gap-2 mb-5"
              >
                <div className="h-[2px] w-10 bg-gold" />
                <div className="w-2 h-2 rotate-45 border border-gold" />
                <div className="h-[2px] w-10 bg-gold" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[1rem] text-slate leading-[1.72] max-w-[480px]"
              >
                Begin the process of evaluating Pillars of Wisdom for your institution. Our team will assess your requirements and recommend the appropriate deployment model.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 space-y-4"
              >
                {contactInfo.map((item) => {
                  const ItemIcon = item.icon
                  const content = (
                    <div className="flex items-center gap-3 text-slate group" key={item.label}>
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <ItemIcon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-[0.68rem] font-bold text-gold tracking-[0.15em] uppercase">{item.label}</div>
                        <div className="text-[0.88rem] text-navy font-medium">{item.value}</div>
                      </div>
                    </div>
                  )
                  if (item.href) {
                    return (
                      <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    )
                  }
                  return <div key={item.label}>{content}</div>
                })}
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex gap-3"
              >
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* ── FORM ── */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 24 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(10,22,40,0.10)] border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Send className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-heading text-[1rem] font-bold text-navy">Request Deployment Assessment</div>
                    <div className="text-[0.72rem] text-slate">Provide details about your organization and requirements</div>
                  </div>
                </div>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="font-heading text-[1.3rem] font-bold text-navy mb-2">Assessment Request Received</h3>
                    <p className="text-slate text-[0.88rem] leading-relaxed mb-6">
                      Thank you for your inquiry. Our deployment team will review your requirements and contact you within 24 hours to begin the assessment process.
                    </p>
                    <button
                      onClick={() => setStatus(null)}
                      className="btn-gold inline-flex items-center gap-2 text-[0.78rem]"
                    >
                      SUBMIT ANOTHER REQUEST
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {errors.length > 0 && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            {errors.map((err, i) => (
                              <p key={i} className="text-red-700 text-[0.82rem]">{err}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.68rem] font-bold text-navy tracking-wide uppercase mb-1.5">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.68rem] font-bold text-navy tracking-wide uppercase mb-1.5">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Smith"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.68rem] font-bold text-navy tracking-wide uppercase mb-1.5">Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.68rem] font-bold text-navy tracking-wide uppercase mb-1.5">Company *</label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          required
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.68rem] font-bold text-navy tracking-wide uppercase mb-1.5">Industry</label>
                        <select
                          name="industry"
                          value={formState.industry}
                          onChange={handleChange}
                          className={selectClass}
                        >
                          {industryOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[0.68rem] font-bold text-navy tracking-wide uppercase mb-1.5">Deployment Interest</label>
                        <select
                          name="deployment"
                          value={formState.deployment}
                          onChange={handleChange}
                          className={selectClass}
                        >
                          {deploymentOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[0.68rem] font-bold text-navy tracking-wide uppercase mb-1.5">Company Size</label>
                      <select
                        name="companySize"
                        value={formState.companySize}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        {sizeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.68rem] font-bold text-navy tracking-wide uppercase mb-1.5">How Can We Help?</label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your current workflows, regulatory requirements, and deployment timeline..."
                        className="w-full px-4 py-3 bg-[#f8f7f4] border border-gray-200 rounded-lg text-sm text-navy placeholder:text-slate/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 resize-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-gold w-full flex items-center justify-center gap-2 mt-2 shadow-lg hover:shadow-xl transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          SUBMITTING...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          REQUEST ASSESSMENT
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[0.72rem] text-slate text-center mt-2">
                      By submitting, you agree to our <Link to="/privacy" className="text-gold hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-gold hover:underline">Terms of Service</Link>.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CONTACT US ── */}
      <section className="py-16 bg-[#f8f7f4] border-t border-gray-100 relative" ref={reasonsRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            DEPLOYMENT ADVANTAGES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Institutional Onboarding. Dedicated Support.<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((reason, i) => {
              const ReasonIcon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.10)] transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <ReasonIcon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">{reason.title}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{reason.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Calendar className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              Prefer a Direct Conversation?
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Call us at <a href="tel:+15615550140" className="text-gold hover:text-gold-light transition-colors">+1 (561) 555-0140</a> or email <a href="mailto:hello@pillarsofwisdom.ai" className="text-gold hover:text-gold-light transition-colors">hello@pillarsofwisdom.ai</a> to discuss your deployment requirements.
            </p>
            <Link
              to="/pricing"
              className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              VIEW PRICING
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}