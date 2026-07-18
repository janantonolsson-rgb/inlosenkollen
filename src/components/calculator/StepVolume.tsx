import { useState } from 'react'
import { useCalculator } from '../../context/CalculatorContext'
import { getAvgTransactionAmount } from '../../lib/calculations'
import { formatSEK } from '../../lib/formatters'
import { validateVolume } from '../../lib/validation'
import { VOLUME_PRESETS } from '../../data/defaults'
import { Card } from '../ui/Card'
import { PresetChip, PresetChipGroup } from '../ui/PresetChip'
import { CurrencyInput } from './shared/CurrencyInput'
import { PercentInput } from './shared/PercentInput'
import { StepNavigation } from './shared/StepNavigation'

export function StepVolume() {
  const { state, dispatch } = useCalculator()
  const { volume } = state
  const avgAmount = getAvgTransactionAmount(volume)
  const volumeError = validateVolume(volume.monthlyVolume, volume.monthlyTransactions)
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <Card padding="lg">
      <h2 className="text-lg font-semibold text-primary">Steg 1: Företagets betalningsvolym</h2>
      <p className="mt-2 text-sm text-muted">
        Ange er nuvarande kortomsättning och ungefärliga inlösenkostnad. Kör ni bara med en
        ungefärlig procentsats idag räcker det gott för en första uppskattning.
      </p>

      <div className="mt-8">
        <PresetChipGroup label="Snabbval">
          {VOLUME_PRESETS.map((preset) => (
            <PresetChip
              key={preset.value}
              label={`${preset.label}/mån`}
              selected={volume.monthlyVolume === preset.value}
              onClick={() =>
                dispatch({
                  type: 'SET_VOLUME',
                  payload: { monthlyVolume: preset.value },
                })
              }
            />
          ))}
          <PresetChip
            label="Annat belopp"
            selected={!VOLUME_PRESETS.some((p) => p.value === volume.monthlyVolume)}
            onClick={() => {
              document.getElementById('monthlyVolume')?.focus()
            }}
          />
        </PresetChipGroup>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <CurrencyInput
          id="monthlyVolume"
          label="Total kortomsättning per månad"
          value={volume.monthlyVolume}
          onChange={(v) => dispatch({ type: 'SET_VOLUME', payload: { monthlyVolume: v } })}
        />
        <CurrencyInput
          id="monthlyTransactions"
          label="Antal transaktioner per månad"
          value={volume.monthlyTransactions}
          onChange={(v) =>
            dispatch({ type: 'SET_VOLUME', payload: { monthlyTransactions: v } })
          }
          suffix="st"
        />
        <PercentInput
          id="currentPercentFee"
          label="Nuvarande genomsnittlig procentuell inlösenavgift"
          hint="Den viktigaste siffran — de allra flesta känner till ungefär den här procentsatsen."
          value={volume.currentPercentFee}
          onChange={(v) =>
            dispatch({ type: 'SET_VOLUME', payload: { currentPercentFee: v } })
          }
        />
        <div>
          <p className="mb-1.5 text-sm font-medium text-primary">Genomsnittligt transaktionsbelopp</p>
          <div className="rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5">
            <p className="text-sm font-semibold tabular-nums text-primary">
              {formatSEK(avgAmount, true)}
            </p>
            <p className="mt-0.5 text-xs text-muted">
              Beräknas automatiskt: omsättning ÷ antal transaktioner
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
          {showAdvanced ? '− Dölj avancerade inställningar' : '+ Avancerade inställningar (fast avgift)'}
        </button>
        {showAdvanced && (
          <div className="mt-4 max-w-xs">
            <CurrencyInput
              id="currentFixedFee"
              label="Nuvarande fast avgift per transaktion"
              hint="Används sällan — lämna på 0 om ni inte har en fast avgift per transaktion."
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
