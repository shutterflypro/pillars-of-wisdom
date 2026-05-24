import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { customerApi } from '../lib/api';
import {
  Building2,
  CheckCircle2,
  GitBranch,
  CreditCard,
  MessageCircle,
  ArrowRight,
  Loader2,
  AlertCircle,
} from 'lucide-react';

export default function CustomerPortal() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    customerApi.dashboard()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
        <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (!data) return null;

  const tierColors = {
    foundation: 'bg-gold/20 text-gold border-gold/30',
    professional: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    enterprise: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  };

  const statusColors = {
    active: 'bg-green-500/20 text-green-400',
    pending: 'bg-yellow-500/20 text-yellow-400',
    suspended: 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-heading text-2xl font-bold text-white">Dashboard</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[2px] w-8 bg-gold" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <div className="h-[2px] w-8 bg-gold" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Account Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-white font-semibold">Account Overview</h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-slate-muted text-xs uppercase tracking-wider">Company</p>
              <p className="text-white font-medium">{data.company.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${tierColors[data.company.tier]}`}>
                {data.company.tier}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusColors[data.company.status]}`}>
                {data.company.status}
              </span>
            </div>
            <div>
              <p className="text-slate-muted text-xs uppercase tracking-wider">Industry</p>
              <p className="text-white">{data.company.industry || 'Not set'}</p>
            </div>
          </div>
        </motion.div>

        {/* Onboarding Progress */}
        {data.onboarding.progress < 100 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-white font-semibold">Onboarding</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-slate-muted text-xs uppercase tracking-wider">Progress</p>
              <p className="text-gold font-bold">{data.onboarding.progress}%</p>
            </div>
            <div className="w-full bg-navy-muted rounded-full h-2">
              <div
                className="bg-gold h-2 rounded-full transition-all duration-500"
                style={{ width: `${data.onboarding.progress}%` }}
              />
            </div>
            <p className="text-slate-muted text-sm">Stage: <span className="text-white capitalize">{data.onboarding.stage}</span></p>
            <button
              onClick={() => navigate('/portal/onboarding')}
              className="flex items-center gap-1 text-gold text-sm hover:text-gold-light transition-colors"
            >
              Continue <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
        )}

        {/* Billing Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-white font-semibold">Billing</h2>
          </div>
          {data.nextBilling ? (
            <div className="space-y-3">
              <div>
                <p className="text-slate-muted text-xs uppercase tracking-wider">Amount</p>
                <p className="text-white font-bold text-lg">${data.nextBilling.amount}</p>
              </div>
              <div>
                <p className="text-slate-muted text-xs uppercase tracking-wider">Status</p>
                <p className="text-green-400 capitalize">{data.nextBilling.status}</p>
              </div>
              <button
                onClick={() => navigate('/portal/billing')}
                className="flex items-center gap-1 text-gold text-sm hover:text-gold-light transition-colors"
              >
                View Details <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <p className="text-slate-muted text-sm">No billing records yet.</p>
          )}
        </motion.div>

        {/* Active Workflows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15 md:col-span-2 xl:col-span-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-white font-semibold">Active Workflows</h2>
          </div>
          {data.activeWorkflows.length > 0 ? (
            <div className="space-y-2">
              {data.activeWorkflows.map((w) => (
                <div key={w.id} className="flex items-center justify-between py-2 border-b border-gold/10 last:border-0">
                  <div>
                    <p className="text-white text-sm">{w.template || w.type}</p>
                    <p className="text-slate-muted text-xs capitalize">{w.type}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                    {w.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-muted text-sm">No active workflows.</p>
          )}
        </motion.div>

        {/* AI Avatar Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15 md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-white font-semibold">AI Avatar Assistant</h2>
          </div>
          <p className="text-slate-muted text-sm mb-4">
            Get instant help with onboarding, workflows, billing, or any questions about your account.
          </p>
          <button
            onClick={() => navigate('/portal/avatar')}
            className="btn-gold inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Start Chat
          </button>
        </motion.div>

        {/* Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-white font-semibold">Unlocked Modules</h2>
          </div>
          <div className="space-y-2">
            {data.modules.map((mod, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span className="text-slate-300">{mod}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
