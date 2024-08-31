import {CartApiQueryFragment} from 'storefrontapi.generated';
import CartSheet from '../cart/CartSheet';
import SearchSheet from '../search/SearchSheet';
import HeaderHoverLink from './HeaderHoverLink';
import OffersSheet from '../offers/OffersSheet';

export function HeaderMenuRight({
  cart,
  isLoggedIn,
}: {
  cart: CartApiQueryFragment | null;
  isLoggedIn: boolean;
}) {
  return (
    <nav className="border-green flex items-center justify-end w-full h-full gap-2 pb-1 border-b">
      <HeaderHoverLink to="/" className="flex items-center">
        More
      </HeaderHoverLink>
      <OffersSheet />
      <CartSheet cart={cart} />
      <SearchSheet />
    </nav>
  );
}
