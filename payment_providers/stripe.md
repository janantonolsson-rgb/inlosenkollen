# Stripe

> **Typ:** Betalväxel (PSP) / aggregator – ej traditionell kortinlösare  
> **Marknadsposition:** Global ledare för online-betalningar; snabbast att komma igång  
> **Webb:** [stripe.com/se](https://stripe.com/se)

---

## Översikt

Stripe är en global betalplattform med transparent, publicerad prissättning och self-service-onboarding. I Sverige används Stripe främst av tech-startups, SaaS-bolag, marknadsplatser och e-handlare med internationell kundbas. Stripe agerar som aggregator (PSP) snarare än traditionell inlösare.

**Styrkor:**
- Transparent prissättning – inga dolda avgifter
- Self-service – live samma dag
- Ingen månadsavgift, ingen bindningstid
- Utmärkt API och dokumentation
- 135+ valutor, 195 länder
- Inbyggd bedrägeriskydd (Radar)

**Svagheter:**
- Ingen Swish, ingen faktura/BNPL (utom Klarna via Stripe)
- Ingen fysisk terminal i Sverige (begränsat)
- Sämre konvertering i ren svensk B2C utan lokala metoder
- Support främst på engelska

---

## Avgifter (Sverige, standard)

### Kortbetalningar online

| Korttyp | Avgift |
|---|---|
| Standardkort EES (debit) | **1,5 % + 1,80 kr** |
| Premiumkort EES (kredit) | **1,9 % + 1,80 kr** |
| Brittiska kort | 2,5 % + 1,80 kr |
| Internationella kort | 3,25 % + 1,80 kr |
| + Valutaväxling | +2 % (om annan valuta) |

### Övriga betalmetoder

| Metod | Avgift |
|---|---|
| Klarna (via Stripe) | Från 2,99 % + 4,50 kr |
| SEPA-autogiro | 3,60 kr |
| Apple Pay / Google Pay | Samma som underliggande kort |
| Link (Stripes plånbok) | 1,5 % + 1,80 kr (EES) |

### Fasta avgifter

| Post | Belopp |
|---|---|
| Månadsavgift | 0 kr |
| Startavgift | 0 kr |
| Stängningsavgift | 0 kr |
| Utbetalning | Gratis (standardschema) |

### Tvister & övrigt

| Post | Belopp |
|---|---|
| Chargeback (tvist) | 200 kr per tvist |
| Manuellt bestridande | 200 kr (återbetalas vid vinst) |
| Återbetalning | Ingen extra avgift (processavgiften återbetalas ej) |

### Custom pricing

Tillgängligt för företag med stor volym:
- IC+ (Interchange++) prissättning
- Volymrabatter
- Flerproduktsrabatter
- Landsspecifika avgifter

---

## Villkor

| Aspekt | Detalj |
|---|---|
| Avtalstyp | Stripe Services Agreement |
| Bindningstid | Ingen |
| Utbetalning | 2 bankdagar (standard) |
| Kreditrisk | Handlaren |
| KYC/krav | Registrerat företag, verifiering online |
| Reserver | Rolling reserve kan tillämpas |
| PCI DSS | Stripe hanterar (SAQ A) |

---

## Setup & onboarding

### Tidslinje

```
Registrera konto → Verifiera företag → Integrera → Test → Live
                   Total: samma dag till 1–2 dagar
```

| Steg | Tid | Beskrivning |
|---|---|---|
| 1. Skapa konto | 10 min | stripe.com – e-post + lösenord |
| 2. Företagsverifiering | 1–24 timmar | Organisationsnummer, bankkonto |
| 3. Integration | 1 timmar–2 dagar | Plugin, Checkout eller API |
| 4. Go-live | Omedelbart | Testläge → produktion |

### Integrationsalternativ

| Metod | Kodning krävs | Passar |
|---|---|---|
| **Stripe Checkout** | Minimal | Snabbast, hosted |
| **Payment Element** | Medel | Custom design, embedded |
| **Stripe API** | Hög | Full kontroll |
| **No-code** | Ingen | Payment Links, Invoicing |

### Plattformar med färdiga plugins

- Shopify (Shopify Payments drivs av Stripe i många länder)
- WooCommerce
- Magento
- PrestaShop
- Custom / headless via API

### Teknisk stack

```
Kund → Din webshop → Stripe API → Kortnätverk → Utbetalning till ditt bankkonto
```

**Testmiljö:** Fullt fungerande sandbox med testkortnummer.

---

## Kostnadsexempel

### Månad med 200 ordrar à 500 kr (100 000 kr omsättning)

| Kortmix | Beräkning | Total |
|---|---|---|
| 100 % EES debit | 200 × (7,50 + 1,80) = | **1 860 kr** |
| 50 % debit, 50 % premium | 100 × 9,30 + 100 × 11,30 = | **2 060 kr** |
| 20 % internationellt | Blandat | **~2 200 kr** |

### Jämförelse per ordervärde (EES debit)

| Ordervärde | Stripe-avgift | Klarna (jämförelse) |
|---|---|---|
| 100 kr | 3,30 kr | 5,39 kr |
| 500 kr | 9,30 kr | 15,35 kr |
| 1 000 kr | 16,80 kr | 27,80 kr |

*Stripe blir relativt dyrare vid låga ordervärden p.g.a. fast avgift 1,80 kr.*

---

## Betalmetoder

| Metod | Tillgänglig |
|---|---|
| Visa / Mastercard | ✅ |
| American Express | ✅ |
| Apple Pay / Google Pay | ✅ |
| Klarna (via Stripe) | ✅ |
| SEPA Direct Debit | ✅ |
| Swish | ❌ |
| Faktura / BNPL (eget) | ❌ (utom Klarna) |
| 125+ globala metoder | ✅ |

---

## Lämplig för

- Tech-startups och SaaS
- Internationell e-handel
- Marknadsplatser och plattformar (Stripe Connect)
- Företag som vill ha transparent, förutsägbar prissättning
- Snabb MVP/lansering

## Mindre lämplig för

- Ren svensk B2C som behöver Swish + Klarna i samma kassa
- Fysisk butik (begränsat terminalutbud i SE)
- Företag som prioriterar lägsta möjliga % vid hög volym (förhandla med Swedbank Pay istället)

---

##Källor

- [Stripe Pricing Sverige](https://stripe.com/se/pricing)
- [Stripe – Kortavgifter i Sverige](https://stripe.com/se/resources/more/card-fees-in-sweden)
- [Ekonomipiloten – Stripe vs Klarna 2026](https://ekonomipiloten.se/guider/betalningar/hur-mycket-kostar-klarna-stripe-swish)
