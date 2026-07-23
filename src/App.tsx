import { CalculatorProvider } from './context/CalculatorContext'
import { CalculatorWizard } from './components/calculator/CalculatorWizard'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { PageContainer } from './components/layout/PageContainer'
import { LeadForm } from './components/lead/LeadForm'
import { ResultsSection } from './components/results/ResultsSection'
import { ApmSection } from './components/marketing/ApmSection'
import { FAQSection } from './components/marketing/FAQSection'
import { HeroSection } from './components/marketing/HeroSection'
import { HowItWorks } from './components/marketing/HowItWorks'
import { TrustBar } from './components/marketing/TrustBar'
import { TrustSection } from './components/marketing/TrustSection'
import { Section, SectionHeader } from './components/ui/Section'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'

function AppContent() {
  const { t } = useLanguage()

  return (
    <CalculatorProvider>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />

        <Section id="kalkylator">
          <PageContainer size="md">
            <SectionHeader
              align="center"
              className="mx-auto"
              eyebrow={t.nav.calculator}
              title={t.calculator.sectionTitle}
              description={t.calculator.sectionDescription}
            />
            <CalculatorWizard />
            <div className="mt-16">
              <ResultsSection />
            </div>
          </PageContainer>
        </Section>

        <Section background="white">
          <PageContainer size="lg">
            <HowItWorks />
            <ApmSection />
          </PageContainer>
        </Section>

        <Section>
          <PageContainer size="lg" className="space-y-14">
            <TrustSection />
            <FAQSection />
          </PageContainer>
        </Section>

        <Section id="kontakt">
          <PageContainer size="sm">
            <LeadForm />
          </PageContainer>
        </Section>
      </main>
      <Footer />
    </CalculatorProvider>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
