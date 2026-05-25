import app_generic from '../declaration/namespaces/app.generic';


// -- NAMESPACES ---

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
}
