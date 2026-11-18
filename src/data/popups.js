// Message d'information affiché à l'arrivée sur l'accueil.
// `until` : dernier jour d'affichage (inclus). Après cette date, le message disparaît tout seul.
// Pour changer ou retirer le message, modifier ce fichier (ou supprimer <ElectionsPopup /> dans src/pages/index.astro).
export const electionsPopup = {
  id: 'elections-hlm-2026',
  until: '2026-12-15',
  eyebrow: 'Élections Hlm 2026',
  title: 'Pour un logement digne et accessible, votez AFOC.',
  text: "Les locataires HLM élisent leurs représentants entre le 15 novembre et le 15 décembre 2026. La date exacte est fixée par votre bailleur : elle figure sur son courrier.",
  points: [
    'Stop aux hausses injustifiées de loyer',
    'Des charges claires, pas de surprises',
    "Zéro tolérance pour l'insalubrité",
    "Un logement digne, c'est un droit",
  ],
  cta: {
    label: 'Lire notre engagement',
    href: '/logement/elections-hlm-2026-afoc-logement-abordable',
  },
  imageAlt:
    'Affiche de campagne : Élections Hlm 2026, pour un logement digne et accessible, votez AFOC.',
};
