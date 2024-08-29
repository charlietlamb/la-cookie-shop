import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import HeaderLogo from './HeaderLogo';
import {HeaderMenuLeft} from './HeaderMenuLeft';
import {HeaderMenuRight} from './HeaderMenuRight';
import {useSetAtom} from 'jotai';
import {headerAtom} from '~/store/header';

export interface HeaderProps {
  cart: CartApiQueryFragment | null;
  isLoggedIn: boolean;
}

export function Header({isLoggedIn, cart}: HeaderProps) {
  const setHeaderKey = useSetAtom(headerAtom);
  return (
    <header
      className="padding-main border-sand backdrop-blur-sm bg-white/80 sticky top-0 z-50 flex items-center justify-center w-full py-2 border-b"
      onMouseLeave={() => setHeaderKey(null)}
    >
      <HeaderMenuLeft />
      <HeaderLogo />
      <HeaderMenuRight cart={cart} isLoggedIn={isLoggedIn} />
    </header>
  );
}
