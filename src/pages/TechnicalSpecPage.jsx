import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Layers, ShieldCheck, Check } from 'lucide-react'
import { getFeature } from '../data/platformFeatures'
import { getCapability, industryCapabilities } from '../data/industryCapabilities'

const categoryIcons = {
  'Compliance & Reporting': ShieldCheck,
  'Data Management': Layers,
  'AI & Automation': Layers,
  'Workflow Automation': Layers,
  'Security & Access': ShieldCheck,
  'Risk Analytics': Layers,
  'Reporting & Analytics': Layers,
  'Customer Experience': Layers,
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

function findReferrerCapability(fromPath) {
  if (!fromPath) return null
  const match = fromPath.match(/\/platform-features\/([^/]+)\/([^/]+)/)
  if (!match) return null
  const [, capabilitySlug, featureSlug] = match
  const feature = getFeature(capabilitySlug, featureSlug)
  if (!feature) return null
  const cap = getCapability(feature.industryRef, capabilitySlug)
  return {
    industrySlug: feature.industryRef,
    capabilitySlug,
    featureSlug,
    industryName: industryNames[feature.industryRef],
    capabilityName: cap?.title || capabilitySlug,
    featureName: feature.title,
  }
}

function generateSpecDetail(spec, feature, index) {
  const details = {
    'API': 'Application Programming Interface — defines how systems communicate and exchange data.',
    'OAuth': 'Open Authorization — industry-standard protocol for secure delegated access.',
    'REST': 'Representational State Transfer — architectural style for distributed systems.',
    'GraphQL': 'Query language for APIs that enables clients to request exactly the data they need.',
    'TLS': 'Transport Layer Security — cryptographic protocol for secure network communication.',
    'SLA': 'Service Level Agreement — commitment between service provider and customer.',
    'BPMN': 'Business Process Model and Notation — standard for business process modeling.',
    'eIDAS': 'Electronic Identification, Authentication and Trust Services — EU regulation.',
    'ESIGN': 'Electronic Signatures in Global and National Commerce Act — US federal law.',
    'UCC': 'Uniform Commercial Code — comprehensive set of laws governing commercial transactions.',
    'FinCEN': 'Financial Crimes Enforcement Network — US Treasury bureau for AML enforcement.',
    'SAR': 'Suspicious Activity Report — filing required for suspected financial crimes.',
    'HEDIS': 'Healthcare Effectiveness Data and Information Set — performance measurement tool.',
    'MIPS': 'Merit-based Incentive Payment System — CMS value-based payment program.',
    'NCQA': 'National Committee for Quality Assurance — healthcare accreditation organization.',
    'CMS': 'Centers for Medicare and Medicaid Services — federal healthcare agency.',
    'HIPAA': 'Health Insurance Portability and Accountability Act — US healthcare privacy law.',
    'WCAG': 'Web Content Accessibility Guidelines — international web accessibility standards.',
    'NPS': 'Net Promoter Score — customer loyalty and satisfaction measurement.',
    'CSAT': 'Customer Satisfaction Score — direct measure of customer satisfaction.',
    'FHIR': 'Fast Healthcare Interoperability Resources — healthcare data exchange standard.',
    'HL7': 'Health Level Seven — standards for healthcare data exchange.',
    'ICD-10': 'International Classification of Diseases, 10th Revision — medical coding standard.',
    'CPT': 'Current Procedural Terminology — medical procedure coding system.',
    'SNOMED': 'Systematized Nomenclature of Medicine — comprehensive clinical terminology.',
    'LOINC': 'Logical Observation Identifiers Names and Codes — laboratory observation coding.',
    'SERFF': 'System for Electronic Rate and Form Filing — insurance regulatory filing system.',
    'FedRAMP': 'Federal Risk and Authorization Management Program — cloud security authorization.',
    'JSON': 'JavaScript Object Notation — lightweight data interchange format.',
    'XML': 'Extensible Markup Language — markup language for document encoding.',
    'PDF': 'Portable Document Format — file format for document presentation.',
    'CSV': 'Comma-Separated Values — plain text tabular data format.',
    'Excel': 'Microsoft Excel — spreadsheet application for data analysis.',
    'AES': 'Advanced Encryption Standard — symmetric encryption algorithm.',
    'CQL': 'Clinical Quality Language — domain-specific language for clinical quality measures.',
    'EDI': 'Electronic Data Interchange — structured business document exchange.',
    'SIEM': 'Security Information and Event Management — security monitoring platform.',
    'SOAR': 'Security Orchestration, Automation and Response — security operations platform.',
    'NLP': 'Natural Language Processing — AI technology for understanding human language.',
    'AI': 'Artificial Intelligence — simulation of human intelligence by machines.',
    'ML': 'Machine Learning — subset of AI focused on learning from data.',
    'TTL': 'Time To Live — duration data is cached before refresh.',
    'CSV': 'Comma-Separated Values — tabular data format.',
  }

  const keywords = Object.keys(details)
  const matchedTerms = keywords.filter(kw => spec.includes(kw))
  const explanation = matchedTerms.length > 0
    ? matchedTerms.map(kw => details[kw]).join(' ')
    : 'This specification defines a key technical requirement for the platform feature, ensuring reliable, secure, and scalable operation within enterprise environments.'

  return {
    explanation,
    matchedTerms,
    context: `This specification is one of ${feature.technicalSpecs.length} technical requirements for the ${feature.title} feature.`,
  }
}

export default function TechnicalSpecPage() {
  const { capabilitySlug, featureSlug, specIndex } = useParams()
  const [searchParams] = useSearchParams()
  const fromPath = searchParams.get('from')

  const feature = getFeature(capabilitySlug, featureSlug)
  const referrer = findReferrerCapability(fromPath)

  const spec = feature?.technicalSpecs?.[parseInt(specIndex)]
  const specDetail = spec && feature ? generateSpecDetail(spec, feature, parseInt(specIndex)) : null

  const Icon = feature ? categoryIcons[feature.category] || Layers : Layers

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const detailRef = useRef(null)
  const detailInView = useInView(detailRef, { once: true, margin: '-40px' })
  const contextRef = useRef(null)
  const contextInView = useInView(contextRef, { once: true, margin: '-40px' })
  const relatedRef = useRef(null)
  const relatedInView = useInView(relatedRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  const backLink = referrer
    ? `/platform-features/${referrer.capabilitySlug}/${referrer.featureSlug}?from=/industries/${referrer.industrySlug}/${referrer.capabilitySlug}`
    : feature
      ? `/platform-features/${capabilitySlug}/${featureSlug}`
      : '/'

  const backLabel = referrer
    ? referrer.featureName
    : feature?.title || 'Feature'

  if (!feature || !spec) {
    return (
      <div className="bg-white pt-[90px] pb-20">
        <div className="container-site text-center">
          <h1 className="font-heading text-3xl font-bold text-navy mb-4">Specification Not Found</h1>
          <Link to="/" className="link-gold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const otherSpecs = feature.technicalSpecs
    .map((s, i) => ({ text: s, index: i }))
    .filter(s => s.index !== parseInt(specIndex))

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
            <Link to={backLink} className="link-gold inline-flex items-center gap-1.5 text-[0.75rem]">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="text-slate/70">{backLabel}</span>
              <span className="text-slate/40">/</span>
              <span>Technical Specification {parseInt(specIndex) + 1}</span>
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
                <span className="text-gold text-[1.1rem] font-bold tracking-[0.12em] uppercase">TECHNICAL SPECIFICATION</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                {spec}
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
                Specification {parseInt(specIndex) + 1} of {feature.technicalSpecs.length} for {feature.title}
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
                  <linearGradient id="spec-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" /><stop offset="50%" stopColor="#0f1f38" /><stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="spec-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.18" /><stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="spec-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" /><circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>
                <rect width="800" height="400" fill="url(#spec-bg)" />
                <rect width="800" height="400" fill="url(#spec-dots)" />
                <ellipse cx="400" cy="200" rx="280" ry="160" fill="url(#spec-glow)" />
                {/* Spec detail visualization */}
                <g transform="translate(200, 100)">
                  <rect x="0" y="0" width="400" height="200" rx="12" fill="rgba(200,155,60,0.04)" stroke="#c89b3c" strokeWidth="0.8" />
                  <rect x="20" y="20" width="360" height="24" rx="4" fill="rgba(200,155,60,0.12)" />
                  <rect x="20" y="56" width="280" height="16" rx="4" fill="rgba(200,155,60,0.08)" />
                  <rect x="20" y="84" width="320" height="16" rx="4" fill="rgba(200,155,60,0.08)" />
                  <rect x="20" y="112" width="240" height="16" rx="4" fill="rgba(200,155,60,0.08)" />
                  <rect x="20" y="148" width="360" height="32" rx="6" fill="rgba(200,155,60,0.06)" stroke="#c89b3c" strokeWidth="0.4" />
                  <circle cx="30" cy="164" r="6" fill="#c89b3c" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <rect x="44" y="158" width="120" height="12" rx="3" fill="rgba(200,155,60,0.15)" />
                </g>
                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <text x="400" y="370" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#c89b3c" opacity="0.4" letterSpacing="0.15em" textAnchor="middle">TECHNICAL SPECIFICATION DETAIL</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">SPEC {parseInt(specIndex) + 1} OF {feature.technicalSpecs.length}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spec Detail */}
      <section className="py-16 bg-white relative overflow-hidden" ref={detailRef}>
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={detailInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-6"
          >
            SPECIFICATION DETAIL
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={detailInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#f8f7f4] rounded-2xl p-8 border border-gray-100"
          >
            <p className="text-[1.05rem] text-navy leading-[1.8] mb-4">{specDetail.explanation}</p>
            {specDetail.matchedTerms.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {specDetail.matchedTerms.map(term => (
                  <span key={term} className="px-3 py-1 bg-gold/10 text-gold text-[0.72rem] font-bold tracking-[0.08em] uppercase rounded-full border border-gold/20">
                    {term}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Feature Context */}
      <section className="py-16 bg-[#f8f7f4] border-y border-gray-100" ref={contextRef}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={contextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            FEATURE CONTEXT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={contextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-8"
          >
            Part of {feature.title}<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-heading text-[0.92rem] font-bold text-navy mb-3">Feature Overview</h3>
              <p className="text-[0.88rem] text-slate leading-relaxed">{feature.shortDesc}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-heading text-[0.92rem] font-bold text-navy mb-3">All Technical Specifications</h3>
              <div className="space-y-2">
                {feature.technicalSpecs.map((s, i) => (
                  <div key={i} className={`flex items-start gap-2 ${i === parseInt(specIndex) ? 'text-gold' : 'text-slate'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${i === parseInt(specIndex) ? 'bg-gold text-navy' : 'bg-gray-100 text-slate/50'}`}>
                      {i === parseInt(specIndex) ? <Check className="w-3 h-3" strokeWidth={3} /> : <span className="text-[0.6rem] font-bold">{i + 1}</span>}
                    </div>
                    <span className={`text-[0.82rem] leading-relaxed ${i === parseInt(specIndex) ? 'font-semibold' : ''}`}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Specifications */}
      {otherSpecs.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100" ref={relatedRef}>
          <div className="container-site">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
            >
              OTHER SPECIFICATIONS
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
              {otherSpecs.map((s, i) => (
                <motion.div
                  key={s.index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={`/technical-specs/${capabilitySlug}/${featureSlug}/${s.index}?from=/platform-features/${capabilitySlug}/${featureSlug}`}
                    className="group block bg-[#f8f7f4] rounded-xl p-6 border border-gray-100 hover:border-gold/25 hover:shadow-[0_6px_24px_rgba(10,22,40,0.08)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-[0.72rem] font-bold text-gold">{s.index + 1}</span>
                      </div>
                      <p className="text-[0.82rem] text-navy leading-relaxed">{s.text}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-gold text-[0.68rem] font-bold tracking-[0.1em] uppercase group-hover:gap-2 transition-all duration-200">
                      VIEW DETAIL <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Feature */}
      <section className="py-12 bg-[#f8f7f4] border-t border-gray-100">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <Link
              to={backLink}
              className="flex items-center gap-3 text-slate hover:text-navy transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <div>
                <span className="text-[0.65rem] font-bold text-gold tracking-[0.15em] uppercase">BACK TO FEATURE</span>
                <p className="text-[0.92rem] font-semibold">{backLabel}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white" ref={ctaRef}>
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a1628] rounded-2xl p-10 text-center shadow-[0_12px_48px_rgba(10,22,40,0.25)] border border-gold/15"
          >
            <h2 className="font-heading text-[1.6rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-3">
              See These Specifications in Action.
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a demo to see how these technical specifications translate into real-world performance.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              REQUEST DEMO
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
