import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  BookOpen,
  GitBranch,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  MessageCircle,
  FileText,
  Briefcase,
  Users,
  Target,
  Megaphone,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/portal', icon: LayoutDashboard },
  { label: 'Onboarding', href: '/portal/onboarding', icon: BookOpen },
  { label: 'Users', href: '/portal/users', icon: Users },
  { label: 'Essentials', href: '/portal/essentials', icon: Briefcase },
  { label: 'CRM', href: '/portal/crm', icon: Target },
  { label: 'Marketing', href: '/portal/marketing', icon: Megaphone },
  { label: 'Workflows', href: '/portal/workflows', icon: GitBranch },
  { label: 'Billing', href: '/portal/billing', icon: CreditCard },
  { label: 'Logs', href: '/portal/logs', icon: FileText },
  { label: 'Settings', href: '/portal/settings', icon: Settings },
];

export default function PortalLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const initials = user ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() : '?';

  return (
    <div className="min-h-screen bg-navy">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-gold/15 h-16">
        <div className="flex items-center justify-between h-full px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 text-slate-muted hover:text-gold transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="26" width="24" height="3" rx="1.5" fill="#c89b3c"/>
                  <rect x="3" y="4" width="26" height="3" rx="1.5" fill="#c89b3c"/>
                  <rect x="7" y="7" width="3" height="19" rx="1.5" fill="#c89b3c"/>
                  <rect x="14.5" y="7" width="3" height="19" rx="1.5" fill="#c89b3c"/>
                  <rect x="22" y="7" width="3" height="19" rx="1.5" fill="#c89b3c"/>
                </svg>
              </div>
              <span className="font-heading text-sm font-bold text-white hidden sm:block">Pillars Portal</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/portal/avatar')}
              className="hidden sm:flex items-center gap-2 text-slate-muted hover:text-gold transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              AI Avatar
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                {initials}
              </div>
              <span className="text-white text-sm hidden sm:block">{user?.firstName || 'User'}</span>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-slate-muted hover:text-gold transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 z-40 w-64 bg-[#0a1628] border-r border-gold/15 transform transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gold/10 text-gold border-l-2 border-gold'
                    : 'text-slate-muted hover:text-white hover:bg-navy-muted'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gold/15">
          <div className="text-xs text-slate-muted">
            <p className="font-semibold text-slate-400">{user?.companyName || 'Company'}</p>
            <p className="mt-1">{user?.email}</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
