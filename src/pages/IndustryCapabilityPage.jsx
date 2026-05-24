import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Calendar, Check, ChevronRight,
  Landmark, ShieldCheck, FileText, Users, BarChart3, Lock,
  Scale, ClipboardCheck, Shield, Eye,
  HeartPulse, Umbrella, Home, Calculator, Building2,
} from 'lucide-react'
import { getCapability, getRelatedCapabilities, industryCapabilities } from '../data/industryCapabilities'
import { getFeature } from '../data/platformFeatures'

const iconMap = {
  Landmark, ShieldCheck, FileText, Users, BarChart3, Lock,
  Scale, ClipboardCheck, Shield, Eye,
  HeartPulse, Umbrella, Home, Calculator, Building2,
}

const industryNames = {
  'financial-services': 'Financial Services',
  'legal-compliance': 'Legal & Compliance',
  healthcare: 'Healthcare',
  government: 'Government & Public Sector',
  insurance: 'Insurance',
  'real-estate': 'Real Estate',
  'banks-credit-unions': 'Banks & Credit Unions',
  'accounting-tax': 'Accounting & Tax',
}

function featureSlug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const allCapabilities = Object.entries(industryCapabilities).flatMap(([industrySlug, caps]) =>
  Object.entries(caps).map(([capSlug, cap]) => ({ industrySlug, capSlug, ...cap }))
)

function CapabilitySVG({ type }) {
  const svgs = {
    reporting: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cap-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a1628" /><stop offset="50%" stopColor="#0f1f38" /><stop offset="100%" stopColor="#0a1628" />
          </linearGradient>
          <radialGradient id="cap-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.18" /><stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
          </radialGradient>
          <pattern id="cap-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <rect width="28" height="28" fill="none" /><circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
          </pattern>
        </defs>
        <rect width="800" height="400" fill="url(#cap-bg)" />
        <rect width="800" height="400" fill="url(#cap-dots)" />
        <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#cap-glow)" />
        {/* Report documents */}
        {[
          { x: 150, y: 100, w: 120, h: 160 },
          { x: 340, y: 80, w: 120, h: 180 },
          { x: 530, y: 110, w: 120, h: 150 },
        ].map((doc, i) => (
          <g key={i}>
            <rect x={doc.x} y={doc.y} width={doc.w} height={doc.h} rx="6" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="0.8" />
            <rect x={doc.x + 10} y={doc.y + 12} width={doc.w - 20} height="4" rx="2" fill="rgba(200,155,60,0.25)" />
            <rect x={doc.x + 10} y={doc.y + 24} width={doc.w - 40} height="4" rx="2" fill="rgba(200,155,60,0.18)" />
            <rect x={doc.x + 10} y={doc.y + 36} width={doc.w - 20} height="4" rx="2" fill="rgba(200,155,60,0.25)" />
            <rect x={doc.x + 10} y={doc.y + 48} width={doc.w - 50} height="4" rx="2" fill="rgba(200,155,60,0.18)" />
            {/* Chart bars */}
            {[0, 1, 2, 3, 4].map((b) => (
              <rect key={b} x={doc.x + 15 + b * 18} y={doc.y + 80 - b * 12} width="12" height={20 + b * 12} rx="2" fill="rgba(200,155,60,0.3)" stroke="#c89b3c" strokeWidth="0.5" />
            ))}
            {/* Seal */}
            <circle cx={doc.x + doc.w / 2} cy={doc.y + doc.h - 25} r="12" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="0.8" />
            <path d={`M${doc.x + doc.w / 2 - 5},${doc.y + doc.h - 25} L${doc.x + doc.w / 2},${doc.y + doc.h - 20} L${doc.x + doc.w / 2 + 6},${doc.y + doc.h - 30}`} fill="none" stroke="#c89b3c" strokeWidth="1.2" />
          </g>
        ))}
        {/* Flow arrows between docs */}
        <line x1="270" y1="180" x2="340" y2="170" stroke="#c89b3c" strokeWidth="1" opacity="0.4" />
        <polygon points="340,166 348,170 340,174" fill="#c89b3c" opacity="0.4" />
        <line x1="460" y1="170" x2="530" y2="185" stroke="#c89b3c" strokeWidth="1" opacity="0.4" />
        <polygon points="530,181 538,185 530,189" fill="#c89b3c" opacity="0.4" />
        {/* Animated particles */}
        <circle r="2.5" fill="#c89b3c" opacity="0.8">
          <animateMotion dur="2s" repeatCount="indefinite" path="M270,180 L340,170" />
        </circle>
        <circle r="2.5" fill="#c89b3c" opacity="0.8">
          <animateMotion dur="2s" repeatCount="indefinite" path="M460,170 L530,185" />
        </circle>
        {/* Corner accents */}
        <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
        <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
        <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
        <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
        <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">REGULATORY REPORTING PIPELINE</text>
      </svg>
    ),
    risk: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cap-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a1628" /><stop offset="50%" stopColor="#0f1f38" /><stop offset="100%" stopColor="#0a1628" />
          </linearGradient>
          <radialGradient id="cap-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.18" /><stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
          </radialGradient>
          <pattern id="cap-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <rect width="28" height="28" fill="none" /><circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
          </pattern>
        </defs>
        <rect width="800" height="400" fill="url(#cap-bg)" />
        <rect width="800" height="400" fill="url(#cap-dots)" />
        <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#cap-glow)" />
        {/* Risk gauge */}
        <g transform="translate(400, 200)">
          <path d="M-120,0 A120,120 0 0,1 120,0" fill="none" stroke="rgba(200,155,60,0.15)" strokeWidth="20" />
          <path d="M-120,0 A120,120 0 0,1 0,-120" fill="none" stroke="rgba(200,155,60,0.3)" strokeWidth="20" />
          <path d="M0,-120 A120,120 0 0,1 120,0" fill="none" stroke="rgba(200,155,60,0.5)" strokeWidth="20" />
          {/* Needle */}
          <line x1="0" y1="0" x2="-40" y2="-80" stroke="#c89b3c" strokeWidth="2" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" values="-30,0,0;10,0,0;-30,0,0" dur="4s" repeatCount="indefinite" />
          </line>
          <circle cx="0" cy="0" r="8" fill="#c89b3c" />
          {/* Labels */}
          <text x="-100" y="30" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#c89b3c" opacity="0.5">LOW</text>
          <text x="-8" y="-130" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#c89b3c" opacity="0.7">MODERATE</text>
          <text x="80" y="30" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#c89b3c" opacity="0.9">HIGH</text>
        </g>
        {/* Risk data points */}
        {[
          { x: 150, y: 120, label: 'Credit' },
          { x: 650, y: 140, label: 'Market' },
          { x: 200, y: 300, label: 'Operational' },
          { x: 600, y: 280, label: 'Liquidity' },
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.x} cy={pt.y} r="14" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
            <circle cx={pt.x} cy={pt.y} r="6" fill="rgba(200,155,60,0.3)">
              <animate attributeName="r" values="6;10;6" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <text x={pt.x} y={pt.y + 25} fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#c89b3c" textAnchor="middle" opacity="0.6">{pt.label}</text>
          </g>
        ))}
        {/* Corner accents */}
        <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
        <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
        <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
        <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
        <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">RISK ASSESSMENT DASHBOARD</text>
      </svg>
    ),
  }

  // Default generic SVG for types without specific graphics
  const defaultSVG = (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cap-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1628" /><stop offset="50%" stopColor="#0f1f38" /><stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        <radialGradient id="cap-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.18" /><stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
        </radialGradient>
        <pattern id="cap-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <rect width="28" height="28" fill="none" /><circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
        </pattern>
      </defs>
      <rect width="800" height="400" fill="url(#cap-bg)" />
      <rect width="800" height="400" fill="url(#cap-dots)" />
      <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#cap-glow)" />
      {/* Central hub */}
      <circle cx="400" cy="190" r="45" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="1" />
      <circle cx="400" cy="190" r="30" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.8" />
      <circle cx="400" cy="190" r="15" fill="rgba(200,155,60,0.2)" stroke="#c89b3c" strokeWidth="1">
        <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* Surrounding nodes */}
      {[
        { x: 200, y: 120 }, { x: 600, y: 130 }, { x: 180, y: 270 },
        { x: 620, y: 260 }, { x: 300, y: 310 }, { x: 500, y: 300 },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="12" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
          <circle cx={node.x} cy={node.y} r="5" fill="rgba(200,155,60,0.3)">
            <animate attributeName="r" values="5;8;5" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          <line x1={node.x} y1={node.y} x2="400" y2="190" stroke="#c89b3c" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,3" />
        </g>
      ))}
      {/* Corner accents */}
      <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
      <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
      <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
      <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
      <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">CAPABILITY OVERVIEW</text>
    </svg>
  )

  return svgs[type] || defaultSVG
}

export default function IndustryCapabilityPage() {
  const { industrySlug, capabilitySlug } = useParams()
  const capability = getCapability(industrySlug, capabilitySlug)
  const relatedCaps = getRelatedCapabilities(industrySlug, capabilitySlug)
  const Icon = capability ? iconMap[capability.icon] : ShieldCheck
  const industryName = industryNames[industrySlug] || 'Industry'

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const descRef = useRef(null)
  const descInView = useInView(descRef, { once: true, margin: '-40px' })
  const benefitsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-40px' })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-40px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const relatedRef = useRef(null)
  const relatedInView = useInView(relatedRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  if (!capability) {
    return (
      <div className="bg-white pt-[90px] pb-20">
        <div className="container-site text-center">
          <h1 className="font-heading text-3xl font-bold text-navy mb-4">Capability Not Found</h1>
          <Link to={`/industries/${industrySlug}`} className="link-gold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to {industryName}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white relative">
      {/* Hero */}
      <section className="pt-[90px] pb-16 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="container-site relative z-10" ref={headerRef}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link to={`/industries/${industrySlug}`} className="link-gold inline-flex items-center gap-1.5 text-[0.75rem]">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="text-slate/70">{industryName}</span>
              <span className="text-slate/40">/</span>
              <span>{capability.title}</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-gold text-[1.2rem] font-bold tracking-[0.12em] uppercase">{industryName.toUpperCase()}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {capability.title}
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
                className="text-[1rem] text-slate-400 leading-[1.72] max-w-[500px]"
              >
                {capability.shortDesc}
              </motion.p>
            </div>

            {/* SVG Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <CapabilitySVG type={capability.svgType} />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">{capability.title}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16 bg-white relative overflow-hidden" ref={descRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-6"
          >
            CAPABILITY OVERVIEW
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1.05rem] text-slate leading-[1.8] max-w-[800px]"
          >
            {capability.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f8f7f4] border-y border-gray-100" ref={benefitsRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-8"
          >
            KEY BENEFITS
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capability.benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-gold" strokeWidth={2.5} />
                  </div>
                  <p className="text-[0.88rem] text-navy leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white relative overflow-hidden" ref={processRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-12"
          >
            The Complete Process<span className="text-gold">.</span>
          </motion.h2>

          <div className="space-y-0">
            {capability.processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-6">
                  {/* Step number with connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-heading font-bold text-[1rem] flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < capability.processSteps.length - 1 && (
                      <div className="w-px h-full min-h-[80px] bg-gold/20 mt-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-10">
                    <h3 className="font-heading text-[1.1rem] font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-[0.92rem] text-slate leading-relaxed max-w-[600px]">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-[#0a1628] relative overflow-hidden" ref={featuresRef}>
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-8"
          >
            PLATFORM FEATURES
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capability.keyFeatures.map((feature, i) => {
              const fSlug = featureSlug(feature)
              const featData = getFeature(capabilitySlug, fSlug)
              const currentPath = `/industries/${industrySlug}/${capabilitySlug}`
              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={`/platform-features/${capabilitySlug}/${fSlug}?from=${encodeURIComponent(currentPath)}`}
                    className="group block bg-white/5 rounded-xl p-6 border border-white/10 hover:border-gold/20 hover:bg-white/8 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <p className="text-[0.88rem] text-white/80 leading-relaxed group-hover:text-white transition-colors duration-200">{feature}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-gold text-[0.65rem] font-bold tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all duration-200">
                      LEARN MORE <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      {relatedCaps.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100" ref={relatedRef}>
          <div className="container-site">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
            >
              EXPLORE MORE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-navy leading-[1.1] mb-8"
            >
              Related Capabilities<span className="text-gold">.</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCaps.map(({ slug, data }, i) => {
                if (!data) return null
                const RelatedIcon = iconMap[data.icon]
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={`/industries/${industrySlug}/${slug}`}
                      className="group block bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.08)] transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <RelatedIcon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-heading text-[0.92rem] font-bold text-navy group-hover:text-gold transition-colors duration-200 mb-1">{data.title}</h3>
                          <p className="text-[0.78rem] text-slate leading-relaxed">{data.shortDesc}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-gold text-[0.68rem] font-bold tracking-[0.1em] uppercase group-hover:gap-2 transition-all duration-200">
                        EXPLORE <ChevronRight className="w-3 h-3" />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Back to industry link */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center">
              <Link
                to={`/industries/${industrySlug}`}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="text-[0.88rem] font-semibold">Back to {industryName}</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Calendar className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              See {capability.title} in Action.
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a personalized demo to see how Pillars of Wisdom transforms {capability.title.toLowerCase()} for institutions like yours.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Calendar className="w-4 h-4" />
              REQUEST DEMO
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
