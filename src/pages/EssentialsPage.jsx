import { useState, useEffect, useCallback } from 'react';
import {
  LayoutDashboard, CheckSquare, Clock, Calendar, CalendarDays, DollarSign,
  TrendingUp, MessageSquare, FileText, Bell, BookOpen, Palmtree, Settings,
  Plus, Edit2, Trash2, Search, Filter, ChevronLeft, ChevronRight,
  X, Save, User, Users, ChevronDown, AlertCircle, CheckCircle,
  ArrowUpCircle, ArrowDownCircle, Eye, Share2, Download, Upload,
  Play, Square, MoreVertical, Star, Tag, Hash, MapPin,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('pillars_token');
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
};

const api = {
  get: async (path) => {
    const res = await fetch(`${API_BASE}/essentials${path}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  post: async (path, body) => {
    const res = await fetch(`${API_BASE}/essentials${path}`, {
      method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  put: async (path, body) => {
    const res = await fetch(`${API_BASE}/essentials${path}`, {
      method: 'PUT', headers: getAuthHeaders(), body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  del: async (path) => {
    const res = await fetch(`${API_BASE}/essentials${path}`, {
      method: 'DELETE', headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
};

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'attendance', label: 'Attendance', icon: Clock },
  { id: 'shifts', label: 'Shifts', icon: Calendar },
  { id: 'leaves', label: 'Leave Mgmt', icon: CalendarDays },
  { id: 'payroll', label: 'Payroll', icon: DollarSign },
  { id: 'allowances', label: 'Allowances', icon: TrendingUp },
  { id: 'sales-targets', label: 'Sales Targets', icon: Star },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'reminders', label: 'Reminders', icon: Bell },
  { id: 'knowledge-base', label: 'Knowledge Base', icon: BookOpen },
  { id: 'holidays', label: 'Holidays', icon: Palmtree },
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
    new: 'bg-blue-500/20 text-blue-300', pending: 'bg-yellow-500/20 text-yellow-300',
    'in-progress': 'bg-purple-500/20 text-purple-300', completed: 'bg-green-500/20 text-green-300',
    approved: 'bg-green-500/20 text-green-300', rejected: 'bg-red-500/20 text-red-300',
    paid: 'bg-green-500/20 text-green-300', partial: 'bg-yellow-500/20 text-yellow-300',
    unpaid: 'bg-red-500/20 text-red-300', allowance: 'bg-green-500/20 text-green-300',
    deduction: 'bg-red-500/20 text-red-300',
  };
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[status] || 'bg-slate-500/20 text-slate-300'}`}>{status}</span>;
}

function PriorityBadge({ priority }) {
  const colors = { low: 'text-green-400', medium: 'text-yellow-400', high: 'text-orange-400', urgent: 'text-red-400' };
  return <span className={`text-xs font-medium ${colors[priority] || 'text-slate-400'}`}>{priority}</span>;
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
      <h2 className="text-xl font-semibold text-white">Essentials Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(data.taskStats || {}).map(([status, count]) => (
          <div key={status} className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
            <p className="text-slate-muted text-sm capitalize">{status}</p>
            <p className="text-2xl font-bold text-white mt-1">{count}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3">Today&apos;s Attendance</h3>
          {data.todaysAttendance?.length ? (
            <div className="space-y-2">
              {data.todaysAttendance.map((a) => (
                <div key={a.id} className="flex justify-between text-sm">
                  <span className="text-slate-muted">{a.user_name}</span>
                  <span className="text-white">{new Date(a.clock_in_time).toLocaleTimeString()} {a.clock_out_time ? `- ${new Date(a.clock_out_time).toLocaleTimeString()}` : '(active)'}</span>
                </div>
              ))}
            </div>
          ) : <p className="text-slate-muted text-sm">No attendance today</p>}
        </div>
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3">Today&apos;s Leaves</h3>
          {data.todaysLeaves?.length ? (
            <div className="space-y-2">
              {data.todaysLeaves.map((l) => (
                <div key={l.id} className="flex justify-between text-sm">
                  <span className="text-slate-muted">{l.user_name}</span>
                  <span className="text-white">{l.leave_type}</span>
                </div>
              ))}
            </div>
          ) : <p className="text-slate-muted text-sm">No leaves today</p>}
        </div>
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3">Upcoming Leaves</h3>
          {data.upcomingLeaves?.length ? (
            <div className="space-y-2">
              {data.upcomingLeaves.slice(0, 5).map((l) => (
                <div key={l.id} className="flex justify-between text-sm">
                  <span className="text-slate-muted">{l.user_name}</span>
                  <span className="text-white">{l.leave_type} ({l.start_date})</span>
                </div>
              ))}
            </div>
          ) : <p className="text-slate-muted text-sm">No upcoming leaves</p>}
        </div>
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3">Holidays</h3>
          {data.todaysHolidays?.length ? (
            <p className="text-gold text-sm">Today is a holiday: {data.todaysHolidays[0].name}</p>
          ) : data.upcomingHolidays?.length ? (
            <p className="text-slate-muted text-sm">Next: {data.upcomingHolidays[0].name} ({data.upcomingHolidays[0].start_date})</p>
          ) : <p className="text-slate-muted text-sm">No upcoming holidays</p>}
        </div>
      </div>
    </div>
  );
}

// ============================================
// TASKS TAB
// ============================================
function TasksTab() {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showDetail, setShowDetail] = useState(null);
  const [filters, setFilters] = useState({ status: '', priority: '' });
  const limit = 20;

  const fetchTasks = useCallback(() => {
    setLoading(true);
    api.get(`/tasks?status=${filters.status}&priority=${filters.priority}&limit=${limit}&offset=${page * limit}`)
      .then((d) => { setTasks(d.tasks); setTotal(d.total); }).catch(console.error).finally(() => setLoading(false));
  }, [page, filters, limit]);

  useEffect(() => { fetchTasks(); }, [fetchTasks]);

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/tasks', {
      title: form.title.value, description: form.description.value,
      priority: form.priority.value, status: form.status.value,
      startDate: form.startDate.value || null, endDate: form.endDate.value || null,
    });
    setShowCreate(false);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this task?')) return;
    await api.del(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Tasks</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New Task</button>
      </div>
      <div className="flex gap-2">
        <select value={filters.status} onChange={(e) => { setFilters({ ...filters, status: e.target.value }); setPage(0); }} className="bg-[#0d1b33] border border-gold/15 rounded px-2 py-1 text-sm text-white">
          <option value="">All Status</option>
          <option value="new">New</option><option value="in-progress">In Progress</option><option value="completed">Completed</option>
        </select>
        <select value={filters.priority} onChange={(e) => { setFilters({ ...filters, priority: e.target.value }); setPage(0); }} className="bg-[#0d1b33] border border-gold/15 rounded px-2 py-1 text-sm text-white">
          <option value="">All Priority</option>
          <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option><option value="urgent">Urgent</option>
        </select>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">Task ID</th><th className="text-left p-3">Title</th><th className="text-left p-3">Status</th>
              <th className="text-left p-3">Priority</th><th className="text-left p-3">Due</th><th className="text-left p-3">Actions</th>
            </tr></thead>
            <tbody>
              {tasks.map((t) => (
                <tr key={t.id} className="border-t border-gold/10 hover:bg-navy/30">
                  <td className="p-3 text-gold text-xs">{t.task_id}</td>
                  <td className="p-3 text-white cursor-pointer hover:text-gold" onClick={() => setShowDetail(t.id)}>{t.title}</td>
                  <td className="p-3"><StatusBadge status={t.status} /></td>
                  <td className="p-3"><PriorityBadge priority={t.priority} /></td>
                  <td className="p-3 text-slate-muted">{t.end_date || '-'}</td>
                  <td className="p-3"><button onClick={() => handleDelete(t.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {tasks.length === 0 && <p className="p-4 text-slate-muted text-center">No tasks found</p>}
        </div>
      )}
      <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />

      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="Create Task">
        <form onSubmit={handleCreate} className="space-y-3">
          <input name="title" required placeholder="Title" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <textarea name="description" placeholder="Description" rows={3} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <div className="grid grid-cols-2 gap-2">
            <select name="priority" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
              <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option><option value="urgent">Urgent</option>
            </select>
            <select name="status" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
              <option value="new">New</option><option value="in-progress">In Progress</option><option value="completed">Completed</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input name="startDate" type="date" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
            <input name="endDate" type="date" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          </div>
          <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Create Task</button>
        </form>
      </Modal>

      {showDetail && <TaskDetailModal taskId={showDetail} onClose={() => setShowDetail(null)} />}
    </div>
  );
}

function TaskDetailModal({ taskId, onClose }) {
  const [task, setTask] = useState(null);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/tasks/${taskId}`).then(setTask).catch(console.error).finally(() => setLoading(false));
  }, [taskId]);

  const addComment = async () => {
    if (!comment.trim()) return;
    await api.post(`/tasks/${taskId}/comments`, { comment });
    setComment('');
    api.get(`/tasks/${taskId}`).then(setTask);
  };

  if (loading) return <Modal isOpen={true} onClose={onClose} title="Task Detail"><p className="text-slate-muted">Loading...</p></Modal>;
  if (!task) return <Modal isOpen={true} onClose={onClose} title="Task Detail"><p className="text-red-400">Not found</p></Modal>;

  return (
    <Modal isOpen={true} onClose={onClose} title={task.title}>
      <div className="space-y-4">
        <div className="flex gap-2"><StatusBadge status={task.status} /><PriorityBadge priority={task.priority} /></div>
        <p className="text-slate-muted text-sm">{task.description || 'No description'}</p>
        {task.start_date && <p className="text-sm text-slate-muted">Start: {task.start_date}</p>}
        {task.end_date && <p className="text-sm text-slate-muted">Due: {task.end_date}</p>}
        <div>
          <h4 className="text-white text-sm font-medium mb-2">Comments ({task.comments?.length || 0})</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {task.comments?.map((c) => (
              <div key={c.id} className="bg-navy/30 rounded p-2 text-sm">
                <p className="text-white">{c.comment}</p>
                <p className="text-slate-muted text-xs mt-1">{c.user_name} - {new Date(c.created_at).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add comment..." className="flex-1 bg-navy/50 border border-gold/15 rounded px-3 py-1.5 text-white text-sm" />
            <button onClick={addComment} className="px-3 py-1.5 bg-gold/20 text-gold rounded text-sm">Send</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

// ============================================
// ATTENDANCE TAB
// ============================================
function AttendanceTab() {
  const [records, setRecords] = useState([]);
  const [summary, setSummary] = useState({ totalDays: 0, totalHours: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [clockedIn, setClockedIn] = useState(false);
  const limit = 20;

  const fetchData = useCallback(() => {
    setLoading(true);
    Promise.all([
      api.get(`/attendance?limit=${limit}&offset=${page * limit}`),
      api.get('/attendance/summary'),
    ]).then(([d, s]) => { setRecords(d.records); setSummary(s); }).catch(console.error).finally(() => setLoading(false));
  }, [page, limit]);

  useEffect(() => { fetchData(); }, [fetchData]);

  useEffect(() => {
    if (records.length > 0 && !records[0].clock_out_time) setClockedIn(true);
  }, [records]);

  const handleClockIn = async () => {
    await api.post('/attendance/clock-in', {});
    fetchData();
  };

  const handleClockOut = async () => {
    await api.post('/attendance/clock-out', {});
    setClockedIn(false);
    fetchData();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Attendance</h2>
        <div className="flex gap-2">
          {!clockedIn ? (
            <button onClick={handleClockIn} className="flex items-center gap-2 px-3 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 text-sm"><Play className="w-4 h-4" /> Clock In</button>
          ) : (
            <button onClick={handleClockOut} className="flex items-center gap-2 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 text-sm"><Square className="w-4 h-4" /> Clock Out</button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <p className="text-slate-muted text-sm">Total Days</p>
          <p className="text-2xl font-bold text-white">{summary.totalDays}</p>
        </div>
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
          <p className="text-slate-muted text-sm">Total Hours</p>
          <p className="text-2xl font-bold text-white">{summary.totalHours}</p>
        </div>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">User</th><th className="text-left p-3">Clock In</th><th className="text-left p-3">Clock Out</th><th className="text-left p-3">Shift</th>
            </tr></thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-t border-gold/10">
                  <td className="p-3 text-white">{r.user_name}</td>
                  <td className="p-3 text-slate-muted">{new Date(r.clock_in_time).toLocaleString()}</td>
                  <td className="p-3 text-slate-muted">{r.clock_out_time ? new Date(r.clock_out_time).toLocaleString() : <span className="text-green-400">Active</span>}</td>
                  <td className="p-3 text-slate-muted">{r.shift_name || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {records.length === 0 && <p className="p-4 text-slate-muted text-center">No records</p>}
        </div>
      )}
      <Pagination page={page} total={records.length > 0 ? 100 : 0} limit={limit} onPageChange={setPage} />
    </div>
  );
}

// ============================================
// SHIFTS TAB
// ============================================
function ShiftsTab() {
  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    api.get('/shifts').then(setShifts).catch(console.error).finally(() => setLoading(false));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/shifts', {
      name: form.name.value, type: form.type.value,
      startTime: form.startTime.value || null, endTime: form.endTime.value || null,
    });
    setShowCreate(false);
    api.get('/shifts').then(setShifts);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Shifts</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New Shift</button>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shifts.map((s) => (
            <div key={s.id} className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
              <h3 className="text-white font-medium">{s.name}</h3>
              <p className="text-slate-muted text-sm mt-1">{s.type}</p>
              {s.start_time && s.end_time && <p className="text-gold text-sm mt-1">{s.start_time} - {s.end_time}</p>}
            </div>
          ))}
        </div>
      )}
      {shifts.length === 0 && !loading && <p className="text-slate-muted text-center">No shifts configured</p>}

      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="Create Shift">
        <form onSubmit={handleCreate} className="space-y-3">
          <input name="name" required placeholder="Shift Name" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <select name="type" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
            <option value="fixed">Fixed</option><option value="flexible">Flexible</option><option value="rotating">Rotating</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input name="startTime" type="time" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
            <input name="endTime" type="time" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          </div>
          <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Create Shift</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// LEAVES TAB
// ============================================
function LeavesTab() {
  const [leaves, setLeaves] = useState([]);
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showCreateType, setShowCreateType] = useState(false);
  const limit = 20;

  const fetchData = useCallback(() => {
    setLoading(true);
    Promise.all([
      api.get(`/leaves?limit=${limit}&offset=${page * limit}`),
      api.get('/leave-types'),
    ]).then(([d, t]) => { setLeaves(d.leaves); setTotal(d.total); setLeaveTypes(t); }).catch(console.error).finally(() => setLoading(false));
  }, [page, limit]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/leaves', {
      leaveTypeId: form.leaveTypeId.value, startDate: form.startDate.value,
      endDate: form.endDate.value, reason: form.reason.value,
    });
    setShowCreate(false);
    fetchData();
  };

  const handleCreateType = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/leave-types', {
      leaveType: form.leaveType.value, maxLeaveCount: parseInt(form.maxDays.value) || 0,
      interval: form.interval.value,
    });
    setShowCreateType(false);
    fetchData();
  };

  const updateStatus = async (id, status) => {
    await api.put(`/leaves/${id}/status`, { status });
    fetchData();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Leave Management</h2>
        <div className="flex gap-2">
          <button onClick={() => setShowCreateType(true)} className="flex items-center gap-2 px-3 py-2 bg-navy/50 text-slate-muted rounded-lg hover:bg-navy text-sm"><Settings className="w-4 h-4" /> Types</button>
          <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> Request Leave</button>
        </div>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">Ref</th><th className="text-left p-3">User</th><th className="text-left p-3">Type</th>
              <th className="text-left p-3">From</th><th className="text-left p-3">To</th><th className="text-left p-3">Status</th><th className="text-left p-3">Actions</th>
            </tr></thead>
            <tbody>
              {leaves.map((l) => (
                <tr key={l.id} className="border-t border-gold/10">
                  <td className="p-3 text-gold text-xs">{l.ref_no}</td>
                  <td className="p-3 text-white">{l.user_name}</td>
                  <td className="p-3 text-slate-muted">{l.leave_type}</td>
                  <td className="p-3 text-slate-muted">{l.start_date}</td>
                  <td className="p-3 text-slate-muted">{l.end_date}</td>
                  <td className="p-3"><StatusBadge status={l.status} /></td>
                  <td className="p-3">
                    {l.status === 'pending' && (
                      <div className="flex gap-1">
                        <button onClick={() => updateStatus(l.id, 'approved')} className="text-green-400 hover:text-green-300"><CheckCircle className="w-4 h-4" /></button>
                        <button onClick={() => updateStatus(l.id, 'rejected')} className="text-red-400 hover:text-red-300"><X className="w-4 h-4" /></button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {leaves.length === 0 && <p className="p-4 text-slate-muted text-center">No leave requests</p>}
        </div>
      )}
      <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />

      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="Request Leave">
        <form onSubmit={handleCreate} className="space-y-3">
          <select name="leaveTypeId" required className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
            <option value="">Select Leave Type</option>
            {leaveTypes.map((t) => <option key={t.id} value={t.id}>{t.leave_type}</option>)}
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input name="startDate" type="date" required className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
            <input name="endDate" type="date" required className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          </div>
          <textarea name="reason" placeholder="Reason" rows={2} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Submit Request</button>
        </form>
      </Modal>

      <Modal isOpen={showCreateType} onClose={() => setShowCreateType(false)} title="Leave Types">
        <div className="space-y-3">
          <div className="space-y-2">
            {leaveTypes.map((t) => (
              <div key={t.id} className="flex justify-between items-center bg-navy/30 rounded p-2 text-sm">
                <span className="text-white">{t.leave_type}</span>
                <span className="text-slate-muted">{t.max_leave_count} days/{t.leave_count_interval}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleCreateType} className="space-y-2 pt-2 border-t border-gold/15">
            <input name="leaveType" required placeholder="Type Name" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
            <div className="grid grid-cols-2 gap-2">
              <input name="maxDays" type="number" placeholder="Max Days" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
              <select name="interval" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
                <option value="yearly">Yearly</option><option value="monthly">Monthly</option>
              </select>
            </div>
            <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Add Type</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

// ============================================
// PAYROLL TAB
// ============================================
function PayrollTab() {
  const [payrolls, setPayrolls] = useState([]);
  const [groups, setGroups] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const limit = 20;

  const fetchData = useCallback(() => {
    setLoading(true);
    Promise.all([
      api.get(`/payrolls?limit=${limit}&offset=${page * limit}`),
      api.get('/payroll-groups'),
    ]).then(([p, g]) => { setPayrolls(p.payrolls); setTotal(p.total); setGroups(g); }).catch(console.error).finally(() => setLoading(false));
  }, [page, limit]);

  useEffect(() => { fetchData(); }, [fetchData]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Payroll</h2>
        <button onClick={() => setShowCreateGroup(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New Payroll Group</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div key={g.id} className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
            <h3 className="text-white font-medium">{g.name}</h3>
            <p className="text-gold text-lg font-bold mt-1">${parseFloat(g.gross_total || 0).toFixed(2)}</p>
            <p className="text-slate-muted text-sm">{g.payroll_count} transactions</p>
          </div>
        ))}
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">Ref</th><th className="text-left p-3">User</th><th className="text-left p-3">Date</th>
              <th className="text-left p-3">Amount</th><th className="text-left p-3">Status</th>
            </tr></thead>
            <tbody>
              {payrolls.map((p) => (
                <tr key={p.id} className="border-t border-gold/10">
                  <td className="p-3 text-gold text-xs">{p.ref_no}</td>
                  <td className="p-3 text-white">{p.user_name}</td>
                  <td className="p-3 text-slate-muted">{new Date(p.transaction_date).toLocaleDateString()}</td>
                  <td className="p-3 text-white font-medium">${parseFloat(p.final_total).toFixed(2)}</td>
                  <td className="p-3"><StatusBadge status={p.payment_status || 'unpaid'} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          {payrolls.length === 0 && <p className="p-4 text-slate-muted text-center">No payroll records</p>}
        </div>
      )}
      <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />

      <Modal isOpen={showCreateGroup} onClose={() => setShowCreateGroup(false)} title="Create Payroll Group">
        <p className="text-slate-muted text-sm">Payroll groups are created through the backend API. Contact your administrator to set up payroll processing.</p>
      </Modal>
    </div>
  );
}

// ============================================
// ALLOWANCES & DEDUCTIONS TAB
// ============================================
function AllowancesTab() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    api.get('/allowances-deductions').then(setItems).catch(console.error).finally(() => setLoading(false));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/allowances-deductions', {
      description: form.description.value, type: form.type.value,
      amount: parseFloat(form.amount.value), amountType: form.amountType.value,
    });
    setShowCreate(false);
    api.get('/allowances-deductions').then(setItems);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this item?')) return;
    await api.del(`/allowances-deductions/${id}`);
    api.get('/allowances-deductions').then(setItems);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Allowances & Deductions</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New</button>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">Description</th><th className="text-left p-3">Type</th>
              <th className="text-left p-3">Amount</th><th className="text-left p-3">Date</th><th className="text-left p-3">Actions</th>
            </tr></thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-gold/10">
                  <td className="p-3 text-white">{item.description}</td>
                  <td className="p-3"><StatusBadge status={item.type} /></td>
                  <td className="p-3 text-white">${parseFloat(item.amount).toFixed(2)}</td>
                  <td className="p-3 text-slate-muted">{item.applicable_date || '-'}</td>
                  <td className="p-3"><button onClick={() => handleDelete(item.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {items.length === 0 && <p className="p-4 text-slate-muted text-center">No allowances or deductions</p>}
        </div>
      )}

      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="Add Allowance/Deduction">
        <form onSubmit={handleCreate} className="space-y-3">
          <input name="description" required placeholder="Description" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <div className="grid grid-cols-2 gap-2">
            <select name="type" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
              <option value="allowance">Allowance</option><option value="deduction">Deduction</option>
            </select>
            <select name="amountType" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
              <option value="fixed">Fixed</option><option value="percentage">Percentage</option>
            </select>
          </div>
          <input name="amount" type="number" step="0.01" required placeholder="Amount" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <input name="applicableDate" type="date" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Create</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// SALES TARGETS TAB
// ============================================
function SalesTargetsTab() {
  const [targets, setTargets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/sales-targets').then(setTargets).catch(console.error).finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Sales Targets</h2>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">User</th><th className="text-left p-3">Target Start</th>
              <th className="text-left p-3">Target End</th><th className="text-left p-3">Commission %</th>
            </tr></thead>
            <tbody>
              {targets.map((t) => (
                <tr key={t.id} className="border-t border-gold/10">
                  <td className="p-3 text-white">{t.user_name || '-'}</td>
                  <td className="p-3 text-slate-muted">{t.target_start}</td>
                  <td className="p-3 text-slate-muted">{t.target_end}</td>
                  <td className="p-3 text-gold">{t.commission_percent}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          {targets.length === 0 && <p className="p-4 text-slate-muted text-center">No sales targets configured</p>}
        </div>
      )}
    </div>
  );
}

// ============================================
// MESSAGES TAB
// ============================================
function MessagesTab() {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchMessages = useCallback(() => {
    api.get('/messages').then(setMessages).catch(console.error).finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchMessages(); }, [fetchMessages]);

  const sendMessage = async () => {
    if (!newMsg.trim()) return;
    await api.post('/messages', { message: newMsg });
    setNewMsg('');
    fetchMessages();
  };

  const deleteMessage = async (id) => {
    await api.del(`/messages/${id}`);
    fetchMessages();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Messages</h2>
      <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
        <div className="space-y-3 max-h-96 overflow-y-auto mb-4">
          {messages.map((m) => (
            <div key={m.id} className="flex justify-between items-start bg-navy/30 rounded p-3">
              <div>
                <p className="text-white text-sm">{m.message}</p>
                <p className="text-slate-muted text-xs mt-1">{m.sender_name} - {new Date(m.created_at).toLocaleString()}</p>
              </div>
              <button onClick={() => deleteMessage(m.id)} className="text-red-400 hover:text-red-300 ml-2"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
          {messages.length === 0 && <p className="text-slate-muted text-center py-4">No messages yet</p>}
        </div>
        <div className="flex gap-2">
          <input value={newMsg} onChange={(e) => setNewMsg(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type a message..." className="flex-1 bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <button onClick={sendMessage} className="px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm">Send</button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// DOCUMENTS TAB
// ============================================
function DocumentsTab() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    api.get('/documents').then(setDocs).catch(console.error).finally(() => setLoading(false));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/documents', {
      type: form.type.value, name: form.name.value,
      description: form.description.value, filePath: form.filePath.value,
    });
    setShowCreate(false);
    api.get('/documents').then(setDocs);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this document?')) return;
    await api.del(`/documents/${id}`);
    api.get('/documents').then(setDocs);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Documents</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> Add Document</button>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">Name</th><th className="text-left p-3">Type</th>
              <th className="text-left p-3">User</th><th className="text-left p-3">Date</th><th className="text-left p-3">Actions</th>
            </tr></thead>
            <tbody>
              {docs.map((d) => (
                <tr key={d.id} className="border-t border-gold/10">
                  <td className="p-3 text-white">{d.name}</td>
                  <td className="p-3 text-slate-muted">{d.type}</td>
                  <td className="p-3 text-slate-muted">{d.user_name}</td>
                  <td className="p-3 text-slate-muted">{new Date(d.created_at).toLocaleDateString()}</td>
                  <td className="p-3"><button onClick={() => handleDelete(d.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {docs.length === 0 && <p className="p-4 text-slate-muted text-center">No documents</p>}
        </div>
      )}

      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="Add Document">
        <form onSubmit={handleCreate} className="space-y-3">
          <input name="name" required placeholder="Document Name" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <select name="type" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
            <option value="contract">Contract</option><option value="invoice">Invoice</option><option value="report">Report</option><option value="other">Other</option>
          </select>
          <textarea name="description" placeholder="Description" rows={2} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <input name="filePath" placeholder="File Path / URL" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Add Document</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// REMINDERS TAB
// ============================================
function RemindersTab() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    api.get('/reminders').then(setReminders).catch(console.error).finally(() => setLoading(false));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/reminders', {
      name: form.name.value, date: form.date.value,
      time: form.time.value || null, repeat: form.repeat.value,
    });
    setShowCreate(false);
    api.get('/reminders').then(setReminders);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this reminder?')) return;
    await api.del(`/reminders/${id}`);
    api.get('/reminders').then(setReminders);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Reminders</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New Reminder</button>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="space-y-2">
          {reminders.map((r) => (
            <div key={r.id} className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">{r.name}</h3>
                <p className="text-slate-muted text-sm">{r.date} {r.time ? `at ${r.time}` : ''}</p>
                {r.repeat && r.repeat !== 'one_time' && <p className="text-gold text-xs mt-1">Repeats: {r.repeat}</p>}
              </div>
              <button onClick={() => handleDelete(r.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
          {reminders.length === 0 && <p className="text-slate-muted text-center py-8">No reminders</p>}
        </div>
      )}

      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="New Reminder">
        <form onSubmit={handleCreate} className="space-y-3">
          <input name="name" required placeholder="Reminder Name" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <div className="grid grid-cols-2 gap-2">
            <input name="date" type="date" required className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
            <input name="time" type="time" className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          </div>
          <select name="repeat" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
            <option value="one_time">One Time</option><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option>
          </select>
          <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Create Reminder</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// KNOWLEDGE BASE TAB
// ============================================
function KnowledgeBaseTab() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    api.get('/knowledge-base').then(setArticles).catch(console.error).finally(() => setLoading(false));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/knowledge-base', {
      title: form.title.value, content: form.content.value,
      kbType: form.kbType.value, shareWith: form.shareWith.value,
    });
    setShowCreate(false);
    api.get('/knowledge-base').then(setArticles);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this article?')) return;
    await api.del(`/knowledge-base/${id}`);
    api.get('/knowledge-base').then(setArticles);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Knowledge Base</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New Article</button>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a) => (
            <div key={a.id} className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-white font-medium">{a.title}</h3>
                <button onClick={() => handleDelete(a.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
              </div>
              <p className="text-slate-muted text-xs mt-1">{a.kb_type}</p>
              {a.content && <p className="text-slate-muted text-sm mt-2 line-clamp-3">{a.content}</p>}
              <p className="text-slate-muted text-xs mt-2">{a.created_by_name} - {new Date(a.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
      {articles.length === 0 && !loading && <p className="text-slate-muted text-center py-8">No articles yet</p>}

      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="New Article">
        <form onSubmit={handleCreate} className="space-y-3">
          <input name="title" required placeholder="Title" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <select name="kbType" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
            <option value="knowledge_base">Knowledge Base</option><option value="policy">Policy</option><option value="procedure">Procedure</option><option value="faq">FAQ</option>
          </select>
          <textarea name="content" placeholder="Content" rows={5} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <select name="shareWith" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
            <option value="public">Public</option><option value="only_with">Specific Users</option>
          </select>
          <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Create Article</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// HOLIDAYS TAB
// ============================================
function HolidaysTab() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    api.get('/holidays').then(setHolidays).catch(console.error).finally(() => setLoading(false));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    await api.post('/holidays', {
      name: form.name.value, startDate: form.startDate.value,
      endDate: form.endDate.value, note: form.note.value,
    });
    setShowCreate(false);
    api.get('/holidays').then(setHolidays);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this holiday?')) return;
    await api.del(`/holidays/${id}`);
    api.get('/holidays').then(setHolidays);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Holidays</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New Holiday</button>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">Name</th><th className="text-left p-3">Start</th>
              <th className="text-left p-3">End</th><th className="text-left p-3">Note</th><th className="text-left p-3">Actions</th>
            </tr></thead>
            <tbody>
              {holidays.map((h) => (
                <tr key={h.id} className="border-t border-gold/10">
                  <td className="p-3 text-white font-medium">{h.name}</td>
                  <td className="p-3 text-slate-muted">{h.start_date}</td>
                  <td className="p-3 text-slate-muted">{h.end_date}</td>
                  <td className="p-3 text-slate-muted">{h.note || '-'}</td>
                  <td className="p-3"><button onClick={() => handleDelete(h.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {holidays.length === 0 && <p className="p-4 text-slate-muted text-center">No holidays configured</p>}
        </div>
      )}

      <Modal isOpen={showCreate} onClose={() => setShowCreate(false)} title="New Holiday">
        <form onSubmit={handleCreate} className="space-y-3">
          <input name="name" required placeholder="Holiday Name" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <div className="grid grid-cols-2 gap-2">
            <input name="startDate" type="date" required className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
            <input name="endDate" type="date" required className="bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          </div>
          <textarea name="note" placeholder="Note" rows={2} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
          <button type="submit" className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Create Holiday</button>
        </form>
      </Modal>
    </div>
  );
}

// ============================================
// SETTINGS TAB
// ============================================
function SettingsTab() {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.get('/settings').then(setSettings).catch(console.error).finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await api.put('/settings', settings);
    setSaving(false);
  };

  const updateSetting = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  if (loading) return <p className="text-slate-muted">Loading...</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Essentials Settings</h2>
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm disabled:opacity-50">
          <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
      <div className="bg-[#0d1b33] border border-gold/15 rounded-lg p-6 space-y-4">
        <div>
          <label className="text-slate-muted text-sm block mb-1">Company Name</label>
          <input value={settings.companyName || ''} onChange={(e) => updateSetting('companyName', e.target.value)} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="text-slate-muted text-sm block mb-1">Default Working Hours</label>
          <input value={settings.defaultWorkingHours || ''} onChange={(e) => updateSetting('defaultWorkingHours', e.target.value)} placeholder="e.g., 8" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="text-slate-muted text-sm block mb-1">Currency</label>
          <select value={settings.currency || 'USD'} onChange={(e) => updateSetting('currency', e.target.value)} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
            <option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option>
          </select>
        </div>
        <div>
          <label className="text-slate-muted text-sm block mb-1">Timezone</label>
          <input value={settings.timezone || ''} onChange={(e) => updateSetting('timezone', e.target.value)} placeholder="e.g., America/New_York" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN ESSENTIALS PAGE
// ============================================
export default function EssentialsPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderTab = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardTab />;
      case 'tasks': return <TasksTab />;
      case 'attendance': return <AttendanceTab />;
      case 'shifts': return <ShiftsTab />;
      case 'leaves': return <LeavesTab />;
      case 'payroll': return <PayrollTab />;
      case 'allowances': return <AllowancesTab />;
      case 'sales-targets': return <SalesTargetsTab />;
      case 'messages': return <MessagesTab />;
      case 'documents': return <DocumentsTab />;
      case 'reminders': return <RemindersTab />;
      case 'knowledge-base': return <KnowledgeBaseTab />;
      case 'holidays': return <HolidaysTab />;
      case 'settings': return <SettingsTab />;
      default: return <DashboardTab />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-white">Essentials</h1>
      </div>

      {/* Tab navigation */}
      <div className="border-b border-gold/15 overflow-x-auto">
        <div className="flex gap-1 min-w-max pb-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-t-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'bg-gold/10 text-gold border-b-2 border-gold' : 'text-slate-muted hover:text-white hover:bg-navy/30'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="min-h-[400px]">
        {renderTab()}
      </div>
    </div>
  );
}
