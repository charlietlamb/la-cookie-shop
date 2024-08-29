import {CartApiQueryFragment} from 'storefrontapi.generated';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {CartMain} from './CartMain';
import {ShoppingCart} from 'lucide-react';
import {cartAtom} from '~/store/open';
import {useAtom} from 'jotai';

export default function CartSheet({cart}: {cart: CartApiQueryFragment | null}) {
  const [isOpen, setIsOpen] = useAtom(cartAtom);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <ShoppingCart strokeWidth={1.5} className="text-brown mb-1" />
      </SheetTrigger>
      <SheetContent>
        <CartMain cart={cart} layout="aside" />
      </SheetContent>
    </Sheet>
  );
}
