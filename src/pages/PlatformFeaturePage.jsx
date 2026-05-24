import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Calendar, Check, ChevronRight, Layers,
  Landmark, ShieldCheck, FileText, Users, BarChart3, Lock,
  Scale, ClipboardCheck, Shield, Eye,
  HeartPulse, Umbrella, Home, Calculator, Building2,
} from 'lucide-react'
import { getFeature, getAllFeatures } from '../data/platformFeatures'
import { getCapability, industryCapabilities } from '../data/industryCapabilities'

const iconMap = {
  Landmark, ShieldCheck, FileText, Users, BarChart3, Lock,
  Scale, ClipboardCheck, Shield, Eye,
  HeartPulse, Umbrella, Home, Calculator, Building2,
}

const categoryIcons = {
  'Compliance & Reporting': ShieldCheck,
  'Data Management': Layers,
  'AI & Automation': BarChart3,
  'Workflow Automation': FileText,
  'Security & Access': Lock,
  'Risk Analytics': BarChart3,
  'Reporting & Analytics': BarChart3,
  'Customer Experience': Users,
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

function findCapabilityForFeature(featureSlug) {
  for (const [industrySlug, caps] of Object.entries(industryCapabilities)) {
    for (const [capSlug, cap] of Object.entries(caps)) {
      const featureIndex = (cap.keyFeatures || []).findIndex(kf => {
        const s = kf.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        return s === featureSlug || kf.toLowerCase().includes(featureSlug.replace(/-/g, ' '))
      })
      if (featureIndex >= 0) {
        return { industrySlug, capabilitySlug: capSlug, featureIndex }
      }
    }
  }
  return null
}

function findReferrerCapability(fromPath) {
  if (!fromPath) return null
  const match = fromPath.match(/\/industries\/([^/]+)\/([^/]+)/)
  if (!match) return null
  const [, industrySlug, capabilitySlug] = match
  const cap = getCapability(industrySlug, capabilitySlug)
  if (!cap) return null
  return { industrySlug, capabilitySlug, industryName: industryNames[industrySlug], capabilityName: cap.title }
}

export default function PlatformFeaturePage() {
  const { capabilitySlug, featureSlug } = useParams()
  const [searchParams] = useSearchParams()
  const fromPath = searchParams.get('from')

  const feature = getFeature(capabilitySlug, featureSlug)
  const referrer = findReferrerCapability(fromPath)
  const fallbackRef = feature ? findCapabilityForFeature(featureSlug) : null

  const Icon = feature ? categoryIcons[feature.category] || Layers : Layers

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const descRef = useRef(null)
  const descInView = useInView(descRef, { once: true, margin: '-40px' })
  const howRef = useRef(null)
  const howInView = useInView(howRef, { once: true, margin: '-40px' })
  const specsRef = useRef(null)
  const specsInView = useInView(specsRef, { once: true, margin: '-40px' })
  const useCasesRef = useRef(null)
  const useCasesInView = useInView(useCasesRef, { once: true, margin: '-40px' })
  const usedInRef = useRef(null)
  const usedInView = useInView(usedInRef, { once: true, margin: '-40px' })
  const relatedRef = useRef(null)
  const relatedInView = useInView(relatedRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  const backLink = referrer
    ? `/industries/${referrer.industrySlug}/${referrer.capabilitySlug}`
    : fallbackRef
      ? `/industries/${fallbackRef.industrySlug}/${fallbackRef.capabilitySlug}`
      : null

  const backLabel = referrer
    ? referrer.capabilityName
    : fallbackRef
      ? getCapability(fallbackRef.industrySlug, fallbackRef.capabilitySlug)?.title || 'Capability'
      : null

  if (!feature) {
    return (
      <div className="bg-white pt-[90px] pb-20">
        <div className="container-site text-center">
          <h1 className="font-heading text-3xl font-bold text-navy mb-4">Feature Not Found</h1>
          <Link to="/" className="link-gold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const allFeatures = getAllFeatures()
  const relatedFeatures = feature.relatedFeatures
    ?.map(slug => allFeatures.find(f => f.featureSlug === slug || f.slug === slug))
    .filter(Boolean)
    .slice(0, 3) || []

  return (
    <div className="bg-white relative">
      {/* Hero */}
      <section className="pt-[90px] pb-16 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[420px] h-[420px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="container-site relative z-10" ref={headerRef}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            {backLink ? (
              <Link to={backLink} className="link-gold inline-flex items-center gap-1.5 text-[0.75rem]">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="text-slate/70">{backLabel}</span>
                <span className="text-slate/40">/</span>
                <span>{feature.title}</span>
              </Link>
            ) : (
              <Link to="/" className="link-gold inline-flex items-center gap-1.5 text-[0.75rem]">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="text-slate/70">Home</span>
                <span className="text-slate/40">/</span>
                <span>{feature.title}</span>
              </Link>
            )}
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
                <span className="text-gold text-[1.1rem] font-bold tracking-[0.12em] uppercase">{feature.category}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {feature.title}
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
                {feature.shortDesc}
              </motion.p>
            </div>

            {/* SVG Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.25)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="feat-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" /><stop offset="50%" stopColor="#0f1f38" /><stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="feat-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.18" /><stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="feat-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" /><circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#feat-bg)" />
                <rect width="800" height="400" fill="url(#feat-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#feat-glow)" />
                {/* Feature icon grid */}
                <g transform="translate(250, 80)">
                  {[0, 1, 2, 3, 4].map(row =>
                    [0, 1, 2].map(col => {
                      const x = col * 100
                      const y = row * 60
                      const delay = (row * 3 + col) * 0.2
                      return (
                        <g key={`${row}-${col}`}>
                          <rect x={x} y={y} width="70" height="40" rx="6" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="0.6" />
                          <rect x={x + 8} y={y + 8} width="54" height="4" rx="2" fill="rgba(200,155,60,0.2)" />
                          <rect x={x + 8} y={y + 18} width="38" height="4" rx="2" fill="rgba(200,155,60,0.12)" />
                          <rect x={x + 8} y={y + 28} width="46" height="4" rx="2" fill="rgba(200,155,60,0.2)" />
                          <circle cx={x + 35} cy={y + 20} r="3" fill="#c89b3c" opacity="0.4">
                            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" begin={`${delay}s`} repeatCount="indefinite" />
                          </circle>
                        </g>
                      )
                    })
                  )}
                </g>
                {/* Center badge */}
                <circle cx="400" cy="200" r="30" fill="rgba(200,155,60,0.15)" stroke="#c89b3c" strokeWidth="1.2" />
                <circle cx="400" cy="200" r="20" fill="rgba(200,155,60,0.25)" stroke="#c89b3c" strokeWidth="0.8">
                  <animate attributeName="r" values="20;24;20" dur="3s" repeatCount="indefinite" />
                </circle>
                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">PLATFORM FEATURE DETAIL</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">{feature.category}</span>
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
            FEATURE OVERVIEW
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="prose prose-slate max-w-none"
          >
            {feature.fullDescription.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-[1.05rem] text-slate leading-[1.8] mb-4 last:mb-0">{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#f8f7f4] border-y border-gray-100" ref={howRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-12"
          >
            The Complete Process<span className="text-gold">.</span>
          </motion.h2>

          <div className="space-y-0">
            {feature.howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-heading font-bold text-[1rem] flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < feature.howItWorks.length - 1 && (
                      <div className="w-px h-full min-h-[80px] bg-gold/20 mt-2" />
                    )}
                  </div>
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

      {/* Technical Specifications */}
      <section className="py-16 bg-[#0a1628] relative overflow-hidden" ref={specsRef}>
        <div className="absolute inset-0 dot-mesh-dark pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={specsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-8"
          >
            TECHNICAL SPECIFICATIONS
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {feature.technicalSpecs.map((spec, i) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, y: 20 }}
                animate={specsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-gold/20 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <p className="text-[0.88rem] text-white/80 leading-relaxed">{spec}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white border-t border-gray-100" ref={useCasesRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            REAL-WORLD APPLICATIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-8"
          >
            Use Cases<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {feature.useCases.map((useCase, i) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 20 }}
                animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#f8f7f4] rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-gold" strokeWidth={2.5} />
                  </div>
                  <p className="text-[0.92rem] text-navy leading-relaxed">{useCase}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Used In — capabilities that use this feature */}
      {backLink && backLabel && (
        <section className="py-12 bg-[#f8f7f4] border-t border-gray-100" ref={usedInRef}>
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={usedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <Link
                to={backLink}
                className="flex items-center gap-3 text-slate hover:text-navy transition-colors duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <span className="text-[0.65rem] font-bold text-gold tracking-[0.15em] uppercase">USED IN</span>
                  <p className="text-[0.92rem] font-semibold">{backLabel}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Features */}
      {relatedFeatures.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100" ref={relatedRef}>
          <div className="container-site">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
            >
              RELATED FEATURES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-navy leading-[1.1] mb-8"
            >
              Explore More<span className="text-gold">.</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedFeatures.map((rel, i) => {
                const RelIcon = categoryIcons[rel.category] || Layers
                const relBack = `?from=/industries/${capabilitySlug}/${featureSlug}`
                return (
                  <motion.div
                    key={rel.featureSlug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={`/platform-features/${rel.capabilitySlug}/${rel.featureSlug}${relBack}`}
                      className="group block bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.08)] transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <RelIcon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-heading text-[0.92rem] font-bold text-navy group-hover:text-gold transition-colors duration-200 mb-1">{rel.title}</h3>
                          <p className="text-[0.78rem] text-slate leading-relaxed">{rel.shortDesc}</p>
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
              See {feature.title} in Action.
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a personalized demo to see how this feature transforms operations for institutions like yours.
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
