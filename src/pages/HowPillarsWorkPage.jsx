import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Building2, Brain, Shield, ArrowRight, Calendar, Check,
  Layers, Zap, ShieldCheck, TrendingUp, Workflow, Bot, Lock,
} from 'lucide-react'

const synergyStats = [
  { value: '3', label: 'Unified Pillars' },
  { value: '6', label: 'Architecture Layers' },
  { value: '100+', label: 'Pre-Built Workflows' },
  { value: '99.99%', label: 'Uptime SLA' },
]

const synergySteps = [
  {
    pillar: 'PILLAR I',
    title: 'Operational Foundation',
    icon: Building2,
    desc: 'Everything starts here. Intake, workflows, documents, approvals - all centralized into one platform that replaces fragmented tools.',
    color: '#c89b3c',
  },
  {
    pillar: 'PILLAR II',
    title: 'AI Orchestration',
    icon: Brain,
    desc: 'AI agents sit on top of your operations, automating routine tasks, processing documents intelligently, and coordinating workflows across teams.',
    color: '#c89b3c',
  },
  {
    pillar: 'PILLAR III',
    title: 'Sovereign Infrastructure',
    icon: Shield,
    desc: 'The entire stack runs on secure, sovereign infrastructure with zero-trust security, tenant isolation, and compliance automation built in.',
    color: '#c89b3c',
  },
]

const synergyBenefits = [
  { icon: Layers, title: 'Unified Architecture', desc: 'Three pillars working as one cohesive system - not three separate products bolted together.' },
  { icon: Zap, title: 'Compounding Value', desc: 'Each pillar amplifies the others. Foundation enables AI. AI supports workflows. Infrastructure protects everything.' },
  { icon: ShieldCheck, title: 'End-to-End Governance', desc: 'From intake to AI decision to data storage - every step is auditable, compliant, and secure.' },
  { icon: TrendingUp, title: 'Exponential ROI', desc: 'The combined effect of all three pillars delivers far more value than any single pillar alone.' },
]

const workflowSteps = [
  { step: '1', title: 'Intake & Capture', desc: 'Documents, requests, and data enter through the Operational Foundation - centralized, structured, and tracked.' },
  { step: '2', title: 'AI Processing', desc: 'AI Orchestration extracts, classifies, and validates information - routing to the right workflow automatically.' },
  { step: '3', title: 'Workflow Execution', desc: 'Operational Foundation executes the workflow - approvals, notifications, escalations, and audit trails.' },
  { step: '4', title: 'Secure Storage', desc: 'Sovereign Infrastructure encrypts, isolates, and stores all data with full policy controls and access management.' },
  { step: '5', title: 'Continuous Learning', desc: 'AI Orchestration learns from outcomes, improving accuracy and efficiency for the next cycle.' },
]

const useCases = [
  'End-to-end loan origination: intake through AI underwriting to secure archival',
  'Compliance automation: document processing through AI analysis to audit-ready reporting',
  'Employee onboarding: intake through AI document verification to secure access provisioning',
  'Invoice processing: capture through AI matching to secure payment and archival',
]

const quoteData = {
  text: 'The three pillars work together in a connected way that our team cannot tell where one ends and another begins. It is simply one platform that does everything.',
  source: 'CTO, Fortune 500 Healthcare System',
}

export default function HowPillarsWorkPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const synRef = useRef(null)
  const synInView = useInView(synRef, { once: true, margin: '-40px' })
  const wfRef = useRef(null)
  const wfInView = useInView(wfRef, { once: true, margin: '-40px' })
  const benRef = useRef(null)
  const benInView = useInView(benRef, { once: true, margin: '-40px' })
  const ucRef = useRef(null)
  const ucInView = useInView(ucRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white relative">
      {/* HERO */}
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
              <span>How the Three Pillars Work Together</span>
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
                  <Layers className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">HOW IT ALL WORKS TOGETHER</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Three Pillars.<br />One Platform<span className="text-gold">.</span>
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
                The three pillars are not separate products - they are layers of one unified platform. Foundation centralizes operations. AI amplifies everything. Infrastructure protects it all. Together, they create a system greater than the sum of its parts.
              </motion.p>
            </div>

            {/* Hero SVG */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <svg viewBox="0 0 500 400" className="w-full max-w-md" fill="none">
                <defs>
                  <linearGradient id="synGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Three pillars as columns */}
                <rect x="40" y="120" width="120" height="200" rx="12" fill="url(#synGrad1)" stroke="#c89b3c" strokeWidth="2" />
                <rect x="190" y="80" width="120" height="240" rx="12" fill="url(#synGrad1)" stroke="#c89b3c" strokeWidth="2" />
                <rect x="340" y="120" width="120" height="200" rx="12" fill="url(#synGrad1)" stroke="#c89b3c" strokeWidth="2" />
                {/* Icons */}
                <Building2 className="w-8 h-8 text-gold" x="86" y="200" />
                <Brain className="w-8 h-8 text-gold" x="236" y="180" />
                <Shield className="w-8 h-8 text-gold" x="386" y="200" />
                {/* Labels */}
                <text x="100" y="350" textAnchor="middle" fill="#0a1628" fontSize="10" fontWeight="700">FOUNDATION</text>
                <text x="250" y="350" textAnchor="middle" fill="#0a1628" fontSize="10" fontWeight="700">AI ORCHESTRATION</text>
                <text x="400" y="350" textAnchor="middle" fill="#0a1628" fontSize="10" fontWeight="700">INFRASTRUCTURE</text>
                {/* Arrows between pillars */}
                <path d="M160 220 L190 200" stroke="#c89b3c" strokeWidth="2" markerEnd="url(#arrowGold)" />
                <path d="M310 200 L340 220" stroke="#c89b3c" strokeWidth="2" markerEnd="url(#arrowGold)" />
                {/* Top bar */}
                <rect x="30" y="40" width="440" height="40" rx="8" fill="#0a1628" />
                <text x="250" y="65" textAnchor="middle" fill="#c89b3c" fontSize="12" fontWeight="700" letterSpacing="0.15em">UNIFIED PLATFORM</text>
                {/* Bottom bar */}
                <rect x="30" y="370" width="440" height="20" rx="6" fill="#c89b3c" opacity="0.2" />
                <text x="250" y="384" textAnchor="middle" fill="#0a1628" fontSize="9" fontWeight="700" letterSpacing="0.1em">ONE PLATFORM · FULL CONTROL · BUILT FOR THE FUTURE</text>
                <defs>
                  <marker id="arrowGold" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#c89b3c" />
                  </marker>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-[#0a1628] border-t border-gold/10" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {synergyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-gold leading-none">{stat.value}</div>
                <div className="text-[0.72rem] text-slate-300 tracking-[0.12em] uppercase mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PILLARS OVERVIEW */}
      <section className="py-20 relative" ref={synRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={synInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            THE THREE PILLARS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={synInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Each Pillar, One Platform<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {synergySteps.map((step, i) => {
              const SIcon = step.icon
              return (
                <motion.div
                  key={step.pillar}
                  initial={{ opacity: 0, y: 18 }}
                  animate={synInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-6 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.10)] transition-all duration-300 group"
                >
                  <div className="text-[0.62rem] font-bold text-gold tracking-[0.2em] uppercase mb-3">{step.pillar}</div>
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <SIcon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[1.05rem] font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-200">{step.title}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-20 bg-[#f8f7f4] border-t border-gray-100" ref={wfRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={wfInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            HOW DATA FLOWS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={wfInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            The Complete Workflow<span className="text-gold">.</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -16 }}
                animate={wfInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-[0_2px_12px_rgba(10,22,40,0.05)] border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-heading font-bold text-sm">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-1">{step.title}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SYNERGY BENEFITS */}
      <section className="py-20 bg-white" ref={benRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={benInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            THE SYNERGY EFFECT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={benInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Greater Than the Sum of Its Parts<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {synergyBenefits.map((b, i) => {
              const BIcon = b.icon
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={benInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <BIcon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">{b.title}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{b.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-[#f8f7f4] border-t border-gray-100" ref={ucRef}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={ucInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2">END-TO-END EXAMPLES</p>
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-6">
                All Three Pillars in Action<span className="text-gold">.</span>
              </h2>
              <ul className="space-y-4">
                {useCases.map((uc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={ucInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-gold" strokeWidth={2.5} />
                    </div>
                    <span className="text-[0.9rem] text-slate leading-relaxed">{uc}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={ucInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a1628] rounded-2xl p-8 border border-gold/15"
            >
              <Layers className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
              <p className="text-[1.05rem] text-slate-200 leading-relaxed italic mb-4">"{quoteData.text}"</p>
              <p className="text-[0.78rem] text-gold font-bold tracking-[0.1em] uppercase">{quoteData.source}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Layers className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              Ready to Experience the Full Platform?
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              See how all three pillars work together to improve your workflows. Schedule a personalized demo with our team.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Calendar className="w-4 h-4" />
              SCHEDULE YOUR DEMO
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}