import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ShieldCheck, Puzzle, Share2, User, Brain, Settings, Database, Lock, Cloud,
  FileCheck, Monitor, Box, Code, Shield, Gauge, Users, TrendingUp, Link2,
} from 'lucide-react'

const stackLayers = [
  { icon: User, title: 'EXPERIENCE LAYER', desc: 'Role-based portals and dashboards for users, roles, and partners.', shade: '#0f1d32', textDark: false },
  { icon: Brain, title: 'AI & INTELLIGENCE LAYER', desc: 'AI agents, decisioning, risk models, and operational analytics.', shade: '#142840', textDark: false },
  { icon: Settings, title: 'APPLICATION SERVICES LAYER', desc: 'Workflow orchestration, business rules, document services, APIs.', shade: '#1a3354', textDark: false },
  { icon: Database, title: 'DATA & INTEGRATION LAYER', desc: 'Unified data model, data services, connectors, and event streaming.', shade: '#1a3d5c', textDark: false },
  { icon: Lock, title: 'SECURITY & GOVERNANCE LAYER', desc: 'Identity & access, policy engine, audit, and monitoring.', shade: '#0f2d3d', textDark: false },
  { icon: Cloud, title: 'INFRASTRUCTURE LAYER', desc: 'Cloud-native infrastructure with resilience, scalability, and observability.', shade: '#c89b3c', textDark: true },
]

const futureLayers = [
  { icon: Link2, title: 'BLOCKCHAIN VERIFICATION LAYER', desc: 'XRPL, XDC, ZBEC — planned for institutional settlement and asset tokenization.', shade: 'rgba(200,155,60,0.08)', textDark: false, dashed: true },
]

const leftItems = [
  { icon: ShieldCheck, title: 'SECURE BY DESIGN', desc: 'Zero-trust security and continuous protection.' },
  { icon: Puzzle, title: 'MODULAR & SCALABLE', desc: 'Composable architecture built for growth.' },
  { icon: Share2, title: 'OPEN ARCHITECTURE', desc: 'APIs and integrations across enterprise systems.' },
]

const rightCapabilities = [
  { icon: FileCheck, title: 'POLICY ENFORCEMENT', desc: 'Built-in controls, policy enforcement, and audit trails across every process.' },
  { icon: Monitor, title: 'REAL-TIME MONITORING', desc: 'Live visibility into operations, exceptions, and performance.' },
  { icon: Box, title: 'TOKENIZED ASSETS (ROADMAP)', desc: 'Future support for tokenized real estate and mortgage infrastructure with compliance-aware ownership verification.' },
  { icon: Code, title: 'API-FIRST DESIGN', desc: 'Open APIs and pre-built connectors for core systems and partners.' },
]

const bottomItems = [
  { icon: Shield, label: 'STRONGER SECURITY', desc: 'Protect sensitive data and operations with defense in depth.' },
  { icon: Gauge, label: 'HIGHER PERFORMANCE', desc: 'Scale to handle growth, volume, and complexity.' },
  { icon: Users, label: 'BETTER EXPERIENCES', desc: 'Support users with intuitive, intelligent tools that drive better outcomes.' },
  { icon: TrendingUp, label: 'SUSTAINABLE GROWTH', desc: 'Adapt quickly, innovate continuously, and enable long-term value.' },
]

export default function ArchitectureSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' })
  const bottomRef = useRef(null)
  const bottomInView = useInView(bottomRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header */}
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
                Our Platform Architecture
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-navy leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)' }}
            >
              Institutional AI. Institutional Architecture.{' '}
              <span className="text-gold">Built for Trust at Every Layer.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1rem] text-slate leading-[1.72] max-w-[460px] mb-8"
            >
              A secure, modular, and scalable architecture purpose-built for regulated industries — with future blockchain integration for institutional settlement and tokenized assets.
            </motion.p>

            {/* Left pillars */}
            <div className="space-y-5">
              {leftItems.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0a1628] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[0.72rem] font-bold text-navy uppercase tracking-wider">{title}</p>
                    <p className="text-[0.78rem] text-slate mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — center + right cols */}
          <div ref={contentRef}>
            {/* Centered stack title */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-6"
            >
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px flex-1 bg-gold/30" />
                <p className="text-[0.68rem] font-bold text-navy uppercase tracking-[0.2em]">Layered for Security. Designed for Scale.</p>
                <div className="h-px flex-1 bg-gold/30" />
              </div>
            </motion.div>

            {/* Stack diagram */}
            <div className="space-y-1 mb-4">
              {stackLayers.map(({ icon: Icon, title, desc, shade, textDark }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20, scaleX: 0.96 }}
                  animate={contentInView ? { opacity: 1, x: 0, scaleX: 1 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg shadow-md"
                  style={{ backgroundColor: shade }}
                >
                  <Icon
                    className="w-5 h-5 flex-shrink-0"
                    strokeWidth={1.5}
                    style={{ color: textDark ? '#0a1628' : '#c89b3c' }}
                  />
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[0.68rem] font-bold uppercase tracking-wider"
                      style={{ color: textDark ? '#0a1628' : '#ffffff' }}
                    >
                      {title}
                    </span>
                    <span
                      className="text-[0.72rem] ml-2"
                      style={{ color: textDark ? 'rgba(10,22,40,0.75)' : 'rgba(255,255,255,0.7)' }}
                    >
                      {desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Future blockchain layer */}
            <div className="mb-8">
              {futureLayers.map(({ icon: Icon, title, desc, shade, textDark }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20, scaleX: 0.96 }}
                  animate={contentInView ? { opacity: 1, x: 0, scaleX: 1 } : {}}
                  transition={{ duration: 0.55, delay: 0.5 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-dashed border-gold/20"
                  style={{ backgroundColor: shade }}
                >
                  <Icon
                    className="w-5 h-5 flex-shrink-0 text-gold/60"
                    strokeWidth={1.5}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider text-gold/70">
                      {title}
                    </span>
                    <span className="text-[0.72rem] ml-2 text-slate-500">
                      {desc}
                    </span>
                  </div>
                  <span className="text-[0.58rem] font-bold text-gold/50 tracking-[0.1em] uppercase whitespace-nowrap">Roadmap</span>
                </motion.div>
              ))}
            </div>

            {/* Built-in capabilities */}
            <div>
              <p className="text-[0.62rem] font-bold text-gold tracking-[0.2em] uppercase mb-4">
                Built-In Capabilities
              </p>
              <div className="space-y-4">
                {rightCapabilities.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 12 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.5 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-bold text-navy uppercase tracking-wider">{title}</p>
                      <p className="text-[0.72rem] text-slate mt-0.5">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div className="border-t border-gray-100 mt-4 py-8" ref={bottomRef}>
        <div className="container-site">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-[80px] bg-gold/30" />
            <span className="text-[0.68rem] font-bold text-slate tracking-[0.2em] uppercase">
              A Foundation You Can Trust. A Platform You Can Grow On.
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-gold/30" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomItems.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={bottomInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[0.72rem] font-bold text-navy uppercase tracking-wide">{label}</p>
                  <p className="text-[0.72rem] text-slate mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
