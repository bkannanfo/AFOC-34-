// Guides pratiques affichés en tête des pages Logement, Consommation et Conseils.
// Clé = nom de la collection d'articles. Chaque fait a été relu sur la source officielle citée.
// À faire valider par l'AFOC avant diffusion large, et à revoir si la réglementation change.
export const verifiedOn = '18 novembre 2026';

export const guides = {
  consommation: {
    title: 'Un achat ou un service pose problème : par où commencer ?',
    intro: 'Voici la marche à suivre conseillée par la DGCCRF, dans l\'ordre.',
    steps: [
      'Écrivez au professionnel, de préférence en lettre recommandée avec accusé de réception, le plus tôt possible. Dites ce qui ne va pas et ce que vous demandez : remboursement, réparation ou remplacement.',
      'Faites un signalement sur SignalConso. Il est gratuit et il est transmis à l\'entreprise et à la DGCCRF. Il ne remplace pas votre courrier.',
      'Sans réponse ou sans solution deux mois après votre courrier, saisissez le médiateur de la consommation. Le professionnel doit indiquer ses coordonnées. C\'est gratuit. Si vous ne le trouvez pas, un conciliateur de justice peut vous aider.',
      'Si le litige continue, vous pouvez saisir le tribunal : le tribunal de proximité sous 10 000 €, le tribunal judiciaire au-delà. Pour un litige de moins de 5 000 €, SignalConso indique qu\'il faut d\'abord avoir tenté la médiation ou la conciliation.',
    ],
    note: 'Une association de défense des consommateurs peut vous aider dans ces démarches. À l\'AFOC 34, l\'accompagnement juridique est réservé aux adhérents.',
    documents: [
      'Le contrat, le devis ou le bon de commande',
      'La facture ou le ticket de caisse',
      'Les échanges avec le professionnel : courriers, e-mails, captures d\'écran',
      'La preuve de votre courrier recommandé et de sa réception',
      'Des photos du produit ou du défaut',
    ],
    sources: [
      { label: 'SignalConso : vos démarches en cas de litige', url: 'https://signal.conso.gouv.fr/fr/litige' },
      { label: 'DGCCRF : comment régler un litige de la consommation', url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/comment-regler-un-litige-de-la-consommation' },
      { label: 'Annuaire des conciliateurs de justice', url: 'https://www.conciliateurs.fr' },
    ],
  },
  logement: {
    title: 'Un désaccord sur vos charges de locataire : par où commencer ?',
    intro: 'Voici les étapes, d\'après la fiche de service-public.gouv.fr sur les charges locatives.',
    steps: [
      'Demandez par écrit le décompte des charges et leur répartition. Le propriétaire doit faire une régularisation chaque année : il compare les provisions que vous avez payées aux dépenses réelles.',
      'Consultez les justificatifs. Le propriétaire doit les tenir à votre disposition pendant 6 mois après l\'envoi du décompte.',
      'Si vous contestez un montant, écrivez au propriétaire ou à son gestionnaire en indiquant précisément ce qui pose problème. Gardez une preuve d\'envoi.',
      'Si la régularisation n\'a pas été faite avant la fin de l\'année civile suivante, vous pouvez demander à payer en 12 mois, par lettre recommandée avec accusé de réception.',
      'Pour un conseil gratuit et neutre, appelez l\'ADIL de l\'Hérault au 04 67 55 55 55. Un conciliateur de justice peut aussi vous aider gratuitement à trouver un accord.',
    ],
    note: 'Le propriétaire peut réclamer un impayé de charges pendant 3 ans. Le locataire dispose du même délai pour demander le remboursement d\'un trop-versé.',
    documents: [
      'Le bail et ses annexes',
      'Les décomptes de charges et les avis de régularisation',
      'Vos quittances de loyer et vos preuves de paiement',
      'Les courriers échangés avec le propriétaire ou le gestionnaire',
    ],
    sources: [
      { label: 'service-public.gouv.fr : charges à payer par le locataire', url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F947' },
      { label: 'ADIL de l\'Hérault : conseil gratuit sur le logement', url: 'https://www.anil.org/adil-34/' },
    ],
  },
  conseils: {
    title: 'Un désaccord avec la Caf : par où commencer ?',
    intro: 'Voici les étapes décrites par la Caf. Le délai exact est écrit sur la notification de votre décision.',
    steps: [
      'Faites d\'abord une réclamation auprès du service qui gère votre dossier.',
      'Si rien ne bouge, vous pouvez saisir le médiateur de votre Caf : dans votre compte allocataire, choisissez « Contacter ma Caf », puis « saisir le médiateur ».',
      'Pour contester la décision, saisissez la commission de recours amiable de votre Caf dans les deux mois qui suivent la notification. Un courrier motivé avec une copie de la décision suffit. Le recommandé n\'est pas obligatoire, mais il prouve que vous avez agi à temps.',
      'La commission répond dans un délai de deux mois. Sans réponse, la demande est considérée comme rejetée. Vous pouvez alors saisir le tribunal judiciaire dans les deux mois : c\'est gratuit et un avocat n\'est pas obligatoire en première instance.',
    ],
    note: 'Si le désaccord porte sur une décision médicale, comme un taux d\'incapacité, le recours se fait auprès de la MDPH et non de la Caf.',
    documents: [
      'La décision contestée, courrier ou notification',
      'Votre numéro d\'allocataire',
      'Les justificatifs de votre situation : revenus, loyer, composition du foyer',
      'Vos échanges avec la Caf',
    ],
    sources: [
      { label: 'caf.fr : contester une décision (page AAH et AEEH)', url: 'https://www.caf.fr/allocataires/vies-de-famille/articles/aah-aeeh-quels-recours-aupres-de-la-caf' },
    ],
  },
};
