import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'

export default function AISupportWidget() {
  const [isOpen, setIsOpen] = useState(false)

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
        <span className="text-[0.75rem] font-semibold tracking-[0.08em] uppercase">AI Support</span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-6 z-50 w-72 bg-white rounded-2xl shadow-[0_12px_48px_rgba(10,22,40,0.18)] border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0a1628] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[0.82rem] font-semibold text-white">AI Support</div>
                  <div className="text-[0.62rem] text-slate-light tracking-wide">Intelligent Assistance</div>
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

            {/* Body */}
            <div className="px-5 py-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <p className="text-[0.82rem] text-navy font-medium mb-1.5">AI-Powered Assistance</p>
                <p className="text-[0.75rem] text-slate leading-relaxed">
                  Intelligent support capabilities are being developed and will be available soon.
                </p>
              </div>
            </div>

            {/* Footer accent */}
            <div className="h-[2px] bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
