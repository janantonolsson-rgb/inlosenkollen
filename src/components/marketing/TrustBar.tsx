import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/translations'
import { PageContainer } from '../layout/PageContainer'

const itemsByLanguage: Record<Language, string[]> = {
  sv: ['Retailkedjor', 'Företag med hög kortomsättning', 'Nordiska företag'],
  en: ['Retail chains', 'Companies with high card turnover', 'Nordic companies'],
  no: ['Butikkjeder', 'Bedrifter med høy kortomsetning', 'Nordiske bedrifter'],
  da: ['Detailkæder', 'Virksomheder med høj kortomsætning', 'Nordiske virksomheder'],
  fi: ['Vähittäiskaupan ketjut', 'Yritykset, joilla on suuri korttimyynti', 'Pohjoismaiset yritykset'],
}

export function TrustBar() {
  const { language, t } = useLanguage()
  const items = itemsByLanguage[language]

  return (
    <div className="border-b border-border bg-surface">
      <PageContainer size="lg">
        <div className="flex flex-col items-center gap-3 py-5 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-light">
              {t.trustBar.developedForLabel}
            </span>
            {items.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-muted">
                <svg className="h-3.5 w-3.5 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-border-subtle py-3 text-center">
          <p className="text-xs text-muted-light">
            {t.trustBar.independentLine} {t.trustBar.experienceLine}
          </p>
        </div>
      </PageContainer>
    </div>
  )
}
