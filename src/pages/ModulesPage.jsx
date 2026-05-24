import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Workflow, FileText, ClipboardCheck, Inbox, Bot, RefreshCw, GitMerge, Sparkles,
  Lock, Server, Users, Settings, ShieldCheck, BarChart3, Puzzle, Share2, Monitor,
  Check, ArrowRight, Calendar, Cpu, Zap, Eye, Database, Code2, Webhook,
} from 'lucide-react'

const modulesStats = [
  { value: '100+', label: 'Pre-Built Workflows' },
  { value: '12+', label: 'Industry Modules' },
  { value: '50+', label: 'API Connectors' },
  { value: '99.9%', label: 'Process Accuracy' },
]

const modules = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Design, deploy, and monitor end-to-end workflows with drag-and-drop simplicity and enterprise-grade governance.',
    features: ['Visual workflow builder', 'Conditional branching', 'Approval routing', 'SLA enforcement'],
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    desc: 'AI-powered document processing, classification, extraction, and validation — from intake to archive.',
    features: ['OCR & data extraction', 'Auto-classification', 'Template matching', 'Validation rules'],
  },
  {
    icon: Bot,
    title: 'AI Orchestration',
    desc: 'Deploy governed AI agents that automate decisions, assist teams, and coordinate across workflows.',
    features: ['Autonomous agents', 'Human-in-the-loop', 'Governed AI decisions', 'Multi-model support'],
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Engine',
    desc: 'Built-in regulatory controls, policy enforcement, audit trails, and examiner-ready reporting.',
    features: ['Policy rules engine', 'Immutable audit logs', 'Regulatory mapping', 'Exam preparation'],
  },
  {
    icon: Users,
    title: 'Case Management',
    desc: 'Unified case tracking, assignment, escalation, and resolution for every department and workflow.',
    features: ['Case assignment', 'Escalation rules', 'SLA tracking', 'Collaboration tools'],
  },
  {
    icon: Database,
    title: 'Data Integration',
    desc: 'Connect to core systems, third-party data providers, and legacy infrastructure with pre-built connectors.',
    features: ['50+ connectors', 'Bi-directional sync', 'ETL pipelines', 'Event streaming'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Dashboards',
    desc: 'Real-time operational intelligence, KPI tracking, and customizable dashboards for every stakeholder.',
    features: ['Live dashboards', 'KPI monitoring', 'Predictive insights', 'Custom reports'],
  },
  {
    icon: Monitor,
    title: 'Operations Console',
    desc: 'Command center for monitoring, exception handling, and operational oversight across all active workflows.',
    features: ['Real-time monitoring', 'Exception handling', 'Performance alerts', 'Resource management'],
  },
  {
    icon: Lock,
    title: 'Identity & Access',
    desc: 'Granular role-based access, MFA enforcement, tenant isolation, and identity governance built in.',
    features: ['RBAC & MFA', 'Tenant isolation', 'SCIM provisioning', 'Audit reporting'],
  },
  {
    icon: Zap,
    title: 'Intake & Onboarding',
    desc: 'Streamlined intake for applications, clients, patients, and documents — with automated validation.',
    features: ['Smart intake forms', 'Auto-validation', 'Document gathering', 'Status tracking'],
  },
  {
    icon: Eye,
    title: 'Risk & Monitoring',
    desc: 'Continuous risk scoring, anomaly detection, and regulatory monitoring across all active processes.',
    features: ['Risk scoring', 'Anomaly detection', 'Regulatory watch', 'Alert management'],
  },
  {
    icon: Code2,
    title: 'API & Developer Tools',
    desc: 'Comprehensive APIs, SDKs, and webhooks for custom integrations and extension of platform capabilities.',
    features: ['REST & GraphQL APIs', 'Webhooks', 'SDK libraries', 'Sandbox environments'],
  },
]

const integrationItems = [
  { icon: Puzzle, text: 'Composable Architecture', desc: 'Mix and match modules for your specific needs.' },
  { icon: Share2, text: 'Open Ecosystem', desc: 'Integrate with any system via APIs and connectors.' },
  { icon: Settings, text: 'Configurable Rules', desc: 'No-code policy configuration and enforcement.' },
  { icon: RefreshCw, text: 'Continuous Updates', desc: 'Regular module enhancements and new capabilities.' },
]

const useCases = [
  'Automate multi-step approval workflows with built-in compliance',
  'Process and classify documents using AI-powered extraction',
  'Deploy governed AI agents for decision support and triage',
  'Connect core banking, EHR, and LOS systems with direct integration',
]

const quoteData = {
  text: 'We replaced five separate tools with one platform — and every module works together because they were built together.',
  source: 'VP of Operations, Top 20 U.S. Mortgage Lender',
}

export default function ModulesPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const modulesRef = useRef(null)
  const modulesInView = useInView(modulesRef, { once: true, margin: '-40px' })
  const intRef = useRef(null)
  const intInView = useInView(intRef, { once: true, margin: '-40px' })
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
              <span>Modules</span>
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
                  <Puzzle className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">PLATFORM MODULES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Every Module.<br />Built to Work Together.
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
                Purpose-built modules that automate operations, ensure compliance, and work as one — from intake to intelligence to infrastructure.
              </motion.p>
            </div>

            {/* HERO SVG */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="mod-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="mod-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <filter id="mod-g">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="mod-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>

                <rect width="800" height="400" fill="url(#mod-bg)" />
                <rect width="800" height="400" fill="url(#mod-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#mod-glow)" />

                {/* Hexagonal module grid */}
                <g opacity="0.75">
                  {/* Row 1 */}
                  <polygon points="200,90 220,78 240,90 240,110 220,122 200,110" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="260,90 280,78 300,90 300,110 280,122 260,110" fill="rgba(74,144,217,0.08)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="320,90 340,78 360,90 360,110 340,122 320,110" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="380,90 400,78 420,90 420,110 400,122 380,110" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="440,90 460,78 480,90 480,110 460,122 440,110" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="500,90 520,78 540,90 540,110 520,122 500,110" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="560,90 580,78 600,90 600,110 580,122 560,110" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />

                  {/* Row 2 */}
                  <polygon points="170,140 190,128 210,140 210,160 190,172 170,160" fill="rgba(74,144,217,0.08)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="230,140 250,128 270,140 270,160 250,172 230,160" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="290,140 310,128 330,140 330,160 310,172 290,160" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="350,140 370,128 390,140 390,160 370,172 350,160" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="410,140 430,128 450,140 450,160 430,172 410,160" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="470,140 490,128 510,140 510,160 490,172 470,160" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="530,140 550,128 570,140 570,160 550,172 530,160" fill="rgba(74,144,217,0.08)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="590,140 610,128 630,140 630,160 610,172 590,160" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />

                  {/* Row 3 */}
                  <polygon points="200,190 220,178 240,190 240,210 220,222 200,210" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="260,190 280,178 300,190 300,210 280,222 260,210" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="320,190 340,178 360,190 360,210 340,222 320,210" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="380,190 400,178 420,190 420,210 400,222 380,210" fill="rgba(74,144,217,0.08)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="440,190 460,178 480,190 480,210 460,222 440,210" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="500,190 520,178 540,190 540,210 520,222 500,210" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="560,190 580,178 600,190 600,210 580,222 560,210" fill="rgba(74,144,217,0.12)" stroke="#4a90d9" strokeWidth="0.8" />

                  {/* Row 4 */}
                  <polygon points="230,240 250,228 270,240 270,260 250,272 230,260" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="290,240 310,228 330,240 330,260 310,272 290,260" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="350,240 370,228 390,240 390,260 370,272 350,260" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="410,240 430,228 450,240 450,260 430,272 410,260" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.8" />
                  <polygon points="470,240 490,228 510,240 510,260 490,272 470,260" fill="rgba(74,144,217,0.08)" stroke="#4a90d9" strokeWidth="0.8" />
                  <polygon points="530,240 550,228 570,240 570,260 550,272 530,260" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                </g>

                {/* Connection lines between hexagons */}
                <g opacity="0.15" strokeWidth="0.5" stroke="#c89b3c">
                  <line x1="240" y1="100" x2="260" y2="100" />
                  <line x1="300" y1="100" x2="320" y2="100" />
                  <line x1="360" y1="100" x2="380" y2="100" />
                  <line x1="420" y1="100" x2="440" y2="100" />
                  <line x1="480" y1="100" x2="500" y2="100" />
                  <line x1="540" y1="100" x2="560" y2="100" />
                </g>

                {/* Center highlight glow */}
                <circle cx="400" cy="180" r="55" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.7" filter="url(#mod-g)" />
                <circle cx="400" cy="180" r="35" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="0.5" />

                {/* Animated data pulse */}
                <circle r="3" fill="#c89b3c" opacity="0.9">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M200,100 Q400,50 600,100 Q400,340 200,100" />
                </circle>
                <circle r="2.5" fill="#4a90d9" opacity="0.7">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M170,150 Q400,200 630,150 Q400,300 170,150" />
                </circle>

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="320" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.5" letterSpacing="0.2em" textAnchor="middle">INTERCONNECTED MODULES</text>

                <rect y="340" width="800" height="60" fill="url(#mod-bg)" opacity="0.7" />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Interconnected Modules</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-10 bg-[#0a1628]" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {modulesStats.map((stat, i) => (
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

      {/* ── MODULES GRID ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={modulesRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={modulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            PLATFORM MODULES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={modulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Purpose-Built Modules<span className="text-gold">.</span> Unified Platform.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => {
              const ModIcon = mod.icon
              return (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_32px_rgba(10,22,40,0.11)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ModIcon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">{mod.title}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed mb-4">{mod.desc}</p>
                  <div className="space-y-1.5">
                    {mod.features.map((f) => (
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

      {/* ── INTEGRATION ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={intRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={intInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            INTEGRATION APPROACH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={intInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Built to Connect<span className="text-gold">.</span> Designed to Scale.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {integrationItems.map((item, i) => {
              const IntIcon = item.icon
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 18 }}
                  animate={intInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-[#0a1628] rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-colors duration-300 group text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IntIcon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.9rem] font-bold text-white mb-2 group-hover:text-gold transition-colors duration-200">{item.text}</h3>
                  <p className="text-[0.82rem] text-white/60 leading-relaxed">{item.desc}</p>
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
            Modules in Action<span className="text-gold">.</span>
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
              Explore the Modules
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a demo to see every module in action and discover how they work together for your organization.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Calendar className="w-4 h-4" />
              SCHEDULE A DEMO
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}