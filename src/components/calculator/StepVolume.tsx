import { useState } from 'react'
import { useCalculator } from '../../context/CalculatorContext'
import { getAvgTransactionAmount } from '../../lib/calculations'
import { formatSEK } from '../../lib/formatters'
import { validateVolume } from '../../lib/validation'
import { VOLUME_PRESETS } from '../../data/defaults'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'
import { PresetChip, PresetChipGroup } from '../ui/PresetChip'
import { CurrencyInput } from './shared/CurrencyInput'
import { PercentInput } from './shared/PercentInput'
import { StepNavigation } from './shared/StepNavigation'

export function StepVolume() {
  const { state, dispatch } = useCalculator()
  const { t, language } = useLanguage()
  const { volume } = state
  const avgAmount = getAvgTransactionAmount(volume)
  const volumeError = validateVolume(volume.annualVolume, volume.annualTransactions)
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <Card padding="lg">
      <h2 className="text-lg font-semibold text-primary">{t.calculator.step1Title}</h2>
      <p className="mt-2 text-sm text-muted">
        {t.calculator.step1Description}
      </p>

      <div className="mt-8">
        <PresetChipGroup label={language === 'sv' ? 'Snabbval' : 'Quick select'}>
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
            label={language === 'sv' ? 'Annat belopp' : 'Custom amount'}
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
          id="annualTransactions"
          label={t.calculator.annualTransactions}
          value={volume.annualTransactions}
          onChange={(v) =>
            dispatch({ type: 'SET_VOLUME', payload: { annualTransactions: v } })
          }
          suffix="st"
        />
        <PercentInput
          id="currentPercentFee"
          label={t.calculator.currentFee}
          hint={
            language === 'sv'
              ? 'Den viktigaste siffran — de allra flesta känner till ungefär den här procentsatsen.'
              : 'The most important figure — most people know roughly this percentage.'
          }
          value={volume.currentPercentFee}
          onChange={(v) =>
            dispatch({ type: 'SET_VOLUME', payload: { currentPercentFee: v } })
          }
        />
        <div>
          <p className="mb-1.5 text-sm font-medium text-primary">
            {language === 'sv' ? 'Genomsnittligt transaktionsbelopp' : 'Average transaction amount'}
          </p>
          <div className="rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5">
            <p className="text-sm font-semibold tabular-nums text-primary">
              {formatSEK(avgAmount, true)}
            </p>
            <p className="mt-0.5 text-xs text-muted">
              {language === 'sv'
                ? 'Beräknas automatiskt: omsättning ÷ antal transaktioner'
                : 'Calculated automatically: turnover ÷ number of transactions'}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setShowAdvanced((v) => !v)}
          className="text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={showAdvanced}
        >
          {showAdvanced
            ? language === 'sv' ? '− Dölj avancerade inställningar' : '− Hide advanced settings'
            : language === 'sv' ? '+ Avancerade inställningar (fast avgift)' : '+ Advanced settings (fixed fee)'}
        </button>
        {showAdvanced && (
          <div className="mt-4 max-w-xs">
            <CurrencyInput
              id="currentFixedFee"
              label={language === 'sv' ? 'Nuvarande fast avgift per transaktion' : 'Current fixed fee per transaction'}
              hint={
                language === 'sv'
                  ? 'Används sällan — lämna på 0 om ni inte har en fast avgift per transaktion.'
                  : 'Rarely used — leave at 0 if you don\u2019t have a fixed fee per transaction.'
              }
              value={volume.currentFixedFee}
              onChange={(v) => dispatch({ type: 'SET_VOLUME', payload: { currentFixedFee: v } })}
              decimals
            />
          </div>
        )}
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
