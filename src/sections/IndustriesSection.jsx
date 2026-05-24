import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Landmark, Scale, HeartPulse, Umbrella, Home, Calculator, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const industries = [
  {
    title: 'Financial Services',
    slug: 'financial-services',
    icon: Landmark,
    desc: 'Banks, lending, and regulated finance.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Legal & Compliance',
    slug: 'legal-compliance',
    icon: Scale,
    desc: 'RegTech, governance, and legal operations.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Healthcare',
    slug: 'healthcare',
    icon: HeartPulse,
    desc: 'HIPAA-aware workflow platforms for hospitals and health systems.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Government & Public Sector',
    slug: 'government',
    icon: Building2,
    desc: 'Secure, accountable workflows for public institutions.',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4d31d9?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Insurance',
    slug: 'insurance',
    icon: Umbrella,
    desc: 'Claims, underwriting, and policy automation.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Real Estate',
    slug: 'real-estate',
    icon: Home,
    desc: 'Property and workflow infrastructure.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Banks & Credit Unions',
    slug: 'banks-credit-unions',
    icon: Landmark,
    desc: 'Institutional financial workflows and policy controls.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Accounting & Tax',
    slug: 'accounting-tax',
    icon: Calculator,
    desc: 'Audit-ready workflow systems.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
  },
]

export default function IndustriesSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

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
                Industry Solutions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-navy leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
            >
              Built for Regulated Industries
              <span className="text-gold">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1rem] text-slate leading-[1.72] max-w-[460px]"
            >
              Purpose-built workflow infrastructure for institutions where policy controls, governance, and precision matter.
            </motion.p>
          </div>

          {/* Right — Serving Every Regulated Sector SVG */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-64 lg:h-72 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)]"
          >
            <svg
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="ind-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0a1628" />
                  <stop offset="50%" stopColor="#0f1f38" />
                  <stop offset="100%" stopColor="#0a1628" />
                </linearGradient>
                <radialGradient id="ind-glow1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="ind-glow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#4a90d9" stopOpacity="0" />
                </radialGradient>
                <filter id="ind-text-glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="ind-soft">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <pattern id="ind-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <rect width="24" height="24" fill="none" />
                  <circle cx="12" cy="12" r="0.6" fill="rgba(255,255,255,0.04)" />
                </pattern>
              </defs>

              {/* Background */}
              <rect width="800" height="400" fill="url(#ind-bg)" />
              <rect width="800" height="400" fill="url(#ind-dots)" />

              {/* Ambient glows */}
              <ellipse cx="350" cy="180" rx="200" ry="150" fill="url(#ind-glow1)" />
              <ellipse cx="550" cy="280" rx="140" ry="100" fill="url(#ind-glow2)" />

              {/* === SECTOR ARC — 7 industry segments in a semi-circle === */}
              {/* Outer arc ring */}
              <path d="M120,310 A300,300 0 0,1 680,310" fill="none" stroke="rgba(200,155,60,0.08)" strokeWidth="40" />
              <path d="M120,310 A300,300 0 0,1 680,310" fill="none" stroke="rgba(200,155,60,0.15)" strokeWidth="1" />

              {/* Inner arc ring */}
              <path d="M180,280 A240,240 0 0,1 620,280" fill="none" stroke="rgba(200,155,60,0.06)" strokeWidth="30" />
              <path d="M180,280 A240,240 0 0,1 620,280" fill="none" stroke="rgba(200,155,60,0.12)" strokeWidth="0.8" />

              {/* Sector nodes positioned along the arc */}
              {/* Financial Services — left */}
              <circle cx="155" cy="295" r="18" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1.2" />
              <circle cx="155" cy="295" r="10" fill="rgba(200,155,60,0.25)" stroke="#c89b3c" strokeWidth="0.7" />
              <text x="155" y="298" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="#c89b3c" textAnchor="middle" opacity="0.9">$</text>

              {/* Legal & Compliance */}
              <circle cx="215" cy="200" r="16" fill="rgba(74,144,217,0.12)" stroke="#4a90d9" strokeWidth="1" />
              <circle cx="215" cy="200" r="9" fill="rgba(74,144,217,0.2)" stroke="#4a90d9" strokeWidth="0.6" />
              <text x="215" y="203" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="700" fill="#4a90d9" textAnchor="middle" opacity="0.85">§</text>

              {/* Healthcare */}
              <circle cx="310" cy="125" r="17" fill="rgba(200,155,60,0.13)" stroke="#c89b3c" strokeWidth="1.1" />
              <circle cx="310" cy="125" r="9.5" fill="rgba(200,155,60,0.22)" stroke="#c89b3c" strokeWidth="0.7" />
              {/* Medical cross */}
              <line x1="310" y1="121" x2="310" y2="129" stroke="#c89b3c" strokeWidth="1.5" />
              <line x1="306" y1="125" x2="314" y2="125" stroke="#c89b3c" strokeWidth="1.5" />

              {/* Government — center top */}
              <circle cx="400" cy="95" r="20" fill="rgba(74,144,217,0.14)" stroke="#4a90d9" strokeWidth="1.3" />
              <circle cx="400" cy="95" r="12" fill="rgba(74,144,217,0.22)" stroke="#4a90d9" strokeWidth="0.8" />
              {/* Dome icon */}
              <path d="M393,97 L400,90 L407,97" fill="none" stroke="#4a90d9" strokeWidth="1.2" />
              <line x1="393" y1="99" x2="407" y2="99" stroke="#4a90d9" strokeWidth="0.8" />

              {/* Insurance */}
              <circle cx="490" cy="125" r="16" fill="rgba(200,155,60,0.13)" stroke="#c89b3c" strokeWidth="1" />
              <circle cx="490" cy="125" r="9" fill="rgba(200,155,60,0.22)" stroke="#c89b3c" strokeWidth="0.6" />
              {/* Shield icon */}
              <path d="M490,119 L496,122 L496,127 L490,131 L484,127 L484,122 Z" fill="none" stroke="#c89b3c" strokeWidth="0.9" />

              {/* Real Estate / Wealth */}
              <circle cx="585" cy="200" r="16" fill="rgba(74,144,217,0.12)" stroke="#4a90d9" strokeWidth="1" />
              <circle cx="585" cy="200" r="9" fill="rgba(74,144,217,0.2)" stroke="#4a90d9" strokeWidth="0.6" />
              {/* Trend arrow */}
              <polyline points="579,204 583,199 587,202 592,194" fill="none" stroke="#4a90d9" strokeWidth="1" strokeLinecap="round" />

              {/* Tokenized RE / Accounting */}
              <circle cx="645" cy="295" r="18" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1.2" />
              <circle cx="645" cy="295" r="10" fill="rgba(200,155,60,0.25)" stroke="#c89b3c" strokeWidth="0.7" />
              {/* Cube icon */}
              <path d="M645,289 L651,292 L651,298 L645,301 L639,298 L639,292 Z" fill="none" stroke="#c89b3c" strokeWidth="0.9" />

              {/* === CENTRAL HUB — Pillars platform === */}
              <circle cx="400" cy="240" r="50" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="0.4" opacity="0.5">
                <animate attributeName="r" values="50;62;50" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="240" r="38" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="0.8" opacity="0.6" />
              <circle cx="400" cy="240" r="24" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1.2" />

              {/* Three pillars icon in center */}
              <rect x="389" y="232" width="4" height="14" rx="1" fill="#c89b3c" opacity="0.9" />
              <rect x="398" y="232" width="4" height="14" rx="1" fill="#c89b3c" opacity="0.9" />
              <rect x="407" y="232" width="4" height="14" rx="1" fill="#c89b3c" opacity="0.9" />
              <rect x="387" y="247" width="26" height="2" rx="1" fill="#c89b3c" opacity="0.7" />
              <rect x="387" y="229" width="26" height="2" rx="1" fill="#c89b3c" opacity="0.7" />

              {/* === STREAM LINES from each sector to center === */}
              <g opacity="0.35">
                <path d="M155,295 Q260,270 370,240" fill="none" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="3,4" />
                <path d="M215,200 Q300,230 380,240" fill="none" stroke="#4a90d9" strokeWidth="0.7" strokeDasharray="3,4" />
                <path d="M310,125 Q350,170 385,230" fill="none" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="3,4" />
                <path d="M400,115 L400,216" fill="none" stroke="#4a90d9" strokeWidth="0.9" strokeDasharray="4,4" />
                <path d="M490,125 Q450,170 415,230" fill="none" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="3,4" />
                <path d="M585,200 Q500,230 420,240" fill="none" stroke="#4a90d9" strokeWidth="0.7" strokeDasharray="3,4" />
                <path d="M645,295 Q540,270 430,240" fill="none" stroke="#c89b3c" strokeWidth="0.8" strokeDasharray="3,4" />
              </g>

              {/* Animated particles flowing to center */}
              <circle r="2.5" fill="#c89b3c" opacity="0.85">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M155,295 Q260,270 370,240" />
              </circle>
              <circle r="2" fill="#4a90d9" opacity="0.7">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M215,200 Q300,230 380,240" />
              </circle>
              <circle r="2" fill="#c89b3c" opacity="0.75">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M310,125 Q350,170 385,230" />
              </circle>
              <circle r="2.5" fill="#4a90d9" opacity="0.8">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M400,95 L400,216" />
              </circle>
              <circle r="2" fill="#c89b3c" opacity="0.75">
                <animateMotion dur="2.6s" repeatCount="indefinite" path="M490,125 Q450,170 415,230" />
              </circle>
              <circle r="2" fill="#4a90d9" opacity="0.7">
                <animateMotion dur="3.4s" repeatCount="indefinite" path="M585,200 Q500,230 420,240" />
              </circle>
              <circle r="2.5" fill="#c89b3c" opacity="0.85">
                <animateMotion dur="3s" repeatCount="indefinite" path="M645,295 Q540,270 430,240" />
              </circle>

              {/* === UNIFIED OUTPUT from center going down === */}
              <path d="M400,264 Q400,310 400,360" fill="none" stroke="#c89b3c" strokeWidth="2" opacity="0.5">
                <animate attributeName="strokeWidth" values="2;3.5;2" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M400,264 Q400,310 400,360" fill="none" stroke="#c89b3c" strokeWidth="6" opacity="0.08" />

              {/* Output pulse at bottom */}
              <circle cx="400" cy="370" r="8" fill="rgba(200,155,60,0.3)" stroke="#c89b3c" strokeWidth="1" filter="url(#ind-soft)">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Corner bracket accents */}
              <path d="M20,20 L55,20 M20,20 L20,55" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
              <path d="M780,20 L745,20 M780,20 L780,55" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
              <path d="M20,380 L55,380 M20,380 L20,345" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
              <path d="M780,380 L745,380 M780,380 L780,345" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

              {/* Bottom gradient fade */}
              <rect y="350" width="800" height="50" fill="url(#ind-bg)" opacity="0.6" />
              <rect y="375" width="800" height="25" fill="url(#ind-bg)" opacity="0.9" />
            </svg>

            {/* Live badge */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/70 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">
                Serving Every Regulated Sector
              </span>
            </div>
          </motion.div>
        </div>

        {/* 8-card grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {industries.map(({ title, slug, icon: Icon, desc, image }, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 28 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/industries/${slug}`}
                className="group block bg-white rounded-2xl shadow-[0_4px_20px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/30 hover:shadow-[0_10px_36px_rgba(10,22,40,0.13)] overflow-hidden transition-all duration-300 h-full"
              >
                {/* Photo area */}
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                  />
                  {/* Navy overlay */}
                  <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/35 transition-colors duration-500" />
                  {/* Centered icon badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold border-2 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-[1rem] font-bold text-navy group-hover:text-gold transition-colors duration-250 mb-1">
                    {title}
                  </h3>
                  <p className="text-[0.78rem] text-slate leading-relaxed mb-4">{desc}</p>
                  <span className="text-gold text-[0.68rem] font-bold tracking-[0.12em] uppercase flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    EXPLORE INDUSTRY
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}