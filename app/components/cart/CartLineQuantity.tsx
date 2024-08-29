import {OptimisticCartLine} from '@shopify/hydrogen';
import {CartLineUpdateButton} from './CartLineUpdateButton';
import {CartApiQueryFragment} from 'storefrontapi.generated';
import {Button} from '../ui/button';
import {Minus, Plus} from 'lucide-react';
type CartLine = OptimisticCartLine<CartApiQueryFragment>;

export function CartLineQuantity({line}: {line: CartLine}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity, isOptimistic} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
          <Button
            aria-label="Decrease quantity"
            disabled={quantity <= 1 || !!isOptimistic}
            name="decrease-quantity"
            value={prevQuantity}
            variant="ghostBrown"
            size="auto"
          >
            <Minus strokeWidth={1} />
          </Button>
        </CartLineUpdateButton>
        <span className="font-silk mb-0.5 text-xl font-light">{quantity}</span>
        <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
          <Button
            aria-label="Increase quantity"
            name="increase-quantity"
            value={nextQuantity}
            disabled={!!isOptimistic}
            variant="ghostBrown"
            size="auto"
          >
            <Plus strokeWidth={1} />
          </Button>
        </CartLineUpdateButton>
      </div>
    </div>
  );
}
