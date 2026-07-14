# Worldline (fd. Bambora)

> **Typ:** Kortinlösare + betalväxel (PSP)  
> **Marknadsposition:** En av Europas ledande inlösare; stark i Norden sedan Bambora-uppköpet  
> **Webb:** [worldline.com/sv-se](https://worldline.com/sv-se)

---

## Översikt

Worldline (som köpte Bambora 2017, och tidigare Ingenico) erbjuder ett komplett paket för e-handel med både inlösenavtal och checkout i en lösning. Worldline Checkout är särskilt populärt för WooCommerce-butiker och via bankpartners som SEB.

**Styrkor:**
- Publicerad prissättning (sällsynt bland inlösare)
- Allt-i-ett: inlösen + checkout i ett paket
- Bankneutral utbetalning (daglig)
- 3D Secure inkluderat
- Swish, MobilePay, Vipps för nordiska marknader
- Ingen bindningstid, ingen startavgift

**Svagheter:**
- Månadsavgift 245 kr (högre fast kostnad vid låg volym)
- Internationella/företagskort dyrare (från 2,95 %)
- Mindre developer-vänlig än Stripe
- Support 6 dagar/vecka (inte 24/7)

---

## Avgifter

### Worldline Checkout (publicerat paketpris)

| Post | Belopp |
|---|---|
| Månadsavgift | **245 kr** (exkl. moms) |
| Transaktionsavgift (Visa/MC) | **Från 1,95 %** |
| Internationella kort | **Från 2,95 %** |
| Företagskort | **Från 2,95 %** |
| Swish | **2,45 kr/transaktion** + bankens avgift |
| Startavgift | 0 kr |
| Bindningstid | Ingen |

*Priser exkl. moms. Worldline reserverar sig för prisändringar.*

### Partnerpriser (exempel)

Via SEB eller återförsäljare som Kassahuset/Betalguiden kan förhandlade priser gälla:

| Paket | Månadsavgift | Transaktionsavgift |
|---|---|---|
| Bambora One (terminal + inlösen) | 199 kr/terminal | Från 1,5 % |
| Worldline Checkout (SEB-kund) | 245 kr | Från 1,95 % |

### Kostnadsexempel

**200 ordrar/mån à 500 kr (100 000 kr omsättning, enbart kort):**

```
Transaktionsavgift: 100 000 × 1,95 % = 1 950 kr
Månadsavgift:          245 kr
─────────────────────────────────
Total:               2 195 kr/mån (2,2 % effektiv avgift)
```

**50 ordrar/mån à 500 kr (25 000 kr omsättning):**

```
Transaktionsavgift: 25 000 × 1,95 % = 488 kr
Månadsavgift:          245 kr
─────────────────────────────────
Total:                 733 kr/mån (2,9 % effektiv avgift)
```

*Månadsavgiften slår hårdare vid låg volym.*

---

## Villkor

| Aspekt | Detalj |
|---|---|
| Avtalstyp | Inlösenavtal + checkout (paket) |
| Bindningstid | Ingen |
| Utbetalning | Daglig (första bankdagen efter transaktion) |
| Valutor | 100+ valutor accepteras, utbetalning i SEK |
| Kreditrisk | Handlaren |
| KYC/krav | Registrerat företag, företagskonto |
| 3D Secure | Inkluderat (Mastercard Identity Check, Verified by Visa) |
| PCI DSS | Worldline hanterar |

---

## Setup & onboarding

### Tidslinje

```
Ansökan → Avtal → Integration → Test → Live
          Total: ca 1–2 veckor
```

| Steg | Tid | Beskrivning |
|---|---|---|
| 1. Ansökan | 1 dag | Via worldline.com, SEB eller återförsäljare |
| 2. Avtal & KYC | 3–7 dagar | Företagsverifiering |
| 3. Integration | 1–3 dagar | Plugin eller API |
| 4. Go-live | 1 dag | Testmiljö tillgänglig |

### Teknisk integration

| Metod | Beskrivning |
|---|---|
| Worldline Checkout (plugin) | WooCommerce – färdig plugin |
| Hosted checkout | Omdirigering till Worldlines betalsida |
| API | REST API för custom-integration |
| Kodsnutt | "Några rader kod" enligt Worldline |

### Merchant Portal

- Transaktionsöversikt i realtid
- Utbetalningshistorik
- Rapporter och export
- Support via telefon, mejl och chatt (6 dagar/vecka)

---

## Betalmetoder

| Metod | Tillgänglig | Avgift |
|---|---|---|
| Visa / Mastercard | ✅ | Från 1,95 % |
| Maestro | ✅ | Från 1,95 % |
| American Express | ✅ (tillägg) | Separat avtal |
| Swish | ✅ | 2,45 kr + bankavgift |
| MobilePay (DK) | ✅ | Ingår i checkout |
| Vipps (NO) | ✅ | Ingår i checkout |
| Masterpass | ✅ | Internationella kunder |
| Faktura / delbetalning | ✅ (tillägg) | Separat |
| Apple Pay / Google Pay | ✅ | Via kort |

---

## Worldline vs. konkurrenter

| Aspekt | Worldline | Stripe | Swedbank Pay |
|---|---|---|---|
| Publicerat pris | ✅ Ja | ✅ Ja | Delvis (kampanj) |
| Månadsavgift | 245 kr | 0 kr | 0 kr |
| Kortavgift | 1,95 % | 1,5 % + 1,80 kr | Från 0,79 % |
| Inlösare | ✅ Ja | ❌ Aggregator | ✅ Ja |
| Swish | ✅ | ❌ | ✅ |
| WooCommerce | ✅ Plugin | ✅ Plugin | ✅ |
| Onboarding | 1–2 veckor | Samma dag | 2–3 veckor |

---

## Lämplig för

- Svenska webshoppar som vill ha publikt pris och komplett paket
- WooCommerce-butiker (bra plugin)
- SEB-kunder (förmånligt partnerpris)
- Företag som vill ha Swish + kort i samma checkout
- Medelstora volymer (månadsavgiften motiveras)

## Mindre lämplig för

- Mycket låg volym (< 25 000 kr/mån) – månadsavgiften dominerar
- Internationell expansion i stor skala (Stripe/Adyen bättre)
- Tech-startups som vill ha API-first (Stripe överlägset)

---

## Historik

| År | Händelse |
|---|---|
| 2015 | Bambora grundat i Norden |
| 2017 | Uppköpt av Ingenico Group |
| 2020 | Ingenico + SIX = Worldline |
| 2023+ | Varumärket "Bambora" fasas ut till förmån för Worldline |

---

##Källor

- [Worldline Sverige – Online](https://worldline.com/sv-se/home/main-navigation/solutions/merchants/solutions-and-services/online)
- [SEB – Kortbetalning e-handel (Worldline)](https://seb.se/foretag/betalningar-konton-och-kort/ta-betalt/kortbetalning-pa-natet)
- [Kassahuset – Worldline Checkout](https://www.kassahuset.se/worldline-bambora-online-checkout/)
- [Betalguiden – Bambora/Worldline](https://betalguiden.se/partner/bambora-worldline)
