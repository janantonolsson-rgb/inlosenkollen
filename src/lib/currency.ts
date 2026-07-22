import type { Language } from '../i18n/translations'

export interface CurrencyConfig {
  code: 'SEK' | 'NOK' | 'DKK' | 'EUR'
  locale: string
  symbol: string
}

/**
 * Valuta kopplas till valt språk — siffrorna formateras/etiketteras i rätt
 * valuta men konverteras inte med växelkurs. Ett företag som väljer norska
 * anger alltså sina egna belopp i NOK.
 */
export const CURRENCY_BY_LANGUAGE: Record<Language, CurrencyConfig> = {
  sv: { code: 'SEK', locale: 'sv-SE', symbol: 'kr' },
  en: { code: 'SEK', locale: 'en-GB', symbol: 'kr' },
}
