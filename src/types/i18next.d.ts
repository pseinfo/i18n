import type { Language, Namespace } from '../declaration';


export type I18nextResource = object;

export type I18nextSchema = {
  [ N in Namespace ]?: I18nextResource;
};

export type I18nextResources = {
  [ L in Language ]?: I18nextSchema;
};

export type I18nextResourceLoader<
  S extends I18nextSchema,
  N extends Namespace
> = () => Promise< S[ N ] >;

export type I18nextResourceLoaders<
  S extends I18nextSchema,
  L extends Language,
  N extends Namespace
> = {
  [ K in L ]: {
    [ NS in N ]:
      I18nextResourceLoader< S, NS >;
  };
};

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
