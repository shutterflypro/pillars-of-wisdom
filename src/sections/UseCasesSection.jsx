import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Landmark, Umbrella, HeartPulse, Users, Box, Cpu, Shield, BarChart3, Maximize, Gauge, ShieldCheck, TrendingUp,
} from 'lucide-react'

const useCases = [
  {
    icon: Landmark,
    title: 'Mortgage & Lending',
    items: [
      'Intelligent loan intake and automation',
      'Underwriting & eligibility decisioning',
      'Post-close compliance and monitoring',
      'Audit-ready reporting',
    ],
  },
  {
    icon: Landmark,
    title: 'Banking & Financial Services',
    items: [
      'AML/KYC and sanctions screening',
      'Policy and exception management',
      'Regulatory reporting automation',
      'Risk analytics and alerts',
    ],
  },
  {
    icon: Umbrella,
    title: 'Insurance',
    items: [
      'Policy intelligence and compliance',
      'Claims automation and fraud detection',
      'Underwriting support and risk scoring',
      'Solvency and regulatory reporting',
    ],
  },
  {
    icon: Landmark,
    title: 'Government & Public Sector',
    items: [
      'Document and case management',
      'Compliance and audit automation',
      'Citizen service intelligence',
      'Policy enforcement and oversight',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    items: [
      'Regulatory and privacy compliance',
      'Clinical document intelligence',
      'Prior authorization automation',
      'Audit trails and reporting',
    ],
  },
  {
    icon: Users,
    title: 'Wealth Management & Asset Management',
    items: [
      'Client onboarding and suitability',
      'Portfolio and risk analytics',
      'Trade surveillance and monitoring',
      'Regulatory reporting',
    ],
  },
  {
    icon: Box,
    title: 'Tokenized Real Estate',
    items: [
      'Issuance and onboarding automation',
      'Tokenized asset lifecycle management',
      'Investor verification and compliance',
      'Transparency and reporting on-chain',
    ],
  },
]

const advantageItems = [
  { icon: Cpu, title: 'AI-NATIVE ARCHITECTURE', desc: 'Built from the ground up for intelligence, automation, and adaptability.' },
  { icon: Shield, title: 'COMPLIANCE EMBEDDED', desc: 'Governance, controls, and auditability are built in — not bolted on.' },
  { icon: BarChart3, title: 'REAL-TIME INTELLIGENCE', desc: 'Unified data and analytics deliver insights when and where you need them.' },
  { icon: Maximize, title: 'BUILT TO SCALE', desc: 'Cloud-native, secure, and designed to grow with your business and needs.' },
]

const outcomeItems = [
  { icon: Gauge, title: 'INCREASE EFFICIENCY', desc: 'Automate operations and reduce manual work.' },
  { icon: ShieldCheck, title: 'REDUCE RISK', desc: 'Strengthen compliance and minimize exposure.' },
  { icon: Users, title: 'IMPROVE EXPERIENCE', desc: 'Deliver faster, more accurate outcomes your users trust.' },
  { icon: TrendingUp, title: 'DRIVE GROWTH', desc: 'Scale with confidence and enable new value.' },
]

export default function UseCasesSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14" ref={headerRef}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-gold" />
              <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">Use Cases</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-navy leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Purpose-Built for High-Stakes Industries.{' '}
              <span className="text-gold">Real Impact. Every Day.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1rem] text-slate leading-[1.72] max-w-[480px]"
            >
              Pillars of Wisdom's Institutional AI Operating Layer adapts to the complexity of regulated industries and asset classes — driving compliance, efficiency, and growth.
            </motion.p>
          </div>

          {/* Right — Industry Convergence SVG */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-64 lg:h-72 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)] group"
          >
            <svg
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="uc-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0a1628" />
                  <stop offset="40%" stopColor="#0f1f38" />
                  <stop offset="100%" stopColor="#0a1628" />
                </linearGradient>
                <linearGradient id="stream-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c89b3c" stopOpacity="0" />
                  <stop offset="15%" stopColor="#c89b3c" stopOpacity="0.5" />
                  <stop offset="40%" stopColor="#c89b3c" stopOpacity="0.35" />
                  <stop offset="65%" stopColor="#c89b3c" stopOpacity="0.6" />
                  <stop offset="85%" stopColor="#c89b3c" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#c89b3c" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="stream-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4a90d9" stopOpacity="0" />
                  <stop offset="15%" stopColor="#4a90d9" stopOpacity="0.4" />
                  <stop offset="40%" stopColor="#4a90d9" stopOpacity="0.25" />
                  <stop offset="65%" stopColor="#4a90d9" stopOpacity="0.5" />
                  <stop offset="85%" stopColor="#c89b3c" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#c89b3c" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="pillar-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#c89b3c" stopOpacity="1" />
                  <stop offset="100%" stopColor="#c89b3c" stopOpacity="0.9" />
                </linearGradient>
                <radialGradient id="uc-center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#c89b3c" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                </radialGradient>
                <filter id="uc-glow-filter">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="uc-soft-glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <pattern id="uc-subtle-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <rect width="32" height="32" fill="none" />
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.4" />
                </pattern>
              </defs>

              {/* Background */}
              <rect width="800" height="400" fill="url(#uc-bg-grad)" />
              <rect width="800" height="400" fill="url(#uc-subtle-grid)" />

              {/* Center glow behind pillar */}
              <ellipse cx="400" cy="200" rx="120" ry="180" fill="url(#uc-center-glow)" />

              {/* === 7 INCOMING STREAMS (LEFT SIDE) === */}
              {/* Stream 1 - Mortgage (y=40) - gold */}
              <path d="M80,40 C180,40 280,100 370,165" fill="none" stroke="url(#stream-gold)" strokeWidth="2" opacity="0.7">
                <animate attributeName="strokeWidth" values="2;2.8;2" dur="3s" repeatCount="indefinite" />
              </path>
              {/* Stream 2 - Banking (y=90) - blue */}
              <path d="M60,90 C160,90 270,130 370,175" fill="none" stroke="url(#stream-blue)" strokeWidth="1.8" opacity="0.6">
                <animate attributeName="strokeWidth" values="1.8;2.6;1.8" dur="3.5s" repeatCount="indefinite" />
              </path>
              {/* Stream 3 - Insurance (y=145) - gold */}
              <path d="M70,145 C170,145 275,175 370,188" fill="none" stroke="url(#stream-gold)" strokeWidth="1.6" opacity="0.55">
                <animate attributeName="strokeWidth" values="1.6;2.4;1.6" dur="4s" repeatCount="indefinite" />
              </path>
              {/* Stream 4 - Government (y=200) - blue, straight center */}
              <path d="M50,200 C160,200 280,200 370,200" fill="none" stroke="url(#stream-blue)" strokeWidth="2" opacity="0.65">
                <animate attributeName="strokeWidth" values="2;3;2" dur="2.8s" repeatCount="indefinite" />
              </path>
              {/* Stream 5 - Healthcare (y=255) - gold */}
              <path d="M70,255 C170,255 275,225 370,212" fill="none" stroke="url(#stream-gold)" strokeWidth="1.6" opacity="0.55">
                <animate attributeName="strokeWidth" values="1.6;2.4;1.6" dur="3.8s" repeatCount="indefinite" />
              </path>
              {/* Stream 6 - Wealth Mgmt (y=310) - blue */}
              <path d="M60,310 C160,310 270,270 370,228" fill="none" stroke="url(#stream-blue)" strokeWidth="1.8" opacity="0.6">
                <animate attributeName="strokeWidth" values="1.8;2.6;1.8" dur="3.2s" repeatCount="indefinite" />
              </path>
              {/* Stream 7 - Tokenized RE (y=360) - gold */}
              <path d="M80,360 C180,360 280,310 370,242" fill="none" stroke="url(#stream-gold)" strokeWidth="2" opacity="0.7">
                <animate attributeName="strokeWidth" values="2;2.8;2" dur="2.6s" repeatCount="indefinite" />
              </path>

              {/* === STREAM LABELS (LEFT) === */}
              <text x="18" y="43" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#c89b3c" opacity="0.75" letterSpacing="0.1em">MORTGAGE</text>
              <text x="8" y="93" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#4a90d9" opacity="0.65" letterSpacing="0.1em">BANKING</text>
              <text x="14" y="148" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#c89b3c" opacity="0.6" letterSpacing="0.1em">INSURANCE</text>
              <text x="2" y="203" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#4a90d9" opacity="0.65" letterSpacing="0.08em">GOVERNMENT</text>
              <text x="14" y="258" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#c89b3c" opacity="0.6" letterSpacing="0.1em">HEALTHCARE</text>
              <text x="8" y="313" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#4a90d9" opacity="0.65" letterSpacing="0.08em">WEALTH</text>
              <text x="18" y="363" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#c89b3c" opacity="0.75" letterSpacing="0.08em">REAL ESTATE</text>

              {/* === LEFT ORIGIN DOTS === */}
              <circle cx="85" cy="40" r="4" fill="#c89b3c" opacity="0.9" filter="url(#uc-soft-glow)">
                <animate attributeName="r" values="4;5.5;4" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="65" cy="90" r="3.5" fill="#4a90d9" opacity="0.85" filter="url(#uc-soft-glow)">
                <animate attributeName="r" values="3.5;5;3.5" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="75" cy="145" r="3.5" fill="#c89b3c" opacity="0.8" filter="url(#uc-soft-glow)">
                <animate attributeName="r" values="3.5;5;3.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="55" cy="200" r="4" fill="#4a90d9" opacity="0.85" filter="url(#uc-soft-glow)">
                <animate attributeName="r" values="4;5.5;4" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="75" cy="255" r="3.5" fill="#c89b3c" opacity="0.8" filter="url(#uc-soft-glow)">
                <animate attributeName="r" values="3.5;5;3.5" dur="3.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="65" cy="310" r="3.5" fill="#4a90d9" opacity="0.85" filter="url(#uc-soft-glow)">
                <animate attributeName="r" values="3.5;5;3.5" dur="3.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="85" cy="360" r="4" fill="#c89b3c" opacity="0.9" filter="url(#uc-soft-glow)">
                <animate attributeName="r" values="4;5.5;4" dur="2.6s" repeatCount="indefinite" />
              </circle>

              {/* === CENTRAL PLATFORM PILLAR (convergence bar) === */}
              <rect x="385" y="40" width="30" height="320" rx="4" fill="url(#pillar-grad)" opacity="0.18" />
              <rect x="393" y="40" width="14" height="320" rx="3" fill="url(#pillar-grad)" opacity="0.35" />
              {/* Pillar edge glow lines */}
              <line x1="385" y1="50" x2="385" y2="350" stroke="#c89b3c" strokeWidth="0.8" opacity="0.4" />
              <line x1="415" y1="50" x2="415" y2="350" stroke="#c89b3c" strokeWidth="0.8" opacity="0.4" />
              {/* Center pillar label */}
              <text x="400" y="195" fontFamily="Inter, sans-serif" fontSize="6" fontWeight="700" fill="#c89b3c" opacity="0.6" letterSpacing="0.15em" textAnchor="middle" transform="rotate(-90, 400, 195)">PLATFORM INTELLIGENCE</text>

              {/* Moving data pulses inside pillar */}
              <rect x="394" y="40" width="12" height="18" rx="2" fill="#c89b3c" opacity="0.35">
                <animate attributeName="y" values="40;340;40" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0.15;0.35" dur="4s" repeatCount="indefinite" />
              </rect>
              <rect x="394" y="340" width="12" height="14" rx="2" fill="#4a90d9" opacity="0.25">
                <animate attributeName="y" values="340;40;340" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.1;0.25" dur="5s" repeatCount="indefinite" />
              </rect>

              {/* === UNIFIED OUTPUT STREAMS (RIGHT SIDE) === */}
              {/* Three golden output ribbons from the pillar */}
              <path d="M430,170 C520,170 600,140 720,120" fill="none" stroke="#c89b3c" strokeWidth="2.5" opacity="0.7" filter="url(#uc-soft-glow)">
                <animate attributeName="strokeWidth" values="2.5;3.5;2.5" dur="2.5s" repeatCount="indefinite" />
              </path>
              <path d="M430,200 C530,200 620,200 720,200" fill="none" stroke="#c89b3c" strokeWidth="3" opacity="0.8" filter="url(#uc-soft-glow)">
                <animate attributeName="strokeWidth" values="3;4;3" dur="2.2s" repeatCount="indefinite" />
              </path>
              <path d="M430,230 C520,230 600,260 720,280" fill="none" stroke="#c89b3c" strokeWidth="2.5" opacity="0.7" filter="url(#uc-soft-glow)">
                <animate attributeName="strokeWidth" values="2.5;3.5;2.5" dur="2.8s" repeatCount="indefinite" />
              </path>

              {/* Output stream glow width effect */}
              <path d="M430,170 C520,170 600,140 720,120" fill="none" stroke="#c89b3c" strokeWidth="8" opacity="0.08" />
              <path d="M430,200 C530,200 620,200 720,200" fill="none" stroke="#c89b3c" strokeWidth="10" opacity="0.08" />
              <path d="M430,230 C520,230 600,260 720,280" fill="none" stroke="#c89b3c" strokeWidth="8" opacity="0.08" />

              {/* Right-side destination dots */}
              <circle cx="720" cy="120" r="5" fill="#c89b3c" opacity="0.9" filter="url(#uc-glow-filter)">
                <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="720" cy="200" r="6" fill="#c89b3c" opacity="0.95" filter="url(#uc-glow-filter)">
                <animate attributeName="r" values="6;8;6" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="720" cy="280" r="5" fill="#c89b3c" opacity="0.9" filter="url(#uc-glow-filter)">
                <animate attributeName="r" values="5;7;5" dur="2.8s" repeatCount="indefinite" />
              </circle>

              {/* Right output labels */}
              <text x="735" y="123" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#c89b3c" opacity="0.8" letterSpacing="0.12em">COMPLIANCE</text>
              <text x="735" y="203" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#c89b3c" opacity="0.85" letterSpacing="0.12em">EFFICIENCY</text>
              <text x="735" y="283" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#c89b3c" opacity="0.8" letterSpacing="0.12em">GROWTH</text>

              {/* === ANIMATED PARTICLES (flowing through streams) === */}
              {/* Mortgage stream particle */}
              <circle r="2.5" fill="#c89b3c" opacity="0.9">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M85,40 C180,40 280,100 370,165" />
              </circle>
              {/* Banking stream particle */}
              <circle r="2" fill="#4a90d9" opacity="0.7">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M65,90 C160,90 270,130 370,175" />
              </circle>
              {/* Insurance stream particle */}
              <circle r="2" fill="#c89b3c" opacity="0.7">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M75,145 C170,145 275,175 370,188" />
              </circle>
              {/* Government stream particle */}
              <circle r="2.5" fill="#4a90d9" opacity="0.8">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M55,200 C160,200 280,200 370,200" />
              </circle>
              {/* Healthcare stream particle */}
              <circle r="2" fill="#c89b3c" opacity="0.7">
                <animateMotion dur="3.6s" repeatCount="indefinite" path="M75,255 C170,255 275,225 370,212" />
              </circle>
              {/* Wealth stream particle */}
              <circle r="2" fill="#4a90d9" opacity="0.7">
                <animateMotion dur="2.9s" repeatCount="indefinite" path="M65,310 C160,310 270,270 370,228" />
              </circle>
              {/* Tokenized RE stream particle */}
              <circle r="2.5" fill="#c89b3c" opacity="0.9">
                <animateMotion dur="2.6s" repeatCount="indefinite" path="M85,360 C180,360 280,310 370,242" />
              </circle>

              {/* Output particles */}
              <circle r="3" fill="#c89b3c" opacity="0.8">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M430,170 C520,170 600,140 720,120" />
              </circle>
              <circle r="3.5" fill="#c89b3c" opacity="0.9">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M430,200 C530,200 620,200 720,200" />
              </circle>
              <circle r="3" fill="#c89b3c" opacity="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" path="M430,230 C520,230 600,260 720,280" />
              </circle>

              {/* === DECORATIVE TOUCHES === */}
              {/* Subtle scan line effect */}
              <rect x="0" y="0" width="800" height="2" fill="#c89b3c" opacity="0.04">
                <animate attributeName="y" values="0;400;0" dur="8s" repeatCount="indefinite" />
              </rect>

              {/* Corner accent marks */}
              <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.15" />
              <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.15" />
              <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.15" />
              <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.15" />

              {/* Top/bottom subtle fade bars */}
              <rect width="800" height="25" fill="url(#uc-bg-grad)" opacity="0.5" />
              <rect y="375" width="800" height="25" fill="url(#uc-bg-grad)" opacity="0.5" />
            </svg>

            {/* Live badge overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/70 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">
                High-Stakes Industry Coverage
              </span>
            </div>
          </motion.div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7" ref={contentRef}>
          {/* LEFT — advantage + outcomes */}
          <div className="lg:col-span-5 space-y-5">
            {/* Pillars Advantage */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a1628] rounded-2xl p-6 shadow-[0_8px_36px_rgba(10,22,40,0.22)] border border-gold/15"
            >
              <p className="text-[0.62rem] font-bold text-gold tracking-[0.2em] uppercase mb-5">
                The Pillars of Wisdom Advantage
              </p>
              <div className="grid grid-cols-2 gap-5">
                {advantageItems.map(({ icon: Icon, title, desc }) => (
                  <div key={title}>
                    <Icon className="w-5 h-5 text-gold mb-2" strokeWidth={1.5} />
                    <p className="text-[0.65rem] font-bold text-white uppercase tracking-wider">{title}</p>
                    <p className="text-[0.72rem] text-slate-400 mt-1 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(10,22,40,0.07)] border border-gray-100"
            >
              <p className="text-center text-[0.62rem] font-bold text-gold tracking-[0.18em] uppercase mb-5">
                Business Outcomes That Drive Value
              </p>
              <div className="flex items-center justify-center gap-0 mb-5">
                <div className="h-px flex-1 bg-gold/20" />
                <div className="w-2 h-2 rotate-45 border border-gold/40 mx-2 flex-shrink-0" />
                <div className="h-px flex-1 bg-gold/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {outcomeItems.map(({ icon: Icon, title, desc }) => (
                  <div key={title}>
                    <Icon className="w-5 h-5 text-gold mb-1.5" strokeWidth={1.5} />
                    <p className="text-[0.65rem] font-bold text-navy uppercase tracking-wider">{title}</p>
                    <p className="text-[0.72rem] text-slate mt-1 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — 7 industry cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map(({ icon: Icon, title, items }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 22 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 shadow-[0_4px_18px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(10,22,40,0.11)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-[0.9rem] font-bold text-navy group-hover:text-gold transition-colors duration-200">
                      {title}
                    </h3>
                    <div className="h-[2px] w-6 bg-gold mt-1.5" />
                  </div>
                </div>
                <ul className="space-y-1.5 mt-3">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2 text-[0.75rem] text-slate">
                      <span className="w-1 h-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
