import { parseSwedishNumber, formatInputNumber } from '../../../lib/formatters'
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
  suffix = 'kr',
  decimals = false,
  hideLabel = false,
  inputSize = 'default',
}: CurrencyInputProps) {
  return (
    <div>
      {!hideLabel && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        type="text"
        inputMode="decimal"
        inputSize={inputSize}
        suffix={suffix}
        value={decimals ? value.toString().replace('.', ',') : formatInputNumber(value)}
        onChange={(e) => onChange(parseSwedishNumber(e.target.value))}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && <FieldHint id={`${id}-hint`}>{hint}</FieldHint>}
    </div>
  )
}
