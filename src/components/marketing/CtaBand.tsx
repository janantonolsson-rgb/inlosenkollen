import { Button } from '../ui/Button'

interface CtaBandProps {
  title?: string
  description?: string
  buttonLabel?: string
  targetId?: string
}

export function CtaBand({
  title = 'Vill ni veta er faktiska besparing?',
  description = 'Skicka in era nuvarande inlösenpriser så hjälper vi er med en mer detaljerad kostnadsanalys.',
  buttonLabel = 'Boka en kostnadsanalys',
  targetId = 'kontakt',
}: CtaBandProps) {
  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-8 sm:p-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <h3 className="text-xl font-semibold tracking-tight text-primary">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </div>
        <Button
          size="lg"
          className="shrink-0"
          onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}
