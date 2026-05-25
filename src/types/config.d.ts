import type { Language, Namespace } from '../declarations';


export interface I18nConfig {
  i18next: {
    lng: Language;
    fallbackLng: Language;
    supportedLngs: Language[];
    ns: Namespace[];
    defaultNS: Namespace;
  };
}
