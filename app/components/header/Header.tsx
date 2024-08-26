import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import {type CartViewPayload, useAnalytics} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import HeaderLogo from './HeaderLogo';
import {HeaderMenuLeft} from './HeaderMenuLeft';
import {HeaderMenuRight} from './HeaderMenuRight';
import CartSheet from '../cart/CartSheet';
import {useSetAtom} from 'jotai';
import {headerAtom} from '~/store/header';

export interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const setHeaderKey = useSetAtom(headerAtom);
  return (
    <header
      className="padding-main border-sand backdrop-blur-sm bg-white/50 fixed top-0 z-50 flex items-center justify-center w-full py-2 border-b"
      onMouseLeave={() => setHeaderKey(null)}
    >
      <HeaderMenuLeft />
      <HeaderLogo />
      <HeaderMenuRight cart={cart} />
    </header>
  );
}
