import type { ReactElement } from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/Section'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/translations'

type Step = {
  number: number
  title: string
  description: string
}

const stepsByLanguage: Record<Language, Step[]> = {
  sv: [
    {
      number: 1,
      title: 'Betalterminaler med Multi Acquirer Routing',
      description:
        'Kunden använder betalterminaler som stödjer Multi Acquirer Routing (MAR), där flera olika inlösenavtal kan kopplas in samtidigt.',
    },
    {
      number: 2,
      title: 'Analys per transaktion',
      description:
        'Varje betalning analyseras utifrån korttyp, kortnätverk, utgivningsland och beräknad kostnad.',
    },
    {
      number: 3,
      title: 'Automatisk routing',
      description:
        'Terminalen väljer automatiskt det mest kostnadseffektiva inlösenavtalet utifrån företagets konfiguration och regler.',
    },
  ],
  en: [
    {
      number: 1,
      title: 'Payment terminals with Multi Acquirer Routing',
      description:
        'The customer uses payment terminals that support Multi Acquirer Routing (MAR), where several different acquiring agreements can be connected at the same time.',
    },
    {
      number: 2,
      title: 'Per-transaction analysis',
      description:
        'Every payment is analyzed based on card type, card network, issuing country, and calculated cost.',
    },
    {
      number: 3,
      title: 'Automatic routing',
      description:
        'The terminal automatically selects the most cost-effective acquiring agreement based on the company\u2019s configuration and rules.',
    },
  ],
  no: [
    {
      number: 1,
      title: 'Betalingsterminaler med Multi Acquirer Routing',
      description:
        'Kunden bruker betalingsterminaler som støtter Multi Acquirer Routing (MAR), der flere ulike innløsningsavtaler kan kobles inn samtidig.',
    },
    {
      number: 2,
      title: 'Analyse per transaksjon',
      description:
        'Hver betaling analyseres basert på korttype, kortnettverk, utstederland og beregnet kostnad.',
    },
    {
      number: 3,
      title: 'Automatisk ruting',
      description:
        'Terminalen velger automatisk den mest kostnadseffektive innløsningsavtalen basert på bedriftens konfigurasjon og regler.',
    },
  ],
  da: [
    {
      number: 1,
      title: 'Betalingsterminaler med Multi Acquirer Routing',
      description:
        'Kunden bruger betalingsterminaler, der understøtter Multi Acquirer Routing (MAR), hvor flere forskellige indløsningsaftaler kan tilsluttes samtidig.',
    },
    {
      number: 2,
      title: 'Analyse pr. transaktion',
      description:
        'Hver betaling analyseres ud fra korttype, kortnetværk, udstederland og beregnet omkostning.',
    },
    {
      number: 3,
      title: 'Automatisk routing',
      description:
        'Terminalen vælger automatisk den mest omkostningseffektive indløsningsaftale ud fra virksomhedens konfiguration og regler.',
    },
  ],
  fi: [
    {
      number: 1,
      title: 'Maksupäätteet, jotka tukevat Multi Acquirer Routingia',
      description:
        'Asiakas käyttää maksupäätteitä, jotka tukevat Multi Acquirer Routing -toimintoa (MAR) ja joihin voidaan liittää useita eri vastaanottosopimuksia samanaikaisesti.',
    },
    {
      number: 2,
      title: 'Analyysi per tapahtuma',
      description:
        'Jokainen maksu analysoidaan korttityypin, korttiverkon, myöntäjämaan ja lasketun kustannuksen perusteella.',
    },
    {
      number: 3,
      title: 'Automaattinen reititys',
      description:
        'Maksupääte valitsee automaattisesti kustannustehokkaimman vastaanottosopimuksen yrityksen asetusten ja sääntöjen perusteella.',
    },
  ],
}

type Benefit = {
  title: string
  description: string
  icon: (props: { className?: string }) => ReactElement
}

const icons = {
  cost: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" d="M12 8v8M9.5 10c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 1.5-2.5 1.5-2.5.5-2.5 1.6 1.1 1.9 2.5 1.9 2.5-.6 2.5-1.9" />
    </svg>
  ),
  shield: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12l1.8 1.8 3.2-3.6" />
    </svg>
  ),
  redundancy: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <rect x="4" y="4" width="16" height="6" rx="1.2" />
      <rect x="4" y="14" width="16" height="6" rx="1.2" />
      <circle cx="8" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="8" cy="17" r="0.8" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" d="M12 10v4" />
    </svg>
  ),
  smart: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5a3 3 0 0 0-3 3c0 .7.2 1.3.5 1.8A3 3 0 0 0 5 12a3 3 0 0 0 1.5 2.6 3 3 0 0 0 2.7 4.4H12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 4.5a3 3 0 0 1 3 3c0 .7-.2 1.3-.5 1.8A3 3 0 0 1 19 12a3 3 0 0 1-1.5 2.6 3 3 0 0 1-2.7 4.4H12" />
      <path strokeLinecap="round" d="M12 4.5v15" />
    </svg>
  ),
  flexibility: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5M18.4 18.4l-1.5-1.5M7.1 7.1 5.6 5.6" />
    </svg>
  ),
}

const benefitsByLanguage: Record<Language, Benefit[]> = {
  sv: [
    {
      title: 'Lägre kostnad',
      description: 'Varje transaktion routas till det avtal som ger bäst pris för just den korttypen.',
      icon: icons.cost,
    },
    {
      title: 'Högre driftsäkerhet',
      description:
        'Flera parallella inlösenavtal minskar risken att en enskild driftstörning stoppar betalningar helt.',
      icon: icons.shield,
    },
    {
      title: 'Redundans vid driftstopp',
      description:
        'Om en inlösare får ett driftstopp kan betalningarna automatiskt styras om till en annan – utan manuellt ingrepp. Det minskar risken för avbrott och gör att ni kan fortsätta ta betalt även om en leverantör får problem.',
      icon: icons.redundancy,
    },
    {
      title: 'Smart styrning av transaktioner',
      description: 'Regler kan anpassas efter korttyp, belopp eller andra kriterier — inte bara lägsta pris.',
      icon: icons.smart,
    },
    {
      title: 'Flexibilitet över tid',
      description: 'Nya inlösare kan läggas till eller viktas om i takt med att verksamheten och avtalen förändras.',
      icon: icons.flexibility,
    },
  ],
  en: [
    {
      title: 'Lower cost',
      description: 'Every transaction is routed to the agreement that gives the best price for that specific card type.',
      icon: icons.cost,
    },
    {
      title: 'Higher reliability',
      description:
        'Several parallel acquiring agreements reduce the risk that a single outage stops payments entirely.',
      icon: icons.shield,
    },
    {
      title: 'Redundancy during downtime',
      description:
        'If one acquirer experiences an outage, payments can automatically be redirected to another — with no manual intervention. This reduces the risk of disruption and lets you keep taking payments even if one provider has problems.',
      icon: icons.redundancy,
    },
    {
      title: 'Smart transaction steering',
      description: 'Rules can be adapted by card type, amount, or other criteria — not just lowest price.',
      icon: icons.smart,
    },
    {
      title: 'Flexibility over time',
      description: 'New acquirers can be added or reweighted as the business and its agreements evolve.',
      icon: icons.flexibility,
    },
  ],
  no: [
    {
      title: 'Lavere kostnad',
      description: 'Hver transaksjon rutes til avtalen som gir best pris for nettopp den korttypen.',
      icon: icons.cost,
    },
    {
      title: 'Høyere driftssikkerhet',
      description:
        'Flere parallelle innløsningsavtaler reduserer risikoen for at ett enkelt driftsavbrudd stopper betalinger helt.',
      icon: icons.shield,
    },
    {
      title: 'Redundans ved driftsstans',
      description:
        'Får en innløser et driftsavbrudd, kan betalingene automatisk rutes om til en annen – uten manuelt inngrep. Det reduserer risikoen for avbrudd og gjør at dere kan fortsette å ta betalt selv om én leverandør får problemer.',
      icon: icons.redundancy,
    },
    {
      title: 'Smart styring av transaksjoner',
      description: 'Regler kan tilpasses etter korttype, beløp eller andre kriterier — ikke bare laveste pris.',
      icon: icons.smart,
    },
    {
      title: 'Fleksibilitet over tid',
      description: 'Nye innløsere kan legges til eller vektes om i takt med at virksomheten og avtalene endrer seg.',
      icon: icons.flexibility,
    },
  ],
  da: [
    {
      title: 'Lavere omkostning',
      description: 'Hver transaktion routes til den aftale, der giver den bedste pris for netop den korttype.',
      icon: icons.cost,
    },
    {
      title: 'Højere driftssikkerhed',
      description:
        'Flere parallelle indløsningsaftaler reducerer risikoen for, at ét enkelt driftsstop stopper betalinger helt.',
      icon: icons.shield,
    },
    {
      title: 'Redundans ved driftsstop',
      description:
        'Får en indløser et driftsstop, kan betalingerne automatisk omdirigeres til en anden – uden manuel indgriben. Det mindsker risikoen for afbrydelser og gør, at I kan fortsætte med at tage imod betaling, selv hvis én leverandør får problemer.',
      icon: icons.redundancy,
    },
    {
      title: 'Smart styring af transaktioner',
      description: 'Regler kan tilpasses efter korttype, beløb eller andre kriterier — ikke kun laveste pris.',
      icon: icons.smart,
    },
    {
      title: 'Fleksibilitet over tid',
      description: 'Nye indløsere kan tilføjes eller vægtes om, i takt med at virksomheden og aftalerne ændrer sig.',
      icon: icons.flexibility,
    },
  ],
  fi: [
    {
      title: 'Alhaisempi kustannus',
      description: 'Jokainen tapahtuma reititetään sopimukseen, joka tarjoaa parhaan hinnan juuri kyseiselle korttityypille.',
      icon: icons.cost,
    },
    {
      title: 'Korkeampi käyttövarmuus',
      description:
        'Useat rinnakkaiset vastaanottosopimukset pienentävät riskiä, että yksittäinen häiriö pysäyttää maksut kokonaan.',
      icon: icons.shield,
    },
    {
      title: 'Redundanssi häiriötilanteissa',
      description:
        'Jos maksunvälittäjällä on käyttökatko, maksut voidaan ohjata automaattisesti toiselle – ilman manuaalista toimenpidettä. Tämä vähentää keskeytysten riskiä ja mahdollistaa maksujen vastaanottamisen jatkumisen, vaikka yhdellä toimittajalla olisi ongelmia.',
      icon: icons.redundancy,
    },
    {
      title: 'Älykäs tapahtumien ohjaus',
      description: 'Sääntöjä voidaan mukauttaa korttityypin, summan tai muiden kriteerien mukaan — ei vain alimman hinnan.',
      icon: icons.smart,
    },
    {
      title: 'Joustavuus ajan myötä',
      description: 'Uusia maksunvälittäjiä voidaan lisätä tai painottaa uudelleen liiketoiminnan ja sopimusten kehittyessä.',
      icon: icons.flexibility,
    },
  ],
}

export function HowItWorks() {
  const { language, t } = useLanguage()
  const steps = stepsByLanguage[language]
  const benefits = benefitsByLanguage[language]
  return (
    <section id="hur-det-fungerar" className="scroll-mt-20">
      <SectionHeader
        eyebrow={t.howItWorks.eyebrow}
        title={t.howItWorks.title}
        description={t.howItWorks.description}
      />

      <p className="-mt-6 mb-10 max-w-3xl text-sm leading-relaxed text-muted">
        {t.howItWorks.intro}
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.number} padding="lg" className="flex flex-col">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm font-semibold text-primary">
              {step.number}
            </div>
            <h3 className="text-base font-semibold text-primary">{step.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{step.description}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8" padding="lg">
        <h3 className="text-xl font-bold text-primary sm:text-2xl">{t.howItWorks.valueTitle}</h3>
        <p className="mt-2 text-sm text-muted">
          {t.howItWorks.valueSubtitle}
        </p>
        <ul className="mt-5 grid items-start gap-x-6 gap-y-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-primary">
                <benefit.icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-sm font-medium text-primary">{benefit.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-muted">
          {t.howItWorks.valueFootnote}
        </p>
      </Card>

      <div className="mt-10 flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => document.getElementById('kalkylator')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t.howItWorks.ctaButton}
        </Button>
      </div>
    </section>
  )
}
