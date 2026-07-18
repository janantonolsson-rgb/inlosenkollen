export interface LeadFormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  annualVolume: string
  currentAcquirer: string
  posSystem: string
  message: string
  consent: boolean
  attachment: File | null
}

/**
 * Skickar in leadformuläret till /api/send-lead, som vidarebefordrar det som
 * e-post till Anton.Olsson@westpay.se via Resend (se api/send-lead.ts).
 *
 * Kräver att miljövariabeln RESEND_API_KEY är satt i Vercel-projektet för att
 * faktiskt skicka e-post. Se kommentarerna i api/send-lead.ts för instruktioner.
 */
export async function submitLead(data: LeadFormData): Promise<void> {
  const response = await fetch('/api/send-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formName: 'Vill du veta vad ni faktiskt kan spara?',
      Företagsnamn: data.companyName,
      Kontaktperson: data.contactName,
      'E-post': data.email,
      Telefon: data.phone,
      'Årlig kortomsättning': data.annualVolume,
      'Nuvarande inlösare': data.currentAcquirer,
      'POS-/kassasystem': data.posSystem,
      Meddelande: data.message,
    }),
  })

  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new Error(body.error ?? 'Kunde inte skicka formuläret.')
  }
}
