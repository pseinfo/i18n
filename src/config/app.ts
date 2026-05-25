import type { AstroConfig } from '../types/astro';
import type { ProjectConfig } from '../types/config';
import type { I18nextConfig, I18nextResourceLoaders } from '../types/i18next';
import type { IntegrationsConfig } from '../types/integrations';

import type app_generic from '../declaration/namespaces/app.generic';
import type app_header from '../declaration/namespaces/app.header';


// --- NAMESPACES ---

export const AppNamespaces = [
  'app.generic',
  'app.header'
] as const;

export type AppNamespaces = typeof AppNamespaces;
export type AppNamespace = AppNamespaces[ number ];

// --- LANGUAGES ---

export const AppLanguages = [
  'en',
  'de'
] as const;

export type AppLanguages = typeof AppLanguages;
export type AppLanguage = AppLanguages[ number ];

// --- DEFAULTS ---

export const AppDefaultNS = 'app.generic' as const;
export type AppDefaultNS = typeof AppDefaultNS;

export const AppDefaultLanguage = 'en' as const;
export type AppDefaultLanguage = typeof AppDefaultLanguage;

// --- SCHEMA ---

export interface AppI18nSchema {
  'app.generic': app_generic;
  'app.header': app_header;
}

// --- RESOURCE LOADERS ---

export type AppResourceLoaders = I18nextResourceLoaders<
  AppI18nSchema, AppLanguage, AppNamespace
>;

export const resourceLoaders = {
  en: {
    'app.generic': () => import( '../locales/en/app.generic' ).then( m => m.default ),
    'app.header': () => import( '../locales/en/app.header' ).then( m => m.default )
  },
  de: {
    'app.generic': () => import( '../locales/de/app.generic' ).then( m => m.default ),
    'app.header': () => import( '../locales/de/app.header' ).then( m => m.default )
  }
} as const satisfies AppResourceLoaders;

// --- I18NEXT CONFIG ---

export const i18nextConfig = {
  partialBundledLanguages: true,
  lng: AppDefaultLanguage,
  fallbackLng: AppDefaultLanguage,
  supportedLngs: AppLanguages,
  ns: [] as const,
  defaultNS: AppDefaultNS,
  resources: {} as const,
  enableSelector: true,
  interpolation: {
    escapeValue: false
  }
} as const satisfies I18nextConfig;

export type AppI18nextConfig = typeof i18nextConfig;

// --- ASTRO CONFIG ---

export const astroConfig = {
  locales: AppLanguages,
  defaultLocale: AppDefaultLanguage,
  routing: {
    prefixDefaultLocale: true,
    redirectToDefaultLocale: true,
    fallbackType: 'redirect'
  }
} as const satisfies AstroConfig;

export const integrationsConfig = {
  sitemap: {
    defaultLocale: AppDefaultLanguage,
    locales: {
      en: 'en-US',
      de: 'de-DE'
    }
  }
} as const satisfies IntegrationsConfig;

export type AppAstroConfig = typeof astroConfig;
export type AppIntegrationsConfig = typeof integrationsConfig;

// --- DEFAULT EXPORT ---

export default ( {
  i18next: i18nextConfig,
  astro: astroConfig,
  integrations: integrationsConfig
} ) as const satisfies ProjectConfig;
