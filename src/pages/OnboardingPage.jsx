import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { onboardingMgmtApi } from '../lib/api';
import {
  Users,
  Plus,
  Search,
  Filter,
  ChevronRight,
  ChevronLeft,
  X,
  CheckCircle2,
  Circle,
  Clock,
  AlertCircle,
  Loader2,
  FileText,
  MessageSquare,
  Edit3,
  Trash2,
  Eye,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Flag,
  BarChart3,
  TrendingUp,
  UserPlus,
  Send,
  Save,
} from 'lucide-react';

const stages = [
  { key: 'new_lead', label: 'New Lead', color: 'bg-slate-500/20 text-slate-400 border-slate-500/30' },
  { key: 'initiated', label: 'Initiated', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { key: 'started', label: 'Started', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { key: 'in_progress', label: 'In Progress', color: 'bg-gold/10 text-gold border-gold/20' },
  { key: 'finalizing', label: 'Finalizing', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { key: 'completed', label: 'Completed', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
];

const priorities = {
  low: { label: 'Low', color: 'text-slate-400' },
  normal: { label: 'Normal', color: 'text-blue-400' },
  high: { label: 'High', color: 'text-orange-400' },
  urgent: { label: 'Urgent', color: 'text-red-400' },
};

const interactionTypes = [
  { value: 'email', label: 'Email' },
  { value: 'call', label: 'Phone Call' },
  { value: 'meeting', label: 'Meeting' },
  { value: 'note', label: 'Note' },
  { value: 'reminder', label: 'Reminder Sent' },
  { value: 'document_request', label: 'Document Request' },
];

const docTypes = [
  'Business License', 'Insurance Certificate', 'Signed Agreement',
  'ID Verification', 'Tax Documents', 'Bank Statement',
  'Compliance Form', 'Brand Guidelines', 'Other',
];

const categoryIcons = {
  communication: MessageSquare,
  assessment: BarChart3,
  sales: TrendingUp,
  legal: FileText,
  billing: Clock,
  documents: FileText,
  setup: Users,
  training: UserPlus,
  launch: CheckCircle2,
  retention: ArrowRight,
  general: Circle,
};

export default function OnboardingPage() {
  const [view, setView] = useState('list');
  const [cases, setCases] = useState([]);
  const [total, setTotal] = useState(0);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const pageSize = 20;

  const fetchData = useCallback(() => {
    setLoading(true);
    Promise.all([
      onboardingMgmtApi.listCases({
        search: search || undefined,
        stage: stageFilter || undefined,
        status: statusFilter || undefined,
        limit: pageSize,
        offset: page * pageSize,
      }),
      onboardingMgmtApi.stats(),
    ])
      .then(([casesData, statsData]) => {
        setCases(casesData.cases);
        setTotal(casesData.total);
        setStats(statsData);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [search, stageFilter, statusFilter, page]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleSearch = (e) => { e.preventDefault(); setPage(0); fetchData(); };
  const clearFilters = () => { setSearch(''); setStageFilter(''); setStatusFilter(''); setPage(0); };
  const totalPages = Math.ceil(total / pageSize);
  const hasFilters = search || stageFilter || statusFilter;

  if (loading && cases.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-white">Customer Onboarding</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-[2px] w-8 bg-gold" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
              <div className="h-[2px] w-8 bg-gold" />
            </div>
            <p className="text-slate-muted text-sm mt-2">Manage and track your customer onboarding pipeline</p>
          </div>
          <button onClick={() => setShowCreateModal(true)} className="btn-gold inline-flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Add Customer
          </button>
        </div>
      </motion.div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-xl p-4 border border-gold/15">
            <p className="text-slate-muted text-xs uppercase tracking-wider">Total</p>
            <p className="text-white text-2xl font-bold mt-1">{stats.total}</p>
          </div>
          {Object.entries(stats.byStage).map(([key, count]) => {
            const stage = stages.find(s => s.key === key);
            if (!stage) return null;
            return (
              <div key={key} className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-xl p-4 border border-gold/15">
                <p className="text-slate-muted text-xs uppercase tracking-wider">{stage.label}</p>
                <p className="text-white text-2xl font-bold mt-1">{count}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Pipeline view */}
      {stats && (
        <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15">
          <h3 className="text-white font-semibold mb-4">Pipeline Overview</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {stages.map((stage) => {
              const count = stats.byStage[stage.key] || 0;
              return (
                <button
                  key={stage.key}
                  onClick={() => setStageFilter(stageFilter === stage.key ? '' : stage.key)}
                  className={`flex-shrink-0 px-4 py-3 rounded-xl border transition-all min-w-[120px] text-center ${
                    stageFilter === stage.key
                      ? 'border-gold bg-gold/10'
                      : 'border-gold/10 bg-navy-muted/30 hover:border-gold/25'
                  }`}
                >
                  <p className={`text-xs uppercase tracking-wider ${stageFilter === stage.key ? 'text-gold' : 'text-slate-muted'}`}>
                    {stage.label}
                  </p>
                  <p className="text-white text-xl font-bold mt-1">{count}</p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Search and filters */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-4 border border-gold/15">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, or company..."
              className="w-full bg-[#0a1628] border border-gold/20 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 text-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50"
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button type="submit" className="btn-gold px-4 text-sm whitespace-nowrap">
            <Search className="w-4 h-4" />
            Search
          </button>
          {hasFilters && (
            <button type="button" onClick={clearFilters} className="px-3 py-2 text-slate-muted hover:text-white text-sm border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <X className="w-4 h-4" />
            </button>
          )}
        </form>
      </div>

      {/* Cases table */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl border border-gold/15 overflow-hidden">
        {cases.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider">Customer</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider hidden md:table-cell">Company</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider">Stage</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider hidden sm:table-cell">Progress</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider hidden lg:table-cell">Priority</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider hidden lg:table-cell">Assigned</th>
                    <th className="text-right py-3 px-4 text-slate-muted text-xs uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cases.map((c) => {
                    const stage = stages.find(s => s.key === c.stage) || stages[0];
                    const priority = priorities[c.priority] || priorities.normal;
                    return (
                      <tr key={c.id} className="border-b border-gold/10 last:border-0 hover:bg-gold/5 transition-colors">
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-white font-medium">{c.customerName}</p>
                            {c.customerEmail && <p className="text-slate-muted text-xs">{c.customerEmail}</p>}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-300 hidden md:table-cell">{c.companyName || '-'}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${stage.color}`}>
                            {stage.label}
                          </span>
                        </td>
                        <td className="py-3 px-4 hidden sm:table-cell">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-navy-muted rounded-full h-1.5">
                              <div className="bg-gold h-1.5 rounded-full" style={{ width: `${c.progressPct}%` }} />
                            </div>
                            <span className="text-slate-muted text-xs">{c.progressPct}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 hidden lg:table-cell">
                          <span className={`text-xs font-medium ${priority.color}`}>
                            <Flag className="w-3 h-3 inline mr-1" />
                            {priority.label}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-muted text-xs hidden lg:table-cell">{c.assignedToName || 'Unassigned'}</td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => { setSelectedCase(c); setShowDetailModal(true); }}
                              className="p-1.5 text-slate-muted hover:text-gold transition-colors rounded-lg hover:bg-gold/10"
                              title="View details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => { setSelectedCase(c); setView('edit'); }}
                              className="p-1.5 text-slate-muted hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-500/10"
                              title="Edit"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-gold/15">
              <p className="text-slate-muted text-sm">
                Showing {page * pageSize + 1}-{Math.min((page + 1) * pageSize, total)} of {total}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage(p => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="p-2 rounded-lg border border-gold/20 text-slate-muted hover:text-gold hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-white text-sm px-3">Page {page + 1} of {totalPages || 1}</span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={page >= totalPages - 1}
                  className="p-2 rounded-lg border border-gold/20 text-slate-muted hover:text-gold hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="p-12 text-center">
            <Users className="w-12 h-12 text-gold/40 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">No customers found</h3>
            <p className="text-slate-muted text-sm mb-4">
              {hasFilters ? 'Try adjusting your search filters' : 'Add your first customer to start the onboarding process'}
            </p>
            {!hasFilters && (
              <button onClick={() => setShowCreateModal(true)} className="btn-gold inline-flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Add Customer
              </button>
            )}
          </div>
        )}
      </div>

      {/* Create Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <CreateCaseModal onClose={() => setShowCreateModal(false)} onSuccess={() => { setShowCreateModal(false); fetchData(); }} />
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetailModal && selectedCase && (
          <CaseDetailModal
            caseData={selectedCase}
            onClose={() => { setShowDetailModal(false); setSelectedCase(null); }}
            onUpdate={() => { setShowDetailModal(false); setSelectedCase(null); fetchData(); }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function CreateCaseModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({ customerName: '', customerEmail: '', customerPhone: '', companyName: '', priority: 'normal', notes: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.customerName.trim()) { setError('Customer name is required'); return; }
    setLoading(true);
    try {
      await onboardingMgmtApi.createCase(form);
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()} className="bg-[rgba(15,29,50,0.95)] backdrop-blur-[12px] rounded-2xl border border-gold/20 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold text-lg">Add New Customer</h3>
            <button onClick={onClose} className="text-slate-muted hover:text-white"><X className="w-5 h-5" /></button>
          </div>
          {error && <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4"><p className="text-red-400 text-sm">{error}</p></div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">Customer Name *</label>
              <input type="text" value={form.customerName} onChange={(e) => setForm(f => ({ ...f, customerName: e.target.value }))} placeholder="John Doe" className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 text-sm" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">Email</label>
                <input type="email" value={form.customerEmail} onChange={(e) => setForm(f => ({ ...f, customerEmail: e.target.value }))} placeholder="john@example.com" className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">Phone</label>
                <input type="tel" value={form.customerPhone} onChange={(e) => setForm(f => ({ ...f, customerPhone: e.target.value }))} placeholder="(555) 123-4567" className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">Company</label>
              <input type="text" value={form.companyName} onChange={(e) => setForm(f => ({ ...f, companyName: e.target.value }))} placeholder="Acme Corp" className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">Priority</label>
                <select value={form.priority} onChange={(e) => setForm(f => ({ ...f, priority: e.target.value }))} className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 text-sm">
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">Notes</label>
              <textarea value={form.notes} onChange={(e) => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Any initial notes about this customer..." rows={3} className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 text-sm resize-none" />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" onClick={onClose} className="px-4 py-2 text-slate-muted hover:text-white border border-gold/20 rounded-lg hover:border-gold/40 transition-colors text-sm">Cancel</button>
              <button type="submit" disabled={loading} className="btn-gold inline-flex items-center gap-2 disabled:opacity-60">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                Add Customer
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function CaseDetailModal({ caseData, onClose, onUpdate }) {
  const [caseDetail, setCaseDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('steps');
  const [newInteraction, setNewInteraction] = useState({ interactionType: 'note', subject: '', content: '' });
  const [newDoc, setNewDoc] = useState({ docType: '', docName: '' });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    onboardingMgmtApi.getCase(caseData.id)
      .then(setCaseDetail)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [caseData.id]);

  const handleCompleteStep = async (stepId) => {
    try {
      await onboardingMgmtApi.completeStep(caseData.id, stepId, {});
      setCaseDetail(await onboardingMgmtApi.getCase(caseData.id));
      setSuccessMsg('Step completed!');
      setTimeout(() => setSuccessMsg(''), 2000);
    } catch (err) { setError(err.message); }
  };

  const handleUncompleteStep = async (stepId) => {
    try {
      await onboardingMgmtApi.uncompleteStep(caseData.id, stepId);
      setCaseDetail(await onboardingMgmtApi.getCase(caseData.id));
    } catch (err) { setError(err.message); }
  };

  const handleAddInteraction = async () => {
    if (!newInteraction.content.trim()) return;
    try {
      await onboardingMgmtApi.addInteraction(caseData.id, newInteraction);
      setNewInteraction({ interactionType: 'note', subject: '', content: '' });
      setCaseDetail(await onboardingMgmtApi.getCase(caseData.id));
      setSuccessMsg('Interaction logged!');
      setTimeout(() => setSuccessMsg(''), 2000);
    } catch (err) { setError(err.message); }
  };

  const handleAddDocument = async () => {
    if (!newDoc.docType) return;
    try {
      await onboardingMgmtApi.addDocument(caseData.id, newDoc);
      setNewDoc({ docType: '', docName: '' });
      setCaseDetail(await onboardingMgmtApi.getCase(caseData.id));
      setSuccessMsg('Document added!');
      setTimeout(() => setSuccessMsg(''), 2000);
    } catch (err) { setError(err.message); }
  };

  const handleUpdateStatus = async (status) => {
    try {
      await onboardingMgmtApi.updateCase(caseData.id, { status });
      setCaseDetail(await onboardingMgmtApi.getCase(caseData.id));
      onUpdate();
    } catch (err) { setError(err.message); }
  };

  const handleUpdatePriority = async (priority) => {
    try {
      await onboardingMgmtApi.updateCase(caseData.id, { priority });
      setCaseDetail(await onboardingMgmtApi.getCase(caseData.id));
    } catch (err) { setError(err.message); }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[rgba(15,29,50,0.95)] backdrop-blur-[12px] rounded-2xl border border-gold/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-12 text-center">
          <Loader2 className="w-8 h-8 text-gold animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  if (!caseDetail) return null;

  const stage = stages.find(s => s.key === caseDetail.stage) || stages[0];
  const priority = priorities[caseDetail.priority] || priorities.normal;

  const tabs = [
    { key: 'steps', label: 'Steps', icon: CheckCircle2 },
    { key: 'documents', label: 'Documents', icon: FileText },
    { key: 'interactions', label: 'Interactions', icon: MessageSquare },
    { key: 'details', label: 'Details', icon: Edit3 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()} className="bg-[rgba(15,29,50,0.95)] backdrop-blur-[12px] rounded-2xl border border-gold/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-white font-semibold text-xl">{caseDetail.customerName}</h3>
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${stage.color}`}>{stage.label}</span>
                <span className={`text-xs font-medium ${priority.color}`}><Flag className="w-3 h-3 inline mr-1" />{priority.label}</span>
                <span className="text-slate-muted text-xs">{caseDetail.companyName || 'No company'}</span>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-muted hover:text-white"><X className="w-5 h-5" /></button>
          </div>

          {/* Quick info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {caseDetail.customerEmail && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-slate-300 text-xs truncate">{caseDetail.customerEmail}</span>
              </div>
            )}
            {caseDetail.customerPhone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-slate-300 text-xs">{caseDetail.customerPhone}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-slate-muted text-xs">{caseDetail.progressPct}% complete</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-slate-muted text-xs">{caseDetail.assignedToName || 'Unassigned'}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-navy-muted rounded-full h-2 mb-6">
            <div className="bg-gold h-2 rounded-full transition-all duration-500" style={{ width: `${caseDetail.progressPct}%` }} />
          </div>

          {/* Quick actions */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <select
              value={caseDetail.status}
              onChange={(e) => handleUpdateStatus(e.target.value)}
              className="bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-1.5 text-white text-xs focus:outline-none focus:border-gold/50"
            >
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select
              value={caseDetail.priority}
              onChange={(e) => handleUpdatePriority(e.target.value)}
              className="bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-1.5 text-white text-xs focus:outline-none focus:border-gold/50"
            >
              <option value="low">Low Priority</option>
              <option value="normal">Normal Priority</option>
              <option value="high">High Priority</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          {successMsg && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
              <p className="text-green-400 text-sm">{successMsg}</p>
            </div>
          )}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-1 mb-4 border-b border-gold/15">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? 'border-gold text-gold'
                      : 'border-transparent text-slate-muted hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          {activeTab === 'steps' && (
            <div className="space-y-2">
              {caseDetail.steps.map((step) => {
                const Icon = categoryIcons[step.category] || Circle;
                return (
                  <div key={step.id} className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                    step.completed ? 'border-gold/20 bg-gold/5' : 'border-gold/10 bg-navy-muted/30'
                  }`}>
                    <div className="flex items-center gap-3">
                      <button onClick={() => step.completed ? handleUncompleteStep(step.id) : handleCompleteStep(step.id)} className="shrink-0">
                        {step.completed ? <CheckCircle2 className="w-5 h-5 text-gold" /> : <Circle className="w-5 h-5 text-slate-muted hover:text-gold" />}
                      </button>
                      <div>
                        <p className={`text-sm font-medium ${step.completed ? 'text-slate-muted line-through' : 'text-white'}`}>{step.label}</p>
                        <p className="text-xs text-slate-muted capitalize">{step.category}</p>
                      </div>
                    </div>
                    {step.completedAt && <span className="text-xs text-slate-muted">{new Date(step.completedAt).toLocaleDateString()}</span>}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <select value={newDoc.docType} onChange={(e) => setNewDoc(d => ({ ...d, docType: e.target.value }))} className="flex-1 bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-gold/50">
                  <option value="">Select document type...</option>
                  {docTypes.map(dt => <option key={dt} value={dt}>{dt}</option>)}
                </select>
                <input type="text" value={newDoc.docName} onChange={(e) => setNewDoc(d => ({ ...d, docName: e.target.value }))} placeholder="Document name" className="flex-1 bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-gold/50" />
                <button onClick={handleAddDocument} className="btn-gold px-3 text-sm"><Plus className="w-4 h-4" /></button>
              </div>
              {caseDetail.documents.length > 0 ? (
                <div className="space-y-2">
                  {caseDetail.documents.map((doc) => {
                    const statusColors = { pending: 'text-yellow-400', uploaded: 'text-blue-400', approved: 'text-green-400', rejected: 'text-red-400' };
                    return (
                      <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg border border-gold/10 bg-navy-muted/30">
                        <div>
                          <p className="text-white text-sm">{doc.docType}</p>
                          {doc.docName && <p className="text-slate-muted text-xs">{doc.docName}</p>}
                        </div>
                        <span className={`text-xs font-medium ${statusColors[doc.status] || 'text-slate-muted'}`}>{doc.status}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-slate-muted text-sm text-center py-4">No documents added yet</p>
              )}
            </div>
          )}

          {activeTab === 'interactions' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <select value={newInteraction.interactionType} onChange={(e) => setNewInteraction(n => ({ ...n, interactionType: e.target.value }))} className="bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-gold/50">
                    {interactionTypes.map(it => <option key={it.value} value={it.value}>{it.label}</option>)}
                  </select>
                </div>
                <input type="text" value={newInteraction.subject} onChange={(e) => setNewInteraction(n => ({ ...n, subject: e.target.value }))} placeholder="Subject (optional)" className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-gold/50" />
                <div className="flex gap-2">
                  <textarea value={newInteraction.content} onChange={(e) => setNewInteraction(n => ({ ...n, content: e.target.value }))} placeholder="Log a call, email, meeting note..." rows={2} className="flex-1 bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-gold/50 resize-none" />
                  <button onClick={handleAddInteraction} disabled={!newInteraction.content.trim()} className="btn-gold self-end disabled:opacity-60"><Send className="w-4 h-4" /></button>
                </div>
              </div>
              {caseDetail.interactions.length > 0 ? (
                <div className="space-y-3">
                  {caseDetail.interactions.map((interaction) => (
                    <div key={interaction.id} className="p-3 rounded-lg border border-gold/10 bg-navy-muted/30">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gold text-xs font-medium uppercase">{interaction.interactionType}</span>
                        <span className="text-slate-muted text-xs">{new Date(interaction.createdAt).toLocaleString()}</span>
                      </div>
                      {interaction.subject && <p className="text-white text-sm font-medium mb-1">{interaction.subject}</p>}
                      <p className="text-slate-300 text-sm whitespace-pre-wrap">{interaction.content}</p>
                      {interaction.userName && <p className="text-slate-muted text-xs mt-2">by {interaction.userName}</p>}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-muted text-sm text-center py-4">No interactions logged yet</p>
              )}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-4">
              <div>
                <p className="text-slate-muted text-xs uppercase tracking-wider">Customer Name</p>
                <p className="text-white">{caseDetail.customerName}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Email</p>
                  <p className="text-slate-300">{caseDetail.customerEmail || '-'}</p>
                </div>
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Phone</p>
                  <p className="text-slate-300">{caseDetail.customerPhone || '-'}</p>
                </div>
              </div>
              <div>
                <p className="text-slate-muted text-xs uppercase tracking-wider">Company</p>
                <p className="text-slate-300">{caseDetail.companyName || '-'}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Stage</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border mt-1 ${stage.color}`}>{stage.label}</span>
                </div>
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Priority</p>
                  <span className={`text-sm font-medium ${priority.color}`}>{priority.label}</span>
                </div>
              </div>
              <div>
                <p className="text-slate-muted text-xs uppercase tracking-wider">Notes</p>
                <p className="text-slate-300 text-sm whitespace-pre-wrap">{caseDetail.notes || 'No notes'}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Created</p>
                  <p className="text-slate-300 text-sm">{new Date(caseDetail.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Last Updated</p>
                  <p className="text-slate-300 text-sm">{new Date(caseDetail.updatedAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
