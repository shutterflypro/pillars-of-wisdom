import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe, Layers, Shield, ArrowRight, Calendar, Hash, Link2,
  FileCheck, Clock, Database, Building2, CreditCard,
} from 'lucide-react'

const blockchainNetworks = [
  {
    icon: Globe,
    name: 'XRPL (XRP Ledger)',
    desc: 'High-throughput public ledger planned for institutional settlement rails, real-time transaction verification, and cross-border payment orchestration.',
    useCases: ['Real-time settlement verification', 'Cross-institutional transaction trails', 'High-volume payment workflows'],
  },
  {
    icon: Layers,
    name: 'XDC Network',
    desc: 'Enterprise-grade hybrid blockchain planned for trade finance, supply chain provenance, and cross-institutional document verification.',
    useCases: ['Trade finance document provenance', 'Supply chain verification records', 'Institutional identity verification'],
  },
  {
    icon: Shield,
    name: 'ZBEC Protocol',
    desc: 'Optional enterprise digital settlement infrastructure planned for treasury operations, audit-linked payment orchestration, and institutional payroll workflows.',
    useCases: ['Enterprise treasury settlement', 'Audit-linked payment records', 'Institutional payroll infrastructure'],
  },
]

const tokenizationCapabilities = [
  {
    icon: Building2,
    title: 'Mortgage Tokenization',
    desc: 'Future support for tokenized mortgage instruments with compliance-aware ownership transfer, investor verification, and regulatory reporting.',
  },
  {
    icon: Database,
    title: 'Real Estate Assets',
    desc: 'Planned infrastructure for tokenized property ownership, fractional investment verification, and institutional asset provenance tracking.',
  },
  {
    icon: CreditCard,
    title: 'Settlement Infrastructure',
    desc: 'Optional blockchain-based settlement rails for institutional treasury operations, employee compensation, and cross-entity payment orchestration.',
  },
]

const provenanceFeatures = [
  { icon: Hash, title: 'Cryptographic Hashes', desc: 'Every document and workflow action receives a unique hash for origin verification.' },
  { icon: Link2, title: 'Verification Chains', desc: 'Tamper-evident chains link every step for full audit replay capability.' },
  { icon: FileCheck, title: 'Evidence Anchoring', desc: 'Policy evidence anchored to verification records for independent auditor review.' },
  { icon: Clock, title: 'Audit Replay', desc: 'Reconstruct any workflow at any point with timestamped, verifiable records.' },
]

export default function BlockchainInfrastructurePage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const networksRef = useRef(null)
  const networksInView = useInView(networksRef, { once: true, margin: '-40px' })
  const tokenizationRef = useRef(null)
  const tokenizationInView = useInView(tokenizationRef, { once: true, margin: '-40px' })
  const provenanceRef = useRef(null)
  const provenanceInView = useInView(provenanceRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white relative">
      {/* Hero */}
      <section className="pt-[90px] pb-16 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
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
              <span>Blockchain Infrastructure</span>
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">FUTURE INFRASTRUCTURE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-white leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
            >
              Blockchain Infrastructure<br />Roadmap<span className="text-gold">.</span>
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
              className="text-[1rem] text-slate-400 leading-[1.72] max-w-[560px]"
            >
              Pillars of Wisdom is designing integrations with enterprise blockchain infrastructure for institutional settlement, real-world asset tokenization, and cross-institutional verification. These capabilities are in active development and will be available to qualified institutions in future releases.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blockchain Networks */}
      <section className="py-16 bg-white relative overflow-hidden" ref={networksRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={networksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            PLANNED INTEGRATIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={networksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Enterprise Blockchain Networks<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {blockchainNetworks.map(({ icon: Icon, name, desc, useCases }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                animate={networksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0a1628] rounded-2xl p-7 border border-gold/15 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-[1.1rem] font-bold text-white mb-3">{name}</h3>
                <p className="text-[0.82rem] text-slate-400 leading-relaxed mb-5">{desc}</p>
                <div className="space-y-2">
                  {useCases.map((uc) => (
                    <div key={uc} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                      <span className="text-[0.78rem] text-slate-300">{uc}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/10">
                  <Clock className="w-3.5 h-3.5 text-gold/50" />
                  <span className="text-[0.65rem] font-bold text-gold/60 tracking-[0.1em] uppercase">In Development</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenization & Settlement */}
      <section className="py-16 bg-[#f8f7f4] border-t border-gray-100" ref={tokenizationRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={tokenizationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2 text-center"
          >
            FUTURE CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={tokenizationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10 text-center"
          >
            Tokenization & Settlement Infrastructure<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tokenizationCapabilities.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={tokenizationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-7 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-2 text-center">{title}</h3>
                <p className="text-[0.82rem] text-slate leading-relaxed text-center">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Provenance Verification */}
      <section className="py-16 bg-white border-t border-gray-100" ref={provenanceRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={provenanceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            AVAILABLE TODAY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={provenanceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-10"
          >
            Provenance Verification<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {provenanceFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={provenanceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-6 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-[0.88rem] font-bold text-navy mb-2">{title}</h3>
                <p className="text-[0.78rem] text-slate leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Calendar className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              Interested in Roadmap Access?
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Contact our team to discuss future blockchain integrations, tokenization capabilities, and early access programs for qualified institutions.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Calendar className="w-4 h-4" />
              DISCUSS FUTURE CAPABILITIES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
