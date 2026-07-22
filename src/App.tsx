import { useMemo, useState } from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Calculator } from './components/Calculator'
import { Results } from './components/Results'
import { AcquirerCatalog } from './components/AcquirerCatalog'
import { LeadForm } from './components/LeadForm'
import { Footer } from './components/Footer'
import { defaultCalculatorState } from './data/defaults'
import { calculateResults } from './lib/calculations'
import type { CalculatorState } from './types/calculator'
import type { Language } from './i18n/translations'

function Header() {
  const { t, language, setLanguage } = useLanguage()
  return (
    <div className="site-header">
      <div className="container">
        <div className="brand">
          <img src="/vite.svg" alt="" className="brand-mark" />
          Inlösenkollen
        </div>
        <nav className="nav">
          <a href="#how">{t.nav.howItWorks}</a>
          <a href="#calculator">{t.nav.calculator}</a>
          <a href="#catalog">{t.nav.home === 'Hem' ? 'Katalog' : 'Catalog'}</a>
          <a href="#contact" className="btn btn-primary btn-sm">{t.nav.headerContact}</a>
          <select className="lang-select" value={language} onChange={(e) => setLanguage(e.target.value as Language)}>
            <option value="sv">SV</option>
            <option value="en">EN</option>
          </select>
        </nav>
      </div>
    </div>
  )
}

function TrustSection() {
  const { t } = useLanguage()
  return (
    <section className="container">
      <div className="card card-pad" style={{ background: 'var(--surface-muted)' }}>
        <h3>{t.trust.title}</h3>
        <p style={{ marginBottom: 0 }}>{t.trust.body}</p>
      </div>
    </section>
  )
}

function AppInner() {
  const [state, setState] = useState<CalculatorState>(defaultCalculatorState)

  function patch(p: Partial<CalculatorState>) {
    setState((s) => ({ ...s, ...p }))
  }

  const results = useMemo(
    () =>
      calculateResults(
        state.volume,
        state.mix,
        state.acquirers,
        state.current,
        state.routableShare,
        state.implementationCostPerAcquirer,
      ),
    [state],
  )

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <TrustSection />
        <Calculator state={state} onChange={patch} />
        {state.showResults && <Results results={results} />}
        <AcquirerCatalog />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}

export function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  )
}
