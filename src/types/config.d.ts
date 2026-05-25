import type { Language, Namespace } from '../declarations';


export type Resource = Record< string, any >;
export type Resources = { [ L in Language ]?: Resource };

export interface I18nConfig {
  i18next: {
    lng: Language;
    fallbackLng: Language;
    supportedLngs: Language[];
    ns: Namespace[];
    defaultNS: Namespace;
    resources: Resources;
    enableSelector: boolean;
    interpolation: {
      escapeValue: boolean;
    }
  };
}
