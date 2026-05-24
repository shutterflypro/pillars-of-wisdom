import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Building2, Workflow, FileText, ClipboardCheck, Inbox,
  ArrowRight, Calendar, Check, Layers, Repeat,
  Clock, Database, Settings, Users,
} from 'lucide-react'

const pillarStats = [
  { value: '100+', label: 'Pre-Built Workflows' },
  { value: '85%', label: 'Manual Tasks Eliminated' },
  { value: '10x', label: 'Faster Processing' },
  { value: '24/7', label: 'Continuous Operation' },
]

const capabilities = [
  { icon: Workflow, title: 'Workflow Automation', desc: 'Design, deploy, and monitor complex multi-step workflows with conditional branching, parallel processing, and automated escalations.' },
  { icon: FileText, title: 'Document Intelligence', desc: 'AI-powered document processing that extracts, classifies, and validates information from any format with 95%+ accuracy.' },
  { icon: ClipboardCheck, title: 'Audit-Ready Operations', desc: 'Every action logged, timestamped, and tamper-proof. Full compliance evidence collection built into every process.' },
  { icon: Inbox, title: 'Intake & Approvals', desc: 'Centralized intake management with smart routing, SLA tracking, and multi-level approval chains.' },
  { icon: Repeat, title: 'Recurring Operations', desc: 'Automate scheduled tasks, periodic reviews, compliance checks, and report generation without human intervention.' },
  { icon: Clock, title: 'SLA Management', desc: 'Real-time SLA monitoring with automated alerts, escalation paths, and performance dashboards.' },
]

const benefits = [
  { icon: Layers, title: 'Unified Operations', desc: 'Replace 7+ disconnected tools with one platform that handles everything from intake to archival.' },
  { icon: Database, title: 'Single Data Model', desc: 'Consistent data structure across all modules - no silos, no duplication, no reconciliation.' },
  { icon: Settings, title: 'Centralized Control', desc: 'Manage users, roles, permissions, and configurations from one administrative console.' },
  { icon: Users, title: 'Cross-Team Visibility', desc: 'Break down silos with shared workflows, transparent status, and unified reporting.' },
]

const useCases = [
  'Automated loan origination from application through underwriting to closing',
  'Compliance document routing with deadline tracking and audit trail generation',
  'Employee onboarding workflows spanning HR, IT, facilities, and legal departments',
  'Invoice processing with three-way matching, approval routing, and payment scheduling',
]

const quoteData = {
  text: 'The Operational Foundation replaced our patchwork of spreadsheets, email chains, and legacy systems. Everything finally works as one.',
  source: 'VP of Operations, Regional Financial Institution',
}

export default function OperationalFoundationPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const capRef = useRef(null)
  const capInView = useInView(capRef, { once: true, margin: '-40px' })
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
              <span>Pillar I: Operational Foundation</span>
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
                  <Building2 className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">PILLAR I - FOUNDATION LAYER</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Operational<br />Foundation<span className="text-gold">.</span>
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
                The bedrock of your entire operation. Centralize intake, workflows, documents, approvals, audit trails, and operational coordination into one unified platform that replaces fragmented tool stacks.
              </motion.p>
            </div>

            {/* Hero SVG */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <svg viewBox="0 0 500 420" className="w-full max-w-md" fill="none">
                <defs>
                  <linearGradient id="opGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="opGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#0a1628" stopOpacity="0.01" />
                  </linearGradient>
                </defs>
                {/* Foundation blocks */}
                {[
                  { x: 150, y: 30, w: 200, h: 50, label: 'INTAKE & APPROVALS', color: '#c89b3c' },
                  { x: 100, y: 100, w: 300, h: 50, label: 'WORKFLOW AUTOMATION', color: '#0a1628' },
                  { x: 50, y: 170, w: 400, h: 50, label: 'DOCUMENT INTELLIGENCE', color: '#c89b3c' },
                  { x: 30, y: 240, w: 440, h: 50, label: 'AUDIT-READY OPERATIONS', color: '#0a1628' },
                  { x: 10, y: 310, w: 480, h: 50, label: 'UNIFIED DATA MODEL', color: '#c89b3c' },
                ].map((block, i) => (
                  <g key={i}>
                    <rect x={block.x} y={block.y} width={block.w} height={block.h} rx="8" fill={i % 2 === 0 ? 'url(#opGrad1)' : 'url(#opGrad2)'} stroke={block.color} strokeWidth="1.5" />
                    <text x={block.x + block.w / 2} y={block.y + block.h / 2 + 5} textAnchor="middle" fill={i % 2 === 0 ? '#0a1628' : '#c89b3c'} fontSize="11" fontWeight="700" letterSpacing="0.05em">{block.label}</text>
                  </g>
                ))}
                {/* Pillar columns */}
                <rect x="30" y="370" width="140" height="40" rx="6" fill="#0a1628" />
                <rect x="180" y="370" width="140" height="40" rx="6" fill="#0a1628" />
                <rect x="330" y="370" width="140" height="40" rx="6" fill="#0a1628" />
                <text x="100" y="395" textAnchor="middle" fill="#c89b3c" fontSize="9" fontWeight="700" letterSpacing="0.1em">PILLAR I</text>
                <text x="250" y="395" textAnchor="middle" fill="#c89b3c" fontSize="9" fontWeight="700" letterSpacing="0.1em">PILLAR II</text>
                <text x="400" y="395" textAnchor="middle" fill="#c89b3c" fontSize="9" fontWeight="700" letterSpacing="0.1em">PILLAR III</text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-[#0a1628] border-t border-gold/10" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {pillarStats.map((stat, i) => (
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

      {/* CAPABILITIES */}
      <section className="py-20 relative" ref={capRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            CORE CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Everything Your Operations Need<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => {
              const CIcon = c.icon
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={capInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-6 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.10)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CIcon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-200">{c.title}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{c.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-[#f8f7f4] border-t border-gray-100" ref={benRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={benInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            KEY BENEFITS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={benInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Why Start With Foundation<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => {
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
      <section className="py-20 bg-white" ref={ucRef}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={ucInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2">REAL-WORLD APPLICATIONS</p>
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-6">
                Built for Complex Operations<span className="text-gold">.</span>
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
              <Building2 className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
              <p className="text-[1.05rem] text-slate-200 leading-relaxed italic mb-4">"{quoteData.text}"</p>
              <p className="text-[0.78rem] text-gold font-bold tracking-[0.1em] uppercase">{quoteData.source}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEXT PILLAR CTA */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Building2 className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <p className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-3">PILLAR I OF III</p>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              Foundation Is Just the Beginning
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Once your operations are centralized, AI Orchestration amplifies everything - automating, coordinating, and adapting across your entire enterprise.
            </p>
            <Link to="/ai-orchestration" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              EXPLORE PILLAR II: AI ORCHESTRATION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}