import CartSheet from '~/components/cart/CartSheet';
import SearchSheet from '~/components/search/SearchSheet';
import {CartApiQueryFragment} from 'storefrontapi.generated';

export default function HeaderMobileRight({
  cart,
}: {
  cart: CartApiQueryFragment | null;
}) {
  return (
    <div className="flex items-center justify-end gap-2">
      <CartSheet cart={cart} />
      <SearchSheet />
    </div>
  );
}
