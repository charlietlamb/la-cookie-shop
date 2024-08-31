import HeaderMobileMenuMore from './HeaderMobileMenuMore';
import HeaderMobileMenuOffers from './HeaderMobileMenuOffers';
import HeaderMobileMenuSelect from './HeaderMobileMenuSelect';

export const headerMobileMap = new Map<string | null, React.ReactNode>([
  [null, <HeaderMobileMenuSelect />],
  ['/more', <HeaderMobileMenuMore />],
  ['/offers', <HeaderMobileMenuOffers />],
]);
