import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Box, FileText, Users, BarChart3, Clock, Globe, ArrowRight,
  Calendar, CheckCircle, TrendingUp, Eye, Shield,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Asset Onboarding & Due Diligence',
    desc: 'Comprehensive asset intake with automated document collection, verification workflows, and risk assessment. Every asset receives a complete provenance record from day one.',
    benefits: ['Automated document collection', 'Verification workflow engine', 'Risk assessment scoring', 'Provenance record creation'],
  },
  {
    icon: Box,
    title: 'Token Issuance & Investor Onboarding (Roadmap)',
    desc: 'Future support for tokenized asset issuance with integrated KYC/AML verification, investor accreditation checks, and compliance-aware ownership records.',
    benefits: ['KYC/AML integration', 'Accreditation verification', 'Compliance-aware issuance', 'Investor portal access'],
  },
  {
    icon: BarChart3,
    title: 'Ongoing Investor Reporting',
    desc: 'Automated report generation and distribution keeps investors informed with performance data, compliance status, and portfolio analytics — on schedule, every time.',
    benefits: ['Scheduled report generation', 'Investor portal access', 'Performance analytics', 'Regulatory filing support'],
  },
  {
    icon: Clock,
    title: 'Lifecycle Events & Corporate Actions',
    desc: 'Dividend distributions, maturity events, and corporate actions are tracked and executed automatically with full audit trails and investor notifications.',
    benefits: ['Automated event processing', 'Investor notification system', 'Audit trail maintenance', 'Multi-asset support'],
  },
  {
    icon: Eye,
    title: 'Transparency & Ownership Records',
    desc: 'Complete ownership visibility with tamper-evident records. Every transfer, encumbrance, and disposition is tracked and verifiable by authorized parties.',
    benefits: ['Real-time ownership tracking', 'Tamper-evident records', 'Transfer verification', 'Authorized party access'],
  },
]

export default function AssetLifecyclePage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white relative">
      {/* Hero */}
      <section className="pt-[90px] pb-16 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
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
              <span>Asset Lifecycle Management</span>
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
                  <Box className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">ASSET LIFECYCLE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                End-to-End Asset<br />Oversight<span className="text-gold">.</span>
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
                From due diligence to investor reporting — complete visibility at every stage. Pillars of Wisdom manages the entire asset lifecycle with the transparency and controls institutional investors demand.
              </motion.p>
            </div>

            {/* SVG: Asset Lifecycle Circular Flow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="asset-hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="asset-hero-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <filter id="asset-g">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="asset-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#asset-hero-bg)" />
                <rect width="800" height="400" fill="url(#asset-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#asset-hero-glow)" />

                {/* Circular lifecycle */}
                <circle cx="400" cy="200" r="100" fill="none" stroke="#c89b3c" strokeWidth="0.8" opacity="0.3" />
                <circle cx="400" cy="200" r="70" fill="none" stroke="#c89b3c" strokeWidth="0.5" opacity="0.2" />

                {/* Lifecycle stages on the circle */}
                {[
                  { angle: 0, label: 'ONBOARD', x: 500, y: 200 },
                  { angle: 72, label: 'ISSUE', x: 462, y: 295 },
                  { angle: 144, label: 'REPORT', x: 338, y: 295 },
                  { angle: 216, label: 'EVENTS', x: 278, y: 200 },
                  { angle: 288, label: 'VERIFY', x: 338, y: 105 },
                ].map((stage, i) => (
                  <g key={stage.label}>
                    <circle cx={stage.x} cy={stage.y} r="22" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="1" />
                    <circle cx={stage.x} cy={stage.y} r="14" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="0.5" />
                    <text x={stage.x} y={stage.y + 4} fontFamily="Inter, sans-serif" fontSize="6" fontWeight="700" fill="#c89b3c" textAnchor="middle" letterSpacing="0.05em">{stage.label}</text>
                    {/* Animated pulse */}
                    <circle cx={stage.x} cy={stage.y} r="3" fill="#c89b3c" opacity="0.6">
                      <animate attributeName="r" values="3;8;3" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Flow arrows between stages */}
                {[
                  { from: { x: 500, y: 200 }, to: { x: 462, y: 295 } },
                  { from: { x: 462, y: 295 }, to: { x: 338, y: 295 } },
                  { from: { x: 338, y: 295 }, to: { x: 278, y: 200 } },
                  { from: { x: 278, y: 200 }, to: { x: 338, y: 105 } },
                  { from: { x: 338, y: 105 }, to: { x: 500, y: 200 } },
                ].map((arrow, i) => (
                  <g key={i}>
                    <line x1={arrow.from.x} y1={arrow.from.y} x2={arrow.to.x} y2={arrow.to.y} stroke="#c89b3c" strokeWidth="0.6" opacity="0.3" strokeDasharray="3,3" />
                    <circle r="2" fill="#c89b3c" opacity="0.7">
                      <animateMotion dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={`M${arrow.from.x},${arrow.from.y} L${arrow.to.x},${arrow.to.y}`} />
                    </circle>
                  </g>
                ))}

                {/* Center hub */}
                <circle cx="400" cy="200" r="30" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="1" />
                <text x="400" y="197" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="#c89b3c" textAnchor="middle">ASSET</text>
                <text x="400" y="207" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="#c89b3c" textAnchor="middle">LIFECYCLE</text>

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="375" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">ASSET LIFECYCLE FLOW</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em]uppercase">Lifecycle Tracking Active</span>
              </div>
            </motion.div>
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
            LIFECYCLE CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Complete Asset Visibility.<span className="text-gold">.</span>
          </motion.h2>

          <div className="space-y-6">
            {features.map(({ icon: Icon, title, desc, benefits }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
                    {title.includes('Roadmap') && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <Clock className="w-3 h-3 text-gold/60" />
                        <span className="text-[0.68rem] font-bold text-gold/70 tracking-[0.1em] uppercase">Future Capability</span>
                      </div>
                    )}
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
                <Globe className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-white leading-[1.15] mb-4">
                Institutional Investors Demand Transparency.
              </h2>
              <p className="text-[1rem] text-slate-400 leading-[1.72] max-w-[560px] mx-auto mb-8">
                The future of asset management is transparent, verifiable, and automated. Institutions that adopt comprehensive lifecycle management attract more capital, reduce operational risk, and maintain investor confidence through every market cycle. Pillars of Wisdom positions you ahead of the curve.
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
                  <Shield className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  <span className="text-gold text-[0.7rem] font-bold tracking-[0.2em] uppercase">NEXT: DIGITAL ASSET INFRASTRUCTURE</span>
                </div>
                <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
                  The Infrastructure Behind Institutional Asset Management.
                </h2>
                <p className="text-[0.92rem] text-slate-300 leading-relaxed">
                  Asset lifecycle management runs on secure, scalable infrastructure. See how Pillars of Wisdom delivers the transparency, reporting, and operational oversight that regulated institutions require for real-world asset management.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link
                  to="/digital-asset-infrastructure"
                  className="btn-gold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  EXPLORE INFRASTRUCTURE
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
