import { useState } from 'react'
import { Button } from '../ui/Button'
import { PageContainer } from '../layout/PageContainer'
import { useLanguage } from '../../i18n/LanguageContext'
import { RoutingIllustration } from './RoutingIllustration'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function HeroSection() {
  const { t } = useLanguage()
  const [showAcquirerExplainer, setShowAcquirerExplainer] = useState(false)

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-elevated">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent-muted/20 via-transparent to-transparent" />
      </div>

      <PageContainer className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {t.hero.subtitle}
          </p>

          <div className="mx-auto mt-6 max-w-xl rounded-lg border border-border-subtle bg-surface text-left text-sm">
            <button
              type="button"
              onClick={() => setShowAcquirerExplainer((v) => !v)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={showAcquirerExplainer}
            >
              {t.hero.acquirerExplainerTitle}
              <svg
                className={`h-4 w-4 shrink-0 text-muted transition-transform ${showAcquirerExplainer ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showAcquirerExplainer && (
              <p className="border-t border-border-subtle px-4 py-3 leading-relaxed text-muted">
                {t.hero.acquirerExplainer}
              </p>
            )}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center">
          <Button
            size="lg"
            className="px-10 py-4 text-lg shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
            onClick={() => scrollTo('kalkylator')}
          >
            {t.hero.ctaPrimary}
          </Button>
          <button
            type="button"
            onClick={() => scrollTo('hur-det-fungerar')}
            className="mt-4 text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline"
          >
            {t.hero.ctaSecondary}
          </button>
          <p className="mt-8 text-sm text-muted">
            {t.hero.footnote}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary">
              {t.howItWorks.diagramTitle}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
              {t.howItWorks.diagramSubtitle}
            </p>
          </div>
          <div className="mt-6">
            <RoutingIllustration />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
