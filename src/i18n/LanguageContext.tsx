import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { translations, type Language, type TranslationDict } from './translations'
import { CURRENCY_BY_LANGUAGE, type CurrencyConfig } from './currency'
import { formatMoney } from '../lib/formatters'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationDict
  currency: CurrencyConfig
  formatMoney: (value: number, decimals?: boolean) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sv')

  const value = useMemo<LanguageContextValue>(() => {
    const currency = CURRENCY_BY_LANGUAGE[language]
    return {
      language,
      setLanguage,
      t: translations[language],
      currency,
      formatMoney: (value: number, decimals = false) => formatMoney(value, currency, decimals),
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage måste användas inom LanguageProvider')
  return ctx
}
