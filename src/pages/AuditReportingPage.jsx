import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ClipboardCheck, ArrowRight, ArrowLeft, Calendar, CheckCircle,
  FileText, Eye, Shield, TrendingUp,
} from 'lucide-react'

const steps = [
  { label: 'Loan Intake', to: '/loan-intake', active: false },
  { label: 'Underwriting', to: '/underwriting', active: false },
  { label: 'Compliance', to: '/compliance-monitoring', active: false },
  { label: 'Audit Reporting', to: '/audit-reporting', active: true },
  { label: 'Full Workflow', to: '/mortgage-workflow', active: false },
]

const features = [
  {
    icon: FileText,
    title: 'Complete Activity Logs',
    desc: 'Every action taken on a loan — from initial intake through closing — is recorded with full context. Who did what, when, and why is captured automatically, creating a complete institutional record that satisfies examiner requirements.',
    benefits: ['Automatic action recording', 'Full context capture', 'User attribution tracking', 'Timestamp precision'],
  },
  {
    icon: Shield,
    title: 'Tamper-Evident Records',
    desc: 'Audit logs are cryptographically secured so that any attempt to alter or delete records is immediately detectable. This gives examiners confidence in the integrity of your institutional controls and satisfies regulatory requirements for record preservation.',
    benefits: ['Cryptographic log security', 'Alteration detection', 'Deletion prevention', 'Record integrity verification'],
  },
  {
    icon: Eye,
    title: 'One-Click Examiner Reports',
    desc: 'When regulators request documentation, comprehensive audit packages are generated automatically. Reports include complete loan histories, compliance verification records, and policy enforcement evidence — eliminating days of manual compilation.',
    benefits: ['Automated report generation', 'Complete loan histories', 'Compliance verification included', 'Policy enforcement evidence'],
  },
  {
    icon: ClipboardCheck,
    title: 'Cryptographic Verification',
    desc: 'Every audit record includes a cryptographic hash that verifies its authenticity. Examiners can independently verify that records have not been altered since they were created — providing the highest level of assurance for regulatory compliance.',
    benefits: ['Hash-based verification', 'Independent authenticity checks', 'Creation timestamp validation', 'Highest assurance level'],
  },
]

export default function AuditReportingPage() {
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
              <span>Audit Reporting</span>
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
                  <ClipboardCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">STEP 4: AUDIT REPORTING</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Examiner-Ready Audit<br />Trails<span className="text-gold">.</span>
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
                Every action, decision, and data change is logged, timestamped, and tamper-evident. Regulators receive complete activity reports without manual compilation — reducing examination preparation from weeks to minutes.
              </motion.p>
            </div>

            {/* SVG: Audit Trail Chain */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="ar-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="ar-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="ar-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#ar-bg)" />
                <rect width="800" height="400" fill="url(#ar-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#ar-glow)" />

                {/* Chain links */}
                {[
                  { x: 100, label: 'INTAKE' },
                  { x: 250, label: 'VALIDATE' },
                  { x: 400, label: 'UNDERWRITE' },
                  { x: 550, label: 'COMPLY' },
                  { x: 700, label: 'AUDIT' },
                ].map((link, i) => (
                  <g key={link.label}>
                    {/* Chain link shape */}
                    <rect x={link.x - 30} y="160" width="60" height="80" rx="30" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="1" />
                    <rect x={link.x - 20} y="170" width="40" height="60" rx="20" fill="none" stroke="#c89b3c" strokeWidth="0.5" opacity="0.4" />
                    <text x={link.x} y="205" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="#c89b3c" textAnchor="middle" letterSpacing="0.05em">{link.label}</text>
                    {/* Hash indicator */}
                    <text x={link.x} y="260" fontFamily="monospace" fontSize="6" fill="#c89b3c" textAnchor="middle" opacity="0.4">#{(i + 1).toString(16).padStart(4, '0')}</text>
                    {/* Animated pulse */}
                    <circle cx={link.x} cy="200" r="4" fill="#c89b3c" opacity="0.5">
                      <animate attributeName="r" values="4;8;4" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Connection lines between links */}
                {[130, 280, 430, 580].map((x, i) => (
                  <g key={i}>
                    <line x1={x} y1="200" x2={x + 40} y2="200" stroke="#c89b3c" strokeWidth="0.8" opacity="0.3" />
                    <circle r="2" fill="#c89b3c" opacity="0.6">
                      <animate attributeName="cx" values={`${x};${x + 40}`} dur="1.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">AUDIT TRAIL CHAIN</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Audit Trail Active</span>
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
            AUDIT CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Every Record. Verifiable.<span className="text-gold">.</span>
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

      {/* Prev/Next Navigation */}
      <section className="py-12 bg-[#f8f7f4] border-t border-gray-100">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/compliance-monitoring" className="flex items-center gap-3 text-slate hover:text-navy transition-colors duration-200 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <div>
                <span className="text-[0.65rem] font-bold text-gold tracking-[0.15em] uppercase">Previous Step</span>
                <p className="text-[0.88rem] font-semibold">Compliance Monitoring</p>
              </div>
            </Link>
            <Link to="/mortgage-workflow" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              VIEW FULL WORKFLOW
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
              Examiner-Ready. Always.
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              See how Pillars of Wisdom transforms audit preparation from a weeks-long scramble into a one-click process.
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
