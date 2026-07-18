import { useCalculator } from '../../context/CalculatorContext'
import { useLanguage } from '../../i18n/LanguageContext'
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

  if (!state.showResults) return null

  const showFullResults = results.canRoute && !results.isSimplifiedMode

  return (
    <section id="resultat" className="scroll-mt-20">
      <SectionHeader
        eyebrow={t.results.eyebrow}
        title={t.results.title}
        description={t.results.description}
      />

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
