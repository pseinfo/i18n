import type { Languages, Namespaces } from '../declaration';

export type Resource = Record< Namespaces, any >;
export type Resources = { [ L in Languages ]?: Resource };

export interface I18nConfig {
  readonly init: {
    resources: Resources;
    lng: Languages;
    fallbackLng: Languages;
    ns: Namespaces[];
    defaultNS: Namespaces;
    interpolation: {
      escapeValue: false;
    };
  };
  readonly routing: {
    defaultLocale: Languages;
    locales: Languages[];
    routing: {
      prefixDefaultLocale: false;
    };
  };
  readonly sitemap: {
    defaultLocale: Languages;
    locales: { [ L in Languages ]?: string };
  };
}
