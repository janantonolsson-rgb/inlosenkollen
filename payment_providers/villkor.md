# Avtalsvillkor – jämförelse

> **Senast uppdaterad:** 2026-07-10  
> **Syfte:** Samlad översikt av avtalsvillkor för betalningsaktörer relevanta för svenska webshoppar.

---

## Snabböversikt

| Bolag | Avtal med handlare? | Bindning | Uppsägning | Utbetalning | Kreditrisk | Reserv |
|---|---|---|---|---|---|---|
| [Swedbank Pay](./swedbank-pay.md) | ✅ Inlösenavtal | 36 mån (kampanj) | Enligt avtal | Nästa bankdag | Handlaren | Ej specificerat |
| [Nets / Nexi](./nets-nexi.md) | ✅ Offertavtal | Ofta 12–36 mån | Förhandlingsbart | Inom 1 bankdag | Handlaren (kort) | Ej publicerat |
| [Klarna](./klarna.md) | ✅ Handlaravtal | Ingen | När som helst | 1–5 bankdagar | Klarna (BNPL) | Kan tillämpas |
| [Stripe](./stripe.md) | ✅ Services Agreement | Ingen | När som helst | 2 bankdagar | Handlaren | Rolling reserve möjlig |
| [Worldline](./worldline.md) | ✅ Inlösen + checkout | Ingen | Flexibelt | Daglig (T+1) | Handlaren | Ej specificerat |
| [Westpay](./westpay.md) | ✅ Terminalhyra/PSP | Hyresperiod | 3 mån före periodslut | Via inlösare | Via inlösare | N/A |
| [Amex](./amex.md) | ⚠️ Valfritt direktavtal | Individuellt | Enligt avtal | Netto | Amex | N/A |
| [Visa](./visa.md) / [Mastercard](./mastercard.md) | ❌ Nej | – | – | – | – | – |

---

## Inlösare & PSP:er

### Swedbank Pay

| Villkor | Detalj |
|---|---|
| Avtalstyp | Inlösenavtal (separat från checkout/terminal) |
| Bindningstid | 36 månader (kampanjavtal) |
| Uppsägning | Enligt avtalsvillkor |
| Utbetalning | Nästa bankdag |
| Kreditrisk | Handlaren bär risk vid kortbetalning |
| KYC / krav | Registrerat företag, bankkonto, branschgranskning |
| Onboarding | 3–5 bankdagar + 5 bankdagar Visa/MC-registrering (internet) |
| Säkerhet | 3D Secure via checkout; Merchant Portal (0 kr) |
| Chargebacks | Handlaren ansvarar; hanteras via inlösaren |

**Att tänka på:** Längre onboarding och tydlig bindningstid. Kampanjpris (t.ex. 0,79 %) gäller under avtalsperioden.

---

### Nets / Nexi

| Villkor | Detalj |
|---|---|
| Avtalstyp | Inlösenavtal + ev. checkout/terminal (offert) |
| Bindningstid | Förhandlingsbart, ofta 12–36 månader |
| Uppsägning | Förhandlingsbart |
| Utbetalning | Inom 1 bankdag |
| Kreditrisk | Handlaren (kort); Nets vid faktura via partner |
| KYC / krav | Registrerat företag, nordisk verksamhet |
| Onboarding | 1–3 veckor via säljkontakt |
| Support | Svensk support dygnet runt |
| Prissättning | Ej publicerad – allt i offerten |

**Att tänka på:** Villkoren är helt offertbaserade. Kontrollera månadsavgift, minimivolym, uppsägningstid och prisändringsklausuler i offerten.

---

### Klarna

| Villkor | Detalj |
|---|---|
| Avtalstyp | Handlaravtal (Merchant Agreement) |
| Bindningstid | Ingen |
| Uppsägning | När som helst |
| Utbetalning | 1–5 bankdagar efter köp |
| Kreditrisk | **Klarna tar risken** vid faktura/delbetalning |
| KYC / krav | Registrerat företag, godkänd ansökan |
| Onboarding | 2–14 dagars granskning |
| Returer | Avgift återbetalas vid full retur |
| Reserver | Kan tillämpas för nya handlare |
| Chargebacks | Enligt avtal; Klarna hanterar kundrelationen |

**Att tänka på:** Enklast avtalsmässigt och Klarna bär BNPL-risken. Utbetalningen är långsammare än ren kortinlösen.

---

### Stripe

| Villkor | Detalj |
|---|---|
| Avtalstyp | Stripe Services Agreement (online, self-service) |
| Bindningstid | Ingen |
| Uppsägning | När som helst |
| Utbetalning | 2 bankdagar (standardschema) |
| Kreditrisk | Handlaren |
| KYC / krav | Företagsverifiering online (org.nr, bankkonto) |
| Onboarding | Samma dag till 1–2 dagar |
| Chargebacks | 200 kr per tvist; 200 kr manuellt bestridande (återbetalas vid vinst) |
| Återbetalningar | Ingen extra avgift; processavgiften återbetalas ej |
| Reserver | Rolling reserve kan tillämpas |
| Säkerhet | PCI DSS hanteras av Stripe (SAQ A) |
| Kontostängning | Stripe kan begränsa/stänga konto vid policybrott |

**Att tänka på:** Transparenta villkor men aggregator-modell – Stripe kan ändra kontostatus utan lång uppsägningstid.

---

### Worldline

| Villkor | Detalj |
|---|---|
| Avtalstyp | Inlösenavtal + checkout (paket) |
| Bindningstid | Ingen (publicerat) |
| Uppsägning | Flexibelt |
| Utbetalning | Daglig, första bankdagen efter transaktion |
| Kreditrisk | Handlaren |
| KYC / krav | Registrerat företag, företagskonto |
| Onboarding | 1–2 veckor |
| Säkerhet | 3D Secure ingår; PCI hanteras av Worldline |
| Prisändringar | Worldline reserverar sig för prisändringar |

**Att tänka på:** Komplett paket utan bindning, men 245 kr/mån oavsett volym.

---

## Terminal & mellanhand

### Westpay

Westpay är **inte** inlösare. Du tecknar **två separata avtal**: ett med Westpay (terminal/PSP) och ett med inlösare.

| Villkor | Detalj |
|---|---|
| Avtalstyp | Hyresavtal för terminal + ev. PSP-tjänst |
| Bindningstid | Avtalad hyresperiod med automatisk förlängning |
| Uppsägning | Skriftligen senast **3 månader** före periodens slut |
| Betalning | Kvartalsvis i förskott; full hyra även vid tidig återlämning |
| Prisändring | Årlig justering möjlig (PPI/index), 60 dagars skriftligt varsel |
| Setup-avgift | Kan debiteras vid leverans (engångs) |
| Transaktionsavgift | Westpay kan ta egen avgift utöver inlösarens |
| Kundens ansvar | Teckna inlösenavtal, följa PCI PA-DSS, följa inlösarens regler |
| Support | Vardagar 08–17 (BAS); utökad kväll/helg (PREMIUM) |
| SWAP | Ny terminal inom 24 h vid fel (ingår) |
| Avstängning | Vid betalningsdröjsmål, misstanke om brott, PCI-brott, AML-brott |

**Att tänka på:** Administrativ avgift vid byte av inlösare. Du betalar både Westpay-hyra och inlösenavgift.

---

## Kortnätverk – indirekta villkor

Du tecknar **inget avtal** med Visa eller Mastercard. Reglerna kommer via din inlösare.

### Visa & Mastercard

| Område | Villkor |
|---|---|
| Avtal | Ingen direkt relation – inlösaren är avtalspart |
| Interchange (EES konsument) | Tak: 0,20 % debit, 0,30 % kredit (EU IFR) |
| Scheme fee | ~0,13–0,15 % – ej förhandlingsbart |
| Acquirer markup | Förhandlingsbart med din inlösare |
| 3D Secure | Krav för e-handel (PSD2/SCA) |
| Chargebacks | Nätverket sätter regler; inlösaren hanterar processen |
| Registrering | Inlösaren registrerar dig (~5 bankdagar för internet) |
| Företagskort | Ingen EU-tak – betydligt högre interchange |

### American Express

| Modell | Villkor |
|---|---|
| **Via inlösare** (vanligast) | Amex aktiveras som tillägg; villkor följer inlösaravtalet |
| **Direktavtal** | American Express Merchant Agreement |
| Serviceavgift | Individuell procentsats (ofta 2,5–3,5 %) |
| Utbetalning | Netto – avgift dras vid varje utbetalning |
| Kreditrisk | Amex bär risken |
| KYC | Företagsverifiering vid ansökan |
| Uppsägning | Enligt avtal |

---

## Jämförelse per dimension

### Flexibilitet (lättast att byta)

```
Stripe / Klarna / Worldline  ████████████████████  Ingen bindning
Nets / Nexi                    ██████████            Ofta 12–36 mån
Swedbank Pay                   ████████              36 mån (kampanj)
Westpay (terminal)             ██████                3 mån uppsägningstid
```

### Utbetalningshastighet

| Bolag | Tid |
|---|---|
| Swedbank Pay | Nästa bankdag |
| Nets / Nexi | Inom 1 bankdag |
| Worldline | Första bankdagen (daglig) |
| Stripe | 2 bankdagar |
| Klarna | 1–5 bankdagar |

### Vem bär kreditrisken?

| Bolag | Kort | BNPL / faktura |
|---|---|---|
| Swedbank Pay | Handlaren | Via partner |
| Nets / Nexi | Handlaren | Via partner |
| Klarna | Handlaren (Pay Now) | **Klarna** |
| Stripe | Handlaren | N/A |
| Worldline | Handlaren | Via tillägg |
| Amex (direkt) | **Amex** | N/A |

### Antal avtal att teckna

| Setup | Antal avtal |
|---|---|
| Stripe Checkout | 1 |
| Klarna Checkout | 1 |
| Worldline Checkout | 1 (paket) |
| Swedbank Pay (checkout) | 1–2 |
| Westpay-terminal + inlösare | **2** |
| Nets checkout | 1 (offert) |

---

## Checklista vid avtalsgranskning

Innan du skriver på – kontrollera alltid:

- [ ] **Bindningstid** – hur länge är du låst?
- [ ] **Uppsägningstid** – hur många månaders varsel krävs?
- [ ] **Prisändringsklausul** – kan de höja avgiften under avtalsperioden?
- [ ] **Minimivolym** – finns krav på lägsta omsättning?
- [ ] **Månadsavgift** – fast kostnad oavsett volym?
- [ ] **Utbetalningsschema** – T+1, T+2 eller längre?
- [ ] **Rolling reserve** – hålls pengar inne som säkerhet?
- [ ] **Chargeback-avgifter** – vad kostar en tvist?
- [ ] **Återbetalningspolicy** – får du tillbaka transaktionsavgiften vid retur?
- [ ] **Exkluderade korttyper** – företagskort, internationella kort – separat pris?
- [ ] **PCI-ansvar** – vem hanterar säkerhetskraven?
- [ ] **Kontostängning** – under vilka omständigheter kan avtalet sägas upp av leverantören?

---

##Källor

- [Swedbank Pay – Kortinlösen](https://www.swedbankpay.se/vara-losningar/kortinlosen)
- [Nets Sverige](https://payments.nets.eu/sv-SE)
- [Klarna för företag](https://www.klarna.com/se/foretag/)
- [Stripe Services Agreement](https://stripe.com/se/legal)
- [Worldline Sverige](https://worldline.com/sv-se)
- [Westpay – Allmänna villkor (PDF)](https://www.westpay.se/hubfs/02%20www/Downloads/Allma%CC%88nna%20Villkor.pdf)
- [American Express – Handlarvillkor (SE)](https://www.americanexpress.com/se/merchant/)
