import type { Language } from '../declarations';


export interface AstroConfig {
  locales: Language[];
  defaultLocale: Language;
  fallback?: Partial< Record< Language, Language > >;
  routing?: {
    prefixDefaultLocale?: boolean;
    redirectToDefaultLocale?: boolean;
    fallbackType?: 'redirect' | 'rewrite';
  };
}
