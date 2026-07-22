import type { PricingCategory } from '../types/calculator'

/**
 * Interchange-referensvärden (procent av transaktionsbelopp).
 *
 * Källa/ankare: EU Interchange Fee Regulation (IFR) cap för EEA-konsumentskort
 * (0,20 % debit, 0,30 % kredit). IFR-kappen gäller INTE commercial/corporate,
 * non-EEA/internationellt eller de flesta Amex-fall — där är interchange högre
 * och varierar mer. Värdena nedan är typiska svenska/EEA-utgångspunkter som
 * används för att dekomponera all-i-priser, inte exakta avtalspriser.
 *
 * Observera: interchange är i stort satt per korttyp/land/kanal och inte
 * förhandlingsbart. Det förhandlingsbara är acquirer-markup.
 */
export const INTERCHANGE: Record<PricingCategory, number> = {
  swedishDebit: 0.2, // IFR-cap, EEA konsuments-debit
  swedishCredit: 0.3, // IFR-cap, EEA konsuments-kredit
  euEes: 0.3, // EEA-konsument, ofta kredit-likt; debit kan vara 0,2
  corporate: 0.6, // commercial, ej IFR-cap — typiskt svenskt värde
  international: 1.2, // non-EEA konsument, ej IFR-cap
  amex: 1.5, // Amex opt-blue-liknande uppskattning (ej nätverksinterchange)
}

/**
 * Scheme fees (VISA/Mastercard). Varierar med nätverk, geografi, kanal,
 * tokenisering m.m. Här används ett schablonvärde per segment för
 * dekomponering. Ej förhandlingsbart i samma utsträckning som markup.
 */
export const SCHEME_FEE: Record<PricingCategory, number> = {
  swedishDebit: 0.08,
  swedishCredit: 0.08,
  euEes: 0.1,
  corporate: 0.1,
  international: 0.12,
  amex: 0.0, // Amex har egen modell; scheme-fee ingår i interchange-referensen
}

/** All-i-pris för en IC++-avgift. */
export function allInPercent(fee: {
  interchange: number
  scheme: number
  markup: number
}): number {
  return fee.interchange + fee.scheme + fee.markup
}

/** Implicit markup när man känner all-i-pris och interchange/scheme. */
export function impliedMarkup(
  category: PricingCategory,
  allIn: number,
): number {
  const base = INTERCHANGE[category] + SCHEME_FEE[category]
  return Math.max(0, allIn - base)
}
