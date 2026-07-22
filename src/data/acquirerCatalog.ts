import type { AcquirerPricing, PricingCategory, PriceConfidence } from '../types/calculator'
import { INTERCHANGE, SCHEME_FEE } from './interchange'

export interface CatalogAcquirer {
  id: string
  name: string
  providerType: 'inlösare' | 'psp'
  description: string
  source: string
  confidence: PriceConfidence
  /** Datum (YYYY-MM) när priset senast verifierades. */
  verifiedAt: string
  /** Markups per segment (interchange + scheme läggs till automatiskt). */
  markup: Record<PricingCategory, number>
  fixed: number
  highlight: string
  url?: string
  applyUrl?: string
  applyLabel?: string
  partnershipNote?: string
  isDefault?: boolean
  isPartner?: boolean
}

function pricingFromMarkup(
  markup: Record<PricingCategory, number>,
  fixed: number,
): AcquirerPricing {
  const out = {} as AcquirerPricing
  for (const cat of Object.keys(markup) as PricingCategory[]) {
    out[cat] = {
      interchange: INTERCHANGE[cat],
      scheme: SCHEME_FEE[cat],
      markup: markup[cat],
      fixed,
    }
  }
  return out
}

/**
 * Acquirerkatalog. All-i-pris = interchange + scheme + markup.
 * interchange/scheme är reglerade/schablon och lika för alla; det som skiljer
 * acquirrar åt är markup och fasta avgifter. Varje pris har en konfidensgrad
 * och ett verifieringsdatum så att användaren vet vad som är bekräftat vs uppskattat.
 */
export const acquirerCatalog: CatalogAcquirer[] = [
  {
    id: 'elavon',
    name: 'Elavon',
    providerType: 'inlösare',
    description: 'Global kortinlösare, tillgänglig genom Westpays partnerskap.',
    source: 'Partneravtal via Westpay',
    confidence: 'confirmed',
    verifiedAt: '2026-07',
    isPartner: true,
    isDefault: true,
    highlight: 'Från 0,45 % (debit)',
    url: 'https://www.elavon.com',
    applyUrl: 'https://www.westpay.se/terminals',
    applyLabel: 'Anslut via Westpay',
    partnershipNote:
      'Genom Westpays partnerskap med Elavon kan vi i många fall erbjuda mer fördelaktiga inlösenkostnader än vad många företag själva kan förhandla fram. Detta är det enda bekräftade partnervillkoret i katalogen.',
    markup: {
      swedishDebit: 0.17,
      swedishCredit: 0.17,
      euEes: 0.15,
      corporate: 1.2,
      international: 1.68,
      amex: 1.0,
    },
    fixed: 0.1,
  },
  {
    id: 'swedbank-pay',
    name: 'Swedbank Pay',
    providerType: 'inlösare',
    description: 'Sveriges största kortinlösare. Kampanjpris från 0,79 %.',
    source: 'Publikt listpris',
    confidence: 'published',
    verifiedAt: '2026-07',
    isDefault: true,
    highlight: 'Från 0,79 %',
    url: 'https://www.swedbankpay.se/foretag',
    applyUrl: 'https://www.swedbankpay.se/vara-losningar/intresserad',
    markup: {
      swedishDebit: 0.51,
      swedishCredit: 0.41,
      euEes: 0.39,
      corporate: 0.8,
      international: 0.68,
      amex: 1.0,
    },
    fixed: 0,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    providerType: 'psp',
    description: 'Officiellt publicerade priser. EES-kort, premiumkort, Amex och kort utanför EES.',
    source: 'Stripes officiella prislista',
    confidence: 'published',
    verifiedAt: '2026-07',
    highlight: '1,5 % (EES) – 3,25 % (utanför EES)',
    url: 'https://stripe.com/en-se/pricing',
    applyUrl: 'https://dashboard.stripe.com/register',
    markup: {
      swedishDebit: 1.22,
      swedishCredit: 1.12,
      euEes: 1.1,
      corporate: 1.2,
      international: 1.93,
      amex: 1.0,
    },
    fixed: 1.8,
  },
  {
    id: 'worldline',
    name: 'Worldline',
    providerType: 'inlösare',
    description: 'Worldline Checkout med publicerat paketpris från 1,95 %.',
    source: 'Publikt listpris',
    confidence: 'published',
    verifiedAt: '2026-07',
    highlight: 'Från 1,95 %',
    url: 'https://worldline.com/en/home/campaign/checkout-lp',
    applyUrl: 'https://worldline.com/en/home/campaign/checkout-lp',
    markup: {
      swedishDebit: 1.67,
      swedishCredit: 1.57,
      euEes: 1.55,
      corporate: 2.25,
      international: 1.63,
      amex: 1.45,
    },
    fixed: 0,
  },
  {
    id: 'nets-nexi',
    name: 'Nets / Nexi',
    providerType: 'inlösare',
    description: 'Offertbaserad prissättning. Uppskattat mellanläge för jämförelse.',
    source: 'Branschuppskattning',
    confidence: 'estimate',
    verifiedAt: '2026-07',
    highlight: 'ca 1,5 % (uppskattning)',
    url: 'https://www.nexigroup.com/en/nets/',
    applyUrl: 'https://payments.nets.eu/payment-terminals',
    markup: {
      swedishDebit: 1.22,
      swedishCredit: 1.12,
      euEes: 1.1,
      corporate: 1.3,
      international: 1.18,
      amex: 1.0,
    },
    fixed: 0.25,
  },
  {
    id: 'ecentric',
    name: 'Ecentric',
    providerType: 'inlösare',
    description: 'Sydafrikansk/europeisk betalningsleverantör. Offertbaserad prissättning.',
    source: 'Branschuppskattning',
    confidence: 'estimate',
    verifiedAt: '2026-07',
    highlight: 'ca 1,6 % (uppskattning)',
    url: 'https://www.ecentric.co.za',
    applyUrl: 'https://www.ecentric.co.za',
    applyLabel: 'Kontakta Ecentric för offert',
    markup: {
      swedishDebit: 1.32,
      swedishCredit: 1.22,
      euEes: 1.2,
      corporate: 1.4,
      international: 1.28,
      amex: 1.1,
    },
    fixed: 0.2,
  },
  {
    id: 'tietoevry',
    name: 'Tietoevry',
    providerType: 'inlösare',
    description: 'Nordisk teknik- och betalningsleverantör. Offertbaserad, ofta paketerad.',
    source: 'Branschuppskattning',
    confidence: 'estimate',
    verifiedAt: '2026-07',
    highlight: 'ca 1,55 % (uppskattning)',
    url: 'https://www.tietoevry.com',
    applyUrl: 'https://www.tietoevry.com',
    applyLabel: 'Kontakta Tietoevry för offert',
    markup: {
      swedishDebit: 1.27,
      swedishCredit: 1.17,
      euEes: 1.15,
      corporate: 1.35,
      international: 1.23,
      amex: 1.05,
    },
    fixed: 0.2,
  },
]

export function getCatalogAcquirer(id: string): CatalogAcquirer | undefined {
  return acquirerCatalog.find((entry) => entry.id === id)
}

export function catalogPricing(entry: CatalogAcquirer): AcquirerPricing {
  return pricingFromMarkup(entry.markup, entry.fixed)
}
