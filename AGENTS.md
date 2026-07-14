# AGENTS.md – Instruktioner för AI-agenter

Detta projekt är en **Westpay intelligent routing-kalkylator** – en svensk B2B-webbapp som uppskattar besparingar genom multi-acquirer routing. Läs denna fil innan du ändrar kod eller dokumentation.

## Projektöversikt

| Aspekt | Detalj |
|---|---|
| Språk (UI) | Svenska |
| Målgrupp | Svenska företag med kortbetalningar |
| Syfte | Säljverktyg – visa potentiell besparing, inte garanterad |
| Körning | Ren frontend (Vite + React), ingen backend |

## Arkitektur

```
Användarinmatning (CalculatorContext)
    → calculateResults() i lib/calculations.ts
        → routeTransaction() per mixkategori i lib/routing/engine.ts
    → Resultat visas i components/results/
```

**State:** `CalculatorContext` med `useReducer`. Beräkningsresultat memoizeras via `useMemo`.

**Routing:** Regelbaserad motor. Standard: `lowestCostRule` väljer billigaste inlösare per kategori. Regler har `priority` (lägre = körs först).

## Kataloger – vad som hör hemma var

| Katalog | Ansvar |
|---|---|
| `src/components/calculator/` | Wizard-steg, formulär, inlösarkort |
| `src/components/results/` | Resultatvy, diagram (Recharts), routingtabell |
| `src/lib/calculations.ts` | All kostnads- och besparingslogik |
| `src/lib/routing/engine.ts` | Routingregler – utöka här, inte i komponenter |
| `src/types/calculator.ts` | Typer, mix-kategorier, etiketter (`MIX_CATEGORY_LABELS`) |
| `src/data/defaults.ts` | Exempeldata, standardinlösare |
| `payment_providers/` | Marknadsresearch (markdown) – **inte appkod** |

## Affärsregler (följ alltid)

1. **Inga garanterade besparingar** – använd formuleringar som "uppskattning", "potentiell besparing"
2. **Disclaimer** finns i `src/components/layout/Disclaimer.tsx` – behåll eller utöka, ta inte bort
3. **Svenska i UI** – all användartext ska vara på svenska
4. **Westpay-positionering** – Westpay är betalväxel/PSP, inte inlösare; appen jämför inlösare via routing
5. **Exempeldata** – standardvärden i `defaults.ts` är illustrationer, inte faktiska avtalspriser

## Kodkonventioner

- Funktionella React-komponenter, inga klasser
- Tailwind CSS 4 med `@theme`-variabler från `src/index.css` – använd `text-primary`, `bg-accent` etc.
- Typer i `src/types/`, affärslogik i `src/lib/`, UI i `src/components/`
- Formatering via `src/lib/formatters.ts` (valuta, procent)
- Validering via `src/lib/validation.ts`
- Håll komponenter fokuserade; extrahera inte onödiga helpers

## Routingregler – hur man utökar

Lägg nya regler i `src/lib/routing/engine.ts`:

```typescript
export const myRule: RoutingRule = {
  id: 'my-rule',
  priority: 50,  // lägre = högre prioritet
  apply(ctx) { /* returnera RoutingDecision eller null */ },
}
```

Registrera i `defaultRoutingRules`. Kommentarer i filen listar planerade regler (godkännandegrad, max-andel, land, beloppssteg).

## payment_providers/

Research-mapp med markdown om svenska betalningsaktörer. Struktur:

- `README.md` – översikt och jämförelse
- `avgifter.md` – procent, fasta avgifter, månadsavgift
- `villkor.md` – avtalsvillkor
- `*.md` – profil per bolag

Vid uppdatering av research:
- Ange källa och datum
- Skilj inlösare (Swedbank Pay, Nets) från PSP (Stripe, Klarna) från nätverk (Visa, MC)
- Priser i `avgifter.md`, villkor i `villkor.md` – inte blanda

## Vanliga uppgifter

| Uppgift | Var |
|---|---|
| Nytt wizard-steg | `CalculatorWizard.tsx` + ny Step-komponent |
| Nytt diagram | `src/components/results/` |
| Ändra beräkning | `src/lib/calculations.ts` |
| Ny routingregel | `src/lib/routing/engine.ts` |
| CRM-integration | `src/lib/lead.ts` (ersätt `mockSubmitLead`) |
| Ny mixkategori | `src/types/calculator.ts` + uppdatera beräkningar |
| Uppdatera research | `payment_providers/` |

## Kommandon

```bash
npm run dev      # Utvecklingsserver
npm run build    # tsc + vite build
npm run lint     # oxlint
npm run preview  # Förhandsgranska dist/
```

## Begränsningar

- Committa inte `.env` eller credentials
- Ändra inte `dist/` manuellt – genereras av build
- Skapa inte commits om inte användaren ber om det
- `payment_providers/`-data ska inte automatiskt kopplas till kalkylatorn utan explicit begäran
