import {CartApiQueryFragment} from 'storefrontapi.generated';
import CartSheet from '../cart/CartSheet';
import SearchSheet from '../search/SearchSheet';
import HeaderHoverLink from './HeaderHoverLink';
import OffersSheet from '../offers/OffersSheet';

export function HeaderMenuRight({
  cart,
  isLoggedIn,
  cartOpen,
  setCartOpen,
}: {
  cart: CartApiQueryFragment | null;
  isLoggedIn: boolean;
  cartOpen: boolean;
  setCartOpen: (cartOpen: boolean) => void;
}) {
  return (
    <nav className="border-green md:pb-1 md:border-b md:w-full flex items-center justify-end h-full gap-2">
      <HeaderHoverLink to="/" className="md:flex items-center hidden">
        More
      </HeaderHoverLink>
      <OffersSheet />
      <CartSheet cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <SearchSheet />
    </nav>
  );
}
