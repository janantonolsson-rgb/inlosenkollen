import { Button } from '../ui/Button'
import { PageContainer } from '../layout/PageContainer'
import { useLanguage } from '../../i18n/LanguageContext'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-elevated">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent-muted/20 via-transparent to-transparent" />
      </div>

      <PageContainer className="relative py-20 sm:py-28">
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

          <div className="mx-auto mt-6 max-w-xl rounded-lg border border-border-subtle bg-surface px-4 py-3 text-left text-sm leading-relaxed text-muted">
            <strong className="font-medium text-primary">{t.hero.acquirerExplainerTitle}</strong>{' '}
            {t.hero.acquirerExplainer}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={() => scrollTo('kalkylator')}>
              {t.hero.ctaPrimary}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollTo('hur-det-fungerar')}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted">
            {t.hero.footnote}
          </p>
        </div>
      </PageContainer>
    </section>
  )
}
