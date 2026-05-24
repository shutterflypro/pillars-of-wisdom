import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FileText, Users, Database, ClipboardList, Scale, Shield, ScanEye, Lock, RefreshCw, ShieldCheck,
} from 'lucide-react'

const governanceItems = [
  { icon: FileText, title: 'POLICY MANAGEMENT', desc: 'Define, enforce, and manage policies consistently.' },
  { icon: Users, title: 'ROLE-BASED ACCESS', desc: 'Ensure the right access for the right people.' },
  { icon: Database, title: 'DATA GOVERNANCE', desc: 'Maintain integrity, ownership, and lifecycle control.' },
  { icon: ClipboardList, title: 'AUDITABILITY', desc: 'Comprehensive logs and traceability for every action.' },
  { icon: Scale, title: 'REGULATORY ALIGNMENT', desc: 'Built to meet the evolving requirements of regulated industries.' },
]

const securityItems = [
  { icon: Shield, title: 'ZERO-TRUST MODEL', desc: 'Verify every user, device, and request before granting access.' },
  { icon: ScanEye, title: 'THREAT DETECTION', desc: 'Continuous monitoring and intelligent detection of potential threats.' },
  { icon: Lock, title: 'DATA PROTECTION', desc: 'Encryption in transit, at rest, and in use.' },
  { icon: RefreshCw, title: 'CONTINUOUS COMPLIANCE', desc: 'Ongoing controls and validation to maintain compliance.' },
]

export default function SecuritySection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh pointer-events-none" />

      {/* Full-width header area — text left, server room visual right */}
      <div className="container-site relative z-10">
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
                Security & Governance
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-navy leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Security by Design.
              <br />
              Governance by Default.
            </motion.h2>

            {/* Gold diamond rule */}
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
              className="text-[1rem] text-slate leading-[1.72] max-w-[460px]"
            >
              Enterprise-grade governance and security controls embedded across every layer of the platform.
            </motion.p>
          </div>

          {/* Right — server room gradient visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-52 lg:h-60 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.14)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0f2040] to-[#162a52]" />
            {/* Server rack grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-20">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-full border-r border-blue-200/20" />
              ))}
            </div>
            {/* Horizontal rows */}
            <div className="absolute inset-0 flex flex-col gap-0 opacity-15">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex-1 border-b border-slate-400/20 w-full" />
              ))}
            </div>
            {/* LED dot grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 p-6">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: i % 3 === 0 ? '#c89b3c' : i % 5 === 0 ? '#60a5fa' : '#22c55e' }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5 + (i % 5) * 0.3, repeat: Infinity, delay: i * 0.08 }}
                />
              ))}
            </div>
            {/* City skyline bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
            <div className="absolute bottom-4 left-5 text-[0.62rem] font-bold text-white/50 tracking-[0.2em] uppercase">
              Zero-Trust · Encrypted · Monitored
            </div>
          </motion.div>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" ref={gridRef}>
          {/* LEFT — Governance Framework */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-5"
            >
              <Shield className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <p className="text-[0.62rem] font-bold text-gold tracking-[0.2em] uppercase">Governance Framework</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {governanceItems.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.10)] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-bold text-navy">{title}</p>
                    <p className="text-[0.72rem] text-slate mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Security Architecture */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-5"
            >
              <Shield className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <p className="text-[0.62rem] font-bold text-gold tracking-[0.2em] uppercase">Security Architecture</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityItems.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-[0_3px_16px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.10)] transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-bold text-navy">{title}</p>
                    <p className="text-[0.72rem] text-slate mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Commitment banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,22,40,0.07)] border border-gray-100 flex items-center gap-5"
        >
          <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-gold" strokeWidth={1.5} />
          </div>
          <div className="h-10 w-[2px] bg-gold/30 flex-shrink-0" />
          <p className="font-heading text-[1rem] text-navy leading-relaxed">
            Our commitment is to build a secure, governed foundation that protects data, reduces risk, and supports institutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
