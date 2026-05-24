import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { customerApi } from '../lib/api';
import { GitBranch, Loader2, AlertCircle, Clock, CheckCircle2, XCircle, PauseCircle } from 'lucide-react';

const statusConfig = {
  running: { icon: <Clock className="w-4 h-4 text-yellow-400" />, color: 'text-yellow-400' },
  completed: { icon: <CheckCircle2 className="w-4 h-4 text-green-400" />, color: 'text-green-400' },
  failed: { icon: <XCircle className="w-4 h-4 text-red-400" />, color: 'text-red-400' },
  paused: { icon: <PauseCircle className="w-4 h-4 text-slate-muted" />, color: 'text-slate-muted' },
};

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    customerApi.workflows()
      .then(setWorkflows)
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

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-heading text-2xl font-bold text-white">Workflows</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[2px] w-8 bg-gold" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <div className="h-[2px] w-8 bg-gold" />
        </div>
      </motion.div>

      {workflows.length > 0 ? (
        <div className="space-y-3">
          {workflows.map((w) => {
            const sc = statusConfig[w.status] || statusConfig.running;
            return (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-xl p-5 border border-gold/15"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{w.template || w.type}</p>
                      <p className="text-slate-muted text-xs capitalize">{w.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {sc.icon}
                    <span className={`text-sm font-medium capitalize ${sc.color}`}>{w.status}</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-slate-muted">
                  Last updated: {new Date(w.lastUpdated).toLocaleString()}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-12 border border-gold/15 text-center">
          <GitBranch className="w-12 h-12 text-gold/40 mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2">No Workflows Yet</h3>
          <p className="text-slate-muted text-sm">
            Workflows will appear here once your AI marketing, sales, or operations engines are active.
          </p>
        </div>
      )}
    </div>
  );
}
