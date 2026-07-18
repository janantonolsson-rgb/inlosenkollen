import { useState, type FormEvent } from 'react'
import { submitLead, type LeadFormData } from '../../lib/lead'
import { useLanguage } from '../../i18n/LanguageContext'
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
  posSystem: '',
  message: '',
  consent: false,
  attachment: null,
}

export function LeadForm() {
  const { t, language } = useLanguage()
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
      setError(
        language === 'sv'
          ? 'Du måste godkänna behandling av personuppgifter'
          : 'You must consent to the processing of personal data',
      )
      return
    }

    setSubmitting(true)
    try {
      await submitLead(form)
      setSubmitted(true)
      setForm(initialForm)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : language === 'sv' ? 'Något gick fel. Försök igen senare.' : 'Something went wrong. Please try again later.',
      )
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
        <h3 className="text-xl font-semibold text-primary">{t.leadForm.thanksTitle}</h3>
        <p className="mt-2 text-sm text-muted">
          {t.leadForm.thanksBody}
        </p>
        <Button className="mt-8" variant="secondary" onClick={() => setSubmitted(false)}>
          {language === 'sv' ? 'Skicka ny förfrågan' : 'Send another inquiry'}
        </Button>
      </Card>
    )
  }

  return (
    <Card padding="lg">
      <SectionHeader
        title={t.leadForm.title}
        description={t.leadForm.description}
        className="!mb-0"
      />

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="companyName" label={language === 'sv' ? 'Företagsnamn' : 'Company name'} required value={form.companyName} onChange={(v) => update('companyName', v)} />
          <Field id="contactName" label={language === 'sv' ? 'Namn' : 'Name'} required value={form.contactName} onChange={(v) => update('contactName', v)} />
          <Field id="email" label={language === 'sv' ? 'E-post' : 'Email'} type="email" required value={form.email} onChange={(v) => update('email', v)} />
          <Field id="phone" label={language === 'sv' ? 'Telefonnummer' : 'Phone number'} type="tel" value={form.phone} onChange={(v) => update('phone', v)} />
          <Field id="annualVolume" label={language === 'sv' ? 'Ungefärlig kortomsättning per år' : 'Approximate annual card turnover'} placeholder={language === 'sv' ? 't.ex. 60 M kr' : 'e.g. 60M SEK'} value={form.annualVolume} onChange={(v) => update('annualVolume', v)} />
          <Field id="currentAcquirer" label={language === 'sv' ? 'Nuvarande inlösare' : 'Current acquirer'} value={form.currentAcquirer} onChange={(v) => update('currentAcquirer', v)} />
          <Field id="posSystem" label={language === 'sv' ? 'POS-/kassasystem ni använder idag' : 'POS/checkout system you use today'} placeholder={language === 'sv' ? 't.ex. Zettle, Shopify POS, egen kassa' : 'e.g. Zettle, Shopify POS, in-house system'} value={form.posSystem} onChange={(v) => update('posSystem', v)} />
        </div>

        <div>
          <Label htmlFor="message">{language === 'sv' ? 'Meddelande' : 'Message'}</Label>
          <Textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder={language === 'sv' ? 'Berätta gärna mer om er betalningsuppsättning...' : 'Feel free to tell us more about your payment setup...'}
          />
        </div>

        <div>
          <Label htmlFor="attachment">{language === 'sv' ? 'Bifoga prislista eller faktura (valfritt)' : 'Attach a price list or invoice (optional)'}</Label>
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
            {language === 'sv'
              ? 'Jag godkänner att mina personuppgifter behandlas för att kontakta mig angående en kostnadsanalys.'
              : 'I consent to my personal data being processed to be contacted regarding a cost analysis.'}
          </span>
        </label>

        {error && <FieldError>{error}</FieldError>}

        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? t.leadForm.submitting : t.leadForm.submit}
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
