import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Check, ChevronDown, ArrowRight, Calendar, Shield, Building2, Rocket,
  Users, Zap, Headphones, FileCheck, Lock, Settings, BarChart3, Bot,
  Globe, Cpu, Clock, ShieldCheck, CreditCard, Scale,
} from 'lucide-react'

const plans = [
  {
    id: 'foundation',
    name: 'Foundation',
    label: 'PLATFORM FOUNDATION',
    icon: Rocket,
    description: 'Essential AI automation to modernize operations and build a strong foundation.',
    price: '$2,500/mo',
    priceNote: 'per seat, billed annually',
    featured: false,
    features: [
      'Up to 5 users',
      'Core workflow automation',
      'Document management & intelligence',
      'Pre-configured compliance templates',
      'Email & chat support',
      'Standard onboarding',
    ],
    cta: 'GET STARTED',
  },
  {
    id: 'professional',
    name: 'Professional',
    label: 'ENTERPRISE DEPLOYMENT',
    icon: Building2,
    description: 'Complete sovereign platform for banks, law firms, and regulated enterprises.',
    price: '$5,500/mo',
    priceNote: 'per seat, billed annually',
    featured: true,
    features: [
      'Up to 25 users',
      'AI-assisted workflows & agents',
      'Advanced analytics & dashboards',
      'Priority support with SLA',
      'Custom integrations & API access',
      'Advanced compliance & audit framework',
      'Regulatory reporting automation',
      'Dedicated onboarding & training',
    ],
    cta: 'GET STARTED',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    label: 'SOVEREIGN INFRASTRUCTURE',
    icon: Shield,
    description: 'Fully custom AI infrastructure for large institutions and government entities.',
    price: 'Custom',
    priceNote: 'tailored to your organization',
    featured: false,
    features: [
      'Unlimited users',
      'Dedicated infrastructure & tenant isolation',
      'White-glove onboarding & change management',
      'Custom AI models & workflow development',
      '24/7 dedicated support with named CSM',
      'SOC 2 Type II, HIPAA, PCI DSS compliance',
      'Air-gapped & sovereign deployment',
      'Custom SLAs & uptime guarantees',
    ],
    cta: 'CONTACT SALES',
  },
]

const comparisonFeatures = [
  { label: 'Workflow Automation', foundation: 'Core workflows', professional: 'AI-assisted workflows', enterprise: 'Custom AI workflows' },
  { label: 'Document Intelligence', foundation: 'Basic processing', professional: 'Advanced extraction & classification', enterprise: 'Custom models & templates' },
  { label: 'Compliance Engine', foundation: 'Pre-built templates', professional: 'Automated reporting & audit trails', enterprise: 'Full regulatory framework' },
  { label: 'AI Agents', foundation: false, professional: 'Assisted decision support', enterprise: 'Autonomous governed agents' },
  { label: 'Analytics & Dashboards', foundation: 'Standard reports', professional: 'Advanced real-time analytics', enterprise: 'Custom dashboards & predictive insights' },
  { label: 'API Access', foundation: false, professional: 'Full API access', enterprise: 'Unlimited API + SDK' },
  { label: 'Deployment Model', foundation: 'Cloud', professional: 'Cloud or hybrid', enterprise: 'Cloud, hybrid, or air-gapped' },
  { label: 'Support', foundation: 'Email & chat', professional: 'Priority with SLA', enterprise: '24/7 dedicated CSM' },
  { label: 'User Count', foundation: 'Up to 5', professional: 'Up to 25', enterprise: 'Unlimited' },
  { label: 'Onboarding', foundation: 'Standard', professional: 'Dedicated training', enterprise: 'White-glove + change mgmt' },
]

const faqs = [
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on several factors including the number of users, your industry vertical, the deployment model you choose (cloud, hybrid, or air-gapped), and the complexity of integrations required. We tailor packages for each institution so you only pay for what you need. Foundation and Professional tiers are priced per seat with annual billing, while Enterprise pricing is fully custom and depends on scope, infrastructure requirements, SLA levels, and the number of modules deployed. Our team will work with you to design a package that aligns with your operational goals and budget.',
  },
  {
    question: 'Is there a free trial or pilot program?',
    answer:
      'While we do not offer a traditional free trial, we provide a structured pilot program for qualified institutions. The pilot typically runs 4-8 weeks and includes a scoped deployment of the platform with full access to core modules, dedicated onboarding support, and measurable success criteria agreed upon in advance. This allows your team to validate the platform against real operational workflows before committing to a full deployment. Contact our team to discuss your requirements and see if you qualify.',
  },
  {
    question: 'Can I change plans or scale over time?',
    answer:
      'Absolutely. We understand that institutions grow and requirements evolve. You can upgrade from Foundation to Professional or from Professional to Enterprise at any time, with prorated pricing for the remainder of your contract. Additionally, each tier can be supplemented with add-on modules — such as advanced AI agents, custom compliance frameworks, or additional integration connectors — so you can scale capabilities without changing your base plan. Your dedicated account manager will help you assess when an upgrade makes operational and financial sense.',
  },
  {
    question: 'What deployment options are available?',
    answer:
      'We support three deployment models: Cloud (SaaS, hosted in our secure multi-tenant environment with full isolation), Hybrid (a combination of cloud services with on-premise components for data residency requirements), and Air-Gapped (fully isolated, sovereign infrastructure deployed within your own data center or private cloud). The Foundation tier is cloud-only, Professional supports cloud and hybrid, and Enterprise supports all three including air-gapped deployments for maximum data sovereignty. All deployment models include the same core platform capabilities — the difference is in infrastructure control and data residency.',
  },
  {
    question: 'Is training and onboarding included?',
    answer:
      'Every plan includes onboarding, but the depth varies by tier. Foundation includes standard onboarding with self-service documentation, video tutorials, and email support. Professional includes dedicated onboarding with a customer success manager, live training sessions for your team, and best-practices workshops tailored to your industry. Enterprise receives white-glove onboarding with a named Customer Success Manager, a phased implementation plan, change management support, executive stakeholder reviews, and ongoing quarterly business reviews. We invest heavily in your success because our platform is only valuable when your team uses it confidently.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Foundation and Professional plans are billed annually with flexible payment terms (monthly invoicing is available for Foundation). Enterprise contracts are negotiated based on scope and typically involve annual or multi-year agreements with milestone-based billing. We accept ACH, wire transfer, and corporate credit card. There are no hidden fees — implementation, onboarding, and standard support are included in your plan. Custom development, premium integrations, and dedicated infrastructure are itemized separately on Enterprise contracts so you always know exactly what you are paying for.',
  },
  {
    question: 'What compliance and security certifications do you have?',
    answer:
      'Pillars of Wisdom is SOC 2 Type II certified, and the platform is designed to support HIPAA, PCI DSS, GDPR, and FedRAMP-aligned requirements. Enterprise customers receive full audit reports and can request penetration testing results. Our infrastructure runs on hardened, encrypted environments with zero-trust architecture, and we maintain immutable audit trails for every action taken on the platform. For institutions with specific regulatory requirements, our compliance team works directly with yours to map platform controls to your jurisdictional obligations.',
  },
  {
    question: 'Can I add modules or capabilities later?',
    answer:
      'Yes. The platform is composable by design — you can add modules at any time without affecting existing workflows. Available add-ons include additional AI agent types, industry-specific policy packs (AML/KYC, BSA/AML, prior authorization, etc.), advanced analytics modules, custom connector development, and dedicated deployment upgrades. Each add-on is priced separately and can be activated immediately or at the start of your next billing cycle. Your account manager will help you plan a modular rollout that aligns with your workflow priorities.',
  },
]

const quoteData = {
  text: 'The pilot convinced us in weeks — and the full deployment paid for itself within the first quarter.',
  source: 'VP of Operations, Top 10 U.S. Mortgage Lender',
}

function FAQItem({ faq, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 transition-colors duration-300 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <h4 className="font-heading text-[0.92rem] font-semibold text-navy pr-4">
          {faq.question}
        </h4>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 pb-5 -mt-1">
              <p className="text-[0.85rem] text-slate leading-[1.72]">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PricingPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })
  const compRef = useRef(null)
  const compInView = useInView(compRef, { once: true, margin: '-40px' })
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

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
              <span>Pricing</span>
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
                  <CreditCard className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">PRICING</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Enterprise Deployment<br />Models
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
                Flexible architecture options designed for pilots, full deployments, and sovereign environments. Transparent pricing with no hidden fees.
              </motion.p>
            </div>

            {/* ── HERO SVG ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-52 lg:h-60 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7f4] via-[#eeeae0] to-[#f4f1e8]" />
              <div className="absolute bottom-0 inset-x-0 flex items-end justify-center gap-[6px] px-6 pb-4">
                {[55, 75, 100, 130, 90, 70, 110, 85, 120, 65, 95, 80].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t transition-all duration-300"
                    style={{
                      height: `${h}px`,
                      background: i % 3 === 1 ? 'rgba(200,155,60,0.25)' : 'rgba(10,22,40,0.10)',
                    }}
                  />
                ))}
              </div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(10,22,40,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.08) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="absolute top-4 left-5 text-[0.6rem] font-bold text-gold/70 tracking-[0.2em] uppercase">
                Choose Your Deployment Model
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={cardsRef}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {plans.map((plan, i) => {
              const PlanIcon = plan.icon
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.72, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.22 } }}
                  className={`rounded-2xl p-7 shadow-[0_8px_36px_rgba(10,22,40,0.14)] transition-all duration-300 group relative ${
                    plan.featured
                      ? 'bg-white border-2 border-gold/50 hover:border-gold hover:shadow-[0_12px_48px_rgba(200,155,60,0.18)]'
                      : 'bg-[#0a1628] border border-gold/20 hover:border-gold/40 hover:shadow-[0_12px_48px_rgba(10,22,40,0.28)]'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full shadow">
                      MOST POPULAR
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${
                    plan.featured
                      ? 'bg-gold/10 border border-gold/30'
                      : 'bg-gold/15 border border-gold/25'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <PlanIcon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>

                  <div className={`text-[0.62rem] font-bold tracking-[0.2em] uppercase mb-3 ${
                    plan.featured ? 'text-navy' : 'text-gold'
                  }`}>
                    {plan.label}
                  </div>

                  <div className="flex items-center gap-1.5 mb-4">
                    <div className={`h-[1.5px] w-6 ${plan.featured ? 'bg-gold' : 'bg-gold/60'}`} />
                    <div className={`w-1.5 h-1.5 rotate-45 border ${plan.featured ? 'border-gold' : 'border-gold/50'}`} />
                    <div className={`h-[1.5px] w-6 ${plan.featured ? 'bg-gold' : 'bg-gold/60'}`} />
                  </div>

                  <p className={`text-[0.82rem] leading-relaxed mb-4 ${
                    plan.featured ? 'text-slate' : 'text-slate-300'
                  }`}>
                    {plan.description}
                  </p>

                  <div className="mb-4">
                    <div className={`text-3xl font-bold font-heading ${plan.featured ? 'text-gold' : 'text-gold'}`}>
                      {plan.price}
                    </div>
                    <div className={`text-[0.72rem] mt-1 ${plan.featured ? 'text-slate' : 'text-white/50'}`}>
                      {plan.priceNote}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-7">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.featured ? 'text-gold' : 'text-gold/80'}`} strokeWidth={2.5} />
                        <span className={`text-[0.78rem] ${plan.featured ? 'text-navy' : 'text-white/80'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase transition-all duration-200 ${
                      plan.featured
                        ? 'btn-gold w-full justify-center'
                        : 'text-gold/80 hover:text-gold border border-gold/30 rounded-lg py-2.5 px-4 w-full justify-center hover:border-gold/60'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-16 bg-[#f8f7f4] border-t border-gray-100 relative">
        <div className="container-site" ref={compRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={compInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            COMPARE PLANS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={compInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Feature Comparison<span className="text-gold">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={compInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(10,22,40,0.08)] border border-gray-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0a1628]">
                    <th className="text-left px-6 py-4 text-[0.72rem] font-bold text-gold uppercase tracking-wider">Feature</th>
                    <th className="text-center px-6 py-4 text-[0.72rem] font-bold text-white/70 uppercase tracking-wider">Foundation</th>
                    <th className="text-center px-6 py-4 text-[0.72rem] font-bold text-gold uppercase tracking-wider">Professional</th>
                    <th className="text-center px-6 py-4 text-[0.72rem] font-bold text-white/70 uppercase tracking-wider">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8f7f4]'}>
                      <td className="px-6 py-3.5 text-[0.82rem] font-medium text-navy">{row.label}</td>
                      <td className="text-center px-6 py-3.5">
                        {row.foundation === false ? (
                          <span className="text-slate/40">—</span>
                        ) : (
                          <span className="text-[0.82rem] text-slate">{row.foundation}</span>
                        )}
                      </td>
                      <td className="text-center px-6 py-3.5 bg-gold/[0.04]">
                        {row.professional === false ? (
                          <span className="text-slate/40">—</span>
                        ) : (
                          <span className="text-[0.82rem] text-navy font-medium">{row.professional}</span>
                        )}
                      </td>
                      <td className="text-center px-6 py-3.5">
                        {row.enterprise === false ? (
                          <span className="text-slate/40">—</span>
                        ) : (
                          <span className="text-[0.82rem] text-slate">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={faqRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Questions? We Have Answers<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} inView={faqInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-gold text-4xl font-heading mb-4">&ldquo;</div>
            <p className="font-heading text-[1.1rem] md:text-[1.25rem] text-navy leading-[1.5] mb-4">
              {quoteData.text}
            </p>
            <p className="text-[0.82rem] text-slate font-semibold uppercase tracking-wider">
              — {quoteData.source}
            </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a strategy session with our team to find the right deployment model for your organization.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Calendar className="w-4 h-4" />
              BOOK STRATEGY SESSION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}