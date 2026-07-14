# Screening: Kortinlösare & betalningsleverantörer för webshoppar (Sverige)

> **Senast uppdaterad:** 2026-07-10  
> **Syfte:** Marknadsundersökning av de fem största aktörerna för svensk e-handel – villkor, avgifter och setup.

---

## Sammanfattning

Den svenska betalmarknaden för webshoppar domineras av en blandning av **traditionella kortinlösare** (acquirers) och **betalväxlar/PSP:er** (Payment Service Providers) som ofta paketerar inlösen, checkout och lokala betalmetoder i ett.

| Leverantör | Typ | Bäst för | Publicerad kortavgift | Månadsavgift | Setup-tid |
|---|---|---|---|---|---|
| [Swedbank Pay](./swedbank-pay.md) | Inlösare + PSP | Stora volymer, nordisk etablering | Från 0,79 % | 0 kr (portal) | 3–5 vard + 5 vard (Visa/MC) |
| [Nets / Nexi](./nets-nexi.md) | Inlösare + PSP | Omnikanal, butik + online | Offert | Offert | Dagar–veckor |
| [Klarna](./klarna.md) | PSP + checkout | Svensk B2C, BNPL | ca 2,49 % + 2,90 kr | 0 kr | Dagar–veckor |
| [Stripe](./stripe.md) | PSP (aggregator) | Snabb start, internationellt | 1,5 % + 1,80 kr (EES) | 0 kr | Samma dag |
| [Worldline](./worldline.md) | Inlösare + PSP | Komplett paket, WooCommerce | Från 1,95 % | 245 kr/mån | 1–2 veckor |

**Priser & villkor:** Se [avgifter.md](./avgifter.md) för alla kostnader och [villkor.md](./villkor.md) för avtalsvillkor.

**Viktig distinktion:** En *kortinlösare* hanterar avräkningen mellan kortnätverk och ditt bankkonto. En *PSP/betalväxel* tillhandahåller ofta checkout-gränssnittet och kan antingen ha egen inlösen eller koppla till en tredjepartsinlösare. I praktiken köper många webshoppar ett paket som inkluderar båda.

---

## Betalkedjan – vem gör vad?

Alla aktörer i betalkedjan är **inte** inlösare. Här är en översikt:

```
Kund → [PSP/Terminal] → [Inlösare] → [Kortnätverk] → [Kortutgivare] → Kundens bank
         Westpay           Swedbank Pay    Visa/Mastercard     SEB/Nordea
         (mellanhand)      (inlösare)      (nätverk)           (utgivare)
```

| Aktör | Typ | Inlösare? | Profil |
|---|---|---|---|
| [Swedbank Pay](./swedbank-pay.md) | Inlösare + PSP | ✅ Ja | Störst i Sverige |
| [Nets / Nexi](./nets-nexi.md) | Inlösare + PSP | ✅ Ja | Flest nordiska handlare |
| [Klarna](./klarna.md) | PSP / checkout | ❌ Nej* | Svensk e-handelsstandard |
| [Stripe](./stripe.md) | PSP (aggregator) | ⚠️ Indirekt | Snabbast igång |
| [Worldline](./worldline.md) | Inlösare + PSP | ✅ Ja | Komplett paket |
| [Westpay](./westpay.md) | Terminal + PSP | ❌ Nej | Mellanhand – kräver separat inlösare |
| [Visa](./visa.md) | Kortnätverk | ❌ Nej | Infrastruktur, ej avtalspart |
| [Mastercard](./mastercard.md) | Kortnätverk | ❌ Nej | Infrastruktur, ej avtalspart |
| [American Express](./amex.md) | Nätverk + utgivare | ⚠️ Kan vara | Trepartsmodell, kan avtalas direkt |

*\*Klarna och Stripe agerar som betalväxlar/aggregatorer – de har inlösning via partners eller egen banklicens, men du tecknar inte ett klassiskt inlösenavtal på samma sätt.*

---

## Marknadsposition i Sverige

```
Marknadsandel / position (kvalitativ)
─────────────────────────────────────────────────────────
Swedbank Pay     ████████████████████  Störst kortinlösare (~50 %+ av SE-korttransaktioner)
Nets/Nexi        ██████████████████    #1 nordiskt antal handlare (~140 000 företag)
Klarna           ██████████████████    Standard i svensk e-handel (checkout/BNPL)
Stripe           ████████████          Snabbväxande, transparent prissättning
Worldline        ██████████            Stark i Norden (fd. Bambora), publikt pris
```

---

## Avgiftsjämförelse – exempelorder 500 kr

Beräkningar baserade på publicerade standardpriser (utan volymrabatt):

| Leverantör | Avgift per order (500 kr) | Kommentar |
|---|---|---|
| Swedbank Pay | ~3,95 kr (0,79 %) | Lägst % men kräver avtal; partnerpris t.ex. 1,8 % = 9 kr |
| Stripe (EES-kort) | 9,30 kr (1,5 % + 1,80 kr) | Transparent, inga dolda avgifter |
| Worldline | ~9,75 kr (1,95 %) + 245 kr/mån | Månadsavgift fördelas över volym |
| Klarna Checkout | ~15,35 kr (2,49 % + 2,90 kr) | Inkl. BNPL; Klarna tar kreditrisk |
| Nets/Nexi | Offert | Typiskt månadsavgift + transaktionsavgift |

Vid **200 ordrar/mån à 500 kr** (100 000 kr omsättning):

| Leverantör | Månadskostnad (uppskattning) |
|---|---|
| Swedbank Pay (0,79 %) | ~790 kr |
| Stripe | ~1 860 kr |
| Worldline | ~2 195 kr (inkl. 245 kr månadsavgift) |
| Klarna | ~3 070 kr |

*OBS: Verklig kostnad beror kraftigt på kortmix (debit/kredit/företagskort/internationellt), volym och förhandlingsläge.*

---

## Setup & integration – översikt

| Leverantör | Ansökan | Teknisk integration | Plattformar |
|---|---|---|---|
| Swedbank Pay | Avtal + KYC, 3–5 bankdagar + Visa/MC-registrering | REST API, SDK, partner-plugins | WooCommerce, Magento, custom |
| Nets/Nexi | Säljkontakt, offert | Nexi Checkout, API, plugins | Shopify, WooCommerce, custom |
| Klarna | Ansökan via klarna.com/foretag | Klarna Checkout / Klarna Payments | Shopify, WooCommerce, Magento, m.fl. |
| Stripe | Registrera konto online | Stripe Checkout, Elements, API | Alla större plattformar |
| Worldline | Avtal via Worldline/SEB | Worldline Checkout, plugins | WooCommerce, custom |

---

## Rekommendationer per scenariotyp

### Liten webshop (< 50 000 kr/mån)
**Stripe** – snabbast igång, inga fasta kostnader, bra dokumentation. Komplettera med **Swish** separat.

### Medelstor svensk B2C-webshop
**Klarna Checkout** om BNPL/faktura driver konvertering, annars **Worldline Checkout** eller **Swedbank Pay** för ren kortinlösen.

### Hög volym / etablerad e-handel
**Swedbank Pay** eller **Nets/Nexi** – förhandla volymrabatt. Överväg **Adyen** (ej med i denna screening) vid internationell expansion.

### Internationell försäljning
**Stripe** eller **Adyen** – brett kortstöd och valutahantering.

### Omnikanal (butik + online)
**Nets/Nexi** eller **Swedbank Pay** – samlad portal och terminal + e-handel.

---

##Källor

- [Swedbank Pay – Kortinlösen](https://www.swedbankpay.se/vara-losningar/kortinlosen)
- [Nets/Nexi Sverige](https://payments.nets.eu/sv-SE)
- [Klarna för företag](https://www.klarna.com/se/foretag/)
- [Stripe Pricing Sverige](https://stripe.com/se/pricing)
- [Worldline Sverige – Online](https://worldline.com/sv-se/home/main-navigation/solutions/merchants/solutions-and-services/online)
- [Adyen Prissättning Sverige](https://www.adyen.com/sv_SE/prissattning)

---

## Filstruktur

```
payment_providers/
├── README.md              ← Denna fil (översikt & jämförelse)
├── avgifter.md            ← Avgifter – procent, fasta & månadskostnader
├── villkor.md             ← Avtalsvillkor – samlad jämförelse
│
│  Inlösare & PSP:er
├── swedbank-pay.md        ← Swedbank Pay (inlösare)
├── nets-nexi.md           ← Nets / Nexi (inlösare)
├── klarna.md              ← Klarna (PSP/checkout)
├── stripe.md              ← Stripe (PSP)
├── worldline.md           ← Worldline (inlösare + PSP)
│
│  Övriga aktörer i betalkedjan
├── westpay.md             ← Westpay (terminal/PSP – ej inlösare)
├── visa.md                ← Visa (kortnätverk – ej inlösare)
├── mastercard.md          ← Mastercard (kortnätverk – ej inlösare)
└── amex.md                ← American Express (nätverk, kan agera inlösare)
```
