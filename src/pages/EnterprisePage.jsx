import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Building2, Shield, Rocket, Award, Users, Globe, Lock, Server, Cpu,
  Check, ArrowRight, Calendar, TrendingUp, Gauge, ClipboardCheck,
  BarChart3, Cloud, KeyRound, Scale, Fingerprint, RefreshCw,
} from 'lucide-react'

const enterpriseStats = [
  { value: 'Institutional', label: 'Uptime SLA' },
  { value: 'SOC 2-Ready', label: 'Architecture' },
  { value: '< 4hr', label: 'Incident Response' },
  { value: 'Scalable', label: 'Infrastructure' },
]

const deploymentModels = [
  {
    id: 'foundation',
    icon: Rocket,
    title: 'Platform Foundation',
    desc: 'Essential AI automation to modernize workflows and build a strong foundation.',
    features: ['Core automation modules', 'Pre-configured workflows', 'Essential policy controls', 'Rapid deployment'],
    dark: true,
    featured: false,
  },
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise Deployment',
    desc: 'Complete institutional platform for banks, law firms, and regulated enterprises.',
    features: ['End-to-end automation platform', 'AI workflow orchestration', 'Regulatory & audit framework', 'Scalable infrastructure'],
    dark: false,
    featured: true,
  },
  {
    id: 'dedicated',
    icon: Shield,
    title: 'Dedicated Infrastructure',
    desc: 'Fully custom AI infrastructure for large institutions and government entities.',
    features: ['Custom AI & workflow development', 'Dedicated deployment environment', 'Advanced security & isolation', 'Dedicated support & SLAs'],
    dark: true,
    featured: false,
  },
]

const enterpriseCapabilities = [
  { icon: Lock, text: 'Zero-Trust Security', desc: 'Every request authenticated, authorized, and audited across all layers.' },
  { icon: Cloud, text: 'Hybrid Deployment', desc: 'Cloud, on-premise, or air-gapped — choose your deployment model.' },
  { icon: KeyRound, text: 'Customer-Managed Keys', desc: 'Institution-controlled encryption keys for full data control.' },
  { icon: Server, text: 'Tenant Isolation', desc: 'Strict boundaries at data, network, and identity layers.' },
  { icon: Scale, text: 'Regulatory Compliance', desc: 'SOC 2-ready architecture, HIPAA-aware workflows, PCI-aligned operational controls with tamper-evident audit trails.' },
  { icon: Fingerprint, text: 'Identity Sovereignty', desc: 'Institution-controlled deployment with dedicated identity management.' },
]

const outcomes = [
  { icon: Gauge, title: 'INCREASE EFFICIENCY', desc: 'Automate workflows and reduce manual work.' },
  { icon: Shield, title: 'REDUCE RISK', desc: 'Strengthen institutional safeguards and minimize exposure.' },
  { icon: Users, title: 'IMPROVE EXPERIENCE', desc: 'Deliver faster, more accurate outcomes.' },
  { icon: TrendingUp, title: 'DRIVE GROWTH', desc: 'Scale with confidence and enable new value.' },
]

const implementationSteps = [
  'Discovery & Assessment',
  'Architecture Planning',
  'Phased Deployment',
  'Operational Handoff',
]

const useCases = [
  'Full institution migration from legacy systems to unified platform',
  'Custom dedicated deployment meeting jurisdictional requirements',
  'Enterprise-wide AI rollout with governed change management',
  'Regulatory improvement with audit-ready documentation',
]

const quoteData = {
  text: 'Pillars of Wisdom gave us a dedicated deployment that our board approved in one meeting — because institutional safeguards were already built in.',
  source: 'CTO, Fortune 500 Financial Institution',
}

export default function EnterprisePage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const depRef = useRef(null)
  const depInView = useInView(depRef, { once: true, margin: '-40px' })
  const capRef = useRef(null)
  const capInView = useInView(capRef, { once: true, margin: '-40px' })
  const outcomeRef = useRef(null)
  const outcomeInView = useInView(outcomeRef, { once: true, margin: '-40px' })
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
              <span>Enterprise</span>
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
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">ENTERPRISE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Built for the<br />Institutional Scale.
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
                Institutional infrastructure, dedicated deployment options, and institutional security — built for organizations that cannot compromise.
              </motion.p>
            </div>

            {/* HERO SVG - Enterprise Towers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="ent-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="ent-glow" cx="50%" cy="70%" r="60%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <filter id="ent-g">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="ent-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>

                <rect width="800" height="400" fill="url(#ent-bg)" />
                <rect width="800" height="400" fill="url(#ent-dots)" />
                <ellipse cx="400" cy="300" rx="320" ry="140" fill="url(#ent-glow)" />

                {/* Cityscape / Enterprise towers */}
                {/* Tower 1 - tall center */}
                <rect x="345" y="80" width="50" height="270" rx="3" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.8" />
                <rect x="352" y="95" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.2)" opacity="0.6" />
                <rect x="352" y="110" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="352" y="125" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.2)" opacity="0.6" />
                <rect x="352" y="140" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="352" y="155" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.2)" opacity="0.6" />
                <rect x="352" y="170" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="352" y="185" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.2)" opacity="0.6" />
                <rect x="352" y="200" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="352" y="215" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.2)" opacity="0.6" />
                <rect x="352" y="230" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="352" y="245" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.2)" opacity="0.6" />
                <rect x="352" y="260" width="36" height="8" rx="1.5" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                {/* Antenna/beacon on top */}
                <line x1="370" y1="80" x2="370" y2="55" stroke="#c89b3c" strokeWidth="1.5" opacity="0.7" />
                <circle cx="370" cy="52" r="4" fill="rgba(200,155,60,0.3)" stroke="#c89b3c" strokeWidth="1" filter="url(#ent-g)" />
                <circle cx="370" cy="52" r="8" fill="none" stroke="#c89b3c" strokeWidth="0.5" opacity="0.3">
                  <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.08;0.3" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Tower 2 - left */}
                <rect x="260" y="130" width="44" height="220" rx="3" fill="rgba(74,144,217,0.06)" stroke="#4a90d9" strokeWidth="0.7" />
                <rect x="266" y="145" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.15)" opacity="0.5" />
                <rect x="266" y="158" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.2)" opacity="0.6" />
                <rect x="266" y="171" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.15)" opacity="0.5" />
                <rect x="266" y="184" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.2)" opacity="0.6" />
                <rect x="266" y="197" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.15)" opacity="0.5" />
                <rect x="266" y="210" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.2)" opacity="0.6" />
                <rect x="266" y="223" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.15)" opacity="0.5" />
                <rect x="266" y="236" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.2)" opacity="0.6" />

                {/* Tower 3 - far left */}
                <rect x="180" y="175" width="38" height="175" rx="3" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="0.6" />
                <rect x="186" y="190" width="26" height="6" rx="1" fill="rgba(200,155,60,0.12)" opacity="0.5" />
                <rect x="186" y="202" width="26" height="6" rx="1" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="186" y="214" width="26" height="6" rx="1" fill="rgba(200,155,60,0.12)" opacity="0.5" />
                <rect x="186" y="226" width="26" height="6" rx="1" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="186" y="238" width="26" height="6" rx="1" fill="rgba(200,155,60,0.12)" opacity="0.5" />
                <rect x="186" y="250" width="26" height="6" rx="1" fill="rgba(200,155,60,0.15)" opacity="0.5" />

                {/* Tower 4 - right */}
                <rect x="435" y="150" width="44" height="200" rx="3" fill="rgba(74,144,217,0.06)" stroke="#4a90d9" strokeWidth="0.7" />
                <rect x="441" y="165" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.15)" opacity="0.5" />
                <rect x="441" y="178" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.2)" opacity="0.6" />
                <rect x="441" y="191" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.15)" opacity="0.5" />
                <rect x="441" y="204" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.2)" opacity="0.6" />
                <rect x="441" y="217" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.15)" opacity="0.5" />
                <rect x="441" y="230" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.2)" opacity="0.6" />
                <rect x="441" y="243" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.15)" opacity="0.5" />
                <rect x="441" y="256" width="32" height="7" rx="1.5" fill="rgba(74,144,217,0.2)" opacity="0.6" />

                {/* Tower 5 - far right */}
                <rect x="520" y="190" width="38" height="160" rx="3" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="0.6" />
                <rect x="526" y="205" width="26" height="6" rx="1" fill="rgba(200,155,60,0.12)" opacity="0.5" />
                <rect x="526" y="217" width="26" height="6" rx="1" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="526" y="229" width="26" height="6" rx="1" fill="rgba(200,155,60,0.12)" opacity="0.5" />
                <rect x="526" y="241" width="26" height="6" rx="1" fill="rgba(200,155,60,0.15)" opacity="0.5" />
                <rect x="526" y="253" width="26" height="6" rx="1" fill="rgba(200,155,60,0.12)" opacity="0.5" />

                {/* Ground line */}
                <line x1="140" y1="350" x2="660" y2="350" stroke="#c89b3c" strokeWidth="1" opacity="0.25" />

                {/* Connection lines between towers */}
                <g opacity="0.15" strokeWidth="0.8" stroke="#c89b3c" strokeDasharray="4,4">
                  <line x1="260" y1="200" x2="345" y2="180" />
                  <line x1="345" y1="180" x2="435" y2="200" />
                  <line x1="180" y1="250" x2="260" y2="220" />
                  <line x1="435" y1="220" x2="520" y2="260" />
                </g>

                {/* Data pulse along connections */}
                <circle r="2" fill="#c89b3c" opacity="0.8">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M260,200 L345,180" />
                </circle>
                <circle r="2" fill="#4a90d9" opacity="0.6">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M345,180 L435,200" />
                </circle>

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                <text x="400" y="385" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="700" fill="#c89b3c" opacity="0.45" letterSpacing="0.15em" textAnchor="middle">ENTERPRISE INFRASTRUCTURE</text>

                <rect y="340" width="800" height="60" fill="url(#ent-bg)" opacity="0.5" />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Enterprise Infrastructure</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-10 bg-[#0a1628]" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseStats.map((stat, i) => (
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

      {/* ── DEPLOYMENT MODELS ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={depRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={depInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            DEPLOYMENT MODELS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={depInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Choose Your Deployment<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {deploymentModels.map((model, i) => {
              const ModelIcon = model.icon
              return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={depInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.72, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.22 } }}
                  className={`rounded-2xl p-7 shadow-[0_8px_36px_rgba(10,22,40,0.14)] transition-all duration-300 group relative ${
                    model.featured
                      ? 'bg-white border-2 border-gold/50 hover:border-gold hover:shadow-[0_12px_48px_rgba(200,155,60,0.18)]'
                      : 'bg-[#0a1628] border border-gold/20 hover:border-gold/40 hover:shadow-[0_12px_48px_rgba(10,22,40,0.28)]'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${
                    model.featured ? 'bg-gold/10 border border-gold/30' : 'bg-gold/15 border border-gold/25'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <ModelIcon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>

                  <div className={`text-[0.62rem] font-bold tracking-[0.2em] uppercase mb-3 ${
                    model.featured ? 'text-navy' : 'text-gold'
                  }`}>
                    {model.title}
                  </div>

                  <div className="flex items-center gap-1.5 mb-4">
                    <div className={`h-[1.5px] w-6 ${model.featured ? 'bg-gold' : 'bg-gold/60'}`} />
                    <div className={`w-1.5 h-1.5 rotate-45 border ${model.featured ? 'border-gold' : 'border-gold/50'}`} />
                    <div className={`h-[1.5px] w-6 ${model.featured ? 'bg-gold' : 'bg-gold/60'}`} />
                  </div>

                  <p className={`text-[0.82rem] leading-relaxed mb-6 ${
                    model.featured ? 'text-slate' : 'text-slate-300'
                  }`}>
                    {model.desc}
                  </p>

                  <ul className="space-y-2.5 mb-7">
                    {model.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className={`w-4 h-4 flex-shrink-0 ${model.featured ? 'text-gold' : 'text-gold/80'}`} strokeWidth={2.5} />
                        <span className={`text-[0.78rem] ${model.featured ? 'text-navy' : 'text-white/80'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase transition-all duration-200 ${
                      model.featured ? 'text-gold hover:text-gold-light' : 'text-gold/80 hover:text-gold'
                    }`}
                  >
                    GET STARTED
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
            ENTERPRISE CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Institutional Deployment. Trusted Infrastructure.<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {enterpriseCapabilities.map((cap, i) => {
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
                  <h3 className="font-heading text-[0.9rem] font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">{cap.text}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{cap.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={outcomeRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={outcomeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            BUSINESS OUTCOMES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={outcomeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Results That Drive Value<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item, i) => {
              const OutcomeIcon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={outcomeInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <OutcomeIcon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[0.72rem] font-bold text-navy uppercase tracking-wide">{item.title}</p>
                    <p className="text-[0.78rem] text-slate mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={procRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={procInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            IMPLEMENTATION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={procInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-12"
          >
            From Discovery to Production<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={procInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-navy font-heading font-bold text-[0.85rem]">{i + 1}</div>
                  <div>
                    <h4 className="font-heading text-[0.92rem] font-bold text-navy mb-1">{step}</h4>
                  </div>
                </div>
                {i < implementationSteps.length - 1 && (
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
          <motion.p initial={{ opacity: 0, y: 12 }} animate={ucInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2">USE CASES</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={ucInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-8">Enterprise in Action<span className="text-gold">.</span></motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={ucInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="bg-white rounded-2xl p-8 shadow-[0_6px_30px_rgba(10,22,40,0.08)] border border-gray-100">
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
            <p className="font-heading text-[1.1rem] md:text-[1.25rem] text-navy leading-[1.5] mb-4">{quoteData.text}</p>
            <p className="text-[0.82rem] text-slate font-semibold uppercase tracking-wider">— {quoteData.source}</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15">
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Calendar className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">Ready to Deploy at Enterprise Scale?</h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">Schedule an enterprise strategy session to discover the right deployment model for your organization.</p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Calendar className="w-4 h-4" />
              SCHEDULE ENTERPRISE REVIEW
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}