export interface LeadFormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  annualVolume: string
  currentAcquirer: string
  message: string
  consent: boolean
  attachment: File | null
}

/**
 * Mock submission handler for the lead form.
 *
 * TODO: HubSpot / CRM integration
 * Replace this function with an API call to your CRM, e.g.:
 *
 * ```typescript
 * const response = await fetch('/api/leads', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     ...data,
 *     source: 'routing-calculator',
 *   }),
 * });
 * ```
 *
 * For file uploads, use FormData and a separate endpoint or
 * HubSpot Forms API with multipart/form-data support.
 */
export async function mockSubmitLead(data: LeadFormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800))

  console.log('[Lead Form] Mock submission:', {
    companyName: data.companyName,
    contactName: data.contactName,
    email: data.email,
    phone: data.phone,
    annualVolume: data.annualVolume,
    currentAcquirer: data.currentAcquirer,
    message: data.message,
    consent: data.consent,
    attachment: data.attachment
      ? { name: data.attachment.name, size: data.attachment.size }
      : null,
  })
}
