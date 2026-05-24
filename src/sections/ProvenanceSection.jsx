import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Database, ArrowRight, Calendar, Layers, FileCheck,
  Globe, Link2, Hash, Clock, CheckCircle,
} from 'lucide-react'

const provenanceFeatures = [
  {
    icon: Hash,
    title: 'Provenance Hashes',
    desc: 'Every document, workflow action, and decision receives a cryptographic hash — creating an immutable record of origin and modification history.',
  },
  {
    icon: Link2,
    title: 'Verification Chains',
    desc: 'Tamper-evident chains link every step of the institutional workflow, enabling full audit replay and traceability from intake to final disposition.',
  },
  {
    icon: FileCheck,
    title: 'Evidence Anchoring',
    desc: 'Policy and compliance evidence is anchored to verification records, providing auditors with cryptographically verifiable proof of controls.',
  },
  {
    icon: Clock,
    title: 'Audit Replay',
    desc: 'Reconstruct any workflow at any point in time — every action, decision, and data change is timestamped and verifiable.',
  },
]

const blockchainRoadmap = [
  {
    icon: Globe,
    title: 'XRPL Integration',
    desc: 'XRP Ledger planned for institutional settlement rails and real-time verification of high-volume transaction workflows.',
  },
  {
    icon: Layers,
    title: 'XDC Network',
    desc: 'XDC enterprise blockchain planned for trade finance, supply chain verification, and cross-institutional document provenance.',
  },
  {
    icon: Shield,
    title: 'ZBEC Settlement',
    desc: 'Optional enterprise digital settlement infrastructure planned for treasury operations and audit-linked payment orchestration.',
  },
]

export default function ProvenanceSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const roadmapRef = useRef(null)
  const roadmapInView = useInView(roadmapRef, { once: true, margin: '-40px' })

  return (
    <section className="bg-[#0a1628] py-20 relative overflow-hidden">
      {/* Subtle gold glow accents */}
      <div className="absolute top-1/4 left-0 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[320px] h-[320px] bg-gold/4 rounded-full blur-[80px] pointer-events-none" />
      {/* Dark dot mesh */}
      <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="max-w-2xl" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-gold" />
            <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">
              Provenance & Verification
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-white leading-[1.12] mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            Cryptographic Evidence.<span className="text-gold"> Institutional Trust.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1rem] text-slate-400 leading-[1.72] max-w-[520px]"
          >
            Every workflow action, document, and decision receives a cryptographic provenance record — creating tamper-evident audit trails that regulators and auditors can verify independently.
          </motion.p>
        </div>

        {/* Provenance Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12" ref={featuresRef}>
          {provenanceFeatures.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-gold/25 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-[0.9rem] font-bold text-white mb-2 group-hover:text-gold transition-colors duration-200">{title}</h3>
              <p className="text-[0.82rem] text-slate-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Blockchain Infrastructure Roadmap */}
        <div className="mt-16 pt-12 border-t border-white/10" ref={roadmapRef}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-2"
          >
            <div className="h-[2px] w-8 bg-gold/50" />
            <span className="text-gold/80 text-[0.7rem] font-bold tracking-[0.22em] uppercase">
              Future Infrastructure Roadmap
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.88rem] text-slate-400 leading-relaxed max-w-[600px] mb-8"
          >
            Pillars of Wisdom is designing integrations with enterprise blockchain infrastructure for institutional settlement, real-world asset tokenization, and cross-institutional verification. These capabilities are in active development and will be available to qualified institutions in future releases.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {blockchainRoadmap.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 rounded-xl p-5 border border-white/8 hover:border-gold/15 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading text-[0.85rem] font-bold text-white">{title}</h4>
                </div>
                <p className="text-[0.78rem] text-slate-500 leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <Clock className="w-3 h-3 text-gold/50" />
                  <span className="text-[0.65rem] font-bold text-gold/60 tracking-[0.1em] uppercase">Roadmap</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-gold" strokeWidth={1.5} />
              <span className="text-[0.82rem] text-slate-300">
                Provenance verification is available today. Blockchain integrations are in development.
              </span>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[0.72rem] font-bold text-gold tracking-[0.12em] uppercase hover:text-gold-light transition-colors duration-200"
            >
              DISCUSS ROADMAP ACCESS
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
