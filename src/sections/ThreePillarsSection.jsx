import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Building2, Brain, Shield, Layers,
  Workflow, FileText, ClipboardCheck, Inbox,
  Bot, RefreshCw, GitMerge, Sparkles,
  Lock, Server, Users, Settings,
  CheckCircle, Rocket, Award, ArrowRight,
} from 'lucide-react'

const pillars = [
  {
    num: 'PILLAR I',
    title: 'Operational Foundation',
    layer: 'FOUNDATION LAYER',
    icon: Building2,
    desc: 'Centralize intake, workflows, documents, approvals, audit trails, and workflow coordination into one unified platform.',
    items: [
      { icon: Workflow, text: 'Workflow automation' },
      { icon: FileText, text: 'Document intelligence' },
      { icon: ClipboardCheck, text: 'Audit-ready workflows' },
      { icon: Inbox, text: 'Intake & approvals' },
    ],
    to: '/operational-foundation',
  },
  {
    num: 'PILLAR II',
    title: 'AI Orchestration',
    layer: 'INTELLIGENCE LAYER',
    icon: Brain,
    desc: 'Deploy governed AI agents that automate workflows, assist teams, coordinate processes, and adapt across industries.',
    items: [
      { icon: Bot, text: 'AI workflow agents' },
      { icon: RefreshCw, text: 'Adaptive automation' },
      { icon: GitMerge, text: 'Workflow coordination' },
      { icon: Sparkles, text: 'Intelligent processing' },
    ],
    to: '/ai-orchestration',
  },
  {
    num: 'PILLAR III',
    title: 'Sovereign Infrastructure',
    layer: 'CONTROL LAYER',
    icon: Shield,
    desc: 'Institutional security, deployment control, tenant isolation, and policy architecture built for regulated industries.',
    items: [
      { icon: Lock, text: 'Zero-trust security' },
      { icon: Server, text: 'Air-gapped deployments' },
      { icon: Users, text: 'Tenant isolation' },
      { icon: Settings, text: 'Infrastructure control' },
    ],
    to: '/sovereign-infrastructure',
  },
]

const bottomBar = [
  { icon: CheckCircle, label: 'ONE PLATFORM.' },
  { icon: Shield, label: 'FULL CONTROL.' },
  { icon: Rocket, label: 'BUILT FOR THE FUTURE.' },
  { icon: Award, label: 'TRUSTED BY LEADERS.' },
]

export default function ThreePillarsSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#0a1628] py-20 relative overflow-hidden">
      {/* Subtle gold glow accents */}
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[320px] h-[320px] bg-gold/4 rounded-full blur-[80px] pointer-events-none" />
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
              The Platform
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-white leading-[1.12] mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            Three Pillars That Run Your{' '}
            <span className="text-gold">Workflows</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1rem] text-slate-400 leading-[1.72] max-w-[520px]"
          >
            One platform that centralizes workflows, orchestrates governed AI, and runs on dedicated infrastructure — so your business moves faster with full control.
          </motion.p>
        </div>

        {/* Pillar cards + How They Work Together card */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12" ref={cardsRef}>
          {pillars.map(({ num, title, layer, icon: Icon, desc, items, to }, i) => (
            <Link key={num} to={to} className="block">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-7 shadow-[0_8px_40px_rgba(0,0,0,0.18)] border border-white/10 hover:shadow-[0_12px_48px_rgba(200,155,60,0.15)] hover:border-gold/20 transition-all duration-300 group h-full"
              >
                {/* Pillar header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[0.62rem] font-bold text-gold tracking-[0.22em] uppercase">{num}</div>
                    <h3 className="font-heading text-xl font-bold text-navy">{title}</h3>
                  </div>
                </div>

                {/* Gold rule */}
                <div className="h-[2px] w-10 bg-gold mb-5" />

                {/* Layer label */}
                <div className="text-[0.62rem] font-bold text-gold tracking-[0.18em] uppercase mb-2">{layer}</div>

                {/* Description */}
                <p className="text-[0.82rem] text-slate leading-relaxed mb-5">{desc}</p>

                {/* Feature list */}
                <div className="space-y-3">
                  {items.map(({ icon: ItemIcon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <ItemIcon className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-[0.82rem] text-navy/80">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}

          {/* How They Work Together card */}
          <Link to="/how-pillars-work" className="block">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-7 shadow-[0_8px_40px_rgba(0,0,0,0.18)] border border-gold/25 hover:border-gold/40 hover:shadow-[0_12px_48px_rgba(200,155,60,0.25)] transition-all duration-300 group h-full flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[0.62rem] font-bold text-gold tracking-[0.22em] uppercase">SYNERGY</div>
                    <h3 className="font-heading text-xl font-bold text-white">How They Work Together</h3>
                  </div>
                </div>

                {/* Gold rule */}
                <div className="h-[2px] w-10 bg-gold mb-5" />

                {/* Description */}
                <p className="text-[0.82rem] text-slate-300 leading-relaxed mb-5">
                  See how Foundation, AI, and Infrastructure combine into one unified platform that improves your entire workflow.
                </p>

                {/* Feature list */}
                <div className="space-y-3">
                  {[
                    { icon: Building2, text: 'Foundation centralizes' },
                    { icon: Brain, text: 'AI amplifies everything' },
                    { icon: Shield, text: 'Infrastructure protects' },
                    { icon: ArrowRight, text: 'See the full workflow' },
                  ].map(({ icon: ItemIcon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <ItemIcon className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-[0.82rem] text-white/80">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA arrow */}
              <div className="mt-6 flex items-center gap-2 text-gold text-[0.75rem] font-bold tracking-[0.1em] uppercase group-hover:gap-3 transition-all duration-200">
                EXPLORE THE SYNERGY
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="border-t border-white/10 mt-16 py-6">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {bottomBar.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={cardsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                className="flex items-center gap-2"
              >
                <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="text-[0.72rem] font-bold text-white/80 tracking-[0.14em] uppercase">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
