// Home page — imports all homepage sections
import HeroSection from '../sections/HeroSection.jsx'
import TrustBarSection from '../sections/TrustBarSection.jsx'
import ThreePillarsSection from '../sections/ThreePillarsSection.jsx'
import GovernanceSection from '../sections/GovernanceSection.jsx'
import IndustriesSection from '../sections/IndustriesSection.jsx'
import FinancialSection from '../sections/FinancialSection.jsx'
import ResultsSection from '../sections/ResultsSection.jsx'
import UseCasesSection from '../sections/UseCasesSection.jsx'
import ArchitectureSection from '../sections/ArchitectureSection.jsx'
import ProvenanceSection from '../sections/ProvenanceSection.jsx'
import SecuritySection from '../sections/SecuritySection.jsx'
import FinalCTA from '../sections/FinalCTA.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ThreePillarsSection />
      <GovernanceSection />
      <IndustriesSection />
      <FinancialSection />
      <ResultsSection />
      <UseCasesSection />
      <ArchitectureSection />
      <ProvenanceSection />
      <SecuritySection />
      <FinalCTA />
    </>
  )
}
