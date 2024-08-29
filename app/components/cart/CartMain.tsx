import {useOptimisticCart} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {CartLineItem} from '~/components/cart/CartLineItem';
import {CartSummary} from './CartSummary';
import CartHeader from './CartHeader';
import CartEmpty from './CartEmpty';
import {useEffect, useRef} from 'react';
import autoAnimate from '@formkit/auto-animate';

export type CartLayout = 'page' | 'aside';

export type CartMainProps = {
  cart: CartApiQueryFragment | null;
  layout: CartLayout;
};

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 */
export function CartMain({layout, cart: originalCart}: CartMainProps) {
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const cart = useOptimisticCart(originalCart);

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const cartHasItems = cart?.totalQuantity! > 0;
  const parent = useRef<HTMLUListElement>(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="flex flex-col h-full gap-2">
      <CartHeader count={cart?.totalQuantity} />
      <CartEmpty hidden={linesCount} layout={layout} />
      <ul ref={parent} className="flex flex-col gap-4 overflow-y-auto">
        {(cart?.lines?.nodes ?? []).map((line) => (
          <CartLineItem key={line.id} line={line} layout={layout} />
        ))}
      </ul>
      {cartHasItems && <CartSummary cart={cart} />}
    </div>
  );
}
