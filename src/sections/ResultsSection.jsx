import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  RefreshCw, Shield, Eye, Layers, Target, Users, ShieldCheck, Lightbulb,
  Landmark, Globe, Box, Check, Umbrella, HeartPulse, Handshake, Lock, CheckCircle,
} from 'lucide-react'

const metricCards = [
  { icon: RefreshCw, title: 'Operational Automation', desc: 'Intelligent automation ensures accuracy, consistency, and control.' },
  { icon: Shield, title: 'Compliance Oversight', desc: 'Governance and controls built in — not bolted on.' },
  { icon: Eye, title: 'Real-Time Visibility', desc: 'Live dashboards and analytics across every workflow.' },
  { icon: Layers, title: 'Scalable Infrastructure', desc: 'Cloud-native architecture that scales with demand.' },
]

const impactItems = [
  { icon: Target, title: 'OPERATE WITH PRECISION', desc: 'Intelligent automation ensures accuracy, consistency, and control.' },
  { icon: Users, title: 'IMPROVE CUSTOMER EXPERIENCE', desc: 'Faster, smarter interactions that build trust and strengthen relationships.' },
  { icon: ShieldCheck, title: 'REDUCE OPERATIONAL RISK', desc: 'Proactive monitoring and governance to minimize risk and exposure.' },
  { icon: Lightbulb, title: 'DRIVE INNOVATION', desc: 'Leverage AI and data to enable new opportunities and create long-term value.' },
]

const successStories = [
  {
    icon: Landmark,
    label: 'TOP 10 U.S.\nMORTGAGE LENDER',
    title: 'Autonomous Loan Operations',
    desc: 'AI executes end-to-end loan lifecycle workflows — from intake to closing — with intelligent exception handling and full compliance.',
    items: ['Accelerated loan operations', 'Streamlined compliance workflows', 'Reduced manual intervention', 'Improved audit readiness'],
  },
  {
    icon: Globe,
    label: 'GLOBAL FINANCIAL\nSERVICES FIRM',
    title: 'Autonomous Compliance Engine',
    desc: 'AI continuously monitors, detects, and manages compliance obligations across all jurisdictions in real time.',
    items: ['Enhanced regulatory oversight', 'Faster compliance reporting', 'Unified source of truth', 'Stronger governance posture'],
  },
  {
    icon: Box,
    label: 'TOKENIZED REAL ESTATE\nPLATFORM',
    title: 'Tokenized Real Estate at Scale',
    desc: 'AI manages the entire asset lifecycle from issuance to investor reporting with on-chain transparency and security.',
    items: ['Faster time to market', 'Transparent investor reporting', 'Global investor access', 'Secure and compliant by design'],
  },
]

const trustIcons = [
  { icon: Landmark, label: 'MORTGAGE LENDERS' },
  { icon: Landmark, label: 'BANKS & FINANCIAL SERVICES' },
  { icon: Umbrella, label: 'INSURANCE COMPANIES' },
  { icon: HeartPulse, label: 'HEALTHCARE ORGANIZATIONS' },
  { icon: Box, label: 'TOKENIZED REAL ESTATE PLATFORMS' },
  { icon: Landmark, label: 'GOVERNMENT & PUBLIC SECTOR' },
]

const trustBadges = [
  { icon: ShieldCheck, text: 'Enterprise-grade security and data protection' },
  { icon: CheckCircle, text: 'Built to meet global regulatory standards' },
  { icon: Lock, text: 'Sovereign infrastructure and tenant isolation' },
  { icon: Handshake, text: 'Proven architecture. Trusted partnerships.' },
]

export default function ResultsSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' })
  const bottomRef = useRef(null)
  const bottomInView = useInView(bottomRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[380px] h-[380px] bg-gold/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-gold" />
            <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">
              Real Results. Proven Impact.
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-navy leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Autonomous Operations for Regulated Institutions.{' '}
            <span className="text-gold">Built to Deliver Real Outcomes.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1rem] text-slate leading-[1.72]"
          >
            Pillars of Wisdom enables institutions to organize workflows, improve governance, and scale intelligently through AI-powered workflow infrastructure.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" ref={contentRef}>
          {/* LEFT */}
          <div>
            {/* 4 metric cards */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {metricCards.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_32px_rgba(10,22,40,0.11)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[0.82rem] font-bold text-navy mb-1 group-hover:text-gold transition-colors duration-200">{title}</h3>
                  <p className="text-[0.75rem] text-slate leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Business Impact dark card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a1628] rounded-2xl p-6 shadow-[0_8px_36px_rgba(10,22,40,0.22)] border border-gold/15"
            >
              <p className="text-[0.62rem] font-bold text-gold tracking-[0.2em] uppercase mb-5">
                Business Impact That Compounds
              </p>
              <div className="grid grid-cols-2 gap-5">
                {impactItems.map(({ icon: Icon, title, desc }) => (
                  <div key={title}>
                    <Icon className="w-5 h-5 text-gold mb-2" strokeWidth={1.5} />
                    <p className="text-[0.65rem] font-bold text-white uppercase tracking-wider">{title}</p>
                    <p className="text-[0.72rem] text-slate-400 mt-1 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Customer Success Stories */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a1628] rounded-2xl px-6 py-4 mb-4 flex items-center justify-between"
            >
              <div>
                <p className="text-[0.7rem] font-bold text-white/60 tracking-[0.18em] uppercase">Customer Success Stories</p>
                <p className="text-[0.82rem] font-bold text-gold mt-0.5">Trusted by Leading Institutions.</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {successStories.map(({ icon: Icon, label, title, desc, items }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-5 flex gap-4 shadow-[0_4px_20px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_32px_rgba(10,22,40,0.11)] transition-all duration-300 group"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0a1628] to-[#0f2a4a] rounded-xl flex flex-col items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                    <p className="text-[0.55rem] font-bold text-white text-center uppercase mt-1.5 leading-tight px-2 whitespace-pre-line">
                      {label}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-[0.92rem] font-bold text-navy group-hover:text-gold transition-colors duration-200 mb-1">
                      {title}
                    </h4>
                    <p className="text-[0.77rem] text-slate leading-relaxed mb-2">{desc}</p>
                    <ul className="space-y-1">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[0.72rem] text-slate">
                          <Check className="w-3 h-3 text-gold flex-shrink-0" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-16 border-t border-gray-100 pt-10" ref={bottomRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0 }}
            animate={bottomInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-[0.68rem] font-bold text-slate tracking-[0.2em] uppercase mb-8"
          >
            Trusted by Institutions That Demand Excellence
          </motion.p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {trustIcons.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={bottomInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col items-center gap-2"
              >
                <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                <span className="text-[0.62rem] text-navy font-bold text-center uppercase tracking-wide">{label}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0 }}
                animate={bottomInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-2 text-[0.75rem] text-slate"
              >
                <Icon className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark bottom banner */}
      <div className="mt-12 bg-[#0a1628]">
        <div className="container-site py-5">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Landmark className="w-8 h-8 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-[0.78rem] font-bold text-white uppercase tracking-wide">
                  The Future of Operations Is Autonomous.
                </p>
                <p className="text-[0.72rem] text-gold font-bold uppercase tracking-wider">
                  Pillars of Wisdom. Built to Run. Built to Trust.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              {[
                { icon: Target, label: 'AI-POWERED EXECUTION' },
                { icon: ShieldCheck, label: 'COMPLIANCE BY DESIGN' },
                { icon: Box, label: 'TOKENIZED REAL ESTATE ENABLED' },
                { icon: Layers, label: 'BUILT TO SCALE' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  <span className="text-[0.62rem] font-bold text-white/70 uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
