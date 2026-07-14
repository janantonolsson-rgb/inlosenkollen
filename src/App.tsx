import { CalculatorProvider } from './context/CalculatorContext'
import { CalculatorWizard } from './components/calculator/CalculatorWizard'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { PageContainer } from './components/layout/PageContainer'
import { LeadForm } from './components/lead/LeadForm'
import { ResultsSection } from './components/results/ResultsSection'
import { ApmSection } from './components/marketing/ApmSection'
import { HeroSection } from './components/marketing/HeroSection'
import { HowItWorks } from './components/marketing/HowItWorks'
import { Section, SectionHeader } from './components/ui/Section'

function App() {
  return (
    <CalculatorProvider>
      <Header />
      <main>
        <HeroSection />

        <Section id="kalkylator">
          <PageContainer size="md">
            <SectionHeader
              align="center"
              className="mx-auto"
              eyebrow="Kalkylator"
              title="Besparingskalkylator"
              description="Fyll i era uppgifter i tre steg för att se en uppskattning av er potentiella besparing. Alla siffror är exempeldata tills ni anger egna värden."
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

export default App
