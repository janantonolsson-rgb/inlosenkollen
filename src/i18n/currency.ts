import type { Language } from './translations'

export interface CurrencyConfig {
  code: 'SEK' | 'NOK' | 'DKK' | 'EUR'
  locale: string
  symbol: string
}

/**
 * Valuta kopplas till valt språk (inte till exakt land) — siffrorna konverteras
 * inte med växelkurs, de formateras/etiketteras bara i rätt valuta. Ett företag
 * som väljer norska anger alltså sina egna belopp i NOK.
 */
export const CURRENCY_BY_LANGUAGE: Record<Language, CurrencyConfig> = {
  sv: { code: 'SEK', locale: 'sv-SE', symbol: 'kr' },
  en: { code: 'SEK', locale: 'en-GB', symbol: 'kr' },
  no: { code: 'NOK', locale: 'nb-NO', symbol: 'kr' },
  da: { code: 'DKK', locale: 'da-DK', symbol: 'kr' },
  fi: { code: 'EUR', locale: 'fi-FI', symbol: '€' },
}
