export type Language = 'sv' | 'en'

export interface TranslationDict {
  nav: {
    home: string
    howItWorks: string
    calculator: string
    contact: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    acquirerExplainerTitle: string
    acquirerExplainer: string
    ctaPrimary: string
    ctaSecondary: string
    footnote: string
  }
  howItWorks: {
    eyebrow: string
    title: string
    description: string
    intro: string
    diagramTitle: string
    diagramSubtitle: string
    valueTitle: string
    valueSubtitle: string
    valueFootnote: string
    ctaButton: string
  }
  calculator: {
    step1Title: string
    step1Description: string
    step2Title: string
    step3Title: string
    step3Description: string
    annualVolume: string
    averageOrderValue: string
    annualTransactionsComputed: string
    currentFee: string
    ctaCalculate: string
  }
  results: {
    eyebrow: string
    title: string
    description: string
    exampleDataTitle: string
    exampleDataBody: string
    exampleDataDismiss: string
  }
  leadForm: {
    title: string
    description: string
    submit: string
    submitting: string
    thanksTitle: string
    thanksBody: string
  }
  footer: {
    rights: string
  }
  disclaimer: string
  languageToggle: { sv: string; en: string }
}

/**
 * Central ordbok för sidans huvudsakliga marknadsförings- och gränssnittstexter.
 * Täcker hero, "så fungerar det", kalkylatorns steg-titlar, resultat, leadformulär,
 * header/footer och disclaimer. Djupare mikrotexter (enstaka hjälptexter i avancerade
 * inställningar) kan fortfarande vara på svenska — se sammanfattningen i chatten.
 */
export const translations: Record<Language, TranslationDict> = {
  sv: {
    nav: {
      home: 'Hem',
      howItWorks: 'Så fungerar det',
      calculator: 'Kalkylator',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Intelligent betalningsrouting',
      title: 'Betalar ni för mycket för era korttransaktioner?',
      subtitle:
        'Se hur mycket ni potentiellt kan spara genom att automatiskt skicka varje transaktion till det mest fördelaktiga inlösenavtalet.',
      acquirerExplainerTitle: 'Vad är en inlösare?',
      acquirerExplainer:
        'En inlösare är den bank eller betalpartner som hanterar kortbetalningen och betalar ut pengarna till företaget. Olika inlösare har olika priser beroende på korttyp och avtal, vilket gör att valet av inlösare kan påverka företagets kostnader betydligt.',
      ctaPrimary: 'Se vad ni kan spara',
      ctaSecondary: 'Så fungerar intelligent routing?',
      footnote: 'För nordiska handlare och retailföretag med kortbetalningar',
    },
    howItWorks: {
      eyebrow: 'Så fungerar det',
      title: 'Intelligent routing i tre steg',
      description:
        'Intelligent routing analyserar varje transaktion och väljer det inlösenavtal som ger bäst ekonomiskt utfall — baserat på era avtal och konfiguration.',
      intro:
        'Många företag skickar idag samtliga kortbetalningar till samma inlösare eftersom det känns enkelt och bekvämt. Över tid leder det ofta till onödigt höga kostnader, eftersom olika inlösare är olika förmånliga för olika korttyper. Företag som istället arbetar smart och använder intelligent routing kan optimera sina betalflöden, minska sina kortkostnader och utnyttja sina befintliga inlösenavtal fullt ut — utan att förändra kundupplevelsen i kassan.',
      diagramTitle: 'Så väljs den mest fördelaktiga inlösaren',
      diagramSubtitle:
        'Varje transaktion analyseras individuellt och skickas till det inlösenavtal som ger lägst totalkostnad just för den korttypen.',
      valueTitle: 'Mer än bara lägre pris',
      valueSubtitle: 'Intelligent routing handlar om att sänka kostnaden — men värdet stannar inte där.',
      valueFootnote:
        'Möjligheterna beror på kundens avtal, tekniska uppsättning, marknad och vilka betalningsmetoder som stöds. Alla transaktioner kan inte alltid routas till valfri inlösare.',
      ctaButton: 'Prova kalkylatorn',
    },
    calculator: {
      step1Title: 'Steg 1: Företagets betalningsvolym',
      step1Description:
        'Ange företagets nuvarande årliga kortomsättning och ungefärliga inlösenkostnad. Kör ni bara med en ungefärlig procentsats idag räcker det gott för en första uppskattning. Intelligent routing gör störst skillnad för företag och koncerner med hög omsättning.',
      step2Title: 'Steg 2: Transaktionsmix',
      step3Title: 'Steg 3: Inlösenavtal',
      step3Description:
        'Använd ert ungefärliga pris, importera etablerade inlösare med kända avgifter, eller ange exakta priser per korttyp om ni har dem.',
      annualVolume: 'Total kortomsättning per år',
      averageOrderValue: 'Genomsnittligt ordervärde (AoV)',
      annualTransactionsComputed: 'Antal transaktioner per år (beräknas automatiskt)',
      currentFee: 'Nuvarande genomsnittlig procentuell inlösenavgift',
      ctaCalculate: 'Visa min besparing',
    },
    results: {
      eyebrow: 'Resultat',
      title: 'Er uppskattade besparing',
      description: 'Resultat baserat på angivna priser och årsvolymer. Alla siffror är uppskattningar.',
      exampleDataTitle: 'Det här är en branschuppskattning, inte en verklig kalkyl',
      exampleDataBody:
        'Resultatet bygger just nu på exempeldata och/eller allmänna branschpriser. För en verklig beräkning av vad ni faktiskt kan spara — fyll i er egen omsättning, transaktionsmix och nuvarande pris i steg 1–2, och hör av er till de inlösare ni vill jämföra för att få deras faktiska villkor i steg 3. Det gör det till en riktig kalkyl, inte en gissning.',
      exampleDataDismiss: 'Jag förstår, visa resultatet ändå',
    },
    leadForm: {
      title: 'Vill du veta vad ni faktiskt kan spara?',
      description:
        'Skicka in era nuvarande inlösenpriser och transaktionsvolymer så hjälper vi er att göra en mer detaljerad analys.',
      submit: 'Boka en kostnadsanalys',
      submitting: 'Skickar...',
      thanksTitle: 'Tack för er förfrågan!',
      thanksBody: 'Vi återkommer inom kort för att boka en mer detaljerad kostnadsanalys.',
    },
    footer: {
      rights: 'Alla rättigheter förbehållna.',
    },
    disclaimer:
      'Beräkningen är en uppskattning och baseras helt på den information som anges. Faktiska kostnader och besparingar påverkas bland annat av kortmix, interchange, scheme fees, inlösenavtal, valutaväxling, minimikostnader, teknisk uppsättning och övriga avtalsvillkor. Vi garanterar inte ett visst pris eller en viss besparing.',
    languageToggle: { sv: 'Svenska', en: 'English' },
  },
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How it works',
      calculator: 'Calculator',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Intelligent payment routing',
      title: 'Are you overpaying on your card transactions?',
      subtitle:
        'See how much you could potentially save by automatically sending every transaction to the most favorable acquiring agreement.',
      acquirerExplainerTitle: 'What is an acquirer?',
      acquirerExplainer:
        'An acquirer is the bank or payment partner that processes the card payment and pays the funds out to the business. Different acquirers charge different prices depending on card type and agreement, so the choice of acquirer can significantly affect a company\u2019s costs.',
      ctaPrimary: 'See what you could save',
      ctaSecondary: 'How does intelligent routing work?',
      footnote: 'For Nordic merchants and retail companies with card payments',
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'Intelligent routing in three steps',
      description:
        'Intelligent routing analyzes every transaction and selects the acquiring agreement that gives the best financial outcome — based on your agreements and configuration.',
      intro:
        'Many companies today send all their card payments to the same acquirer because it feels simple and convenient. Over time this often leads to unnecessarily high costs, since different acquirers are more favorable for different card types. Companies that instead work smart and use intelligent routing can optimize their payment flows, reduce their card costs, and make full use of their existing acquiring agreements — without changing the customer experience at checkout.',
      diagramTitle: 'How the most favorable acquirer is chosen',
      diagramSubtitle:
        'Every transaction is analyzed individually and sent to the acquiring agreement that gives the lowest total cost for that specific card type.',
      valueTitle: 'More than just a lower price',
      valueSubtitle: 'Intelligent routing is about cutting costs — but the value doesn\u2019t stop there.',
      valueFootnote:
        'The possibilities depend on the customer\u2019s agreements, technical setup, market, and which payment methods are supported. Not every transaction can always be routed to any acquirer.',
      ctaButton: 'Try the calculator',
    },
    calculator: {
      step1Title: 'Step 1: Your company\u2019s payment volume',
      step1Description:
        'Enter your company\u2019s current annual card turnover and approximate acquiring cost. If you only have a rough percentage today, that\u2019s enough for a first estimate. Intelligent routing makes the biggest difference for companies and groups with high turnover.',
      step2Title: 'Step 2: Transaction mix',
      step3Title: 'Step 3: Acquiring agreements',
      step3Description:
        'Use your approximate price, import established acquirers with known fees, or enter exact prices per card type if you have them.',
      annualVolume: 'Total card turnover per year',
      averageOrderValue: 'Average Order Value (AoV)',
      annualTransactionsComputed: 'Transactions per year (calculated automatically)',
      currentFee: 'Current average percentage acquiring fee',
      ctaCalculate: 'Show my savings',
    },
    results: {
      eyebrow: 'Results',
      title: 'Your estimated savings',
      description: 'Results based on the prices and annual volumes provided. All figures are estimates.',
      exampleDataTitle: 'This is an industry estimate, not a real calculation',
      exampleDataBody:
        'The result is currently based on example data and/or general industry prices. For a real calculation of what you could actually save — fill in your own turnover, transaction mix and current price in steps 1–2, and contact the acquirers you want to compare to get their actual terms in step 3. That turns this into a real calculation, not a guess.',
      exampleDataDismiss: 'Got it, show the result anyway',
    },
    leadForm: {
      title: 'Want to know what you could actually save?',
      description:
        'Send us your current acquiring prices and transaction volumes and we\u2019ll help you with a more detailed analysis.',
      submit: 'Book a cost analysis',
      submitting: 'Sending...',
      thanksTitle: 'Thank you for your inquiry!',
      thanksBody: 'We will be in touch shortly to book a more detailed cost analysis.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    disclaimer:
      'This calculation is an estimate based entirely on the information provided. Actual costs and savings are affected by, among other things, card mix, interchange, scheme fees, acquiring agreements, currency conversion, minimum costs, technical setup, and other contractual terms. We do not guarantee a specific price or a specific saving.',
    languageToggle: { sv: 'Svenska', en: 'English' },
  },
} as const

