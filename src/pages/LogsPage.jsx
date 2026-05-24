import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { logsApi } from '../lib/api';
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  LogIn,
  LogOut,
  MousePointerClick,
  Loader2,
  AlertCircle,
  X,
  Clock,
} from 'lucide-react';

const categoryColors = {
  auth: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  action: 'bg-gold/10 text-gold border-gold/20',
  security: 'bg-red-500/20 text-red-400 border-red-500/30',
};

const eventIcons = {
  'login.success': LogIn,
  'login.failed': AlertTriangle,
  'login.locked': AlertTriangle,
  'login.failed_unknown': AlertTriangle,
  'login.invalid_email': AlertCircle,
  'login.disposable_email': AlertCircle,
  'register.success': CheckCircle2,
  'logout': LogOut,
};

const defaultIcon = MousePointerClick;

export default function LogsPage() {
  const [events, setEvents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [eventType, setEventType] = useState('');
  const [page, setPage] = useState(0);
  const [eventTypes, setEventTypes] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const pageSize = 50;

  const fetchEvents = useCallback(() => {
    setLoading(true);
    logsApi.events({
      search: search || undefined,
      category: category || undefined,
      eventType: eventType || undefined,
      limit: pageSize,
      offset: page * pageSize,
    })
      .then((data) => {
        setEvents(data.events);
        setTotal(data.total);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [search, category, eventType, page]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    logsApi.eventTypes().then(setEventTypes).catch(() => {});
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(0);
    fetchEvents();
  };

  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setEventType('');
    setPage(0);
  };

  const totalPages = Math.ceil(total / pageSize);
  const hasFilters = search || category || eventType;

  if (loading && events.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
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
        <h1 className="font-heading text-2xl font-bold text-white">Activity Logs</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[2px] w-8 bg-gold" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <div className="h-[2px] w-8 bg-gold" />
        </div>
        <p className="text-slate-muted text-sm mt-2">Track all user activity, login attempts, and system events</p>
      </motion.div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-xl p-4 border border-gold/15">
          <p className="text-slate-muted text-xs uppercase tracking-wider">Total Events</p>
          <p className="text-white text-2xl font-bold mt-1">{total.toLocaleString()}</p>
        </div>
        <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-xl p-4 border border-gold/15">
          <p className="text-slate-muted text-xs uppercase tracking-wider">Auth Events</p>
          <p className="text-blue-400 text-2xl font-bold mt-1">
            {eventTypes.filter(e => e.event_category === 'auth').reduce((sum, e) => sum + parseInt(e.count || 0), 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-xl p-4 border border-gold/15">
          <p className="text-slate-muted text-xs uppercase tracking-wider">Failed Logins</p>
          <p className="text-red-400 text-2xl font-bold mt-1">
            {eventTypes.filter(e => e.event_type?.includes('failed') || e.event_type?.includes('locked')).reduce((sum, e) => sum + parseInt(e.count || 0), 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-xl p-4 border border-gold/15">
          <p className="text-slate-muted text-xs uppercase tracking-wider">Actions</p>
          <p className="text-gold text-2xl font-bold mt-1">
            {eventTypes.filter(e => e.event_category === 'action').reduce((sum, e) => sum + parseInt(e.count || 0), 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Search and filters */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-4 border border-gold/15">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search logs... (event type, description, IP, details)"
              className="w-full bg-[#0a1628] border border-gold/20 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 text-sm"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50"
          >
            <option value="">All Categories</option>
            <option value="auth">Auth</option>
            <option value="action">Actions</option>
            <option value="security">Security</option>
          </select>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="bg-[#0a1628] border border-gold/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50"
          >
            <option value="">All Events</option>
            {eventTypes.map((et) => (
              <option key={et.event_type} value={et.event_type}>{et.event_type}</option>
            ))}
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

      {/* Events table */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl border border-gold/15 overflow-hidden">
        {events.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider">Time</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider">User</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider">Event</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider hidden md:table-cell">Description</th>
                    <th className="text-left py-3 px-4 text-slate-muted text-xs uppercase tracking-wider hidden lg:table-cell">IP</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => {
                    const Icon = eventIcons[event.eventType] || defaultIcon;
                    const isFailure = event.eventType?.includes('failed') || event.eventType?.includes('locked') || event.eventType?.includes('invalid') || event.eventType?.includes('disposable');
                    return (
                      <tr
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className={`border-b border-gold/10 last:border-0 cursor-pointer transition-colors ${
                          isFailure ? 'bg-red-500/5 hover:bg-red-500/10' : 'hover:bg-gold/5'
                        }`}
                      >
                        <td className="py-3 px-4 text-slate-300 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-slate-muted" />
                            {new Date(event.createdAt).toLocaleString()}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-white text-sm">{event.userName}</p>
                            <p className="text-slate-muted text-xs">{event.userEmail}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${isFailure ? 'text-red-400' : 'text-gold'}`} />
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${categoryColors[event.category] || 'bg-slate-500/20 text-slate-400 border-slate-500/30'}`}>
                              {event.eventType}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-300 hidden md:table-cell max-w-xs truncate">
                          {event.description}
                        </td>
                        <td className="py-3 px-4 text-slate-muted font-mono text-xs hidden lg:table-cell">
                          {event.ipAddress || '-'}
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
                <span className="text-white text-sm px-3">
                  Page {page + 1} of {totalPages || 1}
                </span>
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
            <Filter className="w-12 h-12 text-gold/40 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">No events found</h3>
            <p className="text-slate-muted text-sm">
              {hasFilters ? 'Try adjusting your search filters' : 'Events will appear here as users interact with the system'}
            </p>
          </div>
        )}
      </div>

      {/* Event detail modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelectedEvent(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[rgba(15,29,50,0.95)] backdrop-blur-[12px] rounded-2xl border border-gold/20 max-w-lg w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Event Details</h3>
                <button onClick={() => setSelectedEvent(null)} className="text-slate-muted hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Event Type</p>
                  <p className="text-white font-medium">{selectedEvent.eventType}</p>
                </div>
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Category</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border mt-1 ${categoryColors[selectedEvent.category] || ''}`}>
                    {selectedEvent.category}
                  </span>
                </div>
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">User</p>
                  <p className="text-white">{selectedEvent.userName}</p>
                  <p className="text-slate-muted text-sm">{selectedEvent.userEmail}</p>
                </div>
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Description</p>
                  <p className="text-slate-300">{selectedEvent.description}</p>
                </div>
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">IP Address</p>
                  <p className="text-slate-300 font-mono">{selectedEvent.ipAddress || 'Unknown'}</p>
                </div>
                <div>
                  <p className="text-slate-muted text-xs uppercase tracking-wider">Timestamp</p>
                  <p className="text-slate-300">{new Date(selectedEvent.createdAt).toLocaleString()}</p>
                </div>
                {selectedEvent.userAgent && (
                  <div>
                    <p className="text-slate-muted text-xs uppercase tracking-wider">User Agent</p>
                    <p className="text-slate-300 text-xs font-mono break-all">{selectedEvent.userAgent}</p>
                  </div>
                )}
                {selectedEvent.details && (
                  <div>
                    <p className="text-slate-muted text-xs uppercase tracking-wider">Details</p>
                    <pre className="bg-[#0a1628] rounded-lg p-3 text-xs text-slate-300 font-mono overflow-x-auto mt-1">
                      {JSON.stringify(selectedEvent.details, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
