import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { generatePdfReport } from '../../lib/pdfReport'
import { getAnnualTransactions } from '../../lib/calculations'
import type { CalculationResult, TransactionMix, VolumeData } from '../../types/calculator'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

interface SavingsHeroProps {
  volume: VolumeData
  mix: TransactionMix
  results: CalculationResult
  acquirerCount: number
}

export function SavingsHero({ volume, mix, results, acquirerCount }: SavingsHeroProps) {
  const { t, formatMoney, currency } = useLanguage()
  const { annualSavings, canRoute, isSimplifiedMode } = results
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)

  if (isSimplifiedMode) {
    return (
      <Card padding="lg" variant="elevated">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          {t.results.simplifiedModeLabel}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          {t.results.simplifiedModeTitle}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          {t.results.simplifiedModeBody}
        </p>
      </Card>
    )
  }

  if (!canRoute) {
    return (
      <Card padding="lg" variant="elevated" className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          {t.results.noRoutingLabel}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          {t.results.noRoutingTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
          {t.results.noRoutingBody}
        </p>
      </Card>
    )
  }

  const basedOnItems = [t.results.basedOnVolume, t.results.basedOnMix, t.results.basedOnFees]

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true)
    try {
      await generatePdfReport({
        t,
        currency,
        volume,
        mix,
        results,
        acquirerCount,
        annualTransactions: getAnnualTransactions(volume),
      })
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  return (
    <Card padding="lg" variant="elevated">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
        {t.results.estimatedSavingsLabel}
      </p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-success sm:text-5xl">
        {formatMoney(annualSavings)}
        <span className="ml-1 text-xl font-medium text-muted sm:text-2xl">{t.results.perYearSuffix}</span>
      </h2>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-light">
          {t.results.basedOnLabel}
        </p>
        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
          {basedOnItems.map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-sm text-muted">
              <svg className="h-3.5 w-3.5 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        {t.results.savingsDisclaimer}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t.results.ctaReview}
        </Button>
        <Button size="lg" variant="secondary" onClick={handleDownloadPdf} disabled={isGeneratingPdf}>
          {isGeneratingPdf ? '...' : t.pdfReport.downloadButton}
        </Button>
      </div>
    </Card>
  )
}
