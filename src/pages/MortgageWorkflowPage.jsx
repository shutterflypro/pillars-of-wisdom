import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowLeft, Calendar, CheckCircle, TrendingUp,
  FileText, Users, ShieldCheck, ClipboardCheck, Zap,
} from 'lucide-react'

const steps = [
  { label: 'Loan Intake', to: '/loan-intake', active: false },
  { label: 'Underwriting', to: '/underwriting', active: false },
  { label: 'Compliance', to: '/compliance-monitoring', active: false },
  { label: 'Audit Reporting', to: '/audit-reporting', active: false },
  { label: 'Full Workflow', to: '/mortgage-workflow', active: true },
]

const workflowSteps = [
  {
    step: '1',
    icon: FileText,
    title: 'Loan Intake',
    desc: 'Documents arrive from any source — email, portal, API, or scan. The system ingests, extracts, and validates data automatically, flagging missing information before the loan moves forward.',
    link: '/loan-intake',
  },
  {
    step: '2',
    icon: Users,
    title: 'Underwriting',
    desc: 'Validated data flows into the underwriting engine where AI models score risk, recommend decisions, and enforce policy boundaries. Routine approvals proceed automatically; exceptions route to senior underwriters.',
    link: '/underwriting',
  },
  {
    step: '3',
    icon: ShieldCheck,
    title: 'Compliance Monitoring',
    desc: 'Every decision is evaluated against real-time regulatory feeds. TRID, RESPA, HMDA, and state-level requirements are enforced automatically. Pre-closing checks verify completeness before the loan reaches settlement.',
    link: '/compliance-monitoring',
  },
  {
    step: '4',
    icon: ClipboardCheck,
    title: 'Audit Reporting',
    desc: 'The complete loan lifecycle — from intake through closing — is recorded in tamper-evident logs. Examiner reports are generated on demand with full cryptographic verification of record integrity.',
    link: '/audit-reporting',
  },
]

export default function MortgageWorkflowPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const workflowRef = useRef(null)
  const workflowInView = useInView(workflowRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white relative">
      {/* Hero */}
      <section className="pt-[90px] pb-16 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
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
              <span>Mortgage Workflow</span>
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
                  <Zap className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">COMPLETE WORKFLOW</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                How All Four Stages<br />Work Together<span className="text-gold">.</span>
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
                className="text-[1rem] text-slate-400 leading-[1.72] max-w-[480px]"
              >
                Four stages. One platform. Every loan moves through intake, underwriting, compliance, and audit — with full automation, policy enforcement, and cryptographic verification at every step.
              </motion.p>
            </div>

            {/* SVG: Complete Workflow Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="wf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="wf-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="wf-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#wf-bg)" />
                <rect width="800" height="400" fill="url(#wf-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#wf-glow)" />

                {/* Four stage boxes */}
                {[
                  { x: 60, label: 'INTAKE', icon: 'doc' },
                  { x: 250, label: 'UNDERWRITE', icon: 'risk' },
                  { x: 440, label: 'COMPLY', icon: 'shield' },
                  { x: 630, label: 'AUDIT', icon: 'check' },
                ].map((stage, i) => (
                  <g key={stage.label}>
                    <rect x={stage.x} y="120" width="120" height="160" rx="10" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="0.8" />
                    <rect x={stage.x + 10} y="135" width="100" height="80" rx="6" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.5" />
                    <circle cx={stage.x + 60} cy="175" r="20" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1" />
                    {stage.icon === 'doc' && <rect x={stage.x + 50} y="165" width="20" height="20" rx="3" fill="none" stroke="#c89b3c" strokeWidth="1.2" />}
                    {stage.icon === 'risk' && <path d={`M${stage.x + 60},165 L${stage.x + 60},185 M${stage.x + 50},175 L${stage.x + 70},175`} stroke="#c89b3c" strokeWidth="1.2" />}
                    {stage.icon === 'shield' && <path d={`M${stage.x + 60},165 L${stage.x + 70},170 L${stage.x + 70},180 Q${stage.x + 70},186 ${stage.x + 60},188 Q${stage.x + 50},186 ${stage.x + 50},180 L${stage.x + 50},170 Z`} fill="none" stroke="#c89b3c" strokeWidth="1.2" />}
                    {stage.icon === 'check' && <path d={`M${stage.x + 52},175 L${stage.x + 58},181 L${stage.x + 70},167`} fill="none" stroke="#c89b3c" strokeWidth="1.5" />}
                    <text x={stage.x + 60} y="250" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" textAnchor="middle" letterSpacing="0.1em">{stage.label}</text>
                    <text x={stage.x + 60} y="265" fontFamily="Inter, sans-serif" fontSize="6" fontWeight="600" fill="#c89b3c" textAnchor="middle" opacity="0.5">STEP {i + 1}</text>
                    <circle cx={stage.x + 60} cy="200" r="4" fill="#c89b3c" opacity="0.5">
                      <animate attributeName="r" values="4;8;4" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Flow arrows */}
                {[180, 370, 560].map((x, i) => (
                  <g key={i}>
                    <line x1={x} y1="200" x2={x + 40} y2="200" stroke="#c89b3c" strokeWidth="1" opacity="0.4" />
                    <polygon points={`${x + 40},196 ${x + 48},200 ${x + 40},204`} fill="#c89b3c" opacity="0.4" />
                    <circle r="2.5" fill="#c89b3c" opacity="0.7">
                      <animate attributeName="cx" values={`${x};${x + 48}`} dur="1.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">COMPLETE MORTGAGE WORKFLOW</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">End-to-End Workflow</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step Navigation */}
      <section className="py-6 bg-[#0a1628] border-t border-white/5">
        <div className="container-site">
          <div className="flex items-center justify-center gap-2">
            {steps.map((step, i) => (
              <Link key={step.to} to={step.to} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.7rem] font-bold transition-all duration-300 ${step.active ? 'bg-gold text-navy' : 'bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/70'}`}>
                  {i + 1}
                </div>
                <span className={`text-[0.68rem] font-bold tracking-[0.1em] uppercase hidden sm:inline ${step.active ? 'text-gold' : 'text-white/40'}`}>{step.label}</span>
                {i < steps.length - 1 && <div className="w-6 h-px bg-white/10" />}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-16 bg-white relative overflow-hidden" ref={workflowRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            THE COMPLETE LIFECYCLE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Four Stages. One Platform.<span className="text-gold">.</span>
          </motion.h2>

          <div className="space-y-8">
            {workflowSteps.map(({ step, icon: Icon, title, desc, link }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={link} className="block">
                  <div className="bg-[#f8f7f4] rounded-2xl p-8 border border-gray-100 hover:border-gold/20 transition-all duration-300 group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-1 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-heading font-bold text-[1rem]">{step}</div>
                      </div>
                      <div className="lg:col-span-2">
                        <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="lg:col-span-7">
                        <h3 className="font-heading text-[1.1rem] font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-200">{title}</h3>
                        <p className="text-[0.88rem] text-slate leading-relaxed">{desc}</p>
                      </div>
                      <div className="lg:col-span-2 flex justify-end">
                        <ArrowRight className="w-5 h-5 text-gold/50 group-hover:text-gold group-hover:translate-x-2 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
                {i < workflowSteps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-px h-8 bg-gold/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="py-12 bg-[#f8f7f4] border-t border-gray-100">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/audit-reporting" className="flex items-center gap-3 text-slate hover:text-navy transition-colors duration-200 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <div>
                <span className="text-[0.65rem] font-bold text-gold tracking-[0.15em] uppercase">Previous Step</span>
                <p className="text-[0.88rem] font-semibold">Audit Reporting</p>
              </div>
            </Link>
            <Link to="/loan-intake" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              START THE WORKFLOW: LOAN INTAKE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <TrendingUp className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              See the Full Mortgage Workflow in Action.
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a personalized demo to see how Pillars of Wisdom automates every stage of the loan lifecycle — from intake to audit.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Calendar className="w-4 h-4" />
              REQUEST DEMO
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
