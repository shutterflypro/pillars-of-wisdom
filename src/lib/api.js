const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';

export async function api(path, options = {}) {
  const token = localStorage.getItem('pillars_token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  if (res.status === 401) {
    const data = await res.json().catch(() => ({}));
    if (data.tokenExpired) {
      localStorage.removeItem('pillars_token');
      localStorage.removeItem('pillars_user');
      window.location.href = '/login';
    }
    throw new Error('Authentication required');
  }

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Request failed');
  }

  return data;
}

export const authApi = {
  login: (email, password) =>
    api('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),

  register: (data) =>
    api('/auth/register', { method: 'POST', body: JSON.stringify(data) }),

  logout: () =>
    api('/auth/logout', { method: 'POST' }),

  me: () =>
    api('/auth/me'),
};

export const customerApi = {
  dashboard: () =>
    api('/customer/dashboard'),

  onboarding: () =>
    api('/customer/onboarding'),

  advanceOnboarding: (caseId, checklistItem, formData) =>
    api('/customer/onboarding/advance', {
      method: 'POST',
      body: JSON.stringify({ caseId, checklistItem, formData }),
    }),

  saveOnboardingForm: (caseId, checklistItem, formData) =>
    api('/customer/onboarding/save', {
      method: 'POST',
      body: JSON.stringify({ caseId, checklistItem, formData }),
    }),

  workflows: () =>
    api('/customer/workflows'),

  billing: () =>
    api('/customer/billing'),

  settings: () =>
    api('/customer/settings'),

  updateSettings: (data) =>
    api('/customer/settings', { method: 'PUT', body: JSON.stringify(data) }),

  escalate: (message) =>
    api('/customer/escalate', { method: 'POST', body: JSON.stringify({ message }) }),
};

export const avatarApi = {
  chat: (message, sessionId) =>
    api('/avatar/chat', {
      method: 'POST',
      body: JSON.stringify({ message, sessionId }),
    }),
};

export const logsApi = {
  events: (params = {}) => {
    const qs = new URLSearchParams();
    if (params.search) qs.set('search', params.search);
    if (params.eventType) qs.set('eventType', params.eventType);
    if (params.category) qs.set('category', params.category);
    if (params.startDate) qs.set('startDate', params.startDate);
    if (params.endDate) qs.set('endDate', params.endDate);
    if (params.limit) qs.set('limit', params.limit);
    if (params.offset) qs.set('offset', params.offset);
    return api(`/logs/events?${qs.toString()}`);
  },
  createEvent: (data) =>
    api('/logs/events', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  eventTypes: () => api('/logs/event-types'),
  stats: () => api('/logs/stats'),
};

export const onboardingMgmtApi = {
  listCases: (params = {}) => {
    const qs = new URLSearchParams();
    if (params.search) qs.set('search', params.search);
    if (params.stage) qs.set('stage', params.stage);
    if (params.status) qs.set('status', params.status);
    if (params.assignedTo) qs.set('assignedTo', params.assignedTo);
    if (params.limit) qs.set('limit', params.limit);
    if (params.offset) qs.set('offset', params.offset);
    return api(`/onboarding-mgmt/cases?${qs.toString()}`);
  },
  getCase: (caseId) => api(`/onboarding-mgmt/cases/${caseId}`),
  createCase: (data) =>
    api('/onboarding-mgmt/cases', { method: 'POST', body: JSON.stringify(data) }),
  updateCase: (caseId, data) =>
    api(`/onboarding-mgmt/cases/${caseId}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteCase: (caseId) =>
    api(`/onboarding-mgmt/cases/${caseId}`, { method: 'DELETE' }),
  completeStep: (caseId, stepId, data) =>
    api(`/onboarding-mgmt/cases/${caseId}/steps/${stepId}/complete`, { method: 'POST', body: JSON.stringify({ data }) }),
  uncompleteStep: (caseId, stepId) =>
    api(`/onboarding-mgmt/cases/${caseId}/steps/${stepId}/uncomplete`, { method: 'POST' }),
  addDocument: (caseId, data) =>
    api(`/onboarding-mgmt/cases/${caseId}/documents`, { method: 'POST', body: JSON.stringify(data) }),
  updateDocument: (caseId, docId, data) =>
    api(`/onboarding-mgmt/cases/${caseId}/documents/${docId}`, { method: 'PUT', body: JSON.stringify(data) }),
  addInteraction: (caseId, data) =>
    api(`/onboarding-mgmt/cases/${caseId}/interactions`, { method: 'POST', body: JSON.stringify(data) }),
  stats: () => api('/onboarding-mgmt/stats'),
};
