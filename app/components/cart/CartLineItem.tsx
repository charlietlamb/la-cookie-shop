import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';
import type {CartLayout} from '~/components/cart/CartMain';
import {CartForm, Image, type OptimisticCartLine} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {Link} from '@remix-run/react';
import {ProductPrice} from '../ProductPrice';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import ProductSummary from './ProductSummary';
import {useSetAtom} from 'jotai';
import {cartAtom} from '~/store/open';
import {Trash2} from 'lucide-react';
import {CartLineQuantity} from './CartLineQuantity';

type CartLine = OptimisticCartLine<CartApiQueryFragment>;

export function CartLineItem({
  layout,
  line,
}: {
  layout: CartLayout;
  line: CartLine;
}) {
  const {id, merchandise, attributes} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const setCartOpen = useSetAtom(cartAtom);

  return (
    <li key={id} className="flex flex-col gap-2">
      <div className="flex gap-2">
        {image && (
          <div className="border-green group relative block h-full border">
            <Image
              alt={title}
              data={image}
              height={100}
              loading="lazy"
              width={100}
              className="aspect-square block"
            />

            <div className="group-hover:flex bg-black/50 absolute inset-0 items-center justify-center hidden cursor-pointer">
              <CartForm
                route="/cart"
                action={CartForm.ACTIONS.LinesRemove}
                inputs={{lineIds: [id]}}
              >
                <button type="submit">
                  <Trash2 strokeWidth={1.5} className="text-red-500" />
                </button>
              </CartForm>
            </div>
          </div>
        )}
        <div>
          <Link
            prefetch="intent"
            to={'/bundle'}
            onClick={() => {
              if (layout === 'aside') {
                setCartOpen(false);
              }
            }}
          >
            <p className="font-silk text-green uppercase">{product.title}</p>
          </Link>
          <ProductPrice price={line?.cost?.totalAmount} />
          <CartLineQuantity line={line} />
        </div>
      </div>
      <ProductSummary attributes={attributes} />
    </li>
  );
}
