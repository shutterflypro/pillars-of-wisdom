import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Lock, Users, Server, Fingerprint, FileCheck,
  ShieldCheck, ScanEye, RefreshCw, Eye, KeyRound, Globe,
  Check, ArrowRight, Calendar, Cpu,
} from 'lucide-react'

const securityStats = [
  { value: 'Institutional', label: 'Platform Uptime' },
  { value: 'AES-256', label: 'Encryption at Rest' },
  { value: 'TLS 1.3', label: 'Encryption in Transit' },
  { value: '24/7', label: 'Threat Monitoring' },
]

const securityFeatures = [
  { icon: Shield, text: 'Zero-Trust Architecture', desc: 'Every request is authenticated, authorized, and audited. No implicit trust anywhere in the stack.' },
  { icon: Lock, text: 'End-to-End Encryption', desc: 'TLS 1.3 in transit. AES-256 at rest. Institution-managed keys available for full data control.' },
  { icon: Users, text: 'Role-Based Access Control', desc: 'Granular RBAC with role-segmented access, hierarchical permissions, and MFA enforcement.' },
  { icon: Server, text: 'Strict Tenant Isolation', desc: 'Dedicated boundaries at the data, network, and identity layers. No cross-tenant data leakage.' },
  { icon: Fingerprint, text: 'Identity Sovereignty', desc: 'Institution-controlled deployment with dedicated identity management and self-managed credentials.' },
  { icon: FileCheck, text: 'Policy Automation', desc: 'SOC 2-ready architecture, HIPAA-aware workflows, PCI-aligned operational controls. Tamper-evident audit records and automated evidence collection.' },
  { icon: ScanEye, text: 'Threat Detection', desc: 'Continuous monitoring with intelligent anomaly detection and real-time alerting across all layers.' },
  { icon: RefreshCw, text: 'Controls Validation', desc: 'Ongoing controls validation and drift detection to maintain security posture at all times.' },
  { icon: Eye, text: 'Audit Transparency', desc: 'Every action logged, timestamped, and tamper-proof. Full visibility into who did what, when.' },
]

const securityLayers = [
  { label: 'Perimeter', items: ['WAF & DDoS Protection', 'Rate Limiting', 'Geo-Restrictions'] },
  { label: 'Network', items: ['VPC Isolation', 'Private Endpoints', 'IP Whitelisting'] },
  { label: 'Application', items: ['API Authentication', 'Session Management', 'Input Validation'] },
  { label: 'Data', items: ['Encryption at Rest', 'Encryption in Transit', 'Key Management'] },
]

const complianceBadges = [
  { label: 'SOC 2-Ready Architecture', icon: ShieldCheck },
  { label: 'HIPAA-Aware Workflows', icon: FileCheck },
  { label: 'PCI-Aligned Controls', icon: Lock },
  { label: 'GDPR', icon: Globe },
  { label: 'FedRAMP-Oriented Deployment', icon: Server },
]

const useCases = [
  'Automated policy evidence collection and reporting',
  'Real-time threat detection and incident response',
  'Role-based access provisioning and deprovisioning',
  'Data control and residency enforcement',
]

const quoteData = {
  text: 'Pillars of Wisdom gave us confidence that every workflow runs within our security perimeter — no gaps, no exceptions.',
  source: 'CISO, Fortune 500 Financial Institution',
}

export default function SecurityPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const layersRef = useRef(null)
  const layersInView = useInView(layersRef, { once: true, margin: '-40px' })
  const complianceRef = useRef(null)
  const complianceInView = useInView(complianceRef, { once: true, margin: '-40px' })
  const useCasesRef = useRef(null)
  const useCasesInView = useInView(useCasesRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white relative">
      {/* ── HERO SECTION ── */}
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
                <span>Security & Governance</span>
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
                  <Shield className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">SECURITY & GOVERNANCE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Institutional Security.<br />Governance by Design.
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
                Institutional security and policy controls built into every layer of the platform — from perimeter to data, from policy to audit.
              </motion.p>
            </div>

            {/* Right — Security SVG graphic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="sec-hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="sec-hero-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="sec-hero-blue" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#4a90d9" stopOpacity="0" />
                  </radialGradient>
                  <filter id="sec-hero-g">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="sec-hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>

                <rect width="800" height="400" fill="url(#sec-hero-bg)" />
                <rect width="800" height="400" fill="url(#sec-hero-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#sec-hero-glow)" />
                <ellipse cx="600" cy="320" rx="120" ry="80" fill="url(#sec-hero-blue)" />

                {/* Central shield */}
                <path d="M400,100 L460,130 L460,230 Q460,290 400,320 Q340,290 340,230 L340,130 Z" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="1.5" />
                <path d="M400,120 L448,145 L448,225 Q448,270 400,296 Q352,270 352,225 L352,145 Z" fill="none" stroke="#c89b3c" strokeWidth="0.7" opacity="0.4" />
                <path d="M400,140 L436,158 L436,220 Q436,252 400,272 Q364,252 364,220 L364,158 Z" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="0.5" filter="url(#sec-hero-g)" />

                {/* Checkmark inside shield */}
                <path d="M380,205 L395,220 L422,185" fill="none" stroke="#c89b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />

                {/* Concentric defense rings */}
                <circle cx="400" cy="210" r="50" fill="none" stroke="#c89b3c" strokeWidth="0.4" opacity="0.2" />
                <circle cx="400" cy="210" r="80" fill="none" stroke="#c89b3c" strokeWidth="0.3" opacity="0.15">
                  <animate attributeName="r" values="80;95;80" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.15;0.06;0.15" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="210" r="110" fill="none" stroke="#c89b3c" strokeWidth="0.2" opacity="0.1">
                  <animate attributeName="r" values="110;128;110" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.1;0.03;0.1" dur="5s" repeatCount="indefinite" />
                </circle>

                {/* Security nodes around the shield */}
                <g opacity="0.75">
                  <circle cx="220" cy="170" r="14" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="1" />
                  <circle cx="220" cy="170" r="8" fill="rgba(200,155,60,0.2)" />
                  <circle cx="580" cy="165" r="14" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="1" />
                  <circle cx="580" cy="165" r="8" fill="rgba(74,144,217,0.2)" />
                  <circle cx="250" cy="290" r="13" fill="rgba(74,144,217,0.08)" stroke="#4a90d9" strokeWidth="0.9" />
                  <circle cx="250" cy="290" r="7.5" fill="rgba(74,144,217,0.15)" />
                  <circle cx="550" cy="295" r="14" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.9" />
                  <circle cx="550" cy="295" r="8" fill="rgba(200,155,60,0.16)" />
                  <circle cx="320" cy="340" r="11" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.7" />
                  <circle cx="320" cy="340" r="6" fill="rgba(200,155,60,0.14)" />
                  <circle cx="480" cy="345" r="12" fill="rgba(74,144,217,0.08)" stroke="#4a90d9" strokeWidth="0.7" />
                  <circle cx="480" cy="345" r="6.5" fill="rgba(74,144,217,0.14)" />
                </g>

                {/* Connection lines from nodes to shield */}
                <g opacity="0.25" strokeWidth="0.8">
                  <path d="M220,170 Q290,180 340,195" fill="none" stroke="#c89b3c" strokeDasharray="4,3" />
                  <path d="M580,165 Q510,178 460,195" fill="none" stroke="#4a90d9" strokeDasharray="4,3" />
                  <path d="M250,290 Q300,260 345,230" fill="none" stroke="#4a90d9" strokeDasharray="3,4" />
                  <path d="M550,295 Q500,265 455,230" fill="none" stroke="#c89b3c" strokeDasharray="4,3" />
                  <path d="M320,340 Q350,295 380,240" fill="none" stroke="#c89b3c" strokeDasharray="3,4" />
                  <path d="M480,345 Q450,300 420,245" fill="none" stroke="#4a90d9" strokeDasharray="3,4" />
                </g>

                {/* Animated flow particles toward shield */}
                <circle r="1.8" fill="#c89b3c" opacity="0.8">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M220,170 Q290,180 340,195" />
                </circle>
                <circle r="1.8" fill="#4a90d9" opacity="0.6">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M580,165 Q510,178 460,195" />
                </circle>
                <circle r="1.5" fill="#4a90d9" opacity="0.5">
                  <animateMotion dur="3.2s" repeatCount="indefinite" path="M250,290 Q300,260 345,230" />
                </circle>
                <circle r="1.8" fill="#c89b3c" opacity="0.7">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M550,295 Q500,265 455,230" />
                </circle>

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                {/* Bottom fade */}
                <rect y="340" width="800" height="60" fill="url(#sec-hero-bg)" opacity="0.7" />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">Secured & Encrypted</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-10 bg-[#0a1628]" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {securityStats.map((stat, i) => (
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

      {/* ── KEY CAPABILITIES ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={featuresRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-6"
          >
            SECURITY CAPABILITIES
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {securityFeatures.map((feature, i) => {
              const FeatureIcon = feature.icon
              return (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_32px_rgba(10,22,40,0.11)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FeatureIcon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">{feature.text}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECURITY ARCHITECTURE LAYERS ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={layersRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={layersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            DEFENSE IN DEPTH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={layersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-12"
          >
            Layered Security Architecture<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityLayers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, y: 24 }}
                animate={layersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0a1628] rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center">
                    <span className="text-gold font-heading font-bold text-[0.75rem]">{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-[0.9rem] font-bold text-white group-hover:text-gold transition-colors duration-200">{layer.label}</h3>
                </div>
                <ul className="space-y-2.5">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.82rem] text-white/70">
                      <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE BADGES ── */}
      <section className="py-16 bg-[#f8f7f4] border-t border-gray-100 relative" ref={complianceRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            GOVERNANCE & CERTIFICATIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Audit-Ready Infrastructure<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {complianceBadges.map((badge, i) => {
              const BadgeIcon = badge.icon
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={complianceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.10)] transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <BadgeIcon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="font-heading text-[0.8rem] font-bold text-navy group-hover:text-gold transition-colors duration-200">{badge.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={useCasesRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            USE CASES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-8"
          >
            Security in Practice<span className="text-gold">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-8 shadow-[0_6px_30px_rgba(10,22,40,0.08)] border border-gray-100"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {useCases.map((useCase, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.92rem] text-slate leading-relaxed">
                  <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold" strokeWidth={2.5} />
                  </div>
                  <span>{useCase}</span>
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
              Ready to Strengthen Your<br />Security Posture?
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a security review with our team to discover how Pillars of Wisdom protects your data and workflows.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Calendar className="w-4 h-4" />
              REQUEST SECURITY REVIEW
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}