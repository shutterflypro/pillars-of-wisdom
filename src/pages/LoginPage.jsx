import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/portal');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-8 border border-gold/15 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="26" width="24" height="3" rx="1.5" fill="#c89b3c"/>
                <rect x="3" y="4" width="26" height="3" rx="1.5" fill="#c89b3c"/>
                <rect x="7" y="7" width="3" height="19" rx="1.5" fill="#c89b3c"/>
                <rect x="14.5" y="7" width="3" height="19" rx="1.5" fill="#c89b3c"/>
                <rect x="22" y="7" width="3" height="19" rx="1.5" fill="#c89b3c"/>
              </svg>
            </div>
            <h1 className="font-heading text-2xl font-bold text-white">Welcome Back</h1>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-[2px] w-8 bg-gold" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
              <div className="h-[2px] w-8 bg-gold" />
            </div>
            <p className="text-slate-muted text-sm mt-3">Sign in to your customer portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                placeholder="you@company.com"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 pr-12 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-muted hover:text-gold transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold flex items-center justify-center gap-2 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
