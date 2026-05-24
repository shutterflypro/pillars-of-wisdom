import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { customerApi } from '../lib/api';
import {
  Settings,
  User,
  Bell,
  AlertTriangle,
  Loader2,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';

export default function PortalSettings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [escalating, setEscalating] = useState(false);
  const [escalationMsg, setEscalationMsg] = useState('');
  const [escalationSent, setEscalationSent] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    industry: '',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    inApp: true,
  });

  useEffect(() => {
    customerApi.settings()
      .then((data) => {
        setSettings(data);
        setForm({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          companyName: data.companyName || '',
          industry: data.industry || '',
        });
        setNotifications(data.notifications || { email: true, sms: false, inApp: true });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');
    try {
      const updated = await customerApi.updateSettings(form);
      setSettings(updated);
      setSuccess('Settings saved successfully');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEscalate = async () => {
    if (escalationMsg.trim().length < 10) {
      setError('Please provide a detailed message (min 10 characters)');
      return;
    }
    setEscalating(true);
    setError('');
    try {
      await customerApi.escalate(escalationMsg);
      setEscalationSent(true);
      setEscalationMsg('');
    } catch (err) {
      setError(err.message);
    } finally {
      setEscalating(false);
    }
  };

  const industries = [
    'Real Estate',
    'Law Firm',
    'Medical Practice',
    'Insurance Agency',
    'Financial Advisory',
    'Mortgage Broker',
    'Coach/Consultant',
    'E-commerce',
    'Fitness Studio',
    'Home Services',
    'Car Dealership',
    'Staffing Agency',
    'Restaurant',
    'Salon/Spa',
    'Security Company',
    'Trucking/Logistics',
    'Construction',
    'Nonprofit',
    'Church',
    'Digital Creator',
    'Course Creator',
    'Agency',
    'Other',
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
      </div>
    );
  }

  if (!settings) return null;

  return (
    <div className="space-y-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-heading text-2xl font-bold text-white">Settings</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[2px] w-8 bg-gold" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <div className="h-[2px] w-8 bg-gold" />
        </div>
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <p className="text-red-400 text-sm">{error}</p>
        </motion.div>
      )}

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
          <p className="text-green-400 text-sm">{success}</p>
        </motion.div>
      )}

      {/* Profile */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
            <User className="w-5 h-5 text-gold" />
          </div>
          <h2 className="text-white font-semibold">Profile</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
              First Name
            </label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-muted uppercase tracking-wider mb-2">
              Industry
            </label>
            <select
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
              className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
            >
              <option value="">Select industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span className="text-slate-muted">Email:</span>
          <span className="text-white">{settings.email}</span>
          {settings.isVerified && (
            <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400">Verified</span>
          )}
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn-gold mt-6 inline-flex items-center gap-2 disabled:opacity-60"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Settings className="w-4 h-4" />}
          Save Changes
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
            <Bell className="w-5 h-5 text-gold" />
          </div>
          <h2 className="text-white font-semibold">Notifications</h2>
        </div>
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
            { key: 'sms', label: 'SMS Notifications', desc: 'Receive updates via text message' },
            { key: 'inApp', label: 'In-App Notifications', desc: 'Receive notifications in the portal' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">{item.label}</p>
                <p className="text-slate-muted text-xs">{item.desc}</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key] })}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  notifications[item.key] ? 'bg-gold' : 'bg-slate-muted/30'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                    notifications[item.key] ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Request Human Help */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-gold/15">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-gold" />
          </div>
          <h2 className="text-white font-semibold">Request Human Help</h2>
        </div>
        {escalationSent ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
            <p className="text-green-400 text-sm">Your request has been sent. We will respond within 24 hours.</p>
          </div>
        ) : (
          <div className="space-y-3">
            <textarea
              value={escalationMsg}
              onChange={(e) => setEscalationMsg(e.target.value)}
              placeholder="Describe your issue or question..."
              rows={4}
              className="w-full bg-[#0a1628] border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
            />
            <button
              onClick={handleEscalate}
              disabled={escalating}
              className="btn-gold inline-flex items-center gap-2 disabled:opacity-60"
            >
              {escalating ? <Loader2 className="w-4 h-4 animate-spin" /> : <MessageSquare className="w-4 h-4" />}
              Send Request
            </button>
          </div>
        )}
      </div>

      {/* Danger Zone */}
      <div className="bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl p-6 border border-red-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <h2 className="text-white font-semibold">Danger Zone</h2>
        </div>
        <p className="text-slate-muted text-sm mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button className="px-4 py-2 rounded-lg border border-red-500/50 text-red-400 text-sm hover:bg-red-500/10 transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  );
}
