import {useAtomValue} from 'jotai';
import ProductSummary from '~/components/cart/ProductSummary';
import {Separator} from '~/components/ui/separator';
import {getOrderDetails} from '~/functions/getOrderDetails';
import {
  boxesAtom,
  bundleAtom,
  selectedBoxAtom,
  subscriptionAtom,
} from '~/store/bundle';

export default function BundleOrderSummary() {
  const bundle = useAtomValue(bundleAtom);
  const subscription = useAtomValue(subscriptionAtom);
  const boxes = useAtomValue(boxesAtom);
  const selectedBox = useAtomValue(selectedBoxAtom);
  if (!boxes || !selectedBox) return null;
  const luxuryPackaging = boxes[1].id === selectedBox?.id;
  return (
    <div className="border-green flex flex-col items-center p-4 bg-white border rounded-lg">
      <h5 className="font-silk text-2xl uppercase">Bundle summary</h5>
      <Separator />
      <div className="flex flex-col w-full">
        {bundle.length > 0 ? (
          <ProductSummary
            attributes={[
              {
                key: 'Order Details',
                value: getOrderDetails(bundle),
              },
            ]}
            className="py-2"
            start
          />
        ) : (
          <p className="font-silk">Add cookies to your order!</p>
        )}
        <div className="font-silk">
          Order Type:{' '}
          {subscription ? 'Subscription (Delivered every 4 weeks)' : 'One-time'}
        </div>
        <div className="font-silk">
          Packaging: {luxuryPackaging ? 'Luxury' : 'Standard'}
        </div>
      </div>
    </div>
  );
}
