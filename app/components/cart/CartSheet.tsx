import {CartApiQueryFragment} from 'storefrontapi.generated';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {CartMain} from './CartMain';
import {ShoppingCart} from 'lucide-react';
import {useOpenStore} from '~/store/open';
import {useEffect} from 'react';

export default function CartSheet({
  cart,
  cartOpen,
  setCartOpen,
}: {
  cart: CartApiQueryFragment | null;
  cartOpen: boolean;
  setCartOpen: (cartOpen: boolean) => void;
}) {
  return (
    <div>
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetTrigger>
          <ShoppingCart strokeWidth={1.5} />
        </SheetTrigger>
        <SheetContent>
          <CartMain cart={cart} layout="aside" />
        </SheetContent>
      </Sheet>
    </div>
  );
}
