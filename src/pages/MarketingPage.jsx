import { useState, useEffect } from 'react';
import {
  LayoutDashboard, Layers, GitBranch, Users, FormInput, Package,
  ArrowUpCircle, ArrowDownCircle, Mail, MessageSquare, Megaphone,
  FileText, BarChart3, Plus, Edit2, Trash2, Search, X, Save,
  Send, Play, Eye, ChevronLeft, ChevronRight, Filter,
  Tag, Smartphone, Download, TrendingUp, Activity,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('pillars_token');
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
};

const api = {
  get: async (path) => {
    const res = await fetch(`${API_BASE}/ma${path}`, { headers: getAuthHeaders() });
    if (!res.ok) {
      const text = await res.text();
      console.error(`MA API GET ${path} failed: ${res.status}`, text);
      throw new Error(`API error: ${res.status} - ${text}`);
    }
    return res.json();
  },
  post: async (path, body) => {
    const res = await fetch(`${API_BASE}/ma${path}`, {
      method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`MA API POST ${path} failed: ${res.status}`, text);
      throw new Error(`API error: ${res.status} - ${text}`);
    }
    return res.json();
  },
  put: async (path, body) => {
    const res = await fetch(`${API_BASE}/ma${path}`, {
      method: 'PUT', headers: getAuthHeaders(), body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`MA API PUT ${path} failed: ${res.status}`, text);
      throw new Error(`API error: ${res.status} - ${text}`);
    }
    return res.json();
  },
  del: async (path) => {
    const res = await fetch(`${API_BASE}/ma${path}`, {
      method: 'DELETE', headers: getAuthHeaders(),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`MA API DELETE ${path} failed: ${res.status}`, text);
      throw new Error(`API error: ${res.status} - ${text}`);
    }
    return res.json();
  },
};

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'categories', label: 'Categories', icon: Layers },
  { id: 'stages', label: 'Stages', icon: GitBranch },
  { id: 'segments', label: 'Segments', icon: Users },
  { id: 'forms', label: 'Forms', icon: FormInput },
  { id: 'assets', label: 'Assets', icon: Package },
  { id: 'points', label: 'Points', icon: TrendingUp },
  { id: 'emails', label: 'Emails', icon: Mail },
  { id: 'sms', label: 'SMS', icon: Smartphone },
  { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
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

function StatusBadge({ status }) {
  const colors = {
    1: 'bg-green-500/20 text-green-300',
    0: 'bg-slate-500/20 text-slate-300',
  };
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[status] || 'bg-slate-500/20 text-slate-300'}`}>{status === 1 ? 'Published' : 'Draft'}</span>;
}

// ============================================
// DASHBOARD TAB
// ============================================
function DashboardTab() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/dashboard').then(setData).catch((err) => { setError(err.message); console.error(err); }).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-slate-muted">Loading...</div>;
  if (error) return <div className="text-red-400">Failed to load dashboard: {error}</div>;
  if (!data) return <div className="text-red-400">Failed to load dashboard</div>;

  const stats = [
    { label: 'Campaigns', value: data.campaigns || 0, icon: Megaphone, color: 'text-purple-400' },
    { label: 'Segments', value: data.segments || 0, icon: Users, color: 'text-blue-400' },
    { label: 'Forms', value: data.forms || 0, icon: FormInput, color: 'text-green-400' },
    { label: 'Emails Sent', value: data.emails?.total_sent || 0, icon: Mail, color: 'text-yellow-400' },
    { label: 'Emails Opened', value: data.emails?.total_opened || 0, icon: Eye, color: 'text-cyan-400' },
    { label: 'Emails Clicked', value: data.emails?.total_clicked || 0, icon: Activity, color: 'text-pink-400' },
    { label: 'SMS Sent', value: data.sms?.total_sent || 0, icon: Smartphone, color: 'text-orange-400' },
    { label: 'Asset Downloads', value: data.assets?.total_downloads || 0, icon: Download, color: 'text-indigo-400' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Marketing Automation Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-muted text-sm">{s.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{s.value}</p>
              </div>
              <s.icon className={`w-8 h-8 ${s.color}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// GENERIC CRUD TABLE
// ============================================
function CrudTable({ title, items, columns, onAdd, onEdit, onDelete, actions }) {
  const [search, setSearch] = useState('');
  const filtered = items.filter((item) =>
    columns.some((col) => String(item[col.key] || '').toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-muted" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 bg-[#0d1b33] border border-gold/15 rounded-lg text-sm text-white placeholder-slate-muted focus:outline-none focus:border-gold/30"
            />
          </div>
          {onAdd && (
            <button onClick={onAdd} className="flex items-center gap-1 px-3 py-1.5 bg-gold/20 text-gold rounded-lg text-sm hover:bg-gold/30">
              <Plus className="w-4 h-4" /> Add
            </button>
          )}
        </div>
      </div>
      <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-navy/50 text-slate-muted">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="text-left px-4 py-3 font-medium">{col.label}</th>
              ))}
              {actions && <th className="text-right px-4 py-3 font-medium">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gold/10">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-navy/30">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-slate-300">
                    {col.render ? col.render(item) : (item[col.key] ?? '-')}
                  </td>
                ))}
                {actions && (
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {actions(item)}
                    </div>
                  </td>
                )}
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={columns.length + (actions ? 1 : 0)} className="px-4 py-8 text-center text-slate-muted">No items found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================
// CATEGORIES TAB
// ============================================
function CategoriesTab() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState({ open: false, item: null });
  const [form, setForm] = useState({ name: '', type: '', color: '', published: 1, description: '' });

  useEffect(() => { api.get('/categories').then(setItems).catch(console.error); }, []);

  const handleSubmit = async () => {
    try {
      if (modal.item) {
        await api.put(`/categories/${modal.item.id}`, form);
      } else {
        await api.post('/categories', form);
      }
      setModal({ open: false, item: null });
      setForm({ name: '', type: '', color: '', published: 1, description: '' });
      api.get('/categories').then(setItems);
    } catch (err) { console.error(err); }
  };

  const openEdit = (item) => {
    setForm({ name: item.name, type: item.type || '', color: item.color || '', published: item.published, description: item.description || '' });
    setModal({ open: true, item });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this category?')) return;
    await api.del(`/categories/${id}`);
    api.get('/categories').then(setItems);
  };

  return (
    <>
      <CrudTable
        title="Categories"
        items={items}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'type', label: 'Type' },
          { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
          { key: 'description', label: 'Description' },
        ]}
        onAdd={() => { setForm({ name: '', type: '', color: '', published: 1, description: '' }); setModal({ open: true, item: null }); }}
        onEdit={openEdit}
        onDelete={handleDelete}
        actions={(item) => (
          <>
            <button onClick={() => openEdit(item)} className="p-1 text-slate-muted hover:text-gold"><Edit2 className="w-4 h-4" /></button>
            <button onClick={() => handleDelete(item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          </>
        )}
      />
      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, item: null })} title={modal.item ? 'Edit Category' : 'New Category'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Type</label>
            <input type="text" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Color</label>
            <input type="color" value={form.color || '#c89b3c'} onChange={(e) => setForm({ ...form, color: e.target.value })} className="w-full h-10 bg-navy/50 border border-gold/15 rounded-lg cursor-pointer" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.published === 1} onChange={(e) => setForm({ ...form, published: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" />
            <span className="text-sm text-slate-muted">Published</span>
          </div>
          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </>
  );
}

// ============================================
// STAGES TAB
// ============================================
function StagesTab() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState({ open: false, item: null });
  const [form, setForm] = useState({ name: '', weight: '0', color: '', category: 0, published: 1, description: '' });
  const [saveError, setSaveError] = useState(null);

  useEffect(() => { api.get('/stages').then(setItems).catch(console.error); }, []);

  const handleSubmit = async () => {
    setSaveError(null);
    try {
      if (modal.item) {
        await api.put(`/stages/${modal.item.id}`, form);
      } else {
        await api.post('/stages', form);
      }
      setModal({ open: false, item: null });
      setForm({ name: '', weight: '0', color: '', category: 0, published: 1, description: '' });
      api.get('/stages').then(setItems);
    } catch (err) { setSaveError(err.message); console.error(err); }
  };

  const openEdit = (item) => {
    setForm({ name: item.name, weight: item.weight || '0', color: item.color || '', category: item.category || 0, published: item.published, description: item.description || '' });
    setModal({ open: true, item });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this stage?')) return;
    await api.del(`/stages/${id}`);
    api.get('/stages').then(setItems);
  };

  return (
    <>
      <CrudTable
        title="Pipeline Stages"
        items={items}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'weight', label: 'Weight' },
          { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
          { key: 'description', label: 'Description' },
        ]}
        onAdd={() => { setForm({ name: '', weight: '0', color: '', category: 0, published: 1, description: '' }); setModal({ open: true, item: null }); }}
        onEdit={openEdit}
        onDelete={handleDelete}
        actions={(item) => (
          <>
            <button onClick={() => openEdit(item)} className="p-1 text-slate-muted hover:text-gold"><Edit2 className="w-4 h-4" /></button>
            <button onClick={() => handleDelete(item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          </>
        )}
      />
      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, item: null })} title={modal.item ? 'Edit Stage' : 'New Stage'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Weight (order)</label>
            <input type="number" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Color</label>
            <input type="color" value={form.color || '#c89b3c'} onChange={(e) => setForm({ ...form, color: e.target.value })} className="w-full h-10 bg-navy/50 border border-gold/15 rounded-lg cursor-pointer" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.published === 1} onChange={(e) => setForm({ ...form, published: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" />
            <span className="text-sm text-slate-muted">Published</span>
          </div>
          {saveError && <div className="text-red-400 text-sm">{saveError}</div>}
          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </>
  );
}

// ============================================
// SEGMENTS TAB
// ============================================
function SegmentsTab() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState({ open: false, item: null });
  const [form, setForm] = useState({ name: '', color: '', category: 0, public_segment: 1, published: 1, description: '', filters: [] });
  const [filterForm, setFilterForm] = useState({ type: 'equals', sub_type_1: '', sub_type_2: '', value: '' });

  useEffect(() => { api.get('/segments').then(setItems).catch(console.error); }, []);

  const addFilter = () => {
    setForm({ ...form, filters: [...form.filters, { ...filterForm }] });
    setFilterForm({ type: 'equals', sub_type_1: '', sub_type_2: '', value: '' });
  };

  const removeFilter = (idx) => {
    setForm({ ...form, filters: form.filters.filter((_, i) => i !== idx) });
  };

  const handleSubmit = async () => {
    try {
      if (modal.item) {
        await api.put(`/segments/${modal.item.id}`, { ...form, filters: form.filters });
      } else {
        await api.post('/segments', { ...form, filters: form.filters });
      }
      setModal({ open: false, item: null });
      setForm({ name: '', color: '', category: 0, public_segment: 1, published: 1, description: '', filters: [] });
      api.get('/segments').then(setItems);
    } catch (err) { console.error(err); }
  };

  const openEdit = (item) => {
    setForm({ name: item.name, color: item.color || '', category: item.category || 0, public_segment: item.public_segment || 1, published: item.published, description: item.description || '', filters: item.filters || [] });
    setModal({ open: true, item });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this segment?')) return;
    await api.del(`/segments/${id}`);
    api.get('/segments').then(setItems);
  };

  return (
    <>
      <CrudTable
        title="Segments"
        items={items}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'lead_count', label: 'Leads' },
          { key: 'public_segment', label: 'Visibility', render: (item) => item.public_segment ? 'Public' : 'Private' },
          { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
        ]}
        onAdd={() => { setForm({ name: '', color: '', category: 0, public_segment: 1, published: 1, description: '', filters: [] }); setModal({ open: true, item: null }); }}
        onEdit={openEdit}
        onDelete={handleDelete}
        actions={(item) => (
          <>
            <button onClick={() => openEdit(item)} className="p-1 text-slate-muted hover:text-gold"><Edit2 className="w-4 h-4" /></button>
            <button onClick={() => handleDelete(item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          </>
        )}
      />
      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, item: null })} title={modal.item ? 'Edit Segment' : 'New Segment'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-slate-muted">
              <input type="checkbox" checked={form.public_segment === 1} onChange={(e) => setForm({ ...form, public_segment: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" /> Public
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-muted">
              <input type="checkbox" checked={form.published === 1} onChange={(e) => setForm({ ...form, published: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" /> Published
            </label>
          </div>

          <div className="border-t border-gold/15 pt-3">
            <h4 className="text-sm font-semibold text-white mb-2">Filters</h4>
            {form.filters.map((f, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-2 text-sm">
                <span className="text-slate-muted">{f.type}</span>
                <span className="text-white">{f.sub_type_1}</span>
                <span className="text-gold">{f.value}</span>
                <button onClick={() => removeFilter(idx)} className="text-red-400"><X className="w-3 h-3" /></button>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <select value={filterForm.type} onChange={(e) => setFilterForm({ ...filterForm, type: e.target.value })} className="px-2 py-1 bg-navy/50 border border-gold/15 rounded text-sm text-white">
                <option value="equals">equals</option>
                <option value="not_equal">not equal</option>
                <option value="greater_than">greater than</option>
                <option value="less_than">less than</option>
                <option value="like">like</option>
                <option value="not_like">not like</option>
                <option value="is_empty">is empty</option>
                <option value="is_not_empty">is not empty</option>
              </select>
              <input type="text" placeholder="Field (e.g. source)" value={filterForm.sub_type_1} onChange={(e) => setFilterForm({ ...filterForm, sub_type_1: e.target.value })} className="px-2 py-1 bg-navy/50 border border-gold/15 rounded text-sm text-white w-32" />
              <input type="text" placeholder="Value" value={filterForm.value} onChange={(e) => setFilterForm({ ...filterForm, value: e.target.value })} className="px-2 py-1 bg-navy/50 border border-gold/15 rounded text-sm text-white w-32" />
              <button onClick={addFilter} className="px-2 py-1 bg-gold/20 text-gold rounded text-sm"><Plus className="w-3 h-3" /></button>
            </div>
          </div>

          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </>
  );
}

// ============================================
// FORMS TAB
// ============================================
function FormsTab() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState({ open: false, item: null });
  const [form, setForm] = useState({ name: '', form_key: '', lead_source: 0, lead_status: 0, allow_duplicate: 1, mark_public: 0, recaptcha: 0, category: 0 });

  useEffect(() => { api.get('/forms').then(setItems).catch(console.error); }, []);

  const handleSubmit = async () => {
    try {
      const data = { ...form, form_key: form.form_key || Math.random().toString(36).substring(2, 10) };
      if (modal.item) {
        await api.put(`/forms/${modal.item.id}`, data);
      } else {
        await api.post('/forms', data);
      }
      setModal({ open: false, item: null });
      setForm({ name: '', form_key: '', lead_source: 0, lead_status: 0, allow_duplicate: 1, mark_public: 0, recaptcha: 0, category: 0 });
      api.get('/forms').then(setItems);
    } catch (err) { console.error(err); }
  };

  const openEdit = (item) => {
    setForm({ name: item.name, form_key: item.form_key, lead_source: item.lead_source, lead_status: item.lead_status, allow_duplicate: item.allow_duplicate, mark_public: item.mark_public, recaptcha: item.recaptcha, category: item.category || 0 });
    setModal({ open: true, item });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this form?')) return;
    await api.del(`/forms/${id}`);
    api.get('/forms').then(setItems);
  };

  return (
    <>
      <CrudTable
        title="Lead Capture Forms"
        items={items}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'form_key', label: 'Key' },
          { key: 'submission_count', label: 'Submissions' },
          { key: 'mark_public', label: 'Public', render: (item) => item.mark_public ? 'Yes' : 'No' },
        ]}
        onAdd={() => { setForm({ name: '', form_key: '', lead_source: 0, lead_status: 0, allow_duplicate: 1, mark_public: 0, recaptcha: 0, category: 0 }); setModal({ open: true, item: null }); }}
        onEdit={openEdit}
        onDelete={handleDelete}
        actions={(item) => (
          <>
            <button onClick={() => openEdit(item)} className="p-1 text-slate-muted hover:text-gold"><Edit2 className="w-4 h-4" /></button>
            <button onClick={() => handleDelete(item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          </>
        )}
      />
      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, item: null })} title={modal.item ? 'Edit Form' : 'New Form'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Form Key (auto-generated if empty)</label>
            <input type="text" value={form.form_key} onChange={(e) => setForm({ ...form, form_key: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-slate-muted">
              <input type="checkbox" checked={form.allow_duplicate === 1} onChange={(e) => setForm({ ...form, allow_duplicate: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" /> Allow Duplicates
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-muted">
              <input type="checkbox" checked={form.mark_public === 1} onChange={(e) => setForm({ ...form, mark_public: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" /> Public
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-muted">
              <input type="checkbox" checked={form.recaptcha === 1} onChange={(e) => setForm({ ...form, recaptcha: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" /> reCAPTCHA
            </label>
          </div>
          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </>
  );
}

// ============================================
// ASSETS TAB
// ============================================
function AssetsTab() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState({ open: false, item: null });
  const [form, setForm] = useState({ name: '', color: '', category: 0, published: 1, description: '' });

  useEffect(() => { api.get('/assets').then(setItems).catch(console.error); }, []);

  const handleSubmit = async () => {
    try {
      if (modal.item) {
        await api.put(`/assets/${modal.item.id}`, form);
      } else {
        await api.post('/assets', form);
      }
      setModal({ open: false, item: null });
      setForm({ name: '', color: '', category: 0, published: 1, description: '' });
      api.get('/assets').then(setItems);
    } catch (err) { console.error(err); }
  };

  const openEdit = (item) => {
    setForm({ name: item.name, color: item.color || '', category: item.category || 0, published: item.published, description: item.description || '' });
    setModal({ open: true, item });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this asset?')) return;
    await api.del(`/assets/${id}`);
    api.get('/assets').then(setItems);
  };

  return (
    <>
      <CrudTable
        title="Marketing Assets"
        items={items}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'download_count', label: 'Downloads' },
          { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
        ]}
        onAdd={() => { setForm({ name: '', color: '', category: 0, published: 1, description: '' }); setModal({ open: true, item: null }); }}
        onEdit={openEdit}
        onDelete={handleDelete}
        actions={(item) => (
          <>
            <button onClick={() => openEdit(item)} className="p-1 text-slate-muted hover:text-gold"><Edit2 className="w-4 h-4" /></button>
            <button onClick={() => handleDelete(item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          </>
        )}
      />
      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, item: null })} title={modal.item ? 'Edit Asset' : 'New Asset'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.published === 1} onChange={(e) => setForm({ ...form, published: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" />
            <span className="text-sm text-slate-muted">Published</span>
          </div>
          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </>
  );
}

// ============================================
// POINTS TAB
// ============================================
function PointsTab() {
  const [actions, setActions] = useState([]);
  const [triggers, setTriggers] = useState([]);
  const [subTab, setSubTab] = useState('actions');
  const [modal, setModal] = useState({ open: false, type: 'action', item: null });
  const [form, setForm] = useState({ name: '', change_points: 0, action: '', minimum_number_of_points: 0, contact_color: '', published: 1, description: '' });

  useEffect(() => {
    api.get('/point-actions').then(setActions).catch(console.error);
    api.get('/point-triggers').then(setTriggers).catch(console.error);
  }, []);

  const handleSubmit = async () => {
    try {
      const endpoint = form.type === 'action' ? 'point-actions' : 'point-triggers';
      const data = form.type === 'action'
        ? { name: form.name, change_points: form.change_points, action: form.action, published: form.published, description: form.description }
        : { name: form.name, minimum_number_of_points: form.minimum_number_of_points, contact_color: form.contact_color, published: form.published, description: form.description };
      if (modal.item) {
        await api.put(`/${endpoint}/${modal.item.id}`, data);
      } else {
        await api.post(`/${endpoint}`, data);
      }
      setModal({ open: false, type: 'action', item: null });
      api.get('/point-actions').then(setActions);
      api.get('/point-triggers').then(setTriggers);
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (endpoint, id) => {
    if (!confirm('Delete this item?')) return;
    await api.del(`/${endpoint}/${id}`);
    api.get('/point-actions').then(setActions);
    api.get('/point-triggers').then(setTriggers);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Lead Scoring</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => setSubTab('actions')} className={`px-3 py-1.5 rounded-lg text-sm ${subTab === 'actions' ? 'bg-gold/20 text-gold' : 'text-slate-muted hover:text-white'}`}>Actions</button>
          <button onClick={() => setSubTab('triggers')} className={`px-3 py-1.5 rounded-lg text-sm ${subTab === 'triggers' ? 'bg-gold/20 text-gold' : 'text-slate-muted hover:text-white'}`}>Triggers</button>
        </div>
      </div>

      {subTab === 'actions' && (
        <CrudTable
          title="Point Actions"
          items={actions}
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'change_points', label: 'Points', render: (item) => <span className={item.change_points >= 0 ? 'text-green-400' : 'text-red-400'}>{item.change_points > 0 ? '+' : ''}{item.change_points}</span> },
            { key: 'action', label: 'Action Type' },
            { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
          ]}
          onAdd={() => { setForm({ type: 'action', name: '', change_points: 0, action: '', published: 1, description: '' }); setModal({ open: true, type: 'action', item: null }); }}
          onDelete={(id) => handleDelete('point-actions', id)}
          actions={(item) => (
            <button onClick={() => handleDelete('point-actions', item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          )}
        />
      )}

      {subTab === 'triggers' && (
        <CrudTable
          title="Point Triggers"
          items={triggers}
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'minimum_number_of_points', label: 'Min Points' },
            { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
          ]}
          onAdd={() => { setForm({ type: 'trigger', name: '', minimum_number_of_points: 0, contact_color: '', published: 1, description: '' }); setModal({ open: true, type: 'trigger', item: null }); }}
          onDelete={(id) => handleDelete('point-triggers', id)}
          actions={(item) => (
            <button onClick={() => handleDelete('point-triggers', item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          )}
        />
      )}

      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, type: 'action', item: null })} title={modal.item ? 'Edit' : 'New'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          {form.type === 'action' ? (
            <>
              <div>
                <label className="text-sm text-slate-muted">Points Change</label>
                <input type="number" value={form.change_points} onChange={(e) => setForm({ ...form, change_points: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
              </div>
              <div>
                <label className="text-sm text-slate-muted">Action Type</label>
                <input type="text" value={form.action} onChange={(e) => setForm({ ...form, action: e.target.value })} placeholder="e.g. email_open, email_click" className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="text-sm text-slate-muted">Minimum Points</label>
                <input type="number" value={form.minimum_number_of_points} onChange={(e) => setForm({ ...form, minimum_number_of_points: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
              </div>
              <div>
                <label className="text-sm text-slate-muted">Contact Color</label>
                <input type="color" value={form.contact_color || '#c89b3c'} onChange={(e) => setForm({ ...form, contact_color: e.target.value })} className="w-full h-10 bg-navy/50 border border-gold/15 rounded-lg cursor-pointer" />
              </div>
            </>
          )}
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.published === 1} onChange={(e) => setForm({ ...form, published: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" />
            <span className="text-sm text-slate-muted">Published</span>
          </div>
          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </div>
  );
}

// ============================================
// EMAILS TAB
// ============================================
function EmailsTab() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState({ open: false, item: null });
  const [form, setForm] = useState({ name: '', type: 'campaign', category: 0, segment: 0, published: 1, subject: '', from_name: '', from_address: '', description: '' });

  useEffect(() => { api.get('/emails').then(setItems).catch(console.error); }, []);

  const handleSubmit = async () => {
    try {
      if (modal.item) {
        await api.put(`/emails/${modal.item.id}`, form);
      } else {
        await api.post('/emails', form);
      }
      setModal({ open: false, item: null });
      setForm({ name: '', type: 'campaign', category: 0, segment: 0, published: 1, subject: '', from_name: '', from_address: '', description: '' });
      api.get('/emails').then(setItems);
    } catch (err) { console.error(err); }
  };

  const handleSend = async (id) => {
    if (!confirm('Send this email campaign?')) return;
    try {
      const result = await api.post(`/emails/${id}/send`);
      alert(`Sent to ${result.sent} recipients`);
    } catch (err) { console.error(err); alert('Failed to send'); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this email?')) return;
    await api.del(`/emails/${id}`);
    api.get('/emails').then(setItems);
  };

  return (
    <>
      <CrudTable
        title="Email Campaigns"
        items={items}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'subject', label: 'Subject' },
          { key: 'total_sent', label: 'Sent' },
          { key: 'total_opened', label: 'Opened' },
          { key: 'total_clicked', label: 'Clicked' },
          { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
        ]}
        onAdd={() => { setForm({ name: '', type: 'campaign', category: 0, segment: 0, published: 1, subject: '', from_name: '', from_address: '', description: '' }); setModal({ open: true, item: null }); }}
        onDelete={handleDelete}
        actions={(item) => (
          <>
            <button onClick={() => handleSend(item.id)} className="p-1 text-slate-muted hover:text-green-400" title="Send"><Send className="w-4 h-4" /></button>
            <button onClick={() => handleDelete(item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          </>
        )}
      />
      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, item: null })} title={modal.item ? 'Edit Email' : 'New Email'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Subject</label>
            <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">From Name</label>
            <input type="text" value={form.from_name} onChange={(e) => setForm({ ...form, from_name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">From Address</label>
            <input type="email" value={form.from_address} onChange={(e) => setForm({ ...form, from_address: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.published === 1} onChange={(e) => setForm({ ...form, published: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" />
            <span className="text-sm text-slate-muted">Published</span>
          </div>
          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </>
  );
}

// ============================================
// SMS TAB
// ============================================
function SmsTab() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState({ open: false, item: null });
  const [form, setForm] = useState({ name: '', category: 0, sms_template: 0, published: 1, content: '', description: '' });

  useEffect(() => { api.get('/sms').then(setItems).catch(console.error); }, []);

  const handleSubmit = async () => {
    try {
      if (modal.item) {
        await api.put(`/sms/${modal.item.id}`, form);
      } else {
        await api.post('/sms', form);
      }
      setModal({ open: false, item: null });
      setForm({ name: '', category: 0, sms_template: 0, published: 1, content: '', description: '' });
      api.get('/sms').then(setItems);
    } catch (err) { console.error(err); }
  };

  const handleSend = async (id) => {
    if (!confirm('Send this SMS campaign?')) return;
    try {
      const result = await api.post(`/sms/${id}/send`);
      alert(`Sent to ${result.sent} recipients`);
    } catch (err) { console.error(err); alert('Failed to send'); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this SMS?')) return;
    await api.del(`/sms/${id}`);
    api.get('/sms').then(setItems);
  };

  return (
    <>
      <CrudTable
        title="SMS Campaigns"
        items={items}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'content', label: 'Content', render: (item) => <span className="truncate max-w-xs block">{item.content}</span> },
          { key: 'total_sent', label: 'Sent' },
          { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
        ]}
        onAdd={() => { setForm({ name: '', category: 0, sms_template: 0, published: 1, content: '', description: '' }); setModal({ open: true, item: null }); }}
        onDelete={handleDelete}
        actions={(item) => (
          <>
            <button onClick={() => handleSend(item.id)} className="p-1 text-slate-muted hover:text-green-400" title="Send"><Send className="w-4 h-4" /></button>
            <button onClick={() => handleDelete(item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
          </>
        )}
      />
      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, item: null })} title={modal.item ? 'Edit SMS' : 'New SMS'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div>
            <label className="text-sm text-slate-muted">Content</label>
            <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={4} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.published === 1} onChange={(e) => setForm({ ...form, published: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" />
            <span className="text-sm text-slate-muted">Published</span>
          </div>
          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </>
  );
}

// ============================================
// CAMPAIGNS TAB
// ============================================
function CampaignsTab() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState({ open: false, item: null });
  const [form, setForm] = useState({ name: '', color: '', category: 0, published: 1, start_date: '', end_date: '', description: '' });

  useEffect(() => { api.get('/campaigns').then(setItems).catch(console.error); }, []);

  const handleSubmit = async () => {
    try {
      if (modal.item) {
        await api.put(`/campaigns/${modal.item.id}`, form);
      } else {
        await api.post('/campaigns', form);
      }
      setModal({ open: false, item: null });
      setForm({ name: '', color: '', category: 0, published: 1, start_date: '', end_date: '', description: '' });
      api.get('/campaigns').then(setItems);
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this campaign?')) return;
    await api.del(`/campaigns/${id}`);
    api.get('/campaigns').then(setItems);
  };

  return (
    <>
      <CrudTable
        title="Workflow Campaigns"
        items={items}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'leads_in_flow', label: 'Leads in Flow' },
          { key: 'total_actions', label: 'Total Actions' },
          { key: 'start_date', label: 'Start Date' },
          { key: 'end_date', label: 'End Date' },
          { key: 'published', label: 'Status', render: (item) => <StatusBadge status={item.published} /> },
        ]}
        onAdd={() => { setForm({ name: '', color: '', category: 0, published: 1, start_date: '', end_date: '', description: '' }); setModal({ open: true, item: null }); }}
        onDelete={handleDelete}
        actions={(item) => (
          <button onClick={() => handleDelete(item.id)} className="p-1 text-slate-muted hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
        )}
      />
      <Modal isOpen={modal.open} onClose={() => setModal({ open: false, item: null })} title={modal.item ? 'Edit Campaign' : 'New Campaign'}>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-muted">Name *</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-slate-muted">Start Date</label>
              <input type="date" value={form.start_date} onChange={(e) => setForm({ ...form, start_date: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
            </div>
            <div>
              <label className="text-sm text-slate-muted">End Date</label>
              <input type="date" value={form.end_date} onChange={(e) => setForm({ ...form, end_date: e.target.value })} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-muted">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2 bg-navy/50 border border-gold/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/30" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.published === 1} onChange={(e) => setForm({ ...form, published: e.target.checked ? 1 : 0 })} className="rounded bg-navy/50 border-gold/15" />
            <span className="text-sm text-slate-muted">Published</span>
          </div>
          <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30"><Save className="w-4 h-4" /> Save</button>
        </div>
      </Modal>
    </>
  );
}

// ============================================
// REPORTS TAB
// ============================================
function ReportsTab() {
  const [subTab, setSubTab] = useState('email');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadReport = (type) => {
    setLoading(true);
    setSubTab(type);
    api.get(`/reports/${type}`).then(setData).catch(console.error).finally(() => setLoading(false));
  };

  useEffect(() => { loadReport('email'); }, []);

  const reportTypes = [
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'sms', label: 'SMS', icon: MessageSquare },
    { id: 'forms', label: 'Forms', icon: FormInput },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
    { id: 'assets', label: 'Assets', icon: Package },
    { id: 'points', label: 'Points', icon: TrendingUp },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Reports</h2>
      <div className="flex items-center gap-2 flex-wrap">
        {reportTypes.map((t) => (
          <button key={t.id} onClick={() => loadReport(t.id)} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${subTab === t.id ? 'bg-gold/20 text-gold' : 'text-slate-muted hover:text-white'}`}>
            <t.icon className="w-4 h-4" /> {t.label}
          </button>
        ))}
      </div>

      {loading && <div className="text-slate-muted">Loading...</div>}

      {!loading && subTab === 'email' && (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Name</th>
                <th className="text-left px-4 py-3 font-medium">Subject</th>
                <th className="text-left px-4 py-3 font-medium">Sent</th>
                <th className="text-left px-4 py-3 font-medium">Delivered</th>
                <th className="text-left px-4 py-3 font-medium">Opened</th>
                <th className="text-left px-4 py-3 font-medium">Clicked</th>
                <th className="text-left px-4 py-3 font-medium">Failed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-navy/30">
                  <td className="px-4 py-3 text-white">{item.name}</td>
                  <td className="px-4 py-3 text-slate-300">{item.subject || '-'}</td>
                  <td className="px-4 py-3 text-slate-300">{item.total_sent}</td>
                  <td className="px-4 py-3 text-green-400">{item.delivered}</td>
                  <td className="px-4 py-3 text-blue-400">{item.opened}</td>
                  <td className="px-4 py-3 text-purple-400">{item.clicked}</td>
                  <td className="px-4 py-3 text-red-400">{item.failed}</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-slate-muted">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && subTab === 'sms' && (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Name</th>
                <th className="text-left px-4 py-3 font-medium">Content</th>
                <th className="text-left px-4 py-3 font-medium">Sent</th>
                <th className="text-left px-4 py-3 font-medium">Delivered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-navy/30">
                  <td className="px-4 py-3 text-white">{item.name}</td>
                  <td className="px-4 py-3 text-slate-300 truncate max-w-xs">{item.content}</td>
                  <td className="px-4 py-3 text-slate-300">{item.total_sent}</td>
                  <td className="px-4 py-3 text-green-400">{item.delivered}</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-slate-muted">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && subTab === 'forms' && (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Name</th>
                <th className="text-left px-4 py-3 font-medium">Key</th>
                <th className="text-left px-4 py-3 font-medium">Submissions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-navy/30">
                  <td className="px-4 py-3 text-white">{item.name}</td>
                  <td className="px-4 py-3 text-slate-300 font-mono text-xs">{item.form_key}</td>
                  <td className="px-4 py-3 text-slate-300">{item.submissions}</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={3} className="px-4 py-8 text-center text-slate-muted">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && subTab === 'campaigns' && (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Name</th>
                <th className="text-left px-4 py-3 font-medium">Leads</th>
                <th className="text-left px-4 py-3 font-medium">Actions</th>
                <th className="text-left px-4 py-3 font-medium">Emails</th>
                <th className="text-left px-4 py-3 font-medium">Opened</th>
                <th className="text-left px-4 py-3 font-medium">SMS</th>
                <th className="text-left px-4 py-3 font-medium">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-navy/30">
                  <td className="px-4 py-3 text-white">{item.name}</td>
                  <td className="px-4 py-3 text-slate-300">{item.leads_in_flow}</td>
                  <td className="px-4 py-3 text-slate-300">{item.total_actions}</td>
                  <td className="px-4 py-3 text-blue-400">{item.emails_sent}</td>
                  <td className="px-4 py-3 text-green-400">{item.emails_opened}</td>
                  <td className="px-4 py-3 text-purple-400">{item.sms_sent}</td>
                  <td className="px-4 py-3 text-yellow-400">{item.point_actions}</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-slate-muted">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && subTab === 'assets' && (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Name</th>
                <th className="text-left px-4 py-3 font-medium">Downloads</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-navy/30">
                  <td className="px-4 py-3 text-white">{item.name}</td>
                  <td className="px-4 py-3 text-slate-300">{item.downloads}</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={2} className="px-4 py-8 text-center text-slate-muted">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {!loading && subTab === 'points' && (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Name</th>
                <th className="text-left px-4 py-3 font-medium">Email</th>
                <th className="text-left px-4 py-3 font-medium">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-navy/30">
                  <td className="px-4 py-3 text-white">{item.name}</td>
                  <td className="px-4 py-3 text-slate-300">{item.email || '-'}</td>
                  <td className="px-4 py-3 text-yellow-400 font-bold">{item.ma_point}</td>
                </tr>
              ))}
              {data.length === 0 && <tr><td colSpan={3} className="px-4 py-8 text-center text-slate-muted">No data</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN MARKETING PAGE
// ============================================
export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderTab = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardTab />;
      case 'categories': return <CategoriesTab />;
      case 'stages': return <StagesTab />;
      case 'segments': return <SegmentsTab />;
      case 'forms': return <FormsTab />;
      case 'assets': return <AssetsTab />;
      case 'points': return <PointsTab />;
      case 'emails': return <EmailsTab />;
      case 'sms': return <SmsTab />;
      case 'campaigns': return <CampaignsTab />;
      case 'reports': return <ReportsTab />;
      default: return <DashboardTab />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab navigation */}
      <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-gold/15">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-gold/10 text-gold'
                  : 'text-slate-muted hover:text-white hover:bg-navy/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {renderTab()}
    </div>
  );
}
