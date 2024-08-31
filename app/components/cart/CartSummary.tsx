import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {CartForm, Money, type OptimisticCart} from '@shopify/hydrogen';
import {Separator} from '../ui/separator';
import {Button} from '../ui/button';
import {Input} from '../ui/input';

type CartSummaryProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
};

export function CartSummary({cart}: CartSummaryProps) {
  return (
    <div className="flex flex-col gap-2 mt-auto">
      <Separator className="bg-brown mb-2" />
      <div className="flex flex-col">
        <h4 className="font-silk h4-size text-brown uppercase">Totals</h4>
        <dl className="flex items-center gap-2">
          <dt className="text-brown font-medium">Subtotal:</dt>
          <dd className="font-silk mt-0.5">
            {cart.cost?.subtotalAmount?.amount ? (
              <Money data={cart.cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </dd>
        </dl>
      </div>
      <CartDiscounts discountCodes={cart.discountCodes} />
      <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
    </div>
  );
}
function CartCheckoutActions({checkoutUrl}: {checkoutUrl?: string}) {
  if (!checkoutUrl) return null;

  return (
    <a href={checkoutUrl} target="_self">
      <Button variant="actionSand" className="w-full">
        Continue to Checkout
      </Button>
    </a>
  );
}

function CartDiscounts({
  discountCodes,
}: {
  discountCodes?: CartApiQueryFragment['discountCodes'];
}) {
  const codes: string[] =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({code}) => code) || [];

  return (
    <div>
      {/* Have existing discount, display it with a remove option */}
      <dl hidden={!codes.length}>
        <div>
          <dt>Discount(s)</dt>
          <UpdateDiscountForm>
            <div className="cart-discount">
              <code>{codes?.join(', ')}</code>
              &nbsp;
              <button>Remove</button>
            </div>
          </UpdateDiscountForm>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div className="flex items-center gap-1">
          <Input type="text" name="discountCode" placeholder="Discount code" />
          <Button type="submit" variant="actionGreenInverse">
            Apply
          </Button>
        </div>
      </UpdateDiscountForm>
    </div>
  );
}

function UpdateDiscountForm({
  discountCodes,
  children,
}: {
  discountCodes?: string[];
  children: React.ReactNode;
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}
