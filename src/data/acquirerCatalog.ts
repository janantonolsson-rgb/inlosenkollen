import type { AcquirerPricing } from '../types/calculator'

export interface CatalogAcquirer {
  id: string
  name: string
  providerType: 'inlösare' | 'psp'
  description: string
  source: string
  pricing: AcquirerPricing
  highlight: string
}

/**
 * Illustrativa avgifter baserade på payment_providers/-research (2026-07-10).
 * Inte faktiska avtalspriser — används som utgångspunkt i kalkylatorn.
 */
export const acquirerCatalog: CatalogAcquirer[] = [
  {
    id: 'swedbank-pay',
    name: 'Swedbank Pay',
    providerType: 'inlösare',
    description: 'Sveriges största kortinlösare. Kampanjpris från 0,79 %.',
    source: 'payment_providers/swedbank-pay.md',
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
    source: 'payment_providers/stripe.md',
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
    source: 'payment_providers/worldline.md',
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
    source: 'payment_providers/nets-nexi.md',
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
]

export function getCatalogAcquirer(id: string): CatalogAcquirer | undefined {
  return acquirerCatalog.find((entry) => entry.id === id)
}
