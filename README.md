# Inlösenkollen 1.0

Oberoende analys av kortinlösenkostnader och intelligent routing. Byggd med
Vite + React + TypeScript. Detta är version 1.0 — en ombyggnad med en
IC++-baserad beräkningsmodell och tredelad besparing.

## Vad som är nytt i 1.0 (vs tidigare version)

Beräkningsmodellen var tidigare strukturellt missvisande: ett **blended**
nuvarande pris jämfördes mot **differentierade** katalogpriser, vilket både var
otrovärdigt och kunde visa fel besparing. 1.0 åtgärdar detta:

- **IC++-dekomponering.** Alla acquirerpriser bryts ner i
  `interchange + scheme fee + acquirer-markup + fast avgift`. Interchange och
  scheme är reglerade/schablon och i stort lika för alla — det som skiljer
  acquirrar åt är markup, och det är det som visas som förhandlingsbart.
- **Segmenterade nuvarande priser.** "Nuvarande avtal" kan anges per korttyp
  (hög precision) eller som blended snitt (låg precision → resultat visas som
  ett intervall med tydlig varning). Båda sidor jämförs i samma granularitet.
- **Tredelad besparing** visas öppet:
  1. **Inköpsbesparing** — vinst av att byta till / omförhandla med den bästa
     enskilda inlösaren.
  2. **Äkta routingbesparing** — ytterligare vinst av att använda flera inlösare
     parallellt (vs bästa enskilda).
  3. **Implementeringskostnad** — uppskattad kostnad per extra inlösarkoppling,
     dras av från netto.
- **Besparing som intervall**, inte en falsk exakt siffra. Intervallet styrs av
  hur stor andel av volymen som är routningsbar (60–100 %).
- **Volymbands-skalning av markup.** Större volym → lägre acquirer-markup
  (interchange/scheme är oförändrade).
- **Konfidensgrad och datum på varje pris.** Endast Elavons partnervillkor via
  Westpay är markerat som `Bekräftat`; övriga är `Publikt listpris`,
  `Uppskattning` etc.
- **Routing får aldrig öka kostnaden.** Nuvarande pris är alltid en kandidat per
  kategori, så routad kostnad ≤ nuvarande (garanterat, testat).
- **Amex** kan behållas hos nuvarande (realistiskt — Amex har egen modell).
- **Metodbox** ("Så räknar vi") visas bredvid resultatet.

## Kör lokalt

```bash
npm install
npm run dev      # utvecklingsserver
npm run build    # typecheck + produktionsbuild till dist/
npm run preview  # förhandsgranska build
npm test         # kör enhetstester (vitest)
```

## Deploy till Vercel

1. Lägg mappen i ett GitHub-repo.
2. Importera i Vercel — det upptäcks automatiskt som ett Vite-projekt
   (framework: Vite, build: `npm run build`, output: `dist`).
3. Ingen `vercel.json` krävs; en är inkluderad ändå för säkerhets skull.

## Projektstruktur

```
src/
  types/calculator.ts        # typer (IC++, current-agreement, results)
  data/
    interchange.ts           # interchange + scheme-referensvärden (IFR-ankrade)
    acquirerCatalog.ts       # acquirrar: markup + konfidens + datum
    defaults.ts               # default-state, volymband, incumbent-exempel
  lib/
    calculations.ts          # IC++-matematik + tredelad besparing
    routing/engine.ts        # routingbeslut per kategori (savings ≥ 0)
    formatters.ts / currency.ts
  i18n/translations.ts       # sv + en
  context/LanguageContext.tsx
  components/                 # Hero, HowItWorks, Calculator, Results, ...
  App.tsx
```

## Viktigt om priserna

Priserna i `acquirerCatalog.ts` är **illustrativa estimat** med konfidensgrad.
Interchange-/scheme-värden i `interchange.ts` är schablon utgångspunkter (IFR-cap
gäller EEA-konsumentskort, inte corporate/internationellt/Amex). Innan tjänsten
används skarpt mot kunder: bekräfta Elavons partnervillkor med Westpay och
ersätt uppskattade poster med verifierade offerter.

## Ansvar

Beräkningen är en uppskattning och utgör inte ett erbjudande eller en garanti
för ett visst pris eller en viss besparing. Se disclaimern i appen.
