import type app_generic from '../declarations/namespaces/app.generic';
import type { I18nConfig } from '../types/config';

import de__app_generic from '../locales/de/app.generic';
import en__app_generic from '../locales/en/app.generic';
import fr__app_generic from '../locales/fr/app.generic';


export type AppNamespaces = [ 'app.generic' ];
export type AppLanguages = [ 'en', 'de', 'fr' ];
export type DefaultAppNS = 'app.generic';
export type DefaultAppLanguage = 'en';

export interface Resources {
  'app.generic': app_generic;
}

export type AppResources = {
  [ L in AppLanguages[ number ] ]: Resources;
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
    lng: DefaultAppLanguage;
    fallbackLng: DefaultAppLanguage;
    supportedLngs: AppLanguages;
    ns: AppNamespaces;
    defaultNS: DefaultAppNS;
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
