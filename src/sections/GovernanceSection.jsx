import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Scale, ShieldCheck, Fingerprint, Check, Shield, Server, Cloud, FileCheck } from 'lucide-react'

const cards = [
  {
    icon: Scale,
    title: 'Regulatory Alignment',
    desc: 'Built to support AML/KYC, OFAC, BSA, SAR/CTR, examiner readiness, and cross-jurisdiction compliance.',
    items: ['AML & KYC Automation', 'Policy Enforcement', 'Regulatory Rules Engine', 'Examiner Workflows', 'Immutable Audit Trails', 'Jurisdictional Reporting'],
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Architecture',
    desc: 'Role-segmented access, microsegmentation, and blockchain-backed compliance records protect every workflow.',
    items: ['Role-Based Access', 'Tamper-Proof Records', 'Microsegmentation', 'Continuous Verification', 'Infrastructure Hardening', 'Data Residency Controls'],
  },
  {
    icon: Fingerprint,
    title: 'Identity Sovereignty',
    desc: 'Institution-controlled deployment with sovereign identity governance across tenants, environments, and data.',
    items: ['Tenant Isolation', 'Customer-Managed Keys', 'Sovereign Hosting', 'SCIM / SSO Integration', 'Identity Governance', 'Lifecycle Management'],
  },
]

const bottomBar = [
  { icon: Shield, label: 'SOVEREIGN BY DESIGN' },
  { icon: Server, label: 'ENTERPRISE SCALE' },
  { icon: Cloud, label: 'HYBRID DEPLOYMENT' },
  { icon: FileCheck, label: 'COMPLIANCE EMBEDDED' },
]

export default function GovernanceSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header row — text left, building photo right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14" ref={headerRef}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-gold" />
              <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">
                AI, Security & Compliance
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-navy leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Institutional Governance<br />
              Embedded by Design
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1rem] text-slate leading-[1.72] max-w-[480px]"
            >
              Compliance, security, and governed AI controls are integrated at the architecture level — not bolted on after deployment.
            </motion.p>
          </div>

          {/* Right — Governed Infrastructure SVG */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-64 lg:h-72 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.15)] group"
          >
            <svg
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="gov-bg" cx="30%" cy="40%" r="80%">
                  <stop offset="0%" stopColor="#142840" />
                  <stop offset="50%" stopColor="#0f1d32" />
                  <stop offset="100%" stopColor="#0a1628" />
                </radialGradient>
                <radialGradient id="gov-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="gov-glow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#4a90d9" stopOpacity="0" />
                </radialGradient>
                <filter id="gov-blur">
                  <feGaussianBlur stdDeviation="2" />
                </filter>
                <filter id="gold-glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c89b3c" stopOpacity="0" />
                  <stop offset="30%" stopColor="#c89b3c" stopOpacity="0.5" />
                  <stop offset="70%" stopColor="#c89b3c" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="line-v" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c89b3c" stopOpacity="0" />
                  <stop offset="30%" stopColor="#c89b3c" stopOpacity="0.4" />
                  <stop offset="70%" stopColor="#c89b3c" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                </linearGradient>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="none" />
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                </pattern>
              </defs>

              {/* Background */}
              <rect width="800" height="400" fill="url(#gov-bg)" />
              <rect width="800" height="400" fill="url(#grid-pattern)" />

              {/* Ambient glows */}
              <ellipse cx="260" cy="180" rx="200" ry="140" fill="url(#gov-glow)" />
              <ellipse cx="600" cy="280" rx="160" ry="120" fill="url(#gov-glow2)" />
              <ellipse cx="150" cy="340" rx="100" ry="80" fill="url(#gov-glow2)" />

              {/* Central shield shape */}
              <g transform="translate(400, 175)">
                <path d="M0,-65 L50,-42 L50,15 L0,55 L-50,15 L-50,-42 Z" fill="none" stroke="#c89b3c" strokeWidth="1.5" opacity="0.7" />
                <path d="M0,-50 L38,-33 L38,10 L0,42 L-38,10 L-38,-33 Z" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="0.8" opacity="0.5" />
                <path d="M0,-35 L26,-23 L26,5 L0,28 L-26,5 L-26,-23 Z" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.5" opacity="0.4" />
                {/* Inner checkmark */}
                <path d="M-10,-2 L-3,6 L12,-10" fill="none" stroke="#c89b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#gold-glow)" opacity="0.9" />
              </g>

              {/* Network connection lines */}
              <g opacity="0.4">
                <line x1="120" y1="120" x2="350" y2="175" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="4,4" />
                <line x1="350" y1="175" x2="680" y2="140" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="4,4" />
                <line x1="150" y1="280" x2="350" y2="200" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="4,4" />
                <line x1="350" y1="200" x2="620" y2="290" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="4,4" />
                <line x1="120" y1="120" x2="150" y2="280" stroke="#c89b3c" strokeWidth="0.5" strokeDasharray="3,6" opacity="0.5" />
                <line x1="680" y1="140" x2="620" y2="290" stroke="#c89b3c" strokeWidth="0.5" strokeDasharray="3,6" opacity="0.5" />
                <line x1="260" y1="90" x2="400" y2="130" stroke="#4a90d9" strokeWidth="0.5" strokeDasharray="3,5" opacity="0.35" />
                <line x1="540" y1="90" x2="400" y2="130" stroke="#4a90d9" strokeWidth="0.5" strokeDasharray="3,5" opacity="0.35" />
                <line x1="400" y1="260" x2="400" y2="340" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="4,4" />
                <line x1="260" y1="320" x2="400" y2="340" stroke="#c89b3c" strokeWidth="0.5" strokeDasharray="3,6" opacity="0.4" />
                <line x1="540" y1="320" x2="400" y2="340" stroke="#c89b3c" strokeWidth="0.5" strokeDasharray="3,6" opacity="0.4" />
              </g>

              {/* Solid data flow lines */}
              <g>
                <line x1="120" y1="120" x2="260" y2="90" stroke="url(#line-grad)" strokeWidth="1" />
                <line x1="260" y1="90" x2="400" y2="130" stroke="url(#line-grad)" strokeWidth="1" />
                <line x1="540" y1="90" x2="680" y2="140" stroke="url(#line-grad)" strokeWidth="1" />
                <line x1="400" y1="130" x2="540" y2="90" stroke="url(#line-grad)" strokeWidth="1" />
                <line x1="150" y1="280" x2="260" y2="320" stroke="url(#line-v)" strokeWidth="1" />
                <line x1="260" y1="320" x2="400" y2="340" stroke="url(#line-v)" strokeWidth="1" />
                <line x1="400" y1="340" x2="540" y2="320" stroke="url(#line-v)" strokeWidth="1" />
                <line x1="540" y1="320" x2="620" y2="290" stroke="url(#line-v)" strokeWidth="1" />
              </g>

              {/* Primary nodes */}
              <g filter="url(#gold-glow)">
                <circle cx="120" cy="120" r="22" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1.2" />
                <circle cx="120" cy="120" r="14" fill="rgba(200,155,60,0.25)" stroke="#c89b3c" strokeWidth="0.8" />
                <circle cx="680" cy="140" r="20" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="1" />
                <circle cx="680" cy="140" r="12" fill="rgba(200,155,60,0.22)" stroke="#c89b3c" strokeWidth="0.7" />
                <circle cx="150" cy="280" r="18" fill="rgba(200,155,60,0.10)" stroke="#c89b3c" strokeWidth="0.8" />
                <circle cx="150" cy="280" r="10" fill="rgba(200,155,60,0.20)" stroke="#c89b3c" strokeWidth="0.6" />
                <circle cx="620" cy="290" r="20" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="1" />
                <circle cx="620" cy="290" r="12" fill="rgba(200,155,60,0.22)" stroke="#c89b3c" strokeWidth="0.7" />
              </g>

              {/* Secondary nodes */}
              <g>
                <circle cx="260" cy="90" r="8" fill="rgba(74,144,217,0.2)" stroke="#4a90d9" strokeWidth="0.8" />
                <circle cx="540" cy="90" r="8" fill="rgba(74,144,217,0.2)" stroke="#4a90d9" strokeWidth="0.8" />
                <circle cx="260" cy="320" r="8" fill="rgba(74,144,217,0.15)" stroke="#4a90d9" strokeWidth="0.7" />
                <circle cx="540" cy="320" r="8" fill="rgba(74,144,217,0.15)" stroke="#4a90d9" strokeWidth="0.7" />
              </g>

              {/* Tertiary micro nodes */}
              <g opacity="0.5">
                <circle cx="80" cy="200" r="3" fill="#c89b3c" />
                <circle cx="720" cy="210" r="3" fill="#c89b3c" />
                <circle cx="200" cy="340" r="3" fill="#c89b3c" />
                <circle cx="600" cy="55" r="3" fill="#c89b3c" />
                <circle cx="340" cy="280" r="2.5" fill="#4a90d9" />
                <circle cx="480" cy="280" r="2.5" fill="#4a90d9" />
                <circle cx="700" cy="350" r="2.5" fill="#4a90d9" />
                <circle cx="60" cy="160" r="2.5" fill="#4a90d9" />
              </g>

              {/* Micro connection lines */}
              <g opacity="0.25" strokeWidth="0.4" stroke="#c89b3c">
                <line x1="80" y1="200" x2="120" y2="120" />
                <line x1="720" y1="210" x2="680" y2="140" />
                <line x1="200" y1="340" x2="150" y2="280" />
                <line x1="600" y1="55" x2="540" y2="90" />
                <line x1="340" y1="280" x2="400" y2="260" />
                <line x1="480" y1="280" x2="400" y2="260" />
                <line x1="700" y1="350" x2="620" y2="290" />
                <line x1="60" y1="160" x2="120" y2="120" />
              </g>

              {/* Lock icon at top-left primary node */}
              <g transform="translate(120, 120)" opacity="0.8">
                <rect x="-5" y="-3" width="10" height="7" rx="1.5" fill="none" stroke="#c89b3c" strokeWidth="1" />
                <path d="M-3,-3 L-3,-6 A3,3 0 0,1 3,-6 L3,-3" fill="none" stroke="#c89b3c" strokeWidth="0.8" />
              </g>

              {/* Database icon at top-right primary node */}
              <g transform="translate(680, 140)" opacity="0.8">
                <ellipse cx="0" cy="-4" rx="6" ry="2.5" fill="none" stroke="#c89b3c" strokeWidth="0.8" />
                <path d="M-6,-4 L-6,4 A6,2.5 0 0,0 6,4 L6,-4" fill="none" stroke="#c89b3c" strokeWidth="0.8" />
                <ellipse cx="0" cy="4" rx="6" ry="2.5" fill="none" stroke="#c89b3c" strokeWidth="0.8" />
              </g>

              {/* Key/identity icon at bottom-left node */}
              <g transform="translate(150, 280)" opacity="0.7">
                <circle cx="-3" cy="0" r="3" fill="none" stroke="#c89b3c" strokeWidth="0.8" />
                <line x1="0" y1="0" x2="5" y2="0" stroke="#c89b3c" strokeWidth="0.8" />
                <line x1="5" y1="0" x2="5" y2="-3" stroke="#c89b3c" strokeWidth="0.6" />
              </g>

              {/* Cloud/server icon at bottom-right node */}
              <g transform="translate(620, 290)" opacity="0.7">
                <rect x="-6" y="-4" width="12" height="8" rx="1" fill="none" stroke="#c89b3c" strokeWidth="0.8" />
                <line x1="-6" y1="-1" x2="6" y2="-1" stroke="#c89b3c" strokeWidth="0.4" />
                <line x1="-6" y1="1" x2="6" y2="1" stroke="#c89b3c" strokeWidth="0.4" />
                <circle cx="-3" cy="-2.5" r="0.7" fill="#c89b3c" />
                <circle cx="-3" cy="0.5" r="0.7" fill="#c89b3c" />
              </g>

              {/* Pulsing accent circles */}
              <circle cx="400" cy="175" r="70" fill="none" stroke="#c89b3c" strokeWidth="0.3" opacity="0.3">
                <animate attributeName="r" values="70;85;70" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="175" r="90" fill="none" stroke="#c89b3c" strokeWidth="0.2" opacity="0.15">
                <animate attributeName="r" values="90;105;90" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.15;0.05;0.15" dur="5s" repeatCount="indefinite" />
              </circle>

              {/* Data flow pulse on main lines */}
              <circle r="3" fill="#c89b3c" opacity="0.8">
                <animateMotion dur="3s" repeatCount="indefinite" path="M120,120 L260,90 L400,130" />
              </circle>
              <circle r="3" fill="#c89b3c" opacity="0.6">
                <animateMotion dur="4s" repeatCount="indefinite" path="M680,140 L540,90 L400,130" />
              </circle>
              <circle r="2.5" fill="#4a90d9" opacity="0.6">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M150,280 L260,320 L400,340" />
              </circle>
              <circle r="2.5" fill="#4a90d9" opacity="0.5">
                <animateMotion dur="4.5s" repeatCount="indefinite" path="M620,290 L540,320 L400,340" />
              </circle>

              {/* Top gradient fade */}
              <rect width="800" height="40" fill="url(#gov-bg)" opacity="0.3" />
              {/* Bottom gradient */}
              <rect y="300" width="800" height="100" fill="url(#gov-bg)" opacity="0.5" />
            </svg>

            {/* Text overlay on top of SVG */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a1628]/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">
                Governed Infrastructure
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3 governance cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" ref={cardsRef}>
          {cards.map(({ icon: Icon, title, desc, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(10,22,40,0.08)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_10px_40px_rgba(10,22,40,0.12)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 350 }}
                >
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 className="font-heading text-[1.05rem] font-bold text-navy group-hover:text-gold transition-colors duration-250">
                    {title}
                  </h3>
                  <div className="h-[2px] w-8 bg-gold mt-2" />
                </div>
              </div>

              <p className="text-[0.82rem] text-slate leading-relaxed mb-5">{desc}</p>

              <div className="grid grid-cols-2 gap-2">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-[0.75rem] text-navy/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 mt-14 py-6">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {bottomBar.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={cardsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-2"
              >
                <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="text-[0.72rem] font-bold text-navy uppercase tracking-[0.14em]">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
