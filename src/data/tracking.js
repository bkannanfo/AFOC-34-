// Événements de mesure d'audience (attributs data-umami-event).
// Usage : <a href="/contact" {...track('contact', 'hero')}>
export const events = {
  telephone: 'appel-telephone',
  contact: 'contact-clic',
  adhesion: 'adhesion-clic',
  adhesionEnvoi: 'adhesion-envoi',
};

export function track(kind, position) {
  const name = events[kind];
  if (!name) return {};
  return position
    ? { 'data-umami-event': name, 'data-umami-event-position': position }
    : { 'data-umami-event': name };
}

// Déduit l'événement à partir de l'URL d'un lien (nav, pied de page...).
const eventByHref = {
  '/contact': 'contact',
  '/adhesion': 'adhesion',
};

export function trackHref(href, position) {
  if (href.startsWith('tel:')) return track('telephone', position);
  return track(eventByHref[href], position);
}

export function telHref(phone) {
  return 'tel:+33' + phone.replace(/\s+/g, '').replace(/^0/, '');
}
