import { defaultMix, defaultVolume } from '../data/defaults'
import type { Acquirer, CalculatorState } from '../types/calculator'

function volumeEqualsDefault(state: CalculatorState): boolean {
  const v = state.volume
  return (
    v.annualVolume === defaultVolume.annualVolume &&
    v.averageOrderValue === defaultVolume.averageOrderValue &&
    v.currentPercentFee === defaultVolume.currentPercentFee &&
    v.currentFixedFee === defaultVolume.currentFixedFee
  )
}

function mixEqualsDefault(state: CalculatorState): boolean {
  const m = state.mix
  return (Object.keys(defaultMix) as (keyof typeof defaultMix)[]).every(
    (key) => m[key] === defaultMix[key],
  )
}

/**
 * En inlösare räknas som "obekräftad" om den kommer direkt från katalogen och
 * aldrig redigerats — dvs. ett publikt/uppskattat listpris, inte en verklig
 * offert som kunden faktiskt hämtat in från inlösaren.
 */
function isUnconfirmedCatalogAcquirer(acquirer: Acquirer): boolean {
  return Boolean(acquirer.catalogId)
}

/**
 * True om resultatet just nu bygger på exempeldata snarare än kundens egna,
 * verifierade siffror — dvs. användaren har varken ändrat volym/mix/nuvarande
 * pris i steg 1–2, eller lagt in en egen (icke-katalog) inlösare i steg 3.
 * Används för att visa en varsam notis om att resultatet är en branschuppskattning,
 * inte en verklig kalkyl, tills kunden pluggar in sina egna siffror.
 */
export function isUsingExampleData(state: CalculatorState): boolean {
  const stepOneTwoUnchanged = volumeEqualsDefault(state) && mixEqualsDefault(state)
  const noConfirmedAcquirer =
    state.acquirers.length === 0 || state.acquirers.every(isUnconfirmedCatalogAcquirer)

  return stepOneTwoUnchanged || noConfirmedAcquirer
}
