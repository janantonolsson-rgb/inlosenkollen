import { useState } from 'react'
import { useCalculator } from '../../context/CalculatorContext'
import { getMixError, sumMix } from '../../lib/validation'
import { MIX_CATEGORY_LABELS, type MixCategory } from '../../types/calculator'
import { useLanguage } from '../../i18n/LanguageContext'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SliderField } from './shared/SliderField'
import { StepNavigation } from './shared/StepNavigation'

export function StepMix() {
  const { state, dispatch } = useCalculator()
  const { t } = useLanguage()
  const mixError = getMixError(state.mix)
  const total = sumMix(state.mix)
  const [showDetailed, setShowDetailed] = useState(false)

  const mixGroups: { title: string; categories: MixCategory[] }[] = [
    {
      title: t.misc.mixGroupSwedish,
      categories: ['visaDebit', 'mastercardDebit', 'swedishCredit', 'corporate'],
    },
    {
      title: t.misc.mixGroupInternational,
      categories: ['euEes', 'international', 'amex'],
    },
  ]

  const handleMixChange = (category: MixCategory, value: number) => {
    dispatch({ type: 'SET_MIX_CATEGORY', payload: { category, value } })
  }

  return (
    <Card padding="lg">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-primary">{t.calculator.step2Title}</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            {t.calculator.step2Description}
          </p>
        </div>
        <Badge variant="success" className="shrink-0">
          {t.calculator.step2TimeHint}
        </Badge>
      </div>

      {!showDetailed ? (
        <div className="mt-8 flex flex-col items-start gap-4 rounded-lg border border-border-subtle bg-surface px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-muted/30 text-accent">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="text-sm font-medium text-primary">{t.calculator.presetMixBadge}</p>
          </div>
          <button
            type="button"
            onClick={() => setShowDetailed(true)}
            className="shrink-0 rounded-lg border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {t.calculator.useDetailedDataButton}
          </button>
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          {mixGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.categories.map((category) => (
                  <SliderField
                    key={category}
                    id={`mix-${category}`}
                    label={MIX_CATEGORY_LABELS[category]}
                    value={state.mix[category]}
                    onChange={(v) => handleMixChange(category, v)}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
            <span className="text-sm font-medium text-primary">{t.misc.totalShareLabel}</span>
            <Badge variant={mixError ? 'default' : 'success'}>{total.toFixed(1)} %</Badge>
          </div>

          {mixError && (
            <p className="text-sm text-red-600" role="alert">
              {mixError}
            </p>
          )}

          <p className="text-xs leading-relaxed text-muted-light">
            {t.misc.exampleDataDisclaimer}
          </p>
        </div>
      )}

      <StepNavigation
        onBack={() => dispatch({ type: 'SET_STEP', payload: 1 })}
        onNext={() => dispatch({ type: 'SET_STEP', payload: 3 })}
        nextDisabled={showDetailed && !!mixError}
      />
    </Card>
  )
}
