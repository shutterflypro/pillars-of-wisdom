import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import {
  Landmark, ShieldCheck, FileText, Users, BarChart3, Lock,
  Scale, ClipboardCheck, Shield, Eye,
  HeartPulse, Umbrella, Home, Calculator, Building2,
  Check, ArrowLeft, ArrowRight, Calendar,
} from 'lucide-react'

const iconMap = {
  Landmark, ShieldCheck, FileText, Users, BarChart3, Lock,
  Scale, ClipboardCheck, Shield, Eye,
  HeartPulse, Umbrella, Home, Calculator, Building2,
}

const industriesData = {
  'financial-services': {
    name: 'Financial Services',
    description: 'End-to-end workflow automation for banks, lenders, and financial institutions — with policy controls built into every process.',
    stats: [
      { value: '85%', label: 'Reduced Processing Time' },
      { value: '99.9%', label: 'Compliance Accuracy' },
      { value: '3x', label: 'Faster Loan Origination' },
      { value: '60%', label: 'Lower Operational Costs' },
    ],
    features: [
      { icon: 'Landmark', text: 'Regulatory Reporting', desc: 'Automated reporting across jurisdictions' },
      { icon: 'ShieldCheck', text: 'Risk Management', desc: 'Real-time risk scoring and monitoring' },
      { icon: 'FileText', text: 'Document Automation', desc: 'Intelligent document processing and classification' },
      { icon: 'Users', text: 'Client Onboarding', desc: 'Streamlined KYC and client lifecycle management' },
      { icon: 'BarChart3', text: 'Portfolio Analytics', desc: 'AI-driven portfolio insights and optimization' },
      { icon: 'Lock', text: 'Fraud Detection', desc: 'Advanced pattern recognition and anomaly detection' },
    ],
    useCases: [
      'Automated loan origination and servicing',
      'Real-time policy monitoring',
      'Integrated wealth management workflows',
      'Secure multi-entity reporting',
    ],
    process: ['Intake & Validation', 'AI Analysis & Decisioning', 'Compliance Verification', 'Execution & Reporting'],
    quote: { text: 'Pillars of Wisdom reduced our loan processing time by 78% while maintaining 100% regulatory compliance.', source: 'VP of Operations, Top 10 U.S. Mortgage Lender' },
  },
  'legal-compliance': {
    name: 'Legal & Compliance',
    description: 'RegTech-powered governance for legal teams, policy officers, and risk managers.',
    stats: [
      { value: '90%', label: 'Faster Review Cycles' },
      { value: '100%', label: 'Audit Trail Coverage' },
      { value: '70%', label: 'Cost Reduction' },
      { value: '24/7', label: 'Regulatory Monitoring' },
    ],
    features: [
      { icon: 'Scale', text: 'Policy Management', desc: 'Centralized policy creation and enforcement' },
      { icon: 'ClipboardCheck', text: 'Audit Trails', desc: 'Immutable, timestamped audit records' },
      { icon: 'FileText', text: 'Contract Automation', desc: 'AI-powered contract review and approval' },
      { icon: 'Shield', text: 'Risk Assessment', desc: 'Dynamic risk scoring and mitigation tracking' },
      { icon: 'Users', text: 'Case Management', desc: 'End-to-end legal case workflow automation' },
      { icon: 'Eye', text: 'Regulatory Monitoring', desc: 'Continuous regulatory change tracking' },
    ],
    useCases: [
      'Automated contract review and approval',
      'Regulatory change management',
      'Legal hold and eDiscovery workflows',
      'Compliance calendar and task management',
    ],
    process: ['Regulatory Intake', 'Policy Mapping', 'Automated Assessment', 'Continuous Monitoring'],
    quote: { text: 'The platform changed how we handle regulatory change — from weeks to hours.', source: 'Chief Compliance Officer, Global Financial Services Firm' },
  },
  healthcare: {
    name: 'Healthcare',
    description: 'HIPAA-aware workflow platforms for hospitals, clinics, and health systems — automating processes while keeping patient data secure.',
    stats: [
      { value: '92%', label: 'Prior Auth Automation' },
      { value: '100%', label: 'HIPAA Compliance' },
      { value: '4x', label: 'Faster Credentialing' },
      { value: '65%', label: 'Reduced Admin Burden' },
    ],
    features: [
      { icon: 'HeartPulse', text: 'Patient Workflow', desc: 'End-to-end patient journey orchestration' },
      { icon: 'ShieldCheck', text: 'HIPAA Compliance', desc: 'Built-in safeguards for protected health information' },
      { icon: 'FileText', text: 'Clinical Docs', desc: 'AI-powered clinical document intelligence and coding' },
      { icon: 'Users', text: 'Provider Onboarding', desc: 'Automated credentialing and enrollment workflows' },
      { icon: 'BarChart3', text: 'Quality Metrics', desc: 'Real-time clinical quality measure tracking' },
      { icon: 'Lock', text: 'Data Security', desc: 'Encryption, access controls, and audit logging' },
    ],
    useCases: [
      'Prior authorization automation',
      'Clinical document intelligence',
      'Provider credentialing workflows',
      'Quality reporting and analytics',
    ],
    process: ['Patient Intake', 'Clinical Documentation', 'Compliance Verification', 'Care Coordination'],
    quote: { text: 'Our prior authorization turnaround dropped from 5 days to under 4 hours with full HIPAA compliance.', source: 'COO, Regional Health System' },
  },
  government: {
    name: 'Government & Public Sector',
    description: 'Secure, accountable workflows for federal, state, and local institutions — built on dedicated infrastructure.',
    stats: [
      { value: '80%', label: 'Faster Permit Processing' },
      { value: '99.99%', label: 'Platform Uptime' },
      { value: '3x', label: 'Citizen Satisfaction' },
      { value: '100%', label: 'Audit Transparency' },
    ],
    features: [
      { icon: 'Landmark', text: 'Public Records', desc: 'Digitized records management and access' },
      { icon: 'ShieldCheck', text: 'Security Clearance', desc: 'Role-based access for classified workflows' },
      { icon: 'FileText', text: 'Case Management', desc: 'Constituent service case tracking and resolution' },
      { icon: 'Users', text: 'Citizen Services', desc: 'Digital-first citizen engagement platforms' },
      { icon: 'BarChart3', text: 'Budget Analytics', desc: 'Transparent spending and performance tracking' },
      { icon: 'Lock', text: 'Data Sovereignty', desc: 'FedRAMP-aligned data handling and residency' },
    ],
    useCases: [
      'Permit and licensing automation',
      'Public records management',
      'Regulatory enforcement workflows',
      'Grant administration and reporting',
    ],
    process: ['Application Receipt', 'Automated Review', 'Decision & Approval', 'Public Notification'],
    quote: { text: 'Pillars of Wisdom gave us the transparency and accountability our constituents deserve.', source: 'Director of Technology, State Agency' },
  },
  insurance: {
    name: 'Insurance',
    description: 'Claims, underwriting, and policy automation for carriers and agencies — reducing cycle times while maintaining regulatory rigor.',
    stats: [
      { value: '75%', label: 'Faster Claims Processing' },
      { value: '95%', label: 'Fraud Detection Rate' },
      { value: '50%', label: 'Reduced Underwriting Time' },
      { value: '100%', label: 'Regulatory Filing Accuracy' },
    ],
    features: [
      { icon: 'Umbrella', text: 'Claims Processing', desc: 'Intelligent claims intake, triage, and resolution' },
      { icon: 'ShieldCheck', text: 'Fraud Detection', desc: 'Pattern-based anomaly detection and flagging' },
      { icon: 'FileText', text: 'Policy Admin', desc: 'End-to-end policy lifecycle management' },
      { icon: 'Users', text: 'Agent Onboarding', desc: 'Streamlined producer licensing and appointments' },
      { icon: 'BarChart3', text: 'Actuarial Analytics', desc: 'AI-enhanced risk modeling and pricing' },
      { icon: 'Lock', text: 'Regulatory Filing', desc: 'Automated state and federal filing compliance' },
    ],
    useCases: [
      'Automated claims intake and triage',
      'Underwriting decision support',
      'Policy lifecycle management',
      'Regulatory filing automation',
    ],
    process: ['FNOL Intake', 'AI Triage & Validation', 'Adjustment & Settlement', 'Regulatory Reporting'],
    quote: { text: 'Our claims cycle time dropped 60% while fraud detection improved dramatically.', source: 'SVP of Claims, National Insurance Carrier' },
  },
  'real-estate': {
    name: 'Real Estate',
    description: 'Property and workflow infrastructure for developers, managers, and investors — from lease abstraction to future tokenized asset support.',
    stats: [
      { value: '90%', label: 'Lease Abstraction Accuracy' },
      { value: '70%', label: 'Faster Due Diligence' },
      { value: '100%', label: 'Investor Transparency' },
      { value: '3x', label: 'Portfolio Throughput' },
    ],
    features: [
      { icon: 'Home', text: 'Property Mgmt', desc: 'Unified property operations and tenant management' },
      { icon: 'ShieldCheck', text: 'Lease Compliance', desc: 'Automated lease abstraction and obligation tracking' },
      { icon: 'FileText', text: 'Doc Automation', desc: 'Intelligent document processing for real estate' },
      { icon: 'Users', text: 'Tenant Onboarding', desc: 'Streamlined tenant application and move-in' },
      { icon: 'BarChart3', text: 'Investment Analytics', desc: 'Portfolio performance and market analytics' },
      { icon: 'Lock', text: 'Tokenization (Roadmap)', desc: 'Future support for tokenized property ownership and investor verification' },
    ],
    useCases: [
      'Lease abstraction and compliance',
      'Property management workflows',
      'Investor reporting automation',
      'Due diligence document management',
    ],
    process: ['Property Intake', 'AI Abstraction', 'Compliance Check', 'Investor Reporting'],
    quote: { text: 'We now process leases in hours instead of weeks, with perfect compliance.', source: 'Managing Director, RE Investment Firm' },
  },
  'banks-credit-unions': {
    name: 'Banks & Credit Unions',
    description: 'Institutional financial workflows and policy controls for community and regional banks — from core processes to BSA/AML.',
    stats: [
      { value: '80%', label: 'BSA/AML Automation' },
      { value: '99.9%', label: 'Platform Uptime' },
      { value: '50%', label: 'Cost Reduction' },
      { value: '2x', label: 'Member Satisfaction' },
    ],
    features: [
      { icon: 'Building2', text: 'Core Banking', desc: 'Integrated core system automation' },
      { icon: 'ShieldCheck', text: 'BSA/AML', desc: 'Automated suspicious activity monitoring and reporting' },
      { icon: 'FileText', text: 'Loan Docs', desc: 'End-to-end loan document processing' },
      { icon: 'Users', text: 'Member Services', desc: 'Enhanced member experience and onboarding' },
      { icon: 'BarChart3', text: 'Performance Reports', desc: 'Real-time financial performance dashboards' },
      { icon: 'Lock', text: 'Cybersecurity', desc: 'Institution-grade security and threat detection' },
    ],
    useCases: [
      'Commercial loan origination',
      'Deposit account opening',
      'BSA/AML monitoring and reporting',
      'Member onboarding and KYC',
    ],
    process: ['Application Intake', 'KYC Verification', 'Decision & Funding', 'Ongoing Monitoring'],
    quote: { text: 'Our BSA/AML team went from drowning in alerts to focused investigation in weeks.', source: 'BSA Officer, Regional Credit Union' },
  },
  'accounting-tax': {
    name: 'Accounting & Tax',
    description: 'Audit-ready workflow systems for accounting firms and tax practices — ensuring accuracy and policy adherence at scale.',
    stats: [
      { value: '95%', label: 'Filing Accuracy' },
      { value: '70%', label: 'Time Saved Per Return' },
      { value: '100%', label: 'Audit Trail Coverage' },
      { value: '4x', label: 'Client Capacity' },
    ],
    features: [
      { icon: 'Calculator', text: 'Tax Automation', desc: 'Automated tax preparation and e-filing' },
      { icon: 'ShieldCheck', text: 'Audit Support', desc: 'Audit-ready documentation and workpapers' },
      { icon: 'FileText', text: 'Doc Collection', desc: 'Intelligent document gathering and organization' },
      { icon: 'Users', text: 'Client Portal', desc: 'Secure client collaboration and document exchange' },
      { icon: 'BarChart3', text: 'Financial Analytics', desc: 'Practice management and client analytics' },
      { icon: 'Lock', text: 'Data Protection', desc: 'Tax-grade security and data sovereignty' },
    ],
    useCases: [
      'Automated tax return preparation',
      'Audit document collection and review',
      'Client portal and collaboration',
      'Regulatory filing management',
    ],
    process: ['Client Intake', 'Document Collection', 'AI-Driven Preparation', 'Review & Filing'],
    quote: { text: 'We handle 4x more clients during tax season without adding staff.', source: 'Managing Partner, Mid-Size Accounting Firm' },
  },
}

export default function IndustryPage() {
  const { slug } = useParams()
  const industry = industriesData[slug]
  const Icon = industry ? iconMap[industry.features[0]?.icon] : HeartPulse

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-40px' })
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-40px' })
  const useCasesRef = useRef(null)
  const useCasesInView = useInView(useCasesRef, { once: true, margin: '-40px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })

  if (!industry) {
    return (
      <div className="bg-white pt-[90px] pb-20">
        <div className="container-site text-center">
          <h1 className="section-heading mb-4">Industry Not Found</h1>
          <Link to="/industries" className="link-gold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Industries
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white relative">
      {/* ── HERO SECTION ── */}
      <section className="pt-[90px] pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />

        <div className="container-site relative z-10" ref={headerRef}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link to="/industries" className="link-gold inline-flex items-center gap-1.5 text-[0.75rem]">
              <ArrowLeft className="w-3.5 h-3.5" />
              All Industries
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
                <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">INDUSTRY SOLUTIONS</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-navy leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
              >
                {industry.name}
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
                className="text-[1rem] text-slate leading-[1.72] max-w-[480px]"
              >
                {industry.description}
              </motion.p>
            </div>

            {/* Right — Industry SVG graphic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 lg:h-64 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.12)]"
            >
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="ind-hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="50%" stopColor="#0f1f38" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <radialGradient id="ind-hero-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c89b3c" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#c89b3c" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="ind-hero-blue" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#4a90d9" stopOpacity="0" />
                  </radialGradient>
                  <filter id="ind-hero-g">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <pattern id="ind-hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
                    <rect width="28" height="28" fill="none" />
                    <circle cx="14" cy="14" r="0.5" fill="rgba(255,255,255,0.03)" />
                  </pattern>
                </defs>

                <rect width="800" height="400" fill="url(#ind-hero-bg)" />
                <rect width="800" height="400" fill="url(#ind-hero-dots)" />
                <ellipse cx="350" cy="200" rx="250" ry="180" fill="url(#ind-hero-glow)" />
                <ellipse cx="550" cy="300" rx="150" ry="100" fill="url(#ind-hero-blue)" />

                {/* Central large icon circle */}
                <circle cx="400" cy="190" r="55" fill="rgba(200,155,60,0.08)" stroke="#c89b3c" strokeWidth="1.2" />
                <circle cx="400" cy="190" r="38" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="0.8" />
                <circle cx="400" cy="190" r="22" fill="rgba(200,155,60,0.2)" stroke="#c89b3c" strokeWidth="1" filter="url(#ind-hero-g)" />

                {/* Pulsing rings */}
                <circle cx="400" cy="190" r="68" fill="none" stroke="#c89b3c" strokeWidth="0.5" opacity="0.25">
                  <animate attributeName="r" values="68;82;68" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.25;0.08;0.25" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="190" r="92" fill="none" stroke="#c89b3c" strokeWidth="0.3" opacity="0.12">
                  <animate attributeName="r" values="92;110;92" dur="4.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.12;0.04;0.12" dur="4.5s" repeatCount="indefinite" />
                </circle>

                {/* Feature nodes around the hub */}
                <g opacity="0.8">
                  <circle cx="200" cy="130" r="16" fill="rgba(200,155,60,0.12)" stroke="#c89b3c" strokeWidth="1" />
                  <circle cx="200" cy="130" r="9" fill="rgba(200,155,60,0.2)" stroke="#c89b3c" strokeWidth="0.6" />
                  <circle cx="620" cy="140" r="16" fill="rgba(74,144,217,0.12)" stroke="#4a90d9" strokeWidth="1" />
                  <circle cx="620" cy="140" r="9" fill="rgba(74,144,217,0.18)" stroke="#4a90d9" strokeWidth="0.6" />
                  <circle cx="180" cy="270" r="15" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="0.9" />
                  <circle cx="180" cy="270" r="8.5" fill="rgba(74,144,217,0.16)" stroke="#4a90d9" strokeWidth="0.5" />
                  <circle cx="600" cy="280" r="16" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.9" />
                  <circle cx="600" cy="280" r="9" fill="rgba(200,155,60,0.18)" stroke="#c89b3c" strokeWidth="0.5" />
                  <circle cx="300" cy="310" r="14" fill="rgba(200,155,60,0.1)" stroke="#c89b3c" strokeWidth="0.8" />
                  <circle cx="300" cy="310" r="8" fill="rgba(200,155,60,0.16)" stroke="#c89b3c" strokeWidth="0.5" />
                  <circle cx="530" cy="320" r="14" fill="rgba(74,144,217,0.1)" stroke="#4a90d9" strokeWidth="0.8" />
                  <circle cx="530" cy="320" r="8" fill="rgba(74,144,217,0.15)" stroke="#4a90d9" strokeWidth="0.5" />
                </g>

                {/* Connection lines */}
                <g opacity="0.3" strokeWidth="0.8">
                  <path d="M200,130 Q280,160 345,185" fill="none" stroke="#c89b3c" strokeDasharray="4,3" />
                  <path d="M620,140 Q540,165 455,188" fill="none" stroke="#4a90d9" strokeDasharray="4,3" />
                  <path d="M180,270 Q270,240 360,200" fill="none" stroke="#4a90d9" strokeDasharray="3,4" />
                  <path d="M600,280 Q520,250 440,200" fill="none" stroke="#c89b3c" strokeDasharray="4,3" />
                  <path d="M300,310 Q340,270 380,210" fill="none" stroke="#c89b3c" strokeDasharray="3,4" />
                  <path d="M530,320 Q480,270 420,210" fill="none" stroke="#4a90d9" strokeDasharray="3,4" />
                </g>

                {/* Animated flow particles */}
                <circle r="2" fill="#c89b3c" opacity="0.8">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M200,130 Q280,160 345,185" />
                </circle>
                <circle r="2" fill="#4a90d9" opacity="0.6">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M620,140 Q540,165 455,188" />
                </circle>
                <circle r="1.5" fill="#4a90d9" opacity="0.5">
                  <animateMotion dur="3.2s" repeatCount="indefinite" path="M180,270 Q270,240 360,200" />
                </circle>
                <circle r="2" fill="#c89b3c" opacity="0.7">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M600,280 Q520,250 440,200" />
                </circle>

                {/* Corner accents */}
                <path d="M20,20 L50,20 M20,20 L20,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,20 L750,20 M780,20 L780,50" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M20,380 L50,380 M20,380 L20,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />
                <path d="M780,380 L750,380 M780,380 L780,350" fill="none" stroke="#c89b3c" strokeWidth="1" opacity="0.12" />

                {/* Bottom fade */}
                <rect y="340" width="800" height="60" fill="url(#ind-hero-bg)" opacity="0.7" />
              </svg>

              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a1628]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.68rem] font-bold text-white/80 tracking-[0.18em] uppercase">{industry.name}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-10 bg-[#0a1628]" ref={statsRef}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {industry.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="font-heading text-[2rem] lg:text-[2.5rem] font-bold text-gold leading-none">{stat.value}</div>
                <div className="text-[0.72rem] font-bold text-white/70 uppercase tracking-[0.12em] mt-1.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY CAPABILITIES ── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={featuresRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-6"
          >
            KEY CAPABILITIES
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.features.map((feature, i) => {
              const FeatureIcon = iconMap[feature.icon]
              return (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(10,22,40,0.07)] border border-gray-100 hover:border-gold/25 hover:shadow-[0_8px_32px_rgba(10,22,40,0.11)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FeatureIcon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] font-bold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">{feature.text}</h3>
                  <p className="text-[0.82rem] text-slate leading-relaxed">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS FLOW ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={processRef}>
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
            From Intake to Outcome<span className="text-gold">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.process.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-navy font-heading font-bold text-[0.85rem]">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-heading text-[0.92rem] font-bold text-navy mb-1">{step}</h4>
                  </div>
                </div>
                {i < industry.process.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%+8px)] w-[calc(100%-80px)] h-px bg-gold/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-mesh pointer-events-none" />
        <div className="container-site relative z-10" ref={useCasesRef}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.7rem] font-bold text-gold tracking-[0.22em] uppercase mb-2"
          >
            USE CASES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-navy leading-[1.1] mb-8"
          >
            Real-World Applications<span className="text-gold">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-8 shadow-[0_6px_30px_rgba(10,22,40,0.08)] border border-gray-100"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {industry.useCases.map((useCase, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.92rem] text-slate leading-relaxed">
                  <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold" strokeWidth={2.5} />
                  </div>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      {industry.quote && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-gold text-4xl font-heading mb-4">"</div>
              <p className="font-heading text-[1.1rem] md:text-[1.25rem] text-navy leading-[1.5] mb-4">
                {industry.quote.text}
              </p>
              <p className="text-[0.82rem] text-slate font-semibold uppercase tracking-wider">
                — {industry.quote.source}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
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
              Ready to Transform Your<br />{industry.name} Operations?
            </h2>
            <p className="text-[0.92rem] text-slate-300 max-w-lg mx-auto mb-7">
              Schedule a strategy session with our team to discover how Pillars of Wisdom can organize your workflows.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Calendar className="w-4 h-4" />
              SCHEDULE A CONSULTATION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}