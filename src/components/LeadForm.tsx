import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function LeadForm() {
  const { t, formatMoney } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) {
      setError(t.leadForm.consentText)
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="container center">
        <div className="card card-pad" style={{ maxWidth: 560, margin: '0 auto' }}>
          <h3>{t.leadForm.thanksTitle}</h3>
          <p style={{ marginBottom: 16 }}>{t.leadForm.thanksBody}</p>
          <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
            {t.leadForm.sendAnother}
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="container">
      <div className="center" style={{ marginBottom: 24 }}>
        <h2>{t.leadForm.title}</h2>
        <p style={{ maxWidth: '60ch', margin: '0 auto' }}>{t.leadForm.description}</p>
      </div>
      <form className="card card-pad lead-form" onSubmit={onSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="field">
            <label>{t.leadForm.nameLabel}</label>
            <input className="input" required />
          </div>
          <div className="field">
            <label>{t.leadForm.emailLabel}</label>
            <input className="input" type="email" required />
          </div>
          <div className="field">
            <label>{t.leadForm.orgNumberLabel}</label>
            <input className="input" placeholder={t.leadForm.orgNumberPlaceholder} />
          </div>
          <div className="field">
            <label>{t.leadForm.annualVolumeApproxLabel}</label>
            <input className="input" placeholder={t.leadForm.annualVolumeApproxPlaceholder} />
          </div>
        </div>
        <div className="field" style={{ marginTop: 16 }}>
          <label>{t.leadForm.messageLabel}</label>
          <textarea className="input" rows={3} placeholder={t.leadForm.messagePlaceholder} />
        </div>
        <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: '0.85rem', margin: '12px 0', color: 'var(--ink-soft)' }}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 3 }} />
          {t.leadForm.consentText}
        </label>
        {error && <div className="note" style={{ marginBottom: 12 }}>{error}</div>}
        <button className="btn btn-primary btn-block" type="submit">{t.leadForm.submit}</button>
        <p className="disclaimer" style={{ marginTop: 12 }}>Demo: inget skickas från denna sida.</p>
        <span style={{ display: 'none' }}>{formatMoney(0)}</span>
      </form>
    </section>
  )
}
