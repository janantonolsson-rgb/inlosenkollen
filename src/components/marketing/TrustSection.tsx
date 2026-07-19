import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'

export function TrustSection() {
  const { t } = useLanguage()

  return (
    <section aria-labelledby="trust-heading">
      <Card padding="lg" className="border-accent/20 bg-accent-muted/10">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-sm">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
              <path strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12l1.8 1.8 3.2-3.6" />
            </svg>
          </span>
          <div>
            <h2 id="trust-heading" className="text-lg font-semibold text-primary">
              {t.trust.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              {t.trust.body}
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}
