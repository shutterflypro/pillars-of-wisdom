import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Workflow, FileText, ClipboardCheck, Inbox, Bot, RefreshCw, GitMerge, Sparkles,
  Lock, Server, Users, Settings, ShieldCheck, Gauge, TrendingUp, Database, Brain,
  Check, ArrowRight, Calendar, Building2, Puzzle, Share2,
} from 'lucide-react'

const platformStats = [
  { value: '3', label: 'Unified Pillars' },
  { value: '6', label: 'Architecture Layers' },
  { value: '100+', label: 'Pre-Built Workflows' },
  { value: '99.99%', label: 'Uptime SLA' },
]

const pillars = [
  {
    icon: Building2,
    title: 'Operational Foundation',
    layer: 'FOUNDATION LAYER',
    desc: 'Centralize intake, workflows, documents, approvals, audit trails, and workflow coordination into one unified platform.',
    items: [
      { icon: Workflow, text: 'Workflow automation' },
      { icon: FileText, text: 'Document intelligence' },
      { icon: ClipboardCheck, text: 'Audit-ready workflows' },
      { icon: Inbox, text: 'Intake & approvals' },
    ],
  },
  {
    icon: Brain,
    title: 'AI Orchestration',
    layer: 'INTELLIGENCE LAYER',
    desc: 'Deploy governed AI agents that automate workflows, assist teams, coordinate processes, and adapt across industries.',
    items: [
      { icon: Bot, text: 'AI workflow agents' },
      { icon: RefreshCw, text: 'Adaptive automation' },
      { icon: GitMerge, text: 'Workflow coordination' },
      { icon: Sparkles, text: 'Intelligent processing' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Sovereign Infrastructure',
    layer: 'CONTROL LAYER',
    desc: 'Institutional security, deployment control, tenant isolation, and policy architecture built for regulated industries.',
    items: [
      { icon: Lock, text: 'Zero-trust security' },
      { icon: Server, text: 'Air-gapped deployments' },
      { icon: Users, text: 'Tenant isolation' },
      { icon: Settings, text: 'Infrastructure control' },
    ],
  },
]

const archLayers = [
  { icon: Users, title: 'EXPERIENCE', desc: 'Role-based portals and dashboards' },
  { icon: Brain, title: 'AI & INTELLIGENCE', desc: 'Agents, decisioning, and analytics' },
  { icon: Settings, title: 'APPLICATION SERVICES', desc: 'Workflow orchestration and APIs' },
  { icon: Database, title: 'DATA & INTEGRATION', desc: 'Unified data model and connectors' },
  { icon: Lock, title: 'SECURITY & GOVERNANCE', desc: 'Identity, policy engine, and audit' },
  { icon: Server, title: 'INFRASTRUCTURE', desc: 'Cloud-native with observability' },
]

const capabilities = [
  { icon: ShieldCheck, text: 'Secure by Design', desc: 'Zero-trust security and continuous protection at every layer.' },
  { icon: Puzzle, text: 'Modular & Scalable', desc: 'Composable architecture that grows with your organization.' },
  { icon: Share2, text: 'Open Architecture', desc: 'APIs and pre-built connectors across enterprise systems.' },
  { icon: Gauge, text: 'Higher Performance', desc: 'Scale to handle growth, volume, and complexity.' },
  { icon: TrendingUp, text: 'Sustainable Growth', desc: 'Adapt quickly, innovate continuously, enable long-term value.' },
  { icon: FileText, text: 'Compliance Automation', desc: 'Built-in controls, policy enforcement, and audit trails across every process.' },
]

const useCases = [
  'Unified intake and approval workflows across departments',
  'Cross-functional document intelligence and processing',
  'Real-time workflow dashboards and analytics',
  'Audit-ready policy controls and reporting automation',
]

const quoteData = {
  text: 'Pillars of Wisdom gave us a single platform that replaces seven disconnected tools — with governance built in from day one.',
  source: 'COO, Regional Financial Institution',
}

export default function PlatformPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const pillarsRef = useRef(null)
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-40px' })
  const archRef = useRef(null)
  const archInView = useInView(archRef, { once: true, margin: '-40px' })
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
              <span>Platform</span>
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
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">THE PLATFORM</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Three Pillars.<br />One Platform.
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
                One platform that centralizes workflows, orchestrates governed AI, and runs on dedicated infrastructure — so your business moves faster with full control.
              </motion.p>
            </div>

            {/* ── HERO SVG ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="plat-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="plat-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <filter id="plat-g">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="plat-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>

                <rect width="800" height="400" fill="url(#plat-bg)" />
                <rect width="800" height="400" fill="url(#plat-dots)" />
                <ellipse cx="400" cy="200" rx="260" ry="160" fill="url(#plat-glow)" />

                {/* Three pillar columns */}
                <rect x="160" y="60" width="60" height="280" rx="4" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.7" />
                <rect x="170" y="80" width="40" height="240" rx="3" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.4" />
                <rect x="370" y="60" width="60" height="280" rx="4" fill="rgba(74,144,217,0.06)" stroke="#4a90d9" strokeWidth="0.7" />
                <rect x="380" y="80" width="40" height="240" rx="3" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="0.4" />
                <rect x="580" y="60" width="60" height="280" rx="4" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.7" />
                <rect x="590" y="80" width="40" height="240" rx="3" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.4" />

                {/* Layer lines across pillars */}
                <line x1="160" y1="140" x2="640" y2="140" stroke="#c89b3c" strokeWidth="0.5" opacity="0.25" strokeDasharray="4,4" />
                <line x1="160" y1="200" x2="640" y2="200" stroke="#4a90d9" strokeWidth="0.5" opacity="0.25" strokeDasharray="4,4" />
                <line x1="160" y1="260" x2="640" y2="260" stroke="#c89b3c" strokeWidth="0.5" opacity="0.25" strokeDasharray="4,4" />

                {/* Flowing connections between pillars */}
                <path d="M220,140 Q300,120 370,140" fill="none" stroke="#c89b3c" strokeWidth="1.2" opacity="0.5" />
                <path d="M430,200 Q510,180 580,200" fill="none" stroke="#4a90d9" strokeWidth="1.2" opacity="0.5" />
                <circle r="2.5" fill="#c89b3c" opacity="0.9">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M220,140 Q300,120 370,140" />
                </circle>
                <circle r="2.5" fill="#4a90d9" opacity="0.7">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M430,200 Q510,180 580,200" />
                </circle>

                {/* Pillar labels */}
                <text x="190" y="50" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="700" fill="#c89b3c" opacity="0.8" letterSpacing="0.12em" textAnchor="middle">FOUNDATION</text>
                <text x="400" y="50" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="700" fill="#4a90d9" opacity="0.8" letterSpacing="0.12em" textAnchor="middle">INTELLIGENCE</text>
                <text x="610" y="50" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="700" fill="#c89b3c" opacity="0.8" letterSpacing="0.12em" textAnchor="middle">CONTROL</text>

                {/* Pulsing rings */}
                <circle cx="190" cy="200" r="45" fill="none" stroke="#c89b3c" strokeWidth="0.4" opacity="0.2">
                  <animate attributeName="r" values="45;60;45" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.06;0.2" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="200" r="45" fill="none" stroke="#4a90d9" strokeWidth="0.4" opacity="0.2">
                  <animate attributeName="r" values="45;60;45" dur="4.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.06;0.2" dur="4.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="610" cy="200" r="45" fill="none" stroke="#c89b3c" strokeWidth="0.4" opacity="0.2">
                  <animate attributeName="r" values="45;60;45" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.06;0.2" dur="5s" repeatCount="indefinite" />
                </circle>

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <rect y="340" width="800" height="60" fill="url(#plat-bg)" opacity="0.7" />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Three Pillars · One Platform</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-10 bg-[#0a1628]" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {platformStats.map((stat, i) => (
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

      {/* ── THREE PILLARS ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={pillarsRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            THE THREE PILLARS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-12"
          >
            One Platform. Three Pillars.<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, layer, desc, items }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 32 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-7 shadow-[0_8px_40px_rgba(10,22,40,0.08)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_12px_48px_rgba(10,22,40,0.12)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[0.62rem] font-bold text-gold tracking-[0.22em] uppercase">{layer}</div>
                    <h3 className="font-heading text-xl font-bold text-navy">{title}</h3>
                  </div>
                </div>
                <div className="h-[2px] w-10 bg-gold mb-5" />
                <p className="text-[0.82rem] text-slate leading-relaxed mb-5">{desc}</p>
                <div className="space-y-3">
                  {items.map(({ icon: ItemIcon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <ItemIcon className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-[0.82rem] text-navy/80">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE LAYERS ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={archRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={archInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            PLATFORM ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={archInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-12"
          >
            Layered for Security. Designed for Scale.<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {archLayers.map((layer, i) => {
              const LayerIcon = layer.icon
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={archInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-[#0a1628] rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center">
                      <span className="text-gold font-heading font-bold text-[0.75rem]">{i + 1}</span>
                    </div>
                    <h3 className="font-heading text-[0.9rem] font-bold text-white group-hover:text-gold transition-colors duration-200">{layer.title}</h3>
                  </div>
                  <p className="text-[0.82rem] text-white/60 leading-relaxed">{layer.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-16 bg-[#f8f7f4] border-t border-gray-100 relative" ref={capRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            BUILT-IN CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            A Foundation You Can Trust<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => {
              const CapIcon = cap.icon
              return (
                <motion.div
                  key={cap.text}
                  initial={{ opacity: 0, y: 18 }}
                  animate={capInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.10)] transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <CapIcon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">{cap.text}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{cap.desc}</p>
                </motion.div>
              )
            })}
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
            Platform in Action<span className="text-gold">.</span>
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
              <Calendar className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              See the Platform in Action
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a strategy session with our team to see how Pillars of Wisdom can improve your workflows.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Calendar className="w-4 h-4" />
              BOOK STRATEGY SESSION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}