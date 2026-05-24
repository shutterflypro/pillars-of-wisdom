import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BookOpen,
  Mail,
  MessageCircle,
  Phone,
  Video,
  FileText,
} from 'lucide-react'

const supportChannels = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides and API references.',
    link: 'BROWSE DOCS',
    href: '#',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Reach our team directly.',
    link: 'SUPPORT@PILLARSOFWISDOM.AI',
    href: 'mailto:support@pillarsofwisdom.ai',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our team during business hours.',
    link: 'START CHAT',
    href: '#',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Enterprise customers have priority phone access.',
    link: '+1 (561) 555-0140',
    href: 'tel:+15615550140',
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Learn the platform with guided walkthroughs.',
    link: 'WATCH TUTORIALS',
    href: '#',
  },
  {
    icon: FileText,
    title: 'Status Page',
    description: 'Check system status and incident history.',
    link: 'VIEW STATUS',
    href: '#',
  },
]

export default function SupportPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white pt-[90px] pb-24 relative">
      <div className="absolute inset-0 dot-mesh pointer-events-none" />

      {/* Header */}
      <div className="container-site relative z-10">
        <div className="text-center max-w-3xl mx-auto" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-eyebrow">SUPPORT</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading"
          >
            We're Here to Help.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={headerInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="flex items-center justify-center gap-2 mb-5"
          >
            <div className="h-[2px] w-10 bg-gold" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="h-[2px] w-10 bg-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-copy mx-auto"
          >
            Get answers, access documentation, or connect with our team — we're committed to your success.
          </motion.p>
        </div>
      </div>

      {/* Support Channels Grid */}
      <div className="container-site mt-14 relative z-10" ref={gridRef}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {supportChannels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 24 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="card-white p-6 text-left"
            >
              <div className="gold-icon-circle mb-4">
                <channel.icon className="w-[22px] h-[22px] text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy mb-1.5">
                {channel.title}
              </h3>
              <p className="text-sm text-slate mb-4 leading-relaxed">
                {channel.description}
              </p>
              <a href={channel.href} className="link-gold">
                {channel.link}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
