import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Play, LayoutGrid, Zap, Brain, ShieldCheck, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import VideoModal from '../components/VideoModal'

// Subtle animated background
function AnimatedBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[180%] h-[180%]"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 60%, rgba(200,155,60,0.06) 0%, transparent 55%)',
            'radial-gradient(ellipse at 75% 25%, rgba(200,155,60,0.09) 0%, transparent 55%)',
            'radial-gradient(ellipse at 40% 80%, rgba(200,155,60,0.05) 0%, transparent 55%)',
            'radial-gradient(ellipse at 20% 60%, rgba(200,155,60,0.06) 0%, transparent 55%)',
          ]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

// Magnetic button
function MagneticBtn({ children, className, to }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25)
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      <Link ref={ref} to={to} className={className}>{children}</Link>
    </motion.div>
  )
}

// Feature card
function FeatureCard({ icon, title, desc, link, delay, to }) {
  return (
    <Link to={to} className="block">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
        className="bg-white rounded-xl shadow-[0_4px_20px_rgba(10,22,40,0.07)] p-6 group cursor-pointer border border-gray-100 hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(10,22,40,0.12)] transition-all duration-300"
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 6 }}
          transition={{ type: 'spring', stiffness: 350 }}
        >
          <span className="text-gold">{icon}</span>
        </motion.div>
        <h3 className="font-heading text-[0.92rem] font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[0.78rem] text-slate leading-relaxed mb-4">{desc}</p>
        <span className="text-gold text-[0.7rem] font-bold tracking-[0.1em] uppercase flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          {link}
          <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </Link>
  )
}

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, -80])

  const imgRef = useRef(null)
  const { scrollYProgress: imgScroll } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(imgScroll, [0, 1], [0, -60])
  const imgScale = useTransform(imgScroll, [0, 0.5], [1, 1.04])

  const features = [
    { icon: <LayoutGrid className="w-5 h-5" strokeWidth={1.5} />, title: 'Unified Control Hub', desc: 'One unified platform to manage everything in real-time.', link: 'LEARN MORE', to: '/unified-hub' },
    { icon: <Zap className="w-5 h-5" strokeWidth={1.5} />, title: 'Complete Automation', desc: 'End-to-end workflows that eliminate manual work and accelerate operations.', link: 'EXPLORE AUTOMATION', to: '/automation' },
    { icon: <Brain className="w-5 h-5" strokeWidth={1.5} />, title: 'Adaptive Intelligence', desc: 'AI systems that learn, adapt, and continuously improve outcomes.', link: 'SEE HOW IT WORKS', to: '/adaptive-intelligence' },
    { icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />, title: 'Enterprise Security', desc: 'Advanced data protection, encryption, and compliance built for regulated industries.', link: 'DISCOVER SOLUTIONS', to: '/security' },
    { icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />, title: 'Scalable Growth', desc: 'Infrastructure that grows with your business, globally and securely.', link: 'LEARN DETAILS', to: '/scalable-growth' },
  ]

  return (
    <>
    <motion.section
      ref={containerRef}
      style={{ opacity: heroOpacity, y: heroY }}
      className="relative bg-white pt-[90px] overflow-hidden"
    >
      <AnimatedBg />
      {/* Dot mesh */}
      <div className="absolute inset-0 dot-mesh pointer-events-none" />

      {/* ── MAIN HERO ── */}
      <div className="container-site relative z-10 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center min-h-[480px]">

          {/* LEFT */}
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-gold" />
              <span className="text-gold text-[1.4rem] font-bold tracking-[0.12em] uppercase">
                Sovereign AI Operating System
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-navy leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)' }}
            >
              The Engine That
              <br />
              Runs Every Business
              <motion.span
                className="text-gold"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
              >.</motion.span>
            </motion.h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-[2px] w-24 bg-gradient-to-r from-gold to-gold/30 mb-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[1.05rem] text-slate leading-[1.72] max-w-[480px]"
            >
              Full-service automation for every industry —<br className="hidden xl:block" />
              connecting, streamlining, and scaling your entire operation.
            </motion.p>

            {/* XRP Ledger line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.82rem] text-slate/70 leading-relaxed max-w-[480px] mt-4"
            >
              Operational infrastructure with XRP Ledger integration.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mt-9"
            >
              <motion.button
                className="flex items-center gap-3 text-[0.78rem] font-bold text-navy tracking-[0.08em] uppercase hover:text-gold transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setVideoOpen(true)}
              >
                <motion.span
                  className="w-10 h-10 rounded-full border-[1.5px] border-navy flex items-center justify-center"
                  whileHover={{ borderColor: '#c89b3c', scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Play className="w-3.5 h-3.5 fill-navy ml-0.5" />
                </motion.span>
                Watch Overview
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — Hero image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              style={{ y: imgY, scale: imgScale }}
              className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(10,22,40,0.16)] border border-gray-100"
            >
              {/* Wipe reveal */}
              <motion.div
                className="absolute inset-0 bg-white z-20"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'right' }}
              />

              <img
                src="/images/west-palm-beach.webp"
                alt="Pillars of Wisdom — Enterprise Operations"
                className="w-full h-[400px] lg:h-[460px] object-cover"
              />

              {/* Gold ambient glow */}
              <motion.div
                className="absolute top-6 right-6 w-36 h-36 bg-gold/25 rounded-full blur-3xl"
                animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Grid lines */}
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
            </motion.div>

            {/* Decorative gold corner accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl pointer-events-none" />
          </motion.div>
        </div>

        {/* ── FEATURE CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={0.9 + i * 0.08} />
          ))}
        </div>
      </div>
    </motion.section>
    <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
