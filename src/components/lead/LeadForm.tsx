import { useState, type FormEvent } from 'react'
import { mockSubmitLead, type LeadFormData } from '../../lib/lead'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { FieldError, Label } from '../ui/Field'
import { Input, Textarea } from '../ui/Input'
import { SectionHeader } from '../ui/Section'

const initialForm: LeadFormData = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  annualVolume: '',
  currentAcquirer: '',
  message: '',
  consent: false,
  attachment: null,
}

export function LeadForm() {
  const [form, setForm] = useState<LeadFormData>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = <K extends keyof LeadFormData>(key: K, value: LeadFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.consent) {
      setError('Du måste godkänna behandling av personuppgifter')
      return
    }

    setSubmitting(true)
    try {
      await mockSubmitLead(form)
      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setError('Något gick fel. Försök igen senare.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card padding="lg" className="text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-success-light">
          <svg className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-primary">Tack för er förfrågan!</h3>
        <p className="mt-2 text-sm text-muted">
          Vi återkommer inom kort för att boka en mer detaljerad kostnadsanalys.
        </p>
        <Button className="mt-8" variant="secondary" onClick={() => setSubmitted(false)}>
          Skicka ny förfrågan
        </Button>
      </Card>
    )
  }

  return (
    <Card padding="lg">
      <SectionHeader
        title="Vill du veta vad ni faktiskt kan spara?"
        description="Skicka in era nuvarande inlösenpriser och transaktionsvolymer så hjälper vi er att göra en mer detaljerad analys."
        className="!mb-0"
      />

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="companyName" label="Företagsnamn" required value={form.companyName} onChange={(v) => update('companyName', v)} />
          <Field id="contactName" label="Namn" required value={form.contactName} onChange={(v) => update('contactName', v)} />
          <Field id="email" label="E-post" type="email" required value={form.email} onChange={(v) => update('email', v)} />
          <Field id="phone" label="Telefonnummer" type="tel" value={form.phone} onChange={(v) => update('phone', v)} />
          <Field id="annualVolume" label="Ungefärlig kortomsättning per år" placeholder="t.ex. 60 M kr" value={form.annualVolume} onChange={(v) => update('annualVolume', v)} />
          <Field id="currentAcquirer" label="Nuvarande inlösare" value={form.currentAcquirer} onChange={(v) => update('currentAcquirer', v)} />
        </div>

        <div>
          <Label htmlFor="message">Meddelande</Label>
          <Textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Berätta gärna mer om er betalningsuppsättning..."
          />
        </div>

        <div>
          <Label htmlFor="attachment">Bifoga prislista eller faktura (valfritt)</Label>
          <input
            id="attachment"
            type="file"
            accept=".pdf,.xlsx,.xls,.csv,.png,.jpg,.jpeg"
            onChange={(e) => update('attachment', e.target.files?.[0] ?? null)}
            className="w-full rounded-lg border border-dashed border-border bg-surface px-3.5 py-3 text-sm text-muted file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
          />
        </div>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update('consent', e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
            required
          />
          <span className="text-sm leading-relaxed text-muted">
            Jag godkänner att Westpay behandlar mina personuppgifter för att kontakta mig
            angående en kostnadsanalys.
          </span>
        </label>

        {error && <FieldError>{error}</FieldError>}

        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? 'Skickar...' : 'Boka en kostnadsanalys'}
        </Button>
      </form>
    </Card>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <Label htmlFor={id} required={required}>{label}</Label>
      <Input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
