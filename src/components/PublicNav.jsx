import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Calendar, LogIn, User, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { label: 'PLATFORM', href: '/platform' },
  { label: 'MODULES', href: '/modules' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'AI', href: '/ai' },
  { label: 'SECURITY', href: '/security' },
  { label: 'ENTERPRISE', href: '/enterprise' },
  { label: 'CONTACT', href: '/contact' },
]

export default function PublicNav() {
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_2px_24px_rgba(10,22,40,0.10)] border-b border-gray-100'
          : 'bg-white border-b border-gray-100/80'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-[72px] gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            {/* Logo image */}
            <img
              src="/images/logo2.png"
              alt="Pillars of Wisdom"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-tight hidden xl:block">
              <div className="font-heading text-[1rem] font-bold text-navy tracking-tight leading-none">
                PILLARS OF WISDOM
              </div>
              <div className="text-[0.58rem] font-body font-semibold text-gold tracking-[0.22em] uppercase mt-0.5">
                AUTOMATION GROUP
              </div>
              <div className="text-[0.5rem] font-body text-slate tracking-[0.15em] uppercase">
                Automate · Innovate · Elevate · Empower
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={handleClick}
                className="text-[0.68rem] font-bold text-navy/70 hover:text-navy transition-colors tracking-[0.08em] nav-link-underline px-2 xl:px-3"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth / CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 flex-wrap justify-end">
            {isAuthenticated ? (
              <>
                <Link
                  to="/portal"
                  className="text-navy/70 hover:text-gold transition-colors text-[0.65rem] font-bold tracking-[0.08em] uppercase"
                >
                  PORTAL
                </Link>
                <div className="w-px h-4 bg-gray-200" />
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-navy/70 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="p-1.5 text-navy/70 hover:text-gold transition-colors"
                title="Sign In"
              >
                <LogIn className="w-4 h-4" />
              </Link>
            )}
            <Link
              to="/contact"
              className="btn-gold flex items-center gap-2 shadow-sm hover:shadow-md text-[0.68rem] px-3 py-2 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              BOOK STRATEGY SESSION
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-navy rounded-md hover:bg-gray-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-site py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={handleClick}
                className="block text-[0.75rem] font-bold text-navy/70 hover:text-navy tracking-[0.1em] py-3 border-b border-gray-50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-b border-gray-50 py-3">
              {isAuthenticated ? (
                <div className="space-y-3">
                  <Link
                    to="/portal"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 text-navy/70 hover:text-gold transition-colors text-[0.75rem] font-bold tracking-[0.1em]"
                  >
                    <User className="w-4 h-4" />
                    CUSTOMER PORTAL
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false); }}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors text-[0.75rem] font-bold tracking-[0.1em]"
                  >
                    <LogOut className="w-4 h-4" />
                    LOGOUT
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-navy/70 hover:text-gold transition-colors text-[0.75rem] font-bold tracking-[0.1em]"
                >
                  <LogIn className="w-4 h-4" />
                  SIGN IN
                </Link>
              )}
            </div>
            <div className="pt-4">
              <Link
                to="/contact"
                className="btn-gold w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                BOOK STRATEGY SESSION
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
