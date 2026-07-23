import type { CalculationResult, TransactionMix, VolumeData } from '../types/calculator'
import { MIX_CATEGORY_LABELS, MIX_CATEGORIES } from '../types/calculator'
import type { CurrencyConfig } from '../i18n/currency'
import type { TranslationDict } from '../i18n/translations'
import { formatMoney, formatPercent } from './formatters'

interface PdfReportParams {
  t: TranslationDict
  currency: CurrencyConfig
  volume: VolumeData
  mix: TransactionMix
  results: CalculationResult
  acquirerCount: number
  annualTransactions: number
}

const INK = '#0f172a'
const MUTED = '#64748b'
const ACCENT = '#863bff'
const SUCCESS = '#0d7c4e'
const LINE = '#e2e8f0'

export async function generatePdfReport({
  t,
  currency,
  volume,
  mix,
  results,
  acquirerCount,
  annualTransactions,
}: PdfReportParams): Promise<void> {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const pageWidth = doc.internal.pageSize.getWidth()
  const marginX = 56
  const contentWidth = pageWidth - marginX * 2
  let y = 64

  const money = (value: number) => formatMoney(value, currency, false)

  // --- Header ---
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.setTextColor(INK)
  doc.text(t.pdfReport.documentTitle, marginX, y)

  y += 20
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(MUTED)
  doc.text(t.pdfReport.documentSubtitle, marginX, y)

  y += 10
  doc.setDrawColor(LINE)
  doc.setLineWidth(1)
  doc.line(marginX, y, pageWidth - marginX, y)
  y += 34

  // --- Summary: big potential number ---
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(MUTED)
  doc.text(t.pdfReport.summaryHeading.toUpperCase(), marginX, y)
  y += 22

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(30)
  doc.setTextColor(SUCCESS)
  doc.text(money(results.annualSavings), marginX, y)

  y += 18
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(MUTED)
  doc.text(t.pdfReport.summaryPotentialLabel, marginX, y)

  y += 36

  const sectionGap = 26
  const rowGap = 18

  const drawSectionHeading = (heading: string) => {
    doc.setDrawColor(LINE)
    doc.line(marginX, y, pageWidth - marginX, y)
    y += 20
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.setTextColor(INK)
    doc.text(heading, marginX, y)
    y += rowGap
  }

  const drawRow = (label: string, value: string) => {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10.5)
    doc.setTextColor(MUTED)
    doc.text(label, marginX, y)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(INK)
    doc.text(value, pageWidth - marginX, y, { align: 'right' })
    y += rowGap
  }

  // --- Prerequisites ---
  drawSectionHeading(t.pdfReport.prerequisitesHeading)
  drawRow(t.pdfReport.annualVolumeLabel, money(volume.annualVolume))
  drawRow(t.pdfReport.averageOrderValueLabel, money(volume.averageOrderValue))
  drawRow(t.pdfReport.transactionCountLabel, Math.round(annualTransactions).toLocaleString(currency.locale))
  drawRow(t.pdfReport.currentFeeLabel, `${volume.currentPercentFee.toString().replace('.', ',')} %`)

  y += sectionGap - rowGap

  // --- Optimization ---
  drawSectionHeading(t.pdfReport.optimizationHeading)
  drawRow(t.pdfReport.currentCostLabel, money(results.currentAnnualCost))
  drawRow(t.pdfReport.routedCostLabel, money(results.routedAnnualCost))
  drawRow(
    `${t.pdfReport.differenceLabel} (${formatPercent(results.percentSavings)})`,
    money(results.annualSavings),
  )

  y += sectionGap - rowGap

  // --- Factors affecting the result ---
  drawSectionHeading(t.pdfReport.factorsHeading)
  const topMixCategory = [...MIX_CATEGORIES].sort((a, b) => mix[b] - mix[a])[0]
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10.5)
  doc.setTextColor(MUTED)
  const factorLines = [
    `${t.pdfReport.factorCardMix}: ${MIX_CATEGORY_LABELS[topMixCategory]} ${mix[topMixCategory].toFixed(0)} %`,
    `${t.pdfReport.factorInternational}: ${(mix.international + mix.euEes).toFixed(0)} %`,
    `${t.pdfReport.factorCurrentAgreements}: ${volume.currentPercentFee.toString().replace('.', ',')} %`,
    `${t.pdfReport.factorAvailableAcquirers}: ${acquirerCount}`,
  ]
  for (const line of factorLines) {
    doc.text(line, marginX, y)
    y += rowGap
  }

  y += sectionGap - rowGap

  // --- Disclaimer ---
  doc.setDrawColor(LINE)
  doc.setFillColor('#f7f9fc')
  const disclaimerLines = doc.splitTextToSize(t.pdfReport.disclaimerBody, contentWidth - 24)
  const disclaimerBoxHeight = 26 + disclaimerLines.length * 13
  doc.roundedRect(marginX, y, contentWidth, disclaimerBoxHeight, 4, 4, 'FD')
  y += 20
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.setTextColor(INK)
  doc.text(t.pdfReport.disclaimerHeading, marginX + 12, y)
  y += 14
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  doc.setTextColor(MUTED)
  doc.text(disclaimerLines, marginX + 12, y)

  // --- Footer ---
  const pageHeight = doc.internal.pageSize.getHeight()
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(MUTED)
  const today = new Date().toLocaleDateString(currency.locale)
  doc.text(`${t.pdfReport.generatedLabel}: ${today} — Inlösenkollen`, marginX, pageHeight - 32)

  doc.setDrawColor(ACCENT)

  doc.save('inlosenkollen-analys.pdf')
}
