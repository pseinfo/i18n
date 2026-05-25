import type { Language } from '../declaration';


export interface SitemapConfig {
  defaultLocale: Language;
  locales?: { [ L in Language ]?: string };
}

export interface IntegrationsConfig {
  sitemap?: SitemapConfig;
}
