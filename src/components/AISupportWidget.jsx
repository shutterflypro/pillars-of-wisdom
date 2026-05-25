import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Send, Mic, MicOff, Navigation, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { industryCapabilities } from '../data/industryCapabilities'
import { getAllFeatures } from '../data/platformFeatures'

const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY || ''

const siteRoutes = [
  { path: '/', label: 'Home', keywords: ['home', 'main', 'landing', 'start'] },
  { path: '/platform', label: 'Platform Overview', keywords: ['platform', 'overview', 'what is pillars', 'about'] },
  { path: '/modules', label: 'Modules', keywords: ['modules', 'features', 'capabilities', 'what can it do'] },
  { path: '/industries', label: 'Industries', keywords: ['industries', 'sectors', 'verticals', 'which industries'] },
  { path: '/ai', label: 'AI & Automation', keywords: ['ai', 'artificial intelligence', 'automation', 'machine learning', 'ml'] },
  { path: '/enterprise', label: 'Enterprise', keywords: ['enterprise', 'large organization', 'scale', 'scalability'] },
  { path: '/pricing', label: 'Pricing', keywords: ['pricing', 'cost', 'price', 'how much', 'plans', 'subscription', 'billing'] },
  { path: '/contact', label: 'Contact Us', keywords: ['contact', 'reach out', 'get in touch', 'talk to', 'demo', 'schedule'] },
  { path: '/support', label: 'Support', keywords: ['support', 'help', 'assistance', 'problem', 'issue'] },
  { path: '/security', label: 'Security', keywords: ['security', 'safe', 'protect', 'compliance', 'data protection'] },
  { path: '/how-pillars-work', label: 'How Pillars Work', keywords: ['how it works', 'how does it work', 'process', 'workflow'] },
  { path: '/mortgage-workflow', label: 'Mortgage Workflow', keywords: ['mortgage', 'loan workflow', 'mortgage process', 'loan process'] },
  { path: '/blockchain-infrastructure', label: 'Blockchain Infrastructure', keywords: ['blockchain', 'crypto', 'digital asset', 'token'] },
]

function buildKnowledgeBase() {
  const kb = { industries: [], capabilities: [], features: [] }

  for (const [industrySlug, caps] of Object.entries(industryCapabilities)) {
    const industryName = caps[Object.keys(caps)[0]]?.title?.split(' ')[0] || industrySlug
    kb.industries.push({
      slug: industrySlug,
      name: industryName,
      path: `/industries/${industrySlug}`,
      description: caps[Object.keys(caps)[0]]?.shortDesc || '',
      keywords: [industrySlug.replace(/-/g, ' '), industryName.toLowerCase(), ...getCapsKeywords(caps)],
    })

    for (const [capSlug, cap] of Object.entries(caps)) {
      kb.capabilities.push({
        slug: capSlug,
        name: cap.title,
        industry: industrySlug,
        path: `/industries/${industrySlug}/${capSlug}`,
        description: cap.shortDesc,
        fullDescription: cap.fullDescription,
        benefits: cap.benefits || [],
        keywords: [capSlug.replace(/-/g, ' '), cap.title.toLowerCase(), ...(cap.benefits || []).map(b => b.toLowerCase())],
      })
    }
  }

  const allFeatures = getAllFeatures()
  for (const feat of allFeatures) {
    kb.features.push({
      slug: feat.featureSlug,
      name: feat.title,
      capability: feat.capabilitySlug,
      industry: feat.industryRef,
      path: `/platform-features/${feat.capabilitySlug}/${feat.featureSlug}`,
      description: feat.shortDesc,
      category: feat.category,
      keywords: [feat.featureSlug.replace(/-/g, ' '), feat.title.toLowerCase(), feat.category?.toLowerCase() || ''],
    })
  }

  return kb
}

function getCapsKeywords(caps) {
  const kws = []
  for (const cap of Object.values(caps)) {
    kws.push(cap.title.toLowerCase())
    kws.push(cap.shortDesc.toLowerCase())
    if (cap.benefits) cap.benefits.forEach(b => kws.push(b.toLowerCase()))
  }
  return kws
}

const knowledgeBase = buildKnowledgeBase()

function findBestAnswer(query) {
  const q = query.toLowerCase()
  const results = []

  // Check site routes first
  for (const route of siteRoutes) {
    for (const kw of route.keywords) {
      if (q.includes(kw)) {
        results.push({ type: 'route', ...route, score: 10 })
        break
      }
    }
  }

  // Check industries
  for (const ind of knowledgeBase.industries) {
    for (const kw of ind.keywords) {
      if (q.includes(kw)) {
        results.push({ type: 'industry', ...ind, score: 8 })
        break
      }
    }
  }

  // Check capabilities
  for (const cap of knowledgeBase.capabilities) {
    for (const kw of cap.keywords) {
      if (q.includes(kw)) {
        results.push({ type: 'capability', ...cap, score: 7 })
        break
      }
    }
  }

  // Check features
  for (const feat of knowledgeBase.features) {
    for (const kw of feat.keywords) {
      if (q.includes(kw)) {
        results.push({ type: 'feature', ...feat, score: 6 })
        break
      }
    }
  }

  // Sort by score and return top results
  return results.sort((a, b) => b.score - a.score).slice(0, 3)
}

function generateResponse(query, results) {
  const q = query.toLowerCase()

  // Greeting
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(q)) {
    return {
      text: "Hello! I'm Artemis, your Pillars of Wisdom assistant. I can help you explore our platform capabilities, industry solutions, technical features, or guide you to any page on the site. What would you like to know?",
      navigateTo: null,
    }
  }

  // Who are you
  if (/who are you|what are you|your name/.test(q)) {
    return {
      text: "I'm Artemis, the AI support assistant for Pillars of Wisdom. I have deep knowledge of every capability, feature, and solution on this platform. I can answer questions about our industry solutions, technical specifications, platform features, or navigate you to any page you need. How can I help?",
      navigateTo: null,
    }
  }

  // Pricing
  if (/pricing|cost|price|how much|plans|subscription/.test(q)) {
    return {
      text: "Our pricing is tailored to your organization's needs. We offer flexible plans based on the modules you need, user count, and deployment preferences. Visit our pricing page to explore options, or I can connect you with our team for a custom quote.",
      navigateTo: '/pricing',
    }
  }

  // Demo
  if (/demo|schedule|book|meeting/.test(q)) {
    return {
      text: "I'd be happy to help you schedule a personalized demo. You can reach out through our contact page and our team will set up a session tailored to your industry and requirements.",
      navigateTo: '/contact',
    }
  }

  // Security
  if (/security|safe|protect|compliance|data protection|encryption/.test(q)) {
    return {
      text: "Security is foundational to Pillars of Wisdom. We implement enterprise-grade encryption, role-based access controls, comprehensive audit trails, and compliance frameworks across all modules. Our platform supports SOC 2, HIPAA, and FedRAMP requirements. Visit our security page for complete details.",
      navigateTo: '/security',
    }
  }

  // Industries
  if (/industries|sectors|verticals|which industry|who is this for/.test(q)) {
    const industries = knowledgeBase.industries.map(i => i.name).join(', ')
    return {
      text: `Pillars of Wisdom serves ${industries}. Each industry has specialized capabilities tailored to its unique compliance, workflow, and operational requirements. Would you like to explore a specific industry?`,
      navigateTo: '/industries',
    }
  }

  // Healthcare
  if (/healthcare|medical|hospital|patient|hipaa|clinical/.test(q)) {
    const healthcareCaps = knowledgeBase.capabilities.filter(c => c.industry === 'healthcare')
    const capList = healthcareCaps.slice(0, 4).map(c => c.name).join(', ')
    return {
      text: `Our Healthcare solutions include ${capList}, and more. These capabilities address HIPAA compliance, clinical documentation, patient workflow management, provider onboarding, quality metrics, and data security.`,
      navigateTo: '/industries/healthcare',
    }
  }

  // Financial services
  if (/financial|bank|banking|investment|portfolio|regulatory reporting/.test(q)) {
    const finCaps = knowledgeBase.capabilities.filter(c => c.industry === 'financial-services')
    const capList = finCaps.slice(0, 4).map(c => c.name).join(', ')
    return {
      text: `Our Financial Services platform includes ${capList}. These capabilities address regulatory reporting, risk management, document automation, client onboarding, portfolio analytics, and fraud detection.`,
      navigateTo: '/industries/financial-services',
    }
  }

  // Mortgage
  if (/mortgage|loan (origination|processing|workflow)|home loan/.test(q)) {
    return {
      text: "Our Mortgage Workflow solution covers the complete loan lifecycle from intake through underwriting, compliance monitoring, and audit reporting. The platform automates document processing, risk assessment, and regulatory compliance throughout the entire mortgage process.",
      navigateTo: '/mortgage-workflow',
    }
  }

  // AI
  if (/artificial intelligence|machine learning|ai |automation|nlp|natural language/.test(q)) {
    return {
      text: "AI and automation are core to Pillars of Wisdom. Our platform includes AI orchestration, adaptive intelligence, automated workflow routing, intelligent document processing, and predictive analytics. These capabilities reduce manual effort, improve accuracy, and accelerate processing across all industries.",
      navigateTo: '/ai',
    }
  }

  // How it works
  if (/how (does|do) (it|pillars|the platform|this) work|how it works|process|workflow/.test(q)) {
    return {
      text: "Pillars of Wisdom works through three core pillars: Unified Hub for centralized visibility, Automation for intelligent processing, and Adaptive Intelligence for continuous improvement. The platform integrates with your existing systems, automates complex workflows, and learns from your operations to continuously optimize performance.",
      navigateTo: '/how-pillars-work',
    }
  }

  // If we have search results
  if (results.length > 0) {
    const top = results[0]
    if (top.type === 'industry') {
      const caps = knowledgeBase.capabilities.filter(c => c.industry === top.slug)
      const capNames = caps.slice(0, 3).map(c => c.name).join(', ')
      return {
        text: `The ${top.name} industry solution includes ${caps.length} specialized capabilities covering ${capNames}, and more. Each capability is designed to address the unique compliance, workflow, and operational requirements of ${top.name.toLowerCase()} organizations.`,
        navigateTo: top.path,
      }
    }
    if (top.type === 'capability') {
      return {
        text: `${top.name}: ${top.description}. This capability includes 5 platform features with detailed technical specifications, use cases, and implementation guidance.`,
        navigateTo: top.path,
      }
    }
    if (top.type === 'feature') {
      return {
        text: `${top.name} (${top.category}): ${top.description}. This is one of the platform features within the ${top.capability} capability.`,
        navigateTo: top.path,
      }
    }
    if (top.type === 'route') {
      return {
        text: `I can take you to the ${top.label} page.`,
        navigateTo: top.path,
      }
    }
  }

  // Default response
  return {
    text: "I can help you explore our platform. I have detailed knowledge of our industry solutions, platform capabilities, technical features, and compliance frameworks. You can ask me about specific industries like healthcare, financial services, or government. Or ask about pricing, security, or how the platform works. What would you like to know?",
    navigateTo: null,
  }
}

export default function AISupportWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello, I'm Artemis. How can I help you today?" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setIsTyping(true)

    // Simulate thinking delay
    await new Promise(r => setTimeout(r, 800 + Math.random() * 600))

    const results = findBestAnswer(userMsg)
    const response = generateResponse(userMsg, results)

    setMessages(prev => [...prev, { role: 'assistant', text: response.text, navigateTo: response.navigateTo }])
    setIsTyping(false)

    // Speak response using ElevenLabs TTS
    if (ELEVENLABS_API_KEY && response.text) {
      speakText(response.text)
    }
  }

  const speakText = async (text) => {
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_turbo_v2_5',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      })

      if (response.ok) {
        const audioBlob = await response.blob()
        const audioUrl = URL.createObjectURL(audioBlob)
        const audio = new Audio(audioUrl)
        audio.play()
      }
    } catch (e) {
      // Silently fail - TTS is optional
    }
  }

  const handleNavigate = (path) => {
    if (path) {
      setIsOpen(false)
      navigate(path)
      window.scrollTo(0, 0)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#0a1628] text-white rounded-full px-5 py-3 shadow-[0_4px_20px_rgba(10,22,40,0.25)] border border-gold/30 hover:border-gold/50 hover:shadow-[0_6px_28px_rgba(10,22,40,0.35)] transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="AI Support"
      >
        <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.5} />
        <span className="text-[0.75rem] font-semibold tracking-[0.08em] uppercase">Ask Artemis</span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[24rem] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-[0_12px_48px_rgba(10,22,40,0.18)] border border-gray-100 overflow-hidden flex flex-col"
            style={{ height: '32rem', maxHeight: 'calc(100vh - 8rem)' }}
          >
            {/* Header */}
            <div className="bg-[#0a1628] px-5 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[0.82rem] font-semibold text-white">Artemis</div>
                  <div className="text-[0.62rem] text-slate-light tracking-wide">AI Business Assistant</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-[#0a1628] text-white rounded-br-md'
                      : 'bg-[#f8f7f4] text-navy rounded-bl-md border border-gray-100'
                  }`}>
                    <p className="text-[0.82rem] leading-relaxed">{msg.text}</p>
                    {msg.navigateTo && msg.role === 'assistant' && (
                      <button
                        onClick={() => handleNavigate(msg.navigateTo)}
                        className="mt-2 flex items-center gap-1.5 text-gold text-[0.72rem] font-bold tracking-[0.08em] uppercase hover:gap-2 transition-all duration-200"
                      >
                        <Navigation className="w-3 h-3" />
                        Go to page
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#f8f7f4] rounded-2xl rounded-bl-md px-4 py-3 border border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-gold/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-gold/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-gold/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-[#f8f7f4] rounded-full px-4 py-2.5 text-[0.82rem] text-navy placeholder:text-slate/50 border border-gray-100 focus:outline-none focus:border-gold/30 focus:ring-1 focus:ring-gold/20"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-navy hover:bg-gold/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Footer accent */}
            <div className="h-[2px] bg-gradient-to-r from-gold/40 via-gold/20 to-transparent flex-shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
