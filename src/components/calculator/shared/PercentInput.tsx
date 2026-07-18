import { parseSwedishNumber } from '../../../lib/formatters'
import { Input } from '../../ui/Input'
import { Label, FieldHint } from '../../ui/Field'

interface PercentInputProps {
  id: string
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  hideLabel?: boolean
  inputSize?: 'default' | 'sm'
  hint?: string
}

export function PercentInput({
  id,
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  hideLabel = false,
  inputSize = 'default',
  hint,
}: PercentInputProps) {
  return (
    <div>
      {!hideLabel && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        type="text"
        inputMode="decimal"
        inputSize={inputSize}
        suffix="%"
        value={value.toString().replace('.', ',')}
        onChange={(e) => {
          const parsed = parseSwedishNumber(e.target.value)
          onChange(Math.min(max, Math.max(min, parsed)))
        }}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      {hint && <FieldHint id={`${id}-hint`}>{hint}</FieldHint>}
    </div>
  )
}
