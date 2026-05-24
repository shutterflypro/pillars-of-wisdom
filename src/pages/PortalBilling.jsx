import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { customerApi } from '../lib/api';
import {
  CreditCard,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  Loader2,
} from 'lucide-react';

const statusIcons = {
  confirmed: <CheckCircle2 className="w-4 h-4 text-green-400" />,
  pending: <Clock className="w-4 h-4 text-yellow-400" />,
  disputed: <AlertCircle className="w-4 h-4 text-orange-400" />,
  refunded: <XCircle className="w-4 h-4 text-red-400" />,
};

export default function PortalBilling() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    customerApi.billing()
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

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-heading text-2xl font-bold text-white">Billing & Payments</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[2px] w-8 bg-gold" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <div className="h-[2px] w-8 bg-gold" />
        </div>
      </motion.div>

      {/* Access Status */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15">
        <h2 className="text-white font-semibold mb-4">Module Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.access.modules.map((mod, i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-3 rounded-lg bg-navy-muted/50 border border-gold/10"
            >
              <CheckCircle2 className="w-4 h-4 text-gold" />
              <span className="text-slate-300 text-sm">{mod}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gold/20 text-gold border border-gold/30">
            {data.access.tier}
          </span>
          <span className="text-slate-muted text-sm capitalize">{data.access.status}</span>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15">
        <h2 className="text-white font-semibold mb-4">Payment History</h2>
        {data.records.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="text-left py-3 px-2 text-slate-muted text-xs uppercase tracking-wider">Date</th>
                  <th className="text-left py-3 px-2 text-slate-muted text-xs uppercase tracking-wider">Amount</th>
                  <th className="text-left py-3 px-2 text-slate-muted text-xs uppercase tracking-wider">Method</th>
                  <th className="text-left py-3 px-2 text-slate-muted text-xs uppercase tracking-wider">Status</th>
                  <th className="text-left py-3 px-2 text-slate-muted text-xs uppercase tracking-wider">XRPL Proof</th>
                </tr>
              </thead>
              <tbody>
                {data.records.map((record) => (
                  <tr key={record.id} className="border-b border-gold/10 last:border-0">
                    <td className="py-3 px-2 text-slate-300">
                      {new Date(record.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-2 text-white font-medium">
                      ${record.amount} {record.currency}
                    </td>
                    <td className="py-3 px-2 text-slate-300 capitalize">{record.method || 'N/A'}</td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1">
                        {statusIcons[record.status]}
                        <span className="text-slate-300 capitalize">{record.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      {record.xrplProofHash ? (
                        <a
                          href={`https://livenet.xrpl.org/transactions/${record.xrplProofHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-gold hover:text-gold-light transition-colors"
                        >
                          <span className="text-xs font-mono">{record.xrplProofHash.slice(0, 12)}...</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-slate-muted text-xs">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-slate-muted text-sm text-center py-8">No payment records yet.</p>
        )}
      </div>

      {/* Upgrade CTA */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold">Need More Features?</h3>
            <p className="text-slate-muted text-sm mt-1">
              Upgrade your plan to access additional modules and capabilities.
            </p>
          </div>
          <a href="/contact" className="btn-gold inline-flex items-center gap-2 shrink-0">
            <CreditCard className="w-4 h-4" />
            Upgrade Plan
          </a>
        </div>
      </div>
    </div>
  );
}
