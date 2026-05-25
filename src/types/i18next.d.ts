import type { Language, Namespace } from '../declarations';


export type I18nextResource = Record< string, any >;
export type I18nextResources = { [ L in Language ]?: I18nextResource };

export interface I18nextConfig {
  lng: Language;
  fallbackLng: Language;
  supportedLngs: Language[];
  ns: Namespace[];
  defaultNS: Namespace;
  resources: I18nextResources;
  enableSelector: boolean;
  interpolation: {
    escapeValue: boolean;
  };
}
