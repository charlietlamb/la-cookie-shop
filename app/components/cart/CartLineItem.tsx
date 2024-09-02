import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';
import type {CartLayout} from '~/components/cart/CartMain';
import {CartForm, Image, type OptimisticCartLine} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {Link, useNavigate} from '@remix-run/react';
import {ProductPrice} from '../ProductPrice';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import ProductSummary from './ProductSummary';
import {useSetAtom} from 'jotai';
import {Trash2} from 'lucide-react';
import {CartLineQuantity} from './CartLineQuantity';
import {useOpenStore} from '~/store/open';

type CartLine = OptimisticCartLine<CartApiQueryFragment>;

export function CartLineItem({
  layout,
  line,
}: {
  layout: CartLayout;
  line: CartLine;
}) {
  console.log(line);
  const {id, merchandise, attributes} = line;
  const {product, title, image} = merchandise;
  const {setCartOpen} = useOpenStore();
  return (
    <li key={id} className="flex flex-col gap-2">
      <div className="flex gap-2">
        {image && (
          <div className="group border-green w-32 !aspect-square relative flex items-center justify-center overflow-hidden border">
            <Image alt={title} data={image} loading="lazy" />

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
            <p className="font-silk text-brown uppercase">{product.title}</p>
          </Link>
          <ProductPrice price={line?.cost?.totalAmount} />
          <CartLineQuantity line={line} />
        </div>
      </div>
      {attributes.length > 0 && <ProductSummary attributes={attributes} />}
    </li>
  );
}
