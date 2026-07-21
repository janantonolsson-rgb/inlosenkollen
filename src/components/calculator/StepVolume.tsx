import { useCalculator } from '../../context/CalculatorContext'
import { getAnnualTransactions } from '../../lib/calculations'
import { volumeEqualsDefault } from '../../lib/dataQuality'
import { validateVolume } from '../../lib/validation'
import { VOLUME_PRESETS } from '../../data/defaults'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'
import { PresetChip, PresetChipGroup } from '../ui/PresetChip'
import { CurrencyInput } from './shared/CurrencyInput'
import { ExampleDataNotice } from './shared/ExampleDataNotice'
import { PercentInput } from './shared/PercentInput'
import { StepNavigation } from './shared/StepNavigation'

const LOCALE_BY_LANGUAGE: Record<string, string> = {
  sv: 'sv-SE',
  en: 'en-US',
  no: 'nb-NO',
  da: 'da-DK',
  fi: 'fi-FI',
}

export function StepVolume() {
  const { state, dispatch } = useCalculator()
  const { t, language } = useLanguage()
  const { volume } = state
  const annualTransactions = getAnnualTransactions(volume)
  const volumeError = validateVolume(volume.annualVolume, volume.averageOrderValue)

  return (
    <Card padding="lg">
      <h2 className="text-lg font-semibold text-primary">{t.calculator.step1Title}</h2>
      <p className="mt-2 text-sm text-muted">
        {t.calculator.step1Description}
      </p>

      {volumeEqualsDefault(state) && (
        <div className="mt-6">
          <ExampleDataNotice />
        </div>
      )}

      <div className="mt-8">
        <PresetChipGroup label={t.misc.quickSelect}>
          {VOLUME_PRESETS.map((preset) => (
            <PresetChip
              key={preset.value}
              label={preset.label}
              selected={volume.annualVolume === preset.value}
              onClick={() =>
                dispatch({
                  type: 'SET_VOLUME',
                  payload: { annualVolume: preset.value },
                })
              }
            />
          ))}
          <PresetChip
            label={t.misc.customAmount}
            selected={!VOLUME_PRESETS.some((p) => p.value === volume.annualVolume)}
            onClick={() => {
              document.getElementById('annualVolume')?.focus()
            }}
          />
        </PresetChipGroup>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <CurrencyInput
          id="annualVolume"
          label={t.calculator.annualVolume}
          value={volume.annualVolume}
          onChange={(v) => dispatch({ type: 'SET_VOLUME', payload: { annualVolume: v } })}
        />
        <CurrencyInput
          id="averageOrderValue"
          label={t.calculator.averageOrderValue}
          hint={t.misc.aovHint}
          value={volume.averageOrderValue}
          onChange={(v) => dispatch({ type: 'SET_VOLUME', payload: { averageOrderValue: v } })}
          decimals
        />
        <PercentInput
          id="currentPercentFee"
          label={t.calculator.currentFee}
          hint={t.misc.currentFeeHint}
          value={volume.currentPercentFee}
          onChange={(v) =>
            dispatch({ type: 'SET_VOLUME', payload: { currentPercentFee: v } })
          }
        />
        <div>
          <p className="mb-1.5 text-sm font-medium text-primary">
            {t.calculator.annualTransactionsComputed}
          </p>
          <div className="rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5">
            <p className="text-sm font-semibold tabular-nums text-primary">
              {Math.round(annualTransactions).toLocaleString(LOCALE_BY_LANGUAGE[language] ?? 'en-US')} st
            </p>
            <p className="mt-0.5 text-xs text-muted">
              {t.misc.transactionsAutoNote}
            </p>
          </div>
        </div>
        <CurrencyInput
          id="currentFixedFee"
          label={t.misc.fixedFeeLabel}
          hint={t.misc.fixedFeeHint}
          value={volume.currentFixedFee}
          onChange={(v) => dispatch({ type: 'SET_VOLUME', payload: { currentFixedFee: v } })}
          decimals
        />
      </div>

      {volumeError && (
        <p className="mt-6 text-sm text-red-600" role="alert">
          {volumeError}
        </p>
      )}

      <StepNavigation
        showBack={false}
        onNext={() => dispatch({ type: 'SET_STEP', payload: 2 })}
        nextDisabled={!!volumeError}
      />
    </Card>
  )
}
