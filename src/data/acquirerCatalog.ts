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
    description:
      'Global kortinlösare. Genom vårt partnerskap med Elavon kan vi i många fall erbjuda mer fördelaktiga inlösenkostnader än vad många företag själva kan förhandla fram.',
    source: 'Partneravtal (kontakta oss för aktuella villkor)',
    highlight: 'Förvalt via partnerskap',
    isDefault: true,
    url: 'https://www.elavon.com',
    partnershipNote:
      'Genom vårt partnerskap med Elavon kan vi i många fall erbjuda mer fördelaktiga inlösenkostnader än vad många företag själva kan förhandla fram på egen hand.',
    // OBS (dev): priserna nedan är illustrativa platshållare — ersätt med de faktiska
    // partnervillkoren ni kan erbjuda via Elavon innan verktyget används skarpt.
    pricing: {
      swedishDebit: { percent: 0.55, fixed: 0.1 },
      swedishCredit: { percent: 0.65, fixed: 0.1 },
      corporate: { percent: 1.35, fixed: 0.1 },
      euEes: { percent: 0.8, fixed: 0.1 },
      international: { percent: 1.8, fixed: 0.1 },
      amex: { percent: 1.6, fixed: 0.1 },
    },
  },
  {
    id: 'swedbank-pay',
    name: 'Swedbank Pay',
    providerType: 'inlösare',
    description: 'Sveriges största kortinlösare. Kampanjpris från 0,79 %.',
    source: 'Publikt listpris',
    url: 'https://www.swedbankpay.se/foretag',
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
    description: 'Publicerade kortpriser för EES debit/kredit och internationella kort.',
    source: 'Publikt listpris',
    url: 'https://stripe.com/en-se/pricing',
    highlight: '1,5 % + 1,80 kr',
    pricing: {
      swedishDebit: { percent: 1.5, fixed: 1.8 },
      swedishCredit: { percent: 1.9, fixed: 1.8 },
      corporate: { percent: 1.9, fixed: 1.8 },
      euEes: { percent: 1.5, fixed: 1.8 },
      international: { percent: 3.25, fixed: 1.8 },
      amex: { percent: 3.25, fixed: 1.8 },
    },
  },
  {
    id: 'worldline',
    name: 'Worldline',
    providerType: 'inlösare',
    description: 'Worldline Checkout med publicerat paketpris från 1,95 %.',
    source: 'Publikt listpris',
    url: 'https://worldline.com/en/home/campaign/checkout-lp',
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
