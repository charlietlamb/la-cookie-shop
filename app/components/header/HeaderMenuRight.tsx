import {Await, Link} from '@remix-run/react';
import {CartApiQueryFragment} from 'storefrontapi.generated';
import CartSheet from '../cart/CartSheet';
import {Suspense} from 'react';
import Loading from '../utils/Loading';
import HeaderLink from './HeaderLink';
import SearchSheet from '../search/SearchSheet';

export function HeaderMenuRight({
  cart,
}: {
  cart: Promise<CartApiQueryFragment | null>;
}) {
  return (
    <nav className="border-sand flex items-end justify-end w-full border-b">
      <HeaderLink to="/shop">Shop</HeaderLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={cart} errorElement="Sign in">
          {(cart) => {
            if (!cart) return <Loading />;
            return <CartSheet cart={cart} />;
          }}
        </Await>
      </Suspense>
      <SearchSheet />
    </nav>
  );
}
