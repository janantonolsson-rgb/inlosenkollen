import { useCalculator } from '../../context/CalculatorContext'
import { getMixError, sumMix } from '../../lib/validation'
import { MIX_CATEGORY_LABELS, type MixCategory } from '../../types/calculator'
import { useLanguage } from '../../i18n/LanguageContext'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { PercentInput } from './shared/PercentInput'
import { SliderField } from './shared/SliderField'
import { StepNavigation } from './shared/StepNavigation'

const MIX_GROUPS: { title: string; categories: MixCategory[] }[] = [
  {
    title: 'Svenska kort',
    categories: ['visaDebit', 'mastercardDebit', 'swedishCredit', 'corporate'],
  },
  {
    title: 'EU och internationellt',
    categories: ['euEes', 'international', 'amex'],
  },
]

export function StepMix() {
  const { state, dispatch } = useCalculator()
  const { t } = useLanguage()
  const mixError = getMixError(state.mix)
  const total = sumMix(state.mix)

  const handleMixChange = (category: MixCategory, value: number) => {
    dispatch({ type: 'SET_MIX_CATEGORY', payload: { category, value } })
  }

  return (
    <Card padding="lg">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-primary">{t.calculator.step2Title}</h2>
          <p className="mt-2 text-sm text-muted">
            Ange hur stor andel av er volym som består av respektive korttyp. Summan ska
            vara 100 %.
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => dispatch({ type: 'APPLY_EXAMPLE_MIX' })}
          type="button"
        >
          Använd exempeldata
        </Button>
      </div>

      <p className="mt-6 rounded-lg border border-border-subtle bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
        Exempeldata representerar inte en specifik kund. Använd den som utgångspunkt och
        justera efter er faktiska transaktionsmix.
      </p>

      <div className="mt-8 space-y-10">
        {MIX_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted">
              {group.title}
            </h3>
            <div className="space-y-6">
              {group.categories.map((category) => (
                <div
                  key={category}
                  className="grid gap-4 sm:grid-cols-[1fr_120px] sm:items-end"
                >
                  <SliderField
                    id={`mix-${category}`}
                    label={MIX_CATEGORY_LABELS[category]}
                    value={state.mix[category]}
                    onChange={(v) => handleMixChange(category, v)}
                  />
                  <PercentInput
                    id={`mix-input-${category}`}
                    label="Procent"
                    value={state.mix[category]}
                    onChange={(v) => handleMixChange(category, v)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between rounded-lg border border-border px-4 py-3">
        <span className="text-sm font-medium text-primary">Total andel</span>
        <Badge variant={mixError ? 'default' : 'success'}>{total.toFixed(1)} %</Badge>
      </div>

      {mixError && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {mixError}
        </p>
      )}

      <StepNavigation
        onBack={() => dispatch({ type: 'SET_STEP', payload: 1 })}
        onNext={() => dispatch({ type: 'SET_STEP', payload: 3 })}
        nextDisabled={!!mixError}
      />
    </Card>
  )
}
