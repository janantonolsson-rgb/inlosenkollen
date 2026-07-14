# Avgifter – samlad prisöversikt

> **Senast uppdaterad:** 2026-07-10  
> **Syfte:** Alla transaktionsavgifter, fasta avgifter och månadskostnader på ett ställe.  
> **Detaljer per bolag:** Se respektive profil i mappen.

---

## Snabbjämförelse – standardpriser

| Leverantör | Procent | Fast avgift | Månadsavgift | Startavgift | Källa |
|---|---|---|---|---|---|
| [Swedbank Pay](./swedbank-pay.md) | Från **0,79 %** | Ej publicerat | 0 kr | 0 kr | Kampanjavtal |
| [Stripe](./stripe.md) | **1,5 %** (EES debit) | **1,80 kr** | 0 kr | 0 kr | Publicerad prislista |
| [Worldline](./worldline.md) | Från **1,95 %** | Ej publicerat | **245 kr** | 0 kr | Publicerat paket |
| [Klarna](./klarna.md) | **2,49 %** | **2,90 kr** | 0 kr | 0 kr | Branschstandard |
| [Nets / Nexi](./nets-nexi.md) | **0,8–2,5 %** (uppskattning) | 0–0,50 kr | 0–500 kr | Ofta 0 kr | Offert |
| [Westpay](./westpay.md) | Via inlösare | Setup möjlig | **275–355 kr** | Setup möjlig | Terminalhyra |
| [Amex](./amex.md) (direkt) | **2,5–3,5 %** | Kan förekomma | 0 kr | 0 kr | Individuellt avtal |

*Alla priser exkl. moms om inget annat anges. Verklig kostnad beror på kortmix, volym och avtal.*

---

## Inlösare & PSP:er – detaljerade avgifter

### Swedbank Pay

| Avgiftstyp | Belopp | Kommentar |
|---|---|---|
| **Transaktionsavgift (kort)** | Från **0,79 %** | Kampanjavtal, 36 mån bindning |
| Fast avgift per transaktion | Ej publicerat | Förhandlas i avtal |
| Månadsavgift (Merchant Portal) | 0 kr | |
| Startavgift | 0 kr | |
| Partnerpris (Abicart) | **1,8 %** | 0 kr/mån |
| Swish Handel (via bank) | 3 kr/st + 50 kr/mån + 1 000 kr uppläggning | Separat bankavtal |
| Filöverföring/integration | 750 kr/avtal/år | |
| Dokument på papper | 45 kr/mån | |

→ [swedbank-pay.md](./swedbank-pay.md)

---

### Stripe (Sverige, standard)

#### Kortbetalningar online

| Korttyp | Procent | Fast avgift |
|---|---|---|
| Standardkort EES (debit) | **1,5 %** | **1,80 kr** |
| Premiumkort EES (kredit) | **1,9 %** | **1,80 kr** |
| Brittiska kort | 2,5 % | 1,80 kr |
| Internationella kort | 3,25 % | 1,80 kr |
| + Valutaväxling | +2 % | (om annan valuta) |

#### Övriga betalmetoder

| Metod | Avgift |
|---|---|
| Klarna (via Stripe) | Från 2,99 % + 4,50 kr |
| SEPA-autogiro | 3,60 kr |
| Apple Pay / Google Pay | Samma som underliggande kort |

#### Fasta & tilläggsavgifter

| Post | Belopp |
|---|---|
| Månadsavgift | 0 kr |
| Startavgift | 0 kr |
| Stängningsavgift | 0 kr |
| Chargeback (tvist) | 200 kr |
| Manuellt bestridande | 200 kr (återbetalas vid vinst) |
| Återbetalning | 0 kr extra (processavgift återbetalas ej) |

→ [stripe.md](./stripe.md)

---

### Klarna

| Avgiftstyp | Belopp | Kommentar |
|---|---|---|
| **Klarna Checkout** | **2,49 % + 2,90 kr** | Alla betalmetoder (Pay Now, faktura, delbetalning) |
| Klarna Payments (inbäddad) | 1,5–3,5 % + fast avgift | Varierar |
| Shopify (flat rate från 2025) | 2,9 % | Alla Klarna-metoder |
| Månadsavgift | 0 kr | |
| Startavgift | 0 kr | |
| Återbetalning (full retur) | Avgiften återbetalas | |
| Implementering (via byrå) | 10 000–50 000 kr | Custom-integration |

→ [klarna.md](./klarna.md)

---

### Worldline

| Avgiftstyp | Belopp | Kommentar |
|---|---|---|
| **Transaktionsavgift (Visa/MC)** | Från **1,95 %** | Worldline Checkout |
| Internationella kort | Från **2,95 %** | |
| Företagskort | Från **2,95 %** | |
| Swish | **2,45 kr/st** | + bankens avgift |
| **Månadsavgift** | **245 kr** | Exkl. moms |
| Startavgift | 0 kr | |
| Bambora One (terminal + inlösen) | 199 kr/terminal + från 1,5 % | Partnerpris |

→ [worldline.md](./worldline.md)

---

### Nets / Nexi

**Inga publicerade priser.** Allt via offert.

| Avgiftstyp | Typiskt intervall (uppskattning) |
|---|---|
| Transaktionsavgift (kort) | 0,8–2,5 % |
| Fast avgift per transaktion | 0–0,50 kr |
| Månadsavgift | 0–500 kr |
| Startavgift | Ofta 0 kr (kampanj) |
| Terminalhyra | Separat |

→ [nets-nexi.md](./nets-nexi.md)

---

### Westpay

Westpay tar **inte** inlösenavgift – du betalar din inlösare separat.

| Avgiftstyp | Belopp | Kommentar |
|---|---|---|
| Kassakopplad terminal | ca **275 kr/mån** | Exkl. moms |
| Mobil terminal | ca **355 kr/mån** | Exkl. moms |
| Setup-avgift | Enligt prislista | Engångs vid leverans |
| Transaktionsavgift (Westpay) | Enligt prislista | Utöver inlösarens avgift |
| **Inlösenavgift** | Via vald inlösare | Nets, Swedbank Pay, Elavon m.fl. |

**Exempel – Westpay + Elavon (kampanj):**

| Post | Belopp |
|---|---|
| Elavon Visa/MC | 0,55 % (kampanj, 12 mån bindning) |
| Westpay terminal | 275 kr/mån |

→ [westpay.md](./westpay.md)

---

## Kortnätverk – underliggande kostnader

Dessa avgifter **ingår** i din totala kortavgift via inlösaren – du betalar inte direkt till Visa/MC.

### Visa & Mastercard (EES, konsumentkort)

| Kostnadsdel | Debit | Kredit | Förhandlingsbart? |
|---|---|---|---|
| Interchange (EU-tak) | max **0,20 %** | max **0,30 %** | ❌ |
| Scheme fee | ~**0,13–0,15 %** | ~**0,13–0,15 %** | ❌ |
| Acquirer markup | Varierar | Varierar | ✅ |
| Företagskort | Ofta **1,5 %+** | Ofta **1,5 %+** | Delvis |

```
Total kortavgift ≈ Interchange + Scheme fee + Acquirer markup
```

→ [visa.md](./visa.md) · [mastercard.md](./mastercard.md)

### American Express

| Modell | Procent | Fast avgift | Månadsavgift |
|---|---|---|---|
| Direktavtal med Amex | **2,5–3,5 %** | Kan förekomma | 0 kr |
| Via Adyen | 3,95 % | €0,11 | – |
| Via Stripe | Ingår i internationell kortavgift | 3,25 % + 1,80 kr | – |
| Via Swedbank Pay | Individuell prissättning | – | – |

→ [amex.md](./amex.md)

---

## Exempelberäkningar

### Per transaktion (ordervärde 500 kr)

Formel: `avgift = (ordervärde × procent) + fast avgift`

| Leverantör | Beräkning | Avgift |
|---|---|---|
| Swedbank Pay (0,79 %) | 500 × 0,0079 | **3,95 kr** |
| Swedbank Pay (partner 1,8 %) | 500 × 0,018 | **9,00 kr** |
| Stripe (EES debit) | 500 × 0,015 + 1,80 | **9,30 kr** |
| Stripe (premium EES) | 500 × 0,019 + 1,80 | **11,30 kr** |
| Worldline (1,95 %) | 500 × 0,0195 | **9,75 kr** |
| Klarna Checkout | 500 × 0,0249 + 2,90 | **15,35 kr** |
| Nets (uppskattning 1,5 %) | 500 × 0,015 | **7,50 kr** |

### Per ordervärde – Stripe vs Klarna

| Ordervärde | Stripe (1,5 % + 1,80 kr) | Klarna (2,49 % + 2,90 kr) | Skillnad |
|---|---|---|---|
| 100 kr | 3,30 kr | 5,39 kr | +2,09 kr |
| 250 kr | 5,55 kr | 9,13 kr | +3,58 kr |
| 500 kr | 9,30 kr | 15,35 kr | +6,05 kr |
| 1 000 kr | 16,80 kr | 27,80 kr | +11,00 kr |
| 5 000 kr | 76,80 kr | 127,40 kr | +50,60 kr |

*Stripe blir relativt dyrare vid låga ordervärden p.g.a. fast avgift 1,80 kr.*

### Månadskostnad – 200 ordrar à 500 kr (100 000 kr omsättning)

| Leverantör | Transaktionskostnad | Månadsavgift | **Total/mån** | Effektiv avgift |
|---|---|---|---|---|
| Swedbank Pay (0,79 %) | 790 kr | 0 kr | **790 kr** | 0,79 % |
| Nets (~1,5 %, uppskattning) | 1 500 kr | ~200 kr | **~1 700 kr** | ~1,7 % |
| Stripe (EES debit) | 1 860 kr | 0 kr | **1 860 kr** | 1,86 % |
| Worldline (1,95 %) | 1 950 kr | 245 kr | **2 195 kr** | 2,2 % |
| Klarna Checkout | 3 070 kr | 0 kr | **3 070 kr** | 3,07 % |
| Westpay + inlösare (~1,5 %) | 1 500 kr | 275 kr (terminal) | **~1 775 kr** | ~1,8 % |

### Månadskostnad – låg volym (50 ordrar à 500 kr = 25 000 kr)

| Leverantör | Total/mån | Effektiv avgift |
|---|---|---|
| Swedbank Pay (0,79 %) | 198 kr | 0,79 % |
| Stripe (EES debit) | 465 kr | 1,86 % |
| Worldline (1,95 %) | **733 kr** | **2,9 %** |
| Klarna Checkout | 768 kr | 3,07 % |

*Worldlines månadsavgift (245 kr) slår hårdare vid låg volym.*

---

## Avgiftstyper – ordlista

| Begrepp | Förklaring |
|---|---|
| **Transaktionsavgift / MDR** | Procent + ev. fast belopp per genomfört köp |
| **Inlösenavgift** | Avgift för att ta emot kort och få pengar utbetalt |
| **Interchange** | Del av kortavgiften som går till kortutgivaren (kundens bank) |
| **Scheme fee** | Nätverksavgift till Visa/Mastercard |
| **Acquirer markup** | Inlösarens egen avgift – den du kan förhandla |
| **Fast avgift** | Kr per transaktion, oberoende av ordervärde |
| **Månadsavgift** | Fast kostnad oavsett antal transaktioner |
| **Startavgift / setup** | Engångsavgift vid anslutning |
| **Chargeback-avgift** | Kostnad vid korttvist |
| **Effektiv avgift** | Total kostnad / omsättning (inkl. månadsavgift) |

---

## Prissättningsmodeller

| Modell | Beskrivning | Används av |
|---|---|---|
| **Blended rate** | En procentsats för alla korttyper | Klarna, Worldline, många inlösare |
| **Interchange++** | Interchange + scheme + markup separat | Adyen, Stripe (custom), volymavtal |
| **Fast + procent** | t.ex. 1,5 % + 1,80 kr | Stripe |
| **Ren procent** | t.ex. 0,79 % eller 2,49 % | Swedbank Pay (kampanj), Klarna |
| **Offert** | Allt förhandlas individuellt | Nets/Nexi, Swedbank Pay (standard) |

---

## Vad påverkar din faktiska kostnad?

1. **Kortmix** – debit billigare än kredit; företagskort och internationella kort dyrare
2. **Ordervärde** – fast avgift (Stripe 1,80 kr, Klarna 2,90 kr) slår hårdare vid låga belopp
3. **Volym** – högre omsättning → bättre förhandlingsläge
4. **Bransch** – vissa branscher klassas som högrisk (högre avgift)
5. **Avtalstyp** – kampanjpris vs standard, bindningstid
6. **Månadsavgift** – Worldline 245 kr, Westpay 275 kr – viktigt vid låg volym

---

## Relaterade filer

| Fil | Innehåll |
|---|---|
| [villkor.md](./villkor.md) | Bindning, uppsägning, utbetalning, KYC |
| [README.md](./README.md) | Översikt och rekommendationer per scenariotyp |
| Enskilda profiler | Fullständig info per leverantör |

---

##Källor

- [Stripe Pricing Sverige](https://stripe.com/se/pricing)
- [Swedbank Pay – Kortinlösen](https://www.swedbankpay.se/vara-losningar/kortinlosen)
- [Worldline Sverige – Online](https://worldline.com/sv-se/home/main-navigation/solutions/merchants/solutions-and-services/online)
- [Klarna för företag](https://www.klarna.com/se/foretag/)
- [Westpay – Allmänna villkor](https://www.westpay.se/hubfs/02%20www/Downloads/Allma%CC%88nna%20Villkor.pdf)
- [American Express – Ta emot kort (SE)](https://www.americanexpress.com/se/merchant/accept-the-card.html)
