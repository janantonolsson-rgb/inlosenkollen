# Visa

> **Typ:** Kortnätverk / betalkortssystem (card scheme) – **INTE kortinlösare**  
> **Marknadsposition:** Världens största betalkortsnätverk  
> **Webb:** [visa.se](https://www.visa.se) | [visa.com](https://www.visa.com)

---

## Är Visa en inlösare?

**Nej.** Visa är **inte** en kortinlösare. Visa:

- Utfärdar **inte** kort (det gör bankerna/utgivarna)
- Acquirerar **inte** handlare (det gör inlösarna)
- Driver **inte** betalningar direkt till/från konton

Visa driver **nätverket** – infrastrukturen som kopplar ihop kortutgivare (issuer) och inlösare (acquirer). Varje korttransaktion passerar genom Visas nätverk, men pengarna flödar via inlösaren till ditt konto.

---

## Visas roll i betalkedjan (fyrpartsmodellen)

```
Kortinnehavare → [Issuer: kundens bank] → VISA-nätverket → [Acquirer: din inlösare] → Handlare
                     ↑ utgivare              ↑ nätverk           ↑ inlösare
```

| Part | Roll | Exempel |
|---|---|---|
| **Kortinnehavare** | Betalar med kort | Konsument |
| **Issuer (utgivare)** | Utfärdar kort, godkänner/avslår transaktion | Swedbank, SEB, Nordea |
| **Visa (nätverk)** | Routar meddelanden, sätter regler, tar scheme fee | Visa Inc. |
| **Acquirer (inlösare)** | Tar emot betalning åt handlaren, sätter in pengar | Swedbank Pay, Nets, Stripe |
| **Handlare** | Tar emot betalning | Din webshop |

Du tecknar **aldrig** avtal direkt med Visa. Ditt avtal är med inlösaren, som i sin tur är medlem i Visas nätverk.

---

## Avgifter – vad Visa tar betalt för

Som handlare betalar du **inte direkt** till Visa. Visas avgifter ingår i din totala kortavgift via inlösaren, uppdelat i tre delar:

### 1. Interchange (interchange fee)

- Betalas av **inlösaren till kortutgivaren** (issuer)
- Sätts av Visa (inom EU-regleringens tak)
- Största kostnadsdelen (~70–80 % av total kortavgift)

| Korttyp (EES) | Tak (IFR)* |
|---|---|
| Konsumentdebet | max 0,20 % |
| Konsumentkredit | max 0,30 % |
| Företagskort | Ej tak (ofta 1,5 %+ ) |
| Premiumkort | Ej tak |

*Interchange Fee Regulation (EU) 2015/751

### 2. Scheme fee (nätverksavgift)

- Betalas direkt till **Visa** för nätverksanvändning
- Typiskt ~0,13–0,15 % + liten fast avgift per transaktion
- Sätts av Visa, ej förhandlingsbart

### 3. Acquirer markup

- Inlösarens egen avgift (för processing, risk, support)
- **Förhandlingsbart** – detta är vad du kan påverka

### Total kostnad (Merchant Service Charge)

```
Total avgift = Interchange + Scheme fee + Acquirer markup
```

Vid **Interchange++**-prissättning (t.ex. Adyen) ser du alla tre delarna separat på fakturan.

---

## Visas betydelse för svenska webshoppar

| Aspekt | Detalj |
|---|---|
| Marknadsandel i Sverige | ~50 % av korttransaktioner (tillsammans med Mastercard ~95 %) |
| Korttyper | Debit, kredit, företag, premium, prepaid |
| Säkerhet | 3D Secure (Verified by Visa) |
| Reglering | EU:s interchange-tak gäller för EES-kort |
| Accepteras av | Alla svenska inlösare |

---

## Vad du behöver göra som handlare

Du behöver **inte** ansöka hos Visa. För att ta emot Visa-kort:

1. Teckna **inlösenavtal** med en inlösare (Swedbank Pay, Nets, Stripe m.fl.)
2. Inlösaren registrerar dig hos Visa/Mastercard (tar ~5 bankdagar för internet)
3. Aktivera **3D Secure** (krav för de flesta online-transaktioner)
4. Integrera betallösning (checkout, API, terminal)

---

## Visa vs. inlösare – snabb jämförelse

| | Visa | Inlösare |
|---|---|---|
| Avtal med handlare | ❌ | ✅ |
| Sätter in pengar på ditt konto | ❌ | ✅ |
| Sätter transaktionsavgift | Delvis (scheme + interchange) | Ja (markup) |
| Tillhandahåller terminal/checkout | ❌ | ✅ |
| Hanterar chargebacks | Sätter reglerna | Hanterar processen |
| Du kan förhandla pris | ❌ (scheme/interchange) | ✅ (markup) |

---

##Källor

- [Visa Sverige](https://www.visa.se)
- [EU Interchange Fee Regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32015R0751)
- [Stripe – Acquirer vs Issuer](https://stripe.com/resources/more/acquirer-vs-issuer)
- [ClearingPost – Four-Party Card Payment Model](https://clearingpost.com/insights/four-party-card-payment-model/)
