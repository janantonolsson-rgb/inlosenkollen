import { cn } from '../../../lib/cn'

interface SliderFieldProps {
  id: string
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function SliderField({
  id,
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}: SliderFieldProps) {
  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-primary">
          {label}
        </label>
        <span className="shrink-0 text-sm tabular-nums text-muted">{value.toFixed(1)} %</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={0.5}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className={cn(
          'h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border-subtle',
          '[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-subtle',
          '[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full',
          '[&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent',
        )}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={`${label}: ${value} procent`}
      />
    </div>
  )
}
