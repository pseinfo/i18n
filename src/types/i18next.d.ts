import type { Language, Namespace } from '../declaration';


export type I18nextResource = Record< string, any >;

export type I18nextSchema<
  R extends I18nextResource = I18nextResource
> = { [ N in Namespace ]?: R };

export type I18nextResources<
  R extends I18nextResource = I18nextResource
> = { [ L in Language ]?: I18nextSchema< R > }

export type I18nextResourceLoader<
  R extends I18nextSchema,
  N extends Namespace
> = () => Promise< R[ N ] >;

interface I18nextBaseConfig {
  lng: Language;
  fallbackLng: Language;
  supportedLngs: readonly Language[];
  defaultNS: Namespace;
  enableSelector: boolean;
  interpolation: {
    escapeValue: boolean;
  };
}

export interface I18nextStaticConfig extends I18nextBaseConfig {
  ns: readonly Namespace[];
  resources: I18nextResources;
}

export interface I18nextDynamicConfig extends I18nextBaseConfig {
  partialBundledLanguages: true;
  ns: readonly [];
  resources: {};
}

export type I18nextConfig =
  | I18nextStaticConfig
  | I18nextDynamicConfig;
