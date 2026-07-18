import { Button } from '../ui/Button'
import { PageContainer } from '../layout/PageContainer'
import { RoutingIllustration } from './RoutingIllustration'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-elevated">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-accent-muted/30 via-accent-muted/10 to-transparent" />
      </div>

      <PageContainer className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          <div className="relative z-10 max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">
              Intelligent betalningsrouting
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-[3.25rem]">
              Betalar ni för mycket för era korttransaktioner?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Se hur mycket ni potentiellt kan spara genom att automatiskt skicka varje
              transaktion till det mest fördelaktiga inlösenavtalet.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" onClick={() => scrollTo('kalkylator')}>
                Se vad ni kan spara
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('hur-det-fungerar')}
              >
                Så fungerar intelligent routing?
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted">
              För nordiska handlare och retailföretag med kortbetalningar
            </p>
          </div>

          <div className="relative z-10 -mx-2 sm:-mx-4 lg:mx-0 lg:-mr-6 xl:-mr-12">
            <div className="lg:pl-4 xl:pl-8">
              <RoutingIllustration />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
