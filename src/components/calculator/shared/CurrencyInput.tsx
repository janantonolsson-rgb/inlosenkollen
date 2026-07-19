import { parseSwedishNumber, formatInputNumber } from '../../../lib/formatters'
import { useLanguage } from '../../../i18n/LanguageContext'
import { Input } from '../../ui/Input'
import { Label, FieldHint } from '../../ui/Field'

interface CurrencyInputProps {
  id: string
  label: string
  value: number
  onChange: (value: number) => void
  hint?: string
  suffix?: string
  decimals?: boolean
  hideLabel?: boolean
  inputSize?: 'default' | 'sm'
}

export function CurrencyInput({
  id,
  label,
  value,
  onChange,
  hint,
  suffix,
  decimals = false,
  hideLabel = false,
  inputSize = 'default',
}: CurrencyInputProps) {
  const { currency } = useLanguage()
  const resolvedSuffix = suffix ?? currency.symbol

  return (
    <div>
      {!hideLabel && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        type="text"
        inputMode="decimal"
        inputSize={inputSize}
        suffix={resolvedSuffix}
        value={decimals ? value.toString().replace('.', ',') : formatInputNumber(value)}
        onChange={(e) => onChange(parseSwedishNumber(e.target.value))}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && <FieldHint id={`${id}-hint`}>{hint}</FieldHint>}
    </div>
  )
}
