import { useState, useEffect, useCallback } from 'react';
import {
  Users, Shield, Building2, Plus, Edit2, Trash2, Search, X, Save,
  ChevronLeft, ChevronRight, AlertTriangle, UserCheck, UserX,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// v2 - Permissions tab fix

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('pillars_token');
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
};

const api = {
  get: async (path) => {
    const res = await fetch(`${API_BASE}${path}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  post: async (path, body) => {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST', headers: getAuthHeaders(), body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  put: async (path, body) => {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'PUT', headers: getAuthHeaders(), body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
  del: async (path) => {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'DELETE', headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  },
};

function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  if (!isOpen) return null;
  const maxWidth = size === 'lg' ? 'max-w-3xl' : size === 'xl' ? 'max-w-6xl' : 'max-w-lg';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className={`bg-[#0d1b33] border border-gold/20 rounded-xl w-full ${maxWidth} max-h-[90vh] overflow-y-auto`}>
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

// ============================================
// PERFEX-STYLE PERMISSION EDITOR
// ============================================
function PermissionEditor({ permissions, onChange, disabled = false }) {
  const [permDefs, setPermDefs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/permissions/definitions')
      .then((data) => { setPermDefs(data); })
      .catch((err) => console.error('Failed to load permission definitions:', err))
      .finally(() => setLoading(false));
  }, []);

  const togglePerm = (feature, capability) => {
    if (disabled) return;
    const current = permissions[feature] || [];
    const updated = current.includes(capability)
      ? current.filter((c) => c !== capability)
      : [...current, capability];
    onChange({ ...permissions, [feature]: updated });
  };

  const toggleAllForFeature = (feature, caps) => {
    if (disabled) return;
    const current = permissions[feature] || [];
    const allSelected = caps.length > 0 && caps.every((c) => current.includes(c));
    if (allSelected) {
      const newPerms = { ...permissions };
      delete newPerms[feature];
      onChange(newPerms);
    } else {
      onChange({ ...permissions, [feature]: caps });
    }
  };

  if (loading) return <p className="text-slate-muted text-sm py-4">Loading permissions...</p>;

  const categoryLabels = {
    navigation: 'Navigation & Portal',
    administration: 'Administration',
    essentials: 'Essentials Module',
  };

  return (
    <div className="space-y-4">
      {Object.entries(permDefs).map(([category, features]) => (
        <div key={category} className="bg-navy/30 rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-navy/50 border-b border-gold/10">
            <h4 className="text-white font-medium text-sm capitalize">{categoryLabels[category] || category}</h4>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-navy/30 text-slate-muted text-xs">
              <tr>
                <th className="text-left p-2 w-48">Feature</th>
                <th className="text-left p-2">Capabilities</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => {
                const caps = f.capabilities || {};
                const current = permissions[f.feature] || [];
                const allSelected = Object.keys(caps).length > 0 && Object.keys(caps).every((c) => current.includes(c));

                return (
                  <tr key={f.feature} className="border-t border-gold/10 hover:bg-navy/20">
                    <td className="p-2 align-top">
                      <b className="text-white text-sm">{f.name}</b>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2 mb-2">
                        <button
                          onClick={() => toggleAllForFeature(f.feature, Object.keys(caps))}
                          disabled={disabled}
                          className={`text-xs px-2 py-0.5 rounded transition-colors ${
                            allSelected
                              ? 'bg-gold/20 text-gold hover:bg-gold/30'
                              : 'bg-navy/50 text-slate-muted hover:bg-navy'
                          } disabled:opacity-50`}
                        >
                          {allSelected ? 'Unselect All' : 'Select All'}
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {Object.entries(caps).map(([cap, label]) => (
                          <label key={cap} className={`flex items-center gap-1.5 text-xs cursor-pointer ${disabled ? 'opacity-50' : ''}`}>
                            <input
                              type="checkbox"
                              checked={current.includes(cap)}
                              onChange={() => togglePerm(f.feature, cap)}
                              disabled={disabled}
                              className="rounded border-gold/30 bg-navy/50 text-gold focus:ring-gold/30"
                            />
                            <span className="text-slate-muted">{label}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

// ============================================
// USERS TAB
// ============================================
function UsersTab() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showEdit, setShowEdit] = useState(null);
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const limit = 20;

  const fetchData = useCallback(() => {
    setLoading(true);
    Promise.all([
      api.get(`/permissions/users?search=${search}&limit=${limit}&offset=${page * limit}`),
      api.get('/permissions/roles'),
      api.get('/permissions/departments'),
    ]).then(([u, r, d]) => {
      setUsers(u.users || []);
      setTotal(u.total || 0);
      setRoles(r || []);
      setDepartments(d || []);
    }).catch((err) => {
      console.error('Failed to fetch data:', err);
      setUsers([]);
      setTotal(0);
      setRoles([]);
      setDepartments([]);
    }).finally(() => setLoading(false));
  }, [page, search, limit]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleUpdate = async (userId, updates) => {
    await api.put(`/permissions/users/${userId}`, updates);
    setShowEdit(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this user?')) return;
    await api.del(`/permissions/users/${id}`);
    fetchData();
  };

  const toggleAdmin = async (u) => {
    await api.put(`/permissions/users/${u.id}`, { isAdmin: !u.is_admin });
    fetchData();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Users</h2>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-muted" />
          <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(0); }} placeholder="Search users..." className="bg-[#0d1b33] border border-gold/15 rounded pl-8 pr-3 py-2 text-white text-sm w-48" />
        </div>
      </div>

      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">User</th><th className="text-left p-3">Role</th>
              <th className="text-left p-3">Departments</th><th className="text-left p-3">Admin</th>
              <th className="text-left p-3">Last Login</th><th className="text-left p-3">Actions</th>
            </tr></thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t border-gold/10 hover:bg-navy/30">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold">
                        {u.first_name?.[0]}{u.last_name?.[0]}
                      </div>
                      <div>
                        <p className="text-white">{u.first_name} {u.last_name}</p>
                        <p className="text-slate-muted text-xs">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-slate-muted">{u.role_name || <span className="text-slate-600">No role</span>}</td>
                  <td className="p-3">
                    <div className="flex gap-1 flex-wrap">
                      {u.departments?.map((d) => (
                        <span key={d.id} className="px-1.5 py-0.5 bg-navy/50 rounded text-xs text-slate-muted">{d.name}</span>
                      ))}
                      {!u.departments?.length && <span className="text-slate-600">-</span>}
                    </div>
                  </td>
                  <td className="p-3">
                    <button onClick={() => toggleAdmin(u)} className={`px-2 py-0.5 rounded text-xs ${u.is_admin ? 'bg-gold/20 text-gold' : 'bg-navy/50 text-slate-muted'}`}>
                      {u.is_admin ? 'Admin' : 'User'}
                    </button>
                  </td>
                  <td className="p-3 text-slate-muted text-xs">{u.last_login ? new Date(u.last_login).toLocaleDateString() : 'Never'}</td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      <button onClick={() => setShowEdit(u.id)} className="text-blue-400 hover:text-blue-300"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(u.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && <p className="p-4 text-slate-muted text-center">No users found</p>}
        </div>
      )}
      <Pagination page={page} total={total} limit={limit} onPageChange={setPage} />

      {showEdit && (
        <EditUserModal
          userId={showEdit}
          roles={roles}
          departments={departments}
          onSave={handleUpdate}
          onClose={() => setShowEdit(null)}
        />
      )}
    </div>
  );
}

// ============================================
// EDIT USER MODAL (Perfex-style: Profile + Permissions tabs)
// ============================================
function EditUserModal({ userId, roles, departments, onSave, onClose }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({});
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [userPerms, setUserPerms] = useState({});
  const [selectedRoleId, setSelectedRoleId] = useState(null);

  useEffect(() => {
    api.get(`/permissions/users/${userId}`).then((u) => {
      setUser(u);
      setFormData({
        firstName: u.first_name || '', lastName: u.last_name || '',
        email: u.email, isAdmin: u.is_admin, roleId: u.role_id,
        isContractor: u.is_contractor, hourlyRate: u.hourly_rate,
        phoneNumber: u.phone_number || '', emailSignature: u.email_signature || '',
      });
      setSelectedDepts(u.departments?.map((d) => ({ departmentId: d.id, isPrimary: d.is_primary })) || []);
      setUserPerms(u.individual_permissions || {});
      setSelectedRoleId(u.role_id);
    }).catch(console.error).finally(() => setLoading(false));
  }, [userId]);

  useEffect(() => {
    console.log('EditUserModal activeTab:', activeTab, 'isAdmin:', formData.isAdmin);
  }, [activeTab, formData.isAdmin]);

  const handleRoleChange = async (roleId) => {
    setSelectedRoleId(roleId);
    setFormData({ ...formData, roleId: roleId ? parseInt(roleId) : null });
    if (!roleId || formData.isAdmin) return;

    try {
      const rolePerms = await api.get(`/permissions/roles/${roleId}/permissions`);
      setUserPerms((prev) => {
        const merged = { ...rolePerms };
        for (const [feature, caps] of Object.entries(prev)) {
          merged[feature] = caps;
        }
        return merged;
      });
    } catch (err) {
      console.error('Failed to load role permissions:', err);
    }
  };

  const handleSave = async () => {
    await api.put(`/permissions/users/${userId}`, formData);
    if (selectedDepts.length > 0) {
      await api.put(`/permissions/users/${userId}/departments`, { departments: selectedDepts });
    }
    if (!formData.isAdmin) {
      await api.put(`/permissions/users/${userId}/permissions`, { permissions: userPerms });
    }
    onSave(userId, formData);
  };

  if (loading) return <Modal isOpen={true} onClose={onClose} title="Edit User"><p className="text-slate-muted">Loading...</p></Modal>;

  return (
    <Modal isOpen={true} onClose={onClose} title={`${user?.first_name} ${user?.last_name}`} size="xl">
      <div className="space-y-4">
        {/* Tabs */}
        <div className="flex gap-1 border-b border-gold/15">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'profile' ? 'text-gold border-b-2 border-gold' : 'text-slate-muted hover:text-white'}`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('permissions')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'permissions' ? 'text-gold border-b-2 border-gold' : 'text-slate-muted hover:text-white'}`}
          >
            Permissions
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-muted text-xs block mb-1">First Name</label>
                <input value={formData.firstName || ''} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
              </div>
              <div>
                <label className="text-slate-muted text-xs block mb-1">Last Name</label>
                <input value={formData.lastName || ''} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
              </div>
            </div>
            <div>
              <label className="text-slate-muted text-xs block mb-1">Email</label>
              <input value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-muted text-xs block mb-1">Role</label>
                <select value={formData.roleId || ''} onChange={(e) => handleRoleChange(e.target.value)} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
                  <option value="">No Role</option>
                  {roles.map((r) => <option key={r.id} value={r.id}>{r.name}{r.is_system ? ' (System)' : ''}</option>)}
                </select>
              </div>
              <div>
                <label className="text-slate-muted text-xs block mb-1">Phone</label>
                <input value={formData.phoneNumber || ''} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-muted text-xs block mb-1">Hourly Rate</label>
                <input type="number" step="0.01" value={formData.hourlyRate || ''} onChange={(e) => setFormData({ ...formData, hourlyRate: parseFloat(e.target.value) || null })} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
              </div>
              <div>
                <label className="text-slate-muted text-xs block mb-1">Departments</label>
                <div className="space-y-1 max-h-24 overflow-y-auto bg-navy/30 rounded p-2">
                  {departments.map((d) => (
                    <label key={d.id} className="flex items-center gap-2 text-sm text-slate-muted">
                      <input type="checkbox" checked={selectedDepts.some((sd) => sd.departmentId === d.id)} onChange={(e) => {
                        if (e.target.checked) setSelectedDepts([...selectedDepts, { departmentId: d.id, isPrimary: false }]);
                        else setSelectedDepts(selectedDepts.filter((sd) => sd.departmentId !== d.id));
                      }} className="rounded border-gold/30" />
                      {d.name}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-slate-muted cursor-pointer">
                <input type="checkbox" checked={formData.isAdmin || false} onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })} className="rounded border-gold/30" />
                <UserCheck className="w-3.5 h-3.5" /> Administrator
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-muted cursor-pointer">
                <input type="checkbox" checked={formData.isContractor || false} onChange={(e) => setFormData({ ...formData, isContractor: e.target.checked })} className="rounded border-gold/30" />
                <UserX className="w-3.5 h-3.5" /> Contractor
              </label>
            </div>
          </div>
        )}

        {activeTab === 'permissions' && (
          <div className="space-y-3">
            <div className="bg-navy/30 rounded-lg p-3">
              <label className="text-slate-muted text-sm block mb-1">Role</label>
              <select value={selectedRoleId || ''} onChange={(e) => handleRoleChange(e.target.value)} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm">
                <option value="">No Role</option>
                {roles.map((r) => <option key={r.id} value={r.id}>{r.name}{r.is_system ? ' (System)' : ''}</option>)}
              </select>
              <p className="text-slate-muted text-xs mt-1">
                {formData.isAdmin
                  ? 'Administrator has all permissions. Individual permissions are not applicable.'
                  : 'Select a role to load its permissions, then override specific capabilities below.'}
              </p>
            </div>

            {formData.isAdmin ? (
              <div className="bg-navy/30 rounded-lg p-8 text-center">
                <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-white font-medium">Administrator</p>
                <p className="text-slate-muted text-sm mt-1">All permissions are granted automatically</p>
              </div>
            ) : (
              <div>
                <PermissionEditor permissions={userPerms} onChange={setUserPerms} />
              </div>
            )}
          </div>
        )}

        {activeTab !== 'profile' && activeTab !== 'permissions' && (
          <p className="text-slate-muted text-center py-8">Unknown tab: {activeTab}</p>
        )}

        <div className="flex gap-2 pt-2 border-t border-gold/15">
          <button onClick={handleSave} className="flex-1 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium flex items-center justify-center gap-2"><Save className="w-4 h-4" /> Save Changes</button>
          <button onClick={onClose} className="px-4 py-2 bg-navy/50 text-slate-muted rounded-lg hover:bg-navy text-sm">Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

// ============================================
// ROLES TAB
// ============================================
function RolesTab() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    api.get('/permissions/roles')
      .then((data) => setRoles(data || []))
      .catch((err) => { console.error('Failed to fetch roles:', err); setRoles([]); })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleDelete = async (id) => {
    if (!confirm('Delete this role? Users assigned to this role will have their role unset.')) return;
    await api.del(`/permissions/roles/${id}`);
    fetchData();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Roles</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New Role</button>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((r) => (
            <div key={r.id} className="bg-[#0d1b33] border border-gold/15 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-medium">{r.name}</h3>
                  {r.description && <p className="text-slate-muted text-sm mt-1">{r.description}</p>}
                  {r.is_system && <span className="text-xs text-gold mt-1 inline-block px-1.5 py-0.5 bg-gold/10 rounded">System Role</span>}
                </div>
                <div className="flex gap-1">
                  <button onClick={() => setShowEdit(r.id)} className="text-blue-400 hover:text-blue-300"><Edit2 className="w-4 h-4" /></button>
                  {!r.is_system && (
                    <button onClick={() => handleDelete(r.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-slate-muted text-xs mb-1">Permissions:</p>
                <div className="flex flex-wrap gap-1">
                  {Object.entries(r.permissions || {}).slice(0, 6).map(([feature, caps]) => (
                    <span key={feature} className="px-1.5 py-0.5 bg-navy/50 rounded text-xs text-slate-muted">{feature} ({caps.length})</span>
                  ))}
                  {Object.keys(r.permissions || {}).length > 6 && (
                    <span className="px-1.5 py-0.5 bg-navy/50 rounded text-xs text-slate-muted">+{Object.keys(r.permissions).length - 6} more</span>
                  )}
                  {Object.keys(r.permissions || {}).length === 0 && (
                    <span className="text-slate-600 text-xs">{r.is_system ? 'All permissions (admin)' : 'No permissions'}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {roles.length === 0 && !loading && <p className="text-slate-muted text-center py-8">No roles defined</p>}

      {showCreate && <RoleFormModal onSave={() => { setShowCreate(false); fetchData(); }} onClose={() => setShowCreate(false)} />}
      {showEdit && <RoleFormModal roleId={showEdit} onSave={() => { setShowEdit(null); fetchData(); }} onClose={() => setShowEdit(null)} />}
    </div>
  );
}

// ============================================
// ROLE FORM MODAL
// ============================================
function RoleFormModal({ roleId, onSave, onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [permissions, setPermissions] = useState({});
  const [roleUsers, setRoleUsers] = useState([]);
  const [propagateToUsers, setPropagateToUsers] = useState(false);
  const [loading, setLoading] = useState(!!roleId);

  useEffect(() => {
    if (roleId) {
      Promise.all([
        api.get(`/permissions/roles/${roleId}`),
        api.get(`/permissions/roles/${roleId}/users`),
      ]).then(([r, users]) => {
        setName(r.name); setDescription(r.description || ''); setPermissions(r.permissions || {}); setRoleUsers(users || []);
      }).catch(console.error).finally(() => setLoading(false));
    }
  }, [roleId]);

  const handleSave = async () => {
    if (roleId) {
      await api.put(`/permissions/roles/${roleId}`, { name, description, permissions, propagateToUsers });
    } else {
      await api.post('/permissions/roles', { name, description, permissions });
    }
    onSave();
  };

  if (loading) return <Modal isOpen={true} onClose={onClose} title={roleId ? 'Edit Role' : 'New Role'}><p className="text-slate-muted">Loading...</p></Modal>;

  return (
    <Modal isOpen={true} onClose={onClose} title={roleId ? 'Edit Role' : 'New Role'} size="xl">
      <div className="space-y-4">
        <div>
          <label className="text-slate-muted text-xs block mb-1">Role Name *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Sales Manager" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
        </div>
        <div>
          <label className="text-slate-muted text-xs block mb-1">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe what this role can do..." rows={2} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
        </div>

        {roleId && roleUsers.length > 0 && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-yellow-300 text-sm font-medium">{roleUsers.length} user(s) are using this role</p>
                <p className="text-slate-muted text-xs mt-0.5">Changes will only affect new users assigned to this role.</p>
                <label className="flex items-center gap-2 mt-2 text-sm text-yellow-300 cursor-pointer">
                  <input type="checkbox" checked={propagateToUsers} onChange={(e) => setPropagateToUsers(e.target.checked)} className="rounded border-yellow-500/30" />
                  Update permissions for all {roleUsers.length} users with this role
                </label>
              </div>
            </div>
          </div>
        )}

        <PermissionEditor permissions={permissions} onChange={setPermissions} />

        {roleId && roleUsers.length > 0 && (
          <div className="bg-navy/30 rounded-lg p-4">
            <h4 className="text-white text-sm font-medium mb-3">Users with this role ({roleUsers.length})</h4>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {roleUsers.map((u) => (
                <div key={u.id} className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold">
                    {u.first_name?.[0]}{u.last_name?.[0]}
                  </div>
                  <span className="text-slate-muted">{u.first_name} {u.last_name}</span>
                  <span className="text-slate-600 text-xs">({u.email})</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button onClick={handleSave} className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium flex items-center justify-center gap-2"><Save className="w-4 h-4" /> Save Role</button>
      </div>
    </Modal>
  );
}

// ============================================
// DEPARTMENTS TAB
// ============================================
function DepartmentsTab() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(null);
  const [showUsers, setShowUsers] = useState(null);
  const [deptUsers, setDeptUsers] = useState([]);

  const fetchData = useCallback(() => {
    api.get('/permissions/departments')
      .then((data) => setDepartments(data || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleDelete = async (id) => {
    if (!confirm('Delete this department? Users will be unassigned.')) return;
    await api.del(`/permissions/departments/${id}`);
    fetchData();
  };

  const viewUsers = async (id) => {
    const users = await api.get(`/permissions/departments/${id}/users`);
    setDeptUsers(users || []);
    setShowUsers(id);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Departments</h2>
        <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-3 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm"><Plus className="w-4 h-4" /> New Department</button>
      </div>
      {loading ? <p className="text-slate-muted">Loading...</p> : (
        <div className="bg-[#0d1b33] border border-gold/15 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy/50 text-slate-muted"><tr>
              <th className="text-left p-3">Name</th><th className="text-left p-3">Description</th>
              <th className="text-left p-3">Email</th><th className="text-left p-3">Actions</th>
            </tr></thead>
            <tbody>
              {departments.map((d) => (
                <tr key={d.id} className="border-t border-gold/10 hover:bg-navy/30">
                  <td className="p-3 text-white font-medium">{d.name}</td>
                  <td className="p-3 text-slate-muted">{d.description || '-'}</td>
                  <td className="p-3 text-slate-muted">{d.email || '-'}</td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      <button onClick={() => viewUsers(d.id)} className="text-gold hover:text-gold/80" title="View Users"><Users className="w-4 h-4" /></button>
                      <button onClick={() => setShowEdit(d.id)} className="text-blue-400 hover:text-blue-300"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(d.id)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {departments.length === 0 && <p className="p-4 text-slate-muted text-center">No departments</p>}
        </div>
      )}

      {showCreate && <DepartmentFormModal onSave={() => { setShowCreate(false); fetchData(); }} onClose={() => setShowCreate(false)} />}
      {showEdit && <DepartmentFormModal deptId={showEdit} onSave={() => { setShowEdit(null); fetchData(); }} onClose={() => setShowEdit(null)} />}
      {showUsers && <Modal isOpen={true} onClose={() => setShowUsers(null)} title="Department Users">
        <div className="space-y-2">
          {deptUsers.map((u) => (
            <div key={u.id} className="flex items-center gap-3 bg-navy/30 rounded p-3">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold">
                {u.first_name?.[0]}{u.last_name?.[0]}
              </div>
              <div>
                <p className="text-white text-sm">{u.first_name} {u.last_name}</p>
                <p className="text-slate-muted text-xs">{u.email} {u.is_admin && <span className="text-gold">(Admin)</span>}</p>
              </div>
            </div>
          ))}
          {deptUsers.length === 0 && <p className="text-slate-muted text-center py-4">No users in this department</p>}
        </div>
      </Modal>}
    </div>
  );
}

function DepartmentFormModal({ deptId, onSave, onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(!!deptId);

  useEffect(() => {
    if (deptId) {
      api.get(`/permissions/departments/${deptId}`).then((d) => {
        setName(d.name); setDescription(d.description || ''); setEmail(d.email || '');
      }).catch(console.error).finally(() => setLoading(false));
    }
  }, [deptId]);

  const handleSave = async () => {
    if (deptId) {
      await api.put(`/permissions/departments/${deptId}`, { name, description, email });
    } else {
      await api.post('/permissions/departments', { name, description, email });
    }
    onSave();
  };

  if (loading) return <Modal isOpen={true} onClose={onClose} title={deptId ? 'Edit Department' : 'New Department'}><p className="text-slate-muted">Loading...</p></Modal>;

  return (
    <Modal isOpen={true} onClose={onClose} title={deptId ? 'Edit Department' : 'New Department'}>
      <div className="space-y-3">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Department Name" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" rows={2} className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Department Email" type="email" className="w-full bg-navy/50 border border-gold/15 rounded px-3 py-2 text-white text-sm" />
        <button onClick={handleSave} className="w-full py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 text-sm font-medium">Save</button>
      </div>
    </Modal>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function PermissionsPage() {
  const [activeTab, setActiveTab] = useState('users');

  const tabs = [
    { id: 'users', label: 'Users', icon: Users },
    { id: 'roles', label: 'Roles', icon: Shield },
    { id: 'departments', label: 'Departments', icon: Building2 },
  ];

  const renderTab = () => {
    switch (activeTab) {
      case 'users': return <UsersTab />;
      case 'roles': return <RolesTab />;
      case 'departments': return <DepartmentsTab />;
      default: return <UsersTab />;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Access Control</h1>

      <div className="border-b border-gold/15">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-sm font-medium transition-colors ${
                activeTab === tab.id ? 'bg-gold/10 text-gold border-b-2 border-gold' : 'text-slate-muted hover:text-white hover:bg-navy/30'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {renderTab()}
    </div>
  );
}
