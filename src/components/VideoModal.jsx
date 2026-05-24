import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function VideoModal({ open, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((err) => {
        console.warn('Video autoplay blocked:', err)
      })
    }
    if (!open && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] bg-black">
              <video
                ref={videoRef}
                className="w-full aspect-video"
                controls
                playsInline
                preload="auto"
                muted
                poster="/images/west-palm-beach.webp"
              >
                <source src="/videos/pillars.mp4" type="video/mp4" />
                <source src="/videos/pillars.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="text-center mt-4">
              <p className="text-white/60 text-sm">
                Pillars of Wisdom — Platform Overview
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}