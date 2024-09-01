import {CartApiQueryFragment} from 'storefrontapi.generated';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {CartMain} from './CartMain';
import {ShoppingCart} from 'lucide-react';
import {cartAtom} from '~/store/open';
import {useAtom} from 'jotai';
import {cn} from '~/lib/utils';
import useWindowDimensions from '../utils/useWindowDimensions';

export default function CartSheet({
  cart,
  mobile = false,
}: {
  cart: CartApiQueryFragment | null;
  mobile?: boolean;
}) {
  const {width} = useWindowDimensions();
  const [isOpen, setIsOpen] = useAtom(cartAtom);
  if (width < 768 && !mobile) return null;
  if (width >= 768 && mobile) return null;
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
