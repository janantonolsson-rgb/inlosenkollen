# Mastercard

> **Typ:** Kortnätverk / betalkortssystem (card scheme) – **INTE kortinlösare**  
> **Marknadsposition:** Världens näst största betalkortsnätverk (tillsammans med Visa ~95 % i Sverige)  
> **Webb:** [mastercard.se](https://www.mastercard.se) | [mastercard.com](https://www.mastercard.com)

---

## Är Mastercard en inlösare?

**Nej.** Mastercard är **inte** en kortinlösare. Precis som Visa driver Mastercard **nätverket** som kopplar kortutgivare och inlösare – men utfärdar inga kort, accepterar inga handlare och hanterar inga utbetalningar.

Maestro (Mastercards debetvarumärke) följer samma modell.

---

## Mastercards roll i betalkedjan (fyrpartsmodellen)

```
Kortinnehavare → [Issuer: kundens bank] → MASTERCARD-nätverket → [Acquirer: din inlösare] → Handlare
                     ↑ utgivare                ↑ nätverk              ↑ inlösare
```

| Part | Roll | Exempel |
|---|---|---|
| **Kortinnehavare** | Betalar med kort | Konsument |
| **Issuer (utgivare)** | Utfärdar kort, godkänner/avslår | Handelsbanken, Länsförsäkringar |
| **Mastercard (nätverk)** | Routar, regler, scheme fee | Mastercard Inc. |
| **Acquirer (inlösare)** | Tar emot betalning, utbetalning | Nets, Worldline, Adyen |
| **Handlare** | Tar emot betalning | Din webshop |

Du tecknar avtal med din **inlösare**, inte med Mastercard.

---

## Avgifter – vad Mastercard tar betalt för

Handlaren betalar inte direkt till Mastercard. Avgifterna ingår i din totala kortavgift via inlösaren:

### 1. Interchange

- Inlösaren betalar till kortutgivaren
- Sätts av Mastercard inom EU-tak

| Korttyp (EES, konsument) | Tak (IFR) |
|---|---|
| Debit / prepaid | max 0,20 % |
| Kredit | max 0,30 % |
| Företagskort (commercial) | Ej tak – ofta 1,5–2,2 %+ |
| Premium / rewards | Ej tak |

Mastercard publicerar detaljerade interchange-tabeller per land (inkl. Sverige) på sin regulatoriska webbplats.

### 2. Scheme fee (nätverksavgift)

- Betalas till Mastercard för nätverksanvändning
- Typiskt ~0,13–0,15 % + per-transaktionsavgift
- Ej förhandlingsbart

### 3. Acquirer markup

- Inlösarens avgift – **det du kan förhandla**

### Exempel: 500 kr med svenskt konsumentdebetkort (Mastercard)

| Del | Uppskattning |
|---|---|
| Interchange | ~1,00 kr (0,20 %) |
| Scheme fee | ~0,65 kr (0,13 %) |
| Acquirer markup | ~2–5 kr (beror på avtal) |
| **Total** | **~4–7 kr** |

*Verklig kostnad beror på korttyp, inlösare och prissättningsmodell.*

---

## Mastercard-specifika produkter

| Produkt | Beskrivning |
|---|---|
| **Mastercard Debit** | Standard debetkort |
| **Maestro** | Äldre debetvarumärke (fasas ut i vissa marknader) |
| **Mastercard Credit** | Kreditkort |
| **Mastercard Commercial** | Företagskort (högre interchange) |
| **Identity Check** | Mastercards 3D Secure (motsvarar Verified by Visa) |

---

## Reglering i Sverige/EU

| Regel | Effekt |
|---|---|
| IFR (EU 2015/751) | Tak på interchange för konsumentkort inom EES |
| PSD2 | Kräver SCA (Strong Customer Authentication) – 3D Secure |
| MICA / kommande | Potentiella framtida förändringar i kortreglering |

För **svenska konsumentkort** inom EES är interchange kraftigt reglerat, vilket gör debit- och kreditkort relativt billiga att ta emot. **Företagskort och internationella kort** utanför EES är betydligt dyrare.

---

## Vad du behöver göra som handlare

1. Teckna **inlösenavtal** – alla svenska inlösare stödjer Mastercard
2. Inlösaren registrerar dig hos Mastercard (ingår i onboarding)
3. Aktivera **Identity Check** (3D Secure) för e-handel
4. Integrera via checkout/terminal/API

Du behöver **inte** separat avtal med Mastercard.

---

## Mastercard vs. Visa – för handlare

| Aspekt | Mastercard | Visa |
|---|---|---|
| Marknadsandel (SE) | ~45 % | ~50 % |
| Inlösare krävs | Ja | Ja |
| EU interchange-tak | Samma (IFR) | Samma (IFR) |
| 3D Secure | Identity Check | Verified by Visa |
| Scheme fee-nivå | Liknande | Liknande |
| Praktisk skillnad | Minimal – acceptera båda | Minimal – acceptera båda |

**Rekommendation:** Acceptera alltid både Visa och Mastercard. Skillnaden i kostnad per transaktion är försumbar; att neka ett nätverk kostar försäljning.

---

##Källor

- [Mastercard Sverige](https://www.mastercard.se)
- [Mastercard – European Interchange Fees](https://www.mastercard.com/europe/en/regulatory/european-interchange.html)
- [Mastercard – Sweden intra-location POS interchange (PDF)](https://www.mastercard.com/europe/en/regulatory/european-interchange.html)
- [myPOS – Interchange & Scheme Fees (SE)](https://www.mypos.com/sv-se/interchange-scheme-fees)
