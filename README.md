# Westpay – Intelligent betalningsrouting

Svensk B2B-webbapplikation som visar hur mycket ett företag potentiellt kan spara genom att routa korttransaktioner till den mest fördelaktiga inlösaren. Kalkylatorn fungerar som säljverktyg för Westpay.

> **Viktigt:** Alla beräkningar är uppskattningar baserade på användarens inmatning. Westpay garanterar inte ett visst pris eller en viss besparing.

## Funktioner

- **3-stegs kalkylator** – volym, transaktionsmix och inlösare/priser
- **Intelligent routing** – varje kortkategori routas till lägsta kostnad per inlösare
- **Resultatvy** – månads-/årsbesparing, procent, 3-årsprognos, routingtabell och diagram
- **Känslighetsanalys** – se hur besparingen påverkas av volymförändringar
- **Leadformulär** – kontaktformulär med mock-CRM (redo för HubSpot-integration)
- **Marknadsundersökning** – dokumentation av svenska betalningsleverantörer i `payment_providers/`

## Teknikstack

| Lager | Teknik |
|---|---|
| Frontend | React 19, TypeScript |
| Bygg | Vite 8, Rolldown |
| Styling | Tailwind CSS 4 |
| Diagram | Recharts |
| Lint | Oxlint |

## Kom igång

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Produktionsbygge → dist/
npm run preview  # Förhandsgranska bygge
npm run lint     # Oxlint
```

## Projektstruktur

```
payments/
├── src/
│   ├── App.tsx                 # Sidlayout och sektioner
│   ├── components/
│   │   ├── calculator/         # 3-stegs wizard (volym, mix, inlösare)
│   │   ├── hero/               # Hero + routing-illustration
│   │   ├── layout/             # Header, footer, disclaimer
│   │   ├── lead/               # Kontaktformulär
│   │   ├── results/            # Resultat, diagram, routingtabell
│   │   ├── sections/           # Hur det fungerar, APM
│   │   └── shared/             # Button, Card
│   ├── context/
│   │   └── CalculatorContext.tsx  # State + beräkningsresultat
│   ├── data/
│   │   └── defaults.ts         # Exempeldata och standardinlösare
│   ├── lib/
│   │   ├── calculations.ts     # Kostnads- och besparingslogik
│   │   ├── routing/engine.ts   # Routingregler (lägsta kostnad)
│   │   ├── formatters.ts       # Valuta- och procentformatering
│   │   ├── validation.ts       # Formulärvalidering
│   │   └── lead.ts             # Mock lead submission
│   └── types/
│       └── calculator.ts       # Typer, mix-kategorier, etiketter
│
├── payment_providers/          # Marknadsundersökning (ej appkod)
│   ├── README.md               # Översikt och jämförelse
│   ├── avgifter.md             # Procent, fasta och månadskostnader
│   ├── villkor.md              # Avtalsvillkor
│   └── *.md                    # Profiler per leverantör
│
├── AGENTS.md                   # Instruktioner för AI-agenter
└── .cursor/rules/              # Cursor-regler per domän
```

## Kalkylatorlogik

### Transaktionsmix → priskategori

| Mixkategori | Priskategori |
|---|---|
| Visa Debit, Mastercard Debit | Svenska debitkort |
| Svenska kreditkort | Svenska kreditkort |
| Företagskort | Företagskort |
| EU/EES-kort | EU/EES-kort |
| Internationella kort | Internationella kort |
| American Express | Amex |

### Routing

Motorn i `src/lib/routing/engine.ts` tillämpar regler i prioritetsordning. Standardregeln (`lowest-cost`) väljer inlösaren med lägsta beräknade kostnad per kategori. Nya regler (t.ex. godkännandegrad, max-andel per inlösare) kan läggas till med högre prioritet.

### Kostnadsformel

```
kostnad = volym × (procent / 100) + antal_transaktioner × fast_avgift
```

## Design

Nordisk fintech-estetik med Tailwind `@theme`-variabler i `src/index.css`:

- **Primary:** `#0f2b46`
- **Accent:** `#2d6cdf`
- **Surface:** `#f7f9fc`
- **Success:** `#0d7c4e`

## Marknadsundersökning

Mappen `payment_providers/` innehåller research om svenska betalningsaktörer (Swedbank Pay, Nets/Nexi, Klarna, Stripe, Worldline m.fl.). Den är **separerad från appkoden** och används som referensmaterial – inte som datakälla i kalkylatorn.

Se [payment_providers/README.md](./payment_providers/README.md) för jämförelsetabeller och rekommendationer.

## Vidare utveckling

- [ ] HubSpot/CRM-integration i `src/lib/lead.ts`
- [ ] Ytterligare routingregler i `src/lib/routing/engine.ts`
- [ ] Koppla `payment_providers/`-data till förifyllda inlösare (valfritt).
