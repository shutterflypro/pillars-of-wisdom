import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Landmark, Shield, FileCheck, Users, Database, Lock, ArrowRight,
  Calendar, CheckCircle, TrendingUp, Eye, Clock,
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Policy-Based Controls & Approvals',
    desc: 'Every workflow step is governed by institutional policies that cannot be bypassed. Approval chains enforce segregation of duties, and exceptions are routed to authorized personnel with full audit trails.',
    benefits: ['Configurable rule engine', 'Multi-level approval chains', 'Exception handling workflows', 'Policy version tracking'],
  },
  {
    icon: FileCheck,
    title: 'Regulatory Reporting & Audit Trails',
    desc: 'Automated report generation for federal, state, and jurisdictional requirements. Every regulatory filing is tracked, timestamped, and verifiable — eliminating manual compilation and reducing examiner preparation time.',
    benefits: ['Automated filing generation', 'Multi-jurisdiction support', 'Deadline tracking & alerts', 'One-click examiner packages'],
  },
  {
    icon: Users,
    title: 'Role-Based Access & Segregation',
    desc: 'Least-privilege access enforcement ensures users only see and act on data relevant to their role. Segregation of duties prevents conflicts of interest and satisfies regulatory requirements for institutional controls.',
    benefits: ['Granular role definitions', 'Dynamic access provisioning', 'Segregation of duties enforcement', 'MFA and session management'],
  },
  {
    icon: Database,
    title: 'Data Governance & Retention',
    desc: 'Automated data classification, retention scheduling, and secure disposal ensure your institution meets regulatory requirements without manual intervention. Data lineage is tracked from creation through disposition.',
    benefits: ['Automated data classification', 'Retention policy enforcement', 'Secure data disposal', 'Complete data lineage tracking'],
  },
  {
    icon: Lock,
    title: 'Immutable Audit Records',
    desc: 'Every action, access, and decision is recorded in tamper-evident logs. Cryptographic verification ensures records cannot be altered without detection — giving examiners confidence in your institutional controls.',
    benefits: ['Tamper-evident logging', 'Cryptographic verification', 'Real-time audit monitoring', 'Examiner self-service access'],
  },
]

const complianceFrameworks = [
  { name: 'SOC 2-Ready', status: 'Architecture aligned' },
  { name: 'HIPAA-Aware', status: 'Workflow configured' },
  { name: 'PCI-Aligned', status: 'Controls in place' },
  { name: 'GDPR', status: 'Data governance ready' },
  { name: 'FedRAMP-Oriented', status: 'Deployment planned' },
]

export default function RegulatedOperationsPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const frameworkRef = useRef(null)
  const frameworkInView = useInView(frameworkRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white relative">
      {/* Hero */}
      <section className="pt-[90px] pb-16 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
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
              <span>Regulated Operations</span>
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
                  <Landmark className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">REGULATED OPERATIONS</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Policy Controls Built<br />Into Every Process<span className="text-gold">.</span>
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
                Regulatory infrastructure that protects your institution at every layer. Policy enforcement is not an afterthought — it is the foundation of every workflow.
              </motion.p>
            </div>

            {/* SVG: Policy Enforcement Shield */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="reg-hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="reg-hero-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <filter id="reg-g">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="reg-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#reg-hero-bg)" />
                <rect width="800" height="400" fill="url(#reg-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#reg-hero-glow)" />

                {/* Central shield */}
                <path d="M400,80 L480,120 L480,240 Q480,310 400,340 Q320,310 320,240 L320,120 Z" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="1.2" />
                <path d="M400,100 L465,132 L465,235 Q465,295 400,320 Q335,295 335,235 L335,132 Z" fill="none" stroke="#c89b3c" strokeWidth="0.6" opacity="0.4" />

                {/* Policy layers inside shield */}
                {['ACCESS', 'POLICY', 'AUDIT', 'ENFORCE'].map((label, i) => {
                  const y = 145 + i * 45
                  return (
                    <g key={label}>
                      <rect x="355" y={y} width="90" height="30" rx="4" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.5" />
                      <text x="400" y={y + 19} fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" textAnchor="middle" letterSpacing="0.1em">{label}</text>
                      <circle cx="365" cy={y + 15} r="3" fill="#c89b3c" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  )
                })}

                {/* Checkmark at center */}
                <path d="M380,230 L395,245 L425,210" fill="none" stroke="#c89b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" filter="url(#reg-g)" />

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="375" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">POLICY ENFORCEMENT LAYERS</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Policy Enforcement Active</span>
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
            REGULATORY INFRASTRUCTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Controls That Cannot Be Bypassed.<span className="text-gold">.</span>
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

      {/* Compliance Frameworks */}
      <section className="py-16 bg-[#f8f7f4] border-t border-gray-100" ref={frameworkRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            COMPLIANCE ALIGNMENT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Framework-Ready Architecture<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {complianceFrameworks.map((fw, i) => (
              <motion.div
                key={fw.name}
                initial={{ opacity: 0, y: 16 }}
                animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
                <h4 className="font-heading text-[0.82rem] font-bold text-navy mb-1">{fw.name}</h4>
                <p className="text-[0.7rem] text-slate">{fw.status}</p>
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
                <Eye className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-white leading-[1.15] mb-4">
                Examiners Expect More. Deliver It.
              </h2>
              <p className="text-[1rem] text-slate-400 leading-[1.72] max-w-[560px] mx-auto mb-8">
                Regulatory scrutiny is intensifying across every sector. Institutions with automated policy controls, immutable audit trails, and framework-aligned architecture pass examinations faster — with fewer findings. Pillars of Wisdom gives you the infrastructure regulators expect.
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
                  <TrendingUp className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  <span className="text-gold text-[0.7rem] font-bold tracking-[0.2em] uppercase">NEXT: ASSET LIFECYCLE</span>
                </div>
                <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
                  Manage Assets From Onboarding Through Disposition.
                </h2>
                <p className="text-[0.92rem] text-slate-300 leading-relaxed">
                  Regulated operations protect your institution. Asset lifecycle management grows it. See how Pillars of Wisdom handles real-world asset onboarding, investor reporting, and ownership verification — all within the same governed platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link
                  to="/asset-lifecycle"
                  className="btn-gold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  EXPLORE ASSET LIFECYCLE
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
