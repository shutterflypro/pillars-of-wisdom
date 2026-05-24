import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Zap, Workflow, Repeat, Clock, ArrowRight, Calendar,
  FileText, Send, CheckCircle, GitBranch, Bot, Settings,
  Check, Cpu, Layers, TrendingUp,
} from 'lucide-react'

const automationStats = [
  { value: '85%', label: 'Manual Tasks Eliminated' },
  { value: '10x', label: 'Faster Processing' },
  { value: '100+', label: 'Pre-Built Workflows' },
  { value: '24/7', label: 'Continuous Operation' },
]

const automationFeatures = [
  { icon: Workflow, text: 'End-to-End Workflows', desc: 'Automate entire processes from intake to completion — approvals, notifications, escalations, and archival.' },
  { icon: Repeat, text: 'Recurring Operations', desc: 'Schedule and automate repetitive tasks — report generation, data sync, compliance checks, and reminders.' },
  { icon: GitBranch, text: 'Conditional Routing', desc: 'Intelligent branching based on data, rules, and thresholds — the right task to the right person at the right time.' },
  { icon: Bot, text: 'AI-Powered Processing', desc: 'Machine learning models that extract, classify, and route information without human intervention.' },
  { icon: Settings, text: 'Custom Triggers', desc: 'Event-driven automation that responds to system changes, data updates, and external API signals.' },
  { icon: CheckCircle, text: 'Auto-Validation', desc: 'Built-in quality checks that validate data, enforce rules, and flag exceptions before they become problems.' },
]

const benefits = [
  { icon: Clock, title: 'Save Time', desc: 'Eliminate hours of manual data entry, document routing, and status chasing every week.' },
  { icon: Cpu, title: 'Reduce Errors', desc: 'Automated workflows follow exact rules every time — no missed steps, no human oversight.' },
  { icon: Layers, title: 'Standardize Processes', desc: 'Consistent execution across teams, locations, and departments with enforced compliance.' },
  { icon: TrendingUp, title: 'Scale Effortlessly', desc: 'Handle 10x the volume without adding headcount — automation absorbs the growth.' },
]

const useCases = [
  'Automated loan application processing from submission to approval',
  'Compliance document routing with deadline tracking and escalation',
  'Employee onboarding workflows spanning HR, IT, and facilities',
  'Invoice processing with three-way matching and payment scheduling',
]

const quoteData = {
  text: 'We reduced our average processing time from 5 days to 4 hours. Automation did not just make us faster - it made us better.',
  source: 'Director of Operations, Regional Healthcare System',
}

export default function AutomationPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const capRef = useRef(null)
  const capInView = useInView(capRef, { once: true, margin: '-40px' })
  const ucRef = useRef(null)
  const ucInView = useInView(ucRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white relative">
      {/* ── HERO ── */}
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
              <span>Complete Automation</span>
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
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">COMPLETE AUTOMATION</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Eliminate Manual Work.<br />Accelerate Everything<span className="text-gold">.</span>
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
                End-to-end workflow automation that eliminates manual processes, reduces errors, and supports operations across every department in your institution.
              </motion.p>
            </div>

            {/* Hero SVG */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <svg viewBox="0 0 500 400" className="w-full max-w-md" fill="none">
                <defs>
                  <linearGradient id="autoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Flow diagram */}
                {[
                  { x: 80, y: 100, w: 80, h: 40, label: 'Intake' },
                  { x: 210, y: 100, w: 80, h: 40, label: 'Process' },
                  { x: 340, y: 100, w: 80, h: 40, label: 'Review' },
                  { x: 210, y: 200, w: 80, h: 40, label: 'AI Check' },
                  { x: 80, y: 300, w: 80, h: 40, label: 'Approve' },
                  { x: 340, y: 300, w: 80, h: 40, label: 'Complete' },
                ].map((box, i) => (
                  <g key={i}>
                    <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="8" fill="url(#autoGrad1)" stroke="#c89b3c" strokeWidth="1.5" />
                    <text x={box.x + box.w / 2} y={box.y + box.h / 2 + 4} textAnchor="middle" fill="#0a1628" fontSize="11" fontWeight="600">{box.label}</text>
                  </g>
                ))}
                {/* Arrows */}
                <path d="M160 120 L210 120" stroke="#c89b3c" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M290 120 L340 120" stroke="#c89b3c" strokeWidth="2" />
                <path d="M250 140 L250 200" stroke="#c89b3c" strokeWidth="2" />
                <path d="M210 220 L120 300" stroke="#c89b3c" strokeWidth="2" />
                <path d="M290 220 L380 300" stroke="#c89b3c" strokeWidth="2" />
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#c89b3c" />
                  </marker>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 bg-[#0a1628] border-t border-gold/10" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {automationStats.map((stat, i) => (
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

      {/* ── FEATURES ── */}
      <section className="py-20 relative" ref={featuresRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            AUTOMATION CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Automate Every Process<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {automationFeatures.map((f, i) => {
              const FIcon = f.icon
              return (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, y: 18 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-6 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.10)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FIcon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-200">{f.text}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{f.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-[#f8f7f4] border-t border-gray-100" ref={capRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            KEY BENEFITS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            The Automation Advantage<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => {
              const BIcon = b.icon
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={capInView ? { opacity: 1, y: 0 } : {}}
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

      {/* ── USE CASES ── */}
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
                Automated From Start to Finish<span className="text-gold">.</span>
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
              <Zap className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
              <p className="text-[1.05rem] text-slate-200 leading-relaxed italic mb-4">"{quoteData.text}"</p>
              <p className="text-[0.78rem] text-gold font-bold tracking-[0.1em] uppercase">{quoteData.source}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Zap className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              See which processes can be automated and how much time your team will save.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Calendar className="w-4 h-4" />
              GET YOUR AUTOMATION PLAN
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}