import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Brain, Bot, Sparkles, RefreshCw, GitMerge, Eye,
  ArrowRight, Calendar, Check, Cpu, Network,
  Database, Shield, TrendingUp,
} from 'lucide-react'

const pillarStats = [
  { value: '6', label: 'AI Capability Areas' },
  { value: '95%', label: 'Processing Accuracy' },
  { value: '50+', label: 'Pre-Trained Models' },
  { value: '24/7', label: 'Continuous Learning' },
]

const capabilities = [
  { icon: Bot, title: 'Operational AI Agents', desc: 'Autonomous agents that execute workflows, process documents, and coordinate tasks across departments without human intervention.' },
  { icon: Sparkles, title: 'Intelligent Document Processing', desc: 'OCR, NLP, and ML models that extract, classify, and validate information from any document format with 95%+ accuracy.' },
  { icon: RefreshCw, title: 'Adaptive Learning', desc: 'AI that continuously improves from feedback, outcomes, and new data - getting smarter with every interaction.' },
  { icon: Network, title: 'Predictive Analytics', desc: 'Forecast bottlenecks, predict processing times, and identify risk patterns before they impact operations.' },
  { icon: GitMerge, title: 'Smart Decisioning', desc: 'Rule-based and ML-powered decision engines that route, approve, and escalate based on complex criteria.' },
  { icon: Eye, title: 'Anomaly Detection', desc: 'Real-time monitoring that flags unusual patterns, potential fraud, and compliance deviations automatically.' },
]

const benefits = [
  { icon: Cpu, title: 'Amplified Productivity', desc: 'AI handles routine work so your team focuses on complex decisions, strategy, and customer relationships.' },
  { icon: Database, title: 'Data-Driven Decisions', desc: 'Every recommendation backed by data, with confidence scores and reasoning visible to human reviewers.' },
  { icon: Shield, title: 'Governed AI', desc: 'Human-in-the-loop for critical decisions, full audit trails, and model governance built into every agent.' },
  { icon: TrendingUp, title: 'Continuous Improvement', desc: 'AI learns from every outcome, getting more accurate and efficient over time without manual retraining.' },
]

const useCases = [
  'Automated loan underwriting with AI risk assessment and human review',
  'Intelligent document classification and data extraction for compliance filing',
  'Predictive compliance monitoring with automated alert generation and escalation',
  'AI-assisted customer service with intelligent routing to human specialists',
]

const quoteData = {
  text: 'The AI does not replace our team - it amplifies them. Our people focus on complex decisions while AI handles the routine work.',
  source: 'Chief Innovation Officer, Top-20 US Bank',
}

export default function AIOrchestrationPage() {
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
              <span>Pillar II: AI Orchestration</span>
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
                  <Brain className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">PILLAR II - INTELLIGENCE LAYER</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                AI<br />Orchestration<span className="text-gold">.</span>
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
                The intelligence layer that improves your operational foundation. Deploy governed AI agents that automate workflows, assist teams, coordinate processes, and adapt across industries - all within a secure, auditable framework.
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
                  <linearGradient id="aiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0.02" />
                  </linearGradient>
                  <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* Glow */}
                <circle cx="250" cy="200" r="120" fill="url(#aiGlow)" />
                {/* Neural network connections */}
                {[[120, 100], [120, 200], [120, 300]].map(([x, y], i) =>
                  [[250, 80], [250, 200], [250, 320]].map(([x2, y2], j) => (
                    <line key={`c1-${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#c89b3c" strokeWidth="1" opacity="0.3" />
                  ))
                )}
                {[[250, 80], [250, 200], [250, 320]].map(([x, y], i) =>
                  [[380, 140], [380, 260]].map(([x2, y2], j) => (
                    <line key={`c2-${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#c89b3c" strokeWidth="1" opacity="0.3" />
                  ))
                )}
                {/* Input nodes */}
                {[[120, 100], [120, 200], [120, 300]].map(([x, y], i) => (
                  <g key={`in-${i}`}>
                    <circle cx={x} cy={y} r="16" fill="url(#aiGrad1)" stroke="#c89b3c" strokeWidth="1.5" />
                    <text x={x} y={y + 4} textAnchor="middle" fill="#0a1628" fontSize="8" fontWeight="700">IN</text>
                  </g>
                ))}
                {/* Hidden layer */}
                {[[250, 80], [250, 200], [250, 320]].map(([x, y], i) => (
                  <g key={`hid-${i}`}>
                    <circle cx={x} cy={y} r="18" fill="url(#aiGrad1)" stroke="#c89b3c" strokeWidth="1.5" />
                    <text x={x} y={y + 4} textAnchor="middle" fill="#0a1628" fontSize="8" fontWeight="700">AI</text>
                  </g>
                ))}
                {/* Output nodes */}
                {[[380, 140], [380, 260]].map(([x, y], i) => (
                  <g key={`out-${i}`}>
                    <circle cx={x} cy={y} r="16" fill="url(#aiGrad1)" stroke="#c89b3c" strokeWidth="1.5" />
                    <text x={x} y={y + 4} textAnchor="middle" fill="#0a1628" fontSize="8" fontWeight="700">OUT</text>
                  </g>
                ))}
                {/* Central brain */}
                <circle cx="250" cy="200" r="28" fill="#0a1628" stroke="#c89b3c" strokeWidth="2" />
                <Brain className="w-8 h-8 text-gold" x="242" y="192" />
                {/* Labels */}
                <text x="120" y="360" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">INPUT DATA</text>
                <text x="250" y="380" textAnchor="middle" fill="#c89b3c" fontSize="10" fontWeight="700">AI PROCESSING</text>
                <text x="380" y="320" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">OUTPUTS</text>
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
            AI CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Intelligent By Design<span className="text-gold">.</span>
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
            The AI Advantage<span className="text-gold">.</span>
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
                AI in Production<span className="text-gold">.</span>
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
              <Brain className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
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
              <Brain className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <p className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-3">PILLAR II OF III</p>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              Intelligence Needs Infrastructure
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              AI is capable, but it must run on secure, dedicated infrastructure. Pillar III ensures every AI decision is protected, isolated, and compliant.
            </p>
            <Link to="/sovereign-infrastructure" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              EXPLORE PILLAR III: SOVEREIGN INFRASTRUCTURE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}