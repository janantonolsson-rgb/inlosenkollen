import { useState } from 'react'
import { useCalculator } from '../../context/CalculatorContext'
import { getMixError } from '../../lib/validation'
import { MIX_CATEGORIES, MIX_CATEGORY_LABELS } from '../../types/calculator'
import { VOLUME_PRESETS } from '../../data/defaults'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'
import { PresetChip, PresetChipGroup } from '../ui/PresetChip'
import { CurrencyInput } from '../calculator/shared/CurrencyInput'
import { PercentInput } from '../calculator/shared/PercentInput'
import { SliderField } from '../calculator/shared/SliderField'

export function SensitivityPanel() {
  const { state, dispatch, results } = useCalculator()
  const { t, formatMoney } = useLanguage()
  const mixError = getMixError(state.mix)
  const [open, setOpen] = useState(false)

  return (
    <Card padding="lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-expanded={open}
      >
        <div>
          <h3 className="text-base font-semibold text-primary">{t.misc.sensitivityTitle}</h3>
          <p className="mt-1 text-sm text-muted">
            {t.misc.sensitivitySubtitle}
          </p>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="mt-8 border-t border-border pt-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">{t.misc.volumeLabel}</h4>
              <PresetChipGroup>
                {VOLUME_PRESETS.map((preset) => (
                  <PresetChip
                    key={preset.value}
                    label={preset.label}
                    selected={state.volume.annualVolume === preset.value}
                    onClick={() =>
                      dispatch({
                        type: 'SET_VOLUME',
                        payload: { annualVolume: preset.value },
                      })
                    }
                  />
                ))}
              </PresetChipGroup>
              <CurrencyInput
                id="sens-volume"
                label={t.calculator.annualVolume}
                value={state.volume.annualVolume}
                onChange={(v) =>
                  dispatch({ type: 'SET_VOLUME', payload: { annualVolume: v } })
                }
              />
              <CurrencyInput
                id="sens-aov"
                label={t.calculator.averageOrderValue}
                value={state.volume.averageOrderValue}
                onChange={(v) =>
                  dispatch({ type: 'SET_VOLUME', payload: { averageOrderValue: v } })
                }
                decimals
              />
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                {t.calculator.step2Title.replace(/^[^:]*:\s*/, '')}
              </h4>
              {MIX_CATEGORIES.slice(0, 4).map((category) => (
                <SliderField
                  key={category}
                  id={`sens-${category}`}
                  label={MIX_CATEGORY_LABELS[category]}
                  value={state.mix[category]}
                  onChange={(v) =>
                    dispatch({
                      type: 'SET_MIX_CATEGORY',
                      payload: { category, value: v },
                    })
                  }
                />
              ))}
              {mixError && (
                <p className="text-xs text-red-600" role="alert">
                  {mixError}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <PercentInput
              id="sens-percent"
              label={t.misc.currentPercentFeeLabel}
              value={state.volume.currentPercentFee}
              onChange={(v) =>
                dispatch({ type: 'SET_VOLUME', payload: { currentPercentFee: v } })
              }
            />
            <div className="rounded-lg border border-border-subtle bg-surface px-4 py-4">
              <p className="text-sm text-muted">{t.misc.updatedAnnualSavingsLabel}</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-success">
                {results.annualSavings > 0 ? formatMoney(results.annualSavings) : '—'}
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
