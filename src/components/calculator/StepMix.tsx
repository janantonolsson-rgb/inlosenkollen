import { useCalculator } from '../../context/CalculatorContext'
import { getMixError, sumMix } from '../../lib/validation'
import { MIX_CATEGORY_LABELS, type MixCategory } from '../../types/calculator'
import { useLanguage } from '../../i18n/LanguageContext'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SliderField } from './shared/SliderField'
import { StepNavigation } from './shared/StepNavigation'

export function StepMix() {
  const { state, dispatch } = useCalculator()
  const { t } = useLanguage()
  const mixError = getMixError(state.mix)
  const total = sumMix(state.mix)

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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-primary">{t.calculator.step2Title}</h2>
          <p className="mt-2 text-sm text-muted">
            {t.calculator.step2Description}
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => dispatch({ type: 'APPLY_EXAMPLE_MIX' })}
          type="button"
        >
          {t.misc.useExampleDataButton}
        </Button>
      </div>

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
      </div>

      <div className="mt-8 flex items-center justify-between rounded-lg border border-border px-4 py-3">
        <span className="text-sm font-medium text-primary">{t.misc.totalShareLabel}</span>
        <Badge variant={mixError ? 'default' : 'success'}>{total.toFixed(1)} %</Badge>
      </div>

      {mixError && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {mixError}
        </p>
      )}

      <p className="mt-6 text-xs leading-relaxed text-muted-light">
        {t.misc.exampleDataDisclaimer}
      </p>

      <StepNavigation
        onBack={() => dispatch({ type: 'SET_STEP', payload: 1 })}
        onNext={() => dispatch({ type: 'SET_STEP', payload: 3 })}
        nextDisabled={!!mixError}
      />
    </Card>
  )
}
