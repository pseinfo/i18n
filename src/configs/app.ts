import type app_generic from '../declarations/namespaces/app.generic';
import type { I18nConfig } from '../types/config';


export interface AppResources {
  'app.generic': app_generic;
}

export type AppNamespaces = [ 'app.generic' ];
export type AppLanguages = [ 'en', 'de', 'fr' ];

export type DefaultNS = 'app.generic';
export type DefaultLanguage = 'en';

export interface AppConfig extends I18nConfig {
  i18next: {
    lng: DefaultLanguage;
    fallbackLng: DefaultLanguage;
    supportedLngs: AppLanguages;
    ns: AppNamespaces;
    defaultNS: DefaultNS;
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
    defaultNS: 'app.generic'
  }
} ) as const satisfies AppConfig;
