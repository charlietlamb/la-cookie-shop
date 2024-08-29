import {Attribute, Product} from '@shopify/hydrogen/storefront-api-types';
import {Cookie} from 'lucide-react';
import {cn} from '~/lib/utils';

export default function ProductSummary({
  attributes,
}: {
  attributes: Pick<Attribute, 'key' | 'value'>[];
}) {
  console.log(attributes);
  const orderDetails = attributes[0].value;
  if (!orderDetails) return 'No details found...';
  const orderDetailsArray = orderDetails.split(',');
  return (
    <div className="font-silk grid grid-cols-2 gap-2 text-sm">
      {orderDetailsArray.map((detail, index) => (
        <div
          className={cn(
            'flex items-center gap-1',
            orderDetailsArray.length % 2 == 1 &&
              index == orderDetailsArray.length - 1 &&
              'col-span-2 justify-center',
          )}
          key={detail}
        >
          <Cookie strokeWidth={1} className="text-brown" />
          <p className="leading-none">{detail}</p>
        </div>
      ))}
    </div>
  );
}
