import type { Language } from '../declaration';


export interface AstroConfig {
  locales: readonly Language[];
  defaultLocale: Language;
  fallback?: { [ L in Language ]?: Language };
  routing?: {
    prefixDefaultLocale?: boolean;
    redirectToDefaultLocale?: boolean;
    fallbackType?: 'redirect' | 'rewrite';
  };
}
