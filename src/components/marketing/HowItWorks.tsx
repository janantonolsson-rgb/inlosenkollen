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
      title: 'Ta in offerter för flera inlösenavtal',
      description:
        'Företaget tar in erbjudanden från flera inlösare för att skapa konkurrens mellan de inlösande bankerna och få bättre förutsättningar att optimera sina betalningskostnader.',
    },
    {
      number: 2,
      title: 'Anslut inlösenavtalen till en betallösning med stöd för Multi Acquirer Routing',
      description:
        'Företaget ansluter sina inlösenavtal till en betalterminal eller betallösning som stödjer intelligent routing och kan hantera flera inlösare samtidigt.',
    },
    {
      number: 3,
      title: 'Optimera varje transaktion automatiskt',
      description:
        'När lösningen är aktiverad analyseras varje köp i realtid och transaktionen routas automatiskt till den inlösare som ger bäst utfall baserat på företagets regler, kostnader och transaktionsdata.',
    },
  ],
  en: [
    {
      number: 1,
      title: 'Gather quotes for several acquiring agreements',
      description:
        'The company collects offers from several acquirers to create competition between the acquiring banks and gain better conditions for optimizing its payment costs.',
    },
    {
      number: 2,
      title: 'Connect the agreements to a payment solution with Multi Acquirer Routing support',
      description:
        'The company connects its acquiring agreements to a payment terminal or payment solution that supports intelligent routing and can handle several acquirers at the same time.',
    },
    {
      number: 3,
      title: 'Optimize every transaction automatically',
      description:
        'Once the solution is activated, every purchase is analyzed in real time and the transaction is automatically routed to the acquirer that gives the best outcome based on the company\u2019s rules, costs, and transaction data.',
    },
  ],
  no: [
    {
      number: 1,
      title: 'Innhent tilbud for flere innløsningsavtaler',
      description:
        'Bedriften innhenter tilbud fra flere innløsere for å skape konkurranse mellom de innløsende bankene og få bedre forutsetninger for å optimalisere betalingskostnadene sine.',
    },
    {
      number: 2,
      title: 'Koble innløsningsavtalene til en betalingsløsning med støtte for Multi Acquirer Routing',
      description:
        'Bedriften kobler sine innløsningsavtaler til en betalingsterminal eller betalingsløsning som støtter intelligent ruting og kan håndtere flere innløsere samtidig.',
    },
    {
      number: 3,
      title: 'Optimaliser hver transaksjon automatisk',
      description:
        'Når løsningen er aktivert, analyseres hvert kjøp i sanntid, og transaksjonen rutes automatisk til innløseren som gir best utfall basert på bedriftens regler, kostnader og transaksjonsdata.',
    },
  ],
  da: [
    {
      number: 1,
      title: 'Indhent tilbud på flere indløsningsaftaler',
      description:
        'Virksomheden indhenter tilbud fra flere indløsere for at skabe konkurrence mellem de indløsende banker og få bedre forudsætninger for at optimere sine betalingsomkostninger.',
    },
    {
      number: 2,
      title: 'Tilslut indløsningsaftalerne til en betalingsløsning med støtte for Multi Acquirer Routing',
      description:
        'Virksomheden tilslutter sine indløsningsaftaler til en betalingsterminal eller betalingsløsning, der understøtter intelligent routing og kan håndtere flere indløsere samtidig.',
    },
    {
      number: 3,
      title: 'Optimér hver transaktion automatisk',
      description:
        'Når løsningen er aktiveret, analyseres hvert køb i realtid, og transaktionen routes automatisk til den indløser, der giver det bedste udfald baseret på virksomhedens regler, omkostninger og transaktionsdata.',
    },
  ],
  fi: [
    {
      number: 1,
      title: 'Hankkikaa tarjouksia useista vastaanottosopimuksista',
      description:
        'Yritys hankkii tarjouksia usealta maksunvälittäjältä luodakseen kilpailua vastaanottavien pankkien välille ja saadakseen paremmat edellytykset maksukustannustensa optimointiin.',
    },
    {
      number: 2,
      title: 'Liittäkää sopimukset maksuratkaisuun, joka tukee Multi Acquirer Routingia',
      description:
        'Yritys liittää vastaanottosopimuksensa maksupäätteeseen tai maksuratkaisuun, joka tukee älykästä reititystä ja pystyy käsittelemään useita maksunvälittäjiä samanaikaisesti.',
    },
    {
      number: 3,
      title: 'Optimoikaa jokainen tapahtuma automaattisesti',
      description:
        'Kun ratkaisu on aktivoitu, jokainen ostos analysoidaan reaaliajassa, ja tapahtuma reititetään automaattisesti maksunvälittäjälle, joka tarjoaa parhaan lopputuloksen yrityksen sääntöjen, kustannusten ja tapahtumatietojen perusteella.',
    },
  ],
}

const whoIsThisForByLanguage: Record<Language, string[]> = {
  sv: [
    'Retailkedjor',
    'Butiker med flera terminaler',
    'Företag med hög kortomsättning',
    'Företag som accepterar många olika korttyper',
    'Företag som vill sänka sina kostnader',
  ],
  en: [
    'Retail chains',
    'Stores with several terminals',
    'Companies with high card turnover',
    'Companies that accept many different card types',
    'Companies that want to lower their costs',
  ],
  no: [
    'Butikkjeder',
    'Butikker med flere terminaler',
    'Bedrifter med høy kortomsetning',
    'Bedrifter som aksepterer mange ulike korttyper',
    'Bedrifter som ønsker å redusere kostnadene sine',
  ],
  da: [
    'Detailkæder',
    'Butikker med flere terminaler',
    'Virksomheder med høj kortomsætning',
    'Virksomheder, der accepterer mange forskellige korttyper',
    'Virksomheder, der vil sænke deres omkostninger',
  ],
  fi: [
    'Vähittäiskaupan ketjut',
    'Useamman maksupäätteen kaupat',
    'Yritykset, joilla on suuri korttimyynti',
    'Yritykset, jotka hyväksyvät monia eri korttityyppejä',
    'Yritykset, jotka haluavat pienentää kustannuksiaan',
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
  flexibility: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5M18.4 18.4l-1.5-1.5M7.1 7.1 5.6 5.6" />
    </svg>
  ),
  shield: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12l1.8 1.8 3.2-3.6" />
    </svg>
  ),
  control: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M12 7.5v5l3 2" />
    </svg>
  ),
}

const benefitsByLanguage: Record<Language, Benefit[]> = {
  sv: [
    { title: 'Lägre kostnad', description: 'Routa varje transaktion till rätt avtal.', icon: icons.cost },
    { title: 'Ökad flexibilitet', description: 'Minska beroendet av en enda inlösare.', icon: icons.flexibility },
    { title: 'Bättre driftsäkerhet', description: 'Fortsätt ta betalt även vid problem hos en leverantör.', icon: icons.shield },
    { title: 'Bättre kontroll', description: 'Få större insyn i betalflöden och kostnadsdrivare.', icon: icons.control },
  ],
  en: [
    { title: 'Lower cost', description: 'Route every transaction to the right agreement.', icon: icons.cost },
    { title: 'Increased flexibility', description: 'Reduce dependence on a single acquirer.', icon: icons.flexibility },
    { title: 'Better reliability', description: 'Keep taking payments even if one provider has problems.', icon: icons.shield },
    { title: 'Better control', description: 'Gain greater insight into payment flows and cost drivers.', icon: icons.control },
  ],
  no: [
    { title: 'Lavere kostnad', description: 'Rut hver transaksjon til riktig avtale.', icon: icons.cost },
    { title: 'Økt fleksibilitet', description: 'Reduser avhengigheten av én enkelt innløser.', icon: icons.flexibility },
    { title: 'Bedre driftssikkerhet', description: 'Fortsett å ta betalt selv ved problemer hos en leverandør.', icon: icons.shield },
    { title: 'Bedre kontroll', description: 'Få større innsyn i betalingsstrømmer og kostnadsdrivere.', icon: icons.control },
  ],
  da: [
    { title: 'Lavere omkostning', description: 'Rout hver transaktion til den rigtige aftale.', icon: icons.cost },
    { title: 'Øget fleksibilitet', description: 'Reducer afhængigheden af én enkelt indløser.', icon: icons.flexibility },
    { title: 'Bedre driftssikkerhed', description: 'Fortsæt med at tage imod betaling, selv ved problemer hos en leverandør.', icon: icons.shield },
    { title: 'Bedre kontrol', description: 'Få større indsigt i betalingsflows og omkostningsdrivere.', icon: icons.control },
  ],
  fi: [
    { title: 'Alhaisempi kustannus', description: 'Reitittäkää jokainen tapahtuma oikeaan sopimukseen.', icon: icons.cost },
    { title: 'Lisääntynyt joustavuus', description: 'Vähentäkää riippuvuutta yhdestä maksunvälittäjästä.', icon: icons.flexibility },
    { title: 'Parempi käyttövarmuus', description: 'Jatkakaa maksujen vastaanottamista, vaikka yhdellä toimittajalla olisi ongelmia.', icon: icons.shield },
    { title: 'Parempi hallinta', description: 'Saakaa parempi näkyvyys maksuvirtoihin ja kustannustekijöihin.', icon: icons.control },
  ],
}

export function HowItWorks() {
  const { language, t } = useLanguage()
  const steps = stepsByLanguage[language]
  const whoIsThisFor = whoIsThisForByLanguage[language]
  const benefits = benefitsByLanguage[language]

  return (
    <section id="hur-det-fungerar" className="scroll-mt-20">
      <SectionHeader
        eyebrow={t.howItWorks.eyebrow}
        title={t.howItWorks.whyTitle}
        description={t.howItWorks.intro}
      />

      <h3 className="mb-6 text-lg font-semibold text-primary">{t.howItWorks.title}</h3>

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
        <h3 className="text-base font-semibold text-primary">{t.howItWorks.whoTitle}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whoIsThisFor.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-primary">
              <svg className="h-4 w-4 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="mt-8" padding="lg">
        <h3 className="text-2xl font-bold text-primary sm:text-3xl">{t.howItWorks.valueTitle}</h3>
        <p className="mt-2 text-sm text-muted">
          {t.howItWorks.valueSubtitle}
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4 rounded-xl border border-border-subtle bg-surface p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-muted/30 text-accent">
                <benefit.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-base font-semibold text-primary">{benefit.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
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
