import { useCalculator } from '../../context/CalculatorContext'
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

  if (!state.showResults) return null

  const showFullResults = results.canRoute && !results.isSimplifiedMode

  return (
    <section id="resultat" className="scroll-mt-20">
      <SectionHeader
        eyebrow="Resultat"
        title="Er uppskattade besparing"
        description="Resultat baserat på angivna priser och volymer. Alla siffror är uppskattningar."
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
              currentMonthlyCost={results.currentMonthlyCost}
              routedMonthlyCost={results.routedMonthlyCost}
              monthlySavings={results.monthlySavings}
              annualSavings={results.annualSavings}
              percentSavings={results.percentSavings}
              threeYearSavings={results.threeYearSavings}
            />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <BeforeAfterChart
              currentMonthlyCost={results.currentMonthlyCost}
              routedMonthlyCost={results.routedMonthlyCost}
            />
            <SavingsOverTimeChart data={results.accumulatedSavings} />
          </div>
        </>
      )}

      {results.isSimplifiedMode && (
        <div className="mt-8">
          <MetricCards
            currentMonthlyCost={results.currentMonthlyCost}
            routedMonthlyCost={results.currentMonthlyCost}
            monthlySavings={0}
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
