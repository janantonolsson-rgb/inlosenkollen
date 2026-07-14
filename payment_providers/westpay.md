# Westpay

> **Typ:** Betalterminalleverantör + betalväxel (PSP) – **INTE kortinlösare**  
> **Marknadsposition:** Svensk betalningsleverantör med terminaler, e-handel och multi-inlösare  
> **Webb:** [westpay.se](https://www.westpay.se)

---

## Är Westpay en inlösare?

**Nej.** Westpay är **inte** en kortinlösare. De är en **mellanhand** i betalkedjan som tillhandahåller:

1. **Betalterminaler** (hårdvara + mjukvara)
2. **Betalväxel/PSP** för e-handel (routing av transaktioner)
3. **Swipe2Pay** – applikation för alternativa betalmetoder i terminal
4. **Multi-acquirer routing** – koppling till en eller flera inlösare

I Westpays egna allmänna villkor definieras *"Inlösare"* som en **separat part** – bank eller organisation som erbjuder kortacceptans och inlösen. Kunden måste teckna **eget inlösenavtal** med en inlösare; Westpay förmedlar bara transaktionen mellan terminal/checkout och inlösaren.

```
Kund → Westpay (terminal/PSP) → Inlösare (t.ex. Nets, Swedbank Pay) → Visa/MC → Utbetalning
         ↑ mellanhand              ↑ faktisk inlösare
```

---

## Vad Westpay faktiskt gör

| Funktion | Beskrivning |
|---|---|
| Terminalhyra | Android-terminaler (t.ex. Carbon) – kassakopplad eller mobil |
| Transaktionsförmedling | Skickar kortdata till din valda inlösare |
| Swipe2Pay | Swish, Klarna, Vipps, MobilePay m.fl. i terminalen |
| E-handel (PSP) | Online-betalväxel med multi-acquirer |
| Inlösenkollen | Jämförelsetjänst för att hitta billigaste inlösaren |
| Rapportering | Aggregerad data över alla betalmetoder |

---

## Avgifter

Westpay tar betalt för **sin egen tjänst** (terminal, PSP, support) – inte för själva kortinlösen.

### Terminalhyra (exempel)

| Produkt | Månadsavgift (exkl. moms) |
|---|---|
| Kassakopplad terminal | ca 275 kr/mån |
| Mobil terminal | ca 355 kr/mån |

**Ingår i hyran:**
- Laddstation, batteri
- Kundportal (avstämning, övervakning)
- Support och SWAP (ny terminal inom 24 h vid fel)
- Swipe2Pay (alternativa betalmetoder)

### Inlösenavgifter

Inlösenavgiften betalas **separat** till din valda inlösare – inte till Westpay. Westpay hjälper dig välja och kan erbjuda kampanjer tillsammans med partners (t.ex. Elavon).

---

## Inlösare som fungerar med Westpay

Westpay är **inlösare-neutral** och stödjer flera inlösare:

| Inlösare | Terminal | E-handel |
|---|---|---|
| Nets / Nexi | ✅ | ✅ |
| Swedbank Pay | ✅ | ✅ |
| Elavon | ✅ (kampanjerbjudande) | ✅ |
| Paytrim | ✅ | ✅ |
| Worldline | Begränsat (Worldline har egna terminaler) | ✅ |

Via **Multi Acquirer**-lösningen kan du ha flera inlösare samtidigt med smart routing (t.ex. billigaste inlösaren per transaktion, failover vid driftstopp).

---

## Setup

| Steg | Ansvar |
|---|---|
| 1. Teckna avtal med Westpay | Terminal och/eller e-handels-PSP |
| 2. Teckna inlösenavtal | Separat med vald inlösare (Nets, Swedbank Pay m.fl.) |
| 3. Koppla ihop | Westpay konfigurerar terminal/PSP mot inlösaren |
| 4. Go-live | Testtransaktioner |

**Tid:** Terminal leverans + inlösenavtal = typiskt 1–3 veckor totalt.

---

## Westpay vs. inlösare – jämförelse

| Aspekt | Westpay | Inlösare (t.ex. Swedbank Pay) |
|---|---|---|
| Roll | Terminal + betalväxel | Kortinlösen + utbetalning |
| Inlösenavtal | ❌ Kräver separat avtal | ✅ Ingår |
| Pengar på kontot | Via inlösaren | Direkt till ditt konto |
| Transaktionsavgift | Terminalhyra | % per korttransaktion |
| Välj inlösare fritt | ✅ | N/A (är själv inlösare) |
| Multi-acquirer | ✅ Unikt erbjudande | ❌ |

---

## Lämplig för

- Butiker som vill välja terminal oberoende av inlösare
- Företag som vill ha flera inlösare (routing, redundans)
- Handlare som vill samla Swish/Klarna/kort i en terminal (Swipe2Pay)
- E-handlare som vill benchmarka och byta inlösare utan att byta PSP

## Mindre lämplig för

- Webshoppar som bara behöver en enkel checkout (välj inlösare/PSP direkt)
- Företag som vill ha allt hos en leverantör (Worldline, Swedbank Pay paket)

---

##Källor

- [Westpay.se](https://www.westpay.se/)
- [Westpay – Allmänna villkor (PDF)](https://www.westpay.se/hubfs/02%20www/Downloads/Allma%CC%88nna%20Villkor.pdf)
- [Onslip – Kortinlösen & Westpay](https://www.onslip.com/betallosningar/kortterminal/kortinlosen/)
- [Westpay – Kampanjerbjudande Elavon](https://www.westpay.se/kampanjerbjudande-elavon)
