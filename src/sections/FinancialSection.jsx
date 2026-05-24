import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Box, Home, FileText, Users, ShieldCheck, ClipboardCheck, Landmark, Gauge, Eye, BarChart3, ArrowRight } from 'lucide-react'

const mortgageFeatures = [
  { icon: FileText, title: 'LOAN INTAKE', desc: 'Automated document capture and data validation.' },
  { icon: Users, title: 'UNDERWRITING', desc: 'Intelligent risk assessment and decision support.' },
  { icon: ShieldCheck, title: 'COMPLIANCE MONITORING', desc: 'Continuous regulatory monitoring and policy enforcement.' },
  { icon: ClipboardCheck, title: 'AUDIT REPORTING', desc: 'Audit-ready reporting and complete activity trails.' },
]

const regulatedItems = [
  'Built for regulated financial workflows',
  'Policy-based controls and approvals',
  'Regulatory reporting and audit trails',
  'Role-based access and segregation',
  'Data governance and retention',
]

const assetItems = [
  'Asset onboarding and due diligence',
  'Token issuance and investor onboarding',
  'Ongoing investor reporting',
  'Lifecycle events and corporate actions',
  'Transparency and ownership records',
]

const bottomBarItems = [
  { icon: Gauge, label: 'ACCELERATE OPERATIONS' },
  { icon: ShieldCheck, label: 'REDUCE RISK' },
  { icon: Eye, label: 'IMPROVE TRANSPARENCY' },
  { icon: BarChart3, label: 'OPERATIONAL INTELLIGENCE' },
]

export default function FinancialSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[360px] h-[360px] bg-gold/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-6" ref={headerRef}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-gold" />
              <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">
                Regulated Financial Infrastructure
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-navy leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Built for Regulated Financial Operations
              <span className="text-gold">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1rem] text-slate leading-[1.72] max-w-[480px]"
            >
              Pillars of Wisdom delivers an AI operating layer that powers mortgage workflows and enables the secure management of tokenized real-world assets — with the controls and visibility required by regulated institutions.
            </motion.p>
          </div>

          {/* Digital Asset Infrastructure card — top right */}
          <Link to="/digital-asset-infrastructure" className="group block">
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={headerInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a1628] rounded-2xl p-6 shadow-[0_8px_36px_rgba(10,22,40,0.22)] border border-gold/20 hover:border-gold/40 hover:shadow-[0_12px_48px_rgba(200,155,60,0.12)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Box className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[0.68rem] font-bold text-gold tracking-[0.18em] uppercase mb-2">
                    Digital Asset Infrastructure
                  </h3>
                  <p className="text-[0.82rem] text-slate-300 leading-relaxed">
                    Manage regulated real-world assets with transparency, reporting, and operational oversight.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Main 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4" ref={contentRef}>
          {/* LEFT — Mortgage Operations (dark card) */}
          <Link to="/mortgage-operations" className="group block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a1628] rounded-2xl p-7 shadow-[0_8px_40px_rgba(10,22,40,0.22)] border border-gold/20 hover:border-gold/35 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Home className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[0.68rem] font-bold text-gold tracking-[0.15em] uppercase">Mortgage Operations</h3>
                  <p className="text-[0.8rem] text-slate-300 mt-1 leading-relaxed">
                    AI-powered workflows that streamline the loan lifecycle and ensure compliance at every step.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
              </div>
              <div className="h-px bg-white/10 mb-5" />
              <div className="grid grid-cols-2 gap-3">
                {mortgageFeatures.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-gold/25 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-gold mb-2" strokeWidth={1.5} />
                    <h4 className="text-[0.65rem] font-bold text-white uppercase tracking-wider">{title}</h4>
                    <p className="text-[0.72rem] text-slate-400 mt-1 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Link>

          {/* MIDDLE — Regulated Operations (white card) */}
          <Link to="/regulated-operations" className="group block lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(10,22,40,0.08)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_36px_rgba(10,22,40,0.12)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Landmark className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-[0.68rem] font-bold text-navy uppercase tracking-[0.12em] group-hover:text-gold transition-colors duration-200 mt-2">
                  Regulated Operations
                </h3>
                <ArrowRight className="w-4 h-4 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
              </div>
              <div className="h-[2px] w-8 bg-gold mb-5" />
              <ul className="space-y-3">
                {regulatedItems.map((item) => (
                  <li key={item} className="flex gap-2 text-[0.82rem] text-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-[0.45rem] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Link>

          {/* RIGHT — Asset Lifecycle (white card) */}
          <Link to="/asset-lifecycle" className="group block lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(10,22,40,0.08)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_36px_rgba(10,22,40,0.12)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Box className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-[0.68rem] font-bold text-navy uppercase tracking-[0.12em] group-hover:text-gold transition-colors duration-200 mt-2">
                  Asset Lifecycle Management
                </h3>
                <ArrowRight className="w-4 h-4 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
              </div>
              <div className="h-[2px] w-8 bg-gold mb-5" />
              <ul className="space-y-3">
                {assetItems.map((item) => (
                  <li key={item} className="flex gap-2 text-[0.82rem] text-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-[0.45rem] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 mt-14 py-6">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {bottomBarItems.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#0a1628] border border-gold/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-[0.72rem] font-bold text-navy uppercase tracking-[0.12em]">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
