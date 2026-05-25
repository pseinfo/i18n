import type { Namespace } from '../declaration';


export type I18nextResource = Record< string, any >;

export type I18nextSchema<
  R extends I18nextResource = I18nextResource
> = { [ N in Namespace ]?: R };

export type I18nextResourceLoader<
  R extends I18nextSchema,
  N extends Namespace
> = () => Promise< R[ N ] >;
