import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Users, ArrowRight, ArrowLeft, Calendar, CheckCircle,
  Brain, Shield, TrendingUp, BarChart3,
} from 'lucide-react'

const steps = [
  { label: 'Loan Intake', to: '/loan-intake', active: false },
  { label: 'Underwriting', to: '/underwriting', active: true },
  { label: 'Compliance', to: '/compliance-monitoring', active: false },
  { label: 'Audit Reporting', to: '/audit-reporting', active: false },
  { label: 'Full Workflow', to: '/mortgage-workflow', active: false },
]

const features = [
  {
    icon: Brain,
    title: 'Automated Risk Scoring',
    desc: 'Machine learning models evaluate borrower risk across multiple dimensions — credit history, income stability, debt-to-income ratios, and employment patterns. Scores are generated in real time with full explainability for regulatory review.',
    benefits: ['Multi-dimensional risk models', 'Real-time score generation', 'Explainable AI outputs', 'Regulatory review support'],
  },
  {
    icon: BarChart3,
    title: 'Decision Support Engine',
    desc: 'Underwriters receive prioritized recommendations with supporting data, risk factors, and policy alignment scores. The system highlights areas requiring human judgment while automating routine approvals within defined thresholds.',
    benefits: ['Prioritized recommendations', 'Supporting data aggregation', 'Policy alignment scoring', 'Automated routine approvals'],
  },
  {
    icon: Shield,
    title: 'Policy-Compliant Decisioning',
    desc: 'Every underwriting decision is evaluated against institutional policies and regulatory requirements before approval. Decisions that fall outside policy boundaries are automatically routed to senior underwriters with full context.',
    benefits: ['Policy boundary enforcement', 'Automatic exception routing', 'Senior underwriter escalation', 'Full decision context'],
  },
  {
    icon: TrendingUp,
    title: 'Continuous Model Improvement',
    desc: 'Underwriting models learn from historical outcomes, default patterns, and regulatory feedback. Performance metrics are tracked continuously, and model drift is detected and addressed before it impacts decision quality.',
    benefits: ['Historical outcome learning', 'Default pattern analysis', 'Regulatory feedback integration', 'Model drift detection'],
  },
]

export default function UnderwritingPage() {
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
        <div className="absolute top-1/4 left-0 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
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
              <span>Underwriting</span>
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
                  <Users className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">STEP 2: UNDERWRITING</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Intelligent Risk<br />Assessment & Decisioning<span className="text-gold">.</span>
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
                AI-assisted underwriting that evaluates risk, supports decisions, and enforces policy — all while maintaining the human oversight that regulators and borrowers expect.
              </motion.p>
            </div>

            {/* SVG: Risk Assessment Matrix */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="uw-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="uw-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="uw-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#uw-bg)" />
                <rect width="800" height="400" fill="url(#uw-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#uw-glow)" />

                {/* Risk matrix grid */}
                <g transform="translate(200, 80)">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map(i => (
                    <g key={i}>
                      <line x1={i * 100} y1="0" x2={i * 100} y2="200" stroke="#c89b3c" strokeWidth="0.4" opacity="0.2" />
                      <line x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="#c89b3c" strokeWidth="0.4" opacity="0.2" />
                    </g>
                  ))}
                  {/* Risk zones */}
                  <rect x="0" y="0" width="200" height="100" fill="rgba(200,155,60,0.05)" stroke="#c89b3c" strokeWidth="0.5" />
                  <rect x="200" y="0" width="200" height="100" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.5" />
                  <rect x="0" y="100" width="200" height="100" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.5" />
                  <rect x="200" y="100" width="200" height="100" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="0.5" />

                  {/* Labels */}
                  <text x="100" y="55" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" textAnchor="middle" opacity="0.6">LOW RISK</text>
                  <text x="300" y="55" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" textAnchor="middle" opacity="0.7">MODERATE</text>
                  <text x="100" y="155" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" textAnchor="middle" opacity="0.7">MODERATE</text>
                  <text x="300" y="155" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" textAnchor="middle" opacity="0.8">HIGH RISK</text>

                  {/* Data points */}
                  {[
                    { x: 80, y: 40, r: 5 }, { x: 120, y: 60, r: 4 }, { x: 160, y: 30, r: 6 },
                    { x: 250, y: 70, r: 5 }, { x: 280, y: 50, r: 4 }, { x: 310, y: 80, r: 5 },
                    { x: 100, y: 130, r: 4 }, { x: 140, y: 150, r: 5 }, { x: 180, y: 120, r: 4 },
                    { x: 260, y: 140, r: 5 }, { x: 300, y: 160, r: 6 }, { x: 340, y: 130, r: 4 },
                  ].map((pt, i) => (
                    <circle key={i} cx={pt.x} cy={pt.y} r={pt.r} fill="rgba(200,155,60,0.3)" stroke="#c89b3c" strokeWidth="0.8">
                      <animate attributeName="r" values={`${pt.r};${pt.r + 2};${pt.r}`} dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                    </circle>
                  ))}

                  {/* Axis labels */}
                  <text x="200" y="220" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#c89b3c" textAnchor="middle" opacity="0.5">CREDIT SCORE →</text>
                  <text x="-100" y="10" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#c89b3c" textAnchor="middle" opacity="0.5" transform="rotate(-90, -100, 10)">DTI RATIO →</text>
                </g>

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">RISK ASSESSMENT MATRIX</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Risk Analysis Active</span>
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
            UNDERWRITING CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            AI-Assisted. Human-Guided.<span className="text-gold">.</span>
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
            <Link to="/loan-intake" className="flex items-center gap-3 text-slate hover:text-navy transition-colors duration-200 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <div>
                <span className="text-[0.65rem] font-bold text-gold tracking-[0.15em] uppercase">Previous Step</span>
                <p className="text-[0.88rem] font-semibold">Loan Intake</p>
              </div>
            </Link>
            <Link to="/compliance-monitoring" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              NEXT: COMPLIANCE MONITORING
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
              Smarter Underwriting. Better Decisions.
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              See how AI-assisted underwriting reduces risk while accelerating approvals — with full policy compliance and auditability.
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
