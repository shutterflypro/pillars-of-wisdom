import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Landmark, Scale, HeartPulse, Umbrella, Home, Calculator, Building2 } from 'lucide-react'

const industries = [
  {
    name: 'Financial Services',
    slug: 'financial-services',
    description: 'Banks, lending, and regulated finance.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80',
    icon: Landmark,
  },
  {
    name: 'Legal & Compliance',
    slug: 'legal-compliance',
    description: 'RegTech, governance, and legal operations.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80',
    icon: Scale,
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'HIPAA-aware workflow platforms for hospitals and health systems.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop&q=80',
    icon: HeartPulse,
  },
  {
    name: 'Government & Public Sector',
    slug: 'government',
    description: 'Secure, accountable workflows for public institutions.',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4d31d9?w=600&h=400&fit=crop&q=80',
    icon: Landmark,
  },
  {
    name: 'Insurance',
    slug: 'insurance',
    description: 'Claims, underwriting, and policy automation.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
    icon: Umbrella,
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    description: 'Property and workflow infrastructure.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80',
    icon: Home,
  },
  {
    name: 'Banks & Credit Unions',
    slug: 'banks-credit-unions',
    description: 'Institutional financial workflows and policy controls.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80',
    icon: Building2,
  },
  {
    name: 'Accounting & Tax',
    slug: 'accounting-tax',
    description: 'Audit-ready workflow systems.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
    icon: Calculator,
  },
]

export default function IndustriesPage() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-40px' })

  return (
    <div className="bg-white pt-[90px] pb-24">
      {/* Dot mesh background */}
      <div className="absolute inset-0 dot-mesh pointer-events-none" />

      {/* Header */}
      <div className="container-site relative z-10">
        <div className="text-center max-w-3xl mx-auto" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-eyebrow">INDUSTRY SOLUTIONS</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading"
          >
            Built for Regulated Industries.
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
            Purpose-built workflow infrastructure for institutions where policy controls, governance, and precision matter.
          </motion.p>
        </div>
      </div>

      {/* Industry Cards Grid */}
      <div className="container-site mt-14 relative z-10" ref={gridRef}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 28 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/industries/${industry.slug}`} className="group block">
                  <div className="card-white overflow-hidden p-0">
                    {/* Photo */}
                    <div
                      className="h-44 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${industry.image}')` }}
                    >
                      <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/25 transition-colors duration-300" />
                      {/* Centered gold icon badge */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="gold-icon-circle w-14 h-14"
                          whileHover={{ scale: 1.1, rotate: 6 }}
                          transition={{ type: 'spring', stiffness: 350 }}
                        >
                          <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                        </motion.div>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="p-6">
                      <h3 className="font-heading text-base font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-slate leading-relaxed mb-4">{industry.description}</p>
                      <span className="link-gold">
                        Explore Industry <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
