import { useState, useEffect } from 'react';
import {
  LayoutDashboard, Users, Calendar, Megaphone, FileText, Phone, DollarSign,
  Store, Settings, Plus, Edit2, Trash2, Search, Filter, ChevronLeft, ChevronRight,
  X, Save, Eye, ArrowUpCircle, ArrowDownCircle, CheckCircle, AlertCircle,
  Send, RotateCcw, MoreVertical, Tag, MapPin, Mail, Smartphone, Building,
  Building2, Globe, Receipt, CreditCard, UserCheck, CircleCheck, LifeBuoy,
  CalendarDays, FileBadge, Clock, Bell, Palette, Hash,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('pillars_token');
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
};

const api = {
  get: async (path) => {
    const res = await fetch(`${API_BASE}/crm${path}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  post: async (path, body) => {
    const res = await fetch(`${API_BASE}/crm${path}`, {
      method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  put: async (path, body) => {
    const res = await fetch(`${API_BASE}/crm${path}`, {
      method: 'PUT', headers: getAuthHeaders(), body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  del: async (path) => {
    const res = await fetch(`${API_BASE}/crm${path}`, {
      method: 'DELETE', headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
};

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'leads', label: 'Leads', icon: Users },
  { id: 'followups', label: 'Follow-ups', icon: Calendar },
  { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
  { id: 'proposals', label: 'Proposals', icon: FileText },
  { id: 'call-logs', label: 'Call Logs', icon: Phone },
  { id: 'commissions', label: 'Commissions', icon: DollarSign },
  { id: 'marketplaces', label: 'Marketplaces', icon: Store },
  { id: 'settings', label: 'Settings', icon: Settings },
];

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-[#0d1b33] border border-gold/20 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gold/15">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-slate-muted hover:text-white"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function Pagination({ page, total, limit, onPageChange }) {
  const totalPages = Math.ceil(total / limit);
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-slate-muted">
      <span>{total} total</span>
      <div className="flex items-center gap-2">
        <button disabled={page === 0} onClick={() => onPageChange(page - 1)} className="px-2 py-1 rounded bg-navy/50 hover:bg-gold/10 disabled:opacity-30"><ChevronLeft className="w-4 h-4" /></button>
        <span>Page {page + 1} of {totalPages}</span>
        <button disabled={page >= totalPages - 1} onClick={() => onPageChange(page + 1)} className="px-2 py-1 rounded bg-navy/50 hover:bg-gold/10 disabled:opacity-30"><ChevronRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    active: 'bg-green-500/20 text-green-300', draft: 'bg-slate-500/20 text-slate-300',
    scheduled: 'bg-yellow-500/20 text-yellow-300', open: 'bg-blue-500/20 text-blue-300',
    cancelled: 'bg-red-500/20 text-red-300', completed: 'bg-green-500/20 text-green-300',
    sent: 'bg-purple-500/20 text-purple-300', accepted: 'bg-green-500/20 text-green-300',
    declined: 'bg-red-500/20 text-red-300', pending: 'bg-yellow-500/20 text-yellow-300',
    paid: 'bg-green-500/20 text-green-300', customer: 'bg-blue-500/20 text-blue-300',
    lead: 'bg-gold/20 text-gold',
  };
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[status] || 'bg-slate-500/20 text-slate-300'}`}>{status}</span>;
}

// ============================================
// DASHBOARD TAB
// ============================================
function DashboardTab() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/dashboard').then(setData).catch(console.error).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-slate-muted">Loading...</div>;
  if (!data) return <div className="text-red-400">Failed to load dashboard</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">CRM Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <p className="text-slate-muted text-sm">Total Leads</p>
          <p className="text-2xl font-bold text-white mt-1">{data.leadStats?.total_leads || 0}</p>
          <p className="text-xs text-green-400 mt-1">{data.leadStats?.new_leads_30d || 0} new (30d)</p>
        </div>
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <p className="text-slate-muted text-sm">Converted</p>
          <p className="text-2xl font-bold text-white mt-1">{data.leadStats?.converted_leads || 0}</p>
        </div>
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <p className="text-slate-muted text-sm">Today&apos;s Follow-ups</p>
          <p className="text-2xl font-bold text-white mt-1">{data.scheduleStats?.today_schedules || 0}</p>
        </div>
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <p className="text-slate-muted text-sm">Proposals Sent</p>
          <p className="text-2xl font-bold text-white mt-1">{data.proposalStats?.sent_proposals || 0}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3">Leads by Source</h3>
          {data.leadsBySource?.length ? (
            <div className="space-y-2">
              {data.leadsBySource.map((s) => (
                <div key={s.source} className="flex justify-between text-sm">
                  <span className="text-slate-muted">{s.source || 'Unknown'}</span>
                  <span className="text-white font-medium">{s.count}</span>
                </div>
              ))}
            </div>
          ) : <p className="text-slate-muted text-sm">No data</p>}
        </div>
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3">Leads by Life Stage</h3>
          {data.leadsByLifeStage?.length ? (
            <div className="space-y-2">
              {data.leadsByLifeStage.map((s) => (
                <div key={s.life_stage} className="flex justify-between text-sm">
                  <span className="text-slate-muted">{s.life_stage || 'Unknown'}</span>
                  <span className="text-white font-medium">{s.count}</span>
                </div>
              ))}
            </div>
          ) : <p className="text-slate-muted text-sm">No data</p>}
        </div>
      </div>
    </div>
  );
}

// ============================================
// LEADS TAB
// ============================================
function LeadsTab() {
  const [leads, setLeads] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [filters, setFilters] = useState({ source: '', lifeStage: '' });
  const [sources, setSources] = useState([]);
  const [lifeStages, setLifeStages] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', mobile: '', companyName: '', source: '', lifeStage: '', addressLine1: '', city: '', state: '', country: '' });

  const limit = 20;

  const loadLeads = () => {
    setLoading(true);
    const params = new URLSearchParams({ limit, offset: page * limit, ...filters });
    api.get(`/leads?${params}`).then((d) => { setLeads(d.leads); setTotal(d.total); }).catch(console.error).finally(() => setLoading(false));
  };

  const loadDropdowns = () => {
    api.get('/leads/sources').then(setSources).catch(console.error);
    api.get('/leads/life-stages').then(setLifeStages).catch(console.error);
  };

  useEffect(() => { loadLeads(); loadDropdowns(); }, [page, filters]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingLead) {
        await api.put(`/leads/${editingLead.id}`, form);
      } else {
        await api.post('/leads', form);
      }
      setModalOpen(false);
      setEditingLead(null);
      setForm({ name: '', email: '', mobile: '', companyName: '', source: '', lifeStage: '', addressLine1: '', city: '', state: '', country: '' });
      loadLeads();
    } catch (err) { console.error(err); }
  };

  const handleEdit = (lead) => {
    setEditingLead(lead);
    setForm({ name: lead.name, email: lead.email || '', mobile: lead.mobile || '', companyName: lead.company_name || '', source: lead.source || '', lifeStage: lead.life_stage || '', addressLine1: lead.address_line_1 || '', city: lead.city || '', state: lead.state || '', country: lead.country || '' });
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this lead?')) return;
    await api.del(`/leads/${id}`);
    loadLeads();
  };

  const handleConvert = async (id) => {
    if (!confirm('Convert this lead to a customer?')) return;
    await api.post(`/leads/${id}/convert`);
    loadLeads();
  };

  const getStageColor = (stageName) => {
    const stage = lifeStages.find((s) => s.name === stageName);
    if (stage?.color) return { backgroundColor: stage.color + '33', color: stage.color };
    return { backgroundColor: 'rgba(100,116,139,0.2)', color: '#94a3b8' };
  };

  if (viewMode === 'kanban') {
    const grouped = {};
    lifeStages.forEach((ls) => { grouped[ls.name] = []; });
    leads.forEach((l) => { if (l.life_stage) { if (!grouped[l.life_stage]) grouped[l.life_stage] = []; grouped[l.life_stage].push(l); } });

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Leads (Kanban)</h2>
          <div className="flex gap-2">
            <button onClick={() => setViewMode('list')} className="px-3 py-1.5 text-sm bg-gold/10 text-gold rounded-lg hover:bg-gold/20">List View</button>
            <button onClick={() => { setEditingLead(null); setForm({ name: '', email: '', mobile: '', companyName: '', source: '', lifeStage: '', addressLine1: '', city: '', state: '', country: '' }); setModalOpen(true); }} className="px-3 py-1.5 text-sm bg-gold text-navy rounded-lg hover:bg-gold/90 flex items-center gap-1"><Plus className="w-4 h-4" /> Add Lead</button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {Object.entries(grouped).map(([stage, stageLeads]) => (
            <div key={stage} className="min-w-[280px] bg-[#0d1b33] border border-gold/15 rounded-lg p-3">
              <h3 className="text-sm font-semibold mb-3 px-2 py-1 rounded" style={getStageColor(stage)}>{stage || 'No Stage'} ({stageLeads.length})</h3>
              <div className="space-y-2">
                {stageLeads.map((lead) => (
                  <div key={lead.id} className="bg-navy/50 border border-gold/10 rounded p-3 hover:border-gold/30">
                    <p className="text-white text-sm font-medium">{lead.name}</p>
                    {lead.company_name && <p className="text-slate-muted text-xs">{lead.company_name}</p>}
                    {lead.email && <p className="text-slate-muted text-xs">{lead.email}</p>}
                    <div className="flex gap-1 mt-2">
                      <button onClick={() => handleEdit(lead)} className="text-xs text-gold hover:underline"><Edit2 className="w-3 h-3 inline" /></button>
                      <button onClick={() => handleConvert(lead.id)} className="text-xs text-green-400 hover:underline"><RotateCcw className="w-3 h-3 inline" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditingLead(null); }} title={editingLead ? 'Edit Lead' : 'Add Lead'}>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            <input value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} placeholder="Company Name" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            <div className="grid grid-cols-2 gap-2">
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" type="email" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
              <input value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} placeholder="Mobile" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <select value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
                <option value="">Source</option>
                {sources.map((s) => <option key={s.id || s} value={s.name}>{s.name}</option>)}
              </select>
              <select value={form.lifeStage} onChange={(e) => setForm({ ...form, lifeStage: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
                <option value="">Life Stage</option>
                {lifeStages.map((s) => <option key={s.id || s} value={s.name}>{s.name}</option>)}
              </select>
            </div>
            <input value={form.addressLine1} onChange={(e) => setForm({ ...form, addressLine1: e.target.value })} placeholder="Address" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            <div className="grid grid-cols-3 gap-2">
              <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
              <input value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} placeholder="State" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
              <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="Country" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 flex items-center justify-center gap-2"><Save className="w-4 h-4" /> {editingLead ? 'Update' : 'Create'}</button>
          </form>
        </Modal>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-xl font-semibold text-white">Leads</h2>
        <div className="flex gap-2 items-center flex-wrap">
          <select value={filters.source} onChange={(e) => { setFilters({ ...filters, source: e.target.value }); setPage(0); }} className="px-2 py-1.5 text-sm bg-navy border border-gold/20 rounded text-white">
            <option value="">All Sources</option>
            {sources.map((s) => <option key={s.id || s} value={s.name}>{s.name}</option>)}
          </select>
          <select value={filters.lifeStage} onChange={(e) => { setFilters({ ...filters, lifeStage: e.target.value }); setPage(0); }} className="px-2 py-1.5 text-sm bg-navy border border-gold/20 rounded text-white">
            <option value="">All Stages</option>
            {lifeStages.map((s) => <option key={s.id || s} value={s.name}>{s.name}</option>)}
          </select>
          <button onClick={() => setViewMode('kanban')} className="px-3 py-1.5 text-sm bg-gold/10 text-gold rounded-lg hover:bg-gold/20">Kanban</button>
          <button onClick={() => { setEditingLead(null); setForm({ name: '', email: '', mobile: '', companyName: '', source: '', lifeStage: '', addressLine1: '', city: '', state: '', country: '' }); setModalOpen(true); }} className="px-3 py-1.5 text-sm bg-gold text-navy rounded-lg hover:bg-gold/90 flex items-center gap-1"><Plus className="w-4 h-4" /> Add Lead</button>
        </div>
      </div>
      {loading ? <div className="text-slate-muted">Loading...</div> : (
        <>
          <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gold/15 text-slate-muted">
                <th className="text-left p-3">Name</th><th className="text-left p-3 hidden md:table-cell">Company</th><th className="text-left p-3 hidden lg:table-cell">Email</th><th className="text-left p-3 hidden md:table-cell">Source</th><th className="text-left p-3">Stage</th><th className="text-left p-3 hidden lg:table-cell">Status</th><th className="text-right p-3">Actions</th>
              </tr></thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-gold/10 hover:bg-navy/30">
                    <td className="p-3 text-white">{lead.name}</td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{lead.company_name || '-'}</td>
                    <td className="p-3 text-slate-muted hidden lg:table-cell">{lead.email || '-'}</td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{lead.source || '-'}</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-xs" style={getStageColor(lead.life_stage)}>{lead.life_stage || '-'}</span></td>
                    <td className="p-3 hidden lg:table-cell"><StatusBadge status={lead.status} /></td>
                    <td className="p-3 text-right">
                      <div className="flex justify-end gap-1">
                        <button onClick={() => handleEdit(lead)} className="p-1 text-gold hover:bg-gold/10 rounded"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleConvert(lead.id)} className="p-1 text-green-400 hover:bg-green-500/10 rounded" title="Convert to customer"><RotateCcw className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(lead.id)} className="p-1 text-red-400 hover:bg-red-500/10 rounded"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
        </>
      )}
      <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditingLead(null); }} title={editingLead ? 'Edit Lead' : 'Add Lead'}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <input value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} placeholder="Company Name" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <div className="grid grid-cols-2 gap-2">
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" type="email" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            <input value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} placeholder="Mobile" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <select value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
              <option value="">Source</option>
              {sources.map((s) => <option key={s.id || s} value={s.name}>{s.name}</option>)}
            </select>
            <select value={form.lifeStage} onChange={(e) => setForm({ ...form, lifeStage: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
              <option value="">Life Stage</option>
              {lifeStages.map((s) => <option key={s.id || s} value={s.name}>{s.name}</option>)}
            </select>
          </div>
          <input value={form.addressLine1} onChange={(e) => setForm({ ...form, addressLine1: e.target.value })} placeholder="Address" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <div className="grid grid-cols-3 gap-2">
            <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            <input value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} placeholder="State" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="Country" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 flex items-center justify-center gap-2"><Save className="w-4 h-4" /> {editingLead ? 'Update' : 'Create'}</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// FOLLOW-UPS TAB
// ============================================
function FollowUpsTab() {
  const [schedules, setSchedules] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [filters, setFilters] = useState({ status: '', scheduleType: '' });
  const [form, setForm] = useState({ leadId: '', scheduleType: '', startDatetime: '', endDatetime: '', status: '', description: '', followupType: '' });

  const limit = 20;

  const loadSchedules = () => {
    setLoading(true);
    const params = new URLSearchParams({ limit, offset: page * limit, ...filters });
    api.get(`/schedules?${params}`).then((d) => { setSchedules(d.schedules); setTotal(d.total); }).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { loadSchedules(); }, [page, filters]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSchedule) {
        await api.put(`/schedules/${editingSchedule.id}`, form);
      } else {
        await api.post('/schedules', form);
      }
      setModalOpen(false);
      setEditingSchedule(null);
      setForm({ leadId: '', scheduleType: '', startDatetime: '', endDatetime: '', status: '', description: '', followupType: '' });
      loadSchedules();
    } catch (err) { console.error(err); }
  };

  const handleEdit = (s) => {
    setEditingSchedule(s);
    setForm({ leadId: s.lead_id || '', scheduleType: s.schedule_type || '', startDatetime: s.start_datetime?.slice(0, 16) || '', endDatetime: s.end_datetime?.slice(0, 16) || '', status: s.status || '', description: s.description || '', followupType: s.followup_type || '' });
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this follow-up?')) return;
    await api.del(`/schedules/${id}`);
    loadSchedules();
  };

  const typeIcons = { call: Phone, email: Mail, sms: Smartphone, meeting: Users };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-xl font-semibold text-white">Follow-ups</h2>
        <div className="flex gap-2 items-center flex-wrap">
          <select value={filters.status} onChange={(e) => { setFilters({ ...filters, status: e.target.value }); setPage(0); }} className="px-2 py-1.5 text-sm bg-navy border border-gold/20 rounded text-white">
            <option value="">All Statuses</option>
            <option value="scheduled">Scheduled</option><option value="open">Open</option><option value="completed">Completed</option><option value="cancelled">Cancelled</option>
          </select>
          <select value={filters.scheduleType} onChange={(e) => { setFilters({ ...filters, scheduleType: e.target.value }); setPage(0); }} className="px-2 py-1.5 text-sm bg-navy border border-gold/20 rounded text-white">
            <option value="">All Types</option>
            <option value="call">Call</option><option value="email">Email</option><option value="sms">SMS</option><option value="meeting">Meeting</option>
          </select>
          <button onClick={() => { setEditingSchedule(null); setForm({ leadId: '', scheduleType: '', startDatetime: '', endDatetime: '', status: '', description: '', followupType: '' }); setModalOpen(true); }} className="px-3 py-1.5 text-sm bg-gold text-navy rounded-lg hover:bg-gold/90 flex items-center gap-1"><Plus className="w-4 h-4" /> Add Follow-up</button>
        </div>
      </div>
      {loading ? <div className="text-slate-muted">Loading...</div> : (
        <>
          <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gold/15 text-slate-muted">
                <th className="text-left p-3">Contact</th><th className="text-left p-3 hidden md:table-cell">Type</th><th className="text-left p-3">Start</th><th className="text-left p-3 hidden md:table-cell">Status</th><th className="text-left p-3 hidden lg:table-cell">Description</th><th className="text-right p-3">Actions</th>
              </tr></thead>
              <tbody>
                {schedules.map((s) => {
                  const TypeIcon = typeIcons[s.schedule_type] || Calendar;
                  return (
                    <tr key={s.id} className="border-b border-gold/10 hover:bg-navy/30">
                      <td className="p-3 text-white">{s.contact_name || '-'}</td>
                      <td className="p-3 hidden md:table-cell"><span className="flex items-center gap-1 text-slate-muted"><TypeIcon className="w-3 h-3" />{s.schedule_type || '-'}</span></td>
                      <td className="p-3 text-slate-muted">{s.start_datetime ? new Date(s.start_datetime).toLocaleString() : '-'}</td>
                      <td className="p-3 hidden md:table-cell"><StatusBadge status={s.status} /></td>
                      <td className="p-3 text-slate-muted hidden lg:table-cell truncate max-w-[200px]">{s.description || '-'}</td>
                      <td className="p-3 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => handleEdit(s)} className="p-1 text-gold hover:bg-gold/10 rounded"><Edit2 className="w-4 h-4" /></button>
                          <button onClick={() => handleDelete(s.id)} className="p-1 text-red-400 hover:bg-red-500/10 rounded"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
        </>
      )}
      <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditingSchedule(null); }} title={editingSchedule ? 'Edit Follow-up' : 'Add Follow-up'}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <select value={form.scheduleType} onChange={(e) => setForm({ ...form, scheduleType: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
            <option value="">Type</option><option value="call">Call</option><option value="email">Email</option><option value="sms">SMS</option><option value="meeting">Meeting</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input required value={form.startDatetime} onChange={(e) => setForm({ ...form, startDatetime: e.target.value })} placeholder="Start" type="datetime-local" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
            <input value={form.endDatetime} onChange={(e) => setForm({ ...form, endDatetime: e.target.value })} placeholder="End" type="datetime-local" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          </div>
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
            <option value="">Status</option><option value="scheduled">Scheduled</option><option value="open">Open</option><option value="completed">Completed</option><option value="cancelled">Cancelled</option>
          </select>
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <button type="submit" className="w-full px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 flex items-center justify-center gap-2"><Save className="w-4 h-4" /> {editingSchedule ? 'Update' : 'Create'}</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// CAMPAIGNS TAB
// ============================================
function CampaignsTab() {
  const [campaigns, setCampaigns] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [form, setForm] = useState({ name: '', campaignType: 'email', subject: '', emailBody: '', smsBody: '', contactIds: [] });

  const limit = 20;

  const loadCampaigns = () => {
    setLoading(true);
    api.get(`/campaigns?limit=${limit}&offset=${page * limit}`).then((d) => { setCampaigns(d.campaigns); setTotal(d.total); }).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { loadCampaigns(); }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCampaign) {
        await api.put(`/campaigns/${editingCampaign.id}`, form);
      } else {
        await api.post('/campaigns', form);
      }
      setModalOpen(false);
      setEditingCampaign(null);
      setForm({ name: '', campaignType: 'email', subject: '', emailBody: '', smsBody: '', contactIds: [] });
      loadCampaigns();
    } catch (err) { console.error(err); }
  };

  const handleSend = async (id) => {
    if (!confirm('Send this campaign now?')) return;
    await api.post(`/campaigns/${id}/send`);
    loadCampaigns();
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this campaign?')) return;
    await api.del(`/campaigns/${id}`);
    loadCampaigns();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Campaigns</h2>
        <button onClick={() => { setEditingCampaign(null); setForm({ name: '', campaignType: 'email', subject: '', emailBody: '', smsBody: '', contactIds: [] }); setModalOpen(true); }} className="px-3 py-1.5 text-sm bg-gold text-navy rounded-lg hover:bg-gold/90 flex items-center gap-1"><Plus className="w-4 h-4" /> Add Campaign</button>
      </div>
      {loading ? <div className="text-slate-muted">Loading...</div> : (
        <>
          <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gold/15 text-slate-muted">
                <th className="text-left p-3">Name</th><th className="text-left p-3 hidden md:table-cell">Type</th><th className="text-left p-3 hidden lg:table-cell">Subject</th><th className="text-left p-3">Status</th><th className="text-left p-3 hidden md:table-cell">Sent</th><th className="text-right p-3">Actions</th>
              </tr></thead>
              <tbody>
                {campaigns.map((c) => (
                  <tr key={c.id} className="border-b border-gold/10 hover:bg-navy/30">
                    <td className="p-3 text-white">{c.name}</td>
                    <td className="p-3 hidden md:table-cell"><span className="px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-300">{c.campaign_type}</span></td>
                    <td className="p-3 text-slate-muted hidden lg:table-cell truncate max-w-[200px]">{c.subject || '-'}</td>
                    <td className="p-3"><StatusBadge status={c.sent_on ? 'sent' : 'draft'} /></td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{c.sent_on ? new Date(c.sent_on).toLocaleDateString() : '-'}</td>
                    <td className="p-3 text-right">
                      <div className="flex justify-end gap-1">
                        {!c.sent_on && <button onClick={() => handleSend(c.id)} className="p-1 text-green-400 hover:bg-green-500/10 rounded" title="Send"><Send className="w-4 h-4" /></button>}
                        {!c.sent_on && <button onClick={() => { setEditingCampaign(c); setForm({ name: c.name, campaignType: c.campaign_type, subject: c.subject || '', emailBody: c.email_body || '', smsBody: c.sms_body || '', contactIds: c.contact_ids || [] }); setModalOpen(true); }} className="p-1 text-gold hover:bg-gold/10 rounded"><Edit2 className="w-4 h-4" /></button>}
                        <button onClick={() => handleDelete(c.id)} className="p-1 text-red-400 hover:bg-red-500/10 rounded"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
        </>
      )}
      <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditingCampaign(null); }} title={editingCampaign ? 'Edit Campaign' : 'Add Campaign'}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Campaign Name" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <select value={form.campaignType} onChange={(e) => setForm({ ...form, campaignType: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
            <option value="email">Email</option><option value="sms">SMS</option>
          </select>
          <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          {form.campaignType === 'email' && <textarea value={form.emailBody} onChange={(e) => setForm({ ...form, emailBody: e.target.value })} placeholder="Email Body (use {contact_name}, {campaign_name}, {business_name})" rows={4} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />}
          {form.campaignType === 'sms' && <textarea value={form.smsBody} onChange={(e) => setForm({ ...form, smsBody: e.target.value })} placeholder="SMS Body" rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />}
          <button type="submit" className="w-full px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 flex items-center justify-center gap-2"><Save className="w-4 h-4" /> {editingCampaign ? 'Update' : 'Create'}</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// PROPOSALS TAB
// ============================================
function ProposalsTab() {
  const [proposals, setProposals] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProposal, setEditingProposal] = useState(null);
  const [form, setForm] = useState({ name: '', leadId: '', description: '', proposalContent: '', expiresOn: '' });

  const limit = 20;

  const loadProposals = () => {
    setLoading(true);
    api.get(`/proposals?limit=${limit}&offset=${page * limit}`).then((d) => { setProposals(d.proposals); setTotal(d.total); }).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { loadProposals(); }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProposal) {
        await api.put(`/proposals/${editingProposal.id}`, form);
      } else {
        await api.post('/proposals', form);
      }
      setModalOpen(false);
      setEditingProposal(null);
      setForm({ name: '', leadId: '', description: '', proposalContent: '', expiresOn: '' });
      loadProposals();
    } catch (err) { console.error(err); }
  };

  const handleSend = async (id) => {
    if (!confirm('Send this proposal?')) return;
    await api.post(`/proposals/${id}/send`);
    loadProposals();
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this proposal?')) return;
    await api.del(`/proposals/${id}`);
    loadProposals();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Proposals</h2>
        <button onClick={() => { setEditingProposal(null); setForm({ name: '', leadId: '', description: '', proposalContent: '', expiresOn: '' }); setModalOpen(true); }} className="px-3 py-1.5 text-sm bg-gold text-navy rounded-lg hover:bg-gold/90 flex items-center gap-1"><Plus className="w-4 h-4" /> Add Proposal</button>
      </div>
      {loading ? <div className="text-slate-muted">Loading...</div> : (
        <>
          <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gold/15 text-slate-muted">
                <th className="text-left p-3">Name</th><th className="text-left p-3 hidden md:table-cell">Lead</th><th className="text-left p-3 hidden lg:table-cell">Expires</th><th className="text-left p-3">Status</th><th className="text-left p-3 hidden md:table-cell">Sent</th><th className="text-right p-3">Actions</th>
              </tr></thead>
              <tbody>
                {proposals.map((p) => (
                  <tr key={p.id} className="border-b border-gold/10 hover:bg-navy/30">
                    <td className="p-3 text-white">{p.name}</td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{p.lead_name || '-'}</td>
                    <td className="p-3 text-slate-muted hidden lg:table-cell">{p.expires_on ? new Date(p.expires_on).toLocaleDateString() : '-'}</td>
                    <td className="p-3"><StatusBadge status={p.status} /></td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{p.sent_on ? new Date(p.sent_on).toLocaleDateString() : '-'}</td>
                    <td className="p-3 text-right">
                      <div className="flex justify-end gap-1">
                        {p.status === 'draft' && <button onClick={() => handleSend(p.id)} className="p-1 text-green-400 hover:bg-green-500/10 rounded" title="Send"><Send className="w-4 h-4" /></button>}
                        <button onClick={() => { setEditingProposal(p); setForm({ name: p.name, leadId: p.lead_id || '', description: p.description || '', proposalContent: p.proposal_content || '', expiresOn: p.expires_on || '' }); setModalOpen(true); }} className="p-1 text-gold hover:bg-gold/10 rounded"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(p.id)} className="p-1 text-red-400 hover:bg-red-500/10 rounded"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
        </>
      )}
      <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditingProposal(null); }} title={editingProposal ? 'Edit Proposal' : 'Add Proposal'}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Proposal Name" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <input value={form.expiresOn} onChange={(e) => setForm({ ...form, expiresOn: e.target.value })} placeholder="Expires On" type="date" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" rows={2} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <textarea value={form.proposalContent} onChange={(e) => setForm({ ...form, proposalContent: e.target.value })} placeholder="Proposal Content" rows={5} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <button type="submit" className="w-full px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 flex items-center justify-center gap-2"><Save className="w-4 h-4" /> {editingProposal ? 'Update' : 'Create'}</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// CALL LOGS TAB
// ============================================
function CallLogsTab() {
  const [callLogs, setCallLogs] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ leadId: '', callDatetime: new Date().toISOString().slice(0, 16), duration: '', callType: 'outbound', direction: 'outbound', notes: '', status: 'completed' });

  const limit = 20;

  const loadCallLogs = () => {
    setLoading(true);
    api.get(`/call-logs?limit=${limit}&offset=${page * limit}`).then((d) => { setCallLogs(d.callLogs); setTotal(d.total); }).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { loadCallLogs(); }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/call-logs', form);
      setModalOpen(false);
      setForm({ leadId: '', callDatetime: new Date().toISOString().slice(0, 16), duration: '', callType: 'outbound', direction: 'outbound', notes: '', status: 'completed' });
      loadCallLogs();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this call log?')) return;
    await api.del(`/call-logs/${id}`);
    loadCallLogs();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Call Logs</h2>
        <button onClick={() => setModalOpen(true)} className="px-3 py-1.5 text-sm bg-gold text-navy rounded-lg hover:bg-gold/90 flex items-center gap-1"><Plus className="w-4 h-4" /> Log Call</button>
      </div>
      {loading ? <div className="text-slate-muted">Loading...</div> : (
        <>
          <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gold/15 text-slate-muted">
                <th className="text-left p-3">Lead</th><th className="text-left p-3 hidden md:table-cell">Date/Time</th><th className="text-left p-3 hidden md:table-cell">Duration</th><th className="text-left p-3">Type</th><th className="text-left p-3 hidden lg:table-cell">Notes</th><th className="text-right p-3">Actions</th>
              </tr></thead>
              <tbody>
                {callLogs.map((cl) => (
                  <tr key={cl.id} className="border-b border-gold/10 hover:bg-navy/30">
                    <td className="p-3 text-white">{cl.lead_name || '-'}</td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{new Date(cl.call_datetime).toLocaleString()}</td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{cl.duration ? `${cl.duration}m` : '-'}</td>
                    <td className="p-3"><span className={`px-2 py-0.5 rounded text-xs ${cl.direction === 'inbound' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'}`}>{cl.direction}</span></td>
                    <td className="p-3 text-slate-muted hidden lg:table-cell truncate max-w-[200px]">{cl.notes || '-'}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => handleDelete(cl.id)} className="p-1 text-red-400 hover:bg-red-500/10 rounded"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
        </>
      )}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Log Call">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <select value={form.callType} onChange={(e) => setForm({ ...form, callType: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
              <option value="call">Call</option><option value="voicemail">Voicemail</option><option value="callback">Callback</option>
            </select>
            <select value={form.direction} onChange={(e) => setForm({ ...form, direction: e.target.value })} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white">
              <option value="outbound">Outbound</option><option value="inbound">Inbound</option>
            </select>
          </div>
          <input required value={form.callDatetime} onChange={(e) => setForm({ ...form, callDatetime: e.target.value })} type="datetime-local" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="Duration (minutes)" type="number" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Notes" rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <button type="submit" className="w-full px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 flex items-center justify-center gap-2"><Save className="w-4 h-4" /> Save</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// COMMISSIONS TAB
// ============================================
function CommissionsTab() {
  const [commissions, setCommissions] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const limit = 20;

  const loadCommissions = () => {
    setLoading(true);
    api.get(`/commissions?limit=${limit}&offset=${page * limit}`).then((d) => { setCommissions(d.commissions); setTotal(d.total); }).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { loadCommissions(); }, [page]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Commissions</h2>
      {loading ? <div className="text-slate-muted">Loading...</div> : (
        <>
          <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gold/15 text-slate-muted">
                <th className="text-left p-3">User</th><th className="text-left p-3 hidden md:table-cell">Lead</th><th className="text-right p-3">Amount</th><th className="text-left p-3 hidden md:table-cell">Percent</th><th className="text-left p-3">Status</th><th className="text-left p-3 hidden lg:table-cell">Notes</th>
              </tr></thead>
              <tbody>
                {commissions.map((c) => (
                  <tr key={c.id} className="border-b border-gold/10 hover:bg-navy/30">
                    <td className="p-3 text-white">{c.user_name || '-'}</td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{c.lead_name || '-'}</td>
                    <td className="p-3 text-right text-gold font-medium">${parseFloat(c.commission_amount).toFixed(2)}</td>
                    <td className="p-3 text-slate-muted hidden md:table-cell">{c.commission_percent ? `${c.commission_percent}%` : '-'}</td>
                    <td className="p-3"><StatusBadge status={c.status} /></td>
                    <td className="p-3 text-slate-muted hidden lg:table-cell truncate max-w-[200px]">{c.notes || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}

// ============================================
// MARKETPLACES TAB
// ============================================
function MarketplacesTab() {
  const [marketplaces, setMarketplaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', description: '', marketplaceType: '' });

  const loadMarketplaces = () => {
    setLoading(true);
    api.get('/marketplaces').then(setMarketplaces).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { loadMarketplaces(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/marketplaces', form);
      setModalOpen(false);
      setForm({ name: '', description: '', marketplaceType: '' });
      loadMarketplaces();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this marketplace?')) return;
    await api.del(`/marketplaces/${id}`);
    loadMarketplaces();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Marketplaces</h2>
        <button onClick={() => setModalOpen(true)} className="px-3 py-1.5 text-sm bg-gold text-navy rounded-lg hover:bg-gold/90 flex items-center gap-1"><Plus className="w-4 h-4" /> Add Marketplace</button>
      </div>
      {loading ? <div className="text-slate-muted">Loading...</div> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketplaces.map((m) => (
            <div key={m.id} className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-semibold">{m.name}</h3>
                  <p className="text-slate-muted text-sm mt-1">{m.description || 'No description'}</p>
                  {m.marketplace_type && <span className="mt-2 inline-block px-2 py-0.5 rounded text-xs bg-gold/20 text-gold">{m.marketplace_type}</span>}
                </div>
                <button onClick={() => handleDelete(m.id)} className="p-1 text-red-400 hover:bg-red-500/10 rounded"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add Marketplace">
        <form onSubmit={handleSubmit} className="space-y-3">
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Marketplace Name" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <input value={form.marketplaceType} onChange={(e) => setForm({ ...form, marketplaceType: e.target.value })} placeholder="Type" className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white" />
          <button type="submit" className="w-full px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 flex items-center justify-center gap-2"><Save className="w-4 h-4" /> Create</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// SETTINGS TAB (Perfex-style)
// ============================================
function SettingsTab() {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [activeGroup, setActiveGroup] = useState('leads');
  const [subTab, setSubTab] = useState('general');

  useEffect(() => {
    api.get('/settings').then((d) => setSettings(d || {})).catch(console.error).finally(() => setLoading(false));
  }, []);

  const update = (key, val) => setSettings((prev) => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg('');
    try {
      await api.put('/settings', settings);
      setSaveMsg('Settings saved successfully');
      setTimeout(() => setSaveMsg(''), 3000);
    } catch (err) { setSaveMsg('Failed to save settings'); }
    setSaving(false);
  };

  const groups = [
    { id: 'leads', label: 'Leads', icon: Users },
    { id: 'sales', label: 'Sales', icon: Receipt },
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'localization', label: 'Localization', icon: Globe },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'tasks', label: 'Tasks', icon: CircleCheck },
    { id: 'calendar', label: 'Calendar', icon: CalendarDays },
    { id: 'pdf', label: 'PDF', icon: FileBadge },
    { id: 'misc', label: 'Misc', icon: Settings },
  ];

  if (loading) return <div className="text-slate-muted">Loading...</div>;

  const renderGroup = () => {
    switch (activeGroup) {
      case 'leads':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Leads Settings</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gold/15 pb-2">General</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Default Lead Status</label>
                  <select value={settings.leads_default_status || 'new'} onChange={(e) => update('leads_default_status', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="new">New</option><option value="contacted">Contacted</option><option value="qualified">Qualified</option><option value="converted">Converted</option><option value="lost">Lost</option><option value="junk">Junk</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Default Lead Source</label>
                  <select value={settings.leads_default_source || 'website'} onChange={(e) => update('leads_default_source', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="website">Website</option><option value="referral">Referral</option><option value="social">Social Media</option><option value="cold_call">Cold Call</option><option value="email_campaign">Email Campaign</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Kanban Limit</label>
                  <input type="number" value={settings.leads_kanban_limit || '25'} onChange={(e) => update('leads_kanban_limit', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Unique Validation Fields</label>
                  <select value={settings.leads_unique_validation || 'email'} onChange={(e) => update('leads_unique_validation', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="email">Email</option><option value="phone">Phone</option><option value="company">Company</option><option value="email,phone">Email + Phone</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-gold/15">
                <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                  <input type="checkbox" checked={settings.leads_auto_assign_after_convert === '1'} onChange={(e) => update('leads_auto_assign_after_convert', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                  Auto-assign customer admin after lead convert
                </label>
                <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                  <input type="checkbox" checked={settings.leads_lock_after_convert !== '0'} onChange={(e) => update('leads_lock_after_convert', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                  Lock lead after convert to customer
                </label>
              </div>
            </div>
          </div>
        );

      case 'sales':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Sales Settings</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="flex items-center gap-2 border-b border-gold/15 pb-2">
              {['general', 'invoice', 'estimates', 'proposals'].map((t) => (
                <button key={t} onClick={() => setSubTab(t)} className={`px-3 py-1.5 rounded-lg text-sm capitalize ${subTab === t ? 'bg-gold/20 text-gold' : 'text-slate-muted hover:text-white'}`}>{t}</button>
              ))}
            </div>
            {subTab === 'general' && (
              <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gold/15 pb-2">Number Formatting</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Decimal Separator</label>
                    <select value={settings.decimal_separator || '.'} onChange={(e) => update('decimal_separator', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                      <option value=".">. (dot)</option><option value=",">, (comma)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Thousand Separator</label>
                    <select value={settings.thousand_separator || ','} onChange={(e) => update('thousand_separator', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                      <option value=",">, (comma)</option><option value=".">. (dot)</option><option value="'">' (apostrophe)</option><option value=" ">Space</option><option value="none">None</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Currency Code</label>
                    <input value={settings.currency_code || 'USD'} onChange={(e) => update('currency_code', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Currency Symbol</label>
                    <input value={settings.currency_symbol || '$'} onChange={(e) => update('currency_symbol', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-gold/15">
                  <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                    <input type="checkbox" checked={settings.show_tax_per_item === '1'} onChange={(e) => update('show_tax_per_item', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                    Show tax per item on PDF
                  </label>
                  <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                    <input type="checkbox" checked={settings.remove_tax_name_from_table === '1'} onChange={(e) => update('remove_tax_name_from_table', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                    Remove tax name from item table
                  </label>
                </div>
              </div>
            )}
            {subTab === 'invoice' && (
              <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gold/15 pb-2">Invoice Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Invoice Prefix</label>
                    <input value={settings.invoice_prefix || 'INV-'} onChange={(e) => update('invoice_prefix', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Next Invoice Number</label>
                    <input type="number" value={settings.next_invoice_number || '1000'} onChange={(e) => update('next_invoice_number', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Due After (days)</label>
                    <input type="number" value={settings.invoice_due_after || '15'} onChange={(e) => update('invoice_due_after', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Number Format</label>
                    <select value={settings.invoice_number_format || '1'} onChange={(e) => update('invoice_number_format', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                      <option value="1">1000</option><option value="2">INV-1000</option><option value="3">1000-INV</option><option value="4">INV-1000-2024</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-gold/15">
                  <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                    <input type="checkbox" checked={settings.show_project_on_invoice === '1'} onChange={(e) => update('show_project_on_invoice', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                    Show project on invoice PDF
                  </label>
                  <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                    <input type="checkbox" checked={settings.show_total_paid_on_invoice !== '0'} onChange={(e) => update('show_total_paid_on_invoice', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                    Show total paid on invoice
                  </label>
                  <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                    <input type="checkbox" checked={settings.show_amount_due_on_invoice !== '0'} onChange={(e) => update('show_amount_due_on_invoice', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                    Show amount due on invoice
                  </label>
                  <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                    <input type="checkbox" checked={settings.attach_invoice_to_receipt !== '0'} onChange={(e) => update('attach_invoice_to_receipt', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                    Attach invoice to payment receipt email
                  </label>
                </div>
                <div className="pt-4 border-t border-gold/15">
                  <label className="text-slate-muted text-sm block mb-1">Predefined Client Note</label>
                  <textarea value={settings.predefined_clientnote_invoice || ''} onChange={(e) => update('predefined_clientnote_invoice', e.target.value)} rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Predefined Terms & Conditions</label>
                  <textarea value={settings.predefined_terms_invoice || ''} onChange={(e) => update('predefined_terms_invoice', e.target.value)} rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
              </div>
            )}
            {subTab === 'estimates' && (
              <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gold/15 pb-2">Estimate Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Estimate Prefix</label>
                    <input value={settings.estimate_prefix || 'EST-'} onChange={(e) => update('estimate_prefix', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Next Estimate Number</label>
                    <input type="number" value={settings.next_estimate_number || '1000'} onChange={(e) => update('next_estimate_number', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Due After (days)</label>
                    <input type="number" value={settings.estimate_due_after || '30'} onChange={(e) => update('estimate_due_after', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Pipeline Limit</label>
                    <input type="number" value={settings.estimates_pipeline_limit || '25'} onChange={(e) => update('estimates_pipeline_limit', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-gold/15">
                  <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                    <input type="checkbox" checked={settings.estimate_auto_convert === '1'} onChange={(e) => update('estimate_auto_convert', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                    Auto-convert to invoice on client accept
                  </label>
                </div>
                <div className="pt-4 border-t border-gold/15">
                  <label className="text-slate-muted text-sm block mb-1">Predefined Client Note</label>
                  <textarea value={settings.predefined_clientnote_estimate || ''} onChange={(e) => update('predefined_clientnote_estimate', e.target.value)} rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Predefined Terms & Conditions</label>
                  <textarea value={settings.predefined_terms_estimate || ''} onChange={(e) => update('predefined_terms_estimate', e.target.value)} rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
              </div>
            )}
            {subTab === 'proposals' && (
              <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gold/15 pb-2">Proposal Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Proposal Prefix</label>
                    <input value={settings.proposal_prefix || 'PROP-'} onChange={(e) => update('proposal_prefix', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Next Proposal Number</label>
                    <input type="number" value={settings.next_proposal_number || '1000'} onChange={(e) => update('next_proposal_number', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Due After (days)</label>
                    <input type="number" value={settings.proposal_due_after || '30'} onChange={(e) => update('proposal_due_after', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                  <div>
                    <label className="text-slate-muted text-sm block mb-1">Pipeline Limit</label>
                    <input type="number" value={settings.proposals_pipeline_limit || '25'} onChange={(e) => update('proposals_pipeline_limit', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'company':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Company Information</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Company Name</label>
                  <input value={settings.company_name || ''} onChange={(e) => update('company_name', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Phone</label>
                  <input value={settings.company_phone || ''} onChange={(e) => update('company_phone', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Address</label>
                  <input value={settings.company_address || ''} onChange={(e) => update('company_address', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">City</label>
                  <input value={settings.company_city || ''} onChange={(e) => update('company_city', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">State</label>
                  <input value={settings.company_state || ''} onChange={(e) => update('company_state', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">ZIP / Postal Code</label>
                  <input value={settings.company_zip || ''} onChange={(e) => update('company_zip', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Country</label>
                  <input value={settings.company_country || ''} onChange={(e) => update('company_country', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">VAT Number</label>
                  <input value={settings.company_vat || ''} onChange={(e) => update('company_vat', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'localization':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Localization</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Date Format</label>
                  <select value={settings.date_format || 'Y-m-d'} onChange={(e) => update('date_format', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="Y-m-d">Y-m-d (2024-01-31)</option><option value="d/m/Y">d/m/Y (31/01/2024)</option><option value="m/d/Y">m/d/Y (01/31/2024)</option><option value="d-m-Y">d-m-Y (31-01-2024)</option><option value="M d, Y">M d, Y (Jan 31, 2024)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Time Format</label>
                  <select value={settings.time_format || '24'} onChange={(e) => update('time_format', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="24">24 Hour</option><option value="12">12 Hour (AM/PM)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Default Timezone</label>
                  <select value={settings.default_timezone || 'UTC'} onChange={(e) => update('default_timezone', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="UTC">UTC</option><option value="America/New_York">Eastern (US)</option><option value="America/Chicago">Central (US)</option><option value="America/Denver">Mountain (US)</option><option value="America/Los_Angeles">Pacific (US)</option><option value="Europe/London">London</option><option value="Europe/Paris">Paris</option><option value="Asia/Dubai">Dubai</option><option value="Asia/Kolkata">Kolkata</option><option value="Asia/Shanghai">Shanghai</option><option value="Asia/Tokyo">Tokyo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Email Settings</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
              <div>
                <label className="text-slate-muted text-sm block mb-1">Email Signature (HTML)</label>
                <textarea value={settings.email_signature || ''} onChange={(e) => update('email_signature', e.target.value)} rows={4} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm font-mono" />
              </div>
              <div>
                <label className="text-slate-muted text-sm block mb-1">Email Header (HTML)</label>
                <textarea value={settings.email_header || ''} onChange={(e) => update('email_header', e.target.value)} rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm font-mono" />
              </div>
              <div>
                <label className="text-slate-muted text-sm block mb-1">Email Footer (HTML)</label>
                <textarea value={settings.email_footer || ''} onChange={(e) => update('email_footer', e.target.value)} rows={3} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm font-mono" />
              </div>
            </div>
          </div>
        );

      case 'tasks':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Tasks Settings</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Kanban Limit</label>
                  <input type="number" value={settings.tasks_kanban_limit || '25'} onChange={(e) => update('tasks_kanban_limit', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Default Status</label>
                  <select value={settings.tasks_default_status || 'not_started'} onChange={(e) => update('tasks_default_status', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="not_started">Not Started</option><option value="in_progress">In Progress</option><option value="testing">Testing</option><option value="awaiting_feedback">Awaiting Feedback</option><option value="finished">Finished</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Default Priority</label>
                  <select value={settings.tasks_default_priority || 'medium'} onChange={(e) => update('tasks_default_priority', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option><option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Calendar Settings</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Events Limit</label>
                  <input type="number" value={settings.calendar_events_limit || '25'} onChange={(e) => update('calendar_events_limit', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">First Day of Week</label>
                  <select value={settings.calendar_first_day || '0'} onChange={(e) => update('calendar_first_day', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="0">Sunday</option><option value="1">Monday</option><option value="6">Saturday</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pdf':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">PDF Settings</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-muted text-sm block mb-1">PDF Font</label>
                  <select value={settings.pdf_font || 'helvetica'} onChange={(e) => update('pdf_font', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm">
                    <option value="helvetica">Helvetica</option><option value="freesans">FreeSans</option><option value="dejavusans">DejaVu Sans</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Font Size</label>
                  <input type="number" value={settings.pdf_font_size || '9'} onChange={(e) => update('pdf_font_size', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-gold/15">
                <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                  <input type="checkbox" checked={settings.show_page_number_on_pdf === '1'} onChange={(e) => update('show_page_number_on_pdf', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                  Show page number on PDF
                </label>
                <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                  <input type="checkbox" checked={settings.show_status_on_pdf_ei === '1'} onChange={(e) => update('show_status_on_pdf_ei', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                  Show status on PDF
                </label>
                <label className="flex items-center gap-3 text-sm text-slate-muted cursor-pointer">
                  <input type="checkbox" checked={settings.show_pay_link_to_invoice_pdf === '1'} onChange={(e) => update('show_pay_link_to_invoice_pdf', e.target.checked ? '1' : '0')} className="rounded bg-navy border-gold/20" />
                  Show pay link on invoice PDF
                </label>
              </div>
            </div>
          </div>
        );

      case 'misc':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Miscellaneous</h2>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 flex items-center gap-2"><Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}</button>
            </div>
            {saveMsg && <div className={`px-4 py-2 rounded-lg text-sm ${saveMsg.includes('Failed') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{saveMsg}</div>}
            <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-muted text-sm block mb-1">Tables Pagination Limit</label>
                  <input type="number" value={settings.tables_pagination_limit || '25'} onChange={(e) => update('tables_pagination_limit', e.target.value)} className="w-full px-3 py-2 bg-navy border border-gold/20 rounded text-white text-sm" />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex gap-6 min-h-[calc(100vh-12rem)]">
      {/* Sidebar */}
      <div className="w-56 flex-shrink-0">
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-gold/15">
            <h3 className="text-white font-semibold text-sm">Settings</h3>
          </div>
          <nav className="p-2 space-y-0.5">
            {groups.map((g) => {
              const Icon = g.icon;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveGroup(g.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeGroup === g.id
                      ? 'bg-gold/10 text-gold'
                      : 'text-slate-muted hover:text-white hover:bg-navy/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {g.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {renderGroup()}
      </div>
    </div>
  );
}

// ============================================
// MAIN CRM PAGE
// ============================================
export default function CRMPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderTab = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardTab />;
      case 'leads': return <LeadsTab />;
      case 'followups': return <FollowUpsTab />;
      case 'campaigns': return <CampaignsTab />;
      case 'proposals': return <ProposalsTab />;
      case 'call-logs': return <CallLogsTab />;
      case 'commissions': return <CommissionsTab />;
      case 'marketplaces': return <MarketplacesTab />;
      case 'settings': return <SettingsTab />;
      default: return <DashboardTab />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gold/15">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap rounded-t-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-gold/10 text-gold border-b-2 border-gold'
                  : 'text-slate-muted hover:text-white hover:bg-navy-muted'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
      {renderTab()}
    </div>
  );
}
