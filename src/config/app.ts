import type { I18nConfig, Resources } from '../types/config';

import en__app_generic from '../locales/en/app.generic';
import de__app_generic from '../locales/de/app.generic';


export const resources = {
  en: {
    'app.generic': en__app_generic
  },
  de: {
    'app.generic': de__app_generic
  }
} as const satisfies Resources;

export default ( {
  init: {
    resources,
    lng: 'en',
    fallbackLng: 'en',
    ns: [ 'app.generic' ],
    defaultNS: 'app.generic',
    interpolation: {
      escapeValue: false
    }
  },
  routing: {
    defaultLocale: 'en',
    locales: [ 'en', 'de' ],
    routing: {
      prefixDefaultLocale: false
    }
  },
  sitemap: {
    defaultLocale: 'en',
    locales: {
      en: 'en-US',
      de: 'de-DE'
    }
  }
} ) as const satisfies I18nConfig;
