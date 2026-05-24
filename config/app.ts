import en__appGeneric from '../locales/en/app.generic';

import de__appGeneric from '../locales/de/app.generic';


export const resources = {
  en: {
    'app.generic': en__appGeneric
  },
  de: {
    'app.generic': de__appGeneric
  }
} as const;

export const init = {
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: [ 'app.generic' ],
  defaultNS: 'app.generic',
  interpolation: {
    escapeValue: false
  }
} as const;

export const routing = {
  defaultLocale: 'en',
  locales: [ 'en', 'de' ],
  routing: {
    prefixDefaultLocale: false
  }
} as const;

export const sitemap = {
  defaultLocale: 'en',
  locales: {
    en: 'en-US',
    de: 'de-DE'
  }
} as const;
