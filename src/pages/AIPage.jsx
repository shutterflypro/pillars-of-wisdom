import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Bot, Brain, Sparkles, GitMerge, RefreshCw, Cpu, Eye, Zap,
  ShieldCheck, FileCheck, Users, Scale, Workflow, BarChart3,
  Check, ArrowRight, Calendar, MessageSquare, Settings, Search,
} from 'lucide-react'

const aiStats = [
  { value: 'Governed', label: 'Decision Framework' },
  { value: 'Auditable', label: 'Every Action' },
  { value: 'Supervised', label: 'Automation' },
  { value: 'Transparent', label: 'Operations' },
]

const capabilities = [
  {
    icon: Bot,
    title: 'AI-Assisted Agents',
    desc: 'Deploy AI agents that execute tasks, make decisions, and coordinate workflows — within governance guardrails.',
    features: ['Task execution', 'Decision support', 'Cross-workflow coordination', 'Human escalation'],
  },
  {
    icon: Brain,
    title: 'Document Intelligence',
    desc: 'AI-powered document understanding, data extraction, and classification that improves over time.',
    features: ['Natural language processing', 'Pattern recognition', 'Continuous improvement', 'Multi-format support'],
  },
  {
    icon: GitMerge,
    title: 'Workflow Coordination',
    desc: 'AI orchestrates complex multi-step processes, routing decisions, and cross-department coordination.',
    features: ['Process routing', 'Bottleneck detection', 'Priority management', 'Parallel coordination'],
  },
  {
    icon: RefreshCw,
    title: 'Workflow Optimization',
    desc: 'AI systems that learn from outcomes, adapt to changing rules, and continuously improve efficiency.',
    features: ['Continuous improvement', 'Rule adaptation', 'Outcome learning', 'Performance tracking'],
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Interface',
    desc: 'Interact with the platform through conversational AI — ask questions, trigger workflows, and get insights.',
    features: ['Conversational commands', 'Query resolution', 'Context awareness', 'Multi-language support'],
  },
  {
    icon: Eye,
    title: 'Operational Analytics',
    desc: 'Forecast outcomes, detect anomalies, and surface insights before issues become problems.',
    features: ['Risk scoring', 'Anomaly detection', 'Trend forecasting', 'Early warning alerts'],
  },
]

const governanceItems = [
  { icon: ShieldCheck, title: 'Governed AI Decisions', desc: 'Every AI decision is logged, auditable, and compliant with your policies.' },
  { icon: FileCheck, title: 'Tamper-Evident Audit Records', desc: 'Complete traceability of AI actions, inputs, and outputs for regulatory review.' },
  { icon: Users, title: 'Human-in-the-Loop', desc: 'Critical decisions escalate to humans. AI assists — it never overrides authority.' },
  { icon: Scale, title: 'Policy Enforcement', desc: 'AI operates within your defined policy boundaries and regulatory requirements.' },
]

const processSteps = [
  'Define Governance Rules',
  'Deploy AI Agents',
  'Monitor & Validate',
  'Continuously Improve',
]

const useCases = [
  'AI agents auto-process loan applications with policy checks',
  'Intelligent document classification and data extraction at scale',
  'Predictive risk scoring for underwriting and fraud detection',
  'Natural language workflows for case management and routing',
]

const quoteData = {
  text: 'The AI agents handle 80% of our routine decisions — and every action is auditable. That changed the game for our audit team.',
  source: 'Director of Operations, National Insurance Carrier',
}

export default function AIPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const capRef = useRef(null)
  const capInView = useInView(capRef, { once: true, margin: '-40px' })
  const govRef = useRef(null)
  const govInView = useInView(govRef, { once: true, margin: '-40px' })
  const procRef = useRef(null)
  const procInView = useInView(procRef, { once: true, margin: '-40px' })
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
              <span>AI</span>
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
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">WORKFLOW ORCHESTRATION</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Governed AI.<br />Operational Intelligence.
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
                Deploy governed AI agents that automate workflows, assist teams, and coordinate processes — with policy and control built into every decision.
              </motion.p>
            </div>

            {/* HERO SVG - Neural Network */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="ai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <filter id="ai-g">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="ai-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>

                <rect width="800" height="400" fill="url(#ai-bg)" />
                <rect width="800" height="400" fill="url(#ai-dots)" />
                <ellipse cx="400" cy="180" rx="300" ry="160" fill="url(#ai-glow)" />

                {/* Neural network — 4 layers */}
                {/* Input layer (left) */}
                <circle cx="150" cy="90" r="14" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1" />
                <circle cx="150" cy="90" r="8" fill="rgba(200,155,60,0.25)" />
                <circle cx="150" cy="170" r="14" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="1" />
                <circle cx="150" cy="170" r="8" fill="rgba(200,155,60,0.2)" />
                <circle cx="150" cy="250" r="14" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                <circle cx="150" cy="250" r="8" fill="rgba(200,155,60,0.18)" />
                <circle cx="150" cy="330" r="14" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1" />
                <circle cx="150" cy="330" r="8" fill="rgba(200,155,60,0.25)" />

                {/* Hidden layer 1 */}
                <circle cx="320" cy="120" r="16" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="1" />
                <circle cx="320" cy="120" r="9" fill="rgba(74,144,217,0.2)" />
                <circle cx="320" cy="210" r="16" fill="rgba(74,144,217,0.12)" stroke="#4a90d9" strokeWidth="1" />
                <circle cx="320" cy="210" r="9" fill="rgba(74,144,217,0.22)" />
                <circle cx="320" cy="300" r="16" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="1" />
                <circle cx="320" cy="300" r="9" fill="rgba(74,144,217,0.2)" />

                {/* Hidden layer 2 */}
                <circle cx="490" cy="140" r="16" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.9" />
                <circle cx="490" cy="140" r="9" fill="rgba(200,155,60,0.18)" />
                <circle cx="490" cy="230" r="18" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="1.2" filter="url(#ai-g)" />
                <circle cx="490" cy="230" r="10" fill="rgba(200,155,60,0.25)" />
                <circle cx="490" cy="310" r="16" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.9" />
                <circle cx="490" cy="310" r="9" fill="rgba(200,155,60,0.18)" />

                {/* Output layer (right) */}
                <circle cx="650" cy="150" r="18" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1.2" filter="url(#ai-g)" />
                <circle cx="650" cy="150" r="10" fill="rgba(200,155,60,0.3)" />
                <circle cx="650" cy="250" r="18" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1.2" filter="url(#ai-g)" />
                <circle cx="650" cy="250" r="10" fill="rgba(200,155,60,0.3)" />
                <circle cx="650" cy="340" r="16" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="1" />
                <circle cx="650" cy="340" r="9" fill="rgba(74,144,217,0.2)" />

                {/* Connections - input to hidden1 */}
                <g opacity="0.2" strokeWidth="0.8">
                  <line x1="164" y1="90" x2="304" y2="120" stroke="#c89b3c" />
                  <line x1="164" y1="90" x2="304" y2="210" stroke="#c89b3c" strokeDasharray="3,3" />
                  <line x1="164" y1="170" x2="304" y2="120" stroke="#c89b3c" />
                  <line x1="164" y1="170" x2="304" y2="210" stroke="#c89b3c" />
                  <line x1="164" y1="170" x2="304" y2="300" stroke="#c89b3c" strokeDasharray="3,3" />
                  <line x1="164" y1="250" x2="304" y2="210" stroke="#c89b3c" strokeDasharray="3,3" />
                  <line x1="164" y1="250" x2="304" y2="300" stroke="#c89b3c" />
                  <line x1="164" y1="330" x2="304" y2="300" stroke="#c89b3c" />
                  <line x1="164" y1="330" x2="304" y2="210" stroke="#c89b3c" strokeDasharray="3,3" />
                </g>

                {/* Connections - hidden1 to hidden2 */}
                <g opacity="0.25" strokeWidth="0.9">
                  <line x1="336" y1="120" x2="474" y2="140" stroke="#4a90d9" />
                  <line x1="336" y1="120" x2="474" y2="230" stroke="#4a90d9" strokeDasharray="3,3" />
                  <line x1="336" y1="210" x2="474" y2="140" stroke="#4a90d9" strokeDasharray="3,3" />
                  <line x1="336" y1="210" x2="474" y2="230" stroke="#4a90d9" />
                  <line x1="336" y1="210" x2="474" y2="310" stroke="#4a90d9" strokeDasharray="3,3" />
                  <line x1="336" y1="300" x2="474" y2="230" stroke="#4a90d9" />
                  <line x1="336" y1="300" x2="474" y2="310" stroke="#4a90d9" />
                </g>

                {/* Connections - hidden2 to output */}
                <g opacity="0.3" strokeWidth="1">
                  <line x1="506" y1="140" x2="632" y2="150" stroke="#c89b3c" />
                  <line x1="506" y1="140" x2="632" y2="250" stroke="#c89b3c" strokeDasharray="3,3" />
                  <line x1="506" y1="230" x2="632" y2="150" stroke="#c89b3c" />
                  <line x1="506" y1="230" x2="632" y2="250" stroke="#c89b3c" />
                  <line x1="506" y1="230" x2="632" y2="340" stroke="#c89b3c" strokeDasharray="3,3" />
                  <line x1="506" y1="310" x2="632" y2="250" stroke="#c89b3c" strokeDasharray="3,3" />
                  <line x1="506" y1="310" x2="632" y2="340" stroke="#c89b3c" />
                </g>

                {/* Animated data pulses */}
                <circle r="3" fill="#c89b3c" opacity="0.9">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M164,170 L304,210 L474,230 L632,250" />
                </circle>
                <circle r="2.5" fill="#4a90d9" opacity="0.7">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M164,90 L304,120 L474,140 L632,150" />
                </circle>
                <circle r="2.5" fill="#c89b3c" opacity="0.8">
                  <animateMotion dur="2.3s" repeatCount="indefinite" path="M164,250 L304,300 L474,310 L632,340" />
                </circle>

                {/* Output labels */}
                <text x="676" y="153" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#c89b3c" opacity="0.75" letterSpacing="0.08em">DECISION</text>
                <text x="676" y="253" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#c89b3c" opacity="0.75" letterSpacing="0.08em">ACTION</text>
                <text x="676" y="343" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#4a90d9" opacity="0.65" letterSpacing="0.08em">INSIGHT</text>

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <rect y="340" width="800" height="60" fill="url(#ai-bg)" opacity="0.7" />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Governed AI · Workflow Orchestration</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-10 bg-[#0a1628]" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {aiStats.map((stat, i) => (
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

      {/* ── CAPABILITIES ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={capRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            AI CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Intelligence at Every Layer<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => {
              const CapIcon = cap.icon
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={capInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_32px_rgba(10,22,40,0.11)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CapIcon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">{cap.title}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed mb-4">{cap.desc}</p>
                  <div className="space-y-1.5">
                    {cap.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-[0.78rem] text-navy/80">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE FRAMEWORK ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={govRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={govInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            AI GOVERNANCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={govInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Governed by Design. Always Protected.<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {governanceItems.map((item, i) => {
              const GovIcon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={govInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-[#0a1628] rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <GovIcon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading text-[0.95rem] font-bold text-white mb-1.5 group-hover:text-gold transition-colors duration-200">{item.title}</h3>
                      <p className="text-[0.82rem] text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={procRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={procInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={procInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-12"
          >
            From Rules to Results<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={procInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-navy font-heading font-bold text-[0.85rem]">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-heading text-[0.92rem] font-bold text-navy mb-1">{step}</h4>
                  </div>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%+8px)] w-[calc(100%-80px)] h-px bg-gold/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={ucRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={ucInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            USE CASES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ucInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-8"
          >
            AI in Practice<span className="text-gold">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ucInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-8 shadow-[0_6px_30px_rgba(10,22,40,0.08)] border border-gray-100"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.92rem] text-slate leading-relaxed">
                  <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold" strokeWidth={2.5} />
                  </div>
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-gold text-4xl font-heading mb-4">&ldquo;</div>
            <p className="font-heading text-[1.1rem] md:text-[1.25rem] text-navy leading-[1.5] mb-4">
              {quoteData.text}
            </p>
            <p className="text-[0.82rem] text-slate font-semibold uppercase tracking-wider">
              — {quoteData.source}
            </p>
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
              <Brain className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              See Governed AI in Action
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a strategy session to explore how Pillars of Wisdom AI can automate your most complex operations — safely and transparently.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Calendar className="w-4 h-4" />
              SCHEDULE AI REVIEW
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}