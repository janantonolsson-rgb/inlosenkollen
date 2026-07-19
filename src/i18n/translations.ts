export type Language = 'sv' | 'en' | 'no' | 'da' | 'fi'

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
    step2Description: string
    step3Title: string
    step3Description: string
    annualVolume: string
    averageOrderValue: string
    annualTransactionsComputed: string
    currentFee: string
    ctaCalculate: string
    showFixedFees: string
    hideFixedFees: string
  }
  results: {
    eyebrow: string
    title: string
    description: string
    exampleDataTitle: string
    exampleDataBody: string
    exampleDataDismiss: string
  }
  metrics: {
    currentCost: string
    routedCost: string
    annualSavings: string
    percentSavings: string
    threeYearSavings: string
    tenYearSavings: string
  }
  leadForm: {
    title: string
    description: string
    orgNumberLabel: string
    orgNumberPlaceholder: string
    submit: string
    submitting: string
    thanksTitle: string
    thanksBody: string
  }
  catalog: {
    applyTemplate: string
  }
  footer: {
    description: string
    rights: string
    developedBy: string
  }
  disclaimer: string
  misc: {
    quickSelect: string
    customAmount: string
    aovHint: string
    currentFeeHint: string
    transactionsAutoNote: string
    fixedFeeLabel: string
    fixedFeeHint: string
    importedAcquirersHeading: string
    yourAcquirersHeading: string
    addAcquirerButton: string
    simplifiedModeNotice: string
    noAcquirerNotice: string
    consentText: string
    consentError: string
    genericError: string
    sendAnotherInquiry: string
    contactNameLabel: string
    emailLabel: string
    phoneLabel: string
    annualVolumeApproxLabel: string
    annualVolumeApproxPlaceholder: string
    currentAcquirerLabel: string
    posSystemLabel: string
    posSystemPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    attachmentLabel: string
    useExampleDataButton: string
    exampleDataDisclaimer: string
    totalShareLabel: string
    mixGroupSwedish: string
    mixGroupInternational: string
  }
  languageNames: { sv: string; en: string; no: string; da: string; fi: string }
}

/**
 * Central ordbok för sidans huvudsakliga marknadsförings- och gränssnittstexter.
 * Täcker hero, "så fungerar det", kalkylatorns steg-titlar, resultat, leadformulär,
 * header/footer och disclaimer. Djupare mikrotexter (enstaka hjälptexter i avancerade
 * inställningar) kan fortfarande vara på svenska/engelska i vissa sällan synliga fall.
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
      ctaSecondary: 'Hur fungerar intelligent routing?',
      footnote:
        'Ett smart sätt för nordiska handlare och retailföretag att sänka kostnaderna för kortbetalningar i fysisk butik — utan att ändra kundupplevelsen i kassan.',
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
      step2Title: 'Steg 2: Er transaktionsmix',
      step2Description:
        'Ungefär hur stor andel av er kortförsäljning kommer från respektive korttyp? En uppskattning räcker gott — ni kan alltid justera senare.',
      step3Title: 'Steg 3: Inlösenavtal',
      step3Description:
        'Använd ert ungefärliga pris, importera etablerade inlösare med kända avgifter, eller ange exakta priser per korttyp om ni har dem.',
      annualVolume: 'Total kortomsättning per år',
      averageOrderValue: 'Genomsnittligt ordervärde (AoV)',
      annualTransactionsComputed: 'Antal transaktioner per år (beräknas automatiskt)',
      currentFee: 'Nuvarande genomsnittlig procentuell inlösenavgift',
      ctaCalculate: 'Visa min besparing',
      showFixedFees: '+ Lägg till fasta avgifter i beräkningen',
      hideFixedFees: '− Dölj fasta avgifter',
    },
    results: {
      eyebrow: 'Resultat',
      title: 'Er uppskattade besparing',
      description: 'Resultat baserat på angivna priser och årsvolymer. Alla siffror är uppskattningar.',
      exampleDataTitle: 'Det här är en branschuppskattning – inte en faktisk kalkyl.',
      exampleDataBody:
        'Resultatet bygger just nu på allmänna branschpriser. Fyll i era egna uppgifter och jämför verkliga villkor från inlösare för att få en korrekt besparingsberäkning.',
      exampleDataDismiss: 'Jag förstår, visa resultatet ändå',
    },
    metrics: {
      currentCost: 'Nuvarande kostnad per år',
      routedCost: 'Kostnad med intelligent routing',
      annualSavings: 'Besparing per år',
      percentSavings: 'Procentuell kostnadsminskning',
      threeYearSavings: 'Beräknad besparing över tre år',
      tenYearSavings: 'Beräknad besparing över tio år',
    },
    leadForm: {
      title: 'Vill du veta vad ni faktiskt kan spara?',
      description:
        'Skicka in era nuvarande inlösenpriser och transaktionsvolymer så hjälper vi er att göra en mer detaljerad analys.',
      orgNumberLabel: 'Organisationsnummer',
      orgNumberPlaceholder: 't.ex. 556677-8899',
      submit: 'Boka en kostnadsanalys',
      submitting: 'Skickar...',
      thanksTitle: 'Tack för er förfrågan!',
      thanksBody: 'Vi återkommer inom kort för att boka en mer detaljerad kostnadsanalys.',
    },
    catalog: {
      applyTemplate: 'Ni kan ansöka om att bli kund hos {name} här',
    },
    footer: {
      description:
        'Inlösenkollen är en informationssida om intelligent betalningsrouting, utvecklad för nordiska handlare och retailföretag.',
      rights: 'Alla rättigheter förbehållna.',
      developedBy: 'Utvecklad av Anton Olsson.',
    },
    disclaimer:
      'Beräkningen är en uppskattning och baseras på de uppgifter som anges. Faktiska kostnader och besparingar kan variera beroende på bland annat kortmix, interchange, scheme fees, inlösenavtal, valutaväxling, minimikostnader, teknisk uppsättning och andra avtalsvillkor. Beräkningen utgör inte ett erbjudande eller en garanti för ett visst pris eller en viss besparing.',
    misc: {
      quickSelect: 'Snabbval',
      customAmount: 'Annat belopp',
      aovHint: 'Genomsnittligt belopp per kortköp — de flesta känner till detta bättre än exakt antal transaktioner.',
      currentFeeHint: 'Den viktigaste siffran — de allra flesta känner till ungefär den här procentsatsen.',
      transactionsAutoNote: 'Beräknas automatiskt: årlig omsättning ÷ AoV',
      fixedFeeLabel: 'Nuvarande fast avgift per transaktion',
      fixedFeeHint: 'Används sällan — lämna på 0 om ni inte har en fast avgift per transaktion.',
      importedAcquirersHeading: 'Importerade inlösare',
      yourAcquirersHeading: 'Era inlösare',
      addAcquirerButton: '+ Lägg till inlösare',
      simplifiedModeNotice:
        'I förenklat läge används det genomsnittliga pris ni angav i steg 1. Routing per korttyp kräver detaljerade priser hos minst en inlösare.',
      noAcquirerNotice:
        'Ingen inlösare vald ännu. Ni kan fortsätta utan att lägga till någon — resultatet visar då 0 kr i besparing eftersom det inte finns något att jämföra mot.',
      consentText:
        'Jag godkänner att mina personuppgifter behandlas för att kontakta mig angående en kostnadsanalys.',
      consentError: 'Du måste godkänna behandling av personuppgifter',
      genericError: 'Något gick fel. Försök igen senare.',
      sendAnotherInquiry: 'Skicka ny förfrågan',
      contactNameLabel: 'Namn',
      emailLabel: 'E-post',
      phoneLabel: 'Telefonnummer',
      annualVolumeApproxLabel: 'Ungefärlig kortomsättning per år',
      annualVolumeApproxPlaceholder: 't.ex. 60 M kr',
      currentAcquirerLabel: 'Nuvarande inlösare',
      posSystemLabel: 'POS-/kassasystem ni använder idag',
      posSystemPlaceholder: 't.ex. Zettle, Shopify POS, egen kassa',
      messageLabel: 'Meddelande',
      messagePlaceholder: 'Berätta gärna mer om er betalningsuppsättning...',
      attachmentLabel: 'Bifoga prislista eller faktura (valfritt)',
      useExampleDataButton: 'Använd exempeldata',
      exampleDataDisclaimer:
        'Exempeldata representerar inte en specifik kund. Använd den som utgångspunkt och justera efter er faktiska transaktionsmix.',
      totalShareLabel: 'Total andel',
      mixGroupSwedish: 'Svenska kort',
      mixGroupInternational: 'EU och internationellt',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },

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
      footnote:
        'A smart way for Nordic merchants and retail companies to lower the cost of in-store card payments — without changing the checkout experience.',
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
      step2Title: 'Step 2: Your transaction mix',
      step2Description:
        'Roughly how much of your card sales comes from each card type? An estimate is fine — you can always adjust it later.',
      step3Title: 'Step 3: Acquiring agreements',
      step3Description:
        'Use your approximate price, import established acquirers with known fees, or enter exact prices per card type if you have them.',
      annualVolume: 'Total card turnover per year',
      averageOrderValue: 'Average Order Value (AoV)',
      annualTransactionsComputed: 'Transactions per year (calculated automatically)',
      currentFee: 'Current average percentage acquiring fee',
      ctaCalculate: 'Show my savings',
      showFixedFees: '+ Add fixed fees to the calculation',
      hideFixedFees: '− Hide fixed fees',
    },
    results: {
      eyebrow: 'Results',
      title: 'Your estimated savings',
      description: 'Results based on the prices and annual volumes provided. All figures are estimates.',
      exampleDataTitle: 'This is an industry estimate – not an actual calculation.',
      exampleDataBody:
        'The result is currently based on general industry prices. Fill in your own details and compare real terms from acquirers to get an accurate savings calculation.',
      exampleDataDismiss: 'Got it, show the result anyway',
    },
    metrics: {
      currentCost: 'Current cost per year',
      routedCost: 'Cost with intelligent routing',
      annualSavings: 'Savings per year',
      percentSavings: 'Percentage cost reduction',
      threeYearSavings: 'Estimated savings over three years',
      tenYearSavings: 'Estimated savings over ten years',
    },
    leadForm: {
      title: 'Want to know what you could actually save?',
      description:
        'Send us your current acquiring prices and transaction volumes and we\u2019ll help you with a more detailed analysis.',
      orgNumberLabel: 'Organization/registration number',
      orgNumberPlaceholder: 'e.g. 556677-8899',
      submit: 'Book a cost analysis',
      submitting: 'Sending...',
      thanksTitle: 'Thank you for your inquiry!',
      thanksBody: 'We will be in touch shortly to book a more detailed cost analysis.',
    },
    catalog: {
      applyTemplate: 'You can apply to become a customer of {name} here',
    },
    footer: {
      description:
        'Inlösenkollen is an information site about intelligent payment routing, developed for Nordic merchants and retail companies.',
      rights: 'All rights reserved.',
      developedBy: 'Developed by Anton Olsson.',
    },
    disclaimer:
      'This calculation is an estimate based on the information provided. Actual costs and savings may vary depending on, among other things, card mix, interchange, scheme fees, acquiring agreements, currency conversion, minimum costs, technical setup, and other contractual terms. This calculation does not constitute an offer or a guarantee of a specific price or saving.',
    misc: {
      quickSelect: 'Quick select',
      customAmount: 'Custom amount',
      aovHint: 'Average amount per card purchase — most people know this better than the exact number of transactions.',
      currentFeeHint: 'The most important figure — most people know roughly this percentage.',
      transactionsAutoNote: 'Calculated automatically: annual turnover ÷ AoV',
      fixedFeeLabel: 'Current fixed fee per transaction',
      fixedFeeHint: 'Rarely used — leave at 0 if you don\u2019t have a fixed fee per transaction.',
      importedAcquirersHeading: 'Imported acquirers',
      yourAcquirersHeading: 'Your acquirers',
      addAcquirerButton: '+ Add acquirer',
      simplifiedModeNotice:
        'In simplified mode, the average price you entered in step 1 is used. Routing per card type requires detailed prices for at least one acquirer.',
      noAcquirerNotice:
        'No acquirer added yet. You can continue without adding one — the result will then show 0 SEK in savings since there is nothing to compare against.',
      consentText:
        'I consent to my personal data being processed to be contacted regarding a cost analysis.',
      consentError: 'You must consent to the processing of personal data',
      genericError: 'Something went wrong. Please try again later.',
      sendAnotherInquiry: 'Send another inquiry',
      contactNameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone number',
      annualVolumeApproxLabel: 'Approximate annual card turnover',
      annualVolumeApproxPlaceholder: 'e.g. 60M SEK',
      currentAcquirerLabel: 'Current acquirer',
      posSystemLabel: 'POS/checkout system you use today',
      posSystemPlaceholder: 'e.g. Zettle, Shopify POS, in-house system',
      messageLabel: 'Message',
      messagePlaceholder: 'Feel free to tell us more about your payment setup...',
      attachmentLabel: 'Attach a price list or invoice (optional)',
      useExampleDataButton: 'Use example data',
      exampleDataDisclaimer:
        'Example data does not represent a specific customer. Use it as a starting point and adjust it to your actual transaction mix.',
      totalShareLabel: 'Total share',
      mixGroupSwedish: 'Swedish cards',
      mixGroupInternational: 'EU and international',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },

  },
  no: {
    nav: {
      home: 'Hjem',
      howItWorks: 'Slik fungerer det',
      calculator: 'Kalkulator',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Intelligent betalingsruting',
      title: 'Betaler dere for mye for kortstransaksjonene deres?',
      subtitle:
        'Se hvor mye dere potensielt kan spare ved å automatisk sende hver transaksjon til den mest fordelaktige innløsningsavtalen.',
      acquirerExplainerTitle: 'Hva er en innløser?',
      acquirerExplainer:
        'En innløser er banken eller betalingspartneren som håndterer kortbetalingen og utbetaler pengene til bedriften. Ulike innløsere har ulike priser avhengig av korttype og avtale, noe som gjør at valg av innløser kan påvirke bedriftens kostnader betydelig.',
      ctaPrimary: 'Se hva dere kan spare',
      ctaSecondary: 'Hvordan fungerer intelligent ruting?',
      footnote:
        'En smart måte for nordiske handelsbedrifter og butikkjeder å redusere kostnadene for kortbetaling i fysisk butikk — uten å endre kundeopplevelsen i kassen.',
    },
    howItWorks: {
      eyebrow: 'Slik fungerer det',
      title: 'Intelligent ruting i tre steg',
      description:
        'Intelligent ruting analyserer hver transaksjon og velger innløsningsavtalen som gir best økonomisk utfall — basert på deres avtaler og konfigurasjon.',
      intro:
        'Mange bedrifter sender i dag alle kortbetalinger til samme innløser fordi det føles enkelt og behagelig. Over tid fører dette ofte til unødvendig høye kostnader, siden ulike innløsere er mer fordelaktige for ulike korttyper. Bedrifter som i stedet jobber smart og bruker intelligent ruting kan optimalisere betalingsflytene sine, redusere kortkostnadene og utnytte eksisterende innløsningsavtaler fullt ut — uten å endre kundeopplevelsen i kassen.',
      diagramTitle: 'Slik velges den mest fordelaktige innløseren',
      diagramSubtitle:
        'Hver transaksjon analyseres individuelt og sendes til innløsningsavtalen som gir lavest totalkostnad for nettopp den korttypen.',
      valueTitle: 'Mer enn bare lavere pris',
      valueSubtitle: 'Intelligent ruting handler om å senke kostnaden — men verdien stopper ikke der.',
      valueFootnote:
        'Mulighetene avhenger av kundens avtaler, tekniske oppsett, marked og hvilke betalingsmetoder som støttes. Ikke alle transaksjoner kan alltid rutes til en hvilken som helst innløser.',
      ctaButton: 'Prøv kalkulatoren',
    },
    calculator: {
      step1Title: 'Steg 1: Bedriftens betalingsvolum',
      step1Description:
        'Angi bedriftens nåværende årlige kortomsetning og omtrentlige innløsningskostnad. Har dere bare en omtrentlig prosentsats i dag, er det godt nok for et første anslag. Intelligent ruting gir størst forskjell for bedrifter og konsern med høy omsetning.',
      step2Title: 'Steg 2: Deres transaksjonsmiks',
      step2Description:
        'Omtrent hvor stor andel av kortsalget kommer fra hver korttype? Et anslag holder fint — dere kan alltid justere senere.',
      step3Title: 'Steg 3: Innløsningsavtaler',
      step3Description:
        'Bruk den omtrentlige prisen deres, importer etablerte innløsere med kjente gebyrer, eller angi eksakte priser per korttype hvis dere har dem.',
      annualVolume: 'Total kortomsetning per år',
      averageOrderValue: 'Gjennomsnittlig ordreverdi (AOV)',
      annualTransactionsComputed: 'Antall transaksjoner per år (beregnes automatisk)',
      currentFee: 'Nåværende gjennomsnittlig prosentvis innløsningsgebyr',
      ctaCalculate: 'Vis besparelsen min',
      showFixedFees: '+ Legg til faste gebyrer i beregningen',
      hideFixedFees: '− Skjul faste gebyrer',
    },
    results: {
      eyebrow: 'Resultat',
      title: 'Deres estimerte besparelse',
      description: 'Resultat basert på oppgitte priser og årsvolum. Alle tall er estimater.',
      exampleDataTitle: 'Dette er et bransjeestimat – ikke en faktisk beregning.',
      exampleDataBody:
        'Resultatet er nå basert på generelle bransjepriser. Fyll inn deres egne opplysninger og sammenlign reelle vilkår fra innløsere for å få en korrekt besparelsesberegning.',
      exampleDataDismiss: 'Jeg forstår, vis resultatet likevel',
    },
    metrics: {
      currentCost: 'Nåværende kostnad per år',
      routedCost: 'Kostnad med intelligent ruting',
      annualSavings: 'Besparelse per år',
      percentSavings: 'Prosentvis kostnadsreduksjon',
      threeYearSavings: 'Beregnet besparelse over tre år',
      tenYearSavings: 'Beregnet besparelse over ti år',
    },
    leadForm: {
      title: 'Vil du vite hva dere faktisk kan spare?',
      description:
        'Send inn deres nåværende innløsningspriser og transaksjonsvolum, så hjelper vi dere med en mer detaljert analyse.',
      orgNumberLabel: 'Organisasjonsnummer',
      orgNumberPlaceholder: 'f.eks. 981 234 567',
      submit: 'Bestill en kostnadsanalyse',
      submitting: 'Sender...',
      thanksTitle: 'Takk for henvendelsen!',
      thanksBody: 'Vi tar kontakt snart for å avtale en mer detaljert kostnadsanalyse.',
    },
    catalog: {
      applyTemplate: 'Dere kan søke om å bli kunde hos {name} her',
    },
    footer: {
      description:
        'Inlösenkollen er en informasjonsside om intelligent betalingsruting, utviklet for nordiske handelsbedrifter og butikkjeder.',
      rights: 'Alle rettigheter forbeholdt.',
      developedBy: 'Utviklet av Anton Olsson.',
    },
    disclaimer:
      'Beregningen er et estimat basert på opplysningene som er oppgitt. Faktiske kostnader og besparelser kan variere avhengig av blant annet kortmiks, interchange, scheme fees, innløsningsavtaler, valutaveksling, minimumskostnader, teknisk oppsett og andre avtalevilkår. Beregningen utgjør ikke et tilbud eller en garanti for en bestemt pris eller besparelse.',
    misc: {
      quickSelect: 'Hurtigvalg',
      customAmount: 'Annet beløp',
      aovHint: 'Gjennomsnittlig beløp per kortkjøp — de fleste kjenner dette bedre enn eksakt antall transaksjoner.',
      currentFeeHint: 'Det viktigste tallet — de fleste kjenner omtrent denne prosentsatsen.',
      transactionsAutoNote: 'Beregnes automatisk: årlig omsetning ÷ AOV',
      fixedFeeLabel: 'Nåværende faste gebyr per transaksjon',
      fixedFeeHint: 'Sjelden brukt — la stå på 0 hvis dere ikke har et fast gebyr per transaksjon.',
      importedAcquirersHeading: 'Importerte innløsere',
      yourAcquirersHeading: 'Deres innløsere',
      addAcquirerButton: '+ Legg til innløser',
      simplifiedModeNotice:
        'I forenklet modus brukes gjennomsnittsprisen dere oppga i steg 1. Ruting per korttype krever detaljerte priser hos minst én innløser.',
      noAcquirerNotice:
        'Ingen innløser valgt ennå. Dere kan fortsette uten å legge til en — resultatet viser da 0 kr i besparelse siden det ikke er noe å sammenligne med.',
      consentText:
        'Jeg samtykker til at mine personopplysninger behandles for å bli kontaktet angående en kostnadsanalyse.',
      consentError: 'Du må samtykke til behandling av personopplysninger',
      genericError: 'Noe gikk galt. Prøv igjen senere.',
      sendAnotherInquiry: 'Send en ny henvendelse',
      contactNameLabel: 'Navn',
      emailLabel: 'E-post',
      phoneLabel: 'Telefonnummer',
      annualVolumeApproxLabel: 'Omtrentlig kortomsetning per år',
      annualVolumeApproxPlaceholder: 'f.eks. 60 mill. kr',
      currentAcquirerLabel: 'Nåværende innløser',
      posSystemLabel: 'POS-/kassesystem dere bruker i dag',
      posSystemPlaceholder: 'f.eks. Zettle, Shopify POS, eget kassesystem',
      messageLabel: 'Melding',
      messagePlaceholder: 'Fortell gjerne mer om betalingsoppsettet deres...',
      attachmentLabel: 'Legg ved prisliste eller faktura (valgfritt)',
      useExampleDataButton: 'Bruk eksempeldata',
      exampleDataDisclaimer:
        'Eksempeldata representerer ikke en spesifikk kunde. Bruk det som utgangspunkt og juster etter deres faktiske transaksjonsmiks.',
      totalShareLabel: 'Total andel',
      mixGroupSwedish: 'Svenske kort',
      mixGroupInternational: 'EU og internasjonalt',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },

  },
  da: {
    nav: {
      home: 'Hjem',
      howItWorks: 'Sådan fungerer det',
      calculator: 'Beregner',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Intelligent betalingsrouting',
      title: 'Betaler I for meget for jeres kortransaktioner?',
      subtitle:
        'Se hvor meget I potentielt kan spare ved automatisk at sende hver transaktion til den mest fordelagtige indløsningsaftale.',
      acquirerExplainerTitle: 'Hvad er en indløser?',
      acquirerExplainer:
        'En indløser er den bank eller betalingspartner, der håndterer kortbetalingen og udbetaler pengene til virksomheden. Forskellige indløsere har forskellige priser afhængigt af korttype og aftale, hvilket betyder at valget af indløser kan påvirke virksomhedens omkostninger betydeligt.',
      ctaPrimary: 'Se hvad I kan spare',
      ctaSecondary: 'Hvordan fungerer intelligent routing?',
      footnote:
        'En smart måde for nordiske handlende og detailvirksomheder at sænke omkostningerne ved kortbetaling i fysisk butik — uden at ændre kundeoplevelsen ved kassen.',
    },
    howItWorks: {
      eyebrow: 'Sådan fungerer det',
      title: 'Intelligent routing i tre trin',
      description:
        'Intelligent routing analyserer hver transaktion og vælger den indløsningsaftale, der giver det bedste økonomiske resultat — baseret på jeres aftaler og konfiguration.',
      intro:
        'Mange virksomheder sender i dag alle kortbetalinger til samme indløser, fordi det føles enkelt og bekvemt. Over tid fører det ofte til unødvendigt høje omkostninger, da forskellige indløsere er mere fordelagtige for forskellige korttyper. Virksomheder, der i stedet arbejder smart og bruger intelligent routing, kan optimere deres betalingsflows, reducere deres kortomkostninger og udnytte deres eksisterende indløsningsaftaler fuldt ud — uden at ændre kundeoplevelsen ved kassen.',
      diagramTitle: 'Sådan vælges den mest fordelagtige indløser',
      diagramSubtitle:
        'Hver transaktion analyseres individuelt og sendes til den indløsningsaftale, der giver den laveste totalomkostning for netop den korttype.',
      valueTitle: 'Mere end bare lavere pris',
      valueSubtitle: 'Intelligent routing handler om at sænke omkostningen — men værdien stopper ikke der.',
      valueFootnote:
        'Mulighederne afhænger af kundens aftaler, tekniske opsætning, marked og hvilke betalingsmetoder der understøttes. Ikke alle transaktioner kan altid routes til en hvilken som helst indløser.',
      ctaButton: 'Prøv beregneren',
    },
    calculator: {
      step1Title: 'Trin 1: Virksomhedens betalingsvolumen',
      step1Description:
        'Angiv virksomhedens nuværende årlige kortomsætning og omtrentlige indløsningsomkostning. Har I kun en omtrentlig procentsats i dag, er det godt nok til et første estimat. Intelligent routing gør størst forskel for virksomheder og koncerner med høj omsætning.',
      step2Title: 'Trin 2: Jeres transaktionsmix',
      step2Description:
        'Cirka hvor stor en andel af jeres kortsalg kommer fra hver korttype? Et estimat er fint — I kan altid justere senere.',
      step3Title: 'Trin 3: Indløsningsaftaler',
      step3Description:
        'Brug jeres omtrentlige pris, importér etablerede indløsere med kendte gebyrer, eller angiv eksakte priser pr. korttype, hvis I har dem.',
      annualVolume: 'Samlet kortomsætning pr. år',
      averageOrderValue: 'Gennemsnitlig ordreværdi (AOV)',
      annualTransactionsComputed: 'Antal transaktioner pr. år (beregnes automatisk)',
      currentFee: 'Nuværende gennemsnitlige procentvise indløsningsgebyr',
      ctaCalculate: 'Vis min besparelse',
      showFixedFees: '+ Tilføj faste gebyrer til beregningen',
      hideFixedFees: '− Skjul faste gebyrer',
    },
    results: {
      eyebrow: 'Resultat',
      title: 'Jeres estimerede besparelse',
      description: 'Resultat baseret på angivne priser og årsvolumener. Alle tal er estimater.',
      exampleDataTitle: 'Dette er et branche-estimat – ikke en faktisk beregning.',
      exampleDataBody:
        'Resultatet er lige nu baseret på generelle branchepriser. Udfyld jeres egne oplysninger og sammenlign reelle vilkår fra indløsere for at få en korrekt besparelsesberegning.',
      exampleDataDismiss: 'Jeg forstår, vis resultatet alligevel',
    },
    metrics: {
      currentCost: 'Nuværende omkostning pr. år',
      routedCost: 'Omkostning med intelligent routing',
      annualSavings: 'Besparelse pr. år',
      percentSavings: 'Procentvis omkostningsreduktion',
      threeYearSavings: 'Beregnet besparelse over tre år',
      tenYearSavings: 'Beregnet besparelse over ti år',
    },
    leadForm: {
      title: 'Vil du vide, hvad I faktisk kan spare?',
      description:
        'Send jeres nuværende indløsningspriser og transaktionsvolumener, så hjælper vi jer med en mere detaljeret analyse.',
      orgNumberLabel: 'CVR-nummer',
      orgNumberPlaceholder: 'f.eks. 12345678',
      submit: 'Book en omkostningsanalyse',
      submitting: 'Sender...',
      thanksTitle: 'Tak for jeres henvendelse!',
      thanksBody: 'Vi vender snart tilbage for at booke en mere detaljeret omkostningsanalyse.',
    },
    catalog: {
      applyTemplate: 'I kan ansøge om at blive kunde hos {name} her',
    },
    footer: {
      description:
        'Inlösenkollen er en informationsside om intelligent betalingsrouting, udviklet til nordiske handlende og detailvirksomheder.',
      rights: 'Alle rettigheder forbeholdes.',
      developedBy: 'Udviklet af Anton Olsson.',
    },
    disclaimer:
      'Beregningen er et estimat baseret på de oplysninger, der er angivet. Faktiske omkostninger og besparelser kan variere afhængigt af blandt andet kortmiks, interchange, scheme fees, indløsningsaftaler, valutaveksling, minimumsomkostninger, teknisk opsætning og andre aftalevilkår. Beregningen udgør ikke et tilbud eller en garanti for en bestemt pris eller besparelse.',
    misc: {
      quickSelect: 'Hurtigvalg',
      customAmount: 'Andet beløb',
      aovHint: 'Gennemsnitligt beløb pr. kortkøb — de fleste kender dette bedre end det nøjagtige antal transaktioner.',
      currentFeeHint: 'Det vigtigste tal — de fleste kender cirka denne procentsats.',
      transactionsAutoNote: 'Beregnes automatisk: årlig omsætning ÷ AOV',
      fixedFeeLabel: 'Nuværende faste gebyr pr. transaktion',
      fixedFeeHint: 'Bruges sjældent — lad stå på 0, hvis I ikke har et fast gebyr pr. transaktion.',
      importedAcquirersHeading: 'Importerede indløsere',
      yourAcquirersHeading: 'Jeres indløsere',
      addAcquirerButton: '+ Tilføj indløser',
      simplifiedModeNotice:
        'I forenklet tilstand bruges gennemsnitsprisen, I angav i trin 1. Routing pr. korttype kræver detaljerede priser hos mindst én indløser.',
      noAcquirerNotice:
        'Ingen indløser valgt endnu. I kan fortsætte uden at tilføje en — resultatet viser så 0 kr i besparelse, da der intet er at sammenligne med.',
      consentText:
        'Jeg accepterer, at mine personoplysninger behandles for at blive kontaktet vedrørende en omkostningsanalyse.',
      consentError: 'Du skal acceptere behandling af personoplysninger',
      genericError: 'Noget gik galt. Prøv igen senere.',
      sendAnotherInquiry: 'Send en ny henvendelse',
      contactNameLabel: 'Navn',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefonnummer',
      annualVolumeApproxLabel: 'Omtrentlig kortomsætning pr. år',
      annualVolumeApproxPlaceholder: 'f.eks. 60 mio. kr',
      currentAcquirerLabel: 'Nuværende indløser',
      posSystemLabel: 'POS-/kassesystem I bruger i dag',
      posSystemPlaceholder: 'f.eks. Zettle, Shopify POS, eget kassesystem',
      messageLabel: 'Besked',
      messagePlaceholder: 'Fortæl os gerne mere om jeres betalingsopsætning...',
      attachmentLabel: 'Vedhæft prisliste eller faktura (valgfrit)',
      useExampleDataButton: 'Brug eksempeldata',
      exampleDataDisclaimer:
        'Eksempeldata repræsenterer ikke en specifik kunde. Brug det som udgangspunkt og juster efter jeres faktiske transaktionsmiks.',
      totalShareLabel: 'Samlet andel',
      mixGroupSwedish: 'Svenske kort',
      mixGroupInternational: 'EU og internationalt',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },

  },
  fi: {
    nav: {
      home: 'Etusivu',
      howItWorks: 'Näin se toimii',
      calculator: 'Laskuri',
      contact: 'Yhteystiedot',
    },
    hero: {
      eyebrow: 'Älykäs maksureititys',
      title: 'Maksatteko liikaa korttitapahtumistanne?',
      subtitle:
        'Katso, kuinka paljon voisitte mahdollisesti säästää lähettämällä jokaisen tapahtuman automaattisesti edullisimpaan korttimaksujen vastaanottosopimukseen.',
      acquirerExplainerTitle: 'Mikä on maksunvälittäjä (acquirer)?',
      acquirerExplainer:
        'Maksunvälittäjä (acquirer) on pankki tai maksukumppani, joka käsittelee korttimaksun ja tilittää rahat yritykselle. Eri maksunvälittäjillä on erilaiset hinnat korttityypin ja sopimuksen mukaan, joten valinta voi vaikuttaa merkittävästi yrityksen kustannuksiin.',
      ctaPrimary: 'Katso, mitä voitte säästää',
      ctaSecondary: 'Miten älykäs reititys toimii?',
      footnote:
        'Fiksu tapa pohjoismaisille kaupan ja vähittäiskaupan yrityksille pienentää myymälässä tapahtuvien korttimaksujen kustannuksia — muuttamatta asiakaskokemusta kassalla.',
    },
    howItWorks: {
      eyebrow: 'Näin se toimii',
      title: 'Älykäs reititys kolmessa vaiheessa',
      description:
        'Älykäs reititys analysoi jokaisen tapahtuman ja valitsee sopimuksen, joka antaa parhaan taloudellisen lopputuloksen — teidän sopimustenne ja asetustenne perusteella.',
      intro:
        'Monet yritykset lähettävät nykyään kaikki korttimaksut samalle maksunvälittäjälle, koska se tuntuu yksinkertaiselta ja kätevältä. Ajan mittaan tämä johtaa usein tarpeettoman korkeisiin kustannuksiin, koska eri maksunvälittäjät ovat edullisempia eri korttityypeille. Yritykset, jotka sen sijaan toimivat fiksusti ja käyttävät älykästä reititystä, voivat optimoida maksuvirtansa, pienentää korttikustannuksiaan ja hyödyntää olemassa olevia sopimuksiaan täysimääräisesti — muuttamatta asiakaskokemusta kassalla.',
      diagramTitle: 'Näin edullisin maksunvälittäjä valitaan',
      diagramSubtitle:
        'Jokainen tapahtuma analysoidaan erikseen ja lähetetään sopimukseen, joka tarjoaa alhaisimman kokonaiskustannuksen juuri kyseiselle korttityypille.',
      valueTitle: 'Muutakin kuin vain alhaisempi hinta',
      valueSubtitle: 'Älykäs reititys ei ole vain kustannusten pienentämistä — arvo ei lopu siihen.',
      valueFootnote:
        'Mahdollisuudet riippuvat asiakkaan sopimuksista, teknisestä toteutuksesta, markkinasta ja tuetuista maksutavoista. Kaikkia tapahtumia ei aina voida reitittää mille tahansa maksunvälittäjälle.',
      ctaButton: 'Kokeile laskuria',
    },
    calculator: {
      step1Title: 'Vaihe 1: Yrityksen maksuvolyymi',
      step1Description:
        'Anna yrityksenne nykyinen vuotuinen korttimyynti ja arvioitu vastaanottokustannus. Jos tiedätte vain karkean prosenttiluvun, se riittää ensimmäiseen arvioon. Älykäs reititys tuo suurimman hyödyn suuren liikevaihdon yrityksille ja konserneille.',
      step2Title: 'Vaihe 2: Korttijakaumanne',
      step2Description:
        'Arviolta kuinka suuri osa korttimyynnistänne tulee kustakin korttityypistä? Arvio riittää — voitte aina tarkentaa myöhemmin.',
      step3Title: 'Vaihe 3: Vastaanottosopimukset',
      step3Description:
        'Käyttäkää arvioitua hintaanne, tuokaa mukaan tunnettuja maksunvälittäjiä tiedossa olevin hinnoin, tai syöttäkää tarkat hinnat korttityypeittäin, jos ne ovat tiedossa.',
      annualVolume: 'Korttimyynti yhteensä vuodessa',
      averageOrderValue: 'Keskimääräinen tilausarvo (AOV)',
      annualTransactionsComputed: 'Tapahtumien määrä vuodessa (lasketaan automaattisesti)',
      currentFee: 'Nykyinen keskimääräinen prosentuaalinen vastaanottomaksu',
      ctaCalculate: 'Näytä säästöni',
      showFixedFees: '+ Lisää kiinteät maksut laskelmaan',
      hideFixedFees: '− Piilota kiinteät maksut',
    },
    results: {
      eyebrow: 'Tulos',
      title: 'Arvioitu säästönne',
      description: 'Tulos perustuu annettuihin hintoihin ja vuosivolyymeihin. Kaikki luvut ovat arvioita.',
      exampleDataTitle: 'Tämä on toimialan arvio – ei todellinen laskelma.',
      exampleDataBody:
        'Tulos perustuu tällä hetkellä yleisiin toimialan hintoihin. Täyttäkää omat tietonne ja vertailkaa maksunvälittäjien todellisia ehtoja saadaksenne tarkan säästölaskelman.',
      exampleDataDismiss: 'Selvä, näytä tulos silti',
    },
    metrics: {
      currentCost: 'Nykyinen kustannus vuodessa',
      routedCost: 'Kustannus älykkäällä reitityksellä',
      annualSavings: 'Säästö vuodessa',
      percentSavings: 'Prosentuaalinen kustannusten lasku',
      threeYearSavings: 'Arvioitu säästö kolmessa vuodessa',
      tenYearSavings: 'Arvioitu säästö kymmenessä vuodessa',
    },
    leadForm: {
      title: 'Haluatko tietää, mitä voisitte oikeasti säästää?',
      description:
        'Lähettäkää nykyiset vastaanottohintanne ja tapahtumavolyyminne, niin autamme teitä tarkemmassa analyysissä.',
      orgNumberLabel: 'Y-tunnus',
      orgNumberPlaceholder: 'esim. 1234567-8',
      submit: 'Varaa kustannusanalyysi',
      submitting: 'Lähetetään...',
      thanksTitle: 'Kiitos yhteydenotostanne!',
      thanksBody: 'Otamme pian yhteyttä varataksemme tarkemman kustannusanalyysin.',
    },
    catalog: {
      applyTemplate: 'Voitte hakea {name}:n asiakkaaksi täältä',
    },
    footer: {
      description:
        'Inlösenkollen on tietosivusto älykkäästä maksureitityksestä, kehitetty pohjoismaisille kaupan ja vähittäiskaupan yrityksille.',
      rights: 'Kaikki oikeudet pidätetään.',
      developedBy: 'Kehittänyt Anton Olsson.',
    },
    disclaimer:
      'Laskelma on arvio, joka perustuu annettuihin tietoihin. Todelliset kustannukset ja säästöt voivat vaihdella muun muassa korttijakauman, interchange-maksujen, korttiyhtiöiden maksujen, vastaanottosopimusten, valuutanvaihdon, vähimmäiskustannusten, teknisen toteutuksen ja muiden sopimusehtojen mukaan. Laskelma ei ole tarjous eikä takuu tietystä hinnasta tai säästöstä.',
    misc: {
      quickSelect: 'Pikavalinta',
      customAmount: 'Muu summa',
      aovHint: 'Keskimääräinen summa korttiostoa kohden — useimmat tietävät tämän paremmin kuin tarkan tapahtumamäärän.',
      currentFeeHint: 'Tärkein luku — useimmat tietävät suunnilleen tämän prosenttiluvun.',
      transactionsAutoNote: 'Lasketaan automaattisesti: vuotuinen liikevaihto ÷ AOV',
      fixedFeeLabel: 'Nykyinen kiinteä maksu per tapahtuma',
      fixedFeeHint: 'Harvoin käytössä — jättäkää arvoksi 0, jos teillä ei ole kiinteää maksua per tapahtuma.',
      importedAcquirersHeading: 'Tuodut maksunvälittäjät',
      yourAcquirersHeading: 'Teidän maksunvälittäjänne',
      addAcquirerButton: '+ Lisää maksunvälittäjä',
      simplifiedModeNotice:
        'Yksinkertaistetussa tilassa käytetään vaiheessa 1 antamaanne keskihintaa. Reititys korttityypeittäin edellyttää yksityiskohtaisia hintoja vähintään yhdeltä maksunvälittäjältä.',
      noAcquirerNotice:
        'Maksunvälittäjää ei ole vielä valittu. Voitte jatkaa lisäämättä yhtään — tulos näyttää tällöin 0 kr säästöä, koska vertailtavaa ei ole.',
      consentText:
        'Hyväksyn, että henkilötietojani käsitellään yhteydenottoa varten kustannusanalyysin sopimiseksi.',
      consentError: 'Sinun täytyy hyväksyä henkilötietojen käsittely',
      genericError: 'Jokin meni pieleen. Yritä myöhemmin uudelleen.',
      sendAnotherInquiry: 'Lähetä uusi tiedustelu',
      contactNameLabel: 'Nimi',
      emailLabel: 'Sähköposti',
      phoneLabel: 'Puhelinnumero',
      annualVolumeApproxLabel: 'Arvioitu korttimyynti vuodessa',
      annualVolumeApproxPlaceholder: 'esim. 60 milj. kr',
      currentAcquirerLabel: 'Nykyinen maksunvälittäjä',
      posSystemLabel: 'Kassajärjestelmä, jota käytätte nyt',
      posSystemPlaceholder: 'esim. Zettle, Shopify POS, oma kassajärjestelmä',
      messageLabel: 'Viesti',
      messagePlaceholder: 'Kertokaa mielellään lisää maksujärjestelystänne...',
      attachmentLabel: 'Liitä hinnasto tai lasku (valinnainen)',
      useExampleDataButton: 'Käytä esimerkkitietoja',
      exampleDataDisclaimer:
        'Esimerkkitiedot eivät edusta tiettyä asiakasta. Käyttäkää niitä lähtökohtana ja mukauttakaa todellisen korttijakaumanne mukaan.',
      totalShareLabel: 'Osuus yhteensä',
      mixGroupSwedish: 'Ruotsalaiset kortit',
      mixGroupInternational: 'EU ja kansainväliset',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },
  },
} as const
