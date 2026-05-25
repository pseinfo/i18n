import type app_generic from '../declarations/namespaces/app.generic';
import type { I18nConfig } from '../types/config';

import de__app_generic from '../locales/de/app.generic';
import en__app_generic from '../locales/en/app.generic';
import fr__app_generic from '../locales/fr/app.generic';


export type AppNamespaces = [ 'app.generic' ];
export type AppLanguages = [ 'en', 'de', 'fr' ];
export type AppDefaultNS = 'app.generic';
export type AppDefaultLanguage = 'en';

export interface AppI18nResources {
  'app.generic': app_generic;
}


export type AppResources = {
  [ L in AppLanguages[ number ] ]: AppI18nResources;
};

export const resources = {
  en: {
    'app.generic': en__app_generic
  },
  de: {
    'app.generic': de__app_generic
  },
  fr: {
    'app.generic': fr__app_generic
  }
} as const satisfies AppResources;


export interface AppConfig extends I18nConfig {
  i18next: {
    lng: AppDefaultLanguage;
    fallbackLng: AppDefaultLanguage;
    supportedLngs: AppLanguages;
    ns: AppNamespaces;
    defaultNS: AppDefaultNS;
    resources: AppResources;
    enableSelector: true;
    interpolation: {
      escapeValue: false;
    }
  }
}

export default ( {
  i18next: {
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: [
      'en',
      'de',
      'fr'
    ],
    ns: [
      'app.generic'
    ],
    defaultNS: 'app.generic',
    resources,
    enableSelector: true,
    interpolation: {
      escapeValue: false
    }
  }
} ) as const satisfies AppConfig;
