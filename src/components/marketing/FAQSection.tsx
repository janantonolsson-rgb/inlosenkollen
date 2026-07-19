import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/translations'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/Section'

type FaqItem = { question: string; answer: string }

const faqByLanguage: Record<Language, FaqItem[]> = {
  sv: [
    {
      question: 'Måste vi byta betalterminaler?',
      answer: 'Det beror på er nuvarande lösning. Intelligent routing kräver stöd för flera inlösare.',
    },
    {
      question: 'Är detta bara för stora företag?',
      answer:
        'Nej, men värdet ökar med företagets kortvolym. Intelligent routing optimerar kostnaden för varje transaktion, vilket innebär att större betalningsvolymer ger större besparingspotential. För företag med många kortbetalningar kan även små förbättringar per transaktion skapa en märkbar effekt på de totala betalningskostnaderna.',
    },
    {
      question: 'Kan vi behålla vår nuvarande inlösare?',
      answer:
        'Ja, intelligent routing fungerar både med befintliga och nya inlösenavtal. Företaget kan behålla sina nuvarande avtal och vid behov lägga till fler inlösare för att kunna optimera varje transaktion.',
    },
    {
      question: 'Hur lång tid tar en implementation?',
      answer:
        'Själva aktiveringen av intelligent routing kan normalt genomföras på några minuter, förutsatt att företaget har en kompatibel betalningslösning och att inlösenavtal redan finns på plats. Det som kan ta längre tid är att samla in och jämföra erbjudanden från inlösande banker. Därför är det en fördel att börja processen tidigt och ta in offerter redan idag, så att ert företag skapar bästa möjliga förutsättningar för att optimera sina betalningskostnader.',
    },
  ],
  en: [
    {
      question: 'Do we need to change payment terminals?',
      answer: 'It depends on your current solution. Intelligent routing requires support for multiple acquirers.',
    },
    {
      question: 'Is this only for large companies?',
      answer:
        'No, but the value increases with the company\u2019s card turnover. Intelligent routing optimizes the cost of every transaction, which means larger payment volumes create greater savings potential. For companies with many card payments, even small improvements per transaction can create a noticeable effect on total payment costs.',
    },
    {
      question: 'Can we keep our current acquirer?',
      answer:
        'Yes, intelligent routing works with both existing and new acquiring agreements. The company can keep its current agreements and, if needed, add more acquirers to optimize every transaction.',
    },
    {
      question: 'How long does an implementation take?',
      answer:
        'Activating intelligent routing itself can normally be done within minutes, provided the company has a compatible payment solution and acquiring agreements already in place. What can take longer is gathering and comparing offers from acquiring banks. That\u2019s why it\u2019s an advantage to start the process early and gather quotes today, so your company creates the best possible conditions for optimizing its payment costs.',
    },
  ],
  no: [
    {
      question: 'Må vi bytte betalingsterminaler?',
      answer: 'Det avhenger av deres nåværende løsning. Intelligent ruting krever støtte for flere innløsere.',
    },
    {
      question: 'Er dette bare for store bedrifter?',
      answer:
        'Nei, men verdien øker med bedriftens kortvolum. Intelligent ruting optimaliserer kostnaden for hver transaksjon, noe som betyr at større betalingsvolum gir større besparelsespotensial. For bedrifter med mange kortbetalinger kan selv små forbedringer per transaksjon skape en merkbar effekt på de totale betalingskostnadene.',
    },
    {
      question: 'Kan vi beholde vår nåværende innløser?',
      answer:
        'Ja, intelligent ruting fungerer både med eksisterende og nye innløsningsavtaler. Bedriften kan beholde sine nåværende avtaler og ved behov legge til flere innløsere for å kunne optimalisere hver transaksjon.',
    },
    {
      question: 'Hvor lang tid tar en implementering?',
      answer:
        'Selve aktiveringen av intelligent ruting kan normalt gjennomføres på noen minutter, forutsatt at bedriften har en kompatibel betalingsløsning og at innløsningsavtaler allerede er på plass. Det som kan ta lengre tid, er å innhente og sammenligne tilbud fra innløsende banker. Derfor er det en fordel å starte prosessen tidlig og innhente tilbud allerede i dag, slik at bedriften skaper best mulig forutsetninger for å optimalisere betalingskostnadene sine.',
    },
  ],
  da: [
    {
      question: 'Skal vi skifte betalingsterminaler?',
      answer: 'Det afhænger af jeres nuværende løsning. Intelligent routing kræver understøttelse af flere indløsere.',
    },
    {
      question: 'Er dette kun for store virksomheder?',
      answer:
        'Nej, men værdien stiger med virksomhedens kortomsætning. Intelligent routing optimerer omkostningen for hver transaktion, hvilket betyder, at større betalingsvolumener giver større besparelsespotentiale. For virksomheder med mange kortbetalinger kan selv små forbedringer pr. transaktion skabe en mærkbar effekt på de samlede betalingsomkostninger.',
    },
    {
      question: 'Kan vi beholde vores nuværende indløser?',
      answer:
        'Ja, intelligent routing fungerer både med eksisterende og nye indløsningsaftaler. Virksomheden kan beholde sine nuværende aftaler og om nødvendigt tilføje flere indløsere for at kunne optimere hver transaktion.',
    },
    {
      question: 'Hvor lang tid tager en implementering?',
      answer:
        'Selve aktiveringen af intelligent routing kan normalt gennemføres på nogle få minutter, forudsat at virksomheden har en kompatibel betalingsløsning, og at indløsningsaftaler allerede er på plads. Det, der kan tage længere tid, er at indhente og sammenligne tilbud fra indløsende banker. Derfor er det en fordel at starte processen tidligt og indhente tilbud allerede i dag, så jeres virksomhed skaber de bedst mulige forudsætninger for at optimere sine betalingsomkostninger.',
    },
  ],
  fi: [
    {
      question: 'Täytyykö meidän vaihtaa maksupäätteitä?',
      answer: 'Se riippuu nykyisestä ratkaisustanne. Älykäs reititys edellyttää tukea useammalle maksunvälittäjälle.',
    },
    {
      question: 'Onko tämä vain suurille yrityksille?',
      answer:
        'Ei, mutta hyöty kasvaa yrityksen korttimyynnin mukana. Älykäs reititys optimoi jokaisen tapahtuman kustannuksen, mikä tarkoittaa, että suuremmat maksuvolyymit tuovat suuremman säästöpotentiaalin. Yrityksille, joilla on paljon korttimaksuja, jopa pienet parannukset tapahtumaa kohden voivat vaikuttaa huomattavasti kokonaismaksukustannuksiin.',
    },
    {
      question: 'Voimmeko säilyttää nykyisen maksunvälittäjämme?',
      answer:
        'Kyllä, älykäs reititys toimii sekä olemassa olevien että uusien vastaanottosopimusten kanssa. Yritys voi säilyttää nykyiset sopimuksensa ja tarvittaessa lisätä useampia maksunvälittäjiä optimoidakseen jokaisen tapahtuman.',
    },
    {
      question: 'Kuinka kauan käyttöönotto kestää?',
      answer:
        'Itse älykkään reitityksen käyttöönotto voidaan yleensä toteuttaa muutamassa minuutissa, mikäli yrityksellä on yhteensopiva maksuratkaisu ja vastaanottosopimukset ovat jo voimassa. Se, mikä voi viedä enemmän aikaa, on tarjousten kerääminen ja vertailu vastaanottavilta pankeilta. Siksi kannattaa aloittaa prosessi ajoissa ja hankkia tarjouksia jo tänään, jotta yrityksenne luo parhaat mahdolliset edellytykset maksukustannustensa optimoinnille.',
    },
  ],
}

export function FAQSection() {
  const { language, t } = useLanguage()
  const items = faqByLanguage[language]
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20">
      <SectionHeader title={t.faq.title} />
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <Card key={item.question} padding="none" className="overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-primary sm:text-base">{item.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
