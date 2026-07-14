# Swedbank Pay

> **Typ:** Kortinlösare + betalväxel (PSP)  
> **Marknadsposition:** Sveriges största kortinlösare – hanterar över hälften av landets korttransaktioner  
> **Webb:** [swedbankpay.se](https://www.swedbankpay.se)

---

## Översikt

Swedbank Pay (tidigare PayEx) är den dominerande kortinlösaren i Sverige. De erbjuder ren kortinlösen, checkout-lösningar (Swedbank Pay Checkout), betalterminaler och Merchant Portal för rapportering. Passar företag som vill ha en etablerad nordisk aktör med banknära infrastruktur.

**Styrkor:**
- Störst marknadsandel i Sverige
- Utbetalning nästa bankdag
- Stöd för Visa, Mastercard, American Express m.fl.
- Kostnadsfri Merchant Portal
- Kan kombineras med Swish, faktura och kredit via checkout-paket

**Svagheter:**
- Längre onboarding än Stripe (avtal + Visa/MC-registrering)
- Prissättning ofta offertbaserad utöver kampanjpriser
- Mindre flexibel för snabba internationella expansioner jämfört med Stripe/Adyen

---

## Avgifter

### Kortinlösen (publicerat kampanjpris)

| Post | Belopp |
|---|---|
| Startavgift | 0 kr |
| Månadsavgift (Merchant Portal) | 0 kr |
| Transaktionsavgift | **Från 0,79 %** per transaktion |
| Avtalslängd | 36 månader (kampanj) |

*Kampanjpriset 0,79 % gäller under angivna villkor. Verkligt pris beror på volym, bransch och kortmix.*

### Partner-/plattformspriser (exempel)

Via e-handelsplattformar kan paketpriser gälla:

| Plattform | Transaktionsavgift | Månadsavgift |
|---|---|---|
| Abicart (partneravtal) | 1,8 % | 0 kr |

### Övriga avgifter (Swedbank företagsprislista 2026)

| Tjänst | Avgift |
|---|---|
| Merchant Portal | 0 kr |
| Swish Handel (via bank) | 3 kr/transaktion + 50 kr/mån + 1 000 kr uppläggning |
| Filöverföring/integration via affärssystem | 750 kr/avtal/år |
| Dokument på papper (aviseringar) | 45 kr/mån |

---

## Villkor

| Aspekt | Detalj |
|---|---|
| Avtalstyp | Inlösenavtal (separat från betalväxel/checkout) |
| Bindningstid | 36 månader (kampanjavtal) |
| Utbetalning | Nästa bankdag |
| Kreditrisk | Handlaren bär kreditrisk vid kortbetalning |
| KYC/krav | Registrerat företag, bankkonto, branschgranskning |
| Uppsägning | Enligt avtalsvillkor |

---

## Setup & onboarding

### Tidslinje

```
Ansökan → Granskning (3–5 bankdagar) → Visa/MC-registrering (+5 bankdagar) → Integration → Live
                                                                                    Total: ~2–3 veckor
```

| Steg | Tid | Beskrivning |
|---|---|---|
| 1. Ansökan | 1 dag | Ansök via swedbankpay.se eller via e-handelsplattform |
| 2. Avtalsgranskning | 3–5 bankdagar | KYC, företagsverifiering |
| 3. Visa/Mastercard-registrering | +5 bankdagar | Krävs för "Kortinlösen internet" |
| 4. Teknisk integration | 1–5 dagar | API, SDK eller plugin beroende på plattform |
| 5. Test & go-live | 1–2 dagar | Testmiljö tillgänglig |

### Teknisk integration

| Metod | Beskrivning |
|---|---|
| Swedbank Pay Checkout | Färdig checkout med kort, Swish, faktura |
| Payment Order API | REST API för custom-integration |
| SDK | JavaScript SDK för embedded checkout |
| Plugins | WooCommerce, Magento, plattformspartners |

**Autentisering:** Merchant ID (Payee ID) + Merchant Token

### Support

- Telefon: 08-411 10 80
- E-post: support.swedbankpay@swedbankpay.se

---

## Betalmetoder

| Metod | Tillgänglig |
|---|---|
| Visa / Mastercard | ✅ |
| American Express | ✅ |
| Swish | ✅ (via checkout-paket) |
| Faktura / kredit | ✅ (via checkout-paket) |
| Direktbank | ✅ (via Payment Instruments) |
| Apple Pay / Google Pay | ✅ (via checkout) |

---

## Lämplig för

- Medelstora till stora svenska e-handlare
- Företag med hög kortvolym som vill förhandla låg inlösenavgift
- Omnikanal (butik + online) med samma inlösare
- Företag som redan har Swedbank som bank

## Mindre lämplig för

- Startup som vill vara live samma dag
- Ren internationell D2C utan svensk närvaro
- Mycket små volymer där fasta kostnader och avtalstid inte motiveras

---

##Källor

- [Swedbank Pay – Kortinlösen](https://www.swedbankpay.se/vara-losningar/kortinlosen)
- [Swedbank prislista företag 2026](https://internetbank.swedbank.se/ConditionsEarchive/download?bankid=1111&id=WEBDOC-PRODE41919691)
- [Abicart – Swedbank Pay Checkout](https://www.abicart.se/om-abicart/manual/swedbank-pay-checkout)
