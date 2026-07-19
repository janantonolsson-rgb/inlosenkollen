import { useState } from 'react'
import { useCalculator } from '../../context/CalculatorContext'
import { useLanguage } from '../../i18n/LanguageContext'
import { isUsingExampleData } from '../../lib/dataQuality'
import { CtaBand } from '../marketing/CtaBand'
import { Disclaimer } from '../layout/Disclaimer'
import { SectionHeader } from '../ui/Section'
import { BeforeAfterChart } from './BeforeAfterChart'
import { MetricCards } from './MetricCards'
import { RoutingTable } from './RoutingTable'
import { SavingsHero } from './SavingsHero'
import { SavingsOverTimeChart } from './SavingsOverTimeChart'
import { SensitivityPanel } from './SensitivityPanel'
import { VolumeDistributionChart } from './VolumeDistributionChart'

export function ResultsSection() {
  const { state, results } = useCalculator()
  const { t } = useLanguage()
  const [noticeDismissed, setNoticeDismissed] = useState(false)

  if (!state.showResults) return null

  const showFullResults = results.canRoute && !results.isSimplifiedMode
  const showExampleDataNotice = !noticeDismissed && isUsingExampleData(state)

  return (
    <section id="resultat" className="scroll-mt-20">
      <SectionHeader
        eyebrow={t.results.eyebrow}
        title={t.results.title}
        description={t.results.description}
      />

      {showExampleDataNotice && (
        <div className="mb-8 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent-muted/20 px-4 py-3.5">
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M12 9v3.75m0 3.75h.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary">{t.results.exampleDataTitle}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{t.results.exampleDataBody}</p>
          </div>
          <button
            type="button"
            onClick={() => setNoticeDismissed(true)}
            className="shrink-0 rounded-md p-1 text-muted hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={t.results.exampleDataDismiss}
            title={t.results.exampleDataDismiss}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <SavingsHero
        annualSavings={results.annualSavings}
        canRoute={results.canRoute}
        isSimplifiedMode={results.isSimplifiedMode}
      />

      {showFullResults && (
        <>
          <div className="mt-8">
            <MetricCards
              currentAnnualCost={results.currentAnnualCost}
              routedAnnualCost={results.routedAnnualCost}
              annualSavings={results.annualSavings}
              percentSavings={results.percentSavings}
              threeYearSavings={results.threeYearSavings}
            />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <BeforeAfterChart
              currentAnnualCost={results.currentAnnualCost}
              routedAnnualCost={results.routedAnnualCost}
            />
            <SavingsOverTimeChart data={results.accumulatedSavings} />
          </div>
        </>
      )}

      {results.isSimplifiedMode && (
        <div className="mt-8">
          <MetricCards
            currentAnnualCost={results.currentAnnualCost}
            routedAnnualCost={results.currentAnnualCost}
            annualSavings={0}
            percentSavings={0}
            threeYearSavings={0}
          />
        </div>
      )}

      <div className="mt-8">
        <RoutingTable
          categories={results.categoryResults}
          canRoute={showFullResults}
        />
      </div>

      {showFullResults && (
        <div className="mt-8">
          <VolumeDistributionChart data={results.acquirerVolumeDistribution} />
        </div>
      )}

      <div className="mt-8">
        <SensitivityPanel />
      </div>

      <div className="mt-10">
        <CtaBand />
      </div>

      <div className="mt-8 rounded-lg border border-border-subtle bg-surface px-4 py-3">
        <Disclaimer compact />
      </div>
    </section>
  )
}
