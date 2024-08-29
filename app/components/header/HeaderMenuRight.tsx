import {Await, Link} from '@remix-run/react';
import {CartApiQueryFragment} from 'storefrontapi.generated';
import CartSheet from '../cart/CartSheet';
import {Suspense, useEffect} from 'react';
import Loading from '../utils/Loading';
import HeaderLink from './HeaderLink';
import SearchSheet from '../search/SearchSheet';

export function HeaderMenuRight({
  cart,
  isLoggedIn,
}: {
  cart: CartApiQueryFragment | null;
  isLoggedIn: boolean;
}) {
  return (
    <nav className="border-green flex items-center justify-end w-full gap-2 border-b">
      <HeaderLink to="/shop">Shop</HeaderLink>
      <CartSheet cart={cart} />
      <SearchSheet />
    </nav>
  );
}
