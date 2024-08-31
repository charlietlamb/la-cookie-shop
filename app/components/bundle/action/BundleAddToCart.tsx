import {
  bundleAtom,
  bundleQuantityAtom,
  MAX_QUANTITY,
  selectedBoxAtom,
  selectedVariantAtom,
  subscriptionAtom,
} from '~/store/bundle';
import {Button} from '../../ui/button';
import {useAtomValue, useSetAtom} from 'jotai';
import {AddToCartButton} from '../../AddToCartButton';
import {cartAtom} from '~/store/open';
import {getOrderDetails} from '~/functions/getOrderDetails';
import {useEffect, useState} from 'react';

export default function BundleAddToCart() {
  const bundle = useAtomValue(bundleAtom);
  const selectedVariant = useAtomValue(selectedVariantAtom);
  const selectedBox = useAtomValue(selectedBoxAtom);
  const setCartOpen = useSetAtom(cartAtom);
  const quantity = useAtomValue(bundleQuantityAtom);
  const subscription = useAtomValue(subscriptionAtom);
  const [sellingPlanId, setSellingPlanId] = useState(
    selectedBox?.sellingPlanGroups.nodes[0]?.sellingPlans.nodes[0]?.id,
  );
  useEffect(() => {
    setSellingPlanId(
      selectedBox?.sellingPlanGroups.nodes[subscription ? 1 : 0]?.sellingPlans
        .nodes[0]?.id,
    );
    console.log('---');
    console.log(selectedBox);
    console.log(
      selectedBox?.sellingPlanGroups.nodes[subscription ? 1 : 0]?.sellingPlans
        .nodes[0]?.id,
    );
  }, [selectedBox, subscription]);
  return (
    <AddToCartButton
      disabled={!selectedVariant || !selectedVariant.availableForSale}
      onClick={() => {
        setCartOpen(true);
      }}
      lines={
        selectedVariant
          ? [
              {
                merchandiseId: selectedVariant.id,
                sellingPlanId,
                quantity: 1,
                attributes: [
                  {
                    key: 'Order Details',
                    value: getOrderDetails(bundle),
                  },
                  {
                    key: 'Order Type',
                    value: subscription ? 'Subscription' : 'One-time',
                  },
                ],
                selectedVariant,
              },
            ]
          : []
      }
    >
      <Button
        variant="green"
        className="p-size mt-4"
        disabled={quantity != MAX_QUANTITY}
      >
        Add to cart
      </Button>
    </AddToCartButton>
  );
}
