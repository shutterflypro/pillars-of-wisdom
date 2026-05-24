import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Gauge, ShieldCheck, TrendingUp } from 'lucide-react'

const items = [
  {
    icon: Users,
    title: 'One Platform. Total Control.',
    desc: 'Centralize operations, data, and teams in one secure ecosystem.',
  },
  {
    icon: Gauge,
    title: 'Move Faster.',
    desc: 'Automate work, reduce friction, and support every process.',
  },
  {
    icon: ShieldCheck,
    title: 'Operate with Confidence.',
    desc: 'Built on sovereign infrastructure with enterprise-grade security.',
  },
  {
    icon: TrendingUp,
    title: 'Built for the Future.',
    desc: 'Scalable architecture that grows with your ambitions.',
  },
]

export default function TrustBarSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="container-site" ref={ref}>
        {/* Divider label */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[0.68rem] font-bold tracking-[0.22em] text-slate uppercase">
            Trusted by Leaders Across Industries
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* 4 value props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 group"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 350 }}
              >
                <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </motion.div>
              <div>
                <h4 className="text-[0.85rem] font-bold text-navy mb-1 group-hover:text-gold transition-colors duration-200">
                  {title}
                </h4>
                <p className="text-[0.78rem] text-slate leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
