import { useLanguage } from '../context/LanguageContext'
import { acquirerCatalog } from '../data/acquirerCatalog'
import { allInPercent } from '../lib/calculations'
import type { PriceConfidence } from '../types/calculator'

const confClass: Record<PriceConfidence, string> = {
  confirmed: 'badge-confirmed',
  published: 'badge-published',
  estimate: 'badge-estimate',
  unverified: 'badge-unverified',
}

export function AcquirerCatalog() {
  const { t } = useLanguage()
  return (
    <section id="catalog" className="container">
      <div className="section-eyebrow">{t.catalog.title}</div>
      <h2>{t.catalog.title}</h2>
      <p style={{ maxWidth: '75ch' }}>{t.catalog.intro}</p>
      <div className="catalog-grid">
        {acquirerCatalog.map((a) => {
          const debitAllIn = allInPercent({
            interchange: 0.2,
            scheme: 0.08,
            markup: a.markup.swedishDebit,
          })
          return (
            <div className={`cat-card ${a.isPartner ? 'partner' : ''}`} key={a.id}>
              <div className="top">
                <div>
                  <div className="name">{a.name}</div>
                  <div className="src">
                    {a.providerType === 'psp' ? t.catalog.typePsp : t.catalog.typeAcquirer}
                  </div>
                </div>
                <span className={`badge ${confClass[a.confidence]}`}>
                  {confLabel(a.confidence, t)} <span className="date">· {a.verifiedAt}</span>
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>{a.description}</p>
              <div className="highlight">{debitAllIn.toFixed(2).replace('.', ',')} % {t.catalog.colPrice.toLowerCase()}</div>
              <div className="src">{t.catalog.colSource}: {a.source}</div>
              {a.partnershipNote && (
                <div className="note green" style={{ fontSize: '0.8rem' }}>{a.partnershipNote}</div>
              )}
              {a.applyUrl && (
                <a href={a.applyUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                  {a.applyLabel ?? t.nav.headerContact}
                </a>
              )}
            </div>
          )
        })}
      </div>
      <div className="note" style={{ marginTop: 16 }}>{t.catalog.partnerNote}</div>
    </section>
  )

  function confLabel(c: PriceConfidence, t: ReturnType<typeof useLanguage>['t']): string {
    switch (c) {
      case 'confirmed': return t.catalog.confConfirmed
      case 'published': return t.catalog.confPublished
      case 'estimate': return t.catalog.confEstimate
      case 'unverified': return t.catalog.confUnverified
    }
  }
}
