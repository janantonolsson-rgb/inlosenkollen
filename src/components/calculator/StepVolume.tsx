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

  return (
    <Card padding="lg">
      <h2 className="text-lg font-semibold text-primary">Steg 1: Företagets betalningsvolym</h2>
      <p className="mt-2 text-sm text-muted">
        Ange er nuvarande kortomsättning och genomsnittliga inlösenkostnader.
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
        <CurrencyInput
          id="currentFixedFee"
          label="Nuvarande fast avgift per transaktion"
          value={volume.currentFixedFee}
          onChange={(v) => dispatch({ type: 'SET_VOLUME', payload: { currentFixedFee: v } })}
          decimals
        />
        <PercentInput
          id="currentPercentFee"
          label="Nuvarande genomsnittlig procentuell inlösenavgift"
          value={volume.currentPercentFee}
          onChange={(v) =>
            dispatch({ type: 'SET_VOLUME', payload: { currentPercentFee: v } })
          }
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
