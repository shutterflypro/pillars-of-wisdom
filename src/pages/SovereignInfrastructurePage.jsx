import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Lock, Server, Users, Settings, Fingerprint,
  ArrowRight, Calendar, Check, ShieldCheck, Globe,
  KeyRound, ScanEye, RefreshCw,
} from 'lucide-react'

const pillarStats = [
  { value: '99.99%', label: 'Platform Uptime' },
  { value: 'AES-256', label: 'Encryption at Rest' },
  { value: 'TLS 1.3', label: 'Encryption in Transit' },
  { value: '24/7', label: 'Threat Monitoring' },
]

const capabilities = [
  { icon: Lock, title: 'Zero-Trust Architecture', desc: 'Every request is authenticated, authorized, and audited. No implicit trust anywhere in the stack - verify everything, trust nothing.' },
  { icon: Server, title: 'Air-Gapped Deployments', desc: 'Fully isolated infrastructure deployed within your own data center or private cloud for maximum data sovereignty.' },
  { icon: Users, title: 'Strict Tenant Isolation', desc: 'Dedicated boundaries at the data, network, and identity layers. No cross-tenant data leakage, ever.' },
  { icon: Settings, title: 'Infrastructure Control', desc: 'Complete control over deployment configuration, resource allocation, scaling policies, and maintenance windows.' },
  { icon: Fingerprint, title: 'Identity Sovereignty', desc: 'Institution-controlled deployment with sovereign identity governance, self-managed credentials, and MFA enforcement.' },
  { icon: ShieldCheck, title: 'Compliance Automation', desc: 'SOC 2 Type II, HIPAA, PCI DSS ready. Immutable audit trails and automated evidence collection built in.' },
]

const benefits = [
  { icon: ShieldCheck, title: 'Enterprise Security', desc: 'Zero-trust security model with defense-in-depth architecture protecting every layer of the stack.' },
  { icon: Globe, title: 'Data Sovereignty', desc: 'Your data stays where you need it - with full control over residency, replication, and access policies.' },
  { icon: KeyRound, title: 'Key Management', desc: 'Institution-managed encryption keys for complete control over data access and regulatory compliance.' },
  { icon: ScanEye, title: 'Continuous Monitoring', desc: '24/7 threat detection, anomaly alerts, and automated incident response across all infrastructure layers.' },
]

const securityLayers = [
  { label: 'Perimeter', items: ['WAF & DDoS Protection', 'Rate Limiting', 'Geo-Restrictions'] },
  { label: 'Network', items: ['VPC Isolation', 'Private Endpoints', 'IP Whitelisting'] },
  { label: 'Application', items: ['API Authentication', 'Session Management', 'Input Validation'] },
  { label: 'Data', items: ['Encryption at Rest', 'Encryption in Transit', 'Key Management'] },
]

const useCases = [
  'Multi-tenant SaaS deployment with strict data isolation for financial services',
  'Air-gapped infrastructure for government agencies with classified data requirements',
  'Hybrid deployment with on-premise data residency and cloud-based compute scaling',
  'Compliance-ready infrastructure with automated SOC 2 evidence collection and reporting',
]

const quoteData = {
  text: 'Pillars of Wisdom gave us confidence that every workflow runs within our security perimeter - no gaps, no exceptions.',
  source: 'CISO, Fortune 500 Financial Institution',
}

export default function SovereignInfrastructurePage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const capRef = useRef(null)
  const capInView = useInView(capRef, { once: true, margin: '-40px' })
  const benRef = useRef(null)
  const benInView = useInView(benRef, { once: true, margin: '-40px' })
  const layersRef = useRef(null)
  const layersInView = useInView(layersRef, { once: true, margin: '-40px' })
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
              <span>Pillar III: Sovereign Infrastructure</span>
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
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">PILLAR III - CONTROL LAYER</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                Sovereign<br />Infrastructure<span className="text-gold">.</span>
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
                The control layer that protects everything above it. Enterprise-grade security, deployment control, tenant isolation, and compliance architecture built from the ground up for regulated industries.
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
                  <linearGradient id="secGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="secGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#0a1628" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Shield layers */}
                <path d="M250 30 L420 100 L420 220 Q420 340 250 390 Q80 340 80 220 L80 100 Z" fill="url(#secGrad1)" stroke="#c89b3c" strokeWidth="1.5" />
                <path d="M250 60 L390 115 L390 215 Q390 315 250 360 Q110 315 110 215 L110 115 Z" fill="url(#secGrad2)" stroke="#c89b3c" strokeWidth="1" opacity="0.6" />
                <path d="M250 90 L360 130 L360 210 Q360 290 250 330 Q140 290 140 210 L140 130 Z" fill="url(#secGrad1)" stroke="#c89b3c" strokeWidth="0.8" opacity="0.4" />
                <path d="M250 120 L330 145 L330 205 Q330 265 250 300 Q170 265 170 205 L170 145 Z" fill="url(#secGrad2)" stroke="#c89b3c" strokeWidth="0.6" opacity="0.3" />
                {/* Center shield */}
                <path d="M250 150 L310 175 L310 215 Q310 255 250 280 Q190 255 190 215 L190 175 Z" fill="#0a1628" stroke="#c89b3c" strokeWidth="2" />
                <Shield className="w-10 h-10 text-gold" x="240" y="195" />
                {/* Layer labels */}
                <text x="250" y="55" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">PERIMETER</text>
                <text x="250" y="85" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">NETWORK</text>
                <text x="250" y="115" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">APPLICATION</text>
                <text x="250" y="145" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">DATA</text>
                {/* Bottom label */}
                <text x="250" y="410" textAnchor="middle" fill="#c89b3c" fontSize="10" fontWeight="700" letterSpacing="0.1em">DEFENSE IN DEPTH</text>
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
            SECURITY CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={capInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Protected at Every Layer<span className="text-gold">.</span>
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
            Security You Can Trust<span className="text-gold">.</span>
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

      {/* SECURITY LAYERS */}
      <section className="py-20 bg-white" ref={layersRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={layersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            DEFENSE IN DEPTH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={layersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Multi-Layer Protection<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityLayers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, y: 18 }}
                animate={layersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0a1628] rounded-xl p-6 border border-gold/15"
              >
                <div className="text-[0.62rem] font-bold text-gold tracking-[0.2em] uppercase mb-4">{layer.label} Layer</div>
                <div className="space-y-3">
                  {layer.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-[0.82rem] text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-[#f8f7f4] border-t border-gray-100" ref={ucRef}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={ucInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2">REAL-WORLD APPLICATIONS</p>
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-6">
                Security in Practice<span className="text-gold">.</span>
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
              <Shield className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
              <p className="text-[1.05rem] text-slate-200 leading-relaxed italic mb-4">"{quoteData.text}"</p>
              <p className="text-[0.78rem] text-gold font-bold tracking-[0.1em] uppercase">{quoteData.source}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW THEY WORK TOGETHER CTA */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Shield className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <p className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-3">PILLAR III OF III</p>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              See How All Three Pillars Work Together
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Foundation centralizes operations. AI amplifies everything. Infrastructure protects it all. See how they combine into one unstoppable platform.
            </p>
            <Link to="/how-pillars-work" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              SEE HOW ALL THREE PILLARS UNITE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}