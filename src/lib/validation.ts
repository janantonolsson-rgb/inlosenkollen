import { MIX_CATEGORIES, type TransactionMix } from '../types/calculator'

const MIX_TOLERANCE = 0.01

export function sumMix(mix: TransactionMix): number {
  return MIX_CATEGORIES.reduce((sum, key) => sum + mix[key], 0)
}

export function isMixValid(mix: TransactionMix): boolean {
  return Math.abs(sumMix(mix) - 100) <= MIX_TOLERANCE
}

export function getMixError(mix: TransactionMix): string | null {
  const total = sumMix(mix)
  if (Math.abs(total - 100) <= MIX_TOLERANCE) return null
  return `Transaktionsmixen måste summera till 100 %. Nuvarande summa: ${total.toFixed(1)} %`
}

export function validateVolume(volume: number, transactions: number): string | null {
  if (volume <= 0) return 'Ange en positiv årlig omsättning'
  if (transactions <= 0) return 'Ange ett positivt antal transaktioner'
  return null
}
