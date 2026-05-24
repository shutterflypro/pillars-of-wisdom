import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FileText, Users, ShieldCheck, ClipboardCheck, ArrowRight, Calendar,
  CheckCircle, TrendingUp, Zap, Eye, Clock, Building2,
} from 'lucide-react'

const stats = [
  { value: '85%', label: 'Faster Processing' },
  { value: '99.9%', label: 'Accuracy Rate' },
  { value: '3x', label: 'Throughput Increase' },
  { value: '60%', label: 'Cost Reduction' },
]

const features = [
  {
    icon: FileText,
    title: 'Automated Document Capture',
    desc: 'Intelligent OCR and data extraction process loan applications in minutes — not hours. Missing documents are flagged instantly, reducing back-and-forth with borrowers and accelerating time-to-decision.',
    benefits: ['Multi-format document ingestion', 'Real-time data validation', 'Missing document detection', 'Automated borrower notifications'],
  },
  {
    icon: Users,
    title: 'AI-Assisted Underwriting',
    desc: 'Risk models and decision support engines evaluate every application against institutional policies and regulatory requirements. Underwriters receive prioritized recommendations with full audit trails.',
    benefits: ['Automated risk scoring', 'Policy-compliant decisioning', 'Exception routing to specialists', 'Continuous model improvement'],
  },
  {
    icon: ShieldCheck,
    title: 'Continuous Compliance Monitoring',
    desc: 'TRID, RESPA, HMDA, and state-level regulations monitored in real time. Policy enforcement is built into every workflow step — not bolted on after the fact.',
    benefits: ['Real-time regulatory feeds', 'Automated policy enforcement', 'Pre-closing compliance checks', 'Multi-jurisdiction support'],
  },
  {
    icon: ClipboardCheck,
    title: 'Examiner-Ready Audit Trails',
    desc: 'Every action, decision, and data change is logged, timestamped, and tamper-evident. Regulators receive complete activity reports without manual compilation.',
    benefits: ['Complete activity logs', 'Tamper-evident records', 'One-click examiner reports', 'Cryptographic verification'],
  },
]

export default function MortgageOperationsPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white relative">
      {/* Hero */}
      <section className="pt-[90px] pb-16 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
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
              <span>Mortgage Operations</span>
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
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">MORTGAGE OPERATIONS</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                AI-Powered Loan<br />Lifecycle Management<span className="text-gold">.</span>
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
                From intake to closing — every step automated, audited, and compliance-verified. Pillars of Wisdom replaces fragmented mortgage tooling with a single governed platform.
              </motion.p>
            </div>

            {/* SVG: Loan Processing Pipeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="mort-hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="mort-hero-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <filter id="mort-g">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="mort-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#mort-hero-bg)" />
                <rect width="800" height="400" fill="url(#mort-dots)" />
                <ellipse cx="400" cy="200" rx="300" ry="160" fill="url(#mort-hero-glow)" />

                {/* Pipeline stages */}
                {[
                  { x: 100, label: 'INTAKE', icon: 'doc' },
                  { x: 270, label: 'VALIDATE', icon: 'check' },
                  { x: 440, label: 'UNDERWRITE', icon: 'risk' },
                  { x: 610, label: 'CLOSE', icon: 'shield' },
                ].map((stage, i) => (
                  <g key={stage.label}>
                    {/* Stage box */}
                    <rect x={stage.x} y="140" width="100" height="120" rx="8" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.8" opacity="0.8" />
                    <rect x={stage.x + 10} y="155" width="80" height="60" rx="4" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.5" />
                    {/* Icon placeholder */}
                    <circle cx={stage.x + 50} cy="185" r="16" fill="rgba(200,155,60,0.2)" stroke="#c89b3c" strokeWidth="1" filter="url(#mort-g)" />
                    {stage.icon === 'doc' && <rect x={stage.x + 42} y="177" width="16" height="16" rx="2" fill="none" stroke="#c89b3c" strokeWidth="1.2" />}
                    {stage.icon === 'check' && <path d={`M${stage.x + 42},185 L${stage.x + 48},191 L${stage.x + 58},179`} fill="none" stroke="#c89b3c" strokeWidth="1.5" />}
                    {stage.icon === 'risk' && <path d={`M${stage.x + 50},175 L${stage.x + 50},195 M${stage.x + 42},185 L${stage.x + 58},185`} stroke="#c89b3c" strokeWidth="1.2" />}
                    {stage.icon === 'shield' && <path d={`M${stage.x + 50},175 L${stage.x + 58},180 L${stage.x + 58},190 Q${stage.x + 58},196 ${stage.x + 50},198 Q${stage.x + 42},196 ${stage.x + 42},190 L${stage.x + 42},180 Z`} fill="none" stroke="#c89b3c" strokeWidth="1.2" />}
                    {/* Label */}
                    <text x={stage.x + 50} y="285" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#c89b3c" textAnchor="middle" letterSpacing="0.1em">{stage.label}</text>
                    {/* Animated pulse */}
                    <circle cx={stage.x + 50} cy="200" r="3" fill="#c89b3c" opacity="0.6">
                      <animate attributeName="r" values="3;6;3" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Flow arrows between stages */}
                {[190, 360, 530].map((x, i) => (
                  <g key={i}>
                    <line x1={x} y1="200" x2={x + 20} y2="200" stroke="#c89b3c" strokeWidth="1" opacity="0.4" />
                    <polygon points={`${x + 20},196 ${x + 28},200 ${x + 20},204`} fill="#c89b3c" opacity="0.4" />
                    {/* Animated particle */}
                    <circle r="2" fill="#c89b3c" opacity="0.8">
                      <animate attributeName="cx" values={`${x};${x + 28}`} dur="1.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">MORTGAGE LIFECYCLE PIPELINE</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Automated Pipeline</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#0a1628]" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="font-heading text-[2rem] lg:text-[2.5rem] font-bold text-gold leading-none">{stat.value}</div>
                <div className="text-[0.72rem] font-bold text-white/70 uppercase tracking-[0.12em] mt-1.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white relative overflow-hidden" ref={featuresRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            LOAN LIFECYCLE CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Every Stage. Fully Automated.<span className="text-gold">.</span>
          </motion.h2>

          <div className="space-y-6">
            {features.map(({ icon: Icon, title, desc, benefits }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#f8f7f4] rounded-2xl p-8 border border-gray-100 hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <h3 className="font-heading text-[1.1rem] font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-200">{title}</h3>
                    <p className="text-[0.88rem] text-slate leading-relaxed">{desc}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-2">
                      {benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={2} />
                          <span className="text-[0.75rem] text-navy/80">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-16 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-white leading-[1.15] mb-4">
                Your Competitors Are Already Automating.
              </h2>
              <p className="text-[1rem] text-slate-400 leading-[1.72] max-w-[560px] mx-auto mb-8">
                Institutions that adopt AI-powered mortgage operations close loans faster, reduce errors, and maintain perfect compliance records. Pillars of Wisdom gives you the same advantage — with full governance and auditability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next step CTA */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  <span className="text-gold text-[0.7rem] font-bold tracking-[0.2em] uppercase">NEXT: REGULATED OPERATIONS</span>
                </div>
                <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
                  See How Compliance Is Enforced at Every Layer.
                </h2>
                <p className="text-[0.92rem] text-slate-300 leading-relaxed">
                  Mortgage operations are only as strong as the policy controls behind them. Discover how Pillars of Wisdom enforces regulatory requirements automatically — so your team can focus on closing, not checking.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link
                  to="/regulated-operations"
                  className="btn-gold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  EXPLORE REGULATED OPERATIONS
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/30 text-gold text-[0.72rem] font-bold tracking-[0.12em] uppercase rounded-lg hover:bg-gold/10 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  REQUEST DEMO
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
