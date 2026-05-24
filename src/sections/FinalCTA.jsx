import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, ArrowRight, Layers, Building2, Shield, Check, ShieldCheck, Brain, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const tiers = [
  {
    id: 'foundation',
    label: 'PLATFORM FOUNDATION',
    icon: Layers,
    desc: 'Essential AI automation to modernize operations and build a strong foundation.',
    items: ['Core automation modules', 'Pre-configured workflows', 'Essential compliance controls', 'Rapid deployment'],
    dark: true,
    featured: false,
  },
  {
    id: 'enterprise',
    label: 'ENTERPRISE DEPLOYMENT',
    icon: Building2,
    desc: 'Complete sovereign platform for banks, law firms, and regulated enterprises.',
    items: ['End-to-end automation platform', 'Advanced AI orchestration', 'Regulatory & audit framework', 'Scalable infrastructure'],
    dark: false,
    featured: true,
  },
  {
    id: 'sovereign',
    label: 'SOVEREIGN INFRASTRUCTURE',
    icon: Shield,
    desc: 'Fully custom AI infrastructure for large institutions and government entities.',
    items: ['Custom AI & workflow development', 'Sovereign deployment environment', 'Advanced security & isolation', 'Dedicated support & SLAs'],
    dark: true,
    featured: false,
  },
]

const bottomBadges = [
  { icon: Shield, label: 'SOVEREIGN BY DESIGN' },
  { icon: ShieldCheck, label: 'SECURE & COMPLIANT' },
  { icon: Brain, label: 'AI-POWERED AUTOMATION' },
  { icon: ClipboardCheck, label: 'AUDIT-READY' },
]

export default function FinalCTA() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-mesh pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14" ref={headerRef}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-gold" />
              <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">Pricing Overview</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-navy leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Enterprise Deployment Models
            </motion.h2>

            {/* Diamond rule */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={headerInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
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
              Flexible architecture options designed for pilots, full deployments, and sovereign environments.
            </motion.p>
          </div>

          {/* Right — abstract city towers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-44 lg:h-52 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7f4] via-[#eeeae0] to-[#f4f1e8]" />
            {/* Grid city */}
            <div className="absolute bottom-0 inset-x-0 flex items-end justify-center gap-1 px-4">
              {[60,80,100,120,140,100,80,110,90,70,95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}px`,
                    background: i % 3 === 0 ? 'rgba(200,155,60,0.25)' : 'rgba(10,22,40,0.10)',
                  }}
                />
              ))}
            </div>
            {/* Checkerboard grid overlay */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(rgba(10,22,40,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.08) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="absolute top-4 left-5 text-[0.6rem] font-bold text-gold/70 tracking-[0.2em] uppercase">
              Choose Your Deployment Model
            </div>
          </motion.div>
        </div>

        {/* 3 tier cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5" ref={cardsRef}>
          {tiers.map(({ id, label, icon: Icon, desc, items, dark, featured }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 28 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className={`rounded-2xl p-7 shadow-[0_8px_36px_rgba(10,22,40,0.14)] transition-all duration-300 group relative ${
                featured
                  ? 'bg-white border-2 border-gold/50 hover:border-gold hover:shadow-[0_12px_48px_rgba(200,155,60,0.18)]'
                  : 'bg-[#0a1628] border border-gold/20 hover:border-gold/40 hover:shadow-[0_12px_48px_rgba(10,22,40,0.28)]'
              }`}
            >
              {/* Featured badge */}
              {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full shadow">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${
                featured
                  ? 'bg-gold/10 border border-gold/30'
                  : 'bg-gold/15 border border-gold/25'
              } group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>

              {/* Label */}
              <div className={`text-[0.62rem] font-bold tracking-[0.2em] uppercase mb-3 ${
                featured ? 'text-navy' : 'text-gold'
              }`}>
                {label}
              </div>

              {/* Diamond rule */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className={`h-[1.5px] w-6 ${featured ? 'bg-gold' : 'bg-gold/60'}`} />
                <div className={`w-1.5 h-1.5 rotate-45 border ${featured ? 'border-gold' : 'border-gold/50'}`} />
                <div className={`h-[1.5px] w-6 ${featured ? 'bg-gold' : 'bg-gold/60'}`} />
              </div>

              {/* Description */}
              <p className={`text-[0.82rem] leading-relaxed mb-6 ${
                featured ? 'text-slate' : 'text-slate-300'
              }`}>
                {desc}
              </p>

              {/* Feature list */}
              <ul className="space-y-2.5 mb-7">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 ${featured ? 'text-gold' : 'text-gold/80'}`} strokeWidth={2.5} />
                    <span className={`text-[0.78rem] ${featured ? 'text-navy' : 'text-white/80'}`}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.12em] uppercase transition-all duration-200 ${
                  featured
                    ? 'text-gold hover:text-gold-light'
                    : 'text-gold/80 hover:text-gold'
                }`}
              >
                VIEW DETAILS
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {bottomBadges.map(({ icon: Icon, label }, i) => (
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

        {/* Final hero CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
        >
          <p className="font-heading text-[1.7rem] md:text-[2.2rem] font-bold text-white leading-[1.15] mb-3">
            Ready to Transform Your Operations?
          </p>
          <p className="text-[0.95rem] text-slate-300 mb-8 max-w-[480px] mx-auto">
            Schedule a strategy session with our team and see the platform in action.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm"
          >
            <Calendar className="w-4 h-4" />
            BOOK STRATEGY SESSION
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
