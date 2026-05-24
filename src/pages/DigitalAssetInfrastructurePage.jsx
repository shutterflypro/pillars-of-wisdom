import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Box, Eye, BarChart3, Settings, Globe, Layers, Shield, ArrowRight,
  Calendar, CheckCircle, TrendingUp, Clock, Database,
} from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Secure Multi-Tenant Infrastructure',
    desc: 'Every institution operates within a dedicated, isolated environment with strict data boundaries. Tenant isolation is enforced at the data, network, and identity layers — ensuring your assets and workflows never intersect with other institutions.',
    benefits: ['Dedicated tenant environments', 'Data layer isolation', 'Network segmentation', 'Identity separation'],
  },
  {
    icon: Eye,
    title: 'Real-Time Transparency Framework',
    desc: 'Investors, regulators, and authorized stakeholders receive live visibility into asset performance, compliance status, and operational metrics. Dashboards are configurable by role, ensuring each party sees exactly what they need.',
    benefits: ['Role-configurable dashboards', 'Live performance metrics', 'Compliance status tracking', 'Stakeholder access controls'],
  },
  {
    icon: BarChart3,
    title: 'Automated Reporting Engine',
    desc: 'Investor statements, regulatory filings, and performance reports are generated automatically on schedule. Every report is version-controlled, auditable, and delivered through secure channels.',
    benefits: ['Scheduled report generation', 'Version-controlled outputs', 'Secure delivery channels', 'Regulatory filing support'],
  },
  {
    icon: Settings,
    title: 'Operational Oversight & Governance',
    desc: 'Policy enforcement, exception handling, and approval chains are built into every operational workflow. Nothing happens without authorization, and everything that happens is recorded.',
    benefits: ['Policy enforcement engine', 'Exception routing workflows', 'Multi-level approval chains', 'Complete audit trails'],
  },
]

const roadmapNetworks = [
  {
    icon: Globe,
    name: 'XRPL Integration',
    desc: 'High-throughput settlement rails for real-time transaction verification and cross-border payment orchestration.',
  },
  {
    icon: Layers,
    name: 'XDC Network',
    desc: 'Enterprise blockchain for trade finance provenance and cross-institutional document verification.',
  },
  {
    icon: Shield,
    name: 'ZBEC Protocol',
    desc: 'Optional digital settlement infrastructure for treasury operations and audit-linked payment orchestration.',
  },
]

export default function DigitalAssetInfrastructurePage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const roadmapRef = useRef(null)
  const roadmapInView = useInView(roadmapRef, { once: true, margin: '-40px' })
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
              <span>Digital Asset Infrastructure</span>
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
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">DIGITAL ASSET INFRASTRUCTURE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Institutional-Grade<br />Asset Management<span className="text-gold">.</span>
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
                Transparency, reporting, and operational oversight for regulated real-world assets. Pillars of Wisdom delivers the infrastructure that institutional investors and regulators expect.
              </motion.p>
            </div>

            {/* SVG: Institutional Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="dai-hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="dai-hero-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <filter id="dai-g">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="dai-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#dai-hero-bg)" />
                <rect width="800" height="400" fill="url(#dai-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#dai-hero-glow)" />

                {/* Architecture layers */}
                {[
                  { y: 60, label: 'INVESTOR PORTAL', w: 280, color: '#c89b3c' },
                  { y: 130, label: 'REPORTING ENGINE', w: 340, color: '#c89b3c' },
                  { y: 200, label: 'ASSET MANAGEMENT CORE', w: 400, color: '#c89b3c' },
                  { y: 270, label: 'SECURITY & GOVERNANCE', w: 340, color: '#4a90d9' },
                  { y: 340, label: 'INFRASTRUCTURE LAYER', w: 280, color: '#4a90d9' },
                ].map((layer, i) => (
                  <g key={layer.label}>
                    <rect x={400 - layer.w / 2} y={layer.y} width={layer.w} height="50" rx="6" fill="rgba(200,155,60,0.06)" stroke={layer.color} strokeWidth="0.8" opacity="0.7" />
                    <text x="400" y={layer.y + 29} fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill={layer.color} textAnchor="middle" letterSpacing="0.12em">{layer.label}</text>
                    {/* Animated connection lines */}
                    {i < 4 && (
                      <>
                        <line x1="400" y1={layer.y + 50} x2="400" y2={layer.y + 55} stroke={layer.color} strokeWidth="0.6" opacity="0.4" />
                        <circle r="1.5" fill={layer.color} opacity="0.6">
                          <animate attributeName="cy" values={`${layer.y + 50};${layer.y + 55}`} dur="1s" repeatCount="indefinite" />
                        </circle>
                      </>
                    )}
                  </g>
                ))}

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="390" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">INSTITUTIONAL ARCHITECTURE</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Infrastructure Active</span>
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
            INFRASTRUCTURE CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Built for Institutions That Cannot Compromise.<span className="text-gold">.</span>
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

      {/* Blockchain Roadmap */}
      <section className="py-16 bg-[#0a1628] relative overflow-hidden" ref={roadmapRef}>
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            FUTURE INTEGRATIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-white leading-[1.1] mb-4 text-center"
          >
            Blockchain Infrastructure Roadmap<span className="text-gold">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.88rem] text-slate-400 leading-relaxed max-w-[560px] mx-auto mb-10 text-center"
          >
            Pillars of Wisdom is designing integrations with enterprise blockchain infrastructure for institutional settlement, real-world asset tokenization, and cross-institutional verification.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {roadmapNetworks.map(({ icon: Icon, name, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h4 className="font-heading text-[0.95rem] font-bold text-white mb-2 text-center">{name}</h4>
                <p className="text-[0.78rem] text-slate-400 leading-relaxed text-center">{desc}</p>
                <div className="flex items-center justify-center gap-1.5 mt-4">
                  <Clock className="w-3 h-3 text-gold/50" />
                  <span className="text-[0.65rem] font-bold text-gold/60 tracking-[0.1em] uppercase">In Development</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
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
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-navy leading-[1.15] mb-4">
                The Future of Asset Management Is Here.
              </h2>
              <p className="text-[1rem] text-slate leading-[1.72] max-w-[560px] mx-auto mb-8">
                Institutions that adopt comprehensive digital asset infrastructure today will lead their markets tomorrow. Pillars of Wisdom gives you the platform — with governance, transparency, and the future-ready architecture that regulators and investors demand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-7 h-7 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white leading-[1.15] mb-4">
              Ready to Deploy Institutional<br />Asset Infrastructure?
            </h2>
            <p className="text-[1rem] text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
              Contact our team to discuss mortgage operations, regulated workflows, asset lifecycle management, and future blockchain integrations. Your deployment assessment starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-[0.78rem]"
              >
                <Calendar className="w-4 h-4" />
                START DEPLOYMENT ASSESSMENT
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/30 text-gold text-[0.72rem] font-bold tracking-[0.12em] uppercase rounded-lg hover:bg-gold/10 transition-all duration-300"
              >
                VIEW PRICING
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
