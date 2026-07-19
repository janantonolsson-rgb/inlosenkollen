import type { AcquirerPricing } from '../types/calculator'

export interface CatalogAcquirer {
  id: string
  name: string
  providerType: 'inlösare' | 'psp'
  description: string
  source: string
  pricing: AcquirerPricing
  highlight: string
  /** Extern länk till inlösarens webbplats, visas i katalogkortet. */
  url?: string
  /** Länk dit man skickar in en ansökan / kommer igång som kund hos inlösaren. */
  applyUrl?: string
  /** Anpassad text för ansökningslänken, t.ex. när anslutning sker via en partner. */
  applyLabel?: string
  /** Kort text om ett ev. partnerskap/avtal som ger kunden bättre villkor. */
  partnershipNote?: string
  /** Om true visas kortet som förvalt/rekommenderat i katalogen. */
  isDefault?: boolean
}

/**
 * Illustrativa avgifter baserade på payment_providers/-research (2026-07-10).
 * Inte faktiska avtalspriser — används som utgångspunkt i kalkylatorn.
 */
export const acquirerCatalog: CatalogAcquirer[] = [
  {
    id: 'elavon',
    name: 'Elavon',
    providerType: 'inlösare',
    description: 'Global kortinlösare, tillgänglig för er genom Westpays partnerskap.',
    source: 'Partneravtal (kontakta oss för aktuella villkor)',
    highlight: 'Rekommenderas via partnerskap',
    isDefault: true,
    url: 'https://www.elavon.com',
    applyUrl: 'https://www.westpay.se/terminals',
    applyLabel: 'Anslut via Westpay',
    partnershipNote:
      'Genom vårt partnerskap med Elavon kan vi i många fall erbjuda mer fördelaktiga inlösenkostnader än vad många företag själva kan förhandla fram på egen hand.',
    // Exakta priser (från Westpay, 2026-07): VISA/Mastercard Debit och Credit.
    // Corporate/EU-EES/Internationell/Amex saknar ännu bekräftade partnervillkor och är
    // uppskattningar grundade i verkliga branschtal (Stripes officiellt publicerade
    // EES-/utanför EES-priser, se Stripe-posten nedan) — bekräfta med Elavon innan skarp visning.
    pricing: {
      swedishDebit: { percent: 0.45, fixed: 0.1 },
      swedishCredit: { percent: 0.55, fixed: 0.1 },
      corporate: { percent: 1.9, fixed: 0.1 }, // uppskattning, ankrad i verkligt branschtal
      euEes: { percent: 0.55, fixed: 0.1 }, // uppskattning — EU/EES-kort prissätts under IFR normalt som inhemska
      international: { percent: 3.0, fixed: 0.1 }, // uppskattning, ankrad i verkligt branschtal
      amex: { percent: 2.5, fixed: 0.1 }, // uppskattning, ankrad i verkligt branschtal
    },
  },
  {
    id: 'swedbank-pay',
    name: 'Swedbank Pay',
    providerType: 'inlösare',
    description: 'Sveriges största kortinlösare. Kampanjpris från 0,79 %.',
    source: 'Publikt listpris',
    url: 'https://www.swedbankpay.se/foretag',
    applyUrl: 'https://www.swedbankpay.se/vara-losningar/intresserad',
    highlight: 'Från 0,79 %',
    pricing: {
      swedishDebit: { percent: 0.79, fixed: 0 },
      swedishCredit: { percent: 0.79, fixed: 0 },
      corporate: { percent: 1.5, fixed: 0 },
      euEes: { percent: 0.79, fixed: 0 },
      international: { percent: 2.0, fixed: 0 },
      amex: { percent: 2.5, fixed: 0 },
    },
  },
  {
    id: 'stripe',
    name: 'Stripe',
    providerType: 'psp',
    description: 'Officiellt publicerade priser: EES-kort, premiumkort (företag), Amex och kort utanför EES.',
    source: 'Stripes officiella prislista (2026-07)',
    url: 'https://stripe.com/en-se/pricing',
    applyUrl: 'https://dashboard.stripe.com/register',
    highlight: '1,5 % (EES) – 3,25 % (utanför EES)',
    pricing: {
      swedishDebit: { percent: 1.5, fixed: 1.8 },
      swedishCredit: { percent: 1.5, fixed: 1.8 },
      corporate: { percent: 1.9, fixed: 1.8 },
      euEes: { percent: 1.5, fixed: 1.8 },
      international: { percent: 3.25, fixed: 1.8 },
      amex: { percent: 2.5, fixed: 1.8 }, // uppskattning inom Stripes typiska Amex-spann (Amex har högre interchange)
    },
  },
  {
    id: 'worldline',
    name: 'Worldline',
    providerType: 'inlösare',
    description: 'Worldline Checkout med publicerat paketpris från 1,95 %.',
    source: 'Publikt listpris',
    url: 'https://worldline.com/en/home/campaign/checkout-lp',
    applyUrl: 'https://worldline.com/en/home/campaign/checkout-lp',
    highlight: 'Från 1,95 %',
    pricing: {
      swedishDebit: { percent: 1.95, fixed: 0 },
      swedishCredit: { percent: 1.95, fixed: 0 },
      corporate: { percent: 2.95, fixed: 0 },
      euEes: { percent: 1.95, fixed: 0 },
      international: { percent: 2.95, fixed: 0 },
      amex: { percent: 2.95, fixed: 0 },
    },
  },
  {
    id: 'nets-nexi',
    name: 'Nets / Nexi',
    providerType: 'inlösare',
    description: 'Offertbaserad prissättning. Uppskattat mellanläge för jämförelse.',
    source: 'Uppskattning — bekräfta med aktuell offert innan kundmöte',
    url: 'https://www.nexigroup.com/en/nets/',
    applyUrl: 'https://payments.nets.eu/payment-terminals',
    highlight: 'ca 1,5 % (uppskattning)',
    pricing: {
      swedishDebit: { percent: 1.5, fixed: 0.25 },
      swedishCredit: { percent: 1.5, fixed: 0.25 },
      corporate: { percent: 2.0, fixed: 0.25 },
      euEes: { percent: 1.5, fixed: 0.25 },
      international: { percent: 2.5, fixed: 0.25 },
      amex: { percent: 2.5, fixed: 0.25 },
    },
  },
  {
    id: 'ecentric',
    name: 'Ecentric',
    providerType: 'inlösare',
    description: 'Sydafrikansk/europeisk betalningsleverantör med fokus på fysisk handel. Offertbaserad prissättning.',
    source: 'Uppskattning — bekräfta med aktuell offert innan kundmöte',
    highlight: 'ca 1,6 % (uppskattning)',
    url: 'https://www.ecentric.co.za',
    applyUrl: 'https://www.ecentric.co.za',
    pricing: {
      swedishDebit: { percent: 1.6, fixed: 0.2 },
      swedishCredit: { percent: 1.6, fixed: 0.2 },
      corporate: { percent: 2.1, fixed: 0.2 },
      euEes: { percent: 1.6, fixed: 0.2 },
      international: { percent: 2.6, fixed: 0.2 },
      amex: { percent: 2.6, fixed: 0.2 },
    },
  },
  {
    id: 'tietoevry',
    name: 'Tietoevry',
    providerType: 'inlösare',
    description: 'Nordisk teknik- och betalningsleverantör. Offertbaserad prissättning, ofta paketerad med annan infrastruktur.',
    source: 'Uppskattning — bekräfta med aktuell offert innan kundmöte',
    highlight: 'ca 1,55 % (uppskattning)',
    url: 'https://www.tietoevry.com',
    applyUrl: 'https://www.tietoevry.com',
    pricing: {
      swedishDebit: { percent: 1.55, fixed: 0.2 },
      swedishCredit: { percent: 1.55, fixed: 0.2 },
      corporate: { percent: 2.05, fixed: 0.2 },
      euEes: { percent: 1.55, fixed: 0.2 },
      international: { percent: 2.55, fixed: 0.2 },
      amex: { percent: 2.55, fixed: 0.2 },
    },
  },
]

export function getCatalogAcquirer(id: string): CatalogAcquirer | undefined {
  return acquirerCatalog.find((entry) => entry.id === id)
}
