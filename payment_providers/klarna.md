# Klarna

> **Typ:** Betalväxel (PSP) + checkout-leverantör (ej traditionell kortinlösare)  
> **Marknadsposition:** Standardval i svensk e-handel; ~85 % av svenska onlinekonsumenter har använt Klarna  
> **Webb:** [klarna.com/se/foretag](https://www.klarna.com/se/foretag/)

---

## Översikt

Klarna är inte en traditionell kortinlösare utan en **checkout- och betalningsplattform** som samlar kort, faktura, delbetalning och direktbetalning i en kassa. Klarna tar kreditrisken vid "betala senare"-köp och betalar ut till handlaren oavsett om kunden betalar i tid.

**Styrkor:**
- Hög konsumentkännedom och förtroende i Sverige
- Ökar konvertering (BNPL, faktura, delbetalning)
- Klarna tar kreditrisk vid faktura/delbetalning
- Ingen månadsavgift, ingen bindningstid
- Färdiga plugins för alla större plattformar

**Svagheter:**
- Högre transaktionsavgift än ren kortinlösen
- Utbetalningsfördröjning (1–5 dagar)
- Begränsad internationell korthantering jämfört med Stripe
- Kräver godkänd ansökan (ej self-service för alla)

---

## Avgifter

### Klarna Checkout (standard)

| Post | Belopp |
|---|---|
| Transaktionsavgift | **2,49 % + 2,90 kr** per transaktion |
| Månadsavgift | 0 kr |
| Uppsättningsavgift | 0 kr |
| Bindningstid | Ingen – avsluta när du vill |
| Minimiomsättning | Ingen |

*Avgiften är densamma oavsett betalmetod (betala nu, faktura, delbetalning).*

### Prisspann (branschdata)

| Produkt | Avgift |
|---|---|
| Klarna Checkout (standard) | 2,49 % + 2,90 kr |
| Klarna Payments (inbäddad) | 1,5–3,5 % + fast avgift |
| Volymrabatter | Förhandlingsbart vid hög omsättning |
| Shopify (flat rate sedan 2025) | 2,9 % (alla Klarna-metoder) |

### Kostnadsexempel

| Ordervärde | Klarna-avgift | Stripe (jämförelse) |
|---|---|---|
| 250 kr | 9,13 kr | 5,30 kr |
| 500 kr | 15,35 kr | 9,30 kr |
| 1 000 kr | 27,80 kr | 16,80 kr |
| 5 000 kr | 127,40 kr | 76,80 kr |

### Övriga avgifter

| Post | Belopp |
|---|---|
| Återbetalning (full retur) | Avgiften återbetalas |
| Chargeback/tvist | Enligt avtal |
| Implementering (via byrå) | 10 000–50 000 kr (om custom) |

---

## Villkor

| Aspekt | Detalj |
|---|---|
| Avtalstyp | Handlaravtal (Merchant Agreement) |
| Bindningstid | Ingen |
| Utbetalning | 1–5 bankdagar efter köp |
| Kreditrisk | **Klarna tar risken** vid faktura/delbetalning |
| KYC/krav | Registrerat företag, godkänd ansökan |
| Returer | Avgift återbetalas vid full retur |
| Reserver | Kan tillämpas för nya handlare |

---

## Setup & onboarding

### Tidslinje

```
Ansökan → Granskning (dagar–veckor) → Integration → Test → Live
```

| Steg | Tid | Beskrivning |
|---|---|---|
| 1. Ansökan | 1 dag | Via klarna.com/se/foretag eller plattform |
| 2. Granskning | 2–14 dagar | KYC, bransch, kreditbedömning |
| 3. Integration | 1–3 dagar | Plugin eller API |
| 4. Go-live | 1 dag | Testmiljö tillgänglig under integration |

### Produkter

| Produkt | Beskrivning | Passar |
|---|---|---|
| **Klarna Checkout** | Ersätter hela kassan med Klarnas UI | De flesta webshoppar |
| **Klarna Payments** | Inbäddar Klarna i befintlig kassa | Custom-kassor |
| **Express Checkout** | Snabbköp med sparade uppgifter | Återkommande kunder |

### Teknisk integration

| Metod | Plattformar |
|---|---|
| Klarna Checkout (plugin) | Shopify, WooCommerce, Magento, PrestaShop |
| Klarna Payments SDK | Custom, headless |
| API | REST – Order Management, Payments |

**Implementeringskostnad via byrå:**

| Komplexitet | Kostnad |
|---|---|
| Shopify/WooCommerce + plugin | 10 000–18 000 kr |
| Custom + ERP-koppling | 50 000–120 000 kr |

---

## Betalmetoder

| Metod | Tillgänglig | Kommentar |
|---|---|---|
| Betala nu (kort) | ✅ | Visa, Mastercard |
| Betala inom 30 dagar | ✅ | Faktura, Klarna tar risk |
| Delbetalning | ✅ | Ränta för konsument |
| Månadsfaktura | ✅ | Samla köp |
| Swish | ❌ | Ej via Klarna |
| Internationella kort | Begränsat | Pay Now fungerar |

---

## Affärsvärde utöver avgift

Klarna motiverar högre avgift med:

1. **Högre konvertering** – färre avbrutna köp i kassan
2. **Högre snittordervärde** – delbetalning gör att kunder vågar köpa mer
3. **Kreditrisk** – du får betalt även om kunden betalar sent
4. **Kundsupport** – Klarna hanterar kundfrågor om betalning

**Break-even:** Om Klarna ökar konvertering med ~2–3 % kan den högre avgiften kompenseras.

---

## Lämplig för

- Svensk B2C e-handel med fysiska produkter
- Webshoppar där BNPL/faktura driver försäljning
- Medelhöga till höga snittordervärden
- Mode, inredning, elektronik, sport

## Mindre lämplig för

- B2B-försäljning
- Låga marginaler där varje procent räknas
- Internationell försäljning utanför Norden
- Digitala produkter med lågt ordervärde

---

##Källor

- [Klarna för företag](https://www.klarna.com/se/foretag/)
- [Ekonomipiloten – Klarna kostnader 2026](https://ekonomipiloten.se/guider/betalningar/klarna-foretag-guide)
- [Linklab – Klarna Shopify prismodell 2025](https://linklab.se/klarna-shopify/)
- [Adyen – Klarna prissättning Sverige](https://www.adyen.com/sv_SE/prissattning) (referens: 0,99 % + 5,90 kr via Adyen)
