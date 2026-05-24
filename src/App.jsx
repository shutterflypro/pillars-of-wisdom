import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import { logsApi } from './lib/api.js'

function NavigationTracker() {
  const location = useLocation()
  const { user } = useAuth()

  useEffect(() => {
    if (user && location.pathname.startsWith('/portal')) {
      logsApi.createEvent({
        eventType: 'navigation',
        category: 'action',
        description: `Navigated to ${location.pathname}`,
        details: { path: location.pathname, search: location.search },
      }).catch(() => {})
    }
  }, [location, user])

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
import PublicNav from './components/PublicNav.jsx'
import PublicFooter from './components/PublicFooter.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PortalLayout from './components/PortalLayout.jsx'
import Home from './pages/Home.jsx'
import PlatformPage from './pages/PlatformPage.jsx'
import ModulesPage from './pages/ModulesPage.jsx'
import IndustriesPage from './pages/IndustriesPage.jsx'
import IndustryPage from './pages/IndustryPage.jsx'
import AIPage from './pages/AIPage.jsx'
import EnterprisePage from './pages/EnterprisePage.jsx'
import PricingPage from './pages/PricingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import SupportPage from './pages/SupportPage.jsx'
import SecurityPage from './pages/SecurityPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import DisclaimerPage from './pages/DisclaimerPage.jsx'
import BillingPage from './pages/BillingPage.jsx'
import UnifiedHubPage from './pages/UnifiedHubPage.jsx'
import AutomationPage from './pages/AutomationPage.jsx'
import AdaptiveIntelligencePage from './pages/AdaptiveIntelligencePage.jsx'
import ScalableGrowthPage from './pages/ScalableGrowthPage.jsx'
import OperationalFoundationPage from './pages/OperationalFoundationPage.jsx'
import AIOrchestrationPage from './pages/AIOrchestrationPage.jsx'
import SovereignInfrastructurePage from './pages/SovereignInfrastructurePage.jsx'
import HowPillarsWorkPage from './pages/HowPillarsWorkPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import CustomerPortal from './pages/CustomerPortal.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'
import WorkflowsPage from './pages/WorkflowsPage.jsx'
import PortalBilling from './pages/PortalBilling.jsx'
import PortalSettings from './pages/PortalSettings.jsx'
import AvatarPage from './pages/AvatarPage.jsx'
import LogsPage from './pages/LogsPage.jsx'
import EssentialsPage from './pages/EssentialsPage.jsx'
import PermissionsPage from './pages/PermissionsPage.jsx'
import CRMPage from './pages/CRMPage.jsx'
import MarketingPage from './pages/MarketingPage.jsx'
import BlockchainInfrastructurePage from './pages/BlockchainInfrastructurePage.jsx'
import MortgageOperationsPage from './pages/MortgageOperationsPage.jsx'
import RegulatedOperationsPage from './pages/RegulatedOperationsPage.jsx'
import AssetLifecyclePage from './pages/AssetLifecyclePage.jsx'
import DigitalAssetInfrastructurePage from './pages/DigitalAssetInfrastructurePage.jsx'
import MortgageWorkflowPage from './pages/MortgageWorkflowPage.jsx'
import LoanIntakePage from './pages/LoanIntakePage.jsx'
import UnderwritingPage from './pages/UnderwritingPage.jsx'
import ComplianceMonitoringPage from './pages/ComplianceMonitoringPage.jsx'
import AuditReportingPage from './pages/AuditReportingPage.jsx'
import IndustryCapabilityPage from './pages/IndustryCapabilityPage.jsx'
import AISupportWidget from './components/AISupportWidget.jsx'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationTracker />
        <ScrollToTop />
        <Routes>
          {/* Public routes with nav/footer */}
          <Route path="/login" element={<LoginPage />} />

          {/* Portal routes (protected, no public nav/footer) */}
          <Route path="/portal" element={
            <ProtectedRoute>
              <PortalLayout>
                <CustomerPortal />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/onboarding" element={
            <ProtectedRoute>
              <PortalLayout>
                <OnboardingPage />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/users" element={
            <ProtectedRoute>
              <PortalLayout>
                <PermissionsPage />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/workflows" element={
            <ProtectedRoute>
              <PortalLayout>
                <WorkflowsPage />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/billing" element={
            <ProtectedRoute>
              <PortalLayout>
                <PortalBilling />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/settings" element={
            <ProtectedRoute>
              <PortalLayout>
                <PortalSettings />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/avatar" element={
            <ProtectedRoute>
              <PortalLayout>
                <AvatarPage />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/logs" element={
            <ProtectedRoute>
              <PortalLayout>
                <LogsPage />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/essentials" element={
            <ProtectedRoute>
              <PortalLayout>
                <EssentialsPage />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/crm" element={
            <ProtectedRoute>
              <PortalLayout>
                <CRMPage />
              </PortalLayout>
            </ProtectedRoute>
          } />
          <Route path="/portal/marketing" element={
            <ProtectedRoute>
              <PortalLayout>
                <MarketingPage />
              </PortalLayout>
            </ProtectedRoute>
          } />

          {/* Public marketing site */}
          <Route path="/*" element={
            <div className="min-h-screen bg-cream font-body text-navy antialiased">
              <PublicNav />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/platform" element={<PlatformPage />} />
                  <Route path="/modules" element={<ModulesPage />} />
                  <Route path="/industries" element={<IndustriesPage />} />
                  <Route path="/industries/:slug" element={<IndustryPage />} />
                  <Route path="/industries/:industrySlug/:capabilitySlug" element={<IndustryCapabilityPage />} />
                  <Route path="/ai" element={<AIPage />} />
                  <Route path="/enterprise" element={<EnterprisePage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/security" element={<SecurityPage />} />
                  <Route path="/operational-foundation" element={<OperationalFoundationPage />} />
                  <Route path="/ai-orchestration" element={<AIOrchestrationPage />} />
                  <Route path="/sovereign-infrastructure" element={<SovereignInfrastructurePage />} />
                  <Route path="/how-pillars-work" element={<HowPillarsWorkPage />} />
                  <Route path="/unified-hub" element={<UnifiedHubPage />} />
                  <Route path="/automation" element={<AutomationPage />} />
                  <Route path="/adaptive-intelligence" element={<AdaptiveIntelligencePage />} />
                  <Route path="/scalable-growth" element={<ScalableGrowthPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/disclaimer" element={<DisclaimerPage />} />
                  <Route path="/billing" element={<BillingPage />} />
                  <Route path="/blockchain-infrastructure" element={<BlockchainInfrastructurePage />} />
                  <Route path="/mortgage-operations" element={<MortgageOperationsPage />} />
                  <Route path="/regulated-operations" element={<RegulatedOperationsPage />} />
                  <Route path="/asset-lifecycle" element={<AssetLifecyclePage />} />
                  <Route path="/digital-asset-infrastructure" element={<DigitalAssetInfrastructurePage />} />
                  <Route path="/mortgage-workflow" element={<MortgageWorkflowPage />} />
                  <Route path="/loan-intake" element={<LoanIntakePage />} />
                  <Route path="/underwriting" element={<UnderwritingPage />} />
                  <Route path="/compliance-monitoring" element={<ComplianceMonitoringPage />} />
                  <Route path="/audit-reporting" element={<AuditReportingPage />} />
                </Routes>
              </main>
              <PublicFooter />
              <AISupportWidget />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
