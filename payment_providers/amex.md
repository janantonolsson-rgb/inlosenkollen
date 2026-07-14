# American Express (Amex)

> **Typ:** Kortnätverk + kortutgivare – **kan agera inlösare direkt** (trepartsmodell)  
> **Marknadsposition:** ~4 % av svenska korttransaktioner; accepteras av ~70 % av handlare  
> **Webb:** [americanexpress.com/se/merchant](https://www.americanexpress.com/se/merchant/)

---

## Är Amex en inlösare?

**Delvis – Amex är ett specialfall.** Till skillnad från Visa och Mastercard använder American Express en **trepartsmodell** (closed-loop):

```
Visa/Mastercard (fyrparts):  Kund → Issuer → Nätverk → Acquirer → Handlare
Amex (treparts):             Kund → AMEX (utgivare + nätverk + inlösare) → Handlare
```

Amex kombinerar tre roller i ett bolag:
1. **Kortutgivare** – utfärdar Amex-kort
2. **Kortnätverk** – driver betalningsinfrastrukturen
3. **Inlösare** – kan ta emot betalningar direkt från handlare

### Två sätt att ta emot Amex

| Modell | Hur det fungerar | Avtal med |
|---|---|---|
| **Direktavtal med Amex** | Du tecknar handlaravtal direkt med American Express | Amex |
| **Via din inlösare** | Din befintliga inlösare (Swedbank Pay, Adyen m.fl.) hanterar Amex som en betalmetod | Inlösaren (Amex aktiveras som tillägg) |

De flesta svenska webshoppar aktiverar Amex **via sin befintliga inlösare** – du behöver inte separat avtal med Amex om din inlösare redan stödjer det.

---

## Avgifter

### Direktavtal med Amex

| Post | Belopp |
|---|---|
| Serviceavgift | **Individuell procentsats** (anges i avtal) |
| Uppskattat intervall | **2,5–3,5 %** per transaktion |
| Fast avgift per transaktion | Kan förekomma (avtalsberoende) |
| Anslutningsavgift | 0 kr (enligt Amex) |
| Månadsavgift | 0 kr |
| Årsavgift | Kan förekomma (avtalsberoende) |

Amex debiterar **netto** – serviceavgiften dras vid varje utbetalning, inte månadsvis.

*Exakt procentsats finns i ditt handlaravtal eller i Amex affärskonto online.*

### Via inlösare (t.ex. Swedbank Pay, Adyen)

| Inlösare | Amex-avgift |
|---|---|
| Adyen | €0,11 + 3,95 % (global) |
| Swedbank Pay | Ingår i kortinlösenavtal (individuell prissättning) |
| Stripe | Ingår i internationell kortavgift (3,25 % + 1,80 kr) |

---

## Villkor (direktavtal)

| Aspekt | Detalj |
|---|---|
| Avtalstyp | American Express Merchant Agreement |
| Utbetalning | Netto (avgift dras vid utbetalning) |
| Kreditrisk | Amex bär risken (de äger kundrelationen) |
| KYC | Företagsverifiering vid ansökan |
| Registrering | Affärskonto online för spårning och rapporter |
| Support | 08-429 56 80 |

---

## Setup

### Alternativ A: Via befintlig inlösare (vanligast)

1. Kontrollera att din inlösare stödjer Amex (Swedbank Pay, Nets, Adyen, Worldline – ja)
2. Be din inlösare aktivera Amex på ditt konto
3. Klart – Amex visas som betalmetod i checkout/terminal

### Alternativ B: Direktavtal med Amex

1. Ansök via [americanexpress.com/se/merchant](https://www.americanexpress.com/se/merchant/)
2. Eller ring **08-429 56 80**
3. Amex granskar och godkänner
4. Kontakta terminalleverantör/inlösare för aktivering
5. Registrera affärskonto online

**Tid:** Dagar till veckor beroende på modell.

---

## Amex i Sverige – marknadsfakta

| Fakta | Värde |
|---|---|
| Marknadsandel (kort) | ~4 % i Sverige |
| Handlaracceptans | ~70 % (vs. 95 %+ för Visa/MC) |
| Kundprofil | Högre köpkraft, internationella resenärer, företagskunder |
| Varumärkeskännedom | Starkt bland premiumkonsumenter |

### Varför vissa handlare inte tar Amex

1. **Högre avgift** – 2,5–3,5 % vs. 1,5–2,5 % för Visa/MC
2. **Låg marknadsandel** – bara ~4 % av kort i Sverige
3. **Tekniska begränsningar** – äldre kassasystem saknar ibland Amex-stöd

### Varför du bör överväga Amex

- Amex-kortinnehavare har i snitt **högre ordervärden**
- Internationella kunder förväntar sig Amex-acceptans
- Om din inlösare redan stödjer det – **minimal extra setup**
- Differentiering mot konkurrenter som inte tar Amex

---

## Amex vs. Visa/Mastercard vs. inlösare

| Aspekt | Amex | Visa / Mastercard | Inlösare |
|---|---|---|---|
| Typ | Closed-loop (3-part) | Open-loop (4-part) | Bank/PSP |
| Utfärdar kort | ✅ Ja | ❌ Nej | ❌ Nej |
| Kan vara inlösare | ✅ Ja (direkt) | ❌ Nej | ✅ Ja |
| Avtal med handlare | ✅ Möjligt (direkt) | ❌ Nej | ✅ Ja |
| EU interchange-tak | ❌ Ej reglerat | ✅ 0,2–0,3 % | N/A |
| Typisk avgift (SE) | 2,5–3,5 % | 1,5–2,5 % (totalt) | Ingår i ovan |
| Marknadsandel (SE) | ~4 % | ~95 % kombinerat | N/A |

---

## Lämplig för

- E-handel med internationell kundbas
- Hotell, resor, premiumsegment
- Handlare vars inlösare redan stödjer Amex (lägger till minimal kostnad)
- B2B med företagskunder som använder Amex Corporate

## Mindre lämplig för

- Lågmarginal-handel där 3 %+ kortavgift äter vinsten
- Små webshoppar med enbart svenska konsumenter
- Om din inlösare/terminal inte stödjer Amex

---

##Källor

- [American Express – Ta emot kort (SE)](https://www.americanexpress.com/se/merchant/accept-the-card.html)
- [American Express – Kom igång (SE)](https://www.americanexpress.com/se/merchant/getting-started.html)
- [Adyen – American Express Sverige](https://www.adyen.com/sv_SE/betalningsmetoder/american-express)
- [Kreditio – Vilka ställen tar Amex 2026](https://kreditio.se/artikel/vilka-stallen-tar-amex/)
