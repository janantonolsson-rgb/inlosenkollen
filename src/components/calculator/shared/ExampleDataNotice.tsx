import { useLanguage } from '../../../i18n/LanguageContext'

export function ExampleDataNotice() {
  const { t } = useLanguage()

  return (
    <div className="mb-6 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent-muted/20 px-4 py-3.5">
      <svg
        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 9v3.75m0 3.75h.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        <p className="text-sm font-semibold text-primary">{t.results.exampleDataTitle}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{t.results.exampleDataBody}</p>
      </div>
    </div>
  )
}
