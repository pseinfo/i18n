import type { AstroConfig } from './astro';
import type { I18nextConfig } from './i18next';
import type { IntegrationsConfig } from './integrations';


export interface I18nConfig {
  i18next: I18nextConfig;
  astro?: AstroConfig;
  integrations?: IntegrationsConfig;
}
